---
id: problemas-frecuentes
title: Common issues in Administration
sidebar_label: Common issues
sidebar_position: 2
description: "Solutions to common issues when administering ConsulPoint: users, permissions, plan and credits, channels, connectors, API keys and webhooks."
---

# Common issues in Administration

What to do about the most common warnings and situations when administering an organization. Each row links to the page that explains the topic in full.

## Users and invitations {#usuarios-e-invitaciones}

| Symptom | Cause and solution |
|---|---|
| **You've reached your plan's limit** when inviting | The organization has as many active people as the plan allows. Deactivate someone or request a bigger plan. Pending invitations do not count. See [Users](/organizacion/usuarios#invitar-a-una-persona) |
| **An error occurred while sending the invitation.** | That email already belongs to the organization. Look for the person in the list |
| The person does not receive the invitation email | Check the spam folder. Then use **Send reminder** if they are **Pending**, or **Resend invitation** if they are **Expired**. Both generate a new link |
| Someone who already had an account did not get a link to create a password | This is expected: they sign in with their usual password and the organization appears in their list. See [Signing in to the platform](/introduccion/acceder-a-la-plataforma#aceptar-una-invitación) |
| The person sees **Invitation link expired** | Use **Resend invitation** from the users list |
| **Delete user** does not appear | You can only delete **Pending** or **Expired** invitations. Anyone who already accepted is deactivated instead. See [Users](/organizacion/usuarios#acciones) |
| A person does not see their role change yet | Role changes take a few minutes to apply to open sessions |
| A person cannot sign in | They may be deactivated. Use **Activate user** from the list |

## Permissions: a module does not appear {#permisos-un-módulo-no-aparece}

| Symptom | Cause and solution |
|---|---|
| A module does not appear in the menu | The role does not have **View** on that module. See [Roles](/organizacion/roles) |
| **You do not have access to this section** when opening a link | Same as above: that person's role cannot see the page |
| **This module is not available** | The organization's plan does not include that module, even if the role has the permission. See [Permissions matrix](/referencia/permisos) |
| Someone with permissions cannot see Users, Roles, Teams, Subscription, AI Providers or Connectors | Those sections are only for the **Administrator** role. See [Permissions matrix](/referencia/permisos#secciones-solo-para-administradores) |
| **Settings** does not appear | You are inside a workspace. Go back to **Main** in the selector in the top bar |
| **Cannot delete role** | There are people with that role, including deactivated ones or ones with a pending invitation. Change their role or delete their invitations first |
| **You must assign at least one permission to a module.** | A role needs at least one permission |
| The **Administrator** role cannot be edited | It is fixed. For similar access with limits, create your own role |

## Plan, credits and limits {#plan-créditos-y-límites}

| Symptom | Cause and solution |
|---|---|
| **An active plan is required**, create buttons disabled | The organization has no active plan: the trial ended or the subscription expired. Everything can be viewed, nothing can be created or changed. Request a plan in [Subscription](/organizacion/suscripcion). See [No active plan](/organizacion/creditos-y-limites#sin-plan-activo) |
| **Your plan expires soon** / **Plan expired** | Renew from [Subscription](/organizacion/suscripcion) before the grace period ends |
| **Credits exhausted** | There is a short grace period to top up. After that, agents stop answering, except those that use an own model. See [No credits](/organizacion/creditos-y-limites#sin-créditos) |
| **You've reached your plan's limit** when creating something | The maximum for that resource has been reached. The usage of each one is in [Audit & Reports](/control/auditoria-y-reportes#límites-de-tu-suscripción). Free up space or request a bigger plan |
| Deactivating contacts does not free up space | Inactive contacts also count. Only deleting them frees up space |
| **You already have a pending request…** | Cancel the pending request before requesting another subscription |
| **This code is not valid, has expired, or has no uses left.** | Check the discount code or request the plan without it |

## Own models {#modelos-propios}

| Symptom | Cause and solution |
|---|---|
| **The connection failed** when testing a model | The reason appears below. If **The provider rejected the API Key**, use **Change API Key**; if it **doesn't recognize this model ID**, fix it with **Edit**. See [AI Providers](/organizacion/proveedores-de-ia) |
| **The address is not valid** | The model's address must be HTTPS and public |
| A model cannot be deleted | There are agents using it. Assign them another model first |
| **Your plan doesn't include own AI models** | The plan does not include this feature. Models already registered are kept but cannot be used in agents. See [Own models](/organizacion/creditos-y-limites#modelos-propios) |
| Agents warn that the own model rejected the API Key or ran out of balance | The provider key expired or the provider account needs a top-up. Fix it at the provider and, if the key changed, with **Change API Key** |

## Channels {#canales}

| Symptom | Cause and solution |
|---|---|
| **Your plan has reached its integrations limit.** | Only active integrations count. Deactivate or delete one, or request a bigger plan |
| WhatsApp: **Expired — reconnect** or the **Connection about to expire** warning | The assisted connection lasts 60 days. Repeat the assisted connection with the same number. See [When the connection expires](/organizacion/canales/whatsapp#cuando-la-conexión-caduca) |
| WhatsApp: the agent stops answering with a manual connection | The Meta token expired. Use a permanent token. See [Manual connection](/organizacion/canales/whatsapp#conexión-manual) |
| WhatsApp: error when connecting | See the table in [If something fails](/organizacion/canales/whatsapp#si-algo-falla). If **Meta did not respond**, wait a few minutes and try again |
| **Number created without assignment** | Assign an agent or a team to the number from the integration details. Without an assignment, nobody answers |
| WhatsApp: the number does not send or receive | The PIN is missing. Use **Enter PIN** in the integration |
| WhatsApp: the AI stopped answering in a chat | Someone replied from the WhatsApp Business app: the AI turns off in that chat. See [Number mode](/organizacion/canales/whatsapp#modo-del-número) |
| Telegram: **Could not create bot** | The token is not correct. Copy it again from BotFather. If it was regenerated there, delete the integration and create it again. See [Telegram](/organizacion/canales/telegram) |
| Telegram: you cannot write to a contact | The contact has to write to the bot first |
| External app: **Not connected** | The delivery URL is missing. Use **Edit** and fill it in. See [External app](/organizacion/canales/aplicacion-externa) |
| External app: the external system stops working after regenerating | Regenerating the API key or the secret voids the previous one immediately. Give the new ones to the external system's team |
| Google Calendar: **Connection link expired** | Click connect again and complete the Google process without delay. See [Google Calendar](/organizacion/canales/google-calendar) |
| Google Calendar appears disabled when adding an integration | A calendar is already connected: only one is allowed per organization |
| A channel does not answer and the conversation asks for human support | The agent could not answer. Check that there are [credits](/organizacion/creditos-y-limites#sin-créditos) left and, with an own model, its key. Meanwhile, the team can answer from [Conversations](/conversaciones/canales-y-atencion-humana) |
| A team cannot be deleted | It handles some integration. Remove it from those integrations first. See [Teams](/organizacion/equipos) |

## Connectors and catalog {#conectores-y-catálogo}

| Symptom | Cause and solution |
|---|---|
| A connector appears as **Not connected** | Each person has to authorize it with **Authorize with OAuth**. See [Connectors](/organizacion/conectores) |
| **Authorization error** | The authorization was not completed. Try again |
| An uninstalled connector appears as **Unavailable** in an agent | It is removed from the agent when you save it |
| Something **Assigned to your organization** cannot be uninstalled | ConsulPoint turned it on for the organization, and it cannot be uninstalled from the catalog |
| An item appears as **Unavailable** or retired | It was retired from the catalog: it stays installed, but it cannot be reinstalled or updated. See [Retired items](/organizacion/catalogo-de-aplicaciones#elementos-retirados) |
| You cannot install another skill | The plan maximum has been reached. Uninstall or delete one, or request a bigger plan |
| The install or uninstall buttons do not appear | Installing and updating require the create permission on the module; uninstalling, the delete permission |
| A change in an app's permissions does not take effect | It takes a few minutes to apply. See [Install and manage](/aplicaciones-integradas/instalar-y-administrar) |

## API keys and webhooks {#claves-de-api-y-webhooks}

| Symptom | Cause and solution |
|---|---|
| An external tool gets `401` | The key does not exist, usually because it was regenerated. Hand over the new key. The key's **Events** tab shows **Key not found**. See [API keys](/organizacion/claves-de-api#la-ficha-de-una-clave) |
| An external tool gets `403` | The key is deactivated or expired, or the organization has no plan or credits. Activate it or extend **Expires** with **Edit** |
| A key appears as **Expiring soon** or **Expired** | It expires in less than 7 days, or it has already expired. Extend the date with **Edit** |
| **Cannot regenerate** | The key is deactivated. Activate it before regenerating |
| A key or a webhook cannot be deleted | Deactivate it first |
| A webhook does not arrive | The receiving system has to respond in less than 10 seconds, and the webhook has to be **Active**. Notifications are not retried. See [Webhooks](/control/webhooks#qué-se-envía) |
| A conversation webhook does not notify about all of them | **All Conversations Updated** only covers the conversations of the person who created it |

## Workspaces {#espacios-de-trabajo}

| Symptom | Cause and solution |
|---|---|
| **You've reached your plan's limit** when creating a workspace | Inactive workspaces also count. See [Workspaces](/modulos/espacios-de-trabajo#crear-un-espacio) |
| **Unable to send invitation** | The person is already a member of the workspace, or there was a one-off problem. Check the **Users** tab |
| An invitation appears as **Expired** | 7 days have passed. Use **Resend** from the menu on its row |
| A workspace does not appear in the selector | It is inactive. Activate it from the list of workspaces |
| The **Manage workspaces** gear icon does not appear | It only shows in the main organization, not inside a workspace |
| An agent or an app cannot be unlinked | Only the workspace's **Admin** can do it |
