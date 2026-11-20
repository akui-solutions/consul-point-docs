---
id: auditoria-y-reportes
title: Auditoría y Reportes
sidebar_label: Auditoría y Reportes
sidebar_position: 1
description: El consumo de créditos de la organización en ConsulPoint, su evolución y distribución por proveedor y operación, la actividad de cada usuario y los límites de la suscripción.
---

# Auditoría y Reportes

<PageMeta route="/consumption">permiso sobre **Auditoría y reportes**; con los roles predeterminados, solo administradores</PageMeta>

**Auditoría y Reportes** muestra cuántos créditos usa la organización, en qué se van, la actividad de cada persona y cuánto queda de cada límite de la suscripción. Tiene tres pestañas:

| Pestaña | Ruta | Contenido |
|---|---|---|
| **Consumo** | `/consumption/reports` | El saldo de la organización, el consumo propio y el historial |
| **Actividad de usuarios** | `/consumption/user-activity` | La actividad y el consumo de cada persona |
| **Límites** | `/consumption/limits` | El uso de cada recurso frente al máximo de la suscripción |

Quien tiene acceso ve los datos de **toda la organización**, salvo **Mi consumo**, que es personal.

## Consumo

<Screenshot src="/img/control/auditoria-estadisticas.png" alt="Pestaña Consumo de Auditoría y Reportes" caption="Auditoría y Reportes → Consumo (datos de ejemplo)" />

### Saldo de la organización

| Dato | Qué muestra |
|---|---|
| **Saldo disponible** | Los créditos que le quedan a toda la organización |
| **Créditos usados** | Los créditos ya usados del saldo activo |
| **Porcentaje del saldo usado** | Qué parte del saldo activo se ha usado |

El saldo activo es la suma de los [bonos de crédito](/organizacion/suscripcion#bonos-de-crédito) vigentes.

### Mi consumo

El resumen del mes en curso de quien mira la pantalla: sus **Créditos usados**, sus conversaciones y sus mensajes enviados.

### Historial

**Evolución del consumo** muestra cuántos créditos usa la organización en un período: por defecto, el mes en curso.

- **Rangos rápidos**: **7 días**, **30 días**, **90 días** o **12 meses**. También se puede elegir **Fecha inicio** y **Fecha fin**.
- **Agrupación**: **Diario**, **Semanal** o **Mensual**. Con **Automática según el período**, se agrupa por día hasta 31 días, por semana hasta 93 y por mes a partir de ahí.

Encima del gráfico aparecen los **Créditos usados en el período** y el **Máximo del período**, con su fecha.

**Distribución del consumo** reparte esos créditos:

- **Por proveedor**: entre los proveedores de IA, con el detalle por modelo.
- **Por operación**: por tipo de uso.

| Categoría | Incluye |
|---|---|
| **Conversaciones** | Las respuestas de los agentes |
| **Análisis de supervisión** | Los análisis de conversaciones con IA |
| **Traducción** | Traducciones de mensajes |
| **Generación de agentes** | El contenido que se genera con IA al crear agentes |
| **Microagentes** | Extracción de documentos y correos, y OCR |
| **Documentos** | La conversión de documentos y su preparación para que los agentes los consulten |
| **Multimedia** | Imágenes generadas, texto a voz, voz a texto y transcripción de vídeo |
| **Web** | Búsquedas y lectura de páginas web |
| **Otros** | El resto |

Las categorías con menos peso se agrupan; **Ver … más** las muestra.

## Actividad de usuarios

<Screenshot src="/img/control/auditoria-actividad.png" alt="Pestaña Actividad de usuarios" caption="Auditoría y Reportes → Actividad de usuarios (datos de ejemplo)" />

Una fila por persona, con sus **Conversaciones**, **Mensajes**, **Créditos Usados** y su **Modelo más usado**. Los créditos incluyen todo su consumo, no solo el de las conversaciones (también análisis, audio y herramientas).

Se puede buscar una persona y acotar por fechas; sin fechas, muestra todo el histórico. **Quitar filtros** vuelve a mostrar todo.

## Límites

<Screenshot src="/img/control/auditoria-limites.png" alt="Pestaña Límites de Auditoría y Reportes" caption="Auditoría y Reportes → Límites (datos de ejemplo)" />

El uso de cada recurso frente al máximo de la suscripción. Arriba, un resumen con cuántos recursos tienen el **Límite superado**, cuántos no tienen límite y cuántos tipos de recursos hay.

Los recursos se ordenan en dos grupos: **Recursos que requieren atención** (cerca del límite, en el límite o por encima) y **Otros recursos**. Se pueden filtrar por **Estado** (**Límite superado**, **Con cupo disponible**, **Requieren atención**, **Ilimitado**) y ordenar por **Mayor uso primero** o por **Nombre (A–Z)**.

| Estado | Significa |
|---|---|
| **Cerca del límite** | Queda poco cupo |
| **Límite alcanzado** | Se llegó al máximo: no se pueden crear más |
| **Límite superado** | El uso actual supera el máximo, por ejemplo después de pasar a una suscripción menor |
| **Ilimitado** | El recurso no tiene tope |

Algunos límites cuentan solo lo de quien mira, no lo de toda la organización. Se marcan como **Uso personal**:

| Recurso | Qué cuenta |
|---|---|
| **Conversaciones**, **Almacenamiento**, **Carpetas** | Solo las de quien mira |
| **Contactos** | Todos, también los inactivos: solo eliminarlos libera espacio |
| **Integraciones** | Un único máximo para todas juntas |
| **Conectores** | Cada conector instalado, aunque lo usen varios agentes |

Qué pasa al llegar a un límite se explica en [Créditos y límites](/organizacion/creditos-y-limites#límites-de-la-suscripción).

:::note Qué no incluye
Este módulo muestra consumo y actividad agregada. No es un registro de acciones (quién creó, modificó o eliminó qué) ni permite exportar los datos.
:::
