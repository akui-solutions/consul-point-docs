---
id: conocimiento-de-los-agentes
title: Agent knowledge
sidebar_label: Agent knowledge
sidebar_position: 4
description: How a ConsulPoint agent reads Knowledge Hub documents, how to check a file is available and what to do when it is not.
---

# Agent knowledge

An agent answers with the documents in the folders shared with it. This page explains how to give it that access, how to check that a file is already available and what the limits are.

## Give an agent access {#dar-acceso-a-un-agente}

There are two ways, with the same result:

- From the Knowledge Hub: **Share** the folder and add the agent (see [Sharing and permissions](/centro-de-conocimiento/compartir-y-permisos)).
- From [Studio](/modulos/estudio): link the folder in the agent's settings.

An agent always has **Read only** access: it consults the content but does not change it. A folder can be shared with up to 5 agents.

## What the agent reads {#qué-lee-el-agente}

- **The whole folder**: the files in the shared folder and in all its subfolders.
- **New files**: anything uploaded later to those folders is prepared automatically.
- **Only the formats it can read**: PDF, Word, Excel, text and Markdown (see [Formats and limits](/centro-de-conocimiento/subir-documentos#formatos-y-límites)). Not standalone images.

## Preparation {#preparación}

Before an agent can read a file, the platform prepares it: it extracts the text (from PDFs, with the folder's [conversion service](/centro-de-conocimiento/carpetas-y-archivos#conversión-de-pdf)), splits it into passages and indexes them so they can be searched by meaning and not only by exact words. You adjust how it's split and what the agent receives in each search in [Agents' search](/centro-de-conocimiento/busqueda-de-los-agentes).

Preparation starts on its own when you share the folder with an agent and when you upload files to a shared folder. It takes a few minutes per file; with many files, longer. If it fails, the platform sends a notification.

### Check whether a file is available {#comprobar-si-un-archivo-está-disponible}

When you open a file, **Availability for agents** shows its status:

| Status | Meaning |
|---|---|
| **Available** | Agents read its current content |
| **Available · Update pending** | Agents can read it, but with its previous content or the folder's previous settings. Below it you see the reason and what to do. See [Update the documents](/centro-de-conocimiento/actualizar-los-documentos#documentos-pendientes-en-la-lista) |
| **Preparing…** | In progress |
| **Not available yet** | Agents have access to the folder, but cannot read this file yet |

### Manual actions {#acciones-manuales}

From **Show information**, on a file in a folder shared with an agent:

| Action | When to use it |
|---|---|
| **Prepare for agents** | The file was not prepared, for example because it failed |
| **Prepare again** | The file changed or the folder's search settings were changed. Agents read it again from scratch. If the PDF conversion changed, you first have to **Redo text version** |
| **Withdraw from agents** | To have agents stop reading this specific file. The file is not deleted and the folder stays shared |

Preparing a file manually uses the organization's credits. These actions are not available from a workspace.

## How the agent answers {#cómo-responde-el-agente}

For each question, the agent searches the folders it has access to for the most related passages and answers based on them. It does not read every document in full each time. You adjust how many passages it receives and how they're searched in [Agents' search](/centro-de-conocimiento/busqueda-de-los-agentes#resultados-de-búsqueda).

:::info The agent respects the permissions of the person asking
In [Conversations](/modulos/conversaciones), the agent only searches the folders shared with it **that the person in the conversation also has access to**. Two people can get different answers from the same agent if they have access to different folders.
:::

## Best practices {#buenas-prácticas}

:::tip Documents that are easy to understand
- One topic per document and clear headings. This helps the search find the right passage.
- For scanned PDFs or PDFs with complex tables, use the **Advanced** service and check the [text version](/centro-de-conocimiento/subir-documentos#versión-en-texto-de-los-pdf) before sharing.
- Share with each agent only the folders on its topic. Less irrelevant content, better answers.
:::
