---
id: permisos
title: Permissions matrix
sidebar_label: Permissions matrix
sidebar_position: 2
description: The modules each role controls in ConsulPoint, with their name on the roles screen, and the sections that require being an administrator.
---

# Permissions matrix

What each permission of a [role](/organizacion/roles) controls, and which sections also require being an administrator.

## Modules {#módulos}

On a role's permissions screen, each module has four permissions: **View**, **Create**, **Edit** and **Delete**. Without **View**, the module does not appear in the menu.

| Name on the roles screen | Corresponds to |
|---|---|
| **Home** | [Home](/modulos/inicio) |
| **Conversations** | [Conversations](/modulos/conversaciones) |
| **Resources** | [Articles & Updates](/modulos/articulos-y-novedades) |
| **Knowledge Hub** | [Knowledge Hub](/modulos/centro-de-conocimiento) |
| **Smart Inbox** | [Smart Inbox](/modulos/bandeja-inteligente) and its [Email rules](/bandeja-inteligente/reglas-de-correo) |
| **Studio** | [Studio](/modulos/estudio): agents, specialists and micro-agents |
| **Schema library** | The Studio's [Schema library](/control/estudio/esquemas-de-datos) |
| **Skills** | The Studio's [Skills](/control/estudio/habilidades) and their tab in the Integrations catalog |
| **Contacts** | [Contacts](/modulos/contactos) and [Contact types](/organizacion/tipos-de-contacto) |
| **Tags** | [Tags](/organizacion/etiquetas) |
| **Workspaces** | [Workspaces](/modulos/espacios-de-trabajo) |
| **Apps** | [Integrated apps](/aplicaciones-integradas/instalar-y-administrar) |
| **Pinned items** | The apps pinned to the side menu. See [Sidebar](/organizacion/barra-lateral) |
| **Shortcuts** | The shortcuts on [Home](/modulos/inicio) |
| **Integrations** | The channels in [Integrations and channels](/modulos/integraciones) |
| **Connectors** | The [connectors](/organizacion/conectores): external tools for agents |
| **Webhooks** | [Webhooks](/control/webhooks) |
| **API keys** | [API keys](/organizacion/claves-de-api) |
| **Users** | [Users](/organizacion/usuarios) |
| **Teams** | [Teams](/organizacion/equipos) |
| **Organization** | [Organization](/organizacion/datos-de-la-organizacion) |
| **Audit & Reports** | [Audit & Reports](/control/auditoria-y-reportes) |

## Administrator-only sections {#secciones-solo-para-administradores}

Only the **Administrator** role sees these Settings sections, even if another role has permissions on the module:

| Section | Also requires |
|---|---|
| [Users](/organizacion/usuarios) | Permission to view **Users** |
| [Roles](/organizacion/roles) | — |
| [Teams](/organizacion/equipos) | Permission to view **Teams** |
| [Subscription](/organizacion/suscripcion) | — |
| [AI Providers](/organizacion/proveedores-de-ia) | — |
| [Connectors](/modulos/integraciones) (integrations and connectors) | Permission to view **Integrations** or **Connectors** |

The **Administrator** role has all permissions and cannot be edited.

:::note Effective availability
A permission only takes effect if the module is included in the organization's plan. A person with permissions on a module the plan does not include will not see it in the menu.
:::
