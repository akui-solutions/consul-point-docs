---
id: navegacion
title: Navigation
sidebar_label: Navigation
sidebar_position: 3
description: Structure of the ConsulPoint sidebar and which modules each role can see.
---

# Navigation

<PageHero eyebrow="Introduction" highlights={['Persistent sidebar', 'Visibility by role', 'Español · English']}>
  The platform is organized around a **persistent sidebar** that gives direct access to each ConsulPoint module.
</PageHero>

<MenuIllustration
  active="Home"
  caption="Interface structure: sidebar and top bar"
  main={[
    { icon: 'dashboard', label: 'Home' },
    { icon: 'chat', label: 'Conversations' },
    { icon: 'articles', label: 'Articles & Updates' },
    { icon: 'knowledge', label: 'Knowledge Hub' },
    { icon: 'contacts', label: 'Contacts' },
  ]}
  section="Pinned"
  workspace="My organization"
  footer={[
    { icon: 'studio', label: 'Studio' },
    { icon: 'store', label: 'Integrations catalog' },
    { icon: 'reports', label: 'Audit & Reports' },
    { icon: 'settings', label: 'Settings' },
  ]}
/>

## Sidebar modules {#módulos-del-menú}

The sidebar has two blocks: at the top, the modules used every day; at the bottom, the ones for building and administration.

<ModuleGrid>
  <ModuleCard icon="dashboard" title="Home" href="/modulos/inicio">
    Featured articles, apps, shortcuts and recent conversations.
  </ModuleCard>
  <ModuleCard icon="chat" title="Conversations" href="/modulos/conversaciones">
    Interaction with the agents.
  </ModuleCard>
  <ModuleCard icon="articles" title="Articles & Updates" href="/modulos/articulos-y-novedades">
    Internal content.
  </ModuleCard>
  <ModuleCard icon="knowledge" title="Knowledge Hub" href="/modulos/centro-de-conocimiento">
    Document management.
  </ModuleCard>
  <ModuleCard icon="contacts" title="Contacts" href="/modulos/contactos">
    People and entities the organization deals with, for example WhatsApp or Telegram contacts.
  </ModuleCard>
  <ModuleCard icon="studio" title="Studio" href="/modulos/estudio">
    Creating and configuring agents.
  </ModuleCard>
  <ModuleCard icon="store" title="Integrations catalog" href="/organizacion/catalogo-de-aplicaciones">
    Apps and connectors that can be installed.
  </ModuleCard>
  <ModuleCard icon="reports" title="Audit & Reports" href="/control/auditoria-y-reportes">
    Credit usage and user activity.
  </ModuleCard>
  <ModuleCard icon="settings" title="Settings" href="/control/configuracion">
    Organization administration.
  </ModuleCard>
</ModuleGrid>

### Pinned {#fijados}

The **Pinned** section gathers the apps pinned to the sidebar for quick access. Each user can pin their own, and administrators can pin them for the whole organization. It is managed from **Settings → Customization → Sidebar**.

## Top bar {#barra-superior}

The top bar gives access to the elements available from any module:

<ModuleGrid>
  <ModuleCard icon="workspaces" title="Workspaces" href="/modulos/espacios-de-trabajo">
    Selector to switch organization or workspace.
  </ModuleCard>
  <ModuleCard icon="inbox" title="Smart Inbox" href="/modulos/bandeja-inteligente">
    Email from connected accounts, with rules and AI analysis. Visible to people with permission for it.
  </ModuleCard>
  <ModuleCard icon="notifications" title="Notifications" href="/introduccion/notificaciones">
    Platform alerts.
  </ModuleCard>
  <ModuleCard icon="help" title="Help & documentation">
    Opens this documentation in a new tab.
  </ModuleCard>
  <ModuleCard icon="user" title="User menu" href="/introduccion/tu-cuenta">
    Account settings, preferences (dark mode and language) and log out.
  </ModuleCard>
</ModuleGrid>

:::info Conditional visibility
The menu shows only the modules enabled for the organization and allowed by the user's role. An incomplete menu does not mean something is wrong.
:::

## Language {#idioma}

The interface is available in **Spanish and English**. The language is changed from the **user menu**, in the top-right corner, or from the sign-in screen. See [Your account](/introduccion/tu-cuenta#menú-de-usuario).
