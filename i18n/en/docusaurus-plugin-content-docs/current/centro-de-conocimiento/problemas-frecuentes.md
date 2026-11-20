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
| The file is still being prepared | **Show information** → **Availability for agents**: **Preparing…** | Wait a few minutes |
| Preparation failed | **Availability for agents**: **Not available yet** | **Prepare for agents** |
| The agent reads an older version | **Availability for agents**: **Available · Update pending** | Follow the step it shows. See [Update the documents](/centro-de-conocimiento/actualizar-los-documentos) |
| Agents cannot read the format, such as a standalone image | The file type | Save it as a PDF and upload it again |
| The person in the conversation has no access to that folder | The folder's permissions | The agent only uses folders that the person in the conversation also has access to. See [Agent knowledge](/centro-de-conocimiento/conocimiento-de-los-agentes#cómo-responde-el-agente) |

If the document is available and the agent still does not use it, the problem is usually in the question or in the document: ask using the terms the document uses and check its [text version](/centro-de-conocimiento/subir-documentos#versión-en-texto-de-los-pdf).

## Agents' search {#búsqueda-de-los-agentes}

| Symptom or message | Cause | Solution |
|---|---|---|
| **Configure agents' search** doesn't appear | The folder isn't shared with any agent, it's a subfolder (it uses the settings of the shared folder), it's a multimedia folder, or you can't edit it | Open it in the folder shared with the agent. See [Which folders it applies to](/centro-de-conocimiento/busqueda-de-los-agentes#a-qué-carpetas-se-aplica) |
| You changed the settings and the answers don't change | Changes to **Document preparation** aren't applied on their own | Update the pending documents. See [Update the documents](/centro-de-conocimiento/actualizar-los-documentos) |
| Orange **Documents need updating** mark on a folder | Its preparation, its profile or its PDF conversion changed | Click the mark and **Update documents** |
| A PDF is still pending after **Prepare again** | The PDF conversion changed and its text version is the old one | **Redo text version** and then **Prepare again**, or update the whole folder |
| The **Profile** option is disabled | There are no profiles in the workspace yet | Create one with **Save as profile**. See [Search profiles](/centro-de-conocimiento/perfiles-de-busqueda#crear-un-perfil) |
| **Save as profile** doesn't appear | The source isn't **Own**, or you didn't create the folder | Choose **Own**. Only the person who created the folder can create profiles from it |
| **Describe the PDFs' images** is disabled | The folder doesn't convert PDFs with **Advanced** and **Keep the images** | **Change the PDF conversion** |
| **Your role can't calculate the impact, but you can save** | You're missing the create permission on the **Knowledge Hub** | Save and ask someone with that permission to apply the changes |
| **No credits available to update the documents.** | The organization has no credits | See [Credits and limits](/organizacion/creditos-y-limites) |
| **Too many requests in a row** | Changes were applied many times in a short time | Wait a minute |
| **The settings changed meanwhile** | Someone else changed the settings | Review the new impact and apply again |
| **This folder has too many subfolders…** | The folder has more than 5,000 subfolders | Contact support |
| **The selected agent is disabled** or another warning on **Search agent** | The search agent can no longer be used | Choose another one or activate it in the Studio. Meanwhile, the **Default agent** is used |
| **… folder uses it. Switch it to another search option before deleting it.** | The profile is in use | Move those folders to another source and delete it again |
| **A profile with that name already exists in this workspace.** | Repeated name | Choose another name |
| **Only the person who created the profile can…** | You aren't the person who created the profile | Ask that person to do it |

## When uploading {#al-subir}

| Message | Cause | Solution |
|---|---|---|
| **Exceeds the maximum size** | The file is larger than 150 MB | Split or compress it |
| **Unsupported format** | File type not accepted | See [Formats and limits](/centro-de-conocimiento/subir-documentos#formatos-y-límites) |
| No more files can be added to the upload | Up to 6 per upload are allowed | Upload them in several batches |
| The upload is rejected even though the file is valid | The subscription's storage limit has been reached | Free up space or upgrade the subscription |

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
