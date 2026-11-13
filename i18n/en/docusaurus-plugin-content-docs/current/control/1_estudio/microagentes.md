---
id: microagentes
title: Micro-agents
sidebar_label: Micro-agents
sidebar_position: 5
description: What a micro-agent is in ConsulPoint, its six types, where each one is used and how to create one with its response schema.
---

# Micro-agents

<PageMeta route="/studio/config/add-micro-agent" />

A **micro-agent** does one specific task and returns the result with a fixed structure: for example, reading an invoice and returning the supplier, the date and the amount. It doesn't talk with anyone: the platform runs it when needed, for example when a document is uploaded to a folder or when an email arrives.

Each micro-agent has a **type**, which decides where it can be used. You choose the type when you create it, and you can't change it.

## Micro-agent types {#tipos-de-microagente}

| Type | What it does | Where it's used |
|---|---|---|
| **Document Extractor** | Extracts text and data from images, PDFs and scanned documents | [Smart Extract](/centro-de-conocimiento/extraccion-inteligente) folders |
| **Mail Reader** | Processes and analyzes the content of emails and extracts their data | [Smart Inbox](/modulos/bandeja-inteligente) rules |
| **Email to Markdown** | Turns an email into a text document ready to save in the Knowledge Hub | [Smart Inbox](/modulos/bandeja-inteligente) rules |
| **Image Describer** | Describes the images in PDFs (charts, photos, diagrams) so agents can understand them | **PDF conversion** of Knowledge Hub folders (see [Folders and files](/centro-de-conocimiento/carpetas-y-archivos#conversión-de-pdf)) |
| **Conversation Analyzer** | Analyzes conversations to produce a summary, sentiment, category and suggested replies | Conversation analysis |
| **Multimedia Processor** | Analyzes YouTube videos and audio saved in multimedia folders | [Multimedia](/centro-de-conocimiento/multimedia) folders |

:::info Conversation Analyzer
The platform uses the **first** conversation analyzer created in the organization. If there are several, only that one works.
:::

## Create a micro-agent {#crear-un-microagente}

1. In the Studio, on the **Micro-agents** tab, click **New micro-agent**.
2. **Configuration**: micro-agent type, name, description, system instructions and model.
3. **Schema and instruction**: the structure of the response and the execution instruction. The **Email to Markdown** and **Image Describer** types don't have this step: the platform sets their output, and the execution instruction is written in step 1.
4. Click **Create**.

### Configuration {#configuración}

| Field | Description |
|---|---|
| **Micro-agent type** | Required. See the table above. It can't be changed later |
| **Micro-agent name** | Required, between 3 and 50 characters, not repeating the name of another agent |
| **Description** | Required, up to 400 characters |
| **System instructions** | Required, up to 20,000 characters. The micro-agent's role and the general rules |
| **Model** | Lightweight Google models suited to extraction are offered. The **Image Describer** needs a model that can read images |
| **Temperature** | From 0 to 1. Default: 0. For extracting data it's best to leave it at 0 |

### Schema and instruction {#esquema-e-instrucción}

First you choose **Where does the structure come from?**:

- **Define my own**: you describe it in the same form.
- **Use a schema from the library**: you choose a schema and a version from the [Schema library](/control/estudio/esquemas-de-datos). This is useful when several micro-agents, folders or apps share the same structure.

With your own structure:

| Field | Description |
|---|---|
| **Response schema** | The properties it must return, with their name, type, format, description and whether they're required. You edit it in **Visual** or **Code** mode. Up to 4 levels of nesting |
| **Response Example** | Required. A real example of what it must return. **Generate from schema** suggests one |

And in both cases:

| Field | Description |
|---|---|
| **Execution instruction** | Required, up to 20,000 characters. The specific command that runs on each document or email |

**Generate with AI** suggests the schema based on the instructions, and each text field has its own AI improve button.

Example of an execution instruction for an invoice extractor:

```prompt
Read the invoice and return the supplier, their tax ID, the issue date, the invoice number and the total amount including taxes. If a piece of data doesn't appear in the document, return it empty; don't infer it.
```

## A micro-agent's detail {#el-detalle-de-un-microagente}

| Tab | Contents |
|---|---|
| **General** | Type, description, origin, model, temperature, dates, owner, system instructions and execution instruction |
| **Response schema** | The structure it returns, its own or from the library (with its version) |

In the list, the **Schema** column shows whether it uses one from the **Library**, a **Custom** one, or none. Micro-agents installed by an app from the catalog show **From application** and the app's name.

## Delete {#eliminar}

If folders use the micro-agent, the platform warns you and asks you to type its name to confirm. An **Image Describer** in use by any folder can't be deleted: first you have to change the describer of those folders.

## Best practices {#buenas-prácticas}

:::tip Reliable extractions
- One micro-agent per document type: one for invoices, another for delivery notes.
- Few properties, only the ones you'll use, with clear descriptions.
- A real response example that matches the schema.
- Say in the instruction what to do when a piece of data is missing, so it doesn't make it up.
- Test with a few real documents in an extraction folder before using it at scale.
:::
