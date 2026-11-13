---
id: creditos-y-limites
title: Credits and limits
sidebar_label: Credits and limits
sidebar_position: 7
description: What happens in ConsulPoint when the organization has no active plan, runs out of credits or reaches a plan limit, and the notices shown.
---

# Credits and limits

What happens when the organization has no active plan, runs out of credits or reaches a limit of its plan, and which notices each person sees. You can check the plan and credits in [Subscription](/organizacion/suscripcion).

## No active plan {#sin-plan-activo}

The organization is left without an active plan if it has none assigned, if its trial period ended or if its subscription expired. Paid plans have **3 grace days** after the end of the period, during which you can keep working as usual.

Without an active plan, the organization is in **read-only mode**: everything that already exists can be viewed, but nothing can be created or changed. Create buttons appear disabled with the notice **Your organization needs an active plan to do this.**, and any change is rejected with **An active plan is required**. Requesting a plan is still possible.

A notice appears at the top of the platform depending on the situation:

| Situation | Notice |
|---|---|
| No plan | **Choose a plan to get started** |
| The trial ended | **Your *plan* trial has ended** |
| The subscription expired | **Your *plan* subscription has expired** |
| During the grace days | **Your plan expires on *date***: you can keep working as usual until then |
| A plan request is under review | **Your plan request is under review** |

Administrators see the **View plans** button; everyone else is told to talk to an administrator.

## No credits {#sin-créditos}

Credits pay for AI usage: agent responses, file preparation, analyses and voice. An operation in progress is never cut off for lack of credits: if it spends more than what is left, the difference is deducted from the next voucher.

When credits reach zero, a **short grace period** begins. Administrators receive the **Credits exhausted** notice, with the date it ends. After that period, whatever consumes credits stops working:

| Module | What stops | Notice |
|---|---|---|
| Conversations | Agent responses with ConsulPoint models | **No credits available to make this query.** |
| Knowledge Hub | Preparing files for agents | **There are no credits left to prepare this file.** |
| Smart Inbox | AI analyses of emails | **Stopped because of insufficient credits.** |

Agents that use the organization's **own model** keep responding, because those models do not consume credits.

Credits come back with the next cycle's voucher or with an additional voucher assigned by ConsulPoint.

## Plan limits {#límites-del-plan}

Each plan sets a maximum for resources such as users, roles, agents, conversations, folders, storage, workspaces, integrations, connectors, webhooks, API keys, tags, contacts, data schemas or skills. A resource with no maximum appears as **Unlimited**.

When you reach a maximum, only creating more is blocked; what already exists is kept. The platform shows **You've reached your plan's limit**, with the **Upgrade plan** option, which takes you to [Plans](/organizacion/suscripcion#planes). Before you reach it, administrators receive the **Limit almost reached** notice.

You can see each resource's usage against its maximum in [Audit & Reports](/control/auditoria-y-reportes).

### Own models {#modelos-propios}

The organization's own AI models can only be registered if the plan includes them, and up to the plan's maximum. If the organization changes to a plan that does not include them, the models already registered are kept, but they cannot be used in agents until the plan includes them again.
