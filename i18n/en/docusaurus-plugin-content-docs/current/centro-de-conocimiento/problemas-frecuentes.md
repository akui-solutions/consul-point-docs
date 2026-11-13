---
id: problemas-frecuentes
title: Knowledge Hub common issues
sidebar_label: Common issues
sidebar_position: 8
description: Solutions to the most common issues with the ConsulPoint Knowledge Hub.
---

# Common issues

## The agent does not use a document {#el-agente-no-usa-un-documento}

| Cause | How to check | Solution |
|---|---|---|
| The folder is not shared with the agent | On the folder, **View details** → **Who has access** | **Share** the folder with the agent |
| The file is still being prepared | **Show information** → **Available to agents**: **Preparing…** | Wait a few minutes |
| Preparation failed | **Available to agents**: **Not yet** | **Prepare for agents** |
| The agent reads an older version | **Available to agents**: **Yes, but an older version** | **Prepare again** |
| Agents cannot read the format, such as a standalone image | The file type | Save it as a PDF and upload it again |
| The person in the conversation has no access to that folder | The folder's permissions | The agent only uses folders that the person in the conversation also has access to. See [Agent knowledge](/centro-de-conocimiento/conocimiento-de-los-agentes#cómo-responde-el-agente) |

If the document is available and the agent still does not use it, the problem is usually in the question or in the document: ask using the terms the document uses and check its [text version](/centro-de-conocimiento/subir-documentos#versión-en-texto-de-los-pdf).

## When uploading {#al-subir}

| Message | Cause | Solution |
|---|---|---|
| **Exceeds the maximum size** | The file is larger than 150 MB | Split or compress it |
| **Unsupported format** | File type not accepted | See [Formats and limits](/centro-de-conocimiento/subir-documentos#formatos-y-límites) |
| No more files can be added to the upload | Up to 6 per upload are allowed | Upload them in several batches |
| The upload is rejected even though the file is valid | The plan's storage limit has been reached | Free up space or upgrade the plan |

## An option does not appear {#no-aparece-una-opción}

| Symptom | Cause |
|---|---|
| The **My documents** tab is not visible | The role has no edit permission on Knowledge Hub, or you are inside a workspace |
| **Share** or **Delete** does not appear | You must be the owner or have **Can manage** on the folder |
| **Upload file** does not appear | You need **Can edit**. In a **Multimedia** folder the option is **Upload audio or video** |
| You cannot move from **Shared with me** | Moving is only available in **My documents** |
| You cannot **Prepare for agents** files | It is not available from a workspace, or the folder is not shared with any agent |

## Folders {#carpetas}

| Symptom | Cause | Solution |
|---|---|---|
| A folder cannot be deleted | It is not empty | First move or delete its content |
| **An item with this name already exists in this location.** | Repeated name in the same folder | Choose another name |
| A folder's type cannot be changed | The type is set when it is created | Create a new folder of the type you want and move the content |

## Smart Extract {#extracción-inteligente}

| Status | Solution |
|---|---|
| **Couldn't extract** | In the file preview, **Retry**. If it happens again, check the micro-agent's settings |
| **Extracted with warnings** | Check **View issues** and adjust the data schema or the micro-agent's instructions |
| **Duplicate** | The content was already extracted from another file in the folder. No action needed |
