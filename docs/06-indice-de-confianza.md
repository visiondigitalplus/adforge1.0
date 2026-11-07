# FASE 3 · DOC 06 — ÍNDICE DE CONFIANZA (IC)
### Fórmula, calibración, penalizaciones y ejemplos resueltos
**v1.0 · Visión Digital**

---

## 1. Qué es y qué no es

El **Índice de Confianza** mide **cuánta evidencia respalda una pieza**, en una escala de 0 a 100.

- **No es** una probabilidad garantizada de éxito.
- **Sí es** un ordenamiento honesto de riesgo: a igual presupuesto, se produce primero lo que tiene más evidencia detrás.
- **Se recalibra** con los resultados reales de la cuenta: una pieza con IC 88 que fracasa baja el peso del ángulo que la originó para ese cliente.

Comercialmente se comunica así:

> "No te prometo que las 7 funcionen. Te prometo que las vas a probar en orden de probabilidad, que cada una tiene una razón rastreable, y que en la segunda entrega el sistema ya sabe qué funcionó en tu cuenta."

---

## 2. La fórmula

```
IC = 0,30 · EV + 0,20 · ES + 0,20 · EO + 0,15 · CP + 0,15 · EN  − penalizaciones
```

| Sigla | Componente | Peso | Qué mide |
|---|---|---|---|
| **EV** | Evidencia de longevidad | 30% | Días activo del anuncio que respalda el ángulo |
| **ES** | Escalado del referente | 20% | Cuántas variantes del mismo copy sostiene el competidor |
| **EO** | Rendimiento orgánico | 20% | ER y velocidad del contenido que usa ese gancho |
| **CP** | Calidad de tu prueba | 15% | Si puedes demostrar lo que prometes |
| **EN** | Encaje | 15% | País + categoría/precio + nivel de conciencia |

---

## 3. Cómo se puntúa cada componente

### 3.1 EV · Evidencia de longevidad (0–100)
| Días activo del referente | Puntos |
|---|---|
| < 7 (test) | 10 |
| 7–13 | 25 |
| 14–29 | 45 |
| 30–59 | 65 |
| 60–89 | 80 |
| ≥ 90 | 100 |

### 3.2 ES · Escalado (0–100)
| Variantes del mismo copy | Puntos |
|---|---|
| 1 | 10 |
| 2–3 | 40 |
| 4–6 | 65 |
| 7–10 | 85 |
| > 10 | 100 |

### 3.3 EO · Rendimiento orgánico (0–100)
Usa el contenido de mejor rendimiento que emplea el mismo gancho:
`ER% = (reacciones + comentarios + compartidos + guardados) / vistas × 100`

| ER% | Puntos |
|---|---|
| < 1 | 10 |
| 1–2 | 35 |
| 2–4 | 55 |
| 4–6 | 75 |
| 6–10 | 90 |
| > 10 | 100 |

### 3.4 CP · Calidad de prueba disponible (0–100)
Se puntúa con lo que el cliente declaró que puede mostrar:

| Activo | Puntos |
|---|---|
| Testimonios en video | 40 |
| Demostración del producto | 35 |
| Datos o cifras propias | 25 |
| Fotos reales | 10 |
| **Ninguno** | **25** (techo del lote) |

Máximo 100. Esta es la razón por la que el briefing pregunta "¿qué prueba tienes?": sin prueba, ninguna pieza puede pasar de banda B.

### 3.5 EN · Encaje (0–100)
| Criterio | Puntos |
|---|---|
| Mismo país y modismos del avatar | 40 |
| Misma categoría y rango de precio | 30 |
| Mismo nivel de conciencia que atacó el ganador | 30 |

---

## 4. Penalizaciones (se restan después de la suma)

| Situación | Penalización |
|---|---|
| Compliance **alto** (salud, finanzas, empleo, vivienda, política) | **−6** |
| Compliance **medio** (restricciones declaradas por el cliente) | **−2** |
| Oferta sin garantía declarada | **−3** |
| Cada dato ★ faltante en el briefing (sub-nicho, mecanismo, prueba, referencias, restricciones, qué puedes producir) | **−3**, máximo **−12** |
| Destino desalineado (la landing no repite la promesa) | **−5** al lote completo |

Las penalizaciones no son castigos: son el precio de la incertidumbre. Y son la palanca que el cliente puede mover sin gastar dinero —rellenar un campo ★ sube el IC de todas sus piezas.

---

## 5. Bandas

| IC | Banda | Etiqueta | Qué significa |
|---|---|---|---|
| 85–100 | **A** | Alta evidencia | Estructura probada en tu mercado. Producir y lanzar primero. |
| 70–84 | **B** | Evidencia sólida | Un elemento es nuevo (formato o nivel de conciencia). |
| 55–69 | **C** | Evidencia parcial | Validado en otro mercado o formato. Requiere test. |
| < 55 | **D** | Apuesta | Se entrega por diversidad, no por seguridad. |

---

## 6. Cuatro ejemplos resueltos

### Ejemplo 1 — Pieza ancla, banda A · IC 94
Cliente de e-commerce no regulado. Ángulo con 4 competidores activos, referente de 120 días, 9 variantes, contenido orgánico con ER 7,2%, cliente con testimonios y demo.

| Componente | Valor | Puntos | Aporte |
|---|---|---|---|
| EV | 120 días | 100 | 30,0 |
| ES | 9 variantes | 85 | 17,0 |
| EO | ER 7,2% | 90 | 18,0 |
| CP | testimonio + demo | 75 | 11,25 |
| EN | mismo país/categoría/conciencia | 92 | 13,8 |
| | | **Subtotal** | **90,05** |
| | Sin penalizaciones | | 0 |
| | | **IC** | **90** |

> Lectura: es la pieza que se produce primero. Todo lo que la respalda existe y es reciente.

### Ejemplo 2 — Adaptación de formato, banda A/B · IC 86
El mismo ángulo ganador, pero en carrusel en lugar de video. Se pierde la evidencia directa del formato.

| Componente | Valor | Puntos | Aporte |
|---|---|---|---|
| EV | 96 | 96 | 28,8 |
| ES | 90 | 90 | 18,0 |
| EO | 86 | 86 | 17,2 |
| CP | 75 | 75 | 11,25 |
| EN | 92 | 92 | 13,8 |
| | **Subtotal** | | **89,05** |
| | Oferta sin garantía | −3 | |
| | | **IC** | **86** |

> Lectura: misma confianza en el mensaje, menos en el formato. Se lanza en la primera ola, pero se mide con más paciencia.

### Ejemplo 3 — Pieza de segundo lote, banda B · IC 77
Ángulo validado pero escalado bajo: el competidor solo sostiene 2 variantes y el contenido orgánico es moderado.

| Componente | Valor | Puntos | Aporte |
|---|---|---|---|
| EV | 84 | 84 | 25,2 |
| ES | 66 | 66 | 13,2 |
| EO | 78 | 78 | 15,6 |
| CP | 70 | 70 | 10,5 |
| EN | 84 | 84 | 12,6 |
| | | **IC** | **77** |

### Ejemplo 4 — Pieza disruptiva, banda D · IC 45
Contra-narrativa sin referente directo: no hay anuncio que la respalde porque el ángulo no está siendo usado en ese mercado.

| Componente | Valor | Puntos | Aporte |
|---|---|---|---|
| EV | 52 (referente en otro país) | 52 | 15,6 |
| ES | 18 (1 sola variante) | 18 | 3,6 |
| EO | 60 (ER 2,8%) | 60 | 12,0 |
| CP | 30 (sin prueba) | 30 | 4,5 |
| EN | 62 | 62 | 9,3 |
| | | **IC** | **45** |

> Lectura: se entrega porque el portafolio necesita una apuesta, pero **no se escala** aunque tenga buen Hook Rate inicial: primero se convierte en ganador con 30 días de evidencia.

---

## 7. Distribución esperada de un lote sano

| Banda | Cantidad | Función |
|---|---|---|
| A | 3–4 | Sostienen el resultado de la cuenta |
| B | 1–2 | Exploran formato o nivel de conciencia |
| C | 1 | Cubren un hueco de argumento |
| D | 1 | Apuesta de diversidad |

Si un lote sale con **menos de 3 piezas en banda A**, el problema no es el motor: es el briefing o la falta de prueba. La app debe decirlo explícitamente, no entregar 7 mediocres en silencio.

---

## 8. Recalibración con resultados reales (el bucle)

Después de cada test se registran tres datos por pieza: Hook Rate, CTR y CPA/ROAS.

| Resultado observado | Ajuste del sistema |
|---|---|
| IC alto + rendimiento alto | El ángulo y el formato suben de peso para ese cliente |
| IC alto + rendimiento bajo | Se revisa la **evidencia de origen** (¿el referente era comparable en precio y país?) y baja el peso del ángulo |
| IC bajo + rendimiento alto | Sube el peso de la **disruptiva**: el mercado estaba listo antes de lo previsto |
| IC bajo + rendimiento bajo | Se descarta el ángulo para ese cliente, no para siempre |

A los 3 ciclos (≈6 semanas) el IC deja de ser una estimación de mercado y se vuelve un **modelo calibrado para esa cuenta**. Ahí está el foso competitivo: nadie puede comprar tu historial.

---

## 9. Errores que invalidan el IC

1. Puntuar con datos de otro país "porque se parecen".
2. Contar variantes que en realidad son cambios de imagen del mismo anuncio repetido (sí cuentan) mezclados con anuncios distintos (no cuentan).
3. Usar ER de contenido de hace un año.
4. Declarar prueba que el cliente no tiene.
5. Subir el IC "para que el cliente se anime". Un IC inflado destruye la confianza en la segunda entrega.
