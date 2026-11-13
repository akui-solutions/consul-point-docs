---
id: auditoria-y-reportes
title: Audit & Reports
sidebar_label: Audit & Reports
sidebar_position: 1
description: Your organization's credit usage in ConsulPoint, subscription limits, history by provider and operation, and each user's activity.
---

# Audit & Reports

<PageMeta route="/consumption">permission on **Audit & Reports**; with the default roles, only administrators</PageMeta>

**Audit & Reports** shows how many credits your organization uses, what they go on, how much is left of each subscription limit and each person's activity. It has two tabs: **Analytics** and **User Activity**.

Anyone with access sees the data for the **whole organization**, except their usage card, which is personal.

## Analytics {#estadísticas}

<Screenshot src="/img/en/control/auditoria-estadisticas.png" alt="Analytics tab in Audit & Reports" caption="Audit & Reports → Analytics (sample data)" />

### Organization credits {#créditos-de-la-organización}

| Card | What it shows |
|---|---|
| **Organization available credits** | The credits the whole organization has left |
| **Credits used by the organization** | The credits already used from the active balance |
| **Percentage used by the organization** | How much of the active balance has been used |

The active balance is the sum of the current [credit vouchers](/organizacion/suscripcion#bonos-de-crédito).

### User Consumption {#consumo-del-usuario}

The personal summary for the current month of whoever is viewing the screen: the **Credits used this month**, their conversations and their messages sent.

### Your subscription limits {#límites-de-tu-suscripción}

The current usage of each resource against the subscription maximum, with a bar that turns **orange** as it approaches the limit and **red** when it reaches it. Resources without a maximum appear as **No limit**.

Some limits only count what belongs to the viewer, not to the whole organization:

| Resource | What it counts |
|---|---|
| **Conversations**, **Storage**, **Folders** | Only yours |
| **Contacts** | All of them, inactive ones too: only deleting them frees up space |
| **Integrations** | A single maximum for all of them together |
| **Connectors** | Each installed connector, even if several agents use it |

What happens when you reach a limit is explained in [Credits and limits](/organizacion/creditos-y-limites#límites-del-plan).

### History {#historial}

How many credits the organization uses, between the chosen **Start date** and **End date** (by default, the current month) and with **Group by** set to **Daily**, **Weekly** or **Monthly**:

- **Credits per period**: how usage evolves.
- **By provider**: the split between AI providers; hover to see the detail by model.
- **By operation**: the split by type of use:

| Category | Includes |
|---|---|
| **Conversations** | The agents' responses |
| **Supervision analysis** | AI analyses of conversations |
| **Translation** | Message translations |
| **Agent generation** | Content generated with AI when creating agents |
| **Microagents** | Document and email extraction, OCR and file preparation for agents |
| **Multimedia** | Generated images, text to speech, speech to text and video transcription |
| **Web** | Web searches and page reading |
| **Other** | Everything else |

## User Activity {#actividad-de-usuarios}

<Screenshot src="/img/en/control/auditoria-actividad.png" alt="User Activity tab" caption="Audit & Reports → User Activity (sample data)" />

One row per person, with their **Conversations started**, **Messages sent**, **Credits Used** and their **Most used model**. Credits include all their usage, not only conversations (also analysis, audio and tools).

You can search for a person and narrow down by dates; without dates, it shows the full history.

:::note What it does not include
This module shows usage and aggregated activity. It is not a log of actions (who created, changed or deleted what) and it does not let you export the data.
:::
