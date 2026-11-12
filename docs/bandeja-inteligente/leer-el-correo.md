---
id: leer-el-correo
title: Leer el correo
sidebar_label: Leer el correo
sidebar_position: 3
description: Cómo buscar, filtrar y leer correos en la Bandeja Inteligente de ConsulPoint, y qué indica cada icono.
---

# Leer el correo

<PageMeta route="/smart-inbox" />

La Bandeja Inteligente muestra el correo de la cuenta elegida tal como está en el proveedor (Gmail, Outlook o IMAP), con información añadida: qué regla capturó cada correo y si sus adjuntos o su análisis ya se guardaron.

La plataforma no guarda una copia de los correos: los consulta en la cuenta cada vez.

:::warning Abrir un correo lo marca como leído
Al abrir un correo en la Bandeja Inteligente, queda marcado como leído también en la cuenta de correo (Gmail, Outlook…).
:::

## La pantalla

| Elemento | Qué hace |
|---|---|
| **Selector de cuenta** | En la cabecera. Cambia la cuenta de correo que se muestra |
| **Buscar en la bandeja…** | Busca en los correos de la cuenta, con sugerencias mientras se escribe |
| **Actualizar** | Vuelve a consultar la cuenta |
| **Vista dividida** / **Vista de lista** | Lista y correo a la vez, o solo la lista |
| **Mostrar panel IA** | Abre el panel con el análisis del correo seleccionado. Ver [Análisis con IA](/bandeja-inteligente/analisis-con-ia) |
| **Selector de regla** | Encima de la lista. Muestra **Todas las reglas** o solo los correos que captura una regla |

La lista muestra 25 correos por página (se puede cambiar a 10, 50 o 100).

## Filtros

Chips de acceso rápido bajo el buscador:

| Filtro | Disponible en |
|---|---|
| **No leídos** | Todas las cuentas |
| **Con adjuntos** | Gmail y Outlook |
| **Destacados** (en Outlook, **Marcados**) | Gmail y Outlook |
| **Últimos 7 días** | Gmail |

**Opciones de búsqueda**, en el buscador, permite filtrar por **De**, **Para**, **Asunto**, **Etiqueta** y **Rango de fechas** (estas dos, solo en Gmail), además de adjuntos, destacados y no leídos. No está disponible para cuentas IMAP.

Los filtros activos se muestran como chips que se quitan uno a uno, o todos con **Quitar filtros**.

## Iconos de cada correo

Junto a cada correo aparecen iconos con lo que se ha hecho con él. Al pasar el ratón por encima, explican el detalle:

| Icono | Significado |
|---|---|
| **Regla de filtrado** | La regla que capturó el correo (solo con **Todas las reglas**) |
| **Adjuntos guardados** | Los adjuntos se guardaron en la carpeta de la regla |
| **Error al guardar los adjuntos** | No se pudieron guardar. Se puede repetir desde la regla con **Procesar adjuntos** |
| **Analizando…** / **Analizado y guardado** / **Análisis fallido** | El estado del análisis con IA |
| **Guardado en el Centro de conocimiento** | El documento generado por IA ya está en una carpeta |

El botón de chispas de cada fila analiza el correo con IA. Solo aparece en correos capturados por una regla que todavía no tienen análisis.

## Ver un correo

Al abrir un correo se muestran el asunto, el remitente, los destinatarios, la regla que lo capturó, sus etiquetas de Gmail y el contenido. Las flechas de la cabecera pasan al correo anterior o siguiente.

- Los enlaces del correo piden confirmación antes de abrirse.
- Los **adjuntos** se listan con su nombre y tamaño. Para guardarlos en el Centro de Conocimiento hace falta una [regla](/bandeja-inteligente/reglas-de-correo) con **Guardar adjuntos en el Centro de conocimiento**.

La Bandeja Inteligente no responde, reenvía, mueve ni elimina correos.
