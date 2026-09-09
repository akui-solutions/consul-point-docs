---
id: agentes
title: Agentes
sidebar_label: Agentes
sidebar_position: 2
description: El Agente es el asistente principal del Estudio de ConsulPoint. Conversa con personas y puede delegar en Especialistas.
---

# Agentes

El **Agente** es el asistente principal. Conversa con personas a través de [Conversaciones](/modulos/conversaciones) o de un canal conectado. Es el único tipo que puede invocar [Especialistas](/control/estudio/especialistas).

**Casos de uso:** atención al cliente, soporte, consulta interna de documentación.

```mermaid
flowchart LR
    U([Usuario]) <--> A[Agente]
    A -->|delega| E1[Especialista<br/>Facturación]
    A -->|delega| E2[Especialista<br/>Soporte]
    A -.->|consulta| K[(Centro de<br/>Conocimiento)]
```

## Creación

Un Agente se crea desde el Estudio siguiendo el formulario general de tres pasos: información básica, respuestas y personalización, y documentos. Consulta el detalle completo en [Crear un agente](/modulos/estudio#crear-un-agente).

:::danger El tipo de agente es inmutable
El tipo se define en el primer paso y **no puede modificarse después de crear el agente**.
:::
