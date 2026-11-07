# FASE 2 — MOTOR AUTÓNOMO, ENTREGA DE 7+ PIEZAS Y CAPA DE IA
### Arquitectura corregida: una sola entrada, investigación invisible, salida rankeada
**v2.0 · Noviembre 2026 · Reemplaza parcialmente a `03-flujo-y-formularios.md`**

---

## 1. El cambio de arquitectura (regla dura)

**Regla 1 — Una sola entrada.** El usuario llena *únicamente* el briefing. No toca la Biblioteca de Anuncios, no registra métricas, no hace ingeniería inversa, no pega keywords.

**Regla 2 — Investigación backstage.** Todo el trabajo de los módulos M1 a M5 del manual ocurre del lado del sistema (operador + IA + automatizaciones). El cliente nunca ve una planilla de investigación: ve resultados.

**Regla 3 — Salida rankeada por probabilidad.** El sistema entrega un lote mínimo de **7 piezas** (anuncios + contenidos), ordenadas de mayor a menor probabilidad de rendir, y escalable a 14 / 21 / 28.

**Regla 4 — IA intercambiable.** El usuario elige con qué IA quiere que trabaje el motor. Arena es la opción por defecto y recomendada.

```
          ANTES (v1)                                   AHORA (v2)
┌──────────────────────────┐                ┌──────────────────────────┐
│ Usuario llena 8 módulos  │                │ Usuario llena 1 formulario│
│ y registra la evidencia  │   ────────►    │ (briefing, 4 min)         │
└──────────────────────────┘                └────────────┬─────────────┘
                                                         ▼
                                            ┌──────────────────────────┐
                                            │ MOTOR DE INVESTIGACIÓN   │
                                            │ (backstage, invisible)   │
                                            │ M1→M5 + IA elegida       │
                                            └────────────┬─────────────┘
                                                         ▼
                                            ┌──────────────────────────┐
                                            │ 7+ PIEZAS RANKEADAS      │
                                            │ con IC, gancho, guion,   │
                                            │ CTA y prompts            │
                                            └──────────────────────────┘
```

---

## 2. Lo que el usuario ve: el briefing único

Un solo formulario, 4 bloques, ~4 minutos. **7 campos obligatorios** y 6 que suben la calidad del resultado (marcados con ★).

| # | Campo | Tipo | Obligatorio |
|---|---|---|---|
| 1 | Qué vendes (producto/servicio) | texto | **sí** |
| 2 | Precio o rango de precio | número + moneda | **sí** |
| 3 | A quién le vendes (en una frase, con sus palabras) | textarea | **sí** |
| 4 | País / mercado | select | **sí** |
| 5 | Qué resultado prometes y en cuánto tiempo | textarea | **sí** |
| 6 | Objetivo de la campaña (ventas, mensajes, prospectos, tráfico, interacción) | select | **sí** |
| 7 | Presupuesto mensual | número | **sí** |
| 8 ★ | Sub-nicho / categoría exacta | texto | no |
| 9 ★ | Diferencial o mecanismo propio ("por qué tú") | textarea | no |
| 10 ★ | Prueba que tienes (testimonio, demo, dato, antes/después) | checkboxes | no |
| 11 ★ | Página web / Instagram / competidores de referencia | texto | no |
| 12 ★ | Qué NO puedes decir (categoría especial, claims prohibidos) | textarea | no |
| 13 ★ | Qué puedes producir (video propio, UGC, fotos, solo diseño) | checkboxes | no |

**Comportamiento:**
- Si faltan los ★, el sistema **no se detiene**: investiga igual y lo indica ("resultado con 3 de 6 datos de calidad; entrega con IC más bajo y recomendaciones para subirlo").
- El sistema **deduce** lo que puede (nicho a partir de la descripción, país por la moneda, objetivo por el tipo de oferta, mecanismo por el análisis de la landing o del Instagram).
- Botón opcional: *"Subir mi web / mi Instagram"* → el sistema extrae diferencial, tono, prueba y precios. Reduce el briefing a 2 minutos.

---

## 3. El motor de investigación (backstage)

Seis etapas automáticas. Cada una deja un registro auditable (trazabilidad: toda pieza final apunta a la evidencia que la originó).

| Etapa | Qué hace | Quién lo ejecuta |
|---|---|---|
| **E1 · Normalización del brief** | Traduce el briefing a parámetros de búsqueda: términos de Ad Library, país, idioma, categoría, claims permitidos. Detecta categoría especial. | Determinístico (reglas) |
| **E2 · Barrido de la Biblioteca de Anuncios** | Recolecta 40–100 anuncios activos del nicho/país. Registra días activos, variantes del mismo copy, CTA, formato y objetivo inferido. | Operador + asistencia IA |
| **E3 · Demanda y lenguaje** | Keywords en Google, en IAs y en buscadores de redes. Extrae el vocabulario real del cliente. | IA + herramientas |
| **E4 · Radar de contenido viral** | Top 20–30 contenidos de los últimos 90 días en cada red relevante, con ER y velocidad. | IA + revisión humana |
| **E5 · Ingeniería inversa** | Los 10 mejores se descomponen en 9 capas (gancho, promesa, mecanismo, prueba, objeciones, ritmo, CTA, formato, razón). | IA |
| **E6 · Síntesis y generación** | Matriz de ángulos + saturación → produce 7–21 piezas con IC, ganchos, guion, CTAs, prompts. | IA (la que eligió el usuario) |

**Nota de realidad técnica (importante):** la API pública de la Biblioteca de Anuncios de Meta solo expone anuncios de temáticas sociales, electorales y políticas. Para el resto de nichos, E2 es **captura asistida** (operador + herramientas internas), no un scrape libre. Esto es invisible para el cliente y es lo que hace que el producto sea defendible: el valor está en el criterio del motor, no en la captura. En v3 se automatiza con workers propios y revisión humana por muestreo.

---

## 4. La entrega: 7 piezas rankeadas (y cómo escalar)

### 4.1 Composición del lote de 7 (no son 7 variaciones: son 7 conceptos)

| Posición | Tipo de pieza | Base de evidencia | IC objetivo |
|---|---|---|---|
| 1–4 | **Ancla** ("copiar y mejorar") | Ángulo ganador con anuncio activo 30+ días en el mismo país + saturación en zona dulce | 80–95 |
| 5–6 | **Adaptación** | Mismo ángulo ganador en otro formato u otro nivel de conciencia | 65–79 |
| 7 | **Disruptiva** | Contra-narrativa del ángulo saturado. Apuesta controlada | 50–64 |

Esto es la política 70/20/10 del manual, aplicada literalmente a la entrega.

### 4.2 Escalado ("y así sucesivamente")
- **Pack 1 (7 piezas):** los 4 anclas + 2 adaptaciones + 1 disruptiva.
- **Pack 2 (14):** pack 1 + 7 ángulos nuevos (nunca variaciones de los anteriores).
- **Pack 3 (21):** + 7 piezas para niveles de conciencia que el pack 1 no cubrió.
- **Pack 4 (28):** + variaciones deliberadas de los 2 ganadores que mejor rindieron en la cuenta.

Regla anti-relleno: **si no hay evidencia para una pieza, no se emite**. Es preferible entregar 6 con IC alto que 10 con relleno.

### 4.3 El Índice de Confianza (IC): qué significa y qué no

El IC **no es una probabilidad garantizada de éxito**. Es un puntaje calibrado de cuánta evidencia respalda la pieza:

```
IC = 0,30 · Evidencia de longevidad (días activos del referente)
   + 0,20 · Escalado del referente (nº de variantes)
   + 0,20 · Rendimiento orgánico del gancho (ER / velocidad del contenido)
   + 0,15 · Calidad de tu prueba disponible (tienes demo/testimonio/dato)
   + 0,15 · Encaje (país + categoría + nivel de conciencia)
   − penalizaciones (compliance alto, oferta sin garantía, destino sin alinear)
```

| IC | Etiqueta | Lectura honesta |
|---|---|---|
| 85–100 | **A · Alta evidencia** | Estructura probada en tu mercado. Es lo más probable que funcione. |
| 70–84 | **B · Evidencia sólida** | Un elemento es nuevo (formato o nivel de conciencia). |
| 55–69 | **C · Evidencia parcial** | El ángulo está validado en otro mercado o formato. Requiere test. |
| < 55 | **D · Apuesta** | Se entrega porque la diversidad también gana, pero se marca como apuesta. |

> **Compromiso honesto:** ningún sistema puede garantizar 100% de efectividad en publicidad. Lo que sí garantizamos: (a) que toda pieza tiene una razón rastreable, (b) que el lote está ordenado por probabilidad, (c) que cada pieza trae su métrica de éxito y su umbral de corte, y (d) que el sistema aprende del resultado real de tu cuenta para recalibrar el IC en la siguiente entrega.

### 4.4 Qué contiene cada una de las 7 piezas
1. Nombre interno + IC + etiqueta (A/B/C/D)
2. Ángulo · formato · nivel de conciencia
3. **3 ganchos** (con arquetipo y el segundo exacto en que aparece la promesa)
4. Descripción / copy (125 primeros caracteres autosuficientes + cuerpo)
5. **Guion escena por escena** (video) o slide por slide (carrusel)
6. **2 CTAs** (acción + baja fricción)
7. Prueba a usar (de los activos que declaró el cliente)
8. **Prompt de imagen** (sin texto en la imagen)
9. **Prompt de video / storyboard** (3 escenas)
10. Hipótesis + métrica de éxito + umbral de corte
11. Aviso de compliance con la reformulación segura
12. **Evidencia de origen** (qué anuncio o contenido la respalda, con enlace)

---

## 5. Capa de IA intercambiable (BYO-AI)

### 5.1 Cómo lo ve el usuario
En el briefing, un selector:

> **¿Con qué IA quieres que trabaje tu investigación?**
> ⦿ **Arena** — *recomendado* · ○ ChatGPT · ○ Gemini · ○ Claude · ○ Perplexity
> ○ Otra (pegar clave de API) · ○ Sin IA conectada (exportar el prompt y usarlo por mi cuenta)

Con un interruptor secundario: **"IA de respaldo si la principal falla"** (por defecto: Arena).

### 5.2 Por qué Arena es el default recomendado
- Ya es el entorno donde el usuario trabaja: no hay que mover datos ni copiar prompts.
- Da acceso a varios modelos bajo una misma interfaz, así que si un modelo falla o responde flojo, el motor puede conmutar sin cambiar el flujo del usuario.
- Permite que la investigación y la generación ocurran en el mismo lugar donde se revisan y aprueban las piezas.

### 5.3 Cómo se implementa (capa de adaptadores)
El motor **nunca llama a un proveedor directamente**. Llama a una interfaz normalizada:

```
generate(task, payload, schema) → respuesta validada
```

Y detrás, un adaptador por proveedor:

| Proveedor | Conexión | Nota |
|---|---|---|
| **Arena** | Nativa (es el entorno) | Default; sin fricción para el usuario |
| **OpenAI / ChatGPT** | API key del usuario o del negocio | El usuario pega su clave una vez |
| **Google Gemini** | API key | Muy bueno en volúmenes largos de keywords |
| **Anthropic / Claude** | API key | Muy bueno en copy largo y matices |
| **Perplexity** | API key | Útil para investigación con fuentes citadas |
| **Sin IA** | Exportar prompt maestro | Modo gratuito: el usuario corre el prompt donde quiera |

**Reglas de la capa:**
1. **Mismo prompt, mismo esquema de salida** para todos: el resultado no cambia de forma según el proveedor.
2. **Validación de esquema obligatoria**: si la IA devuelve algo incompleto, se reintenta o se completa con plantilla.
3. **Costos a la vista**: cada entrega muestra un estimado de consumo antes de ejecutarse.
4. **Privacidad**: la clave del usuario se guarda cifrada y se usa solo para sus ejecuciones.
5. **Trazabilidad**: se registra qué IA generó qué pieza (para comparar calidad entre proveedores con el tiempo).

---

## 6. Las fases del proyecto (hoja de ruta completa)

| Fase | Nombre | Qué se produce | Estado |
|---|---|---|---|
| **1** | **Investigación** | Metodología, fórmulas, bibliotecas de ganchos y CTAs, prompt pack. | ✅ Entregada |
| **2** | **Motor autónomo + capa de IA** | Este documento: briefing único, pipeline E1–E6, entrega de 7 piezas con IC, arquitectura BYO-AI. | 📄 **Ahora** |
| **3** | **Motor de producción y entrega** | Plantillas exactas de las 7 piezas, calibración del IC, formatos de exportación (PDF/Notion/Sheets), y prototipo actualizado al modelo "solo briefing". | Siguiente |
| **4** | **Construcción del producto v1** | App real: login, expedientes por cliente, panel de operador (backstage), cola de trabajos, historial. | Después |
| **5** | **Piloto y calibración** | 3–5 clientes reales, 3 entregas cada uno. Se mide hit rate y se recalibra el IC con datos reales. | Después |
| **6** | **Escala y bucle de rendimiento** | Automatización de captura, conexión con Meta Marketing API, el sistema aprende de los resultados de cada cuenta. | Última |

### Por qué la Fase 3 es la que sigue
La Fase 2 define **el cerebro** (qué entra, quién hace qué, cómo se rankea). La Fase 3 define **la fábrica**: exactamente cómo se ve cada una de las 7 piezas, con qué plantilla, con qué nivel de detalle por formato, y cómo se recalibra el IC. Sin eso, la Fase 4 (programar) construiría una app sin especificación de salida — y ahí es donde estos proyectos se caen.

**Entregables concretos de la Fase 3:**
1. Plantilla maestra de la "pieza" (los 12 campos) y una variante por formato: video UGC, video demo, carrusel, estático, testimonio.
2. Tabla de calibración del IC: penalizaciones exactas, casos borde, ejemplos de IC 92 / 78 / 61 / 45.
3. Diccionario de 19 ángulos × 12 arquetipos de gancho × 6 formatos, con reglas de combinación válidas.
4. Reglas de diversidad del motor: cómo garantizar 7 conceptos realmente distintos.
5. Prototipo v2 con una sola entrada (briefing) y salida de 7 piezas rankeadas + selector de IA.
6. Guion de la llamada de briefing (qué preguntar si el cliente no sabe responder).

---

## 7. Riesgos de esta arquitectura (y cómo los cubro)

| Riesgo | Mitigación |
|---|---|
| El cliente da un brief pobre → resultado genérico | El brief mínimo es de 7 campos; los ★ suben el IC y el sistema dice explícitamente cuánto pierde por no darlos. |
| Prometer efectividad imposible | IC con lenguaje calibrado (A/B/C/D) + métricas y umbrales de corte en cada pieza. |
| Dependencia de una sola IA | Capa de adaptadores + IA de respaldo automática. |
| Sin evidencia real para un ángulo | El motor no emite la pieza; entrega menos piezas con IC alto en lugar de relleno. |
| Cliente espera el resultado al instante | El barrido de evidencia toma horas humanas; se comunica como "entrega en 24–48 h" con estado visible. |
| Categoría especial (salud/finanzas) | Detección automática en E1 + reformulación obligatoria antes de emitir. |
