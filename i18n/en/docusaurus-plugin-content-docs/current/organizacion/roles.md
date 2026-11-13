---
id: roles
title: Roles
sidebar_label: Roles
sidebar_position: 3
description: ConsulPoint roles, the View, Create, Edit and Delete permissions for each module, and how to create, edit or delete a role.
---

# Roles

<PageMeta route="/settings/roles">administrator</PageMeta>

A role defines what a person can do in each module of the platform. Each person has one role in the organization, chosen when you [invite them](/organizacion/usuarios#invitar-a-una-persona) and changeable later with **Change role**.

<Screenshot src="/img/en/configuracion/roles.png" alt="Role list in ConsulPoint Settings" caption="Settings → Roles" />

## Default roles {#roles-predeterminados}

New organizations start with three roles:

| Role | Description |
|---|---|
| **Administrator** | Full access, including the Settings sections reserved for administrators. Cannot be edited or deleted |
| **Member** | Standard access to the assigned modules. Can be edited and deleted |
| **Collaborator** | Limited access to collaborate in specific modules. Can be edited and deleted |

## Permissions {#permisos}

For each module, a role has four permissions:

| Permission | What it allows |
|---|---|
| **View** | Open the module and see its content. Without it, the module does not appear in the menu |
| **Create** | Create new items |
| **Edit** | Change existing ones |
| **Delete** | Delete them |

The **All** switch turns a module's four permissions on or off at once. The list of modules and the sections that require being an administrator are in the [Permissions matrix](/referencia/permisos).

<Screenshot src="/img/en/configuracion/rol-permisos.png" alt="A role's permissions by module" caption="A role's permissions" />

The role is only one part of access: each folder, agent or conversation also has its own people with access. See [Platform overview](/introduccion/vision-general).

## Create a role {#crear-un-rol}

1. Click **Create Role**.
2. In **Create new role**, type the **Role name** (between 2 and 20 characters, not the same as another role's) and, if you want, a **Description** (up to 800 characters).
3. Click **Next**. The role is created, still without permissions.
4. In **Assign permissions**, turn on at least one permission and click **Save Permissions**.

The plan sets the organization's maximum number of roles, and the three default roles count.

## Edit and delete {#editar-y-eliminar}

- **Edit** opens **Role information** (name and description) and **Permissions**. Changes are saved with **Save changes**.
- **Delete** is only possible if nobody has that role. If someone does, the platform shows **Cannot delete role**: you have to change those people's role first.

:::note Changes take a few minutes
A permission change can take up to 10 minutes to apply to people who have a session open.
:::
