---
id: especialistas
title: Especialistas
sidebar_label: Especialistas
sidebar_position: 3
description: El Especialista es un agente auxiliar al que un Agente principal delega consultas de un dominio concreto.
---

# Especialistas

Un **Especialista** es un agente auxiliar al que un [Agente](/control/estudio/agentes) principal delega consultas de un dominio concreto. El Agente decide cuándo invocarlo.

**Casos de uso:** un agente comercial que delega consultas de facturación en un especialista de facturación.

## Campos adicionales

Además de la información básica común a todos los tipos, un Especialista requiere dos campos adicionales en el paso 1 de creación:

| Campo | Función | Límite |
|---|---|---|
| **Nombre técnico** | Identificador interno | Máx. 20 caracteres |
| **Descripción técnica** | Texto que el Agente principal evalúa para decidir la invocación | Obligatorio |

:::warning La descripción técnica no es documentación
Es el criterio de decisión que lee el Agente principal para determinar si activa al Especialista. Debe describir con precisión **cuándo** corresponde invocarlo, no qué hace en general.
:::

Para el resto del formulario de creación, ver [Crear un agente](/modulos/estudio#crear-un-agente).
