---
id: conectores
title: Conectores
sidebar_label: Conectores
sidebar_position: 9
description: Qué son los conectores de ConsulPoint, cómo instalarlos desde el Catálogo de integraciones y cómo usarlos en los agentes.
---

# Conectores

<PageMeta route="/store/apps · /settings/connectors">administrador</PageMeta>

Un **conector** da a los agentes acceso a una herramienta externa durante una conversación, por ejemplo para consultar o registrar datos en otro servicio. No es lo mismo que una [integración](/modulos/integraciones): una integración conecta un canal por el que llegan las conversaciones; un conector amplía lo que el agente puede hacer dentro de ellas.

## Instalar un conector

Los conectores no se crean a mano: se instalan desde el [Catálogo de integraciones](/organizacion/catalogo-de-aplicaciones), en la pestaña **Conectores**. Una vez instalado, el conector está disponible para toda la organización.

ConsulPoint también puede activar un conector para la organización. Esos aparecen como **Asignado a tu organización** y no se pueden desinstalar desde el catálogo.

El plan fija el número máximo de conectores de la organización. Ver [Créditos y límites](/organizacion/creditos-y-limites#límites-del-plan).

## Configurar y autorizar

Los conectores instalados aparecen en **Configuración → Conectores**, junto con las integraciones, con la etiqueta **Conector**.

- **Configurar** abre **Configuración del conector**, con los datos técnicos que pida ese conector (dirección, cabeceras, variables o argumentos). Solo hace falta si el proveedor del conector lo indica. Guardar sobrescribe la configuración anterior de la organización.
- Algunos conectores piden autorizar una cuenta del servicio externo con **Autorizar con OAuth**. En esos casos, **cada persona** autoriza su propia cuenta, y puede **Reconectar** o **Desconectar** después.

## Usar un conector en un agente

En el detalle del agente, la pestaña **Conectores** muestra los que puede usar en sus conversaciones. Solo los administradores pueden cambiarlos, con **Gestionar conectores**.

Para cada conector se elige si queda **Activo al iniciar**: si lo está, arranca encendido en cada conversación, y quien conversa puede apagarlo. Ver [Agentes](/control/estudio/agentes#conectores).

<Screenshot src="/img/configuracion/conectores-agente.png" alt="Conectores de un agente en el Estudio" caption="Estudio → detalle de un agente → Conectores" />

## Desinstalar

Desde el catálogo, el conector **Dejará de estar disponible para tu organización**, y se puede volver a instalar después. Los agentes que lo tenían lo muestran como **No disponible** y lo quitan al guardar.
