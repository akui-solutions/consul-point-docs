---
id: datos-propios
title: Own data
sidebar_label: Own data
sidebar_position: 4
description: Data models of an integrated app in ConsulPoint. How to define them and how to read and save the app's own records.
---

# Own data

An app has no database of its own. To keep records (reviewed orders, incidents, settings) it uses **models**: data collections that ConsulPoint stores for it.

## What a model is {#qué-es-un-modelo}

| Element | Content |
|---|---|
| **Name** | Identifier of the collection, lowercase with hyphens (`reviewed-order`). Up to 60 characters. It cannot be changed later |
| **Label** | Human-readable name |
| **Description** | What the collection stores |
| **JSON Schema** | Shape of each record (optional) |
| **Strict validation** | If on, records that do not match the schema are rejected |

Models are defined in the app's **Models** tab, with **Add Model**. They must exist **before** the app tries to use them.

In an **Installed** app, the models are defined by whoever published it and cannot be modified.

## Who owns the data {#a-quién-pertenecen-los-datos}

- The data belongs to **each organization**: one organization never sees another's.
- Within the organization, **everyone who uses the app sees the same records**. There is no per-user separation.
- When you **uninstall** an app from the catalog, its data is deleted and is not recovered if you reinstall it.
- When you **delete a model**, all its records are deleted.

## Read and save {#leer-y-guardar}

All paths start from `/mini-apps/{miniAppId}/models/{name}/data`.

| Operation | Method and path | Notes |
|---|---|---|
| List | `GET …/data?limit=` | Up to 500 per page (25 by default). The response includes `bookmark` to request the next page |
| Read one | `GET …/data/{id}` | |
| Create | `POST …/data` | The body is the record |
| Update | `PUT …/data/{id}` | Body: `{ "data": { … }, "_rev": "…" }` |
| Delete | `DELETE …/data/{id}?rev=…` | |

```ts title="Create and update a record"
const base = `/mini-apps/${miniAppId}/models/reviewed-order/data`;

const created = await sessionFetch(base, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ order: 'P-1042', status: 'confirmed' }),
}).then(r => r.json());

await sessionFetch(`${base}/${created._id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ data: { status: 'exported' }, _rev: created._rev }),
});
```

Each record includes `_id` and `_rev`. `_rev` is the record's version and must be sent when updating or deleting.

## Responses to handle {#respuestas-que-conviene-manejar}

| Response | Meaning | What to do |
|---|---|---|
| `409` | Someone else modified the record first | Read it again and retry |
| `422` | The record does not match the schema (with strict validation) | Check the fields listed in the response |
| `400` | `_rev` is missing on update | Send the version you read |

## Best practices {#buenas-prácticas}

:::warning Always use the identifier
Data paths use the app identifier received in `miniAppId`, never its access path.
:::

:::tip Unexpected fields
To reject fields that are not in the schema, declare `"additionalProperties": false` in the JSON Schema itself.
:::

:::info Lists
Lists do not support filters or sorting. For large collections, read page by page and filter in the app.
:::
