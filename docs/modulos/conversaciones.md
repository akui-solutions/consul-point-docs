---
id: conversaciones
title: Conversaciones
sidebar_label: Conversaciones
sidebar_position: 3
description: Interfaz de chat con los agentes de ConsulPoint. Fuentes del mensaje, ventana de contexto, conversaciones colaborativas y segunda conversación.
---

# Conversaciones

**Ruta:** `/conversations`

## Descripción

Interfaz de chat con los agentes de la organización. Es también el entorno de prueba recomendado antes de exponer un agente en un canal externo.

## Selección de interlocutor

El selector ofrece dos pestañas:

| Pestaña | Descripción |
|---|---|
| **Agentes** | Agentes configurados en la organización |
| **Modelos** | Modelos de IA en su configuración base |

Incluye acceso directo al Centro de Agentes para explorar agentes disponibles.

## Funcionalidades de la conversación

### Fuentes del mensaje

Muestra la información consultada por el agente para generar cada respuesta.

:::tip Uso recomendado
Verificar durante las pruebas que el agente responde a partir de la documentación vinculada y no del conocimiento genérico del modelo. Es la forma más directa de confirmar que la configuración de conocimiento es correcta.
:::

### Ventana de contexto

Indicador del volumen de conversación que el agente puede retener. Al aproximarse al límite, la interfaz muestra un aviso. Superado el límite, la información más antigua deja de considerarse.

:::info Recomendación
Iniciar una conversación nueva al cambiar de asunto. Mejora la precisión de las respuestas y reduce el consumo de tokens.
:::

### Segunda conversación

Abre una conversación paralela en la misma pantalla. Útil para comparar el comportamiento de dos agentes ante la misma consulta.

### Conversación colaborativa

Una conversación puede compartirse con otros usuarios, que pasan a participar en ella.

### Acciones sobre mensajes

Copiar respuesta · Generar audio · Adjuntar archivos

### Estado de conexión

La interfaz indica el estado en tiempo real:

| Estado | Significado |
|---|---|
| **Conectado** | Comunicación activa |
| **Conectando** | Estableciendo comunicación |
| **Reconectando** | Restableciendo tras una interrupción |
| **Error de conexión** | Fallo en la comunicación |
| **Tiempo de espera agotado** | Sin respuesta dentro del plazo |

## Herramientas de desarrollador

Panel opcional con información de depuración y estado del sistema, destinado a diagnóstico técnico.

## Protocolo de prueba de un agente

Antes de conectar un agente a un canal externo, se recomienda verificar:

| Prueba | Comportamiento esperado |
|---|---|
| Consulta cubierta por la documentación | Responde correctamente y cita fuentes |
| Consulta no cubierta | Indica que no dispone del dato, sin deducirlo |
| Consulta fuera de su ámbito | Deriva según lo definido en sus instrucciones |
| Consulta ambigua | Solicita aclaración |
