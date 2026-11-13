---
id: catalogo-de-aplicaciones
title: Catálogo de integraciones
sidebar_label: Catálogo de integraciones
sidebar_position: 3
description: El Catálogo de integraciones de ConsulPoint. Aplicaciones, conectores y habilidades ya hechos que la organización puede instalar, actualizar y desinstalar.
---

# Catálogo de integraciones

<PageMeta route="/store/apps">permiso sobre **Aplicaciones**, **Conectores** o **Habilidades**</PageMeta>

El **Catálogo de integraciones** reúne lo que la organización puede instalar sin construirlo desde cero: [aplicaciones integradas](/aplicaciones-integradas), [conectores](/organizacion/conectores) para los agentes y [habilidades](/control/estudio/habilidades). Se abre desde **Catálogo de integraciones**, en el menú lateral.

<Screenshot src="/img/catalogo/catalogo.png" alt="Pestaña Aplicaciones del Catálogo de integraciones" caption="Catálogo de integraciones → Aplicaciones (aplicaciones de ejemplo)" />

## Pestañas

| Pestaña | Contenido | Se ve con permiso sobre |
|---|---|---|
| **Aplicaciones** | Aplicaciones integradas, con búsqueda y filtro por categoría | **Aplicaciones** |
| **Conectores** | Conectores para los agentes, con búsqueda y filtro por categoría | **Conectores** |
| **Habilidades** | Habilidades para la biblioteca del Estudio, con búsqueda | **Habilidades** |
| **Instaladas** | Todo lo instalado en la organización | Cualquiera de los tres |

Las destacadas aparecen primero, y después las que aún no están instaladas.

## Las tarjetas

Cada tarjeta muestra el nombre, el tipo (en las aplicaciones: **Extensión**, **Visualizador** o **Filtro**; ver [Dónde aparecen](/aplicaciones-integradas/donde-aparecen)), una descripción y, a partir de 10, el número de organizaciones que lo han instalado. Algunas llevan además:

- **Destacada**: recomendada por ConsulPoint.
- **Asignada a tu organización**: ConsulPoint la activó para la organización, fuera del catálogo.

La tarjeta muestra una sola acción, según el estado:

| Acción o texto | Cuándo |
|---|---|
| **Instalar** | No está instalada |
| **Abrir** | Aplicación o habilidad instalada |
| **Configurar** | Conector instalado: lleva a **Configuración → Conectores** |
| **Actualizar** | Hay una versión nueva (quien no puede actualizar ve **Actualización disponible**) |
| **No disponible** | Se retiró del catálogo |

Al pulsar la tarjeta se abre el detalle: la versión, la fecha de instalación, la categoría y lo que incluye (los recursos de una aplicación o los archivos de una habilidad). El menú **⋯** del detalle tiene **Desinstalar**.

## Instalar, actualizar y desinstalar

| | Aplicación | Conector | Habilidad |
|---|---|---|---|
| **Instalar** | Si trae recursos (carpetas, microagentes, esquemas de datos), se eligen antes en un diálogo. Ver [Instalar y administrar](/aplicaciones-integradas/instalar-y-administrar) | Directo. Después se configura y se asigna a los agentes. Ver [Conectores](/organizacion/conectores) | Directo. Queda en la biblioteca del Estudio; si el nombre ya existe, se guarda con otro |
| **Actualizar** | Se revisan antes los recursos que cambian | Directo | Pide confirmación. Sustituye instrucciones y archivos; conserva nombre, estado y agentes |
| **Desinstalar** | Pide confirmación y permite borrar también lo que creó | Pide confirmación. Los asignados a la organización no se pueden desinstalar | Pide confirmación. Se borra de la biblioteca y de los agentes que la usaban |

Instalar y actualizar requieren permiso de crear sobre el módulo correspondiente; desinstalar, permiso de eliminar. El plan fija cuántas habilidades, conectores y recursos se pueden tener: al llegar al máximo, la plataforma lo indica antes de instalar. Ver [Créditos y límites](/organizacion/creditos-y-limites#límites-del-plan).

## Instaladas

Una tabla con todo lo instalado: **Nombre**, **Versión**, **Instalación** (fecha y quién) y **Estado** (**Al día**, versión disponible o **No disponible**). Se puede buscar y filtrar por tipo y, en las aplicaciones, por categoría. Si hay actualizaciones pendientes, un aviso permite ver solo esas.

Cada fila tiene **Actualizar** (si hay versión nueva), un acceso directo para abrir o configurar, y en **⋯**, **Ver detalle** y **Desinstalar**.

## Elementos retirados

Si quien publica un elemento lo retira del catálogo, sigue instalado y se puede desinstalar, pero ya no se puede reinstalar ni actualizar. Si además lo desactiva, una aplicación ya no se puede abrir.

Los elementos del catálogo los publica ConsulPoint.
