/* ============================================================
   Generador del lote: 7 (o 14) piezas rankeadas por IC.
   Combina el diccionario (content.js) con la evidencia real (ic.js).
   ============================================================ */

/* El plan sale de los ángulos que detectó la investigación, no de una lista fija.
   Si no hay investigación, se usa el plan estándar. */
const VD_FORMATO_ROT = ['Video UGC','Estático','Carrusel','Video demo','Testimonio'];
const VD_DEF_ANGULO = {
  'Evitar dolor o error':      {f:'Video UGC',  c:'2 · Consciente del problema', q1:'espejo',  q2:'directo'},
  'Antes/Después implícito':   {f:'Carrusel',   c:'3 · Consciente de la solución', q1:'antesdespues', q2:'micro'},
  'Historia personal':         {f:'Video UGC',  c:'2 · Consciente del problema', q1:'historia', q2:'directo'},
  'Miedo a perder':            {f:'Estático',   c:'2 · Consciente del problema', q1:'costo',   q2:'directo'},
  'Comparativa':               {f:'Carrusel',   c:'4 · Consciente del producto', q1:'contraintuitivo', q2:'micro'},
  'Pertenencia':               {f:'Video UGC',  c:'3 · Consciente de la solución', q1:'prueba', q2:'espejo'},
  'Estatus':                   {f:'Video UGC',  c:'3 · Consciente de la solución', q1:'historia', q2:'prueba'},
  'Oferta / urgencia':         {f:'Estático',   c:'5 · Muy consciente', q1:'directo', q2:'micro'},
  'Micro-especificidad':       {f:'Estático',   c:'4 · Consciente del producto', q1:'micro', q2:'directo'},
  'Autoridad':                 {f:'Video demo', c:'3 · Consciente de la solución', q1:'autoridad', q2:'demo'}
};

function vdPlanDesde(c, total){
  const r = c.research;
  if(!r || !(r.angulos || []).length) return VD_PLAN.slice(0, total);

  const ordenados = r.angulos.slice().sort((a,b) => (b.fuerza||0) - (a.fuerza||0));
  const plan = [], usados = {};

  ordenados.forEach((ang, i) => {
    if(plan.length >= total) return;
    const nombre = ang.angulo;
    if(usados[nombre]) return;

    const base = VD_PLAN.find(p => p.a === nombre);
    if(base){ plan.push(base); usados[nombre] = 1; return; }

    const def = VD_DEF_ANGULO[nombre] || {
      f: VD_FORMATO_ROT[i % VD_FORMATO_ROT.length],
      c: '3 · Consciente de la solución', q1:'directo', q2:'espejo'
    };
    const fuerza = ang.fuerza || 60;
    const techo = Math.max(60, Math.min(99, fuerza));
    plan.push({
      a: nombre, f: def.f, c: def.c, q1: def.q1, q2: def.q2,
      tier: fuerza >= 80 ? 'A' : 'B',
      ev: [techo - 6, techo], es: [techo - 12, techo - 2], eo: [techo - 14, techo - 4]
    });
    usados[nombre] = 1;
  });

  /* si la investigación trajo menos ángulos que piezas, se completa con el plan estándar */
  VD_PLAN.forEach(p => { if(plan.length < total && !usados[p.a]){ plan.push(p); usados[p.a] = 1; } });
  return plan.slice(0, total);
}

function vdBuildPieces(c, n){
  const total = n || 7;
  const plan = vdPlanDesde(c, total);
  const t = vdTokens(c);
  const ctas = VD_CTAS[c.brief.objetivo] || VD_CTAS['Ventas'];
  const comp = vdCompliance(c);

  const piezas = plan.map((p, i) => {
    const calc = vdCalcIC(c, p, i);
    const g1 = VD_ARQ[p.q1](t);
    const g2 = VD_ARQ[p.q2](t);
    const g3 = VD_ARQ[p.q1 === 'directo' ? 'espejo' : 'directo'](t);

    /* si la IA escribió un copy para este ángulo, manda el de ella */
    const cp = ((c.research && c.research.copys) || []).find(x => x.angulo === p.a);
    /* los tres ganchos nunca se repiten: se completa con arquetipos distintos */
    const candidatos = [ (cp && cp.gancho) || g1, g2, g3,
      VD_ARQ.micro(t), VD_ARQ.curiosidad(t), VD_ARQ.contraintuitivo(t),
      VD_ARQ.prueba(t), VD_ARQ.autoridad(t), VD_ARQ.antesdespues(t) ];
    const hooks = [];
    candidatos.forEach(h => { if(h && hooks.indexOf(h) < 0 && hooks.length < 3) hooks.push(h); });
    const copyFinal = cp && cp.copy ? cp.copy : `${g1} ${VD_cap(t.meca)}. ${VD_cap(t.promesa)}.`;
    const ctaFinal = cp && cp.cta ? cp.cta : null;
    const piezaTmp = { ganchos: hooks, brief: c.brief };
    return {
      n: i + 1,
      id: 'p' + (i+1) + '-' + vdSlug(p.a),
      angulo: p.a, formato: p.f, conciencia: p.c, tier: p.tier,
      ganchos: hooks,
      copy: copyFinal,
      guion: vdGuion(p.f, t, ctas),
      guionCompleto: vdGuionCompleto(p.f, t, ctas, piezaTmp),
      ctas: [ctaFinal || ctas[0], ctas[1]],
      prueba: (c.brief.prueba||[]).length
        ? 'Usar el activo disponible: ' + (c.brief.prueba||[]).join(', ') + '.'
        : 'Define el activo de prueba antes de producir: sin prueba, la promesa no se sostiene.',
      img: vdPromptImg(p.f, t, i),
      vid: vdPromptVid(p.f, t),
      hip: `Si "${p.a.toLowerCase()}" está funcionando en ${t.pais}, esta pieza debería superar 25% de Hook Rate y 15% de Hold Rate con un costo por resultado menor al promedio de la cuenta.`,
      metrica: (p.f==='Estático' || p.f==='Carrusel')
        ? 'CTR ≥ 1,5% · día 3: cortar si el CTR es menor a 0,8%'
        : 'Hook Rate ≥ 25% · Hold Rate ≥ 15% · día 3: cortar si el Hook Rate es menor a 20%',
      comp: comp, brief: c.brief,
      ic: calc.ic, icBase: calc.ic, banda: calc.banda, sub: calc.sub, pens: calc.pens, bruto: calc.bruto,
      fuente: calc.fuente, referencias: calc.referencias, virales: calc.virales, porIA: !!calc.porIA
    };
  });

  return piezas.sort((a,b) => b.ic - a.ic).map((p, i) => { p.rank = i + 1; return p; });
}

function vdICPromedio(piezas){
  if(!piezas.length) return 0;
  return Math.round(piezas.reduce((s,p)=>s+p.ic, 0) / piezas.length);
}

function vdMarkdown(c){
  const p = c.piezas || [];
  let out = `[Entrega generada con AdForge · Content & Ads Studio — Visión Digital]\n\n`;
  out += `# ${c.nombre}\n\n`;
  out += `Producto: ${c.brief.producto}\nPaís: ${c.brief.pais}\nObjetivo: ${c.brief.objetivo}\n`;
  out += `Piezas: ${p.length} · IC promedio: ${vdICPromedio(p)}\n\n`;
  p.forEach(x => {
    out += `\n---\n\n## #${x.rank} · ${x.angulo} · ${x.formato} — IC ${x.ic} (banda ${x.banda})\n`;
    out += `Conciencia: ${x.conciencia} · Perfil: ${x.tier === 'A' ? 'Ancla' : x.tier === 'B' ? 'Adaptación' : 'Disruptiva'}\n\n`;
    out += `**Ganchos**\n1. ${x.ganchos[0]}\n2. ${x.ganchos[1]}\n3. ${x.ganchos[2]}\n\n`;
    const g = x.guionCompleto;
    out += `**Título:** ${g && g.titulo ? g.titulo : x.angulo}\n\n`;
    out += `**Copy:** ${x.copy}\n\n`;
    if(g){
      out += `**Gancho viral:** ${g.gancho.viral}\n\n**Gancho visual:** ${g.gancho.visual}\n\n**Gancho verbal:** ${g.gancho.verbal}\n\n`;
      if(g.gancho.texto) out += `**Texto en pantalla:** «${g.gancho.texto}»\n\n`;
      out += `**Estructura:** ${g.duracion} · ${g.estructura}\n\n`;
      out += `**Parlamento**\n`;
      (g.parlamento||[]).forEach(l => { out += `- **${l.t}** — ${l.dice}\n`; });
      out += `\n**Escenas y cámara**\n`;
      (g.escenas||[]).forEach(e => {
        out += `\n### Escena ${e.n} · ${e.t}\n`;
        out += `- **Encuadre:** ${e.plano}\n- **Movimiento de cámara:** ${e.mov}\n- **Acción:** ${e.accion}\n`;
        if(e.texto && e.texto !== '—') out += `- **Texto en pantalla:** ${e.texto}\n`;
        if(e.audio && e.audio !== '—') out += `- **Audio:** ${e.audio}\n`;
        out += `- **Prompt de video:** ${e.prompt}\n`;
      });
      out += `\n**Cómo grabarlo**\n${g.produccion.map(l => '- ' + l).join('\n')}\n\n`;
      out += `**Qué evitar**\n${g.errores.map(l => '- ' + l).join('\n')}\n\n`;
    } else {
      out += `**Guion**\n${x.guion.map(l => '- ' + l).join('\n')}\n\n`;
    }
    out += `**CTAs:** ${x.ctas[0]} / ${x.ctas[1]}\n\n`;
    out += `**Prueba:** ${x.prueba}\n\n**Prompt de imagen:** ${x.img}\n\n**Prompt de video:** ${x.vid}\n\n`;
    out += `**Hipótesis:** ${x.hip}\n\n**Métrica:** ${x.metrica}\n\n`;
    if(x.medicion){
      const sf = vdSemaforo(x.medicion), lc = vdLecturaMedicion(x, x.medicion);
      out += `**Resultado medido (${x.medicion.fecha || ''}):** IC ${x.icBase != null ? x.icBase : x.ic} → **${x.ic}** (banda ${x.banda})${x.medicion.enlace ? ' · ' + x.medicion.enlace : ''}\n\n`;
      if(sf.length){
        out += `| Métrica | Valor | Meta | Estado |\n|---|---|---|---|\n`;
        sf.forEach(f => { out += `| ${f.label} | ${f.valor}${f.und==='%'?'%':f.und==='US$'?' US$':''} | ${f.meta} | ${f.estado==='ok'?'verde':f.estado==='mid'?'ámbar':'rojo'} |\n`; });
      }
      out += `\n**La lectura:** ${lc.lectura}\n\n**Qué hacer:** ${lc.accion}\n\n`;
    }
    out += `**Compliance (${x.comp.nivel}):** ${x.comp.nota}\n`;
  });
  const k = vdKPIs(c);
  out += `\n---\n\n## Los KPIs que deciden si esto funciona\n\n`;
  out += `Objetivo de campaña: ${k.objetivo}\n\n`;
  out += `| KPI | Qué es | Cómo se calcula | Meta |\n|---|---|---|---|\n`;
  k.filas.forEach(r => { out += `| **${r.k}** | ${r.q} | ${r.f} | ${r.meta} |\n`; });
  out += `\n${k.filas[0].nota}\n\n${k.regla} ${k.umbral}\n`;
  out += `\n---\n_AdForge · Content & Ads Studio · Visión Digital_`;
  return out;
}

function vdSlug(s){
  return String(s||'cliente').toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40) || 'cliente';
}
