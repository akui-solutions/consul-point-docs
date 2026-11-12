---
id: intro
title: Documentación de ConsulPoint
sidebar_label: Inicio
sidebar_position: 1
slug: /
description: Documentación de ConsulPoint, la plataforma empresarial de inteligencia artificial para crear agentes, gestionar el conocimiento de la organización, atender canales y desplegar aplicaciones integradas.
---

# Documentación de ConsulPoint

**ConsulPoint** es una plataforma empresarial de inteligencia artificial que conecta agentes, conocimiento, personas y aplicaciones dentro de una organización.

Esta documentación explica cada módulo de la plataforma: para qué sirve, cómo se configura y cómo se relaciona con el resto. Las guías de uso no requieren conocimientos de programación; las páginas para desarrolladores lo indican.

## Primeros pasos

Para poner en marcha un agente que responda con la información de la organización:

<ModuleGrid>
  <ModuleCard icon="knowledge" title="1. Preparar el conocimiento" href="/modulos/centro-de-conocimiento">
    Subir los documentos que usará el agente a carpetas del Centro de Conocimiento.
  </ModuleCard>
  <ModuleCard icon="agent" title="2. Crear el agente" href="/control/estudio/crear-un-agente">
    Definir en el Estudio sus instrucciones, su modelo y sus capacidades, y darle acceso a las carpetas.
  </ModuleCard>
  <ModuleCard icon="chat" title="3. Probarlo" href="/conversaciones/conversar-con-un-agente#probar-un-agente">
    Conversar con él y revisar en las fuentes de cada respuesta que usa los documentos correctos.
  </ModuleCard>
  <ModuleCard icon="integration" title="4. Conectarlo a un canal" href="/modulos/integraciones">
    Opcional: llevarlo a WhatsApp, Telegram u otras aplicaciones.
  </ModuleCard>
</ModuleGrid>

:::tip La regla de oro
El orden de configuración es siempre **conocimiento → agente → canal**. Un agente sin conocimiento responde de forma genérica; un canal sin agente asignado no responde.
:::

Para una visión de conjunto antes de empezar, ver [Visión general](/introduccion/vision-general) y [Conceptos fundamentales](/introduccion/conceptos).

## Organización de esta documentación

| Sección | Contenido |
|---|---|
| **Introducción** | Visión general, conceptos fundamentales y navegación |
| **Uso diario** | Inicio y Artículos y novedades |
| **Conversaciones** | Chat con los agentes, colaboración y atención de WhatsApp, Telegram y otros canales |
| **Bandeja Inteligente** | Correo de las cuentas conectadas, reglas y análisis con IA |
| **Centro de Conocimiento** | Carpetas y documentos que consultan los agentes |
| **Estudio** | Agentes, especialistas, microagentes y esquemas de datos |
| **Aplicaciones integradas** | Cómo funcionan, dónde aparecen, cómo se desarrollan, se publican y se administran |
| **Administración** | Configuración (webhooks, usuarios y roles, integraciones y canales), espacios de trabajo, catálogo de integraciones, y auditoría y reportes |
| **Referencia** | Campos, permisos y glosario |
