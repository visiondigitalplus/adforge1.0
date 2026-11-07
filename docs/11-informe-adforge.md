# AdForge · Content & Ads Studio
### Informe de evolución · de dónde venimos y dónde estamos

**Antes se llamaba:** Meta Ads Research OS *(nombre técnico, sonaba a software de analista)*
**Ahora se llama:** **AdForge · Content & Ads Studio** · por Visión Digital

> **Forge** es fragua, taller: donde el material se convierte en algo terminado. **Content & Ads** dice exactamente lo que sale de aquí: piezas para publicar todos los días y anuncios para pautar.

---

## Resumen en una frase

Empezamos con un generador de anuncios que exigía que tú hicieras la investigación a mano. Hoy es un taller que **te pide el briefing, te arma la investigación del mercado, te entrega el guión de cada pieza y te dice qué grabar y qué evitar.**

---

## Antes vs. ahora

| Área | Antes | Ahora |
|---|---|---|
| **Nombre** | Meta Ads Research OS | **AdForge · Content & Ads Studio** |
| **Entrada** | Lista de clientes y cifras | Bienvenida de 3 pasos la primera vez + flujo guiado siempre visible |
| **Briefing** | Funcionaba, pero el texto era pequeño y los grises ilegibles | Texto 22% más grande, grises aclarados y **control A− / A+** con 4 niveles guardados |
| **Salto de pantalla** | Al marcar la última casilla, la página brincaba al inicio | Corregido: escribir no mueve nada, navegar sí lleva arriba |
| **Inicio** | Cuatro recuadros de cifras ocupando media pantalla | Resumen plegable en una sola línea |
| **Tarjetas de cliente** | Todas decían "Cliente nuevo", sin saber cuál era cuál | Botón **✏️ renombrar** y **🗑 borrar** en cada tarjeta |
| **Investigación** | Tablas vacías que tú tenías que rellenar a mano | Un solo camino: **copiar prompt → Arena → pegar resultado → cargar** |
| **Prompt** | Pedía lo básico | Pide 16 consultas, 12 términos, 6 ángulos, anuncios con días y variantes, contenidos virales y reversa en 9 capas |
| **Anuncios** | Tabla manual vacía | Se llenan solos con el JSON. Marcados **[VERIFICADO]** suben el IC |
| **Contenido viral e ingeniería inversa** | Tablas manuales | Se llenan solas con el JSON |
| **Guion** | 5 líneas genéricas ("0-2 s · RESULTADO…") | **Guion completo por formato**: bloques con tiempo, qué se ve, qué se dice y qué texto va en pantalla |
| **Producción** | No existía | Columna **"Cómo grabarlo"** (plano, luz, audio, subtítulos) y **"Qué evitar"** |
| **Piezas** | Parecían tarjetas muertas | "Dale clic para abrir la pieza completa ▾", con borde dorado al abrir |
| **PDF** | Imprimía solo lo que estaba abierto | Abre **todas** las piezas, con todo el detalle, en blanco legible |
| **IC** | Solo el número | Explicación completa: qué mide, bandas A/B/C/D y los cinco ingredientes |
| **Pasos del flujo** | Cinco, uno era "Publicar" | **Tres**: Briefing → Investigación → Entrega, con iconos y progreso |
| **Conexiones / API** | Pantalla de llaves de OpenAI, Anthropic, Gemini… | Eliminada. Ya no hay llaves, ni contraseñas, ni configuración |

---

## Lo que se quitó (y por qué)

**La pantalla de llaves de API.** Era potente y nadie la iba a usar. Ahora el prompt sale a Arena, que ya tiene las mejores IAs. Menos configuración, mismo resultado.

**La extensión de Chrome.** Nunca la instalaste y añadía una dependencia. Fuera.

**El paso "Publicar".** No aportaba al trabajo real. La tarjeta "Antes de publicar" con las condiciones de éxito se quedó, porque esa sí enseña.

**Los botones manuales de la investigación.** Rellenar tablas a mano era exactamente el problema que la app debía resolver.

**El botón "Ampliar a 14 piezas".** Siete ya son muchas para quien no puede grabar siete vídeos. Producir dos bien vale más que catorce estimadas.

**La fórmula del IC a la vista.** Las cinco barras de ingredientes eran contabilidad para el cliente. Queda la banda, la nota y el desglose de penalizaciones; el resto, fuera.

**El prompt de video.** Nadie con un celular genera un vídeo con IA a partir de un prompt. Queda uno solo, *Prompt visual*, y aparece únicamente en Estático y Carrusel.

---

## Lo que se añadió

**Pantalla de bienvenida.** Tres pasos explicados la primera vez que abres la app.

**Barra de progreso por cliente.** 📝 Briefing → 🔍 Investigación → 📦 Entrega. Se pone verde sola cuando completas cada etapa e ilumina la que te toca.

**Botón Guía.** Todo el procedimiento a un clic, siempre en la barra superior.

**Guion completo y específico.** Para vídeo UGC, vídeo demo, testimonio, carrusel y estático. Cada bloque dice qué se ve, qué se dice y qué texto va en pantalla.

**Crédito por evidencia.** Antes, cargar anuncios reales podía bajar la nota. Ahora la evidencia verificada suma +5 y la parcial +2, porque un dato real reduce la incertidumbre.

---

## Cómo se usa hoy (3 pasos)

1. **📝 Briefing** — qué vendes, a quién, con qué promesa.
2. **🔍 Investigación** — copias el prompt, lo pegas en Arena, traes el resultado y pulsas cargar.
3. **📦 Entrega** — 7 piezas con guion completo, procedencia, IC y PDF.

---

## Lo que aún no tiene

- **El bloque de la oferta** (qué recibe, cuánto, en cuánto tiempo, garantía).
- **El plan semanal** de 21 piezas y el plan de grabación.
- **El registro de resultados** (Hook Rate y costo real por pieza).

Son las tres cosas que están en la lista. Ninguna se ha construido todavía.

---

## Ficha técnica

- Un solo archivo HTML de **190 KB** con todo dentro: estilos, lógica y logo.
- Funciona **sin internet** y sin instalar nada.
- Los datos viven en el navegador de cada persona. Se respaldan con **Exportar base (.json)**.
- Versión web: `index.html` para GitHub Pages.

*AdForge · Content & Ads Studio · Visión Digital*


---

## Ronda final · guion de producción, KPIs y auditoría de redes

| | Antes | Ahora |
|---|---|---|
| Guion por pieza | 6 líneas de bloques | Gancho viral + visual + verbal, parlamento palabra por palabra y escenas con encuadre, movimiento de cámara, audio y prompt de video |
| Entrega del cliente | 16.435 caracteres | 47.735 caracteres |
| Prompt | Pedía investigación | Arranca exigiendo **modo Agent** y pide los copys por ángulo con reglas de escritura humana |
| Después de publicar | nada | Tabla de KPIs con metas según el objetivo de campaña |
| Redes sociales | nada | Pestaña **Redes**: auditoría de 7 ejes con puntaje calculado en la app y plan de acción priorizado |

**Movimientos de cámara repartidos por el generador:** push-in, zoom back, whip pan, rack focus, órbita de 180°,
dron en push-in descendente, órbita ascendente de dron, tilt up/down, truck lateral, handheld follow, macro,
grúa, gimbal, cenital y snap zoom.

**El botón de Arena** ahora copia el prompt y abre el sitio en el mismo clic. El modo Agent no se puede activar
desde un enlace —está dentro de su interfaz—, así que la app deja el recordatorio del orden exacto en pantalla.


### Bloque A · Medición de la pieza

Pestaña nueva entre *Entrega* y *Redes*. El usuario pega el enlace publicado y las cifras que le da la plataforma;
la app calcula hook rate, retención, CTR, CPM, CPC, frecuencia y costo por conversación, les pone semáforo
y escribe **una sola lectura** con **una sola acción**.

El resultado real mueve el IC (40% medición, 60% investigación), reordena las piezas y se imprime en el PDF.
Probado con Dayacar: *Objeción directa* 80 → **86** con un gancho de 35%, *Identidad* 74 → **56** con un gancho de 10%.


### Corrección de criterio · KPIs orgánicos

La primera versión de la fase de medición usaba métricas del administrador de anuncios (CPM, CPC, CTR,
costo por conversación). El usuario aclaró que quería **KPIs de contenido orgánico**, que son los que ve
cualquier persona en la app de la red social.

Se separaron los dos modos: **orgánico** por defecto (engagement rate, guardados, compartidos, comentarios,
alcance sobre seguidores, retención, seguidores nuevos, clics al enlace) y **pagado** como opción secundaria.
Las metas cambian según la red: TikTok exige 5% de engagement, Instagram 3%, Facebook 2%.

La tarjeta de KPIs de la entrega y la hipótesis de cada pieza también se reescribieron en idioma orgánico.


### Relojes de medición

Cada métrica y cada puntaje se muestran ahora en un reloj SVG con escala de cinco bandas:
**oro** (150% de la meta) › verde (meta) › amarillo (75%) › naranja (50%) › rojo (por debajo).
Está en el puntaje de cada pieza medida, en cada KPI, en el resumen y en la auditoría de redes.
Sin librerías: SVG puro con la paleta del logotipo.
