---
id: agentes
title: Agentes
sidebar_label: Agentes
sidebar_position: 3
description: Qué es un agente en ConsulPoint y cómo gestionarlo desde su detalle en el Estudio. Documentos, especialistas, conectores, acceso, edición y eliminación.
---

# Agentes

<PageMeta route="/studio/assistant/details/general/:id" />

Un **agente** conversa con las personas: en [Conversaciones](/modulos/conversaciones), en un canal conectado como WhatsApp o a través de la API. Responde con sus instrucciones, los documentos a los que tiene acceso y, si los tiene, consultando a sus [especialistas](/control/estudio/especialistas).

Para crear uno, ver [Crear un agente](/control/estudio/crear-un-agente).

**Casos de uso:** atención al cliente, soporte, consulta interna de documentación, asistencia a un equipo concreto.

## El detalle de un agente

Se abre desde la lista del Estudio con **Ver detalle**. En la cabecera, **Editar** abre el formulario y **Eliminar** lo borra (ver más abajo).

| Pestaña | Contenido |
|---|---|
| **General** | Información básica, comportamiento y personalización |
| **Capacidades** | Lo que el agente puede hacer: sus funciones integradas y sus habilidades. Ver más abajo |
| **Documentos** | Los documentos propios del agente y su estado de preparación |
| **Conectores** | Herramientas externas que el agente puede usar. Ver más abajo |
| **Especialistas** | Los especialistas que puede consultar. Ver [Especialistas](/control/estudio/especialistas#asignar-especialistas-a-un-agente) |
| **Acceso** | Quién puede usar el agente y con qué nivel |
| **Consultas por API** | Historial de las consultas hechas al agente a través de la API, con filtros por estado y fechas |

Los especialistas tienen menos pestañas: **General**, **Capacidades**, **Documentos** y **Acceso**.

### Capacidades

Reúne en un solo lugar lo que el agente puede hacer:

- **Funciones integradas**: las funciones de la plataforma activas en el agente, como **Buscar en la web** o **Adjuntar archivos**. Se cambian con **Gestionar funciones** (o **Activar funciones**, si no tiene ninguna), con permiso de editar **Estudio**. La lista completa está en [Crear un agente](/control/estudio/crear-un-agente#funciones-integradas).
- **Habilidades**: los procedimientos que el agente aplica cuando los necesita. Se asignan con **Gestionar habilidades**. Ver [Habilidades](/control/estudio/habilidades#asignar-habilidades-a-un-agente).

<Screenshot src="/img/estudio/capacidades-agente.png" alt="Pestaña Capacidades en el detalle de un agente" caption="Detalle de un agente → Capacidades" />

### Documentos

Los documentos que se subieron al crear el agente, o con **Agregar documento**. Cada uno muestra si está **Vectorizado** (preparado para que el agente lo lea), **Sin vectorizar** o **Procesando**, y se puede volver a preparar o retirar.

Estos documentos son solo del agente. Los documentos compartidos entre varios agentes se gestionan en el [Centro de Conocimiento](/centro-de-conocimiento/conocimiento-de-los-agentes).

### Conectores

Herramientas externas que el agente puede usar durante una conversación, conectadas por la organización. **Gestionar conectores** está reservado a administradores. Para cada conector se indica si queda **Activo al iniciar** cada conversación.

### Acceso

| Opción | Quién lo usa |
|---|---|
| **Solo yo** | Solo quien lo creó, ni siquiera los administradores |
| **Toda la organización** | Todos lo usan; los administradores lo editan |
| **Personas y roles concretos** | Solo quien se añada, con su nivel: **Puede usar**, **Puede editar** o **Puede administrar** |

Cualquiera que pueda abrir el agente ve su acceso. Solo los administradores lo cambian con **Editar acceso**, y solo quien creó el agente puede pasarlo a **Solo yo**.

Una persona solo ve en el Estudio y en Conversaciones los agentes a los que tiene acceso.

## Editar

**Editar** abre el formulario con la configuración actual, salvo el tipo, que no se puede cambiar. Requiere permiso de edición sobre el Estudio y, en el agente, el nivel **Puede editar** o superior.

## Eliminar

:::danger Eliminación permanente
Un agente eliminado no se recupera. Se borran también sus documentos propios y su imagen.
:::

- No se puede eliminar un agente que ya tiene conversaciones: el botón aparece desactivado e indica cuántas tiene.
- Si el agente tiene documentos o especialistas asignados, hay que escribir su nombre para confirmar.
- Con los roles predeterminados, solo los administradores pueden eliminar agentes.

## Probar un agente

El Estudio no tiene un espacio de pruebas propio: los agentes se prueban en [Conversaciones](/modulos/conversaciones).

- Preguntar con las dudas reales más habituales.
- Revisar las fuentes de cada respuesta para comprobar que usa los documentos correctos.
- Probar también lo que **no** debe hacer, para ver que respeta sus límites.
