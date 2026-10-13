---
id: auditoria-y-reportes
title: Auditoría y Reportes
sidebar_label: Auditoría y Reportes
sidebar_position: 1
description: Control del consumo de créditos y de la actividad de los usuarios en ConsulPoint.
---

# Auditoría y Reportes

**Ruta:** `/consumption`

## Descripción

Módulo de control del consumo de créditos de la plataforma y de la actividad de los usuarios.

<Screenshot src="/img/modulos/auditoria-y-reportes.png" alt="Pantalla de Auditoría y Reportes en ConsulPoint" caption="Pantalla de Auditoría y Reportes" />

## Secciones

| Pestaña | Contenido |
|---|---|
| **Estadísticas** | Créditos de la organización, consumo del usuario y límites de la suscripción |
| **Actividad de Usuarios** | Uso de la plataforma por persona |

## Métricas

| Métrica | Definición |
|---|---|
| **Tokens de entrada** | Consumidos por las consultas y textos enviados |
| **Tokens de salida** | Consumidos por las respuestas generadas |
| **Créditos consumidos** | Consumo del periodo en créditos |
| **Créditos restantes** | Saldo disponible |
| **Progreso del límite mensual** | Porcentaje consumido del límite |
| **Días restantes** | Días hasta el cierre del periodo |

## Vistas de análisis

### Estadísticas

- **Créditos de la organización:** créditos disponibles, créditos usados y porcentaje consumido.
- **Consumo del usuario:** créditos usados en el mes, conversaciones y mensajes enviados.
- **Límites de la suscripción:** uso actual frente al máximo incluido en la suscripción (conversaciones, almacenamiento, agentes, usuarios, roles, carpetas, webhooks, etiquetas y modelos de IA propios).

### Actividad de Usuarios

Total de chats, total de mensajes y créditos consumidos por persona.

## Exportación

Los registros admiten filtrado por estado, nivel, tipo de evento y rango de fechas, con **exportación** de los resultados y descarga de informes de consumo.

## Optimización del consumo

:::tip Reducir el gasto de tokens
- Asignar modelos de mayor capacidad solo donde la calidad lo justifique; los modelos ligeros son adecuados para tareas simples de alto volumen.
- Unas instrucciones del sistema precisas reducen las reformulaciones y, con ellas, el consumo.
- Iniciar conversaciones nuevas al cambiar de asunto evita arrastrar contexto innecesario.
- Vincular a cada agente únicamente las carpetas pertinentes a su función.
:::
