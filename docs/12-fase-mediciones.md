# Fase 4 · Mediciones y Auditoría de redes

**Estado: los dos bloques CONSTRUIDOS.**
AdForge · Content & Ads Studio · Visión Digital

> Decisiones cerradas con el usuario: dos prompts separados · métricas a mano · la medición moverá el IC ·
> se construye primero la auditoría de redes.

---

## Por qué esta fase tiene que ser aparte

El prompt de investigación corre **antes** de publicar: busca competencia, viral y anuncios vivos. La medición corre **después**: solo existe cuando la pieza ya tiene impresiones.

Son dos momentos distintos, con dos entradas distintas:

| | Investigación (fase 2) | Medición (fase 4) |
|---|---|---|
| Cuándo | Antes de producir | Después de publicar |
| Qué entra | Briefing | Enlace de la pieza + métricas + perfil social |
| Qué sale | Ángulos, anuncios, virales, copys | Semáforo, diagnóstico, auditoría, recomendaciones |
| Si se mezclan | El JSON se duplica y el agente se pierde | |

**Decisión propuesta: un segundo prompt independiente, con su propio botón.** Mismo modo Agent, mismo flujo de copiar → pegar → cargar. Nada de meterlo en el JSON de la investigación.

---

## La pestaña nueva: `Mediciones`

Entra después de *Entrega*. Dos bloques que se usan por separado.

### Bloque A · Cómo va la pieza

El usuario **pega el enlace** de lo que publicó (post de Instagram, video de TikTok, anuncio de Meta) y **copia las cifras** que le da la plataforma:

impresiones · alcance · reproducciones de 3 s · reproducciones completas · clics · gasto · conversaciones

> **Por qué a mano y no automático:** Meta y TikTok no entregan métricas por enlace a un agente sin acceso a la cuenta. El enlace sirve para que el agente **vea la pieza**; los números los pone el usuario. Es 30 segundos de trabajo y es el único camino que no depende de una API ni de una llave.

**Lo que hace la app con esos números** — y esto es lo importante: **la app hace las cuentas, no la IA.**

| Calcula | Fórmula | Contra qué lo compara |
|---|---|---|
| Hook rate | repro 3 s ÷ impresiones | ≥ 25% |
| Retención | completas ÷ impresiones | ≥ 15% |
| CTR | clics ÷ impresiones | ≥ 1,5% |
| CPM · CPC | gasto ÷ impresiones · gasto ÷ clics | US$ 8–25 · ≤ 1,50 |
| Frecuencia | impresiones ÷ alcance | < 2,5 |
| Costo por conversación | gasto ÷ conversaciones | ≤ US$ 3–8 |

Sale un **semáforo** por pieza y **una sola lectura, en español claro**:

> *"Esta pieza retiene bien (31% a los 3 s) pero nadie hace clic (0,4%). El gancho está bien; la oferta no. Cambia el CTA, no el video."*

Y una **acción concreta** por cada semáforo en rojo. Sin párrafos, sin gráficos complicados.

Al cerrar el ciclo, esa medición **vuelve al IC de la pieza**: una pieza medida con buen hook rate sube; una con 0,3% de CTR baja. La app aprende del resultado real y el siguiente lote sale mejor. Ese es el círculo completo que hoy no existe.

### Bloque B · Auditoría de redes

El usuario pega **el enlace o el usuario** de su Instagram, TikTok, Facebook, YouTube o LinkedIn. El agente entra en modo Agent, mira el perfil público y devuelve un diagnóstico.

Se auditan **7 cosas**, siempre las mismas:

1. **Biografía** — ¿se entiende qué vende en 3 segundos? ¿tiene CTA? ¿tiene enlace?
2. **Primera impresión del perfil** — foto, nombre, destacados, feed de 9.
3. **Frecuencia** — cuántos posts por semana y si es constante.
4. **Formatos** — qué usa y qué le falta (video corto, carrusel, testimonio).
5. **Ganchos** — ¿los primeros 3 segundos dicen algo o saludan?
6. **Prueba** — ¿muestra clientes, resultados, entregas?
7. **Llamado a la acción** — ¿hay uno? ¿es el mismo en todas partes?

Cada punto sale con **estado (bien / flojo / falta)** y una **recomendación accionable**, no un consejo genérico:

> ❌ "Mejora tu bio"
> ✅ "Tu bio dice *'Venta de autos'* y no dice **para quién**. Cambia a: *'Carros financiados en Miami con pasaporte. Down desde $999. Escríbenos 👇'* y pone el WhatsApp en el enlace."

**Formato de salida: auditoría priorizada por impacto.** Máximo 8 recomendaciones, ordenadas, con qué hacer hoy y qué hacer esta semana.

---

## Cómo se conecta con lo que ya existe

- Reutiliza el **mismo botón** de copiar y abrir Arena en modo Agent.
- Reutiliza la **tabla de KPIs** que ya está en la entrega: son las metas contra las que se mide.
- Guarda el resultado **por cliente**, así la segunda medición se compara con la primera.
- La entrega en PDF puede incluir el reporte de medición: sirve para mostrarle al cliente que la app está funcionando.

---

## Decisiones cerradas

| Pregunta | Decisión |
|---|---|
| ¿Dos prompts o uno? | **Dos, separados.** |
| ¿De dónde salen las métricas? | **Enlace + números a mano.** Sin API, sin llaves. |
| ¿La medición mueve el IC? | **Sí**, cierra el círculo. |
| ¿Por dónde empezar? | **Auditoría de redes primero.** |

---

## Bloque B · Auditoría de redes — CONSTRUIDO

Pestaña **Redes**, cuarta del cliente y cuarto paso del stepper.

**Cómo se usa:** eliges la red (Instagram, TikTok, Facebook, YouTube, LinkedIn), escribes el usuario o el enlace,
pulsas *Copiar prompt y abrir Arena*, activas Agent Mode, pegas la respuesta.

**Qué devuelve** — el JSON trae `perfil`, `metricas`, `ejes`, `recomendaciones`, `mejores` y `veredicto`.

**Los 7 ejes** son fijos, siempre los mismos, para que dos auditorías se puedan comparar entre sí:

1. Biografía · 2. Primera impresión · 3. Frecuencia · 4. Formatos · 5. Ganchos · 6. Prueba · 7. Llamado a la acción

**El puntaje lo calcula la app, no la IA.** `bien` = 1 · `flojo` = 0,5 · `falta` = 0, dividido entre los 7 ejes.
Letra: A ≥ 85 · B ≥ 70 · C ≥ 55 · D ≥ 40 · E por debajo. Si la IA se salta un eje, ese eje puntúa cero:
así no se premia una auditoría incompleta.

**Los estados se normalizan aunque la IA se invente la palabra:** `vdEstadoEje()` reconoce
"bien / bueno / excelente / correcto / óptimo", "flojo / medio / regular / parcial / débil / insuficiente",
y todo lo demás cae en `falta` — incluido "muy malo".

**La bio sale en dos columnas:** cómo está hoy y **el texto exacto que hay que poner**, listo para copiar.

**El plan de acción** es lo que cierra la pestaña: máximo 8 recomendaciones, ordenadas por impacto, cada una
con plazo *hoy* o *esta semana*, y un botón para copiar el plan completo.

**Si el perfil es privado**, la IA no puede verlo: la app lo avisa antes de que el usuario pierda el tiempo.

---

## Bloque A · Medición — CONSTRUIDO

Pestaña **Medición**, entre *Entrega* y *Redes*, con dos modos:

| Modo | Para qué | Métricas |
|---|---|---|
| **Contenido orgánico** (por defecto) | Lo que publicas en tu cuenta | Alcance, vistas, likes, comentarios, compartidos, guardados, retención, seguidores nuevos, clics al enlace |
| **Anuncio pagado** | Solo si además lo pautas | Impresiones, repro 3 s, completas, clics, gasto, conversaciones |

> **Corrección del 6-nov:** el bloque se construyó primero con métricas del administrador de anuncios.
> El usuario aclaró que quería **KPIs orgánicos**. El modo orgánico pasó a ser el principal y el de pago quedó como opción secundaria.

### Metas orgánicas por red

| KPI | Fórmula | Instagram | TikTok | Facebook | YouTube | LinkedIn |
|---|---|---|---|---|---|---|
| Engagement rate | (likes+coment+compart+guardados) ÷ alcance | ≥ 3% | ≥ 5% | ≥ 2% | ≥ 3% | ≥ 4% |
| Tasa de guardado | guardados ÷ alcance | ≥ 1,5% | ≥ 2% | ≥ 0,8% | ≥ 1% | ≥ 1% |
| Tasa de compartido | compartidos ÷ alcance | ≥ 1% | ≥ 1,5% | ≥ 0,8% | ≥ 0,6% | ≥ 0,8% |
| Tasa de comentario | comentarios ÷ alcance | ≥ 0,5% | ≥ 0,6% | ≥ 0,4% | ≥ 0,5% | ≥ 0,6% |
| Alcance sobre seguidores | alcance ÷ seguidores | ≥ 30% | ≥ 100% | ≥ 20% | ≥ 15% | ≥ 25% |
| Retención | tiempo medio ÷ duración | ≥ 50% | ≥ 50% | ≥ 50% | ≥ 50% | ≥ 50% |
| Seguidores nuevos | nuevos ÷ alcance | ≥ 0,2% | ≥ 0,2% | ≥ 0,2% | ≥ 0,2% | ≥ 0,2% |
| Clics al enlace | clics ÷ alcance | ≥ 1% | ≥ 1% | ≥ 1% | ≥ 1% | ≥ 1% |

Cada fila tiene su banda ámbar a la mitad del valor verde. El modo pago conserva su propia tabla
(hook rate, retención, CTR, CPM, CPC, frecuencia, costo por conversación).

### La lectura orgánica

Se elige por el orden en que un contenido orgánico se rompe:

1. **Guarda y comparte en verde** → la pieza sirve: repetir el formato con otro tema.
2. **Alcance bajo pero engagement bien** → el problema son los primeros 3 segundos.
3. **Engagement bajo** → la vieron y siguieron de largo: falta una acción concreta al final.
4. **Retención baja** → se cae antes del final: cortar, no añadir.
5. **Engagement bien pero nadie te sigue** → gusta el contenido, no queda claro qué gana el que se queda.

### Puntaje del resultado y movimiento del IC

```
puntaje = % de métricas en verde (100) / ámbar (55) / rojo (15)
bonus   = +6 si la tasa de guardado está en verde, +6 si la de compartido está en verde
IC final = 0,60 × IC de la investigación + 0,40 × puntaje
```

El bonus de guardados y compartidos existe porque son las dos señales que la red usa para decidir
si distribuye más el contenido.

### Prueba real con Dayacar

| Pieza | Dato | IC |
|---|---|---|
| Objeción directa | TikTok 96 k de alcance · 10% ER · 2,19% guardados | 80 → **82** |
| Identidad | Instagram 1.500 de alcance · 22% de retención | 73 → **57** |
| Costo de la inacción | modo pago, 7 de 7 en verde | 71 → **83** |

Las mediciones sobreviven a la regeneración: se guardan en `c.mediciones` con la clave del id de la pieza.


---

## Relojes de medición · escala de 5 bandas

Toda medición se muestra con un **reloj de agujas** en SVG puro, con el estilo del logotipo (oro `#f2cf6a` sobre azul noche).

**La escala va de peor a mejor:** rojo › naranja › amarillo › verde › **oro**.

| Tramo | Color | Cuándo |
|---|---|---|
| Oro | `#f0c85a` | 150% de la meta o más |
| Verde | `#5fbf8a` | llega a la meta |
| Amarillo | `#dcd23f` | 75% de la meta |
| Naranja | `#e0863f` | 50% de la meta |
| Rojo | `#d9544f` | por debajo de la mitad |

Para las métricas donde menos es mejor (CPM, CPC, frecuencia, costo por conversación) la escala se invierte.

**Dónde aparece:**
- **Puntaje de cada pieza medida** (reloj grande de 128 px) con el resultado de 0 a 100.
- **Cada KPI** con su propio reloj de 74 px, el valor dentro y la meta al lado.
- **Las tres cifras del resumen**: IC medio, piezas medidas y cuántas están en oro.
- **El puntaje de la auditoría de redes** (reloj de 132 px) y un reloj pequeño en cada uno de los 7 ejes.

**Cómo se dibuja:** 270° de arco con 5 tramos de color, marcas interiores cada 5 puntos, aguja dorada con contrapeso y bisel con reflejo tenue del color alcanzado.
En tamaños menores a 84 px se simplifica: sin marcas, sin aguja, con un punto en el extremo del arco — así no se ve sucio en pantallas pequeñas.

Todo es SVG en línea: no depende de ninguna librería ni de conexión.
