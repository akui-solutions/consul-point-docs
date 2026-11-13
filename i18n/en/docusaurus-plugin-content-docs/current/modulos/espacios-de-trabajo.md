---
id: espacios-de-trabajo
title: Workspaces
sidebar_label: Workspaces
description: ConsulPoint workspaces. They separate users, agents, apps and content by team, department or project within an organization.
---

# Workspaces

<PageMeta route="/workspaces">the relevant one on **Workspaces**</PageMeta>

A workspace separates, within an organization, the work of a team, a department or a project. Each workspace has its own members, the agents and apps assigned to it, and its own content. Members choose which workspace they work in from the top bar.

## How to get there {#cómo-se-llega}

Workspaces do not appear in the side menu. You use and manage them from the selector in the top bar, which shows the name of the organization or workspace you are working in.

<Screenshot src="/img/en/modulos/espacios-de-trabajo-selector.png" alt="Organization and workspace selector in ConsulPoint" caption="Top bar selector" maxWidth={320} />

- **Switch workspace**: click the workspace's name in the list. **Main** takes you back to the organization.
- **Manage workspaces**: click the gear next to the organization's name (**Manage workspaces**). It only shows when you are in the main organization, not inside a workspace.
- **Favorite organization**: the star (**Mark as favorite**) highlights an organization, for people who belong to several.

## Who can do what {#quién-puede-hacer-qué}

| Action | Who |
|---|---|
| See the list and details of workspaces | Any role with access to Workspaces |
| Create, edit, activate and deactivate workspaces | Roles with create or edit permission; with the default roles, the organization's administrator |
| Add users, agents and apps to a workspace | Roles with create permission on Workspaces |
| Unlink agents and apps from a workspace | Only that workspace's **Admin** |

Each role's permissions are set in [Roles](/organizacion/roles).

## Workspace list {#lista-de-espacios}

<Screenshot src="/img/en/modulos/espacios-de-trabajo-lista.png" alt="Workspace list in ConsulPoint" caption="Workspace list" />

The list shows each workspace's **Name**, **Description**, **Admin**, **Status** and **Created At**. You can search by name and filter by admin or status. The **Actions** menu on each row lets you **View** or **Edit** the workspace.

## Create a workspace {#crear-un-espacio}

1. Click **Add Workspace**.
2. Fill in the **Create workspace** window:

   | Field | Description |
   |---|---|
   | **Workspace name** | Required, between 2 and 60 characters |
   | **Description** | Optional, between 2 and 255 characters |
   | **Admin** | Required. The person with administrative privileges within the workspace |
   | **Add users** | Optional. Members of the organization who will have access from the start |

3. Click **Create**.

The number of workspaces you can create depends on the plan.

## Workspace details {#detalle-de-un-espacio}

The details have two tabs: **General** and **Users**. In the header, **Edit** changes the name, description and admin, and **Deactivate** or **Activate** changes the status.

<Screenshot src="/img/en/modulos/espacios-de-trabajo-general.png" alt="General tab of a workspace in ConsulPoint" caption="General tab of a workspace" />

### General {#general}

| Block | Content |
|---|---|
| **General Information** | Creation date, last update, owner and description |
| **Agents** | Agents available in the workspace. **Add Agent** assigns an existing one |
| **Applications** | [Integrated apps](/aplicaciones-integradas) available in the workspace. **Add Application** assigns an existing one |

From each row's menu, **Unlink** removes the agent or app from the workspace. It does not delete it from the organization.

### Users {#usuarios}

It has two lists: **Members** and **Invitations**.

In **Members**, the **User Type** distinguishes between **Internal** (from the organization) and **External** (from outside it). **Unlink** removes the person from the workspace, and they lose access to it.

To add people, click **Add users**:

- **Current organization users**: you search for them by name or email and add them directly.
- **Invite someone external by email**: you enter the email and, if the person has no account on the platform, their first and last name. They receive an email with a link to join; if they had no account, they create it when they accept.

### Invitations {#invitaciones}

| Status | Meaning |
|---|---|
| **Pending** | Sent and not yet accepted |
| **Accepted** | The person is now a member of the workspace |
| **Expired** | 7 days passed without it being accepted |
| **Cancelled** | It was cancelled before being accepted |

You can **Resend** an invitation from its row's menu.

:::danger Delete an invitation
**Delete** permanently erases the invitation. To invite that person again, you have to send a new invitation.
:::

## Activate and deactivate {#activar-y-desactivar}

A workspace is **Active** or **Inactive**. When you deactivate it, it no longer appears in the top bar selector. Its content is not deleted: when you activate it again, it is available again just as it was.

## What stays separate in each workspace {#qué-queda-separado-en-cada-espacio}

Inside a workspace, each member works with that workspace's own content in:

- [Conversations](/modulos/conversaciones)
- [Articles & Updates](/modulos/articulos-y-novedades)
- [Knowledge Hub](/modulos/centro-de-conocimiento)
- The shortcuts on [Home](/modulos/inicio)

Modules that are not available inside a workspace, such as Contacts, do not appear while you work in it.

## Best practices {#buenas-prácticas}

:::tip When it makes sense
When there are departments with different needs, independent brands or projects whose documentation must be kept separate. In small organizations with a single scope of work, it adds complexity without any benefit.
:::

:::tip Companies that work with clients
One workspace per client keeps their knowledge, conversations and agents separate. The client's people are invited as external users and only access their workspace. The organization's administrators still see all workspaces, and the number of workspaces available depends on the plan.
:::
