---
id: instalar-y-administrar
title: Instalar y administrar
sidebar_label: Instalar y administrar
sidebar_position: 6
description: Cómo instalar, actualizar y desinstalar aplicaciones integradas en ConsulPoint, revisar sus permisos y consultar su actividad.
---

# Instalar y administrar

<PageMeta route="/store/apps · /settings/applications">el que corresponda sobre **Aplicaciones**</PageMeta>

Las aplicaciones del [Catálogo de integraciones](/organizacion/catalogo-de-aplicaciones) se instalan en la organización con un clic. Una vez instaladas, se administran desde **Configuración → Aplicaciones**, junto con las aplicaciones propias.

Esta página no requiere conocimientos de programación.

<Screenshot src="/img/aplicaciones-integradas/configuracion-aplicaciones.png" alt="Pantalla de Aplicaciones en la Configuración de ConsulPoint" caption="Pantalla de Aplicaciones, con una aplicación propia de ejemplo" />

## Instalar

1. Abrir el **Catálogo de integraciones** y la pestaña **Aplicaciones**.
2. Elegir la aplicación y pulsar **Instalar**.
3. Si la aplicación incluye recursos (carpetas, microagentes o esquemas de datos), indicar para cada uno si se crea nuevo, se usa uno existente o se omite.

La aplicación queda disponible en los lugares que correspondan a su tipo. Consultar [Dónde aparecen](/aplicaciones-integradas/donde-aparecen).

:::info Recursos incluidos
Los recursos que se crean al instalar cuentan para los límites del plan de la organización.
:::

## Estados en el catálogo

| Indicador | Significado |
|---|---|
| **Instalada** | Ya está en la organización |
| **Actualización disponible** | Hay una versión más reciente |
| **Asignada a tu organización** | La instaló el equipo de ConsulPoint a petición de la organización |
| **No disponible** | Quien la publica la retiró del catálogo |

## Actualizar

En la pestaña **Instaladas**, pulsar **Actualizar**. La actualización trae la versión nueva junto con sus permisos y modelos de datos.

| Qué ocurre con | Al actualizar |
|---|---|
| Los datos guardados | Se conservan |
| Los permisos | Se sustituyen por los de la versión nueva |
| Los modelos de datos | Se añaden los nuevos; los existentes no pierden campos |
| El nombre y el icono | Se actualizan con los de la versión nueva |

:::tip Antes de actualizar
Conviene revisar los permisos de la versión nueva: pueden ser distintos de los que se aceptaron al instalar.
:::

## Desinstalar

En **Instaladas**, pulsar **Desinstalar**.

| Qué ocurre con | Al desinstalar |
|---|---|
| Los datos guardados por la aplicación | **Se eliminan y no se recuperan** al reinstalar |
| Los recursos incluidos | Se conservan o se eliminan, a elección |
| La actividad registrada | Se conserva, salvo que se borre en el mismo paso |

:::danger Datos de la aplicación
Desinstalar elimina de forma definitiva los registros que la aplicación haya guardado. Conviene exportarlos antes si se van a necesitar.
:::

## Revisar una aplicación

En **Configuración → Aplicaciones**, cada aplicación muestra su origen (**Instalada** o **Propia**) y estas pestañas:

| Pestaña | Contenido |
|---|---|
| **General** | Descripción, tipo, estado y, si es instalada, la versión instalada y la del catálogo |
| **Permisos** | Recursos a los que accede y con qué operaciones |
| **Modelos** | Colecciones donde guarda sus registros |
| **Versiones** | Versiones publicadas y cuál está en uso |
| **Vista previa** | La aplicación en funcionamiento |
| **Actividad** | Quién hizo qué y cuándo dentro de la aplicación |

En una aplicación **Instalada**, los permisos, los modelos y las versiones son de solo consulta: los define quien la publicó. En una aplicación **Propia** se pueden modificar. Consultar [Publicar](/aplicaciones-integradas/publicar).

## Permisos de una aplicación

Los permisos indican a qué puede acceder la aplicación, no quién puede usarla.

<Screenshot src="/img/aplicaciones-integradas/aplicacion-permisos.png" alt="Pestaña Permisos de una aplicación en ConsulPoint" caption="Pestaña Permisos de una aplicación propia de ejemplo" />

- La aplicación nunca hace más de lo que permite el rol de la persona que la usa, salvo en **Contactos**, donde basta el permiso de la aplicación.
- **Contactos** y **Usuarios** son siempre de solo lectura.
- Un cambio de permisos puede tardar hasta 5 minutos en aplicarse.

## Aplicaciones retiradas

| Situación | Efecto |
|---|---|
| Se retiró del catálogo | Sigue instalada y funcionando; no recibirá actualizaciones |
| Se retiró y se desactivó | Ya no se puede abrir. Se puede desinstalar desde **Instaladas** |

## Buenas prácticas

:::tip Revisar antes de instalar
Conviene revisar los permisos que solicita una aplicación y comprobar que corresponden a lo que promete hacer.
:::

:::warning Borrar actividad
**Borrar actividad** elimina el historial de la aplicación de forma definitiva y queda registrado quién lo hizo.
:::
