# FASE 3 · DOC 05 — PLANTILLAS DE LA PIEZA Y ESTRUCTURA DE ENTREGA
### La fábrica: cómo se ve exactamente cada una de las 7 piezas
**v1.0 · Visión Digital**

---

## 1. La pieza: plantilla maestra de 12 campos

Toda pieza del sistema —sea video, carrusel o estático— se construye con los mismos 12 campos. Si un campo falta, la pieza no se emite.

| # | Campo | Definición | Regla dura |
|---|---|---|---|
| 1 | **Nombre interno** | Ángulo + formato. Para el equipo, no para el público. | Nunca se publica |
| 2 | **Índice de Confianza** | 0–100 + banda A/B/C/D + desglose | Siempre visible |
| 3 | **Ángulo · Formato · Nivel de conciencia** | Los tres ejes de la matriz | No puede repetirse el ángulo entre piezas del mismo lote |
| 4 | **Gancho principal + 2 alternos** | Primera frase o primer frame | Máx. 12 palabras · comprensible sin audio |
| 5 | **Copy / descripción** | Texto del anuncio | Los primeros 125 caracteres deben funcionar solos |
| 6 | **Guion por beats** | Escena por escena con tiempos (video) o slide por slide (carrusel) | Máx. 5 beats en video de 30 s |
| 7 | **CTA de acción + CTA de baja fricción** | Dos llamados, uno exigente y uno fácil | Nunca dos CTAs de acción compitiendo |
| 8 | **Prueba a usar** | El activo real que respalda la promesa | Debe existir; si no existe, se cambia la promesa |
| 9 | **Prompt de imagen** | Fórmula de generación | Sin texto en la imagen generada |
| 10 | **Prompt de video / storyboard** | 3 escenas descritas | Movimiento desde el frame 1 |
| 11 | **Hipótesis + métrica + umbral de corte** | Qué esperamos y cuándo se apaga | Números, no adjetivos |
| 12 | **Evidencia de origen + compliance** | Qué anuncio o contenido la respalda + riesgo | Trazabilidad obligatoria |

---

## 2. Plantilla por formato

### 2.1 Video UGC (vertical, 15–30 s)
**Función:** el caballo de batalla. Máxima transferencia desde contenido orgánico.
**Especificaciones:** 1080×1920 (9:16) · 15–30 s · subtítulos quemados · cámara en mano · audio real, no locución publicitaria.

| Beat | Tiempo | Qué ocurre | Regla |
|---|---|---|---|
| 1. Gancho | 0–3 s | Frase + movimiento desde el frame 1 | Sin logo, sin intro, sin "hola" |
| 2. Promesa | 3–8 s | Qué cambia y en cuánto tiempo | Concreto, con plazo |
| 3. Mecanismo | 8–15 s | El "cómo" en 3 pasos | Sin jerga técnica |
| 4. Prueba + objeción | 15–22 s | Se derriba la objeción principal | Una sola objeción por video |
| 5. CTA | 22–30 s | Acción + oferta en pantalla | Un solo verbo |

**Errores típicos:** agradecer/introducirse (regala los 3 segundos más caros), música alta que tapa la voz, promesa sin plazo, dos CTAs distintos.
**QA:** ¿se entiende con el sonido apagado? ¿el primer frame detiene el scroll sin explicación?

---

### 2.2 Video demo (20–30 s)
**Función:** para productos donde ver es creer. Convierte mejor cuando la prueba es visual.
**Especificaciones:** 9:16 o 1:1 · 20–30 s · plano cerrado, sin cortes publicitarios.

| Beat | Tiempo | Qué ocurre |
|---|---|---|
| 1. Resultado primero | 0–2 s | El "después" en pantalla, sin explicar |
| 2. Problema | 2–6 s | Dicho en palabras del cliente |
| 3. Demostración | 6–14 s | El mecanismo paso a paso, manos y producto en cuadro |
| 4. Prueba | 14–20 s | Dato o mini-testimonio que confirma |
| 5. CTA | 20–28 s | Acción + garantía |

**Errores típicos:** explicar antes de mostrar, iluminación pobre, cortes rápidos que impiden entender el paso.
**QA:** ¿se ve el producto funcionando sin necesidad de audio?

---

### 2.3 Testimonio (30–45 s)
**Función:** prueba social pura. Es la pieza que más sube el IC cuando el cliente tiene testimonios reales.
**Especificaciones:** 9:16 · 30–45 s · persona real, entorno real, sin guion leído.

| Beat | Tiempo | Qué ocurre |
|---|---|---|
| 1. Gancho | 0–3 s | La frase más fuerte del testimonio, a cámara |
| 2. Contexto | 3–8 s | Quién es y cómo estaba antes |
| 3. Punto de giro | 8–14 s | Qué probó y por qué desconfiaba (objeción real) |
| 4. Resultado | 14–20 s | Qué cambió, con detalle medible |
| 5. Recomendación | 20–26 s | A quién se lo diría |
| 6. CTA | 26–32 s | Acción |

**Errores típicos:** editar hasta hacerlo sonar falso, poner música épica, elegir al cliente menos parecido al avatar.
**QA:** ¿el testimonio menciona la objeción principal del avatar, no una inventada?

---

### 2.4 Carrusel (7 slides)
**Función:** educar y ordenar el argumento. Ideal para niveles 1–3 de conciencia.
**Especificaciones:** 1080×1350 (4:5) · 5–8 slides · slide 1 = portada-gancho.

| Slide | Contenido |
|---|---|
| 1 | Titular de máx. 7 palabras. Una sola idea. Debe funcionar como anuncio completo. |
| 2 | Síntoma: cómo se siente hoy el problema (escena concreta, no adjetivo) |
| 3 | Por qué lo típico falla (la objeción puesta en palabras del cliente) |
| 4 | Mecanismo en 3 pasos numerados |
| 5 | Prueba: una sola, grande (resultado, dato o testimonio) |
| 6 | Oferta: qué incluye, qué cuesta, qué garantía |
| 7 | CTA explícito + razón para actuar ahora |

**Errores típicos:** slides con dos ideas, texto de 40 palabras, último slide sin CTA.
**QA:** ¿cada slide tiene una razón para deslizar al siguiente?

---

### 2.5 Estático (imagen única)
**Función:** mensaje frontal. El formato más rápido de producir y el más difícil de hacer bien.
**Especificaciones:** 1080×1350 (4:5) · un solo sujeto · texto legible en miniatura.

| Elemento | Regla |
|---|---|
| Titular | Máx. 7 palabras, el gancho completo |
| Subtítulo | La promesa con plazo |
| Prueba | Una línea: cifra, "300 clientes" o sello de garantía |
| CTA | Sobre la imagen y en el copy: el mismo verbo |
| Dirección de arte | Un sujeto, contraste alto, fondo limpio, sin collage |

**Errores típicos:** más de 20% del área con texto (baja el alcance), stock evidente, sin rostro humano, precio escondido.
**QA:** ¿se lee a 200 px de ancho?

---

## 3. Reglas de copy transversales

1. **Gancho ≤ 12 palabras.** Si necesita coma explicativa, no es gancho.
2. **Primeros 125 caracteres autosuficientes.** Es lo que se ve antes del "ver más".
3. **Un solo verbo por CTA.** "Escríbenos", "Reserva", "Compra", "Comenta".
4. **Nunca atributos personales.** "¿Tienes sobrepeso?" → "Si te cuesta…".
5. **Nada de texto quemado en la imagen generada.** El concepto va en la imagen; el mensaje, en el copy.
6. **Cifras en dígitos, no en letras.** "21 días" se lee mejor que "veintiún días".
7. **El precio no se esconde** cuando el objetivo es venta: esconderlo sube clics y hunde la conversión.

---

## 4. Estructura del documento de entrega (lo que recibe el cliente)

```
1 · PORTADA
    Logo Visión Digital · nombre del cliente · país · fecha · IA usada

2 · RESUMEN EJECUTIVO (1 página)
    - Qué se investigó y con qué evidencia
    - Composición del lote (4 anclas / 2 adaptaciones / 1 disruptiva)
    - IC promedio y qué significa
    - Las 3 piezas que hay que producir primero

3 · MAPA DE LAS 7 PIEZAS (1 página, tabla)
    # | Ángulo | Formato | Conciencia | IC | Banda

4 · FICHAS DE PIEZA (1 página por pieza)
    Los 12 campos, con el guion desplegado y los prompts completos

5 · EVIDENCIA
    Anuncios y contenidos que respaldan cada pieza (enlace + métricas)
    Keywords que alimentan los ganchos

6 · COMPLIANCE
    Riesgos detectados, qué se reformuló y qué no se puede decir

7 · PLAN DE PRUEBA
    Qué lanzar el día 1, qué mirar el día 3 y 5, umbrales de corte,
    qué se duplica en la semana 2

8 · ANEXOS
    JSON completo · prompt maestro · glosario de ángulos
```

**Formatos de salida:** PDF (para el cliente), Markdown/Notion (para el equipo), JSON (para producción y para el bucle de resultados).

---

## 5. Checklist de QA antes de entregar (bloqueante)

- [ ] Las 7 piezas tienen **7 ángulos distintos**
- [ ] Ninguna pieza repite la anterior cambiando solo el texto
- [ ] Hay al menos 3 niveles de conciencia cubiertos
- [ ] Todos los ganchos se entienden sin audio y sin contexto
- [ ] Toda pieza tiene prueba asignada y esa prueba existe
- [ ] Todos los prompts de imagen dicen "sin texto"
- [ ] Cada pieza trae métrica y umbral de corte
- [ ] El aviso de compliance está presente si aplica
- [ ] Cada pieza apunta a su evidencia de origen
- [ ] El IC está desglosado, no solo el número

> Si falla cualquiera de las tres primeras, el lote se devuelve al motor. Son los errores que hacen que el cliente sienta que recibió "siempre lo mismo".
