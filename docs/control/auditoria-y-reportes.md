---
id: auditoria-y-reportes
title: Auditoría y Reportes
sidebar_label: Auditoría y Reportes
sidebar_position: 1
description: Control de consumo, actividad y registros en Consul Point. Métricas de tokens, créditos y actividad por usuario.
---

# Auditoría y Reportes

**Ruta:** `/consumption`

## Descripción

Módulo de control del consumo, la actividad y los registros del sistema.

## Secciones

| Pestaña | Contenido |
|---|---|
| **Estadísticas** | Resumen y tendencias de consumo |
| **Gestión de Tokens** | Consumo detallado por usuario |
| **Actividad de Usuarios** | Uso de la plataforma por persona |
| **Bonos de Consumo** | Créditos disponibles |
| **Historial de Conversaciones** | Registro de conversaciones |
| **Sistema de Logs** | Registros técnicos del sistema |

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

Resumen de consumo mensual, tendencia semanal, distribución entre tokens de entrada y salida, y saldo global de la organización.

### Gestión de Tokens

Desglose del consumo por usuario, con tokens de entrada, salida y total del mes.

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
