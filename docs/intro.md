---
id: intro
title: Documentación de ConsulPoint
sidebar_label: Presentación
sidebar_position: 1
slug: /
description: "Documentación oficial de ConsulPoint, la plataforma de agentes de IA para empresas: agentes, conocimiento, canales y aplicaciones integradas."
---

# Documentación de ConsulPoint

<PageHero eyebrow="Documentación" highlights={['Agentes', 'Conocimiento', 'Canales', 'Aplicaciones integradas']}>
  **ConsulPoint** es una plataforma empresarial de inteligencia artificial que conecta agentes, conocimiento, personas y aplicaciones dentro de una organización.
</PageHero>

Esta documentación explica cada módulo de la plataforma: para qué sirve, cómo se configura y cómo se relaciona con el resto. Las guías de uso no requieren conocimientos de programación.

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

## Cómo está organizada

La documentación tiene tres pestañas, en la barra superior. Cada una tiene su propio menú.

<ModuleGrid>
  <ModuleCard icon="dashboard" title="Guía de uso" href="/introduccion/navegacion">
    Usar la plataforma en el día a día: conversar con agentes, subir documentos, crear agentes en el Estudio, atender la Bandeja Inteligente.
  </ModuleCard>
  <ModuleCard icon="settings" title="Administración" href="/control/configuracion">
    Para quien configura la organización: lo que en la plataforma está en **Configuración** (usuarios y roles, canales e integraciones), los espacios de trabajo y **Auditoría y Reportes**.
  </ModuleCard>
  <ModuleCard icon="schema" title="Desarrolladores" href="/aplicaciones-integradas/desarrollar/primera-aplicacion">
    Crear y publicar aplicaciones integradas que se muestran dentro de ConsulPoint. Requiere conocimientos de programación.
  </ModuleCard>
</ModuleGrid>

Cuando un enlace lleva a otra pestaña, lo indica con una etiqueta con su nombre, por ejemplo <TabHint label="Administración" />.

Para recorrer los módulos y saber dónde está cada uno en la interfaz, ver [Navegación](/introduccion/navegacion). Para una visión de conjunto, ver [Visión general](/introduccion/vision-general) y [Conceptos fundamentales](/introduccion/conceptos).
