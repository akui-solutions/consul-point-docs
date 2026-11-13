---
id: proveedores-de-ia
title: Proveedores de IA
sidebar_label: Proveedores de IA
sidebar_position: 8
description: Los modelos de IA disponibles en ConsulPoint y cómo registrar los modelos propios de la organización (OpenAI, Anthropic, Google o un servidor compatible con OpenAI).
---

# Proveedores de IA

<PageMeta route="/settings/providers">administrador</PageMeta>

En **Configuración → Proveedores de IA** se consultan los modelos de IA disponibles para los agentes y se registran los **modelos propios** de la organización: modelos conectados con la cuenta de la organización en un proveedor de IA, que no consumen créditos de ConsulPoint.

<Screenshot src="/img/configuracion/proveedores-de-ia.png" alt="Lista de modelos en Proveedores de IA" caption="Configuración → Proveedores de IA" />

## La lista

Cada modelo muestra su **Proveedor**, su **Tipo**, su **Temperatura** por defecto y su **Origen**:

| Origen | Significado |
|---|---|
| **ConsulPoint** | Modelos que ofrece la plataforma. Consumen créditos |
| **Propio** | Modelos registrados por la organización con su propia clave. No consumen créditos |

Las pestañas **Todos** y **Propios** filtran la lista; aparecen cuando el plan incluye modelos propios o ya hay alguno registrado.

## Registrar un modelo propio

El plan tiene que incluir **Modelos de IA propios**; si no, la pantalla lo indica con **Tu plan no incluye modelos de IA propios**. Ver [Créditos y límites](/organizacion/creditos-y-limites#modelos-propios).

1. Pulsar **Registrar modelo propio**.
2. Rellenar los campos:

   | Campo | Contenido |
   |---|---|
   | **Proveedor** | **OpenAI**, **Anthropic**, **Google** o **Servidor propio (compatible con OpenAI)**. No se puede cambiar después |
   | **ID del modelo** | El identificador exacto que usa el proveedor, por ejemplo `gpt-4o`. No puede repetirse en la organización |
   | **Nombre visible (opcional)** | El nombre que se verá al elegir el modelo |
   | **Tipo** | **Texto**, **Multimodal** o **Código** |
   | **API Key** | La clave de la cuenta de la organización en ese proveedor. Se guarda cifrada y no se vuelve a mostrar |
   | **Dirección del servidor** | Solo para un servidor propio: una dirección HTTPS pública. No se admiten direcciones IP ni de redes internas |
   | **Temperatura** | De 0 a 1. Por defecto, 0,1 |

3. Guardar.

<Screenshot src="/img/configuracion/registrar-modelo.png" alt="Formulario Registrar modelo propio" caption="Registrar modelo propio" maxWidth={600} />

## Acciones

Los modelos propios tienen estas acciones:

| Acción | Qué hace |
|---|---|
| **Probar conexión** | Comprueba que el proveedor acepta la clave y reconoce el ID del modelo. Puede tardar hasta 15 segundos. Si falla, indica la causa: clave rechazada, ID desconocido, límite de peticiones, tiempo agotado o servidor inalcanzable |
| **Editar** | Cambia el nombre, el tipo o la temperatura. El proveedor no se puede cambiar: para usar otro, se registra un modelo nuevo |
| **Cambiar API Key** | Sustituye la clave guardada |
| **Eliminar** | Elimina el modelo. No es posible mientras algún agente lo use: hay que asignarles otro modelo antes |

Los modelos de ConsulPoint no tienen acciones.

## En el Estudio

Al crear o editar un agente, el modelo propio aparece dentro de su proveedor con la etiqueta **Modelo propio**. Ver [Crear un agente](/control/estudio/crear-un-agente#modelo).

Si la organización cambia a un plan que no incluye modelos propios, los modelos registrados se conservan, pero no se pueden elegir en los agentes hasta que el plan vuelva a incluirlos.
