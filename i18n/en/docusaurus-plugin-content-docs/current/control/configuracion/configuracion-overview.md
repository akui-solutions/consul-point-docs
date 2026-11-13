---
id: configuracion-overview
title: Settings
sidebar_label: Settings
sidebar_position: 1
slug: /control/configuracion
description: "The ConsulPoint Settings sections: access and organization, AI and integrations, data, customization, developers, and who sees each one."
---

# Settings

<PageMeta route="/settings">depends on each section; several are for administrators only</PageMeta>

Settings brings together the organization's settings: who has access, the plan, the AI channels and models, the classification data and the developer tools. You open it from **Settings**, at the bottom of the side menu.

<Screenshot src="/img/en/configuracion/configuracion.png" alt="Settings screen in ConsulPoint, with the sections menu on the left" caption="Settings, Users section" />

Each person sees only the sections their role allows, and the first of them opens when they enter. Settings exists only in the main organization: it is not available inside a workspace.

## Sections {#secciones}

The sections are grouped the same way as in the platform. In the **Who can see it** column, "permission on…" means the permission to view that module in the role; the module must also be included in the organization's plan. See [Permissions matrix](/referencia/permisos).

### Administration {#administración}

| Section | What it is for | Who can see it |
|---|---|---|
| **Access → Users** | Invite people, change their role and activate or deactivate them. See [Users](/organizacion/usuarios) | Administrators |
| **Access → Roles** | Define what each role can do in each module. See [Roles](/organizacion/roles) | Administrators |
| **Access → Teams** | Group people to assign them together, for example to an integration. See [Teams](/organizacion/equipos) | Administrators with permission on **Teams** |
| **Organization** | The organization's name, logo and description. See [Organization](/organizacion/datos-de-la-organizacion) | Permission on **Organization** |
| **Subscription** | The plan, the credits and requesting a new plan. See [Subscription](/organizacion/suscripcion) | Administrators |

### AI and integrations {#ia-e-integraciones}

| Section | What it is for | Who can see it |
|---|---|---|
| **AI Providers** | The available AI models and the organization's own models, if the plan includes them. See [AI Providers](/organizacion/proveedores-de-ia) | Administrators |
| **Connectors** | The channels (WhatsApp, Telegram, email, external apps) and the external tools for agents. See [Integrations and channels](/modulos/integraciones) and [Connectors](/organizacion/conectores) | Administrators |
| **Email rules** | Which emails the Smart Inbox processes. See [Email rules](/bandeja-inteligente/reglas-de-correo) | Permission on **Smart Inbox** |
| **Apps** | The installed integrated apps and the organization's own. See [Install and manage](/aplicaciones-integradas/instalar-y-administrar) | Permission on **Apps** |

### Data {#datos}

| Section | What it is for | Who can see it |
|---|---|---|
| **Contact types** | Classify the people and entities in Contacts. See [Contact types](/organizacion/tipos-de-contacto) | Permission on **Contacts** |
| **Tags** | Classify people, entities and skills. See [Tags](/organizacion/etiquetas) | Permission on **Tags** |

### Customization {#personalización}

| Section | What it is for | Who can see it |
|---|---|---|
| **Sidebar** | The apps pinned to the side menu. See [Sidebar](/organizacion/barra-lateral) | Permission on **Pinned items** and **Apps** |

### Developers {#desarrolladores}

| Section | What it is for | Who can see it |
|---|---|---|
| **API keys** | Keys to query the agents from another system. See [API keys](/organizacion/claves-de-api) | Permission on **API keys** |
| **Webhooks** | Automatic notifications to external systems. See [Webhooks](/control/webhooks) | Permission on **Webhooks** |

### About {#acerca-de}

At the bottom of the menu, for everyone. It shows the release date and the platform versions, who develops it, the support email (if ConsulPoint has set one up) and the links to **Terms and Conditions** and **Privacy Policy**.
