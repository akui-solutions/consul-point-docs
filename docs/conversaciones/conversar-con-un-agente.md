---
id: conversar-con-un-agente
title: Conversar con un agente
sidebar_label: Conversar con un agente
sidebar_position: 2
description: Cómo iniciar una conversación con un agente en ConsulPoint, adjuntar archivos, dictar, usar la búsqueda web, ver las fuentes de cada respuesta, ver lo que recuerda el agente y probarlo.
---

# Conversar con un agente

Cómo iniciar una conversación, escribir, adjuntar archivos, usar las herramientas del agente y entender sus respuestas.

## Iniciar una conversación

1. Pulsar **Nueva conversación** en la lista.
2. Elegir **Conversación interna** (las opciones **WhatsApp** y **Telegram** inician una conversación con un contacto externo; ver [Canales y atención humana](/conversaciones/canales-y-atencion-humana#iniciar-una-conversación-por-whatsapp-o-telegram)).
3. Elegir un agente. **Ver todos los agentes** abre un buscador con todos los agentes a los que se tiene acceso.
4. Escribir la primera pregunta, o pulsar uno de los **iniciadores de conversación** que ofrece el agente.

El agente queda fijado al enviar el primer mensaje: para hablar con otro agente se abre una conversación nueva.

### Si el agente ya no está disponible

Un agente del [catálogo](/control/estudio/agentes-del-catalogo) deja de estar disponible cuando quien lo publica lo retira, o cuando la organización lo desinstala o lo desactiva. Sus conversaciones quedan marcadas con **Agente no disponible** y, en lugar del cuadro de mensaje, aparece **Este agente ya no está disponible. Puedes leer la conversación, pero no enviar mensajes.**

**Nueva conversación** abre una conversación nueva para elegir otro agente. Si un mensaje llegó a enviarse justo cuando el agente dejó de estar disponible, se marca con **No enviado: agente no disponible**.

## Escribir

- **Enter** envía y **Mayúsculas + Enter** hace un salto de línea.
- Un mensaje admite hasta 65.000 caracteres. Al acercarse al límite aparece un contador.
- **Dictar** convierte la voz en texto, hasta 5 minutos por grabación. Solo aparece si el agente tiene la función integrada **Voz a texto**.

### Adjuntar archivos

**Adjuntar archivos**, arrastrar o pegar. Solo aparece si el agente tiene la función integrada **Adjuntar archivos**.

| | En una conversación interna |
|---|---|
| Archivos por mensaje | Hasta 5 |
| Imágenes | JPG, PNG, WEBP, hasta 10 MB |
| Documentos | PDF, DOCX, XLS, XLSX, TXT, hasta 10 MB |

Los archivos adjuntos se envían al modelo para que los lea en esa conversación. No se guardan en el Centro de Conocimiento ni los consultan otros agentes.

### Herramientas

El menú **Herramientas** del cuadro de mensaje activa opciones para los siguientes mensajes:

| Herramienta | Qué hace | Aparece si… |
|---|---|---|
| **Búsqueda web** | El agente puede buscar información actualizada en internet | El agente tiene **Buscar en la web** |
| **Fuentes certificadas** | El agente puede consultar fuentes de información verificadas (Cala AI) | El agente tiene **Fuentes certificadas** |
| **Conectores** | Elegir qué herramientas externas del agente se usan en esta conversación | El agente tiene conectores |

Las herramientas activas se muestran como chips sobre el cuadro de mensaje y se quitan pulsándolos. Cada búsqueda web consume créditos.

## Las respuestas

Las respuestas pueden incluir texto con formato, tablas, diagramas (con **Descargar SVG** y **Ver en pantalla completa**), datos CSV (**Descargar CSV**), imágenes y figuras de los documentos del Centro de Conocimiento.

Una imagen se amplía al pulsarla (**Ampliar imagen**) y se descarga con **Descargar imagen**. Las imágenes de otros sitios web no se cargan solas: aparece **Imagen externa de…** con el nombre del sitio, y se muestran al pulsar **Mostrar**.

### Qué hizo el agente

Encima de cada respuesta, una línea resume lo que hizo el agente para responder: **Realizó 3 acciones**, o la acción misma si fue solo una. Mientras responde, la línea muestra en directo lo que está haciendo (**Buscando en los documentos…**), y debajo se indica la etapa: **Pensando...**, **Revisando las fuentes…** mientras lee lo que encontró, **Generando imagen...** o **Generando audio...**. Al pulsarla se ven los pasos y, en cada uno, la **Consulta** y el **Resultado**; en las búsquedas web, las **Páginas consultadas**.

| Acción | Cuándo aparece |
|---|---|
| **Buscó en los documentos** | Consultó el Centro de Conocimiento |
| **Buscó "…" en la web** / **Leyó una página web** | Usó la búsqueda web |
| **Buscó en fuentes certificadas** | Usó las fuentes certificadas |
| **Consultó los datos extraídos de los documentos** | Consultó datos de carpetas de [extracción inteligente](/centro-de-conocimiento/extraccion-inteligente) |
| **Consultó las transcripciones de audio y video** | Consultó archivos multimedia |
| **Buscó imágenes en los documentos** / **Compartió imágenes de los documentos** | Usó imágenes de los documentos |
| **Consultó a "…"** | Consultó a un [especialista](/control/estudio/especialistas) |
| **Usó la habilidad "…"**, **Leyó "…" de la habilidad "…"**, **Ejecutó "…" de la habilidad "…"** | Usó una [habilidad](/control/estudio/habilidades) |
| **Revisó la disponibilidad de la agenda** / **Agendó "…"** | Usó Google Calendar |
| **Guardó algo para recordar** | Actualizó su [memoria](#lo-que-recuerda-el-agente) |
| **Derivó la conversación a una persona** | Pidió atención humana (ver [Canales y atención humana](/conversaciones/canales-y-atencion-humana)) |
| **Usó una herramienta** | Usó un [conector](/organizacion/conectores) u otra herramienta |

Si una acción falla, se marca con **Falló**. La línea la ven todas las personas de la conversación.

Acciones de cada respuesta:

| Acción | Qué hace |
|---|---|
| **Copiar respuesta** | Copia el texto |
| **Generar audio** | Lee la respuesta en voz alta. Consume créditos |
| **Traducir mensaje** | Traduce la respuesta; **Ver original** vuelve al texto original |
| **Ver fuentes** | Abre las fuentes del mensaje. Solo si el agente consultó alguna |

Si un mensaje no se envía, **Reintentar mensaje** lo vuelve a intentar.

### Fuentes del mensaje

**Fuentes del mensaje** muestra la información que consultó el agente para esa respuesta:

<Screenshot src="/img/conversaciones/fuentes-del-mensaje.png" alt="Ventana Fuentes del mensaje en Conversaciones de ConsulPoint" caption="Fuentes del mensaje" maxWidth={560} />

| Tipo | Qué es |
|---|---|
| **Centro de conocimiento** / **Base de conocimiento interna** | Fragmentos de documentos, con su porcentaje de relevancia y la búsqueda con la que se encontraron |
| **Fuente web** | Páginas de internet consultadas. Se abren en una pestaña nueva |
| **Fuente certificada Cala AI** | Fuentes certificadas |
| **Recurso multimedia** | Transcripciones de vídeos o audios |
| **Documentos procesados** | Datos extraídos de documentos con [extracción inteligente](/centro-de-conocimiento/extraccion-inteligente) |

Es la mejor forma de comprobar que el agente responde con los documentos de la organización y no con conocimiento general del modelo.

:::danger Eliminar un fragmento
**Eliminar este fragmento** borra ese fragmento del conocimiento, para todas las personas y todas las conversaciones. Si viene del Centro de Conocimiento, deja de usarlo cualquier agente que consulte ese documento. No se puede deshacer. Solo debe usarse para retirar información incorrecta. El documento original no cambia.
:::

**Eliminar este fragmento** solo aparece con permiso de edición sobre el módulo del que viene la fuente: el **Centro de Conocimiento** para las fuentes **Centro de conocimiento**, y el **Estudio** para las demás.

## Lo que recuerda el agente

Si el agente tiene [memoria](/control/estudio/memoria), recuerda lo relevante de cada persona de una conversación a otra. Solo en conversaciones a solas con él: en una conversación compartida no usa ni guarda nada.

Cuando guarda algo, la respuesta lo indica debajo:

| Marca | Qué significa |
|---|---|
| **Memoria actualizada** | Guardó algo para las próximas conversaciones |
| **Memoria llena** | No pudo guardarlo porque la memoria llegó a su límite. Borrar lo que ya no sirva y pedírselo de nuevo |
| **Memoria sin actualizar** | Intentó guardar algo y no pudo. Pedírselo de nuevo más tarde |

### Qué recuerda de ti

Cada persona puede ver lo que el agente guardó de ella, corregirlo o borrarlo. Se abre de tres formas:

- En el menú de la cabecera, **Memoria del agente**.
- En **Detalles de la conversación**, en **Capacidades**, **Qué recuerda de ti**.
- Pulsando la marca de memoria de una respuesta.

<Screenshot src="/img/conversaciones/que-recuerda-de-ti.png" alt="Ventana Qué recuerda de ti en Conversaciones de ConsulPoint" caption="Qué recuerda de ti" maxWidth={560} />

| Acción | Qué hace |
|---|---|
| **Editar** | Corregir el texto, de hasta 8.000 caracteres. El agente usa los cambios en las próximas conversaciones |
| **Borrar memoria** | El agente olvida todo lo que guardó de esa persona y empieza de cero. No se puede deshacer |

Mientras el agente está respondiendo, **Editar** y **Borrar memoria** esperan a que termine, para no perder lo que guarde en esa respuesta. Si el agente guarda algo nuevo mientras se edita, la ventana lo avisa y ofrece **Cargar versión nueva**.

Para que olvide solo una cosa, también se le puede pedir en la conversación.

Lo que el agente recuerda de una persona no lo ve nadie más. Un administrador puede borrarlo, pero no leerlo. Ver [Quién puede ver y borrar la memoria](/control/estudio/memoria#quién-puede-ver-y-borrar-la-memoria).

## Ventana de contexto

Cada modelo puede tener en cuenta una cantidad limitada de conversación. Cuando la conversación usa el 80 % de ese espacio, aparece un indicador en el cuadro de mensaje; al 90 %, un aviso: **La ventana de contexto está casi llena**.

Al superar el límite, el modelo deja de poder responder con toda la conversación y la plataforma lo indica. En ese punto conviene abrir una conversación nueva.

:::tip Una conversación por tema
Abrir una conversación nueva al cambiar de asunto mejora la precisión de las respuestas y reduce el consumo.
:::

## Créditos

Cada respuesta consume créditos de la organización, salvo con modelos propios de la organización. Si se acaban, tras un breve periodo de gracia los agentes dejan de responder hasta que se recarguen.

## Probar un agente

Antes de abrir un agente a más personas o conectarlo a un canal, conviene probarlo aquí:

| Prueba | Comportamiento esperado |
|---|---|
| Pregunta cubierta por la documentación | Responde correctamente y **Ver fuentes** muestra los documentos esperados |
| Pregunta no cubierta | Dice que no tiene el dato, sin inventarlo |
| Pregunta fuera de su función | Deriva según sus instrucciones |
| Pregunta ambigua | Pide una aclaración |
| Pregunta para un especialista | **Qué hizo el agente** muestra **Consultó a "…"** |
