---
id: subir-documentos
title: Subir documentos
sidebar_label: Subir documentos
sidebar_position: 3
description: Cómo subir archivos al Centro de Conocimiento de ConsulPoint, formatos admitidos, límites y versión en texto de los PDF.
---

# Subir documentos

Cómo cargar archivos en una carpeta, qué formatos se admiten y qué pasa después de subirlos.

## Subir archivos

1. Abrir la carpeta de destino. Los archivos siempre van dentro de una carpeta, no en la raíz.
2. Pulsar **Subir archivo**.
3. Arrastrar los archivos a la ventana **Subir archivos**, o pulsar en ella para elegirlos.
4. Pulsar el botón de subir, que indica cuántos archivos se van a subir (por ejemplo, **Subir 3 archivos**).

La ventana se cierra y el progreso se sigue en una bandeja en la esquina de la pantalla. Se puede seguir trabajando, e incluso cambiar de carpeta, mientras se suben.

| Estado | Significado |
|---|---|
| **En cola** | Esperando su turno |
| **Subiendo…** | En curso |
| **Subido** | Terminado |
| **Supera el tamaño máximo** | El archivo pasa de 150 MB |
| **Formato no admitido** | El tipo de archivo no se acepta |
| **No se pudo subir** | Otro error. Se puede **Reintentar** desde la bandeja |
| **Cancelado** | Se canceló desde la bandeja |

Si ya existe un archivo con el mismo nombre en la carpeta, el nuevo se guarda con un número al final, por ejemplo `manual (1).pdf`.

## Formatos y límites

| | Valor |
|---|---|
| Archivos por subida | Hasta 6 |
| Tamaño por archivo | Hasta 150 MB |
| Almacenamiento total | Según el plan contratado |

| Formato | Extensiones | Lo leen los agentes |
|---|---|---|
| PDF | `.pdf` | Sí |
| Word | `.docx` | Sí |
| Excel | `.xlsx`, `.xls` | Sí |
| Texto | `.txt` | Sí |
| Markdown | `.md` | Sí |
| Imágenes | `.png`, `.jpg`, `.jpeg` | No. Se guardan, pero los agentes no leen imágenes sueltas |

Las carpetas de [Extracción inteligente](/centro-de-conocimiento/extraccion-inteligente) admiten PDF, imágenes y Markdown. Las carpetas [Multimedia](/centro-de-conocimiento/multimedia) no admiten archivos: trabajan con enlaces de YouTube.

:::tip Imágenes con texto
Para que un agente lea el contenido de una imagen, por ejemplo un documento escaneado, conviene guardarla como PDF.
:::

## Qué pasa después de subir

Si la carpeta, o alguna carpeta por encima, está compartida con un agente, cada archivo se prepara automáticamente para que el agente lo lea. Tarda unos minutos y la plataforma avisa con una notificación si falla. Si no está compartida con ningún agente, el archivo solo se guarda. Ver [Conocimiento de los agentes](/centro-de-conocimiento/conocimiento-de-los-agentes).

En una carpeta de [Extracción inteligente](/centro-de-conocimiento/extraccion-inteligente), además, se extraen los datos de cada archivo.

## Versión en texto de los PDF

Una versión en texto es una copia del PDF convertida a texto, que se guarda junto al original y se puede revisar y descargar. Es útil para comprobar cómo "ve" el documento un agente, sobre todo en escaneados o PDF con tablas.

- Al subir PDF, la ventana ofrece **Convertir los PDF a texto**. Después pregunta si crear las versiones ahora.
- Para un PDF ya subido: **Crear versión en texto** en su menú, o **Rehacer la versión en texto** si ya tiene una.

La conversión usa el servicio configurado en la carpeta, **Esencial** o **Avanzado** (ver [Conversión de PDF](/centro-de-conocimiento/carpetas-y-archivos#conversión-de-pdf)). **Avanzado** consume créditos.
