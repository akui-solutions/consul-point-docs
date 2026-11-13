---
id: subir-documentos
title: Upload documents
sidebar_label: Upload documents
sidebar_position: 3
description: How to upload files to the ConsulPoint Knowledge Hub, supported formats, limits and the text version of PDFs.
---

# Upload documents

How to load files into a folder, which formats are supported and what happens after you upload them.

## Upload files {#subir-archivos}

1. Open the destination folder. Files always go inside a folder, not at the root.
2. Click **Upload file**.
3. Drag the files into the **Upload files** window, or click inside it to choose them.
4. Click the upload button, which shows how many files will be uploaded (for example, **Upload 3 files**).

The window closes and you can follow the progress in a tray in the corner of the screen. You can keep working, and even switch folders, while they upload.

| Status | Meaning |
|---|---|
| **Queued** | Waiting its turn |
| **Uploading…** | In progress |
| **Uploaded** | Finished |
| **Exceeds the maximum size** | The file is larger than 150 MB |
| **Unsupported format** | The file type is not accepted |
| **Couldn't upload** | Another error. You can **Retry** from the tray |
| **Cancelled** | It was cancelled from the tray |

If a file with the same name already exists in the folder, the new one is saved with a number at the end, for example `manual (1).pdf`.

## Formats and limits {#formatos-y-límites}

| | Value |
|---|---|
| Files per upload | Up to 6 |
| Size per file | Up to 150 MB |
| Total storage | Depends on your plan |

| Format | Extensions | Read by agents |
|---|---|---|
| PDF | `.pdf` | Yes |
| Word | `.docx` | Yes |
| Excel | `.xlsx`, `.xls` | Yes |
| Text | `.txt` | Yes |
| Markdown | `.md` | Yes |
| Images | `.png`, `.jpg`, `.jpeg` | No. They are stored, but agents do not read standalone images |

[Smart Extract](/centro-de-conocimiento/extraccion-inteligente) folders accept PDF, images and Markdown. [Multimedia](/centro-de-conocimiento/multimedia) folders do not accept files: they work with YouTube links.

:::tip Images with text
For an agent to read the content of an image, for example a scanned document, save it as a PDF.
:::

## What happens after uploading {#qué-pasa-después-de-subir}

If the folder, or any folder above it, is shared with an agent, each file is prepared automatically so the agent can read it. It takes a few minutes and the platform sends a notification if it fails. If it is not shared with any agent, the file is only stored. See [Agent knowledge](/centro-de-conocimiento/conocimiento-de-los-agentes).

In a [Smart Extract](/centro-de-conocimiento/extraccion-inteligente) folder, the data from each file is also extracted.

## Text version of PDFs {#versión-en-texto-de-los-pdf}

A text version is a copy of the PDF converted to text, saved next to the original, that you can review and download. It is useful for checking how an agent "sees" the document, especially with scanned documents or PDFs with tables.

- When you upload PDFs, the window offers **Convert the PDFs to text**. It then asks whether to create the versions now.
- For a PDF that is already uploaded: **Create text version** in its menu, or **Redo text version** if it already has one.

The conversion uses the service configured on the folder, **Essential** or **Advanced** (see [PDF conversion](/centro-de-conocimiento/carpetas-y-archivos#conversión-de-pdf)). **Advanced** uses credits.
