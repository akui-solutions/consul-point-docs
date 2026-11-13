---
id: esquemas-de-datos
title: Schema library
sidebar_label: Schema library
sidebar_position: 6
description: Reusable data schemas in ConsulPoint. How to create them, version them and link them to micro-agents, folders and apps.
---

# Schema library

<PageMeta route="/studio/schema-library">the relevant one on **Schema library**. With the default roles, only administrators</PageMeta>

A **data schema** defines which data is extracted from a document and in what shape: for example, that an invoice has a supplier (text), a date (date) and an amount (number). The library stores reusable schemas, so that several items always extract the same fields.

A schema can be linked to:

- **Micro-agents**, as the structure of their response (see [Micro-agents](/control/estudio/microagentes)).
- [Smart Extract](/centro-de-conocimiento/extraccion-inteligente) **folders**, to check that the extracted data matches it.
- Integrated **apps** that show or use that data.

A micro-agent can also have its own structure, defined in its form. The library is useful when several items share the same structure or when an app depends on it.

## Create a schema {#crear-un-esquema}

1. In the Studio, on the **Schema library** tab, click **New schema**.
2. Fill in **Create data schema**:

   | Field | Description |
   |---|---|
   | **Key** | Required, up to 64 characters: lowercase letters, numbers, hyphens and underscores. It identifies the schema to apps and micro-agents. **It can't be changed later** |
   | **Name** | Required, up to 150 characters |
   | **Description** | Optional, up to 500 characters |
   | **Definition (JSON Schema)** | Required. The schema's fields, their type and which ones are required. Up to 4 levels of nesting |
   | **Example (optional)** | Sample data that matches the definition. **Generate from schema** suggests one |

3. Click **Create schema**.

The definition follows the JSON Schema standard. Example for invoices:

```json
{
  "type": "object",
  "properties": {
    "proveedor": { "type": "string", "description": "Legal name of the issuer" },
    "fecha": { "type": "string", "format": "date" },
    "importe_total": { "type": "number", "description": "Amount including taxes" }
  },
  "required": ["proveedor", "fecha", "importe_total"]
}
```

## Versions {#versiones}

Each change to the structure creates a new **version** (v1, v2…). That way, a change doesn't break what already works.

- A version **in use** by any item can't be edited. To change the structure, use **New version**.
- A new version isn't applied on its own: each micro-agent, folder or app keeps the version it's linked to until it's linked to the new one.
- **Compare** shows the differences between two versions.

In the schema's detail, the **General** tab shows the structure of the latest version and **Versions** shows the history, with how many items use each one.

## Link a schema {#vincular-un-esquema}

From the version, **Manage links** lets you link it to folders, apps or micro-agents that don't have a schema yet. Of the folders, only your own are offered.

You can also link it from each item: when creating a micro-agent (**Use a schema from the library**) or when setting up an extraction folder (**Data schema (optional)**).

:::info If the micro-agent and the folder use different versions
The micro-agent's version wins. The folder warns you with a message, so you can align them.
:::

## How the data is checked {#cómo-se-comprueban-los-datos}

In a Smart Extract folder, when data is extracted with a schema from the library, the platform checks that the result matches it. If it doesn't, the document is marked **Extracted with warnings** and the preview lists the problems. A micro-agent's own structures aren't checked this way. Fields that aren't in the schema count as a problem; an empty field doesn't.

## Delete {#eliminar}

If the schema is in use, the platform shows how many items use it and asks you to type its key to confirm. Those items stop extracting data with it until another one is assigned to them.

## Best practices {#buenas-prácticas}

:::tip Schemas that are easy to maintain
- A stable, descriptive key (`supplier-invoice`, not `schema1`): it's the one apps use.
- Only the fields you'll use, with a description on each one. The description helps the micro-agent find the data.
- A real example that matches the definition.
- Before creating a new version, check which items use the current one and plan their switch.
:::
