---
id: auditoria-y-reportes
title: Audit & Reports
sidebar_label: Audit & Reports
sidebar_position: 1
description: Your organization's credit usage in ConsulPoint, how it evolves and splits by provider and operation, each user's activity and the subscription limits.
---

# Audit & Reports

<PageMeta route="/consumption">permission on **Audit & Reports**; with the default roles, only administrators</PageMeta>

**Audit & Reports** shows how many credits your organization uses, what they go on, each person's activity and how much is left of each subscription limit. It has three tabs:

| Tab | Path | Contents |
|---|---|---|
| **Usage** | `/consumption/reports` | The organization's balance, your own usage and the history |
| **User Activity** | `/consumption/user-activity` | Each person's activity and usage |
| **Limits** | `/consumption/limits` | Each resource's usage against the subscription maximum |

Anyone with access sees the data for the **whole organization**, except **My usage**, which is personal.

## Usage {#consumo}

<Screenshot src="/img/en/control/auditoria-estadisticas.png" alt="Usage tab in Audit & Reports" caption="Audit & Reports → Usage (sample data)" />

### Organization balance {#saldo-de-la-organización}

| Figure | What it shows |
|---|---|
| **Available balance** | The credits the whole organization has left |
| **Credits used** | The credits already used from the active balance |
| **Share of balance used** | How much of the active balance has been used |

The active balance is the sum of the [credit vouchers](/organizacion/suscripcion#bonos-de-crédito) in force.

### My usage {#mi-consumo}

The current month's summary for whoever is viewing the screen: their **Credits used**, their conversations and their sent messages.

### History {#historial}

**Usage over time** shows how many credits the organization uses in a period: by default, the current month.

- **Quick date ranges**: **7 days**, **30 days**, **90 days** or **12 months**. You can also pick a **Start date** and an **End date**.
- **Group by**: **Daily**, **Weekly** or **Monthly**. With **Automatic by date range**, it groups by day up to 31 days, by week up to 93 and by month beyond that.

Above the chart you see the **Credits used in this period** and the **Period peak**, with its date.

**Usage breakdown** splits those credits:

- **By provider**: across AI providers, with the detail per model.
- **By operation**: by type of use.

| Category | Includes |
|---|---|
| **Conversations** | Agents' answers |
| **Supervision analysis** | AI analyses of conversations |
| **Translation** | Message translations |
| **Agent generation** | Content generated with AI when creating agents |
| **Microagents** | Document and email extraction, and OCR |
| **Documents** | Document conversion and preparing them so agents can look them up |
| **Multimedia** | Generated images, text to speech, speech to text and video transcription |
| **Web** | Web searches and page reading |
| **Other** | Everything else |

Smaller categories are grouped; **Show … more** lists them.

## User Activity {#actividad-de-usuarios}

<Screenshot src="/img/en/control/auditoria-actividad.png" alt="User Activity tab" caption="Audit & Reports → User Activity (sample data)" />

One row per person, with their **Conversations**, **Messages**, **Credits Used** and **Most used model**. Credits include all their usage, not just conversations (also analyses, audio and tools).

You can search for a person and narrow by dates; with no dates, it shows the whole history. **Clear filters** shows everything again.

## Limits {#límites}

<Screenshot src="/img/en/control/auditoria-limites.png" alt="Limits tab in Audit & Reports" caption="Audit & Reports → Limits (sample data)" />

Each resource's usage against the subscription maximum. At the top, a summary with how many resources are **Over the limit**, how many have **No limit** and how many **Resource types** there are.

Resources are sorted into two groups: **Resources that need attention** (near, at or over the limit) and **Other resources**. You can filter by **Status** (**Limit exceeded**, **With quota remaining**, **Needs attention**, **Unlimited**) and sort by **Highest usage first** or **Name (A–Z)**.

| State | Meaning |
|---|---|
| **Near limit** | Little quota is left |
| **Limit reached** | The maximum has been reached: no more can be created |
| **Limit exceeded** | Current usage is above the maximum, for example after moving to a smaller subscription |
| **Unlimited** | The resource has no cap |

Some limits only count what belongs to the viewer, not the whole organization. They're marked **Personal usage**:

| Resource | What it counts |
|---|---|
| **Conversations**, **Storage**, **Folders** | Only the viewer's |
| **Contacts** | All of them, inactive ones too: only deleting them frees up space |
| **Integrations** | A single maximum for all of them together |
| **Connectors** | Each installed connector, even if several agents use it |

What happens when you reach a limit is explained in [Credits and limits](/organizacion/creditos-y-limites#límites-de-la-suscripción).

:::note What it doesn't include
This module shows usage and aggregated activity. It is not a log of actions (who created, changed or deleted what) and it doesn't let you export the data.
:::
