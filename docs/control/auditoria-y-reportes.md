---
id: auditoria-y-reportes
title: Auditoría y Reportes
sidebar_label: Auditoría y Reportes
sidebar_position: 1
description: El consumo de créditos de la organización en ConsulPoint, los límites de la suscripción, el historial por proveedor y operación, y la actividad de cada usuario.
---

# Auditoría y Reportes

<PageMeta route="/consumption">permiso sobre **Auditoría y reportes**; con los roles predeterminados, solo administradores</PageMeta>

**Auditoría y Reportes** muestra cuántos créditos usa la organización, en qué se van, cuánto queda de cada límite de la suscripción y la actividad de cada persona. Tiene dos pestañas: **Estadísticas** y **Actividad de Usuarios**.

Quien tiene acceso ve los datos de **toda la organización**, salvo su tarjeta de consumo, que es personal.

## Estadísticas

<Screenshot src="/img/control/auditoria-estadisticas.png" alt="Pestaña Estadísticas de Auditoría y Reportes" caption="Auditoría y Reportes → Estadísticas (datos de ejemplo)" />

### Créditos de la organización

| Tarjeta | Qué muestra |
|---|---|
| **Créditos disponibles de la organización** | Los créditos que le quedan a toda la organización |
| **Créditos usados por la organización** | Los créditos ya usados del saldo activo |
| **Porcentaje usado por la organización** | Qué parte del saldo activo se ha usado |

El saldo activo es la suma de los [bonos de crédito](/organizacion/suscripcion#bonos-de-crédito) vigentes.

### Consumo del Usuario

El resumen personal del mes en curso de quien mira la pantalla: los **Créditos usados este mes**, sus conversaciones y sus mensajes enviados.

### Límites de tu suscripción

El uso actual de cada recurso frente al máximo de la suscripción, con una barra que se pone **naranja** al acercarse al límite y **roja** al alcanzarlo. Los recursos sin máximo aparecen como **Sin límite**.

Algunos límites cuentan solo lo de quien mira, no lo de toda la organización:

| Recurso | Qué cuenta |
|---|---|
| **Conversaciones**, **Almacenamiento**, **Carpetas** | Solo las tuyas |
| **Contactos** | Todos, también los inactivos: solo eliminarlos libera espacio |
| **Integraciones** | Un único máximo para todas juntas |
| **Conectores** | Cada conector instalado, aunque lo usen varios agentes |

Qué pasa al llegar a un límite se explica en [Créditos y límites](/organizacion/creditos-y-limites#límites-del-plan).

### Historial

Cuántos créditos usa la organización, entre la **Fecha inicio** y la **Fecha fin** elegidas (por defecto, el mes en curso) y con **Agrupación** **Diario**, **Semanal** o **Mensual**:

- **Créditos por período**: la evolución del consumo.
- **Por proveedor**: el reparto entre proveedores de IA; al pasar el ratón, el detalle por modelo.
- **Por operación**: el reparto por tipo de uso:

| Categoría | Incluye |
|---|---|
| **Conversaciones** | Las respuestas de los agentes |
| **Análisis de supervisión** | Los análisis de conversaciones con IA |
| **Traducción** | Traducciones de mensajes |
| **Generación de agentes** | El contenido que se genera con IA al crear agentes |
| **Microagentes** | Extracción de documentos y correos, OCR y preparación de archivos para los agentes |
| **Multimedia** | Imágenes generadas, texto a voz, voz a texto y transcripción de vídeo |
| **Web** | Búsquedas y lectura de páginas web |
| **Otros** | El resto |

## Actividad de Usuarios

<Screenshot src="/img/control/auditoria-actividad.png" alt="Pestaña Actividad de Usuarios" caption="Auditoría y Reportes → Actividad de Usuarios (datos de ejemplo)" />

Una fila por persona, con sus **Conversaciones iniciadas**, **Mensajes enviados**, **Créditos Usados** y su **Modelo más usado**. Los créditos incluyen todo su consumo, no solo el de las conversaciones (también análisis, audio y herramientas).

Se puede buscar una persona y acotar por fechas; sin fechas, muestra todo el histórico.

:::note Qué no incluye
Este módulo muestra consumo y actividad agregada. No es un registro de acciones (quién creó, modificó o eliminó qué) ni permite exportar los datos.
:::
