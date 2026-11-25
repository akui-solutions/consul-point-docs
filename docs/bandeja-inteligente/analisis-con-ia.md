---
id: analisis-con-ia
title: Análisis con IA
sidebar_label: Análisis con IA
sidebar_position: 5
description: Cómo la Bandeja Inteligente de ConsulPoint analiza correos con un lector de correo, qué resultado se obtiene y dónde se guarda.
---

# Análisis con IA

Un [lector de correo](/control/estudio/microagentes#lector-de-correo) asignado a una [regla](/bandeja-inteligente/reglas-de-correo) lee cada correo que la regla captura y guarda el resultado en la carpeta de la regla. El análisis consume créditos.

Se analizan el remitente, los destinatarios, el asunto, la fecha y el texto del correo. Los adjuntos no forman parte del análisis.

## Qué se guarda

Cada lector de correo tiene un **Resultado**, elegido al crearlo:

| | Datos estructurados | Resumen |
|---|---|---|
| **Qué genera** | Los campos de un esquema, siempre con el mismo formato: resumen, señales, entidades, acciones pendientes… | Un documento de texto con lo importante del correo |
| **Para qué** | Revisar y clasificar correos, seguir pedidos o incidencias, llevar los datos a tablas o integraciones | Leer o buscar el contenido después, o dárselo a un agente |

En los dos casos el resultado se guarda en la **Carpeta para los resultados** de la regla: un archivo por correo, en subcarpetas por mes.

## Analizar un correo

1. Abrir el correo y pulsar **Mostrar panel IA**.
2. Pulsar **Analizar y guardar**.
3. El análisis tarda unos segundos. Se puede seguir navegando; el resultado aparece en el panel, marcado como **Guardado**.

También se puede lanzar desde el botón de chispas de la lista de correos.

Cuando un correo no se puede analizar, el panel indica por qué y lleva a lo que hay que cambiar:

| Mensaje | Qué hacer |
|---|---|
| **Este correo no coincide con ninguna regla activa con micro-agente** | Crear o ajustar una regla, o activar su análisis con IA |
| **La regla que coincide con este correo está desactivada** | Activarla |
| **La regla de este correo no tiene carpeta para los resultados** | **Elegir carpeta en la regla** |
| **La carpeta para los resultados de la regla ya no existe** | **Elegir carpeta en la regla** |
| **Otra regla ya guarda el otro tipo de resultado en esta carpeta** | **Ir a la regla** y elegir otro lector u otra carpeta |

## Analizar muchos correos a la vez

**Analizar pendientes** procesa en lote los correos de una regla que aún no tienen análisis. Está en el **Ver detalle** de la regla (**Procesamiento manual**) y en la cabecera de la lista cuando se filtra por una regla con análisis con IA.

- Analiza hasta 50 correos por ejecución.
- Por defecto, de los últimos 7 días, o desde la fecha **Capturar correos desde** de la regla.
- Al terminar indica cuántos se analizaron, cuántos ya estaban guardados, cuántos fallaron y cuántos quedan pendientes. Para seguir, **Procesar de nuevo**.
- Se detiene si se acaban los créditos.

## El resultado

Con **Datos estructurados**, el panel muestra el resultado organizado:

| Sección | Contenido |
|---|---|
| **Resumen** | El correo en pocas líneas |
| **Señales** | **Urgencia**, **Sentimiento**, **Intención** e **Idioma** |
| **Remitente** y **Destinatarios** | Quién escribe y a quién |
| **Entidades detectadas** | Nombres, empresas, importes, fechas… |
| **Acciones pendientes** | Lo que el correo pide hacer, con su prioridad |
| **Etiquetas** | Clasificación sugerida |

Las secciones dependen del esquema del lector. El resultado lo genera la IA y puede contener errores.

Con **Resumen**, el panel muestra el **Documento generado**.

### Resúmenes anteriores sin guardar

Algunos resúmenes generados antes de que la carpeta fuera obligatoria aparecen como **Pendiente de guardar**. Se pueden guardar de dos formas:

- **Guardar en la carpeta de la regla**: lo guarda junto a los demás resultados de la regla. Si el lector de la regla es el mismo que hizo el resumen, no vuelve a consumir créditos.
- **Guardar en el Centro de conocimiento…**: lo guarda en la carpeta que se elija.

## Volver a analizar

**Volver a analizar** genera un análisis nuevo, que pasa a ser el resultado del correo. Consume créditos de nuevo y no se puede deshacer. Si un análisis falló, **Reintentar y guardar** lo vuelve a intentar.

## Créditos

Cada análisis consume créditos de la organización, salvo con modelos propios de la organización. Abrir un correo o ver un análisis ya hecho no consume. Sin créditos, el panel lo indica con un enlace a **Ver consumo**.

## Buenas prácticas

:::tip Análisis útiles
- Activar el análisis solo en las reglas cuyos correos lo necesitan: cada análisis consume créditos.
- Para clasificar o hacer seguimiento, **Datos estructurados**; para leer o consultar el contenido después, **Resumen**. Los resultados quedan ordenados por mes y se pueden compartir con un agente.
- Probar con algunos correos uno a uno antes de usar **Analizar pendientes**.
:::
