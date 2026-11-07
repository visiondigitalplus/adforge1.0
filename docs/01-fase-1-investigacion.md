# FASE 1 — INVESTIGACIÓN
### Sistema de creación de anuncios ganadores de Meta (y contenido viral orgánico)
**Documento maestro · v1.0 · Noviembre 2026**

---

## 0. Resumen ejecutivo

Esta fase no produce anuncios: produce **materia prima verificable** (evidencia) para que la Fase 2 (la página) pueda generar anuncios e ideas de contenido con alta probabilidad de rendir.

La lógica del sistema es simple y es el corazón de todo el proyecto:

> **No inventamos creativos. Detectamos lo que ya está funcionando en el mercado, medimos por qué funciona, lo descomponemos en su estructura y lo reensamblamos con nuestra oferta.**

El resultado de la Fase 1 es un **expediente de investigación** por nicho/país/oferta que contiene:

1. Un **tablero de anuncios ganadores** (longevidad, escalado, objetivo, formato, país).
2. Un **mapa de demanda**: qué busca la gente en Google, en las IAs y en cada red social.
3. Un **radar de contenido viral** por red con métricas de interacción reales.
4. El **desglose de ingeniería inversa** de los 10–20 contenidos top (gancho, promesa, mecanismo, prueba, CTA, formato, ritmo).
5. Una **matriz de ángulos → ganchos → CTAs** lista para generar creativos.
6. El **brief de producción**: guion escena por escena, copy, y los prompts de imagen/video.

Todo lo anterior queda en un formato que la página consume directamente (ver §12: contrato de datos).

---

## 1. Por qué esta fase es más importante en 2026 que en 2022

En 2026 la segmentación manual casi no existe como palanca. Lo que decide si tu anuncio se muestra es **el creativo y la calidad de la señal**. Esto cambia la naturaleza de la investigación: ya no buscamos "públicos", buscamos **conceptos creativos distintos y probados**.

| Sistema de Meta | Qué hace | Implicación directa para la investigación |
|---|---|---|
| **Andromeda** (recuperación / retrieval, desde dic-2024, extendido en Q4-2025 y 2026) | Filtra millones de anuncios elegibles y deja ~1.000–1.500 candidatos por impresión. Reportado: +6% recall, +8% calidad de anuncios. | Solo entran a la subasta los anuncios que **el sistema entiende como conceptos distintos**. Copiar el mismo ángulo 10 veces = 1 solo concepto. Necesitamos **diversidad semántica**, no variaciones cosméticas. |
| **GEM** (Generative Ads Recommendation Model, en producción desde Q2-2025, detallado nov-2025) | Modelo de ranking a escala LLM; "enseña" a los modelos pequeños por destilación. Reportado: +5% conversiones en IG, +3% en FB Feed. | GEM **lee el contenido del anuncio** (texto, imagen, video) y lo cruza con preferencias del usuario. El copy y el gancho importan de forma literal: es lenguaje lo que se está evaluando. |
| **Lattice** (ranking unificado entre objetivos y superficies) | Un solo modelo grande en lugar de miles de modelos aislados. Reportado: +12% calidad, hasta +6% conversiones. | Un ángulo que funciona en Reels informa el Feed y viceversa. Un gancho que gana en orgánico tiene transferencia real a pauta. **Valida investigar redes orgánicas.** |
| **UTIS** (bucle de encuestas, publicado ene-2026) | Calibra el ranking con "interés real" declarado por el usuario, no solo clics. | El clickbait puro se penaliza. Los ganchos deben tener **correspondencia real entre promesa y resultado**. |
| **Advantage+ como default** (unificado 2025–2026; API legacy deprecada oct-2025) | Automatiza presupuesto, público y ubicaciones. | La estructura de campaña ya no es la palanca; el **volumen y la diversidad creativa** sí. Meta reporta soporte de hasta ~150 combinaciones creativas por campaña; el punto dulce práctico es 20–50. |
| **Métricas de creativo en 2026** | Hook Rate (ven más de 3 seg.), Hold Rate (ven al 50%), Conversion Rate; Andromeda añadió puntuación separada de los primeros 3 segundos. | El **gancho es la métrica #1 de video**. Por eso la Fase 1 dedica un módulo entero (M4) a extraer ganchos ganadores. |

**Traducción estratégica:** en un mundo donde la IA de Meta lee, agrupa y rankea creativos, la ventaja competitiva es **un pipeline de investigación que produce conceptos genuinamente diferentes, cada uno con un gancho validado por el mercado.**

> Nota de rigor: las cifras de mejora son las publicadas por Meta (fuente: Meta Engineering / earnings calls). Úsalas como contexto direccional, no como garantía. Fuentes al final del documento (§14).

---

## 2. Los 8 módulos de la Fase 1

```
M0 Briefing  →  M1 Biblioteca de anuncios  →  M2 Demanda y keywords
     →  M3 Radar de contenido viral  →  M4 Ingeniería inversa
     →  M5 Síntesis de ángulos  →  M6 Producción (ideas + prompts)
     →  M7 Validación y plan de prueba
```

Cada módulo tiene: **entradas** (qué se necesita), **procedimiento** (cómo se hace, herramientas), **salida** (qué archivo/registro produce) y **criterio de calidad**.

---

### M0 — Briefing: el expediente del solicitante

Sin esto, la investigación es decorativa. La página debe capturar esto **antes** de investigar (ver Fase 2, formulario de 4 pasos).

| Campo | Por qué se necesita |
|---|---|
| **Nicho / categoría** | Define los filtros de Ad Library y los benchmarks de longevidad. |
| **Sub-nicho y ángulo de entrada** | "Fitness" es inútil; "entrenamiento para mujeres 35-50 con dolor lumbar" es operable. |
| **País / región / idioma** | Un anuncio activo 90 días en EE.UU. no valida nada en Venezuela o España. La saturación y el CPM cambian por mercado. |
| **Producto/servicio y precio** | El precio determina el objetivo de campaña (tráfico vs. ventas) y el tipo de gancho permitido. |
| **Oferta y diferenciador** | Qué prometemos y qué tenemos que no tenga la competencia (mecanismo único). |
| **Avatar (quién, dolor, deseo, objeción #1)** | Se contrasta contra lo que dicen los comentarios reales (M1.6). |
| **Objetivo de negocio** | Mensajes, prospectos, ventas, tráfico, reconocimiento. |
| **Presupuesto mensual** | Define cuántos conceptos se pueden probar (ver §13, plan de prueba). |
| **Activos disponibles** | ¿Hay video? ¿UGC? ¿Testimonios? ¿Presupuesto para producir? |
| **Restricciones** | Categorías especiales (salud, finanzas, empleo, política, vivienda), claims prohibidos. |
| **Competidores / referentes (3-10)** | Punto de partida de la Ad Library. |

**Salida:** `brief.json` (o el registro en la página).
**Calidad:** si un desconocido no puede redactar un anuncio con este brief, el brief está incompleto.

---

### M1 — Biblioteca de anuncios de Meta (inteligencia competitiva)

**Herramienta:** Biblioteca de Anuncios de Meta (facebook.com/ads/library) + Página de transparencia de la página.

#### 1.1 Filtros de arranque
- **País** = mercado objetivo (repetir el barrido por cada país prioritario; nunca mezclar).
- **Categoría de anuncio**: "Todos" para descubrir; y volver a barrer con **"Problemas sociales, elecciones o política"** solo si el nicho lo justifica.
- **Estado**: **Activos** (clave: un anuncio inactivo ya no es evidencia de nada).
- **Plataforma**: separar Facebook / Instagram / Audience Network / Threads / Messenger.
- **Formato**: video, imagen, carrusel, colección.
- **Búsqueda por texto**: no solo el nombre de la marca. Busca por **dolor, deseo y mecanismo** ("dolor lumbar", "sin pastillas", "en 21 días", "método").

#### 1.2 La variable reina: **longevidad**
Un anuncio activo es un anuncio que alguien está pagando porque le funciona. Nadie sostiene pérdidas durante meses.

| Días activo | Lectura |
|---|---|
| 1–6 | Ruido. Test en curso. No es evidencia. |
| 7–13 | Señal débil. Puede estar en fase de aprendizaje. |
| 14–29 | **Señal**: superó el test inicial. Copiar estructura con cautela. |
| 30–59 | **Validado**: rendimiento sostenido. Prioridad alta. |
| 60–89 | **Ganador**: hay economía unitaria positiva detrás. Prioridad máxima. |
| 90+ | **Ganador consolidado**: el copy, el gancho y la oferta están probados. Es el patrón a estudiar primero. |

Ajuste por mercado: en nichos estacionales (Buen Fin, Black Friday, vuelta a clases) la longevidad se lee en ciclos; en nichos de alto ticket, 30 días puede equivaler a 90 de e-commerce.

#### 1.3 Escalado: el multiplicador de variantes
Cuenta **cuántos anuncios distintos de la misma página usan el mismo gancho/mismo copy con cambios menores** (imagen distinta, primer segundo distinto, mismo cuerpo).
- 1 solo anuncio → test.
- 2–3 variantes → está funcionando y lo están exprimiendo.
- 4–10 variantes → **ganador escalado** (money-maker).
- 10+ variantes → ángulo saturado: alto potencial **y** alta competencia. Copia la estructura, cambia el ángulo.

#### 1.4 Objetivo de campaña: cómo inferirlo
La Ad Library no muestra el objetivo. Se infiere con estas señales:

| Señal observable | Objetivo probable |
|---|---|
| CTA "Comprar", "Comprar ahora", "Ir a la tienda", precio visible, catálogo | **Ventas / Conversiones** |
| CTA "Más información", landing con formulario o WhatsApp | **Prospectos (leads)** |
| CTA "Enviar mensaje", "WhatsApp", "Enviar mensaje de Instagram" | **Mensajes** |
| CTA "Registrarse", "Reservar", sin formulario largo | **Leads / Registro** |
| Solo video, sin CTA duro, cuenta grande, frecuencia de marca | **Reconocimiento / Alcance** |
| CTA "Ver más", enlace a blog/nota | **Tráfico** |
| CTA "Me gusta", "Comentar", "Ver ofertas" | **Interacción** |

Regla: si el anuncio tiene precio, carrito y urgencia → es de ventas. Si tiene gancho educativo y formulario → es de leads. **Investiga el objetivo del ganador porque define el tipo de gancho que debes usar contigo.**

#### 1.5 Ficha de registro (una por anuncio)
Guarda **evidencia, no impresiones**:
`ID | Página | País | Fecha de inicio | Días activos | Variantes | Objetivo inferido | CTA | Formato | Texto completo | Descripción del visual (o guion por escenas) | Landing URL | Notas`

**Salida:** `ad_library.csv` con 40–100 anuncios por mercado (de ahí salen los 10–20 que pasan a M4).

---

### M2 — Demanda: keywords en IAs, Google y redes

Aquí se descubre **con qué palabras piensa la gente el problema**, que es distinto de cómo lo pensamos nosotros.

#### 2.1 Palabras clave en IAs (ChatGPT, Gemini, Perplexity, Meta AI, Claude)
No hay una "API de keywords de IA" pública y fiable: se estima por **simulación de prompts**. Procedimiento:
1. Escribe 15–20 prompts reales de tu avatar ("cómo quitar el dolor de espalda sin pastillas", "qué curso de X me conviene").
2. Registra qué **términos** repite la IA (entidades, mecanismos, miedos, formatos de respuesta).
3. Usa el prompt de "extracción de entidades" del Prompt Pack (`02-prompt-pack.md` › P-03).
4. Señal de oro: los **títulos y preguntas que la IA usa como estructura** son los mismos temas que la gente busca. Aprovéchalos como ganchos.

> Ventaja competitiva real: la gente cada vez escribe en la IA lo que no se atreve a escribirle a Google. Esas frases son copy puro.

#### 2.2 Google
- **Google Trends**: interés por región y periodo; "consultas relacionadas" y "en ascenso". Filtrar por país objetivo.
- **Autocompletar y "búsquedas relacionadas"**: la fuente gratuita más subestimada. Recolecta preguntas semilla y baja 2 niveles.
- **AnswerThePublic**: mapa de preguntas (quién/qué/cómo/por qué/dónde). Úsalo para **ángulos de contenido educativo** y para el módulo de objeciones.
- **Keyword Planner / Search Console** (si tienes web): volumen y CTR real.
- **Semrush/Ahrefs** (si hay presupuesto): volumen, dificultad, intención.

#### 2.3 Redes sociales (buscador nativo de cada red)
Busca el término **y** el dolor, en cada red, con su propio buscador, y ordena por relevancia/popularidad:

| Red | Cómo ordenar por rendimiento | Qué extraer |
|---|---|---|
| **TikTok** | Buscador → pestaña "Videos"; orden por relevancia + filtrar por "Este mes"/"Últimos 90 días". | Ganchos de 3 seg., sonidos en tendencia, formato UGC, comentarios. |
| **Instagram** | Buscador + Reels; "Cuentas similares"; guardados y compartidos (visibles en la ficha de insights públicos aproximados). | Estructura de carrusel, primer frame, CTA de guardado. |
| **YouTube** | Ordenar por "Número de visualizaciones" + filtro de fecha; YouTube Shorts. | Estructura larga → de ahí salen los guiones; títulos = ganchos. |
| **Facebook** | Buscador + grupos; publicaciones con más comentarios. | Lenguaje del público real, objeciones, testimonios. |
| **LinkedIn** | Búsqueda por palabra; filtrar por publicaciones. | Ángulos B2B, autoridad, datos. |
| **Pinterest** | Búsqueda visual; pines guardados. | Estética, formatos de infografía, títulos de portada. |
| **X / Threads** | Búsqueda + "Top". | Opiniones filosas, ángulos de contraste. |

**Métrica de rendimiento que usamos** (uniforme en todas las redes):
`ER = (reacciones + comentarios + compartidos + guardados) / visualizaciones × 100`

#### 2.4 Social Blade (y equivalentes)
Úsalo para **evaluar al competidor, no al contenido**: crecimiento de seguidores/vistas, cadencia de publicación, ratio vistas/suscriptores. Si un competidor crece 20% en 30 días con el mismo formato repetido, ese formato está funcionando: pásalo a M3/M4.

**Salida:** `keywords.csv` (término, fuente, intención: informativa/comercial/transaccional, país, volumen o señal, usar en gancho / usar en cuerpo / usar en landing).

---

### M3 — Radar de contenido viral por red

**Objetivo:** identificar los 20–30 contenidos con mejor rendimiento *reciente* (no histórico) en el nicho y país.

**Regla de oro:** viral ≠ ganador. Un contenido con 5M de vistas y 0,2% de ER es entretenimiento; uno con 80k vistas y 9% de ER y 400 comentarios de "¿dónde lo compro?" es un anuncio esperando ser producido.

**Selección:**
1. Filtra por **últimos 30/90 días** (lo viejo no sirve: la fatiga creativa es real).
2. Excluye cuentas gigantes de entretenimiento general: sesgo de tamaño, no de mensaje.
3. Prioriza **cuentas del mismo tamaño que la tuya** (o hasta 10×): lo replicable vive ahí.
4. Guarda **captura + URL + métricas al momento de la captura** (las métricas cambian).

**Salida:** `contenido_viral.csv` con `URL | Red | Cuenta | Seguidores | Fecha | Vistas | Reacciones | Comentarios | Compartidos | Guardados | ER% | Velocidad (vistas/día) | Formato | Tema`.

---

### M4 — Ingeniería inversa (el módulo que convierte evidencia en estructura)

Para cada contenido top, se descompone en **9 capas**. Esta plantilla es la que la página debe convertir en formulario.

| # | Capa | Qué registrar |
|---|---|---|
| 1 | **Gancho (0–3 s / primera línea)** | Texto exacto o descripción del primer frame. Tipo de gancho (ver §7). |
| 2 | **Promesa** | Qué se promete y en cuánto tiempo. |
| 3 | **Mecanismo** | Cómo dice que lo logra ("el método de 3 fases…"). Es el corazón del "por qué tú". |
| 4 | **Prueba** | Dato, testimonio, antes/después, autoridad, demostración. |
| 5 | **Objeciones que derriba** | Y en qué segundo lo hace. |
| 6 | **Estructura / ritmo** | Segunda a segunda o slide a slide. |
| 7 | **CTA** | Texto exacto + tipo (ver §7). |
| 8 | **Formato y producción** | UGC, talking head, demo, pantalla, carrusel, estático, texto sobre imagen, voz en off. |
| 9 | **Por qué funciona** | Hipótesis en una frase: ¿qué tensión psicológica resuelve? |

**Checklist de calidad:** si no puedes reescribir el contenido cambiando solo el 20% de las palabras y sigue teniendo sentido, no lo entendiste todavía.

---

### M5 — Síntesis: matriz de ángulos → ganchos → CTAs

Se cruzan las salidas de M1–M4 en una matriz. La página la construye automáticamente con estas dimensiones:

- **Eje A — Ángulo/Deseo** (qué quiere el avatar): resultado rápido · evitar dolor · estatus · pertenencia · miedo a perder · curiosidad/misterio · prueba social · autoridad · precio/valor · identidad ("soy el tipo de persona que…").
- **Eje B — Formato** (video UGC, video demo, carrusel, estático tipográfico, testimonio, comparativa, "antes/después").
- **Eje C — Nivel de conciencia** (Schwartz): inconsciente → consciente del problema → consciente de la solución → consciente del producto → más consciente (listo para oferta).
- **Eje D — Nivel de sofisticación del mercado**: si el mercado ya vio 50 veces "pierde peso en 30 días", necesitas **mecanismo nuevo o contra-narrativa**, no otra promesa.

El resultado son 3 rutas:
1. **Ruta Copiar-y-mejorar (70%):** mismo ángulo + mismo formato + misma estructura que el ganador validado, con nuestro mecanismo y nuestra prueba. Menor riesgo, resultados más rápidos.
2. **Ruta Adaptar (20%):** mismo ángulo en otro formato o para otro nivel de conciencia.
3. **Ruta Disruptiva (10%):** contra-narrativa del ángulo dominante del nicho (si todos prometen "rápido", nosotros "sin esfuerzo"; si todos gritan, nosotros en silencio).

---

### M6 — Producción de ideas (salida final de la fase)

Por cada idea, la página entrega los 9 campos obligatorios:

1. **Título interno** (para el equipo, no para el público).
2. **Ángulo** (eje A) + **formato** (eje B) + **nivel de conciencia**.
3. **Gancho** — 3 variantes, cada una con su arquetipo (§7).
4. **Descripción / cuerpo** — primeras 125 caracteres optimizados (lo que se ve antes del "ver más").
5. **Guion escena por escena** (video) o **slide por slide** (carrusel) con tiempos.
6. **CTA** — al menos 2 (uno de acción, uno de baja fricción).
7. **Prueba a usar** (qué activo real tenemos: testimonio, dato, demo).
8. **Prompt de imagen** (ver estructura en §6.1).
9. **Prompt de video / storyboard** (ver §6.2).
10. **Hipótesis a validar** y **métrica de éxito**.

---

### M7 — Validación antes de gastar un dólar

Ninguna idea pasa a producción sin pasar este filtro de 7 preguntas:

1. ¿Existe evidencia de un ganador activo (30+ días) en el mismo país con estructura equivalente? → *si no, es apuesta, no sistema.*
2. ¿El gancho se entiende sin sonido y en menos de 3 segundos?
3. ¿La promesa se cumple con el producto real? (compliance + UTIS: el interés declarado penaliza la desalineación)
4. ¿Tenemos la prueba que el anuncio original usa? Si no, ¿qué prueba alternativa tenemos?
5. ¿Es un concepto **distinto** de los otros 9 del lote? (Andromeda agrupa look-alikes)
6. ¿Resiste la política de anuncios? (claims de salud, antes/después, atributos personales: "¿tú, con sobrepeso?" está prohibido)
7. ¿Está listo el destino? (landing/WhatsApp con la misma promesa, carga <3 s, tracking con CAPI/EMQ correcto)

---

## 6. Especificaciones de producción

### 6.1 Estructura del prompt de imagen
```
[SUJETO] + [ACCIÓN/ESTADO] + [ENTORNO] + [ESTILO VISUAL] +
[ENCUADRE/LENTE] + [ILUMINACIÓN] + [PALETA] + [EMOCIÓN] +
[FORMATO: 4:5 / 9:16 / 1:1] + [NEGATIVOS: sin texto, sin logos, sin manos deformes]
```
Regla de oro: **el texto del anuncio NO va en la imagen generada**. Se compone aparte (Meta penaliza el texto quemado y el texto generado sale deformado). La imagen entrega el concepto; el copy entrega el mensaje.

### 6.2 Estructura del prompt de video / storyboard
```
ESCENA 1 (0-3s) | GANCHO visual + texto en pantalla | audio
ESCENA 2 (3-8s) | PROMESA | ...
ESCENA 3 (8-15s)| MECANISMO + prueba
ESCENA 4 (15-22s)| OBJECIÓN derribada
ESCENA 5 (22-30s)| CTA + oferta
```
Benchmarks de referencia: Hook Rate > 25–30% es sano (video); Hold Rate al 50% > 15–20%; si el Hook Rate es alto y la conversión baja, hay **desalineación entre gancho y oferta**.

### 6.3 Reglas de formato por red
- **Reels/TikTok/Shorts:** 9:16, subtítulos quemados, gancho visual en el primer frame, corte cada 1,5–2,5 s.
- **Feed FB/IG:** 4:5 (mejor rendimiento de área), copy con primera línea autosuficiente, CTA claro a los 125 caracteres.
- **Carrusel:** slide 1 = gancho (funciona como portada), último slide = CTA explícito; cada slide debe tener una razón para deslizar.
- **Estático:** una sola idea, texto grande, contraste alto, rostro humano o producto en contexto real.

---

## 7. Bibliotecas reutilizables

### 7.1 Los 12 arquetipos de gancho (validados en investigación de contenido viral)
| # | Arquetipo | Plantilla | Cuándo usarlo |
|---|---|---|---|
| 1 | **Contraintuitivo** | "Deja de hacer X. Es la razón de tu Y." | Mercado saturado de consejos |
| 2 | **Llamado directo** | "Si tienes [situación], esto es para ti." (ojo con atributos personales: reformular) | Audiencia muy definida |
| 3 | **Misterio/Cortina** | "Nadie te dice esto sobre X." | Curiosidad alta, ticket bajo |
| 4 | **Antes/Después implícito** | "Así estaba hace 30 días…" | Resultados visuales |
| 5 | **Prueba social numérica** | "347 personas ya lo hicieron esta semana." | Prueba disponible |
| 6 | **Autoridad prestada** | "Lo que [experto/institución] dice y nadie aplica." | Nichos técnicos/salud |
| 7 | **Costo de la inacción** | "Cada mes que pasa, pierdes [X]." | Decisiones postergadas |
| 8 | **Contra-narrativa de industria** | "Las [categoría] no funcionan. Y te explico por qué." | Sofisticación alta |
| 9 | **Demostración pura** | (acción, sin palabras, resultado visible) | Producto físico/SaaS |
| 10 | **Historia en primera persona** | "Vine a [país] con [dolor]…" | UGC / marca personal |
| 11 | **Pregunta-espejo** | "¿Por qué sigues haciendo [X] y aun así [Y]?" | Audiencia consciente del problema |
| 12 | **Especificidad imposible** | "El error del segundo 4 que arruina tu [X]." | Micro-ganchos de retención |

### 7.2 CTAs por objetivo
| Objetivo | CTA ganador típico |
|---|---|
| Mensajes (WhatsApp/DM) | "Escríbenos 'QUIERO' y te mando el plan" (palabra clave = filtro y tracking) |
| Prospectos | "Reserva tu diagnóstico sin costo (quedan 6 cupos)" |
| Ventas e-commerce | "Compra hoy y recibe [beneficio]" + garantía |
| Tráfico | "Mira la comparación completa" |
| Interacción | "Comenta 'GUÍA' y te la envío" (genera señal + lista) |

**Regla:** CTA de baja fricción + CTA de acción en el mismo creativo. Nunca dos CTAs de acción compitiendo.

---

## 8. Sistemas de puntuación (fórmulas exactas)

Estas fórmulas son las que implementa la página. Los umbrales son parámetros editables.

### 8.1 Longevity Score (0–100)
| Días activos | Puntos |
|---|---|
| < 7 | 10 |
| 7–13 | 25 |
| 14–29 | 45 |
| 30–59 | 65 |
| 60–89 | 80 |
| ≥ 90 | 100 |

### 8.2 Scale Score (0–100) — variantes del mismo copy
| Variantes | Puntos |
|---|---|
| 1 | 10 |
| 2–3 | 40 |
| 4–6 | 65 |
| 7–10 | 85 |
| > 10 | 100 |

### 8.3 Engagement (ER) y Viral Score (0–100)
`ER% = (reacciones + comentarios + compartidos + guardados) / vistas × 100`

| ER% | Puntos ER |
|---|---|
| < 1 | 10 |
| 1–2 | 35 |
| 2–4 | 55 |
| 4–6 | 75 |
| 6–10 | 90 |
| > 10 | 100 |

`Velocidad = vistas / días publicados`

| Velocidad | Puntos V |
|---|---|
| < 1.000 | 10 |
| 1k–10k | 30 |
| 10k–100k | 55 |
| 100k–1M | 80 |
| > 1M | 100 |

**Viral Score = 0,6 × Puntos ER + 0,4 × Puntos Velocidad**

### 8.4 Fit Score (0–100) — encaje con nuestro negocio
Se pregunta al analista (o al usuario) y se marca 1–5 en tres criterios; promedio × 20:
- Mismo país/idioma/cultura del avatar
- Misma categoría de oferta y rango de precio
- Misma etapa de conciencia del público

### 8.5 Opportunity Score (el número que prioriza todo)
**`Opportunity = 0,35 × Longevity + 0,20 × Scale + 0,25 × Viral + 0,20 × Fit`**

| Rango | Acción |
|---|---|
| 80–100 | Producir ya, ruta "copiar y mejorar" |
| 65–79 | Producir en el lote 1, con adaptación |
| 50–64 | Guardar como inspiración / segundo lote |
| < 50 | Descartar (o usar solo como dato de mercado) |

### 8.6 Índice de saturación del ángulo
`Saturación = nº de páginas distintas usando el mismo ángulo en el país (últimos 60 días)`
- 0–2: **ángulo virgen** → oportunidad de ser primero (más barato, más lento).
- 3–8: **zona dulce** → demanda validada con competencia manejable.
- 9–20: **competido** → necesitas mecanismo diferenciado.
- 20+: **saturado** → solo con contra-narrativa o precio.

---

## 9. Extras que agrego al sistema (no estaban en tu lista)

1. **Minería de comentarios y reseñas (la mina de oro).** Los comentarios del anuncio ganador y las reseñas de 1–3 estrellas de Amazon/Google Play/Trustpilot contienen **las objeciones y el lenguaje exacto** del avatar. 30 minutos ahí valen más que 3 horas de keywords. Prompt en el pack (P-05).
2. **Ingeniería inversa de la landing, no solo del anuncio.** La página de destino define el mecanismo y la oferta. Anota: headline, promesa, precio ancla, garantía, prueba, orden de secciones.
3. **Niveles de conciencia de Schwartz como eje obligatorio.** Un mismo gancho rinde 5× distinto según el nivel. La página debe etiquetar cada idea con su nivel y equilibrar el lote (no 10 ideas para el mismo nivel).
4. **Sofisticación de mercado.** Un mercado que ya escuchó tu promesa 100 veces necesita **mecanismo nuevo**, no promesa nueva. Documenta cuántas veces aparece la misma promesa en el nicho.
5. **Compliance como filtro previo, no posterior.** Salud, finanzas, empleo, vivienda, política y "atributos personales" son causa #1 de rechazo y de cuentas restringidas. La página debe marcar las ideas riesgosas antes de producir.
6. **Sinergia orgánico ↔ pauta.** Con Lattice, el rendimiento orgánico es señal de que el gancho funciona. Produce primero el orgánico, mide retention/guardados/compartidos, y escala a pauta **solo el gancho que ya probó retención**. Reduce el costo de test notablemente.
7. **Data hygiene.** Advantage+ depende de la calidad de la señal: CAPI + `event_id` + EMQ alto + eventos de conversión bien definidos. Un ganador con tracking roto parece un perdedor. Es parte de la fase de investigación porque define qué métrica vas a poder leer.
8. **Re-investigación programada.** La investigación no es un evento: es un sprint quincenal (ad library) + mensual (radar de contenido). La fatiga creativa mata anuncios en 3–6 semanas.
9. **Base de datos de ganadores propia.** Cada anuncio/contenido investigado se guarda con su puntuación y su desglose. En 6 meses tienes un activo que nadie puede comprar.
10. **Localización LatAm/VE.** CPM más bajo, WhatsApp como canal dominante, alta desconfianza hacia el pago online → el gancho de "pago contra entrega", "video de WhatsApp" y "asesoría personal" gana más de lo que gana en EE.UU. No copies ganchos de mercado USA sin traducir la fricción.
11. **Test de "una sola idea".** Si no puedes resumir el anuncio en una frase, son dos anuncios (o ninguno).
12. **Regla 70/20/10** (§5) como política de portafolio creativo: protege el resultado mientras innovas.

---

## 10. Stack de herramientas (sin APIs de pago)

| Necesidad | Herramienta gratuita | Alternativa de pago |
|---|---|---|
| Anuncios activos por país | Biblioteca de Anuncios de Meta | AdSpy, Foreplay, BigSpy |
| Tendencias de búsqueda | Google Trends, autocompletar | Semrush, Ahrefs |
| Preguntas de la gente | AnswerThePublic (límite gratis), Google "la gente también pregunta", Reddit, Quora | AlsoAsked, AnswerThePublic Pro |
| Keywords en IAs | ChatGPT/Gemini/Perplexity/Claude con el Prompt Pack | — |
| Rendimiento de contenido por red | Buscadores nativos + capturas | VidIQ, TubeBuddy, Metricool |
| Competencia en redes | Social Blade, Metricool (free) | Social Blade Pro, HypeAuditor |
| Extracción / orden de datos | Google Sheets, Notion, Airtable (free) | Airtable Pro |
| Análisis y síntesis | IA con el Prompt Pack (P-01 a P-12) | — |
| Verificación de landing | PageSpeed Insights, Wayback Machine (histórico de ofertas) | — |

---

## 11. Cronograma de la Fase 1 (sprint de 7 días)

| Día | Entregable |
|---|---|
| 1 | Briefing completo (M0) + definición de 3 países/nichos |
| 2 | Barrido Ad Library: 40–100 anuncios registrados (M1) |
| 3 | Scoring + selección de los 15 ganadores por Opportunity Score |
| 4 | Keywords y demanda (M2): Google, IAs, redes |
| 5 | Radar de contenido viral (M3): 20–30 contenidos con métricas |
| 6 | Ingeniería inversa de los top 10 (M4) + matriz de ángulos (M5) |
| 7 | 20 ideas producidas con ganchos, guiones y prompts (M6) + validación (M7) |

---

## 12. Contrato de datos (lo que la página debe consumir)

```json
{
  "brief": { "nicho": "", "pais": "", "idioma": "", "oferta": "",
             "precio": 0, "avatar": {}, "objetivo": "", "presupuesto": 0,
             "restricciones": [] },
  "ad_library": [ { "id": "", "pagina": "", "pais": "", "inicio": "",
                    "dias_activos": 0, "variantes": 0, "objetivo_inferido": "",
                    "cta": "", "formato": "", "copy": "", "guion": "",
                    "landing": "", "scores": { "longevity": 0, "scale": 0 } } ],
  "keywords": [ { "termino": "", "fuente": "", "intencion": "", "pais": "" } ],
  "contenido_viral": [ { "url": "", "red": "", "vistas": 0, "interacciones": 0,
                         "er": 0, "velocidad": 0, "formato": "" } ],
  "reverse_engineering": [ { "url": "", "gancho": "", "arquetipo": "",
                             "promesa": "", "mecanismo": "", "prueba": "",
                             "objeciones": "", "estructura": "", "cta": "",
                             "por_que_funciona": "" } ],
  "ideas": [ { "titulo": "", "angulo": "", "formato": "", "conciencia": "",
               "ganchos": ["", "", ""], "descripcion": "",
               "guion": [], "ctas": [], "prueba": "",
               "prompt_imagen": "", "prompt_video": "", "hipotesis": "" } ]
}
```

---

## 13. Plan de prueba (puente a la Fase 3)

Con presupuesto limitado se prueba **ancho, no profundo**:
- **Lote 1:** 10–20 conceptos **distintos** (un concepto = ángulo + formato + gancho), 1 anuncio por concepto. Presupuesto repartido; 5–7 días.
- **Criterio de corte:** Hook Rate < 20% → matar. Hold Rate bajo → problema de ritmo. CTR sano pero conversión baja → problema de landing/oferta.
- **Lote 2:** duplicar los 2–3 mejores y producir 3–5 variaciones del **mismo gancho** (aquí sí conviene iterar).
- **Escalado:** solo el ganador que supere el objetivo de CPA/ROAS con señal limpia.
- Recuerda la mecánica: ~50 eventos de optimización por conjunto por semana para salir del aprendizaje; los cambios bruscos de presupuesto reinician el aprendizaje.

---

## 14. Fuentes de la parte técnica (Meta)

- Meta Engineering — Andromeda (dic-2024) y actualizaciones: +6% recall, +8% calidad, ~10.000× capacidad de modelo.
- Meta Engineering — GEM / Generative Ads Recommendation Model (nov-2025): +5% conversiones Instagram, +3% Facebook Feed.
- Meta earnings calls Q4-2025 (ene-2026) y Q2-2026: extensión de Andromeda (NVIDIA + AMD + MTIA, ~3× eficiencia) y primer modelo generativo en retrieval.
- Meta for Business, "Demystifying Creative Diversification" (dic-2025): anuncios look-alike se agrupan como variaciones del mismo creativo.
- Meta Help Center — Advantage+ como flujo por defecto; deprecación de APIs legacy ASC/AAC (oct-2025); fase de aprendizaje (~50 eventos/conjunto/semana).
- UTIS — publicación técnica de ene-2026 (calibración por encuestas de interés).
- Guías independientes de 2026 (Greg Hal, Blck Alpaca, DeepSolv, Hawky) usadas para triangular fechas y magnitudes.

> Las mejoras porcentuales son reportadas por Meta. Trátalas como dirección, no como promesa. Y ojo con las "convenciones de agencia" que se repiten como si fueran reglas de Meta (ej.: "10-20 creativos obligatorios", "score de similitud 60%"): Meta no las ha publicado.

---

## 15. Errores que hunden esta fase

1. Investigar sin país definido (la mitad de los "ganadores" no aplican a tu mercado).
2. Confundir viral con rentable.
3. Copiar el copy palabra por palabra (sin mecanismo propio no hay diferenciación y el algoritmo te agrupa con el original).
4. Ignorar el objetivo de campaña del anuncio investigado (copiar un gancho de branding en una campaña de ventas).
5. Sacar métricas de contenido de hace 2 años.
6. Producir 10 variaciones del mismo ángulo y llamarlo "test de creativos".
7. No registrar las métricas al momento de la captura.
8. Saltarse compliance y perder la cuenta.
9. No documentar: sin base de datos, la investigación se repite cada vez.

---

## 16. Criterios para declarar la Fase 1 terminada

- [ ] Brief completo y validado con el solicitante
- [ ] 40+ anuncios registrados en el país objetivo, con días activos y variantes
- [ ] 15 ganadores seleccionados por Opportunity Score ≥ 65
- [ ] Mapa de keywords con ≥ 60 términos clasificados por intención
- [ ] 20+ contenidos virales con métricas capturadas y ER calculado
- [ ] Ingeniería inversa de los 10 mejores (9 capas cada uno)
- [ ] Matriz de ángulos con índice de saturación por ángulo
- [ ] 20 ideas con gancho, guion, CTA, prompt de imagen y de video
- [ ] Lote de prueba definido (10–20 conceptos distintos) y presupuestado
- [ ] Todo guardado en el formato del contrato de datos (§12)

---

**Siguiente documento:** `02-prompt-pack.md` (los 12 prompts que convierten esta metodología en trabajo automatizado) y el prototipo navegable en `prototipo/index.html`.
