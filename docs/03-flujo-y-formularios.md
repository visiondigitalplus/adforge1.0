# FASE 2 — FLUJO Y FORMULARIOS DE LA PÁGINA
### Cómo funciona la aplicación, pantalla por pantalla
**Complemento del manual `01-fase-1-investigacion.md` · v1.0**

---

## 1. Principio de producto

La página no es un generador de copy: es un **sistema de captura de evidencia con un motor de síntesis al final**. Si el usuario no aporta datos reales, la página debe negarse a inventar. Toda salida debe poder rastrearse hasta una fuente (un anuncio activo, un video, una keyword).

Tres consecuencias de diseño:

1. **El orden es obligatorio.** Los módulos están encadenados: sin brief no hay filtros; sin anuncios no hay ángulos; sin ingeniería inversa no hay ganchos.
2. **Todo se guarda.** Cada registro queda con fecha, país y fuente. La base de datos crece y se vuelve el activo del negocio.
3. **La IA nunca adivina.** Donde haría falta un dato en vivo (métricas, anuncios), la página pide el dato o el pegado del texto y luego razona.

---

## 2. Los tres perfiles de usuario

| Perfil | Qué hace | Qué ve |
|---|---|---|
| **Operador (tú)** | Investiga, puntúa, decide, exporta | Todo el sistema, incluidos costos y benchmarks |
| **Cliente / usuario final** | Llena un formulario de 4 pasos y recibe su expediente | Wizard simplificado + resultados en modo lectura |
| **Producción (diseñador / editor)** | Recibe ideas y prompts | Solo la vista de tarjetas de ideas, con botón "marcar como producida" |

Regla: **un solo motor, tres vistas.** El cliente no ve la planilla de la Ad Library; ve el resultado.

---

## 3. Flujo general (diagrama)

```
[1] BIENVENIDA
      │  "¿Investigar un nicho nuevo o continuar un expediente?"
      ▼
[2] WIZARD DE BRIEF (4 pasos, 90 segundos)
      │  negocio → mercado → oferta → objetivo/restricciones
      ▼
[3] VALIDACIÓN DEL BRIEF  ──falta algo──► vuelve al paso exacto
      │ completo
      ▼
[4] TABLERO DE INVESTIGACIÓN  (8 módulos, se pueden hacer en desorden pero se puntúan al final)
      │
      ├── M1 Biblioteca de anuncios
      ├── M2 Demanda / keywords
      ├── M3 Radar viral
      ├── M4 Ingeniería inversa
      │
      ▼
[5] MATRIZ DE ÁNGULOS (automática con lo cargado)
      │
      ▼
[6] GENERACIÓN DE 20 IDEAS (con ganchos, guiones, prompts)
      │
      ▼
[7] VALIDACIÓN (checklist 7 preguntas + compliance)
      │
      ▼
[8] ENTREGABLES: PDF/Markdown del expediente · JSON · Prompt maestro para IA · Lote de prueba
      │
      ▼
[9] RE-INVESTIGACIÓN programada (15 días) → vuelve a [4]
```

---

## 4. Formularios, campo por campo

### 4.1 Wizard de brief (cliente)

**Paso 1 de 4 — Tu negocio**
| Campo | Tipo | Obligatorio | Validación |
|---|---|---|---|
| Nombre del negocio | texto | sí | mín. 2 caracteres |
| Nicho / categoría | select con "otro" | sí | — |
| Sub-nicho y ángulo | texto | sí | mín. 6 caracteres (fuerza especificidad) |
| Qué vendes | texto | sí | — |
| Precio o ticket | número + moneda | sí | > 0 |

**Paso 2 de 4 — Tu mercado**
| Campo | Tipo | Obligatorio | Validación |
|---|---|---|---|
| País principal | select ISO | sí | — |
| Países secundarios | multiselect | no | máx. 4 |
| Idioma y modismos | texto | sí | — |
| Rango de edad del avatar | select | no | — |
| Dolor #1 | textarea | sí | mín. 15 caracteres |
| Deseo #1 | textarea | sí | mín. 15 caracteres |
| Objeción #1 | textarea | sí | mín. 10 caracteres |

**Paso 3 de 4 — Tu oferta**
| Campo | Tipo | Obligatorio | Validación |
|---|---|---|---|
| Oferta concreta (qué incluye) | textarea | sí | — |
| Garantía | texto | no | — |
| Urgencia / escasez real | texto | no | alerta si es falsa ("no usar falsa escasez") |
| Mecanismo único | textarea | sí | mín. 15 caracteres; **es el campo más importante** |
| Activos disponibles | checkboxes: video / UGC / testimonios / demo / fotos | sí | al menos 1 |
| Competidores o referentes | texto (3–10) | no | — |

**Paso 4 de 4 — Tu campaña**
| Campo | Tipo | Obligatorio | Validación |
|---|---|---|---|
| Objetivo en Meta | select (Ventas / Prospectos / Mensajes / Tráfico / Interacción / Reconocimiento) | sí | — |
| Presupuesto mensual | número | sí | > 0 |
| Destino del tráfico | select (landing / WhatsApp / DM / web) | sí | — |
| Categoría especial | checkbox (salud, finanzas, empleo, vivienda, política) | no | activa modo compliance estricto |
| Claims prohibidos / restricciones | textarea | no | — |

**Comportamiento:** autoguardado cada 5 s; barra de progreso real; al terminar, el sistema calcula un **Brief Score** (0–100) y avisa qué falta. Sin Brief Score ≥ 70 no se puede pasar a la investigación.

### 4.2 Formulario de anuncio (M1) — el más usado
Un registro por línea, editable en tabla:

`Página · País · Fecha de inicio (auto-calcula días) · Estado (activo/inactivo) · Variantes del mismo copy · Objetivo inferido · Formato · CTA exacto · Ángulo · Copy completo · Link del anuncio · Notas`

**Automatizaciones útiles:**
- Al escribir la fecha de inicio, **calcula los días activos** y asigna el Longevity Score en vivo.
- Selector de ángulo con los 19 del catálogo → alimenta la matriz automáticamente.
- Campo "Viral" (0–100) que se puede pegar desde el módulo 3 o dejar en 0.
- Botón **"Duplicar fila"**: los anuncios de una misma página comparten casi todo.
- Detección de duplicados por `página + copy similar`.

### 4.3 Formulario de keyword (M2)
`Término · Fuente (IA / Google / TikTok / IG / YouTube / FB / AnswerThePublic / Reddit / Social Blade) · Intención (informativa / comercial / transaccional / comparación) · Uso (gancho / cuerpo / landing / objeción) · Volumen o señal · País`

Atajo: **pegar en bloque**. El usuario pega una lista de 30 términos de una exportación y la página los separa por líneas y le pide clasificar con un clic (o con IA).

### 4.4 Formulario de contenido viral (M3)
`URL · Red · Cuenta · Seguidores · Fecha de publicación · Vistas · Reacciones · Comentarios · Compartidos · Guardados · Formato · Tema`

La página calcula y no deja escribir: ER%, vistas/día, Viral Score. Si el contenido es de más de 90 días, **avisa** (posible dato no vigente).

### 4.5 Formulario de ingeniería inversa (M4)
Las 9 capas como campos de texto + selector de arquetipo de gancho (12 opciones). Al guardar, la idea queda vinculada al contenido original (trazabilidad).

Extras: campo **"transcripción pegada"** y botón "pre-analizar" que propone automáticamente el gancho y el arquetipo para que el usuario solo confirme.

### 4.6 Matriz de ángulos (M5) — sin formulario
Es una pantalla calculada: saturación por ángulo (nº de páginas distintas), cobertura de formatos, niveles de conciencia cubiertos, y las tres rutas 70/20/10 con recomendación de qué producir primero.

### 4.7 Tarjeta de idea (M6) — salida editable
Cada idea tiene 10 campos (ver manual §6). Todos editables, con botón "regenerar solo este campo". Estados: `borrador → aprobada → en producción → publicada → resultado`.

Al cerrar el ciclo, el usuario registra el resultado real (Hook Rate, CTR, CPA) y **eso alimenta el aprendizaje del sistema**: en 6 meses la herramienta sabe qué ángulos funcionan en su cuenta, no solo en el mercado.

---

## 5. Reglas de UX que evitan el error

| Situación | Comportamiento |
|---|---|
| Faltan datos para puntuar | El score se muestra como "parcial" y dice exactamente qué dato falta |
| Anuncio con menos de 7 días | Etiqueta "test, no evidencia" |
| Contenido de más de 90 días | Aviso: "dato no vigente" |
| Lote con 5 ideas del mismo ángulo | Alerta de **diversidad creativa** (Andromeda las agruparía) |
| Idea con claim riesgoso | Bloqueo blando + sugerencia de reformulación |
| Presupuesto < costo de probar 10 conceptos | Recomienda 5 conceptos y explica por qué |
| Copia exacta de un anuncio | Aviso legal y de diferenciación: "copia estructura, no el texto" |

---

## 6. Entregables que produce la página

1. **Expediente de investigación** (Markdown/PDF): brief + tablero de ganadores + keywords + radar viral + desgloses + matriz.
2. **20 ideas** listas para producción, exportables a Notion/Sheets/Markdown.
3. **JSON** completo según el contrato de datos del manual (§12).
4. **Prompt maestro** para trabajar con un analista IA externo.
5. **Plan de prueba** de 7 días con umbrales de decisión.

---

## 7. Hoja de ruta técnica (de lo manual a lo automatizado)

| Versión | Alcance | Tecnología | Tiempo estimado |
|---|---|---|---|
| **v0 — Prototipo (listo)** | Formularios + scoring + generación de ideas + export. Sin red. | HTML/CSS/JS en un archivo, datos en el navegador | Hecho |
| **v1 — Multiusuario** | Login, expedientes guardados por usuario, historial, roles | Next.js + Supabase (Postgres + Auth) | 3–5 semanas |
| **v2 — Semi-automatización** | Importación de CSV, transcripción automática de videos, IA que propone ganchos/arquetipos y redacta las 20 ideas | + API de transcripción + LLM con el prompt maestro | 4–6 semanas |
| **v3 — Datos en vivo** | Lectura de la Biblioteca de Anuncios vía API oficial (solo anuncios de categorías políticas/sociales, ojo: la API pública está limitada), scraping asistido donde sea legal, alertas de nuevos ganadores | + workers y cola de trabajos | 6–10 semanas |
| **v4 — Bucle de rendimiento** | Conectar la cuenta de Meta (Marketing API) y cerrar el círculo: lo que la página predijo vs. lo que pasó en la cuenta | + Meta Marketing API + CAPI | 4–6 semanas |

> Aviso importante sobre la v3: la API pública de la Biblioteca de Anuncios de Meta solo expone anuncios de temáticas sociales, electorales y políticas. Para el resto de nichos, la lectura es **manual o asistida**, y el scraping debe respetar los términos de uso. Por eso el diseño v0/v1 pone el esfuerzo en el **sistema de puntuación y síntesis**, no en la captura: capturar lo hace una persona en 2 horas; analizarlo bien es lo que cuesta.

---

## 8. Cómo se mide la propia herramienta

- **Tiempo de investigación** por nicho: objetivo < 6 horas (hoy son 15–20 en manual).
- **Tasa de aprobación de ideas** por el filtro de validación: si es < 40%, el motor está generando ruido.
- **Hit rate**: % de ideas producidas que superan el Hook Rate objetivo.
- **Ganadores por lote**: cuántos de cada 10 conceptos superan el CPA objetivo (benchmark realista: 2–3 de 10).
- **Reutilización**: % de expedientes que se actualizan a los 15 días (mide si el sistema se vuelve hábito).

---

## 9. Qué pedirle siempre a la persona que solicita la investigación

Resumen de una línea por pantalla, para que nadie llegue sin datos:

1. **Qué vende y a qué precio** (define objetivo y tipo de gancho).
2. **A quién, en qué país y con qué palabras** (define filtros y lenguaje).
3. **Cuál es su mecanismo único** (sin esto solo se copia, no se diferencia).
4. **Qué prueba tiene** (sin prueba, el gancho es una promesa vacía).
5. **Cuánto puede invertir** (define el tamaño del lote).
6. **Qué no puede decir** (compliance, causa #1 de cuentas restringidas).
7. **Qué activos puede producir** (video, UGC, foto) — la mejor idea del mundo no sirve si no se puede filmar.
