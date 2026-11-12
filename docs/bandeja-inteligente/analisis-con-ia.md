---
id: analisis-con-ia
title: Análisis con IA
sidebar_label: Análisis con IA
sidebar_position: 5
description: Cómo la Bandeja Inteligente de ConsulPoint analiza correos con un microagente, qué resultado se obtiene y dónde se guarda.
---

# Análisis con IA

Un [microagente](/control/estudio/microagentes) asignado a una [regla](/bandeja-inteligente/reglas-de-correo) lee cada correo que la regla captura y genera un análisis: un resumen, los datos importantes, las acciones pendientes… El análisis consume créditos.

Se analizan el remitente, los destinatarios, el asunto, la fecha y el texto del correo. Los adjuntos no forman parte del análisis.

## Los dos tipos de análisis

| | Lector de correo | Email a Markdown |
|---|---|---|
| **Qué genera** | Datos estructurados: resumen, señales, entidades, acciones pendientes… | Un documento de texto con el contenido del correo, listo para guardar |
| **Dónde se guarda** | Si la regla tiene **Carpeta de resúmenes**, un archivo por correo, en subcarpetas por mes | Donde se elija, con **Guardar en el Centro de conocimiento…** |
| **Para qué** | Revisar y clasificar correos, seguir pedidos o incidencias | Convertir correos en conocimiento que consultan los agentes |

## Analizar un correo

1. Abrir el correo y pulsar **Mostrar panel IA**.
2. Pulsar **Analizar y guardar** (si la regla tiene carpeta de resúmenes) o **Analizar con IA**.
3. El análisis tarda unos segundos. Se puede seguir navegando; el resultado aparece en el panel.

También se puede lanzar desde el botón de chispas de la lista de correos.

El panel indica cuándo no se puede analizar un correo y por qué, por ejemplo:

| Mensaje | Qué hacer |
|---|---|
| **Este correo no coincide con ninguna regla activa con micro-agente** | Crear o ajustar una regla, o asignarle un microagente |
| **La regla que coincide con este correo está desactivada** | Activarla |
| **La regla no tiene carpeta de resúmenes** | El análisis se muestra pero no se guarda. Para guardarlo, **Elegir carpeta de resúmenes en la regla** |

## Analizar muchos correos a la vez

**Analizar pendientes** procesa en lote los correos de una regla que aún no tienen análisis. Está en el **Ver detalle** de la regla (**Procesamiento manual**) y en la cabecera de la lista cuando se filtra por una regla con microagente y carpeta de resúmenes.

- Analiza hasta 50 correos por ejecución.
- Por defecto, de los últimos 7 días, o desde la fecha **Capturar correos desde** de la regla.
- Al terminar indica cuántos se analizaron, cuántos ya estaban guardados, cuántos fallaron y cuántos quedan pendientes. Para seguir, **Procesar de nuevo**.
- Se detiene si se acaban los créditos.

## El resultado

Con un **Lector de correo**, el panel muestra el resultado organizado:

| Sección | Contenido |
|---|---|
| **Resumen** | El correo en pocas líneas |
| **Señales** | **Urgencia**, **Sentimiento**, **Intención** e **Idioma** |
| **Remitente** y **Destinatarios** | Quién escribe y a quién |
| **Entidades detectadas** | Nombres, empresas, importes, fechas… |
| **Acciones pendientes** | Lo que el correo pide hacer, con su prioridad |
| **Etiquetas** | Clasificación sugerida |

Las secciones dependen del esquema de respuesta del microagente. El resultado lo genera la IA y puede contener errores.

Con **Email a Markdown**, el panel muestra el **Documento generado** y el botón **Guardar en el Centro de conocimiento…** para elegir la carpeta.

## Volver a analizar

**Volver a analizar** genera un análisis nuevo que sustituye al anterior, también el archivo guardado. Consume créditos de nuevo y no se puede deshacer. Si un análisis falló, **Reintentar y guardar** lo vuelve a intentar.

## Créditos

Cada análisis consume créditos de la organización, salvo con modelos propios de la organización. Abrir un correo o ver un análisis ya hecho no consume. Sin créditos, el panel lo indica con un enlace a **Ver consumo**.

## Buenas prácticas

:::tip Análisis útiles
- Asignar microagente solo a las reglas cuyos correos necesitan análisis: cada uno consume créditos.
- Para clasificar o hacer seguimiento, un **Lector de correo** con carpeta de resúmenes: los resúmenes quedan ordenados por mes y se pueden compartir con un agente.
- Probar con algunos correos uno a uno antes de usar **Analizar pendientes**.
:::
