---
id: claves-de-api
title: Claves de API
sidebar_label: Claves de API
sidebar_position: 13
description: Cómo crear y gestionar las claves de API de ConsulPoint, que permiten consultar los agentes de la organización desde otro sistema o herramienta.
---

# Claves de API

<PageMeta route="/settings/apikeys">permiso sobre **Claves de API**</PageMeta>

Una **clave de API** permite que otro sistema consulte los [agentes](/control/estudio/agentes) de la organización: una aplicación propia, un proceso automático o una herramienta compatible con OpenAI. Cada clave da acceso solo a los agentes que se eligen al crearla. Se gestionan en **Configuración → Claves de API**.

La parte técnica, para quien programa la integración, está en [API de agentes](/api-agentes).

<Screenshot src="/img/configuracion/claves-de-api.png" alt="Lista de claves de API en Configuración" caption="Configuración → Claves de API" />

## La lista

Cada clave muestra su **Nombre**, la **Clave API** (solo los últimos caracteres), su **Estado** (**Activa**, **Inactiva** o **Vencida**), la **Fecha de creación**, el **Último uso** y cuándo **Expira**. Las que están a punto de caducar se marcan con **Por vencer**.

## Crear una clave

1. Pulsar **Crear API Key**.
2. Completar:

   | Campo | Contenido |
   |---|---|
   | **Nombre de la API Key** | Obligatorio, entre 3 y 50 caracteres |
   | **Fecha de expiración (opcional)** | Una fecha futura. Si se deja en blanco, la clave no caduca |
   | **Agentes** | Obligatorio. Los agentes que se podrán consultar con esta clave (hasta 20) |

3. Pulsar crear. La plataforma muestra la clave completa.

:::danger La clave se ve una sola vez
Hay que copiarla en ese momento y guardarla como una contraseña. Después solo se ven sus últimos caracteres; si se pierde, hay que regenerarla.
:::

El plan fija el número máximo de claves. Ver [Créditos y límites](/organizacion/creditos-y-limites#límites-del-plan).

## Acciones

| Acción | Qué hace |
|---|---|
| **Ver detalles** | Abre la ficha de la clave |
| **Editar** | Cambia el nombre, la caducidad y los agentes |
| **Regenerar clave** | Crea una clave nueva y muestra la nueva una vez. La anterior deja de funcionar **en ese momento**; el nombre y los agentes se conservan. Solo en claves activas |
| **Conectar herramienta externa** | Muestra los datos para configurar la clave en una herramienta compatible con OpenAI (ver más abajo) |
| **Activar** / **Desactivar** | Una clave desactivada deja de funcionar hasta que se vuelve a activar |
| **Eliminar** | Elimina la clave. Solo es posible si antes se ha desactivado |

Cada acción requiere el permiso correspondiente sobre **Claves de API**.

## La ficha de una clave

Tiene tres pestañas:

- **General**: la clave, sus fechas, las **Consultas restantes (por minuto)** y los **Agentes Asociados**, con cuántas consultas han respondido bien y cuántas han fallado.
- **Eventos**: el **Registro de actividad** de la clave: consultas respondidas, cambios de agentes o de estado, regeneraciones e **intentos de autenticación fallidos** (clave inválida, desactivada, eliminada o vencida). Si hay muchos intentos fallidos en un día, la ficha avisa de una posible actividad sospechosa.
- **Ejecuciones recientes**: cada consulta, con el agente, su estado, los tokens, la duración y si se cobró (**Facturable**). Las consultas a agentes con un [modelo propio](/organizacion/proveedores-de-ia) no se cobran.

Las consultas que recibe cada agente también se ven en su pestaña **Consultas por API**, en el Estudio. Ver [Agentes](/control/estudio/agentes).

## Conectar una herramienta externa

**Conectar herramienta externa** muestra lo que pide una herramienta compatible con OpenAI (por ejemplo, un editor de código):

- **URL base**: la dirección de la API de agentes. No hay que añadirle `/chat/completions`.
- **API Key**: la clave.
- **Nombre del modelo**: el nombre de uno de los agentes de la clave.

Si dos agentes de la clave tienen el mismo nombre, hay que usar su identificador en lugar del nombre.
