---
id: usuarios-y-roles
title: Usuarios y Roles
sidebar_label: Usuarios y Roles
sidebar_position: 2
description: Gestión de personas y permisos en ConsulPoint. Modelo de roles, operaciones por módulo y principio de mínimo privilegio.
---

# Usuarios y Roles

**Rutas:** `/settings/users` · `/settings/roles`
**Permiso requerido:** administrador

## Gestión de usuarios

Alta, edición y desactivación de las personas con acceso a la organización. Admite usuarios **internos** y **externos**.

## Gestión de roles

Un rol define, para cada módulo, las operaciones permitidas:

| Operación | Alcance |
|---|---|
| **Lectura** | Consultar el módulo |
| **Creación** | Crear elementos |
| **Edición** | Modificar elementos |
| **Eliminación** | Eliminar elementos |

**Rutas:** listado (`/settings/roles`), creación (`/settings/roles/new-role`), detalle y edición por identificador.

## Modelo de referencia

| Rol | Alcance sugerido |
|---|---|
| **Administrador** | Acceso completo, incluida configuración y facturación |
| **Creador de agentes** | Estudio y Centro de Conocimiento |
| **Agente de atención** | Conversaciones y Bandeja Inteligente |
| **Consulta** | Uso de agentes existentes, sin configuración |

:::warning Principio de mínimo privilegio
Asignar a cada rol el conjunto mínimo de permisos necesario. Ampliar permisos posteriormente es una operación trivial; revertir una exposición indebida de información, no.
:::

Consulta la [matriz de permisos](/referencia/permisos) para el detalle por módulo.
