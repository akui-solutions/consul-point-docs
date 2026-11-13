---
id: habilidades
title: Skills
sidebar_label: Skills
sidebar_position: 6
description: What a skill is in ConsulPoint, how an agent uses it, the Studio skills library and how to assign skills to agents and specialists.
---

# Skills

<PageMeta route="/studio/skills">permission on **Skills**</PageMeta>

A **skill** is a procedure you write once and assign to the agents that need it: how to review an invoice, how to write a reply to a complaint, how to calculate a quote. Besides the instructions, it can include reference files (guides, templates, examples or images) and scripts the agent runs.

<Screenshot src="/img/en/estudio/habilidades.png" alt="Skills library in the ConsulPoint Studio" caption="Studio → Skills" />

## How an agent uses it {#cómo-la-usa-un-agente}

The agent doesn't carry all its skills loaded in every answer: it knows the name and the **Description** of each one, and opens a skill only when the conversation calls for it. That's why the description must say clearly **when** to use it. Once a skill is open, the agent follows its instructions to the letter.

In the conversation, above the answer, **What the agent did** shows each step:

- **Used the skill "…"**
- **Read "…" from the skill "…"**, when it looks at a reference file
- **Ran "…" from the skill "…"**, when it runs a script

Skills work the same way in Conversations, in connected channels, in specialists (each one uses its own) and in API queries.

:::note Changes reach new conversations
If you edit, deactivate or remove a skill, the change applies to new conversations with the agent. An open conversation that already used it may carry on with the previous version.
:::

## The library {#la-biblioteca}

In the Studio, the **Skills** tab brings together your organization's skills, with their **Status**, their **Usage** (how many times agents have used them) and their **Source**:

| Source | Meaning |
|---|---|
| **Own** | Created or imported by the organization. It can be edited and deleted |
| **From the catalog** | Installed from the [Integrations catalog](/organizacion/catalogo-de-aplicaciones). It can be activated or deactivated, but not edited; to remove it, you uninstall it from the catalog |

You can search the list by name or tag and filter it by **Status** and **Source**. An **Inactive** skill stays assigned to its agents, but none of them uses it until it's activated again.

To create one, see [Create a skill](/control/estudio/crear-una-habilidad).

## Assign skills to an agent {#asignar-habilidades-a-un-agente}

In the agent's detail, the **Capabilities** tab shows, below the built-in functions, the skills assigned to it, with their usage in that agent.

1. Click **Manage skills** (or **Add skills**, if it doesn't have any yet).
2. Search for the skills and add them. Only active skills can be added.
3. Save.

<Screenshot src="/img/en/estudio/capacidades-agente.png" alt="Skills on an agent's Capabilities tab" caption="Agent detail → Capabilities" />

Each agent supports up to **20 skills**. Specialists also have the **Capabilities** tab with their skills: when an agent consults a specialist, the specialist uses its own skills, not the agent's.

To assign skills you need permission to view **Skills**, permission to edit **Studio** and edit access to the agent.

## Who can do what {#quién-puede-hacer-qué}

With the default roles, the **Administrator** can create, edit and delete skills; **Member** and **Collaborator** can only view them. The plan sets the maximum number of skills in the organization, counting deactivated ones and those from the catalog. See [Credits and limits](/organizacion/creditos-y-limites#límites-del-plan).
