/* ============================================================
   Router, eventos e inicio
   ============================================================ */
const vdApp = { view:'home', clienteId:null, tab:'brief', working:false, stage:0, cmp:null, ocupado:false, mantenerScroll:true };
let vdTimers = [];

/* ---------- utilidades ---------- */
/* actualiza contador y barra de pasos sin volver a pintar el formulario */
function vdRefrescarIndicadores(){
  const c = vdActual(); if(!c) return;
  const box = document.getElementById('vdStepperBox');
  if(box) box.outerHTML = vdStepper(c);
  const bar = document.getElementById('reqBar');
  const cnt = document.getElementById('reqCount');
  if(bar && cnt){
    const b = c.brief;
    const done = [b.producto,b.precio,b.avatar,b.pais,b.promesa,b.objetivo,b.presupuesto]
      .filter(x => String(x).trim()).length;
    bar.style.width = Math.round(done/7*100) + '%';
    cnt.textContent = done + '/7';
  }
}

/* re-render llevando la vista al inicio (navegación) */
function vdIrA(){
  vdApp.mantenerScroll = false;
  vdRender();
  vdApp.mantenerScroll = true;
  try{ window.scrollTo(0, 0); }catch(e){}
}

function vdToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('on');
  clearTimeout(t._tm); t._tm = setTimeout(()=>t.classList.remove('on'), 2000);
}
function vdCopy(txt, silencioso){
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(txt)
      .then(()=>{ if(!silencioso) vdToast('Copiado'); })
      .catch(()=>vdModal(txt));
  } else vdModal(txt);
}
function vdModal(txt){
  const d = document.createElement('div');
  d.className = 'modal';
  d.innerHTML = `<div class="in">
    <div style="font-size:13px;color:#94a0bb;margin-bottom:8px">Selecciona y copia (Ctrl/Cmd + C):</div>
    <textarea></textarea>
    <div style="text-align:right;margin-top:10px"><button class="btn ghost sm" data-close>Cerrar</button></div>
  </div>`;
  document.body.appendChild(d);
  const ta = d.querySelector('textarea') || d.querySelector('input[type=text]'); ta.value = txt;
  setTimeout(()=>{ ta.focus(); ta.select(); }, 40);
  d.querySelector('[data-close]').onclick = ()=>d.remove();
  d.addEventListener('click', e => { if(e.target === d) d.remove(); });
}
/* aplica una respuesta en texto (con o sin JSON) al cliente */
function vdAplicarInvestigacion(c, txt){
  const data = vdParseJSON(txt);
  if(!data){ vdToast('No encontré un JSON válido en ese texto'); return vdModal(txt); }
  const res = vdFusionarInvestigacion(c, data, 'Arena');
  c.research = res.research;
  c.kws = (res.research.kws || []).map(k => ({...k}));
  if(res.anuncios.length) c.ads = res.anuncios;
  if(res.viral && res.viral.length) c.viral = res.viral;
  if(res.reversa && res.reversa.length) c.rev = res.reversa;
  c.piezas = vdBuildPieces(c, 7);
  c.estado = 'entregado';
  vdDB.save();
  vdApp.tab = 'entrega';
  vdRender();
  vdToast('Investigación incorporada · 7 piezas generadas');
}

/* abre la IA elegida con el prompt ya escrito */
const VD_DESTINOS = [
  { id:'chatgpt',    nombre:'ChatGPT',    url:'https://chatgpt.com/?q=' },
  { id:'claude',     nombre:'Claude',     url:'https://claude.ai/new?q=' },
  { id:'perplexity', nombre:'Perplexity', url:'https://www.perplexity.ai/search?q=' },
  { id:'gemini',     nombre:'Gemini',     url:'https://gemini.google.com/app' },
  { id:'copilot',    nombre:'Copilot',    url:'https://copilot.microsoft.com/?q=' },
  { id:'grok',       nombre:'Grok',       url:'https://grok.com/?q=' }
];

function vdAbrirIA(c){
  const prompt = vdPromptInvestigacion(c);
  const d = document.createElement('div');
  d.className = 'modal';
  d.innerHTML = `<div class="in" style="max-width:640px">
    <h3 style="margin:0 0 6px;font-size:15px">Abrir la investigación en una IA</h3>
    <div style="font-size:12.5px;color:#8d99b5;margin-bottom:14px;line-height:1.6">
      Se abre en otra pestaña con el prompt <b>ya escrito</b>: solo pulsas enviar. Cuando te responda, copias su respuesta
      y vuelves aquí a pulsar <b>Traer del portapapeles</b>. Sin llaves, sin contraseñas.
    </div>
    <div class="grid g2">
      ${VD_DESTINOS.map(x => `<button class="btn ghost" data-destino="${x.id}" style="justify-content:flex-start">${x.nombre} ↗</button>`).join('')}
    </div>
    <div class="note" style="margin-top:14px">El prompt también queda copiado en tu portapapeles, por si la IA no admite el texto en la dirección.</div>
    <div style="text-align:right;margin-top:10px"><button class="btn ghost sm" data-close>Cerrar</button></div>
  </div>`;
  document.body.appendChild(d);
  d.addEventListener('click', e => {
    if(e.target === d) d.remove();
    const btn = e.target.closest('[data-destino]');
    if(btn){
      const dest = VD_DESTINOS.find(x => x.id === btn.dataset.destino);
      vdCopy(prompt);
      const full = dest.url + encodeURIComponent(prompt);
      window.open(dest.url.endsWith('=app') ? dest.url : full, '_blank', 'noopener');
      d.remove();
      vdToast('Prompt copiado · pégalo si no aparece escrito');
    }
    if(e.target.closest('[data-close]')) d.remove();
  });
}

function vdModalPegar(titulo, ayuda, cb, simple){
  const d = document.createElement('div');
  d.className = 'modal';
  d.innerHTML = `<div class="in" style="max-width:760px">
    <h3 style="margin:0 0 6px;font-size:15px">${titulo}</h3>
    <div style="font-size:12.5px;color:#8d99b5;margin-bottom:10px;line-height:1.6">${ayuda}</div>
    ${simple ? '<input type="text" style="width:100%" placeholder="">'
             : '<textarea style="min-height:240px;font-family:ui-monospace,Menlo,monospace;font-size:13px"></textarea>'}
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px">
      <button class="btn ghost sm" data-close>Cancelar</button>
      <button class="btn sm" data-ok>Procesar</button>
    </div>
  </div>`;
  document.body.appendChild(d);
  const ta = d.querySelector('textarea') || d.querySelector('input[type=text]');
  setTimeout(()=>ta.focus(), 40);
  d.querySelector('[data-close]').onclick = ()=>d.remove();
  d.addEventListener('click', e => { if(e.target === d) d.remove(); });
  d.querySelector('[data-ok]').onclick = ()=>{ const v = ta.value.trim(); if(!v) return; d.remove(); cb(v); };
}
function vdDownload(nombre, contenido, tipo){
  try{
    const blob = new Blob([contenido], {type: tipo || 'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = nombre;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href), 1000);
    vdToast('Archivo descargado');
  }catch(e){ vdModal(contenido); }
}

/* ---------- render ---------- */
function vdRender(){
  const app = document.getElementById('app');
  const y = (typeof window !== 'undefined' && window.scrollY) || 0;
  const conservar = vdApp.mantenerScroll !== false;
  if(vdApp.working){ app.innerHTML = vdLoadingView(); return; }
  if(vdApp.view === 'config'){ app.innerHTML = vdViewConfig(); return; }
  if(vdApp.view === 'guia'){ app.innerHTML = vdViewGuia(); return; }
  if(vdApp.view === 'bienvenida'){ app.innerHTML = vdViewBienvenida(); return; }
  app.innerHTML = (vdApp.view === 'cliente') ? vdViewCliente() : vdViewHome();
  if(conservar && y > 0 && window.scrollTo){
    window.scrollTo(0, y);
    if(window.requestAnimationFrame) window.requestAnimationFrame(()=>window.scrollTo(0, y));
  }
  document.querySelectorAll('[data-nav]').forEach(b => {
    b.classList.toggle('on', b.dataset.nav === (vdApp.view === 'cliente' ? 'clientes' : 'clientes'));
  });
  if(!vdDB.disponible){
    const w = document.getElementById('warn');
    if(w) w.style.display = 'block';
  }
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ---------- cliente actual ---------- */
function vdActual(){ return vdDB.cliente(vdApp.clienteId); }

/* ---------- eventos ---------- */
document.addEventListener('input', e => {
  const el = e.target;
  const c = vdActual();
  if(!c) return;

  if(el.id === 'audUser'){ c.audUser = el.value; vdDB.save(); return; }

  if(el.dataset.f){
    const k = el.dataset.f;
    if(k === 'ia') c.ia = el.value; else c.brief[k] = el.value;
    c.actualizado = new Date().toISOString();
    vdDB.save();
    const bar = document.getElementById('reqBar');
    const cnt = document.getElementById('reqCount');
    if(bar && cnt){
      const b = c.brief;
      const done = [b.producto,b.precio,b.avatar,b.pais,b.promesa,b.objetivo,b.presupuesto]
        .filter(x => String(x).trim()).length;
      bar.style.width = Math.round(done/7*100) + '%';
      cnt.textContent = done + '/7';
    }
  }

  if(el.dataset.nombre){
    c.nombre = el.value;
    vdDB.save();
  }

  if(el.dataset.t){
    const t = el.dataset.t, i = Number(el.dataset.i), k = el.dataset.k;
    if(c[t] && c[t][i]){ c[t][i][k] = el.value; vdDB.save(); }
  }
});

document.addEventListener('change', e => {
  const el = e.target;
  const c = vdActual();
  if(!c) return;

  if(el.dataset.cambio === 'iaProv'){
    const p = vdIAProv(el.value);
    const m = document.getElementById('iaModel');
    if(p && m && p.modelos[0]) m.value = p.modelos[0];
    const ayuda = document.getElementById('iaAyuda');
    if(ayuda && p) ayuda.textContent = (p.alta ? 'Consigue tu llave en ' + p.alta + ' · ' : '') + (p.nota || '');
    const wrap = document.getElementById('iaBaseWrap');
    if(wrap) wrap.hidden = (el.value !== 'custom');
    return;
  }
  if(el.dataset.cambio === 'iaAsignar'){
    vdIAAsignar(el.dataset.seccion, el.value);
    vdToast(el.value ? 'Asignada' : 'Usará el motor local');
    return vdRender();
  }
  if(el.dataset.chk){
    const arr = c.brief[el.dataset.chk] || [];
    const v = el.dataset.v;
    if(el.checked){ if(arr.indexOf(v) < 0) arr.push(v); }
    else { const i = arr.indexOf(v); if(i > -1) arr.splice(i, 1); }
    c.brief[el.dataset.chk] = arr;
    vdDB.save();
    vdRefrescarIndicadores();   /* sin re-render: no se mueve la pantalla */
  } else if(el.dataset.f && el.tagName === 'SELECT'){
    vdDB.save();
    vdRefrescarIndicadores();
  } else if(el.dataset.t && el.tagName === 'SELECT'){
    vdDB.save();
  }
});

document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]');
  if(!b) return;
  const act = b.dataset.act;
  const c = vdActual();

  if(act === 'home'){ e.preventDefault(); vdApp.view = 'home'; vdApp.clienteId = null; return vdIrA(); }

  if(act === 'nuevo'){
    try{ localStorage.setItem('vd_vio_guia','1'); }catch(e){}
    const nuevo = vdDB.crear('Cliente nuevo');
    vdApp.view = 'cliente'; vdApp.clienteId = nuevo.id; vdApp.tab = 'brief';
    return vdRender();
  }

  if(act === 'demo'){ try{ localStorage.setItem('vd_vio_guia','1'); }catch(e){}
    const d = vdDemo(); vdApp.view = 'cliente'; vdApp.clienteId = d.id; vdApp.tab = 'entrega'; return vdRender(); }

  if(act === 'renombrar'){
    const cl = vdDB.cliente(b.dataset.id); if(!cl) return;
    return vdModalPegar('Nombre del cliente', 'Escribe el nombre y pulsa Procesar.', val => {
      cl.nombre = val.slice(0, 60); vdDB.save(); vdRender(); vdToast('Nombre actualizado');
    }, true);
  }

  if(act === 'borrarCli'){
    const cl = vdDB.cliente(b.dataset.id); if(!cl) return;
    if(!confirm('¿Eliminar «' + cl.nombre + '»? No se puede deshacer.')) return;
    vdDB.eliminar(b.dataset.id); vdToast('Cliente eliminado'); return vdRender();
  }

  if(act === 'abrir'){ vdApp.view = 'cliente'; vdApp.clienteId = b.dataset.id; vdApp.tab = 'brief';
    return vdIrA(); }

  if(act === 'tab'){ vdApp.tab = b.dataset.id; return vdIrA(); }

  if(act === 'config'){ vdApp.view = 'config'; return vdIrA(); }
  if(act === 'guia'){ vdApp.view = 'guia'; return vdIrA(); }
  if(act === 'zoomMas' || act === 'zoomMenos'){
    const y = window.scrollY || 0;
    vdZoomCambiar(act === 'zoomMas' ? 1 : -1);
    setTimeout(()=>window.scrollTo(0, y), 30);
    return;
  }

  if(act === 'publicar'){ const cl = vdActual(); if(cl){ cl.publicado = true; vdDB.save(); vdToast('Lote marcado como publicado'); } return vdRender(); }
  if(act === 'despublicar'){ const cl = vdActual(); if(cl){ cl.publicado = false; vdDB.save(); } return vdRender(); }

  if(act === 'saltarGuia'){ try{ localStorage.setItem('vd_vio_guia','1'); }catch(e){} vdApp.view = 'home'; return vdRender(); }

  if(act === 'investigar'){ return vdInvestigarAhora(); }

  /* ---------- conexiones de IA ---------- */
  if(act === 'iaConectar'){
    const prov = (document.getElementById('iaProv')||{}).value;
    const llave = ((document.getElementById('iaKey')||{}).value || '').trim();
    const modelo = ((document.getElementById('iaModel')||{}).value || '').trim();
    const etiq = ((document.getElementById('iaEtiqueta')||{}).value || '').trim();
    const base = ((document.getElementById('iaBase')||{}).value || '').trim();
    if(!llave){ vdToast('Pega la llave de API'); return; }
    const conn = vdIAConectar(prov, llave, modelo, etiq, base);
    vdToast('Probando la conexión…');
    vdIAProbar(conn).then(r => {
      vdRender();
      vdToast(r.ok ? 'Conexión verificada' : 'No respondió: revisa la llave');
    });
    return;
  }

  if(act === 'iaProbar'){
    const conn = vdIAGet(b.dataset.id); if(!conn) return;
    vdToast('Probando…');
    return vdIAProbar(conn).then(r => { vdRender(); vdToast(r.ok ? 'Conexión verificada' : 'Falló: ' + r.texto.slice(0,60)); });
  }

  if(act === 'iaBorrar'){ vdIABorrar(b.dataset.id); vdToast('Conexión eliminada'); return vdRender(); }

  if(act === 'iaComparar'){
    const a = (document.getElementById('cmpA')||{}).value;
    const bb = (document.getElementById('cmpB')||{}).value;
    if(!a || !bb) return;
    const cli = vdDB.clientes()[0];
    const prompt = cli ? vdPromptInvestigacion(cli) : 'Escribe 5 ganchos de Meta Ads para un negocio local de servicios.';
    vdToast('Consultando las dos IA…');
    return vdIAComparar(prompt, [a, bb]).then(rs => { vdApp.cmp = rs; vdRender(); });
  }

  if(act === 'verSeguridad'){
    return vdModal('SEGURIDAD DE LAS LLAVES\n\n' +
      '· Las llaves se guardan solo en este navegador (localStorage). No pasan por ningún servidor de Visión Digital.\n' +
      '· Van directo a la API del proveedor que elijas (OpenAI, Anthropic, Google u OpenRouter).\n' +
      '· Cada persona que use la app conecta su propia cuenta y paga su propio consumo.\n' +
      '· En un equipo compartido, cualquiera puede verlas: usa llaves con límite de gasto y revócalas al terminar.\n' +
      '· Si abres el archivo con doble clic (file://), algunos proveedores rechazan la llamada por seguridad. En ese caso usa el servidor local (start-local) o la versión publicada en GitHub.');
  }






  /* ---------- fase 4 · medición de la pieza ---------- */
  if(act === 'medModo'){ if(c){ c.medModo = el.dataset.id; vdDB.save(); return vdRender(); } }

  if(act === 'medGuardar'){
    if(!c) return;
    const num = id => { const e2 = document.getElementById(id); const v = parseFloat(String((e2 && e2.value)||'').replace(',','.')); return isNaN(v)?0:v; };
    const txt = id => { const e2 = document.getElementById(id); return ((e2 && e2.value)||'').trim(); };
    const modo = c.medModo || 'org';
    const idPieza = txt('medPieza');
    let m;

    if(modo === 'org'){
      const alc = num('medAlc') || num('medVistas');
      if(!alc){ vdToast('Pon al menos el alcance'); const e3=document.getElementById('medAlc'); if(e3&&e3.focus) e3.focus(); return; }
      m = { modo:'org', red: txt('medRed') || 'Instagram', enlace: txt('medLink'),
        seguidores: num('medSeg'), vistas: num('medVistas'), alcance: num('medAlc'),
        likes: num('medLikes'), comentarios: num('medCom'), compartidos: num('medSh'),
        guardados: num('medSv'), retencion: num('medRet'),
        seguidores_nuevos: num('medNue'), clics: num('medClic'),
        fecha: new Date().toISOString().slice(0,10) };
      if(m.red) c.medRed = m.red;
    } else {
      const imp = num('medImp');
      if(!imp){ vdToast('Pon al menos las impresiones'); const e3=document.getElementById('medImp'); if(e3&&e3.focus) e3.focus(); return; }
      m = { modo:'pago', enlace: txt('medLink'),
        impresiones: imp, alcance: num('medAlc'), repro3s: num('med3s'),
        completas: num('medComp'), clics: num('medClic'),
        gasto: num('medGasto'), conversaciones: num('medConv'),
        fecha: new Date().toISOString().slice(0,10) };
    }

    c.mediciones = c.mediciones || {};
    c.mediciones[idPieza] = m;
    vdRepuntar(c);
    vdDB.save();
    const pz = (c.piezas||[]).find(x => x.id === idPieza);
    vdApp.tab = 'med';
    vdToast('Medición guardada' + (pz ? ' · IC ' + pz.ic + ' (banda ' + pz.banda + ')' : ''));
    return vdRender();
  }

  if(act === 'medOtra'){
    if(!c) return;
    c.medPieza = el.dataset.id;
    return vdRender();
  }

  if(act === 'verPieza'){
    if(!c) return;
    c.verPieza = el.dataset.id;
    vdApp.tab = 'entrega';
    vdRender();
    setTimeout(() => {
      const n = document.getElementById('pieza-' + el.dataset.id);
      if(n && n.scrollIntoView) n.scrollIntoView({block:'start', behavior:'smooth'});
    }, 60);
    return;
  }

  /* ---------- fase 4 · auditoría de redes ---------- */
  if(act === 'audRed'){ if(c){ c.audRed = el.dataset.id; vdDB.save(); return vdRender(); } }

  if(act === 'audCopiar'){
    if(!c) return;
    const inp = document.getElementById('audUser');
    const usr = (inp && inp.value || '').trim();
    if(!usr){ vdToast('Escribe tu usuario o el enlace del perfil'); if(inp && inp.focus) inp.focus(); return; }
    c.audUser = usr; vdDB.save();
    vdCopy(vdPromptAuditoria(c, c.audRed || 'Instagram', usr), true);
    const w = window.open('https://arena.ai', '_blank', 'noopener');
    vdToast(w ? 'Prompt copiado · activa Agent Mode en Arena y pega' : 'Prompt copiado · abre arena.ai a mano');
    return;
  }

  if(act === 'audVerPrompt'){
    if(!c) return;
    const inp = document.getElementById('audUser');
    vdModal(vdPromptAuditoria(c, c.audRed || 'Instagram', (inp && inp.value || '@tuusuario').trim()));
    return;
  }

  if(act === 'audCargar'){
    if(!c) return;
    const ta = document.getElementById('jsonAud');
    const txt = (ta && ta.value || '').trim();
    if(!txt){ vdToast('Pega primero la respuesta de Arena'); if(ta && ta.focus) ta.focus(); return; }
    const r = vdParseAuditoria(txt);
    if(!r.ok){ vdToast(r.error); return; }
    const f = vdFusionarAuditoria(c, r.auditoria, 'Arena');
    vdDB.save();
    vdToast('Auditoría leída · puntaje ' + f.auditoria.puntaje.pct + '/100');
    return vdRender();
  }

  if(act === 'audVolver'){
    if(!c) return;
    if(!confirm('¿Borrar esta auditoría y empezar otra?')) return;
    delete c.auditoria; vdDB.save(); return vdRender();
  }

  if(act === 'audAEntrega'){ vdApp.tab = 'entrega'; return vdIrA(); }

  if(act === 'audCopiarPlan'){
    if(!c || !c.auditoria) return;
    const a = c.auditoria;
    const txt = `PLAN DE ACCIÓN · ${a.perfil.usuario} (${a.perfil.red})\nPuntaje: ${a.puntaje.pct}/100 (${a.puntaje.letra})\n\n` +
      a.recs.map(r => `${r.prioridad}. [${r.plazo}] ${r.accion}\n   ${r.porque}`).join('\n\n');
    vdCopy(txt, true);
    return;
  }

  if(act === 'copiarPromptIA'){ if(c) return vdCopy(vdPromptInvestigacion(c)); }

  if(act === 'abrirArena'){
    if(!c) return;
    vdCopy(vdPromptInvestigacion(c), true);
    const w = window.open('https://arena.ai', '_blank', 'noopener');
    if(!w) vdToast('Pestaña bloqueada · abre arena.ai a mano, el prompt ya está copiado');
    else vdToast('Prompt copiado · activa Agent Mode en Arena y pega con Ctrl+V');
    return;
  }

  if(act === 'copiarPlanos'){
    const pz = (c.piezas||[]).find(x=>x.id===el.dataset.id);
    if(!pz || !pz.guionCompleto) return;
    const g = pz.guionCompleto;
    const txt = g.escenas.map(e =>
      `ESCENA ${e.n} · ${e.t}\nEncuadre: ${e.plano}\nMovimiento de cámara: ${e.mov}\nAcción: ${e.accion}\n` +
      (e.texto && e.texto!=='—' ? `Texto en pantalla: ${e.texto}\n` : '') +
      (e.audio && e.audio!=='—' ? `Audio: ${e.audio}\n` : '') +
      `\nPROMPT DE VIDEO:\n${e.prompt}\n`
    ).join('\n---\n\n');
    vdCopy(`GUIÓN DE PRODUCCIÓN · ${pz.angulo} · ${pz.formato}\n${g.duracion} · ${g.estructura}\n\n${txt}`, true);
    return;
  }

  if(act === 'abrirIA'){ if(c) return vdAbrirIA(c); }

  if(act === 'traerClip'){
    if(!c) return;
    if(!(navigator.clipboard && navigator.clipboard.readText)){
      vdToast('Este navegador no permite leer el portapapeles');
      return vdModalPegar('Pega la respuesta', 'Copia la respuesta de la IA y pégala aquí.', txt => vdAplicarInvestigacion(c, txt));
    }
    vdToast('Leyendo el portapapeles…');
    return navigator.clipboard.readText()
      .then(txt => vdAplicarInvestigacion(c, txt))
      .catch(() => vdModalPegar('No pude leer el portapapeles',
        'Tu navegador pidió permiso o lo bloqueó. Pega la respuesta a mano aquí:', txt => vdAplicarInvestigacion(c, txt)));
  }

  if(act === 'cargarJSON'){
    if(!c) return;
    const ta = document.getElementById('jsonIA');
    const txt = ta && ta.value ? ta.value.trim() : '';
    if(!txt){ vdToast('Pega primero el resultado de Arena'); if(ta && ta.focus) ta.focus(); return; }
    return vdAplicarInvestigacion(c, txt);
  }

  if(act === 'verPrompt'){
    if(!c) return;
    return vdModal(vdPromptInvestigacion(c));
  }

  if(act === 'pegarIA'){
    if(!c) return;
    return vdModalPegar('Pegar la respuesta de una IA',
      'Copia el prompt con el botón <b>Copiar prompt para IA</b>, pégalo en Arena, ChatGPT, Claude o Gemini, y trae aquí la respuesta completa. ' +
      'El sistema busca el JSON dentro del texto, aunque venga con explicaciones o en un bloque de código.',
      txt => vdAplicarInvestigacion(c, txt));
  }

  if(act === 'generar'){
    if(!c) return;
    const faltan = ['producto','precio','avatar','promesa'].filter(k => !String(c.brief[k]||'').trim());
    if(faltan.length){ vdToast('Completa el briefing: faltan ' + faltan.length + ' datos clave'); vdApp.tab = 'brief'; return vdRender(); }
    c.piezas = vdBuildPieces(c, 7);
    c.estado = 'entregado';
    vdDB.save();
    vdApp.tab = 'entrega';
    vdRender();
    return vdToast('7 piezas generadas');
  }

  

  if(act === 'del'){
    if(!c) return;
    c[b.dataset.t].splice(Number(b.dataset.i), 1);
    vdDB.save(); return vdRender();
  }
});

/* ---------- investigación automática ---------- */
function vdInvestigarAhora(){
  const c = vdActual(); if(!c) return;
  const faltan = ['producto','precio','avatar','promesa'].filter(k => !String(c.brief[k]||'').trim());
  if(faltan.length >= 3){
    vdToast('Completa el briefing primero: faltan ' + faltan.length + ' datos clave');
    vdApp.tab = 'brief'; return vdRender();
  }

  vdTimers.forEach(clearTimeout); vdTimers = [];
  vdApp.working = true; vdApp.stage = 0;
  vdRender();

  const dur = [800, 1000, 950, 1050, 900, 850];
  let acc = 0;
  VD_STAGES.forEach((_, i) => {
    vdTimers.push(setTimeout(() => {
      document.querySelectorAll('.stage').forEach((el, j) => {
        el.classList.toggle('on', j === i);
        el.classList.toggle('done', j < i);
      });
      const bar = document.getElementById('loadBar');
      if(bar) bar.style.width = Math.round((i+1)/VD_STAGES.length*100) + '%';
    }, acc));
    acc += dur[i];
  });

  const conn = vdIADe('investigacion');

  vdTimers.push(setTimeout(async () => {
    if(conn){
      const bar = document.getElementById('loadBar');
      if(bar) bar.style.width = '85%';
      let resultado = null;
      try{ resultado = await vdInvestigarConIA(c, conn); }
      catch(e){ resultado = { ok:false, error: e.message }; }

      if(resultado && resultado.ok){
        c.research = resultado.research;
        if(!(c.kws||[]).length) c.kws = c.research.kws.slice(0, 12).map(k => ({...k}));
        if(resultado.anuncios.length) c.ads = resultado.anuncios;
        if(resultado.viral && resultado.viral.length) c.viral = resultado.viral;
        if(resultado.reversa && resultado.reversa.length) c.rev = resultado.reversa;
      } else {
        c.research = vdInvestigar(c);
        c.research.aviso = resultado.error || 'La IA no devolvió un formato válido: se usó el motor local.';
        if(!(c.kws||[]).length) c.kws = c.research.kws.slice(0, 12).map(k => ({...k}));
      }
    } else {
      c.research = vdInvestigar(c);
      if(!(c.kws||[]).length) c.kws = c.research.kws.slice(0, 12).map(k => ({...k}));
    }

    c.piezas = vdBuildPieces(c, 7);
    c.estado = 'entregado';
    vdDB.save();
    vdApp.working = false;
    vdApp.tab = 'entrega';
    vdRender();
    vdToast(conn ? 'Investigación con ' + conn.etiqueta + ' · 7 piezas' : 'Investigación lista · 7 piezas');
  }, acc + 350));
}

/* ---------- tamaño de letra ---------- */
const VD_ZOOM = [1, 1.12, 1.25, 1.4];
function vdZoomActual(){
  try{ return Number(localStorage.getItem('vd_zoom_v1')) || 0; }catch(e){ return 0; }
}
function vdZoomAplicar(){
  const i = vdZoomActual();
  try{
    if(document.documentElement) document.documentElement.style.fontSize = '';
    if(document.body) document.body.style.zoom = VD_ZOOM[i] || 1;
  }catch(e){}
  const et = document.getElementById('zoomNivel');
  if(et) et.textContent = ['Normal','Grande','Muy grande','Enorme'][i] || 'Normal';
}
function vdZoomCambiar(delta){
  let i = vdZoomActual() + delta;
  if(i < 0) i = 0; if(i > VD_ZOOM.length - 1) i = VD_ZOOM.length - 1;
  try{ localStorage.setItem('vd_zoom_v1', String(i)); }catch(e){}
  vdZoomAplicar();
  vdToast('Tamaño: ' + ['Normal','Grande','Muy grande','Enorme'][i]);
}

/* ---------- inicio ---------- */
(function init(){
  vdDB.load();
  try{ if(!vdDB.clientes().length && !localStorage.getItem('vd_vio_guia')) vdApp.view = 'bienvenida'; }catch(e){}
  vdIACargar();
  vdZoomAplicar();
  const logo = document.getElementById('logo');
  if(logo) logo.src = VD_LOGO;
  vdRender();
})();
