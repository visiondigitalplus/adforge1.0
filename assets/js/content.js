/* ============================================================
   Diccionario creativo: ángulos, arquetipos, formatos, guiones.
   Fuente: docs/07. Si cambias aquí, cambia el diccionario también.
   ============================================================ */

const VD_ANGULOS = [
  'Resultado rápido','Evitar dolor o error','Curiosidad / misterio','Prueba social','Contra-narrativa',
  'Autoridad','Antes/Después implícito','Costo de la inacción','Precio / valor','Identidad',
  'Historia personal','Demostración pura','Objeción directa','Comparativa','Miedo a perder',
  'Pertenencia','Estatus','Micro-especificidad','Oferta / urgencia'
];

const VD_FORMATOS = ['Video UGC','Video demo','Testimonio','Carrusel','Estático'];

const VD_CONCIENCIA = [
  '1 · Inconsciente','2 · Consciente del problema','3 · Consciente de la solución',
  '4 · Consciente del producto','5 · Listo para comprar'
];

const VD_ARQ = {
  contraintuitivo: t => `Deja de hacer lo de siempre. Es la causa real de esto: ${t.dolor}.`,
  directo:        t => `Si te está pasando esto, es para ti: ${t.dolor}.`,
  misterio:       t => `Nadie te dice esto sobre ${t.nicho}.`,
  antesdespues:   t => `Hace 30 días estaba así. Hoy buscaba esto: ${t.deseo}.`,
  prueba:         t => `+300 personas ya empezaron. Y todas querían lo mismo: ${t.deseo}.`,
  autoridad:      t => `Lo que los especialistas dicen de ${t.nicho} y casi nadie aplica.`,
  costo:          t => `Cada mes que pasa esto sale más caro. Y el motivo es este: ${t.dolor}.`,
  contra:         t => `Las soluciones típicas para ${t.nicho} no funcionan. Te explico por qué.`,
  demo:           t => `Mira esto en 20 segundos: ${t.meca}.`,
  historia:       t => `Yo también empecé así: ${t.dolor}. Hoy busco esto: ${t.deseo}.`,
  espejo:         t => `¿Por qué sigue pasando esto? La respuesta está aquí: ${t.dolor}.`,
  micro:          t => `El error del segundo 4 que arruina ${t.nicho}.`,
  curiosidad:     t => `Esto es lo que nadie te muestra: ${t.dolor}.`
};

/* Plan del lote: [ángulo, formato, conciencia, arquetipo1, arquetipo2, perfil, rangos de evidencia] */
const VD_PLAN = [
  {a:'Identidad',f:'Video UGC',c:'3 · Consciente de la solución',q1:'historia',q2:'espejo',tier:'A',ev:[98,100],es:[94,100],eo:[92,99],en:[94,100]},
  {a:'Costo de la inacción',f:'Video UGC',c:'2 · Consciente del problema',q1:'costo',q2:'micro',tier:'A',ev:[96,100],es:[90,98],eo:[88,96],en:[92,99]},
  {a:'Prueba social',f:'Testimonio',c:'4 · Consciente del producto',q1:'prueba',q2:'antesdespues',tier:'A',ev:[95,100],es:[88,97],eo:[86,95],en:[90,98]},
  {a:'Demostración pura',f:'Video demo',c:'4 · Consciente del producto',q1:'demo',q2:'micro',tier:'A',ev:[94,100],es:[86,96],eo:[85,94],en:[88,97]},
  {a:'Objeción directa',f:'Estático',c:'4 · Consciente del producto',q1:'espejo',q2:'directo',tier:'B',ev:[72,86],es:[38,58],eo:[64,84],en:[76,90]},
  {a:'Curiosidad / misterio',f:'Carrusel',c:'3 · Consciente de la solución',q1:'misterio',q2:'curiosidad',tier:'B',ev:[70,84],es:[36,56],eo:[62,82],en:[74,88]},
  {a:'Contra-narrativa',f:'Video UGC',c:'3 · Consciente de la solución',q1:'contra',q2:'contraintuitivo',tier:'C',ev:[42,60],es:[10,30],eo:[56,76],en:[58,78]},
  {a:'Resultado rápido',f:'Carrusel',c:'2 · Consciente del problema',q1:'antesdespues',q2:'curiosidad',tier:'B',ev:[68,82],es:[34,52],eo:[60,80],en:[72,86]},
  {a:'Objeción directa',f:'Video UGC',c:'4 · Consciente del producto',q1:'espejo',q2:'directo',tier:'B',ev:[66,80],es:[32,50],eo:[58,78],en:[70,85]},
  {a:'Autoridad',f:'Carrusel',c:'3 · Consciente de la solución',q1:'autoridad',q2:'contra',tier:'B',ev:[64,80],es:[30,48],eo:[56,76],en:[68,84]},
  {a:'Curiosidad / misterio',f:'Estático',c:'1 · Inconsciente',q1:'misterio',q2:'micro',tier:'C',ev:[50,66],es:[20,38],eo:[52,72],en:[62,80]},
  {a:'Historia personal',f:'Video UGC',c:'1 · Inconsciente',q1:'historia',q2:'antesdespues',tier:'C',ev:[48,64],es:[18,36],eo:[50,70],en:[60,78]},
  {a:'Precio / valor',f:'Estático',c:'5 · Listo para comprar',q1:'directo',q2:'prueba',tier:'C',ev:[46,62],es:[16,34],eo:[48,68],en:[58,76]},
  {a:'Micro-especificidad',f:'Video UGC',c:'3 · Consciente de la solución',q1:'micro',q2:'curiosidad',tier:'D',ev:[34,52],es:[10,26],eo:[42,62],en:[52,70]}
];

const VD_CTAS = {
  'Ventas':['Compra hoy y recibe el bonus sin costo','Ver precios y garantía'],
  'Prospectos':['Reserva tu diagnóstico sin costo','Descarga la guía completa'],
  'Mensajes':['Escríbenos "QUIERO" y te paso el plan','Manda un mensaje y te digo si aplica a tu caso'],
  'Tráfico':['Mira la comparación completa','Lee el desglose paso a paso'],
  'Interacción':['Comenta "GUÍA" y te la envío','Guarda esto para cuando lo necesites'],
  'Reconocimiento':['Conoce cómo trabajamos','Sigue para ver la siguiente fase']
};

const VD_IMG_ARTE = [
  'fotografía documental realista, sin retoque evidente',
  'estilo editorial limpio, fondo neutro con sombra suave',
  'plano publicitario en contexto real de uso',
  'composición minimalista con mucho aire y un solo sujeto'
];
const VD_IMG_LUZ = ['luz natural de ventana','luz suave de estudio con rebote','luz cálida de tarde, contraste bajo','luz lateral dramática pero amable'];
const VD_IMG_PAL = ['paleta neutra con un acento dorado','tonos tierra y beige','paleta fría con acento cálido','blancos cálidos y sombras profundas'];

function vdTokens(exp){
  const b = exp.brief || {};
  return {
    nicho: b.subnicho || b.producto || 'tu categoría',
    producto: b.producto || 'tu producto',
    dolor: b.dolor || b.avatar || 'tu problema',
    deseo: b.deseo || b.promesa || 'el resultado que buscas',
    meca: b.mecanismo || 'nuestro método',
    promesa: b.promesa || 'el resultado que prometes',
    pais: b.pais || 'tu país',
    precio: b.precio || 'el precio',
    avatar: b.avatar || 'tu cliente'
  };
}

function vdGuion(formato, t, ctas){
  if(formato==='Video demo') return [
    `0-2 s · RESULTADO: el "después" en pantalla, sin explicación todavía.`,
    `2-6 s · PROBLEMA: "${t.dolor}" dicho en las palabras del cliente.`,
    `6-14 s · DEMOSTRACIÓN: ${t.meca} paso a paso, con las manos y el producto en cuadro.`,
    `14-20 s · PRUEBA: dato o mini-testimonio que confirma lo que se acaba de ver.`,
    `20-28 s · CTA: "${ctas[0]}" + oferta y garantía en pantalla.`
  ];
  if(formato==='Testimonio') return [
    `0-3 s · GANCHO: la frase más fuerte del testimonio, a cámara, sin introducción.`,
    `3-8 s · CONTEXTO: quién es y cómo estaba antes ("${t.dolor}").`,
    `8-14 s · PUNTO DE GIRO: qué probó y por qué desconfiaba (objeción real).`,
    `14-20 s · RESULTADO: qué cambió, con detalle concreto y medible.`,
    `20-26 s · RECOMENDACIÓN: a quién se lo diría y por qué.`,
    `26-32 s · CTA: "${ctas[0]}".`
  ];
  if(formato==='Carrusel') return [
    `Slide 1 · Portada-gancho: titular de máximo 7 palabras, una sola idea.`,
    `Slide 2 · Síntoma: cómo se siente hoy "${t.dolor}" (escena concreta).`,
    `Slide 3 · Por qué lo típico falla: la objeción en palabras del cliente.`,
    `Slide 4 · Mecanismo: ${t.meca} en 3 pasos numerados.`,
    `Slide 5 · Prueba: resultado, dato o testimonio (una sola prueba, grande).`,
    `Slide 6 · Oferta: ${t.promesa}.`,
    `Slide 7 · CTA: "${ctas[0]}" + garantía.`
  ];
  if(formato==='Estático') return [
    `Titular (máx. 7 palabras): el gancho completo, sin adorno.`,
    `Subtítulo de apoyo: la promesa con plazo ("${t.promesa}").`,
    `Prueba en una línea: dato, cifra o número de clientes.`,
    `CTA sobre la imagen y CTA en el copy: el mismo verbo, no dos distintos.`,
    `Dirección de arte: un solo sujeto, contraste alto, legible en miniatura.`
  ];
  return [
    `0-3 s · GANCHO: primera frase a cámara, movimiento desde el frame 1.`,
    `3-8 s · PROMESA: qué cambia y en cuánto tiempo ("${t.promesa}").`,
    `8-15 s · MECANISMO: ${t.meca} en 3 pasos, sin jerga.`,
    `15-22 s · PRUEBA + OBJECIÓN: se derriba la objeción principal con evidencia real.`,
    `22-30 s · CTA: "${ctas[0]}" + cierre con la oferta.`
  ];
}

function vdPromptImg(formato, t, i){
  const ratio = (formato==='Estático'||formato==='Carrusel') ? '4:5' : '9:16';
  const sujeto = formato==='Testimonio'
    ? `persona real del público objetivo (${t.avatar.slice(0,70)}) en su entorno cotidiano`
    : formato==='Video demo'
      ? `manos usando ${t.producto} en primer plano, movimiento real`
      : `persona del público objetivo (${t.avatar.slice(0,70)}) en una escena reconocible de su día`;
  return `${VD_IMG_ARTE[i%VD_IMG_ARTE.length]}: ${sujeto}, ${VD_IMG_LUZ[i%VD_IMG_LUZ.length]}, ${VD_IMG_PAL[i%VD_IMG_PAL.length]}, plano ${formato==='Carrusel'?'medio vertical':'medio'}, formato ${ratio}. Negativos: sin texto, sin logos, sin marcas de agua, sin manos deformes, sin piel plástica.`;
}

function vdPromptVid(formato, t){
  return `Escena 1 (0-3 s): ${formato==='Video demo'?'resultado ya visible, cámara en mano, sin trípode':'rostro real mirando a cámara, gesto genuino, movimiento desde el primer frame'}. Escena 2 (3-8 s): contexto del problema, plano medio, luz natural. Escena 3 (8-15 s): ${t.meca} en 3 cortes de 1,5 s con subtítulos quemados. Cierre: producto + CTA en pantalla. Audio: voz real, sin locución publicitaria.`;
}

function vdCompliance(exp){
  const b = exp.brief || {};
  const txt = `${b.producto||''} ${b.subnicho||''} ${b.promesa||''} ${b.mecanismo||''} ${b.restricciones||''}`.toLowerCase();
  if(/(salud|médic|medic|peso|adelgaz|dieta|dolor|enfermedad|cura|terapia|clínic|suplemento|estétic|ansiedad|dérmic)/.test(txt))
    return {nivel:'Alto', pen:6, nota:'Categoría salud: sin promesas de curación, sin resultados garantizados y sin antes/después explícito. Evita atributos personales del tipo "¿tienes sobrepeso?".'};
  if(/(dinero|finanz|inversión|inversion|crédito|credito|préstamo|prestamo|ganar|cripto|trading|forex|rentabilidad|ingresos)/.test(txt))
    return {nivel:'Alto', pen:6, nota:'Categoría financiera: prohibido prometer ingresos o rendimientos garantizados. Usa rangos y agrega disclaimer.'};
  if((b.restricciones||'').trim())
    return {nivel:'Medio', pen:2, nota:'Hay restricciones declaradas en el briefing: revísalas antes de producir.'};
  return {nivel:'Bajo', pen:0, nota:'Sin señales de categoría especial. Verifica igualmente las políticas de Meta antes de publicar.'};
}


/* ============================================================
   GUION COMPLETO por formato
   Cada bloque: tiempo · qué se ve · qué se dice · qué texto va
   ============================================================ */
function vdGuionCompleto(formato, t, ctas, pieza){
  const cap = x => String(x||'').charAt(0).toUpperCase() + String(x||'').slice(1);
  const g1 = (pieza && pieza.ganchos && pieza.ganchos[0]) || '';
  const b  = (pieza && pieza.brief) || {};
  const garantia = b.garantia || '';
  const oferta   = b.oferta || '';
  const pais     = b.pais || t.pais;
  const ctaA = ctas[0] || 'Escríbenos y te decimos si calificas';
  const ctaB = ctas[1] || ctaA;

  /* --- movimiento de cámara: se usa en todas las escenas --- */
  const CAM = {
    pushIn:'push-in lento (dolly in) hacia el rostro',
    zoomBack:'zoom back (dolly out) que revela el entorno',
    orbit:'órbita de 180° alrededor del sujeto, cámara estable',
    droneIn:'dron en push-in frontal, descendiendo de 15 a 4 metros',
    droneOrbit:'dron en órbita ascendente de 120°',
    whip:'whip pan rápido hacia el sujeto',
    tiltUp:'tilt up desde el suelo hasta el rostro',
    tiltDown:'tilt down desde el cielo hasta el producto',
    truck:'truck lateral (travelling) a la misma velocidad del sujeto',
    follow:'handheld siguiendo al sujeto de espaldas',
    rack:'rack focus del primer plano al fondo',
    macro:'macro a 5 cm con profundidad de campo mínima',
    crane:'grúa subiendo (crane up) que abre el plano',
    gimbal:'gimbal caminando por el pasillo del local',
    cenital:'plano cenital a 90° (vista de dron a baja altura)',
    snap:'snap zoom rápido hacia el texto en pantalla',
    fijo:'cámara fija sobre trípode, sin movimiento',
    ken:'efecto Ken Burns, zoom óptico lento sobre la foto'
  };
  const LENTE = 'lente 35 mm para contexto y 50 mm para retrato, f/2.0, profundidad de campo baja';
  const LOOK  = 'realista, sin filtros de moda, luz natural, color cálido neutro, nada de estética publicitaria';

  function esc(n, t, plano, mov, accion, texto, audio, prompt){
    return { n, t, plano, mov, accion, texto, audio, prompt };
  }

  /* ================= VIDEO UGC ================= */
  if(formato === 'Video UGC'){
    const escenas = [
      esc(1,'0–3 s','Primer plano del hablante, cámara a la altura de los ojos, vertical 9:16',
        CAM.pushIn,
        `El hablante mira directo al lente y suelta el gancho sin saludar. Fondo: ${t.nicho}, reconocible pero desenfocado.`,
        'Texto del gancho, máximo 5 palabras, mitad inferior.',
        'Voz en vivo, sin música. Sonido ambiente del lugar.',
        `Persona común de ${pais} mirando a cámara en un lugar cotidiano, dolly-in lento hacia su rostro durante 3 segundos, luz natural de ventana, ${LENTE}, ${LOOK}, formato vertical 9:16. Sin texto en pantalla.`),
      esc(2,'3–8 s','Plano medio corto del dolor, B-roll documental',
        CAM.whip,
        `Se ve la escena del problema tal cual: ${t.dolor}. Nada de íconos ni de stock sonriente.`,
        'Sin texto. La imagen habla.',
        'Sonido real de la escena (tráfico, gente, oficina).',
        `Plano documental de la situación: ${t.dolor}, cámara en mano con whip pan que termina en el sujeto, luz natural dura de mediodía, ${LENTE}, ${LOOK}, vertical 9:16.`),
      esc(3,'8–14 s','Plano medio del hablante, ahora relajado',
        CAM.zoomBack,
        'Corte seco. El hablante cuenta el giro: qué cambió. El zoom back revela que está donde ocurre la solución.',
        '«Hasta que…»',
        'Voz en vivo, sube la música un 10% aquí.',
        `Zoom back (dolly out) desde el rostro del hablante hasta revelar el lugar completo: ${t.meca}, movimiento continuo y suave de 4 segundos, luz de tarde, ${LENTE}, ${LOOK}, vertical 9:16.`),
      esc(4,'14–22 s','Detalle: manos y pantalla / producto en uso',
        CAM.rack,
        `El mecanismo en acción: ${t.meca}, mostrado con las manos, en tres gestos claros.`,
        'Los 3 pasos, numerados y pequeños en un borde.',
        'Voz en off cercana, sin eco.',
        `Primer plano macro de manos usando el producto mientras se explica el proceso, rack focus del primer plano al fondo, luz lateral suave, ${LENTE}, ${LOOK}, vertical 9:16.`),
      esc(5,'22–28 s','Plano de prueba: resultado real, cliente o cifra',
        CAM.orbit,
        `La prueba: ${garantia || 'un cliente real con el resultado en la mano'}. Si hay video de entrega, va aquí.`,
        'El número grande: precio, días, cantidad.',
        'Sonido real de la prueba (voz del cliente, llave, puerta).',
        `Órbita suave de 180 grados alrededor de una persona real celebrando el resultado, cámara estable, luz natural, ${LENTE}, ${LOOK}, vertical 9:16.`),
      esc(6,'28–33 s','Vuelta al primer plano del hablante',
        CAM.snap,
        'El hablante cierra con el CTA, señalando la pantalla. Termina sin despedida.',
        `CTA en pantalla + ${oferta || 'la oferta concreta'}.`,
        'Voz en vivo, música corta en seco al final.',
        `Plano medio del mismo hablante señalando hacia abajo, snap zoom rápido hacia el texto de la pantalla en el último segundo, luz natural, ${LENTE}, ${LOOK}, vertical 9:16.`)
    ];
    return {
      duracion:'28–35 s', estructura:'Gancho 0-3 · Problema 3-8 · Giro 8-14 · Mecanismo 14-22 · Prueba 22-28 · CTA 28-33',
      gancho:{
        viral:`Los primeros 3 s muestran a una persona común diciendo «${g1}» mirando al lente, sin logo ni intro. Para el scroll porque nombra el problema exacto antes de que el espectador lo piense.`,
        visual:'Un rostro humano ocupando el 60% del cuadro, mirando al lente, con el entorno real del negocio desenfocado detrás.',
        verbal:`«${g1}»`,
        texto:g1.split(' ').slice(0,5).join(' ')
      },
      titulo:`${t.dolor.charAt(0).toUpperCase() + t.dolor.slice(1)} — la salida que nadie te cuenta`,
      parlamento:[
        {t:'0–3 s', dice:g1},
        {t:'3–8 s', dice:`Si te está pasando esto, es porque ${t.dolor}.`},
        {t:'8–14 s', dice:'Y probé de todo. Hasta que cambió una sola cosa.'},
        {t:'14–22 s', dice:`${t.meca}. Así de simple.`},
        {t:'22–28 s', dice:`Y el resultado: ${t.promesa}.`},
        {t:'28–33 s', dice:ctaA + '.'}
      ],
      bloques: escenas.map(e => ({ t:e.t, nombre:['Gancho','El problema','El giro','El mecanismo','La prueba','CTA'][e.n-1],
        ve:e.accion, dice:(e.n===1?`«${g1}»`:e.n===6?`«${ctaA}»`:'—'), texto:e.texto })),
      escenas,
      produccion:['Graba en vertical 9:16, nunca horizontal recortado.',
        'Cámara a la altura de los ojos, a un brazo de distancia. Nunca desde abajo.',
        'Luz de ventana o lámpara de frente. Nunca de espaldas.',
        'Micrófono a 30 cm. Música solo a partir del segundo 8 y por debajo de la voz.',
        'Subtítulos quemados, grandes, en la mitad inferior.',
        'Graba 3 versiones del gancho y publica la que retenga más de 25% a los 3 segundos.'],
      errores:['No empieces con "hola, soy…".','No uses música alta en el gancho.',
        'No expliques el mecanismo antes de que duela el problema.','No pongas el logo en el primer segundo.']
    };
  }

  /* ================= VIDEO DEMO ================= */
  if(formato === 'Video demo'){
    const escenas = [
      esc(1,'0–2 s','Gran angular del resultado final, dron a baja altura',
        CAM.droneIn,
        `El "después" ya funcionando: ${t.promesa}. Sin logos, sin títulos.`,
        'Nada. Solo imagen.',
        'Sonido ambiente real del lugar.',
        `Dron en push-in descendente hacia el resultado final: ${t.promesa}, movimiento continuo de 15 a 4 metros de altura, luz de hora dorada, ${LENTE}, ${LOOK}, vertical 9:16.`),
      esc(2,'2–6 s','Plano medio del problema, cámara en mano',
        CAM.tiltDown,
        `Corte al problema: ${t.dolor}. La cámara baja del entorno al detalle.`,
        'Texto corto del problema.',
        'Sonido ambiente del problema.',
        `Tilt down desde el cielo hasta el detalle del problema: ${t.dolor}, movimiento vertical continuo de 3 segundos, luz natural, ${LENTE}, ${LOOK}, vertical 9:16.`),
      esc(3,'6–14 s','Plano secuencia del mecanismo, gimbal',
        CAM.gimbal,
        `El proceso completo en un solo movimiento: ${t.meca}, paso 1, 2 y 3 sin cortes.`,
        'Los 3 pasos numerados, aparecen uno por uno.',
        'Voz en off explicando, sin música.',
        `Plano secuencia con gimbal recorriendo el local mientras se ejecuta el proceso, sin cortes, profundidad y movimiento continuo, luz natural mixta, ${LENTE}, ${LOOK}, vertical 9:16.`),
      esc(4,'14–20 s','Plano detalle del resultado sobre las manos',
        CAM.macro,
        `La prueba física: ${garantia || 'el producto terminado en las manos del cliente'}.`,
        'El dato más fuerte, grande.',
        'Sonido real: la llave, el papel, la máquina.',
        `Macro de manos recibiendo el resultado final, profundidad de campo mínima, rack focus al fondo, luz lateral suave, ${LENTE}, ${LOOK}, vertical 9:16.`),
      esc(5,'20–28 s','Plano general con grúa, el cliente se va',
        CAM.crane,
        `El cliente usando el resultado: ${t.deseo}. Cámara sube y abre el plano.`,
        'CTA + oferta en la esquina inferior.',
        'Voz en off con el CTA.',
        `Grúa subiendo (crane up) mientras el cliente se aleja usando el producto, plano que se abre y revela el entorno completo, luz de tarde, ${LENTE}, ${LOOK}, vertical 9:16.`)
    ];
    return {
      duracion:'25–35 s', estructura:'Resultado 0-2 · Problema 2-6 · Demostración 6-14 · Prueba 14-20 · CTA 20-28',
      gancho:{
        viral:'El resultado aparece funcionando antes de que nadie lo explique. El espectador no sabe qué está viendo los primeros 2 segundos y eso es exactamente lo que lo retiene.',
        visual:`El "después" en cuadro completo, en movimiento, con luz de hora dorada.`,
        verbal:'— (sin voz en los primeros 2 s)',
        texto:''
      },
      titulo:`Mira cómo se hace: ${t.producto}`,
      parlamento:[
        {t:'0–2 s', dice:'—'},
        {t:'2–6 s', dice:`Así se ve ${t.dolor}.`},
        {t:'6–14 s', dice:`${t.meca}. Tres pasos, sin vueltas.`},
        {t:'14–20 s', dice:`Y esto es lo que recibes: ${t.promesa}.`},
        {t:'20–28 s', dice:ctaA + '.'}
      ],
      bloques: escenas.map((e,i)=>({ t:e.t, nombre:['Resultado primero','El problema','La demostración','La prueba','CTA'][i],
        ve:e.accion, dice:i===4?`«${ctaA}»`:'—', texto:e.texto })),
      escenas,
      produccion:['Un solo movimiento por escena. Si la cámara se mueve dos veces, se corta.',
        'Graba el mecanismo completo primero y luego los detalles.',
        'Limpia el encuadre: nada que no sea producto, manos o cliente.',
        'Música solo después del segundo 6.'],
      errores:['No muestres el logo al principio.','No hagas timelapse del proceso: aburre.',
        'No uses música épica para un producto cotidiano.']
    };
  }

  /* ================= TESTIMONIO ================= */
  if(formato === 'Testimonio'){
    const escenas = [
      esc(1,'0–3 s','Primer plano del cliente, mirando al lente',
        CAM.pushIn,
        'La frase más fuerte del testimonio, ya dicha. Sin presentación.',
        'Nombre y ciudad del cliente, pequeño arriba.',
        'Voz en vivo, sonido ambiente bajo.',
        `Persona real hablando a cámara en su entorno, dolly-in lento hacia su rostro, expresión sincera, luz natural, ${LENTE}, ${LOOK}, vertical 9:16.`),
      esc(2,'3–8 s','Plano medio del cliente en su contexto',
        CAM.zoomBack,
        `Quién es y cómo estaba antes: ${t.dolor}.`,
        'Antes / ahora en dos palabras.',
        'Voz en vivo.',
        `Zoom back que revela el entorno del cliente mientras habla, movimiento suave de 4 segundos, luz natural, ${LENTE}, ${LOOK}, vertical 9:16.`),
      esc(3,'8–18 s','B-roll del antes y del después, cortes secos',
        CAM.rack,
        `Las dos vidas en paralelo: ${t.dolor} contra ${t.deseo}.`,
        'La fecha o el tiempo transcurrido.',
        'Voz en off del cliente contando.',
        `B-roll comparativo en dos planos con rack focus entre el antes y el después, cortes secos al ritmo de la voz, luz natural, ${LENTE}, ${LOOK}, vertical 9:16.`),
      esc(4,'18–28 s','Plano medio, cliente con el resultado',
        CAM.orbit,
        `El resultado concreto: ${t.promesa}.`,
        'El número más creíble en pantalla.',
        'Voz en vivo, sin música.',
        `Órbita lenta alrededor del cliente sosteniendo el resultado, cámara estable, luz natural, ${LENTE}, ${LOOK}, vertical 9:16.`),
      esc(5,'28–35 s','Plano fijo del cliente y luego el local',
        CAM.fijo,
        'El cliente hace el CTA hablando de tú a tú, como recomendándoselo a un amigo.',
        'CTA + oferta.',
        'Voz en vivo, música entra al final.',
        `Plano fijo sobre trípode del cliente señalando el local, sin movimiento de cámara, luz natural, ${LENTE}, ${LOOK}, vertical 9:16.`)
    ];
    return {
      duracion:'30–40 s', estructura:'Gancho 0-3 · Contexto 3-8 · Antes/después 8-18 · Resultado 18-28 · CTA 28-35',
      gancho:{
        viral:'Empieza con la frase más vulnerable del testimonio, dicha por la persona real. La autenticidad sin producción es lo que frena el scroll en 2026.',
        visual:'Un rostro real, sin maquillaje de estudio, en su casa o su trabajo, mirando al lente.',
        verbal:`«${g1}»`,
        texto:''
      },
      titulo:`«${t.dolor}» — y así lo resolvió`,
      parlamento:[
        {t:'0–3 s', dice:g1},
        {t:'3–8 s', dice:`Yo estaba en eso: ${t.dolor}.`},
        {t:'8–18 s', dice:`Lo que hice fue ${t.meca}. No fue de un día para otro, pero fue directo.`},
        {t:'18–28 s', dice:`Hoy ${t.promesa}.`},
        {t:'28–35 s', dice:ctaA + '.'}
      ],
      bloques: escenas.map((e,i)=>({ t:e.t, nombre:['Gancho','Contexto','Antes / después','Resultado','CTA'][i],
        ve:e.accion, dice:i===0?`«${g1}»`:i===4?`«${ctaA}»`:'—', texto:e.texto })),
      escenas,
      produccion:['Graba al cliente en su ambiente, no en una oficina con logo.',
        'No le des el guion: hazle 4 preguntas y usa sus respuestas literales.',
        'Deja que se equivoque. La imperfección es la prueba.',
        'Subtítulos quemados obligatorios: se ve sin sonido.'],
      errores:['No pongas música épica.','No edites tanto que parezca actuado.',
        'No uses a un empleado disfrazado de cliente: se nota y quema la marca.']
    };
  }

  /* ================= CARRUSEL ================= */
  if(formato === 'Carrusel'){
    const slides = [
      { n:1, rol:'Portada / gancho',
        visual:`Una sola imagen potente: ${t.nicho}. Composición con el sujeto a la izquierda y aire a la derecha para el texto.`,
        texto:g1.substring(0,60), dice:`«${g1}»`,
        mov:CAM.ken, prompt:`Fotografía editorial realista de ${t.nicho}, sujeto a la izquierda con espacio negativo a la derecha, luz natural lateral, ${LENTE}, ${LOOK}, formato 4:5.` },
      { n:2, rol:'El problema',
        visual:`La escena del dolor sin dramatizar: ${t.dolor}.`,
        texto:'El problema, en 8 palabras o menos.', dice:`${t.dolor}`,
        mov:'Parallax suave de dos capas', prompt:`Fotografía documental de ${t.dolor}, sin dramatismo, luz natural, ${LENTE}, ${LOOK}, formato 4:5.` },
      { n:3, rol:'El mecanismo',
        visual:`Cómo funciona: ${t.meca}. Infografía simple de 3 pasos sobre foto real.`,
        texto:'3 pasos numerados.', dice:`${t.meca}`,
        mov:'Aparición secuencial de los 3 pasos', prompt:`Fotografía de proceso paso a paso, manos trabajando, tres elementos visibles, luz natural, ${LENTE}, ${LOOK}, formato 4:5.` },
      { n:4, rol:'La prueba',
        visual:`El resultado real: ${t.promesa}. Captura, cifra o cliente.`,
        texto:'El número más grande de todo el carrusel.', dice:`${t.promesa}`,
        mov:'Zoom in lento sobre el número', prompt:`Fotografía del resultado real: ${t.promesa}, evidencia concreta, luz natural, ${LENTE}, ${LOOK}, formato 4:5.` },
      { n:5, rol:'CTA',
        visual:'El mismo sujeto de la portada, ahora resuelto. Fondo más limpio.',
        texto:ctaA, dice:ctaA,
        mov:'Ken Burns lento, cierre', prompt:`Retrato final del cliente satisfecho con el resultado, fondo limpio, luz natural, ${LENTE}, ${LOOK}, formato 4:5.` }
    ];
    return {
      duracion:'5 slides', estructura:'Portada · Problema · Mecanismo · Prueba · CTA',
      gancho:{
        viral:`La portada es una sola imagen con el texto «${g1.substring(0,45)}». Sin portada no hay carrusel: el 80% del resultado está en la slide 1.`,
        visual:'Sujeto real a la izquierda, aire a la derecha, contraste alto para leerse en miniatura.',
        verbal:'— (el carrusel no tiene voz; el copy de la publicación hace ese trabajo)',
        texto:g1.substring(0,40)
      },
      titulo:`${t.dolor.charAt(0).toUpperCase()+t.dolor.slice(1)}: los 3 pasos que sí funcionan`,
      parlamento:[
        {t:'Slide 1', dice:g1},
        {t:'Slide 2', dice:`El problema real: ${t.dolor}.`},
        {t:'Slide 3', dice:`Cómo se resuelve: ${t.meca}.`},
        {t:'Slide 4', dice:`Resultado: ${t.promesa}.`},
        {t:'Slide 5', dice:ctaA + '.'}
      ],
      bloques: slides.map(s=>({ t:'Slide '+s.n, nombre:s.rol, ve:s.visual, dice:s.dice, texto:s.texto })),
      escenas: slides.map(s=>({ n:s.n, t:'Slide '+s.n, plano:s.visual, mov:s.mov, accion:s.texto, texto:s.texto, audio:'—', prompt:s.prompt })),
      produccion:['Una idea por slide. Si necesitas dos frases, son dos slides.',
        'Mismo tratamiento de color en las 5: parecen una pieza, no cinco.',
        'Texto a 60 px mínimo para leerse en el feed.',
        'La slide 1 se juzga en miniatura: pruébala al 20% de tamaño.'],
      errores:['No pongas párrafos.','No cambies la tipografía entre slides.',
        'No cierres con "sígueme": cierra con la acción concreta.']
    };
  }

  /* ================= ESTÁTICO ================= */
  return {
    duracion:'1 imagen', estructura:'4 zonas: gancho · promesa · prueba · CTA',
    gancho:{
      viral:`La imagen sola tiene que detener el scroll: un sujeto, un contraste y el texto «${g1.substring(0,45)}» que se lee en menos de un segundo.`,
      visual:`Un solo sujeto de ${t.avatar}, en una escena reconocible de su día, mirando a cámara o al producto.`,
      verbal:'— (el estático no tiene voz; el copy del anuncio hace ese trabajo)',
      texto:g1.substring(0,40)
    },
    titulo:g1.substring(0,60),
    parlamento:[
      {t:'Titular', dice:g1},
      {t:'Copy', dice:`${cap(t.meca)}. ${cap(t.promesa)}.`},
      {t:'CTA', dice:ctaA}
    ],
    bloques:[
      { t:'Zona 1', nombre:'Titular', ve:'Ocupa el tercio superior. Máximo 7 palabras, tipografía gruesa.', dice:`«${g1}»`, texto:g1.substring(0,40) },
      { t:'Zona 2', nombre:'Imagen', ve:`El sujeto y el producto. ${t.avatar}.`, dice:'—', texto:'—' },
      { t:'Zona 3', nombre:'Prueba', ve:'Una línea con el dato que sostiene la promesa.', dice:'—', texto:garantia || t.promesa },
      { t:'Zona 4', nombre:'CTA', ve:'Esquina inferior. El mismo verbo que en el copy.', dice:`«${ctaA}»`, texto:ctaA }
    ],
    escenas:[
      esc(1,'Zona 1','Composición vertical 4:5, sujeto descentrado',
        'Estático (versión animada: '+CAM.ken+')',
        `Titular arriba, sujeto abajo-izquierda, aire arriba-derecha.`,
        g1.substring(0,40),
        '—',
        `Fotografía publicitaria realista: ${t.avatar} en una escena cotidiana de ${pais}, un solo sujeto, fondo simple, luz natural de ventana, espacio negativo en el tercio superior, ${LENTE}, ${LOOK}, formato 4:5. Sin texto, sin logos.`)
    ],
    produccion:['Un solo sujeto. Dos sujetos reparten la atención y bajan el CTR.',
      'Contraste alto: se va a ver en una pantalla de 5 pulgadas.',
      'Prueba la pieza en miniatura antes de publicarla.',
      'Deja el espacio del texto vacío al fotografiar: el texto se monta después.'],
    errores:['No pongas más de 7 palabras en el titular.','No uses foto de stock: se reconoce y resta credibilidad.',
      'No pongas el logo grande: ocupa espacio y no vende.']
  };
}

/* ---------- KPIs de contenido orgánico: qué medir y contra qué meta ---------- */
function vdKPIs(c){
  const b = (c && c.brief) || {};
  const red = (c && c.auditoria && c.auditoria.perfil && c.auditoria.perfil.red) || 'Instagram';
  const B = VD_METAS_ORG[red] || VD_METAS_ORG.Instagram;
  const seg = (c && c.auditoria && c.auditoria.perfil && c.auditoria.perfil.seguidores) || 0;

  const filas = [
    { k:'Engagement rate', q:'De cada 100 que lo vieron, cuántos hicieron algo',
      f:'(me gusta + comentarios + compartidos + guardados) ÷ alcance × 100',
      meta:'≥ ' + B.er[0] + '%', nota:'Es el KPI principal: dice si el contenido le importa a alguien.' },
    { k:'Tasa de guardado', q:'Cuántos lo guardaron para volver',
      f:'veces guardado ÷ alcance × 100', meta:'≥ ' + B.guard[0] + '%',
      nota:'La señal más fuerte en 2026: guardar es la forma que tiene la gente de decir "esto me sirve".' },
    { k:'Tasa de compartido', q:'Cuántos lo mandaron a otra persona',
      f:'veces compartido ÷ alcance × 100', meta:'≥ ' + B.comp[0] + '%',
      nota:'Un compartido vale más que diez me gusta: es distribución gratis.' },
    { k:'Tasa de comentario', q:'Cuántos se sintieron movidos a escribir',
      f:'comentarios ÷ alcance × 100', meta:'≥ ' + B.comen[0] + '%',
      nota:'Sin una pregunta concreta al final, casi nadie comenta.' },
    { k:'Alcance sobre seguidores', q:'Cuánto lo distribuyó la red',
      f:'alcance ÷ seguidores × 100', meta:'≥ ' + B.alc[0] + '%',
      nota:'Si no pasa del 30%, el problema son los primeros 3 segundos, no el contenido.' },
    { k:'Retención', q:'Cuántos llegan al final',
      f:'(tiempo medio visto ÷ duración) × 100', meta:'≥ 50%',
      nota:'La red mide esto para decidir si te muestra más. Se arregla cortando, no añadiendo.' },
    { k:'Seguidores nuevos', q:'Cuántos te siguieron por esta pieza',
      f:'seguidores nuevos ÷ alcance × 100', meta:'≥ 0,2%',
      nota:'Gusta el contenido pero no queda claro qué gana la gente quedándose.' },
    { k:'Clics al enlace', q:'Cuántos fueron a tu perfil o al link',
      f:'clics ÷ alcance × 100', meta:'≥ 1%',
      nota:'Es lo más cercano a una venta que se puede medir sin pagar.' }
  ];
  return {
    red,
    filas,
    seguidores: seg,
    regla:'Mide una sola cosa por semana. Si cambias gancho y formato a la vez, no sabrás qué funcionó.',
    umbral:'Con menos de 500 de alcance no hay dato: es ruido. Espera 72 horas antes de tocar nada.'
  };
}

/* ---------- auditoría de redes ---------- */
const VD_REDES = ['Instagram','TikTok','Facebook','YouTube','LinkedIn'];

const VD_EJES_AUD = [
  { id:'bio',        nombre:'Biografía',        que:'Si en 3 segundos se entiende qué vende, para quién y qué hacer.' },
  { id:'perfil',     nombre:'Primera impresión', que:'Foto, nombre, destacados y los primeros 9 posts como escaparate.' },
  { id:'frecuencia', nombre:'Frecuencia',        que:'Cuántos posts por semana y si es constante.' },
  { id:'formatos',   nombre:'Formatos',          que:'Qué usa y qué le falta: video corto, carrusel, testimonio.' },
  { id:'ganchos',    nombre:'Ganchos',           que:'Si los primeros 3 segundos dicen algo o solo saludan.' },
  { id:'prueba',     nombre:'Prueba',            que:'Si muestra clientes, resultados y entregas reales.' },
  { id:'cta',        nombre:'Llamado a la acción', que:'Si hay uno claro y si es el mismo en bio, posts y anuncios.' }
];

/* el puntaje lo calcula la app, no la IA */
function vdPuntajeAuditoria(a){
  if(!a) return null;
  const ejes = a.ejes || [];
  let total = 0, cuenta = 0;
  VD_EJES_AUD.forEach(def => {
    const e = ejes.find(x => (x.eje||'').toLowerCase().indexOf(def.nombre.split(' ')[0].toLowerCase()) === 0) ||
              ejes.find(x => (x.eje||'').toLowerCase().indexOf(def.id) >= 0);
    cuenta++;
    if(!e) return;
    const st = String(e.estado||'').toLowerCase();
    if(st === 'bien') total += 1;
    else if(st === 'flojo') total += 0.5;
  });
  const pct = cuenta ? Math.round((total / cuenta) * 100) : 0;
  return {
    pct,
    letra: pct >= 85 ? 'A' : pct >= 70 ? 'B' : pct >= 55 ? 'C' : pct >= 40 ? 'D' : 'E',
    rojos: ejes.filter(e => String(e.estado).toLowerCase() === 'falta').length,
    flojos: ejes.filter(e => String(e.estado).toLowerCase() === 'flojo').length,
    bien: ejes.filter(e => String(e.estado).toLowerCase() === 'bien').length
  };
}


/* ============================================================
   MEDICIÓN ORGÁNICA · lo que se ve en la app de la red social
   ============================================================ */
const VD_METAS_ORG = {
  Instagram:{ er:[3,1.5], alc:[30,15], guard:[1.5,.8], comp:[1,.4], comen:[.5,.25] },
  TikTok:   { er:[5,2.5], alc:[100,50], guard:[2,1],   comp:[1.5,.6], comen:[.6,.3] },
  Facebook: { er:[2,1],   alc:[20,10],  guard:[.8,.4], comp:[.8,.3],  comen:[.4,.2] },
  YouTube:  { er:[3,1.5], alc:[15,8],   guard:[1,.5],  comp:[.6,.3],  comen:[.5,.25] },
  LinkedIn: { er:[4,2],   alc:[25,12],  guard:[1,.5],  comp:[.8,.4],  comen:[.6,.3] }
};

/* ============================================================
   ESCALA DE 5 BANDAS · oro > verde > amarillo > naranja > rojo
   ============================================================ */
const VD_ESCALA = [
  { id:'oro',      nombre:'Oro',      color:'#f0c85a', pos:[90,100] },
  { id:'verde',    nombre:'Verde',    color:'#5fbf8a', pos:[70,90]  },
  { id:'amarillo', nombre:'Amarillo', color:'#dcd23f', pos:[50,70]  },
  { id:'naranja',  nombre:'Naranja',  color:'#e0863f', pos:[30,50]  },
  { id:'rojo',     nombre:'Rojo',     color:'#d9544f', pos:[0,30]   }
];

/* ubica un valor en la escala. devuelve nivel 0(rojo)–4(oro), banda y posición 0–100 del reloj */
function vdNivel(valor, meta, dir){
  const v = Number(valor) || 0, m = Number(meta) || 1;
  const r = dir === 'down' ? (v > 0 ? m / v : 2) : v / m;
  let nivel, pos;
  if(r >= 1.5)      { nivel = 4; pos = 90 + Math.min(10, (r - 1.5) * 20); }
  else if(r >= 1)   { nivel = 3; pos = 70 + (r - 1) / 0.5 * 20; }
  else if(r >= 0.75){ nivel = 2; pos = 50 + (r - 0.75) / 0.25 * 20; }
  else if(r >= 0.5) { nivel = 1; pos = 30 + (r - 0.5) / 0.25 * 20; }
  else              { nivel = 0; pos = Math.max(3, r / 0.5 * 30); }
  const e = VD_ESCALA[4 - nivel];
  return { nivel, banda:e.id, color:e.color, pos:Math.round(Math.min(100, pos)) };
}

/* ---- orgánico: interacción, guardados, compartidos, alcance ---- */
function vdSemaforoOrg(m){
  const N = v => { const x = parseFloat(String(v).replace(',','.')); return isNaN(x) ? 0 : x; };
  const vistas = N(m.vistas) || N(m.impresiones);
  const alc = N(m.alcance) || N(m.vistas) || N(m.impresiones);
  if(!alc) return [];
  const likes = N(m.likes), com = N(m.comentarios), sh = N(m.compartidos), sv = N(m.guardados);
  const seg = N(m.seguidores), ret = N(m.retencion), nue = N(m.seguidores_nuevos), clic = N(m.clics);
  const red = VD_METAS_ORG[m.red] ? m.red : 'Instagram';
  const B = VD_METAS_ORG[red];
  const filas = [];
  const push = (label, valor, und, verde, ambar, metaTxt, nota) => {
    const n = vdNivel(valor, verde, 'up');
    filas.push({ id:label.toLowerCase(), label, und, valor:Math.round(valor*100)/100,
      meta:metaTxt, nota, nivel:n.nivel, banda:n.banda, pos:n.pos,
      estado: n.nivel >= 3 ? 'ok' : n.nivel === 2 ? 'mid' : 'bad' });
  };

  const inter = likes + com + sh + sv;
  if(inter) push('Engagement rate', inter/alc*100, '%', B.er[0], B.er[1],
    '≥ '+B.er[0]+'%', 'de los que lo vieron, interactuaron');
  if(sv) push('Tasa de guardado', sv/alc*100, '%', B.guard[0], B.guard[1],
    '≥ '+B.guard[0]+'%', 'lo guardaron para volver');
  if(sh) push('Tasa de compartido', sh/alc*100, '%', B.comp[0], B.comp[1],
    '≥ '+B.comp[0]+'%', 'lo mandaron a alguien');
  if(com) push('Tasa de comentario', com/alc*100, '%', B.comen[0], B.comen[1],
    '≥ '+B.comen[0]+'%', 'les movió a escribir');
  if(seg) push('Alcance sobre seguidores', alc/seg*100, '%', B.alc[0], B.alc[1],
    '≥ '+B.alc[0]+'%', 'cuánto lo distribuyó la red');
  if(ret) push('Retención', ret, '%', 50, 30, '≥ 50%', 'llegaron al final');
  if(nue && alc) push('Seguidores nuevos', nue/alc*100, '%', .2, .08, '≥ 0,2%', 'te siguieron por esto');
  if(clic && alc) push('Clics al enlace', clic/alc*100, '%', 1, .5, '≥ 1%', 'fueron a tu perfil o link');
  return filas;
}

/* ---- pago: administrador de anuncios de Meta ---- */
const VD_METAS = {
  hook: { label:'Hook rate',  und:'%',    verde:25,  ambar:18,  dir:'up',   nota:'los primeros 3 segundos' },
  hold: { label:'Retención',  und:'%',    verde:15,  ambar:10,  dir:'up',   nota:'llegan al final' },
  ctr:  { label:'CTR',        und:'%',    verde:1.5, ambar:1,   dir:'up',   nota:'hacen clic' },
  cpm:  { label:'CPM',        und:'US$',  verde:25,  ambar:40,  dir:'down', nota:'por mil impresiones' },
  cpc:  { label:'CPC',        und:'US$',  verde:1.5, ambar:3,   dir:'down', nota:'por clic' },
  freq: { label:'Frecuencia', und:'',     verde:2.5, ambar:3.5, dir:'down', nota:'veces que la ve la misma persona' },
  cpcv: { label:'Costo por conversación', und:'US$', verde:8, ambar:15, dir:'down', nota:'lo que pagas por un chat' }
};

function vdSemaforoPago(m){
  const N = v => { const x = parseFloat(String(v).replace(',','.')); return isNaN(x) ? 0 : x; };
  const imp = N(m.impresiones), alc = N(m.alcance), r3 = N(m.repro3s),
        comp = N(m.completas), clic = N(m.clics), gasto = N(m.gasto), conv = N(m.conversaciones);
  if(!imp) return [];
  const filas = [];
  const push = (id, valor) => {
    const g = VD_METAS[id];
    const n = vdNivel(valor, g.verde, g.dir);
    filas.push({ id, label:g.label, und:g.und, nota:g.nota,
      valor: Math.round(valor*100)/100,
      meta: (g.dir === 'up' ? '≥ ' : '≤ ') + g.verde + (g.und === '%' ? '%' : ''),
      nivel:n.nivel, banda:n.banda, pos:n.pos,
      estado: n.nivel >= 3 ? 'ok' : n.nivel === 2 ? 'mid' : 'bad' });
  };
  if(r3) push('hook', r3/imp*100);
  if(comp) push('hold', comp/imp*100);
  if(clic) push('ctr', clic/imp*100);
  if(gasto) push('cpm', gasto/imp*1000);
  if(gasto && clic) push('cpc', gasto/clic);
  if(alc && imp/alc >= 1) push('freq', imp/alc);
  if(gasto && conv) push('cpcv', gasto/conv);
  return filas;
}

function vdSemaforo(m){
  if(!m) return [];
  return m.modo === 'pago' ? vdSemaforoPago(m) : vdSemaforoOrg(m);
}

/* puntaje 0–100 del resultado real, según el modo */
function vdResultadoScore(m){
  const f = vdSemaforo(m || {});
  if(!f.length) return null;
  const peso = n => [12, 32, 55, 80, 100][n] || 12;   /* rojo, naranja, amarillo, verde, oro */
  const base = f.reduce((s2,x) => s2 + peso(x.nivel == null ? 3 : x.nivel), 0) / f.length;

  /* el orgánico premia lo que el algoritmo lee como señal fuerte: guardados y compartidos */
  if(m && m.modo !== 'pago'){
    const g = f.find(x => /guardado/i.test(x.label));
    const c2 = f.find(x => /compartido/i.test(x.label));
    const bonus = (g && g.estado === 'ok' ? 6 : 0) + (c2 && c2.estado === 'ok' ? 6 : 0);
    return Math.round(Math.min(100, base + bonus));
  }
  return Math.round(base);
}

/* una sola lectura, en español claro, y una acción concreta */
function vdLecturaOrg(p, m){
  const f = vdSemaforo(m || {});
  if(!f.length) return { tono:'mid', lectura:'Faltan datos: con alcance y una interacción ya se puede leer.',
    accion:'Completa las cifras de la publicación.' };
  const get = n => f.find(x => new RegExp(n,'i').test(x.label));
  const er = get('engagement'), alcS = get('alcance sobre'), ret = get('retención'),
        gua = get('guardado'), com = get('compartido'), seg = get('seguidores nuevos');
  const verdes = f.filter(x => x.estado === 'ok').length;
  const malos = f.filter(x => x.estado === 'bad');

  if(gua && gua.estado === 'ok' && com && com.estado === 'ok')
    return { tono:'ok',
      lectura:`La gente la guarda y la comparte: ${gua.valor}% la guardó y ${com.valor}% la mandó a alguien. Esas dos son las señales que la red premia.`,
      accion:'Haz tres más de este mismo formato esta semana. No cambies el estilo: cambia el tema.' };
  if(alcS && alcS.estado === 'bad' && er && er.estado !== 'bad')
    return { tono:'mid',
      lectura:`Quien la vio, interactuó bien (${er.valor}%), pero la red casi no la mostró: llegó a ${alcS.valor}% de tus seguidores.`,
      accion:'El problema son los primeros 3 segundos. Cambia el gancho y vuelve a publicarla; el resto del contenido está bien.' };
  if(er && er.estado === 'bad')
    return { tono:'bad',
      lectura:`Poca interacción: ${er.valor}% de los que la vieron hicieron algo. La vieron y siguieron de largo.`,
      accion:'Pide una acción concreta al final. La mayoría de la gente no comenta si no se le dice qué comentar.' };
  if(ret && ret.estado === 'bad')
    return { tono:'mid',
      lectura:`Solo ${ret.valor}% llega al final. La pieza se cae antes de que aparezca lo que vendes.`,
      accion:'Corta los primeros 5 segundos y adelanta la prueba. Lo que sobra es la introducción.' };
  if(seg && seg.estado === 'bad' && er && er.estado === 'ok')
    return { tono:'mid',
      lectura:`Interactúan (${er.valor}%) pero casi nadie te sigue. Gusta el contenido, no queda claro qué ganas siguiéndote.`,
      accion:'Cierra con el motivo para seguirte: qué van a ver mañana si se quedan.' };
  if(verdes >= f.length - 1 && verdes >= 2)
    return { tono:'ok',
      lectura:`Funciona en todo lo que se puede medir: ${verdes} de ${f.length} en verde.`,
      accion:'Repite la fórmula con otro ángulo. Este formato ya está probado.' };
  /* el engagement manda: si la gente reacciona, la pieza sirve aunque falle una métrica suelta */
  if(er && er.estado === 'ok' && verdes >= Math.ceil(f.length/2)){
    const flojo = malos[0] || f.find(x => x.estado === 'mid');
    return { tono:'ok',
      lectura:`Funciona: ${er.valor}% de los que la vieron reaccionaron${gua && gua.estado==='ok' ? `, y ${gua.valor}% la guardó` : ''}. La pieza sirve.`,
      accion:(flojo ? 'Lo único flojo es ' + flojo.label.toLowerCase() + ' (' + flojo.valor + (flojo.und==='%'?'%':'') + '). Arréglalo en la próxima y repite el resto tal cual.'
        : 'Repite el formato con otro tema.') };
  }
  return { tono:'mid',
    lectura:`Va a medias: ${verdes} de ${f.length} en verde. Hay una palanca clara.`,
    accion:(malos[0] || f[0]).label + ': ahí está el trabajo de esta semana.' };
}

function vdLecturaMedicion(p, m){
  if(m && m.modo !== 'pago') return vdLecturaOrg(p, m);
  const f = vdSemaforo(m || {});
  if(!f.length) return { lectura:'Faltan datos: con impresiones y una métrica más ya se puede leer.', accion:'Completa las cifras.', tono:'mid' };
  const get = id => f.find(x => x.id === id);
  const hook = get('hook'), hold = get('hold'), ctr = get('ctr'), freq = get('freq'), cpcv = get('cpcv');
  const verdes = f.filter(x => x.estado === 'ok').length;

  if(hook && hook.estado === 'bad')
    return { tono:'bad',
      lectura:`El gancho no retiene: solo ${hook.valor}% pasa de los 3 segundos. La gente ve el primer segundo y sigue de largo.`,
      accion:'Graba otro primer segundo para la misma pieza. No toques el resto: el problema no está ahí.' };
  if(hold && hold.estado === 'bad' && hook && hook.estado !== 'bad')
    return { tono:'bad',
      lectura:`Engancha bien (${hook.valor}% a los 3 s) pero se cae: solo ${hold.valor}% llega al final. Hay un bache en el medio.`,
      accion:'Corta la pieza un 30% y adelanta la prueba. Lo que se cae es el desarrollo, no el gancho.' };
  if(ctr && ctr.estado === 'bad')
    return { tono:'bad',
      lectura:`Te miran pero no hacen clic: CTR de ${ctr.valor}%. El gancho funciona; lo que no convence es la oferta.`,
      accion:'Cambia el CTA y pon el precio en pantalla desde el segundo 3. El video se queda.' };
  if(cpcv && cpcv.estado === 'bad')
    return { tono:'mid',
      lectura:`Llegan conversaciones, pero caras: US$${cpcv.valor} por chat. El anuncio funciona y el filtro no.`,
      accion:'Filtra antes del chat: pide el requisito en el copy ("con pasaporte o licencia"). Menos chats y mejores.' };
  if(freq && freq.estado === 'bad')
    return { tono:'mid',
      lectura:`La misma gente la está viendo ${freq.valor} veces. Ya la conocen y el CTR va a seguir cayendo.`,
      accion:'Amplía el público o cambia el creativo. Repetirle el anuncio a quien ya lo vio no vende más.' };
  if(verdes >= f.length - 1 && verdes >= 2)
    return { tono:'ok',
      lectura:`Funciona. ${verdes} de ${f.length} métricas en verde, con ${hook ? hook.valor + '% de gancho' : 'buen rendimiento'}.`,
      accion:'No la toques. Súbele el presupuesto un 30% y prepara dos ganchos nuevos para cuando se canse.' };
  return { tono:'mid',
    lectura:`Va a medias: ${verdes} de ${f.length} métricas en verde. Hay una palanca clara.`,
    accion:(f.find(x=>x.estado==='bad') || f[0]).label + ': ahí está el trabajo de esta semana.' };
}
