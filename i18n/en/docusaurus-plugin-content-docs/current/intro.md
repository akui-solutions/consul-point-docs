---
id: intro
title: ConsulPoint documentation
sidebar_label: Welcome
sidebar_position: 1
slug: /
description: "Official documentation for ConsulPoint, the AI agent platform for businesses: agents, knowledge, channels and integrated apps."
---

# ConsulPoint documentation

<PageHero eyebrow="Documentation" highlights={['Agents', 'Knowledge', 'Channels', 'Integrated apps']}>
  **ConsulPoint** is an enterprise artificial intelligence platform that connects agents, knowledge, people and applications within an organization.
</PageHero>

This documentation explains each module of the platform: what it is for, how to set it up and how it relates to the rest. The user guides require no programming knowledge.

## Getting started {#primeros-pasos}

To set up an agent that answers with your organization's information:

<ModuleGrid>
  <ModuleCard icon="knowledge" title="1. Prepare the knowledge" href="/modulos/centro-de-conocimiento">
    Upload the documents the agent will use to folders in the Knowledge Hub.
  </ModuleCard>
  <ModuleCard icon="agent" title="2. Create the agent" href="/control/estudio/crear-un-agente">
    In Studio, define its instructions, its model and its capabilities, and give it access to the folders.
  </ModuleCard>
  <ModuleCard icon="chat" title="3. Test it" href="/conversaciones/conversar-con-un-agente#probar-un-agente">
    Talk to it and check the sources of each answer to make sure it uses the right documents.
  </ModuleCard>
  <ModuleCard icon="integration" title="4. Connect it to a channel" href="/modulos/integraciones">
    Optional: take it to WhatsApp, Telegram or other applications.
  </ModuleCard>
</ModuleGrid>

:::tip The golden rule
The setup order is always **knowledge → agent → channel**. An agent without knowledge gives generic answers; a channel without an assigned agent does not answer.
:::

## How it is organized {#cómo-está-organizada}

The documentation has three tabs in the top bar. Each one has its own menu.

<ModuleGrid>
  <ModuleCard icon="dashboard" title="User guide" href="/introduccion/navegacion">
    Using the platform day to day: talking to agents, uploading documents, creating agents in Studio, working with the Smart Inbox.
  </ModuleCard>
  <ModuleCard icon="settings" title="Administration" href="/control/configuracion">
    For whoever sets up the organization: everything under **Settings** in the platform (users and roles, channels and integrations), workspaces, and **Audit & Reports**.
  </ModuleCard>
  <ModuleCard icon="schema" title="Developers" href="/aplicaciones-integradas/desarrollar/primera-aplicacion">
    Build and publish integrated apps that are shown inside ConsulPoint. Requires programming knowledge.
  </ModuleCard>
</ModuleGrid>

When a link leads to another tab, it shows a label with that tab's name, for example <TabHint label="Administration" />.

To go through the modules and see where each one is in the interface, see [Navigation](/introduccion/navegacion). For the big picture, see [Platform overview](/introduccion/vision-general) and [Core concepts](/introduccion/conceptos).
