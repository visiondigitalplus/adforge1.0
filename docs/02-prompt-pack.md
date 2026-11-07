# PROMPT PACK — Fase 1
### 12 prompts para ejecutar la investigación con un analista IA
**Uso:** copiar, pegar y completar los `[CAMPOS]`. Funcionan en ChatGPT, Claude, Gemini o Perplexity. Donde la IA no tiene acceso a datos en vivo (métricas de anuncios, vistas de un video), **tú pegas los datos** y la IA razona. Ese es el diseño: la IA no adivina, analiza lo que tú le das.

> **Regla transversal:** siempre empieza cada prompt con el bloque de contexto del P-00. Sin él, la IA responde genérico.

---

## P-00 · Bloque de contexto (pegar al inicio de todo)

```
CONTEXTO DEL NEGOCIO
- Nicho / sub-nicho:
- País(es) objetivo:
- Idioma y modismos locales:
- Producto/servicio y precio:
- Oferta concreta (qué incluye, garantía, urgencia):
- Mecanismo único (por qué nosotros):
- Avatar: quién es, dolor #1, deseo #1, objeción #1:
- Objetivo de campaña en Meta:
- Presupuesto mensual:
- Restricciones (compliance / claims prohibidos):

TU ROL: director de investigación creativa especializado en Meta Ads 2026
(Andromeda/GEM/Lattice), con criterio de performance marketer, no de copywriter.
REGLA: no inventes datos. Cuando falte información, dilo y pide el dato.
Devuelve siempre tablas o listas accionables, sin relleno.
```

---

## P-01 · Plan de investigación (antes de tocar nada)

```
Con el contexto anterior, diseñame el plan de investigación para este nicho/país:
1) Los 12 términos de búsqueda que debo usar en la Biblioteca de Anuncios
   (dolores, deseos, mecanismos, jerga local) y por qué cada uno.
2) 10 páginas competidoras candidatas (marcas, categorías y también infoproductos).
3) Los 5 formatos de contenido que debo priorizar al raspar redes, con justificación.
4) Los benchmarks que debo usar para considerar "ganador" a un anuncio en este nicho
   (días activos, ER esperado, Hook Rate esperado) y cómo cambian por país.
5) Los riesgos de compliance específicos de esta categoría.
```

---

## P-02 · Scoring de anuncios investigados

```
Te pego una tabla de anuncios de la Biblioteca de Meta (CSV o lista).
Puntúa cada uno así:
- Longevity Score (0-100): <7d=10, 7-13=25, 14-29=45, 30-59=65, 60-89=80, 90+=100
- Scale Score (0-100): 1 variante=10, 2-3=40, 4-6=65, 7-10=85, >10=100
- Opportunity = 0.35*Longevity + 0.20*Scale + 0.25*Viral + 0.20*Fit
  (Viral y Fit = 0 si no tengo el dato; dime qué dato falta para completarlo)

Devuelve: tabla ordenada por Opportunity, los 5 ganadores, y para cada uno:
(a) hipótesis de por qué lleva tanto tiempo activo,
(b) qué objetivo de campaña infiere su CTA y su destino,
(c) el ángulo dominante y el nivel de conciencia que ataca.

DATOS:
[pegar tabla]
```

---

## P-03 · Extracción de keywords desde IAs (simulación de prompts)

```
Actúa como 10 personas distintas del avatar descrito (diferentes edades,
niveles de conocimiento y urgencia). Cada una escribe 5 prompts REALES que
le haría a una IA sobre este problema, con sus palabras exactas, incluyendo
errores y modismos del país.
Luego:
1) Extrae las entidades y términos que se repiten (frecuencia).
2) Clasifícalos: miedo / deseo / mecanismo / precio / comparación / urgencia.
3) Marca los 15 términos con mayor potencial de gancho publicitario.
4) Dime qué preguntas NO se atreven a escribirle a Google y solo escribirían a una IA.
```

---

## P-04 · Ingeniería inversa de un contenido

```
Te pego la transcripción / descripción de un contenido con alto rendimiento.
Descomponlo en 9 capas:
1) Gancho exacto (0-3s o primera línea) y arquetipo
2) Promesa (qué + en cuánto tiempo)
3) Mecanismo (el "cómo")
4) Prueba (tipo: dato/testimonio/demostración/autoridad)
5) Objeciones que derriba y en qué segundo
6) Estructura/ritmo segundo a segundo (o slide a slide)
7) CTA exacto y tipo
8) Formato de producción
9) Por qué funciona (tensión psicológica que resuelve)
Después: dame 3 reescrituras del gancho aplicadas a MI oferta, con arquetipos distintos,
y una versión de 15 segundos del guion completo.

CONTENIDO:
[pegar]
```

---

## P-05 · Minería de objeciones desde comentarios y reseñas

```
Te pego 50 comentarios/reseñas reales. Devuelve:
1) Top 10 objeciones, con la frase textual que las representa y su frecuencia.
2) Top 10 deseos expresados en palabras del cliente.
3) 15 frases textuales que puedo usar como copy (marcadas como cita directa).
4) 5 ganchos que nacen directamente de una objeción.
5) Los 3 malentendidos sobre el producto que debo aclarar en el anuncio.
No resumas el sentimiento. Extrae lenguaje.

COMENTARIOS:
[pegar]
```

---

## P-06 · Matriz de ángulos (síntesis de toda la investigación)

```
Con TODO lo investigado (te pego las tablas de anuncios, keywords y contenido viral):
1) Identifica los 8 ángulos dominantes del nicho y cuántas páginas usa cada uno
   (índice de saturación).
2) Clasifícalos: ángulo virgen (0-2), zona dulce (3-8), competido (9-20), saturado (20+).
3) Crúzalos con formatos y niveles de conciencia (Schwartz) en una matriz.
4) Propón 12 combinaciones ángulo×formato×conciencia: 8 en "copiar y mejorar",
   3 en "adaptar", 1 en "disruptiva".
5) Marca las 3 combinaciones con mayor probabilidad de ganar en los primeros 14 días
   y explica el porqué en una frase cada una.
```

---

## P-07 · Generación de ideas completas (salida de la fase)

```
Para cada una de estas 20 combinaciones, genera una ficha con:
- Título interno
- Ángulo / formato / nivel de conciencia
- 3 ganchos (cada uno con su arquetipo, máx 12 palabras)
- Descripción del anuncio (primeros 125 caracteres autosuficientes + cuerpo)
- Guion escena por escena con tiempos (video) o slide por slide (carrusel)
- 2 CTAs (uno de acción, uno de baja fricción)
- Prueba concreta a usar (basada en los activos que tengo)
- Prompt de imagen: [SUJETO]+[ACCIÓN]+[ENTORNO]+[ESTILO]+[ENCUADRE]+[LUZ]+[PALETA]+[EMOCIÓN]+[4:5|9:16|1:1]. Sin texto en la imagen.
- Prompt de video: 3 escenas con descripción visual precisa
- Hipótesis a validar y métrica de éxito
- Riesgo de compliance (bajo/medio/alto) y cómo reducirlo

COMBINACIONES:
[pegar matriz del P-06]
```

---

## P-08 · Critico adversarial (antes de producir)

```
Aquí tienes 20 ideas de anuncios. Actúa como un media buyer escéptico que
odia perder dinero. Para cada idea:
- Probabilidad de ganar (1-10) y por qué en una frase.
- La razón más probable de fracaso.
- El punto exacto donde el espectador abandona.
- Si hay evidencia de un ganador activo que la respalde; si no la hay, dilo.
- Veredicto: PRODUCIR / REPARAR (y cómo) / DESCARTAR.
Ordena el lote final por probabilidad y dime cuáles 10 produciría primero.
```

---

## P-09 · Auditoría de diversidad creativa (anti-Andromeda)

```
Mira mis 20 ideas y detecta:
1) Qué ideas son en realidad el MISMO concepto con ropa distinta
   (mismo ángulo + misma estructura emocional), que Andromeda agruparía
   como variaciones de un solo creativo.
2) Qué conceptos son genuinamente distintos entre sí.
3) Reduce el lote a un máximo de 10 conceptos realmente distintos
   y dime qué variaciones conservar como iteración del mismo gancho.
4) Con 20 conceptos válidos dime el orden de lanzamiento en 3 olas.
```

---

## P-10 · Análisis de landing y coherencia promesa→destino

```
Te pego el copy del anuncio y el texto de la landing. Verifica:
1) ¿El headline de la landing repite la promesa del anuncio con otras palabras?
2) ¿Dónde se rompe la coherencia (anuncio promete A, landing vende B)?
3) ¿La objeción principal está respondida arriba del pliegue?
4) ¿El CTA de la landing coincide con el del anuncio?
5) Reescribe headline + subheadline + primer CTA para alinearlos al gancho.
6) ¿Qué evento de conversión y qué parámetros de CAPI debo vigilar?
```

---

## P-11 · Plan de prueba y lectura de resultados

```
Con estos 10 conceptos y $[presupuesto] para 7 días:
1) Estructura de campaña recomendada en 2026 (Advantage+ / consolidada) y por qué.
2) Reparto de presupuesto y número de anuncios por concepto.
3) Tabla de decisión: qué métrica mirar al día 3, 5 y 7, y el umbral exacto
   para escalar, iterar o matar cada anuncio (Hook Rate, Hold Rate, CTR, CPM, CPA/ROAS).
4) Qué NO hacer para no reiniciar la fase de aprendizaje.
5) Las 3 preguntas que debo responder al final de la semana.
```

---

## P-12 · Re-investigación quincenal (mantenimiento)

```
Compara la investigación de hace 15 días con estos datos nuevos:
1) Qué anuncios nuevos superaron los 14 días activos (señal emergente).
2) Qué ángulos nuevos aparecieron (2+ páginas distintas).
3) Qué ganchos nuestros muestran fatiga (caída de Hook Rate / frecuencia alta).
4) 5 nuevos ganchos a producir, basados solo en lo nuevo.
5) Qué ángulo abandonar y por qué.
```

---

## Orden de ejecución del pack

```
P-00 → P-01 → (trabajo de campo: Ad Library, redes, keywords)
     → P-02 → P-03 → P-04 → P-05 → P-06 → P-07 → P-08 → P-09
     → P-10 → P-11 → [producción y pauta] → P-12 cada 15 días
```
