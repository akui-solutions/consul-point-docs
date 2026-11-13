---
id: aplicaciones-integradas-overview
title: Integrated apps
sidebar_label: Overview
sidebar_position: 1
slug: /aplicaciones-integradas
description: Guide to creating, testing, publishing and installing integrated apps in ConsulPoint. Where to start depending on your profile.
---

# Integrated apps

An **integrated app** is a small web app shown inside ConsulPoint that works with your organization's data: documents, contacts, conversations or its own records. It solves a specific task with a custom-built screen, for example reviewing orders received by email or managing requests.

In [Conversations](/modulos/conversaciones) a person talks to an agent. In an integrated app they work with a screen designed for a specific task, and what the platform has already done, such as extracting data from a document or analyzing a conversation, reaches them as ready-to-use information.

**The app provides the user experience; ConsulPoint provides the data, the permissions and the control.**

This section explains how they work, how they are developed and how they reach users.

## Where to start {#por-dónde-empezar}

<div className="profile-grid">
<div>

**If you decide or administer**

Understand what they are, install them and control what they can do.

- [How they work](/aplicaciones-integradas/como-funcionan)
- [Where they appear](/aplicaciones-integradas/donde-aparecen)
- [Install and manage](/aplicaciones-integradas/instalar-y-administrar)

</div>
<div className="same-tab">

**If you develop** <TabHint label="Developers" />

Build an app, test it and publish it.

- [Your first app](/aplicaciones-integradas/desarrollar/primera-aplicacion)
- [Starter template](/aplicaciones-integradas/desarrollar/plantilla-de-inicio)
- [Publish](/aplicaciones-integradas/publicar)

</div>
<div>

**If you provide support**

Solve a specific problem.

- [Common issues](/aplicaciones-integradas/problemas-frecuentes)
- [Technical reference](/aplicaciones-integradas/referencia)

</div>
</div>

## The full journey {#el-recorrido-completo}

```mermaid
flowchart LR

    A["<b>Develop</b><br/><i>Web project</i>"]
    B["<b>Test</b><br/><i>Locally and on the platform</i>"]
    C["<b>Publish</b><br/><i>ZIP package · Version</i>"]
    D["<b>Install</b><br/><i>Catalog · Permissions</i>"]
    E["<b>Use</b><br/><i>Inside ConsulPoint</i>"]

    A --> B --> C --> D --> E
    E -.->|improvements| A
```

1. **Develop**: the app is a regular web project that, when built, produces static files.
2. **Test**: first on the developer's computer, with test data; then inside the platform.
3. **Publish**: a ZIP package is uploaded with a version.
4. **Install**: each organization adds it from the catalog, or creates it as its own app.
5. **Use**: it appears in the places of the platform that match its type.

## Two origins {#dos-orígenes}

| Origin | Who creates it | Who maintains it |
|---|---|---|
| **Installed** | It is published in the [Integrations catalog](/organizacion/catalogo-de-aplicaciones) and each organization installs it | Whoever published it: its versions, permissions and data models arrive with each update |
| **Custom** | The organization, from **Settings → Apps** | The organization itself |

:::tip Before building from scratch
Check the [Integrations catalog](/organizacion/catalogo-de-aplicaciones) first: an equivalent app may already exist.
:::
