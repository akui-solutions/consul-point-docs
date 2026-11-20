---
id: creditos-y-limites
title: Credits and limits
sidebar_label: Credits and limits
sidebar_position: 7
description: What happens in ConsulPoint when the organization has no active subscription, runs out of credits or reaches a subscription limit, and the notices shown.
---

# Credits and limits

What happens when the organization has no active subscription, runs out of credits or reaches a limit of its subscription, and which notices each person sees. You can check the subscription and credits in [Subscription](/organizacion/suscripcion).

## No active subscription {#sin-suscripción-activa}

The organization is left without an active subscription if it has none assigned, if its trial period ended or if its subscription expired. Paid subscriptions have **3 grace days** after the end of the period, during which you can keep working as usual.

Without an active subscription, the organization is in **read-only mode**: everything that already exists can be viewed, but nothing can be created or changed. Create buttons appear disabled with the notice **Your organization needs an active subscription to do this.**, and any change is rejected with **An active subscription is required**. Requesting a subscription is still possible.

A notice appears at the top of the platform depending on the situation:

| Situation | Notice |
|---|---|
| No subscription | **Choose a subscription to get started** |
| The trial ended | **Your *name* trial has ended** |
| The subscription expired | **Your *name* subscription has expired** |
| During the grace days | **Your subscription expires on *date***: you can keep working as usual until then |
| A subscription request is under review | **Your subscription request is under review** |

Administrators see the **View subscriptions** button; everyone else is told to talk to an administrator.

## No credits {#sin-créditos}

Credits pay for AI usage: agent responses, file preparation, analyses and voice. An operation in progress is never cut off for lack of credits: if it spends more than what is left, the difference is deducted from the next voucher.

When credits reach zero, a **short grace period** begins. Administrators receive the **Credits exhausted** notice, with the date it ends. After that period, whatever consumes credits stops working:

| Module | What stops | Notice |
|---|---|---|
| Conversations | Agent responses with ConsulPoint models | **No credits available to make this query.** |
| Knowledge Hub | Preparing files for agents | **There are no credits left to prepare this file.** |
| Smart Inbox | AI analyses of emails | **Stopped because of insufficient credits.** |

If the agent has [memory](/control/estudio/memoria#créditos), what it remembers about the person is sent with every message and is part of its usage.

Agents that use the organization's **own model** keep responding, because those models do not consume credits.

Credits come back with the next cycle's voucher or with an additional voucher assigned by ConsulPoint.

## Subscription limits {#límites-de-la-suscripción}

Each subscription sets a maximum for resources such as users, roles, agents, conversations, folders, storage, workspaces, integrations, connectors, webhooks, API keys, tags, contacts, data schemas or skills. A resource with no maximum appears as **Unlimited**.

When you reach a maximum, only creating more is blocked; what already exists is kept. The platform shows **You've reached your subscription's limit**, with the **Upgrade subscription** option, which takes you to [Subscriptions](/organizacion/suscripcion#suscripciones). Before you reach it, administrators receive the **Limit almost reached** notice.

You can see each resource's usage against its maximum in [Audit & Reports](/control/auditoria-y-reportes#límites).

### Own models {#modelos-propios}

The organization's own AI models can only be registered if the subscription includes them, and up to its maximum. If the organization changes to a subscription that does not include them, the models already registered are kept, but they cannot be used in agents until the subscription includes them again.
