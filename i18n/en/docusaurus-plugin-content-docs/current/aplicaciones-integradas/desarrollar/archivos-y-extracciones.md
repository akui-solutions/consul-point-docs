---
id: archivos-y-extracciones
title: Files and extractions
sidebar_label: Files and extractions
sidebar_position: 5
description: How an integrated app works with folders, files and data extracted from the ConsulPoint Knowledge Hub.
---

# Files and extractions

With the **Knowledge Hub** permission, an app can work with the folders and files of the person using it, and with the data that **Smart Extract** obtains from each document.

For the concepts of folder, file and extraction, see [Knowledge Hub](/modulos/centro-de-conocimiento).

## Folders {#carpetas}

| Query | Path |
|---|---|
| Own folders | `GET /knowledge-hub/directories/own` |
| Shared folders | `GET /knowledge-hub/directories/shared` |
| Subfolders | The same paths with `?parentId={folder}` |

When the app is opened from a folder, it receives `folderId` and does not need to ask. In other cases, offer a folder picker.

## Extractions {#extracciones}

The data extracted from the documents in a folder is read page by page:

```text
GET /knowledge-hub-api/documents/{folderId}/extractions?page=1&limit=100
```

The maximum is 100 per page. Each extraction includes the document's data and the result, with the shape defined in the folder's data schema.

## Get a file {#obtener-un-archivo}

The API never returns a file's content: it returns a **temporary link**.

```text
GET /knowledge-hub/documents/{folderId}/files/{fileId}
```

```json
{
  "url": "https://…",
  "expiresAt": "2026-10-21T20:19:34.391Z",
  "fileName": "report.pdf",
  "mimeType": "application/pdf",
  "size": 71146758
}
```

Rules:

- The link expires after **5 minutes**. Request it right before using it and do not store it.
- The link is opened **without headers**: the storage rejects requests that carry `Authorization`.
- Do not assume a specific domain: each organization can have its own storage.

| To | How |
|---|---|
| Give the file to the user | Navigate to the link from the user's click; the browser downloads it |
| Show an image | Use the link directly as the image source |
| Read the content (PDF viewer, analysis) | Download it with a request without headers |

## Upload files {#subir-archivos}

```text
POST /knowledge-hub/documents/{folderId}/files
Content-Type: multipart/form-data   (field: files)
```

| Limit | Value |
|---|---|
| Size per file | 150 MB |
| Files per request | 6 |

Check both limits before sending, so you can warn the user up front. The platform may rename a file to avoid duplicates: the valid name is the one in the response.

After creating, modifying or deleting files, the app notifies the platform so it refreshes its lists. See [Communicating with the platform](/aplicaciones-integradas/desarrollar/comunicacion).

## Best practices {#buenas-prácticas}

:::warning Expired link
If the storage responds `403`, the link has expired. Request a new one and retry once, without showing an error.
:::

:::tip Remember the chosen folder
If the app remembers the last folder, it must check that it is still among the user's folders before using it.
:::
