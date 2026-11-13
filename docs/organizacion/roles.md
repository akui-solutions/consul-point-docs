---
id: roles
title: Roles
sidebar_label: Roles
sidebar_position: 3
description: Los roles de ConsulPoint, los permisos Ver, Crear, Editar y Eliminar de cada módulo, y cómo crear, editar o eliminar un rol.
---

# Roles

<PageMeta route="/settings/roles">administrador</PageMeta>

Un rol define qué puede hacer una persona en cada módulo de la plataforma. Cada persona tiene un rol en la organización, que se elige al [invitarla](/organizacion/usuarios#invitar-a-una-persona) y se puede cambiar después con **Cambiar rol**.

<Screenshot src="/img/configuracion/roles.png" alt="Lista de roles en Configuración de ConsulPoint" caption="Configuración → Roles" />

## Roles predeterminados

Las organizaciones nuevas empiezan con tres roles:

| Rol | Descripción |
|---|---|
| **Administrador** | Acceso total, incluidas las secciones de Configuración reservadas a administradores. No se puede editar ni eliminar |
| **Miembro** | Acceso estándar a los módulos asignados. Se puede editar y eliminar |
| **Colaborador** | Acceso limitado para colaborar en módulos concretos. Se puede editar y eliminar |

## Permisos

Para cada módulo, un rol tiene cuatro permisos:

| Permiso | Qué permite |
|---|---|
| **Ver** | Abrir el módulo y consultar su contenido. Sin él, el módulo no aparece en el menú |
| **Crear** | Crear elementos nuevos |
| **Editar** | Modificar los existentes |
| **Eliminar** | Eliminarlos |

El interruptor **Todos** activa o desactiva los cuatro permisos de un módulo a la vez. La lista de módulos y las secciones que exigen ser administrador están en la [Matriz de permisos](/referencia/permisos).

<Screenshot src="/img/configuracion/rol-permisos.png" alt="Permisos de un rol por módulo" caption="Permisos de un rol" />

El rol es solo una parte del acceso: además, cada carpeta, agente o conversación tiene sus propias personas con acceso. Ver [Visión general](/introduccion/vision-general).

## Crear un rol

1. Pulsar **Crear Rol**.
2. En **Crear nuevo rol**, escribir el **Nombre del rol** (entre 2 y 20 caracteres, sin repetir el de otro rol) y, si se quiere, una **Descripción** (hasta 800 caracteres).
3. Pulsar **Siguiente**. El rol queda creado, todavía sin permisos.
4. En **Asignar permisos**, activar al menos un permiso y pulsar **Guardar Permisos**.

El plan fija el número máximo de roles de la organización, y los tres predeterminados cuentan.

## Editar y eliminar

- **Editar** abre **Información del rol** (nombre y descripción) y **Permisos**. Los cambios se guardan con **Guardar cambios**.
- **Eliminar** solo es posible si ninguna persona tiene ese rol. Si alguna lo tiene, la plataforma muestra **No se puede eliminar el rol**: hay que cambiar antes el rol de esas personas.

:::note Los cambios tardan unos minutos
Un cambio en los permisos puede tardar hasta 10 minutos en aplicarse a las personas que tengan la sesión abierta.
:::
