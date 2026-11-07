/* ============================================================
   Motor de investigación automática
   Genera el expediente completo a partir del briefing:
   consultas verificables, keywords, ángulos detectados y enlaces
   directos para comprobar cada dato en la fuente original.
   ============================================================ */

const VD_PAIS_COD = {
  'México':'MX','Estados Unidos':'US','Colombia':'CO','Venezuela':'VE','Argentina':'AR','Chile':'CL',
  'Perú':'PE','España':'ES','Ecuador':'EC','República Dominicana':'DO','Panamá':'PA','Guatemala':'GT',
  'Costa Rica':'CR','Uruguay':'UY','Bolivia':'BO','Paraguay':'PY','Honduras':'HN','El Salvador':'SV',
  'Nicaragua':'NI','Puerto Rico':'PR'
};

/* ---------- enlaces verificables ---------- */
function vdLinkAdLibrary(q, pais){
  const c = VD_PAIS_COD[pais] || 'US';
  return 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=' + c +
         '&q=' + encodeURIComponent(q) + '&search_type=keyword_unordered&media_type=all';
}
function vdLinkTikTok(q){ return 'https://www.tiktok.com/search?q=' + encodeURIComponent(q); }
function vdLinkInstagram(q){ return 'https://www.instagram.com/explore/search/keyword/?q=' + encodeURIComponent(q); }
function vdLinkYouTube(q){ return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q) + '&sp=CAM%253D'; }
function vdLinkTrends(q, pais){
  const c = VD_PAIS_COD[pais] || 'US';
  return 'https://trends.google.com/trends/explore?geo=' + c + '&q=' + encodeURIComponent(q);
}
function vdLinkGoogle(q){ return 'https://www.google.com/search?q=' + encodeURIComponent(q); }

/* ---------- utilidades de texto ---------- */
function vdWords(s){
  return String(s||'').toLowerCase()
    .replace(/[.,;:()"“”¿?¡!]/g,' ')
    .split(/\s+/).filter(w => w.length > 3);
}
function vdClean(s){ return String(s||'').trim().replace(/\s+/g,' '); }
/* las búsquedas de la Biblioteca funcionan mejor con 3-6 palabras */
function vdShort(s, n){
  const w = vdClean(s).split(' ').filter(Boolean);
  return w.length > (n||6) ? w.slice(0, n||6).join(' ') : w.join(' ');
}

/* ---------- generación del expediente ---------- */
function vdInvestigar(c){
  const b = c.brief || {};
  const t = vdTokens(c);
  const pais = b.pais || 'México';

  /* 1 · consultas para la Biblioteca de Anuncios */
  const semillas = [];
  const push = (q, tipo) => {
    q = vdShort(q, 6);
    if(q.length > 2 && !semillas.some(s => s.q.toLowerCase() === q.toLowerCase())) semillas.push({q, tipo});
  };
  push(b.subnicho, 'nicho exacto');
  push(b.producto, 'producto');
  push(b.dolor, 'dolor');
  push(b.deseo, 'deseo');
  push(b.mecanismo, 'mecanismo');
  if(b.producto){ push('curso ' + b.producto, 'oferta'); push('servicio ' + b.producto, 'oferta'); }
  if(b.subnicho){ push('agencia ' + b.subnicho, 'competencia'); push('experto en ' + b.subnicho, 'competencia'); }
  if(b.dolor) push('solución para ' + b.dolor, 'dolor');
  if(b.deseo) push(b.deseo + ' rápido', 'deseo');
  push(t.nicho + ' antes y después', 'prueba');
  push(t.nicho + ' opiniones', 'prueba');
  push(t.nicho + ' gratis', 'oferta');
  if((b.referencias||'').trim()){
    (b.referencias||'').split(/[,;\n]/).map(s => s.trim()).filter(Boolean).slice(0,4)
      .forEach(r => push(r.replace(/^@/,''), 'competidor declarado'));
  }

  const consultas = semillas.slice(0, 16).map(s => ({
    q: s.q,
    tipo: s.tipo,
    ads: vdLinkAdLibrary(s.q, pais),
    tiktok: vdLinkTikTok(s.q),
    instagram: vdLinkInstagram(s.q),
    youtube: vdLinkYouTube(s.q),
    trends: vdLinkTrends(s.q, pais)
  }));

  /* 2 · keywords con intención */
  const kws = [];
  const addKw = (termino, fuente, intencion, uso) => {
    const tt = vdClean(termino);
    if(tt.length < 3 || kws.some(k => k.termino.toLowerCase() === tt.toLowerCase())) return;
    kws.push({termino: tt, fuente, intencion, uso});
  };
  if(b.dolor){
    addKw('cómo resolver ' + b.dolor, 'Google', 'Informativa', 'Gancho');
    addKw('por qué ' + b.dolor, 'AnswerThePublic', 'Informativa', 'Objeción');
    addKw(b.dolor + ' solución', 'IA', 'Comercial', 'Gancho');
  }
  if(b.deseo){
    addKw(b.deseo, 'IA', 'Comercial', 'Gancho');
    addKw(b.deseo + ' en poco tiempo', 'Google', 'Comercial', 'Cuerpo');
  }
  if(b.producto){
    addKw(b.producto + ' precio', 'Google', 'Transaccional', 'Landing');
    addKw('opiniones de ' + b.producto, 'Google', 'Comparación', 'Objeción');
    addKw(b.producto + ' funciona', 'TikTok', 'Comercial', 'Gancho');
  }
  if(b.subnicho){
    addKw('mejor ' + b.subnicho, 'Google', 'Comparación', 'Cuerpo');
    addKw(b.subnicho + ' para principiantes', 'YouTube', 'Informativa', 'Cuerpo');
    addKw(b.subnicho + ' vale la pena', 'Reddit', 'Comparación', 'Objeción');
  }
  if(b.mecanismo) addKw(b.mecanismo, 'IA', 'Informativa', 'Cuerpo');
  if((b.objecion||b.restricciones||'').trim()) addKw(vdClean(b.restricciones), 'Google', 'Informativa', 'Objeción');
  addKw(t.nicho + ' antes y después', 'TikTok', 'Comercial', 'Gancho');
  addKw(t.nicho + ' resultados reales', 'Instagram', 'Comercial', 'Gancho');

  /* 3 · ángulos detectados con su razón */
  const angulos = [];
  const addAng = (a, razon, fuerza) => angulos.push({angulo:a, razon, fuerza});
  if(b.dolor)    addAng('Costo de la inacción', 'El briefing declara un dolor concreto: "' + b.dolor + '". Es el ángulo que ataca la postergación.', 92);
  addAng('Identidad', 'Siempre funciona en públicos que se sienten "no representados". Verifica con el término de nicho.', 85);
  addAng('Prueba social', ((b.prueba||[]).length ? 'Tienes prueba disponible (' + (b.prueba||[]).join(', ') + '): explótala.' : 'Sin prueba declarada el ángulo baja de fuerza.'), (b.prueba||[]).length ? 88 : 55);
  if(b.mecanismo) addAng('Demostración pura', 'El mecanismo declarado ("' + b.mecanismo + '") se puede mostrar en pantalla.', 84);
  if(b.deseo)    addAng('Resultado rápido', 'El deseo declarado ("' + b.deseo + '") permite prometer un plazo concreto.', 78);
  addAng('Objeción directa', 'Siempre hay una objeción previa: nombrarla antes de que la piense.', 76);
  addAng('Curiosidad / misterio', 'Funciona en públicos fríos que aún no conocen la categoría.', 68);
  addAng('Contra-narrativa', 'Apuesta: si el nicho está saturado de la misma promesa, invertirla gana.', 52);

  /* 4 · competencia sugerida */
  const competidores = (b.referencias||'').split(/[,;\n]/).map(s => s.trim()).filter(Boolean).slice(0,6);

  return {
    generado: new Date().toISOString(),
    pais,
    ia: c.ia || 'Arena',
    consultas, kws, angulos, competidores,
    resumen: vdResumen(c, consultas, kws, angulos)
  };
}

function vdResumen(c, consultas, kws, angulos){
  const b = c.brief || {};
  const partes = [];
  partes.push('Se construyeron ' + consultas.length + ' consultas para la Biblioteca de Anuncios de Meta en ' + (b.pais||'el mercado') + ', y ' + kws.length + ' términos de búsqueda clasificados por intención.');
  partes.push('Los ángulos con más fuerza en este nicho son ' + angulos.slice(0,3).map(a => a.angulo).join(', ') + '.');
  if(!(b.prueba||[]).length) partes.push('No declaraste prueba disponible: todas las piezas bajan de confianza hasta que tengas testimonios o demostración.');
  if(!(b.mecanismo||'').trim()) partes.push('Sin mecanismo propio, las piezas se parecerán a las de la competencia: define qué haces distinto.');
  return partes.join(' ');
}

/* ---------- prompt para IA con acceso a internet ---------- */
function vdPromptInvestigacion(c){
  const b = c.brief || {};
  return `MODO AGENTE OBLIGATORIO.
Estás trabajando en modo Agent, con navegador. Debes ENTRAR a las páginas y leer lo que hay dentro: no respondas de memoria.
Si por algún motivo no tienes navegador disponible, dilo en la primera línea y detente: no inventes ningún dato.

Actúa como director de investigación creativa y copywriter especializado en Meta Ads 2026 (Andromeda / GEM / Lattice) y en el mercado hispano de Estados Unidos.

=== NEGOCIO ===
- Qué vende: ${b.producto || '[completar]'}
- Precio: ${b.precio || '[completar]'}
- Mercado: ${b.pais || '[completar]'}
- Objetivo de campaña: ${b.objetivo || 'Ventas'}
- Público: ${b.avatar || '[completar]'}
- Dolor #1: ${b.dolor || '[completar]'}
- Deseo #1: ${b.deseo || '[completar]'}
- Promesa: ${b.promesa || '[completar]'}
- Mecanismo propio: ${b.mecanismo || '[completar]'}
- Prueba disponible: ${(b.prueba||[]).join(', ') || 'ninguna'}
- Competidores conocidos: ${b.referencias || 'no declarados'}
- Restricciones: ${b.restricciones || 'ninguna'}

=== TAREA ===
1) Busca en la Biblioteca de Anuncios de Meta (facebook.com/ads/library) anuncios ACTIVOS en ${b.pais || 'el mercado'} para este nicho. Registra página, días activo, variantes del mismo copy, objetivo inferido, formato y el texto literal del anuncio. Incluye el Library ID cuando lo tengas.
2) Identifica los ángulos más usados y cuáles llevan más tiempo activos.
3) Busca en TikTok, Instagram y YouTube los contenidos con más interacción del nicho en los últimos 90 días. Registra red, cuenta, vistas, likes, comentarios, compartidos y guardados.
4) Descompón los 3 mejores contenidos en 9 capas: gancho, promesa, mecanismo, prueba, objeciones, estructura, CTA, formato y razón de fondo.
5) Propón 16 consultas de búsqueda y 12 términos con su intención, incluyendo términos de AnswerThePublic.
6) Para cada anuncio y cada viral, abre la fuente y confirma que sigue activo antes de listarlo.
7) Marca con [VERIFICADO] lo que comprobaste en la fuente y con [ESTIMADO] lo que infieres. Si no puedes ver la Biblioteca de Anuncios, deja "anuncios" vacío: es peor un dato falso que un dato ausente.

=== CÓMO SE ESCRIBE (obligatorio para los copys) ===
Estas reglas mandan sobre todo lo demás:
- Escribe como una persona real hablándole a otra, no como una marca ni como un folleto.
- Frases cortas. Una sola idea por frase. Punto.
- Usa las palabras exactas que usaría el cliente. Si dice "me estoy gastando un montón en Uber", no escribas "optimiza tu movilidad".
- Nada de: "descubre", "potencia", "soluciones integrales", "lleva tu negocio al siguiente nivel", "en el mundo actual", "no esperes más".
- Prohibido abrir con "¿Estás cansado de…?" o "¿Quieres…?".
- Concreto antes que adjetivo: un número vale más que "miles", "desde" vale más que "económico".
- Español neutro latinoamericano. Tuteo. Nada de modismos de España.
- El gancho va directo al hueso en las primeras 5 palabras: la objeción, el número o la escena. Sin rodeos.
- El copy completo no repite el gancho: lo continúa.

=== FORMATO DE SALIDA (OBLIGATORIO) ===
Devuelve SOLO un JSON válido, sin explicación, sin markdown y sin texto antes ni después.

{"consultas":[{"q":"búsqueda de 3 a 6 palabras","tipo":"nicho exacto|producto|dolor|deseo|mecanismo|oferta|competencia|prueba"}],
 "terminos":[{"termino":"...","fuente":"Google|AnswerThePublic|TikTok|Instagram|YouTube|Reddit","intencion":"Informativa|Comercial|Transaccional|Comparación","uso":"Gancho|Cuerpo|Landing|Objeción"}],
 "angulos":[{"angulo":"uno de la lista permitida","razon":"por qué funciona en ESTE nicho, una frase","fuerza":0}],
 "anuncios":[{"pagina":"nombre de la página","pais":"código de 2 letras","dias":0,"variantes":0,"objetivo":"Ventas|Prospectos|Mensajes|Tráfico|Interacción","formato":"Vídeo UGC|Estático|Carrusel|Vídeo demo|Testimonio","angulo":"uno de la lista permitida","nota":"copy literal del anuncio + [VERIFICADO] o [ESTIMADO]"}],
 "viral":[{"red":"TikTok|Instagram|YouTube","cuenta":"@cuenta","views":0,"likes":0,"comments":0,"shares":0,"saves":0,"dias":0,"angulo":"uno de la lista permitida"}],
 "reversa":[{"cuenta":"@cuenta","gancho":"texto literal","promesa":"...","mecanismo":"...","prueba":"...","objeciones":"...","estructura":"...","cta":"...","formato":"...","porque":"por qué funciona"}],
 "copys":[{"angulo":"uno de la lista permitida","gancho":"gancho de máximo 12 palabras, humano y directo","copy":"copy completo de 2 a 4 frases que continúa el gancho","cta":"una sola línea con la acción concreta"}]}

ÁNGULOS PERMITIDOS (usa solo estos nombres exactos): ${VD_ANGULOS.join(' · ')}
CANTIDADES: 16 consultas · 12 términos · 6 ángulos · hasta 10 anuncios · hasta 6 virales · 3 reversa · un copy por cada ángulo.`;
}


/* ---------- prompt para la auditoría de redes ---------- */
function vdPromptAuditoria(c, red, usuario){
  const b = c.brief || {};
  const u = String(usuario||'').trim();
  const esEnlace = /^https?:\/\//i.test(u);
  return `MODO AGENTE OBLIGATORIO.
Estás en modo Agent, con navegador. Debes ENTRAR al perfil y mirar lo que hay publicado. No respondas de memoria ni por lo que el nombre sugiera.
Si el perfil es privado o no existe, dilo en la primera línea y detente: no inventes números.

Actúa como auditor de redes sociales especializado en negocios hispanos de Estados Unidos. Llevas años diciéndole a la gente qué está mal en su perfil sin rodeos y sin humo.

=== EL NEGOCIO ===
- Qué vende: ${b.producto || '[completar]'}
- Precio: ${b.precio || '[completar]'}
- Mercado: ${b.pais || '[completar]'}
- Público: ${b.avatar || '[completar]'}
- Dolor #1: ${b.dolor || '[completar]'}
- Promesa: ${b.promesa || '[completar]'}
- Mecanismo: ${b.mecanismo || '[completar]'}

=== EL PERFIL A AUDITAR ===
- Red: ${red}
- ${esEnlace ? 'Enlace' : 'Usuario'}: ${u}

=== QUÉ MIRAR (los 7 ejes, todos obligatorios) ===
${VD_EJES_AUD.map((e,i) => `${i+1}. ${e.nombre}: ${e.que}`).join('\n')}

Para cada eje necesito:
- estado: "bien", "flojo" o "falta"
- hallazgo: qué viste exactamente, citando el texto real del perfil
- recomendacion: qué poner en su lugar, con el texto exacto listo para copiar

Además:
- engagement_rate: calculado como (likes + comentarios) promedio ÷ seguidores × 100, sobre los últimos 10 posts. Si no puedes verlo, pon 0 y dilo.
- mejores: los 2 posts que mejor funcionaron y por qué.
- veredicto: una sola frase, la verdad en la cara, máximo 20 palabras.

=== CÓMO SE ESCRIBE ===
- Directo, en español neutro latinoamericano, tuteo.
- Nada de "deberías considerar", "podrías optimizar", "en el mundo actual".
- Cada recomendación tiene que ser una acción concreta y el texto exacto a usar.
- Si algo está bien, dilo en una línea y pasa al siguiente. No rellenes.
- Prohibido recomendar "publicar más" sin decir cuántas veces y de qué.

=== FORMATO DE SALIDA (OBLIGATORIO) ===
Devuelve SOLO un JSON válido, sin explicación ni markdown.

{"perfil":{"red":"${red}","usuario":"${u}","seguidores":0,"publicaciones":0,"frecuencia_semanal":0,"bio":"texto literal de la bio","enlace_bio":"url o vacío"},
 "metricas":{"engagement_rate":0,"promedio_likes":0,"promedio_comentarios":0,"mejor_formato":"","peor_formato":""},
 "ejes":[{"eje":"Biografía","estado":"bien|flojo|falta","hallazgo":"...","recomendacion":"texto exacto a poner"}],
 "recomendaciones":[{"prioridad":1,"area":"bio","accion":"...","porque":"...","plazo":"hoy|esta semana"}],
 "mejores":[{"post":"...","porque":"..."}],
 "veredicto":"una frase"}

Los 7 ejes van en "ejes", en el mismo orden de la lista. Máximo 8 recomendaciones, ordenadas por impacto real, no por orden de la lista.`;
}
