---
id: problemas-frecuentes
title: Problemas frecuentes de Conversaciones
sidebar_label: Problemas frecuentes
sidebar_position: 5
description: Soluciones a los problemas más habituales en Conversaciones de ConsulPoint.
---

# Problemas frecuentes

## El agente

| Síntoma | Causa y solución |
|---|---|
| Responde de forma genérica, sin usar los documentos | Revisar **Ver fuentes**. Si no hay fuentes, ver [Problemas frecuentes del Estudio](/control/estudio/problemas-frecuentes#el-agente-responde-de-forma-genérica-sin-usar-los-documentos) |
| No aparece un agente al iniciar la conversación | No se tiene acceso a él. Lo da un administrador, en la pestaña **Acceso** del agente |
| **Este agente ya no está disponible** | Es un agente del catálogo que quien lo publica retiró y desactivó. El mensaje no se envía y la conversación solo se puede leer. Ver [Agentes del catálogo](/control/estudio/agentes-del-catalogo#si-lo-retiran-del-catálogo) |
| No se puede cambiar de agente | El agente queda fijado con el primer mensaje. Abrir una conversación nueva |
| No aparece **Búsqueda web**, **Adjuntar archivos** o **Dictar** | El agente no tiene esa función integrada. Se activa en el Estudio, en la pestaña **Capacidades** del agente |
| **La respuesta se interrumpió** | Volver a enviar el mensaje |
| **La ventana de contexto está casi llena** | Abrir una conversación nueva |
| Los agentes dejan de responder | Se acabaron los créditos de la organización. Revisar el consumo |
| No aparece **Memoria del agente** | El agente no tiene memoria, o la conversación está compartida con otras personas. Ver [Lo que recuerda el agente](/conversaciones/conversar-con-un-agente#lo-que-recuerda-el-agente) |
| **Memoria llena** en una respuesta | Lo que recuerda el agente llegó a su límite. En **Memoria del agente**, **Editar** y borrar lo que ya no sirva |
| **Memoria sin actualizar** en una respuesta | El agente no pudo guardar algo. Pedírselo de nuevo más tarde |
| **La memoria de los agentes no está disponible en este momento** | Intentarlo más tarde |
| **Este agente tiene la memoria desactivada, así que no se puede editar** | Quien administra el agente la desactivó. Lo que recuerda se puede seguir viendo y borrar |

## Archivos

| Síntoma | Causa y solución |
|---|---|
| Un archivo **no se puede adjuntar en esta conversación** | Su tipo no se admite en ese canal |
| **Supera el tamaño permitido** | En conversaciones internas, hasta 10 MB por archivo |
| No deja adjuntar más | Hasta 5 archivos por mensaje |
| **Archivos no soportados por** un proveedor | El modelo del agente no lee ese tipo de archivo. Convertirlo a PDF o texto |

## Conversaciones

| Síntoma | Causa y solución |
|---|---|
| El botón **Nueva conversación** está desactivado | La organización no tiene un plan activo, o el rol no permite crear conversaciones |
| No aparece **Compartir conversación** | La conversación todavía no tiene mensajes, o el rol no permite editarla |
| No se encuentra a una persona al compartir | No tiene acceso al agente de la conversación |
| Una conversación desapareció de la lista | Se eliminó, o se dejó de compartir |
| Dentro de un espacio de trabajo no se ven otras conversaciones | Solo se ven las de ese espacio |

## Canales

| Síntoma | Causa y solución |
|---|---|
| No se ven las conversaciones de un WhatsApp o Telegram | No se forma parte del equipo de esa integración |
| **No tienes ninguna conexión de** ese canal | No hay ninguna integración de ese canal. Ver [Integraciones y canales](/modulos/integraciones) |
| No se puede escribir en una conversación | La está atendiendo otra persona |
| El agente no responde en un canal | Alguien tomó el control o la conversación está atendida. **Activar agente** o **Marcar como resuelta** |
