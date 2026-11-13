---
id: catalogo-de-aplicaciones
title: Integrations catalog
sidebar_label: Integrations catalog
sidebar_position: 3
description: The ConsulPoint Integrations catalog. Ready-made apps, connectors and skills your organization can install, update and uninstall.
---

# Integrations catalog

<PageMeta route="/store/apps">permission on **Apps**, **Connectors** or **Skills**</PageMeta>

The **Integrations catalog** gathers what the organization can install without building it from scratch: [integrated apps](/aplicaciones-integradas), [connectors](/organizacion/conectores) for the agents and [skills](/control/estudio/habilidades). You open it from **Integrations catalog**, in the sidebar.

<Screenshot src="/img/en/catalogo/catalogo.png" alt="Applications tab of the Integrations catalog" caption="Integrations catalog → Applications (sample apps)" />

## Tabs {#pestañas}

| Tab | Content | Visible with permission on |
|---|---|---|
| **Applications** | Integrated apps, with search and a category filter | **Apps** |
| **Connectors** | Connectors for the agents, with search and a category filter | **Connectors** |
| **Skills** | Skills for the Studio library, with search | **Skills** |
| **Installed** | Everything installed in the organization | Any of the three |

Featured items appear first, followed by the ones not installed yet.

## The cards {#las-tarjetas}

Each card shows the name, the type (for apps: **Extension**, **Viewer** or **Filter**; see [Where they appear](/aplicaciones-integradas/donde-aparecen)), a description and, from 10 on, the number of organizations that have installed it. Some also carry:

- **Featured**: recommended by ConsulPoint.
- **Assigned to your organization**: ConsulPoint activated it for the organization, outside the catalog.

The card shows a single action, depending on its state:

| Action or text | When |
|---|---|
| **Install** | It isn't installed |
| **Open** | Installed app or skill |
| **Configure** | Installed connector: takes you to **Settings → Connectors** |
| **Update** | There's a new version (people who can't update see **Update available**) |
| **Unavailable** | It was withdrawn from the catalog |

Clicking the card opens its details: the version, the installation date, the category and what it includes (an app's resources or a skill's files). The **⋯** menu in the details has **Uninstall**.

## Install, update and uninstall {#instalar-actualizar-y-desinstalar}

| | App | Connector | Skill |
|---|---|---|---|
| **Install** | If it comes with resources (folders, micro-agents, data schemas), you choose them first in a dialog. See [Install and manage](/aplicaciones-integradas/instalar-y-administrar) | Direct. Then it's configured and assigned to agents. See [Connectors](/organizacion/conectores) | Direct. It goes to the Studio library; if the name already exists, it's saved under another one |
| **Update** | The resources that change are reviewed first | Direct | Asks for confirmation. Replaces instructions and files; keeps name, status and agents |
| **Uninstall** | Asks for confirmation and lets you also delete what it created | Asks for confirmation. Those assigned to the organization can't be uninstalled | Asks for confirmation. It's deleted from the library and from the agents that used it |

Installing and updating require create permission on the corresponding module; uninstalling, delete permission. The plan sets how many skills, connectors and resources you can have: when you reach the maximum, the platform tells you before installing. See [Credits and limits](/organizacion/creditos-y-limites#límites-del-plan).

## Installed {#instaladas}

A table with everything installed: **Name**, **Version**, **Installation** (date and who) and **Status** (**Up to date**, version available or **Unavailable**). You can search and filter by type and, for apps, by category. If there are pending updates, a notice lets you see only those.

Each row has **Update** (if there's a new version), a shortcut to open or configure, and under **⋯**, **View details** and **Uninstall**.

## Withdrawn items {#elementos-retirados}

If the publisher withdraws an item from the catalog, it stays installed and can be uninstalled, but it can no longer be reinstalled or updated. If the publisher also deactivates it, an app can no longer be opened.

Catalog items are published by ConsulPoint.
