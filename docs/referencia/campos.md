---
id: campos
title: Referencia de campos
sidebar_label: Referencia de campos
sidebar_position: 1
description: Tabla de referencia de todos los campos de formulario de Consul Point con sus tipos, obligatoriedad y restricciones.
---

# Referencia de campos

## Formulario de agente

| Campo | Tipo | Obligatorio | Restricción |
|---|---|---|---|
| Tipo de agente | Selección | Sí | Inmutable tras creación |
| Nombre | Texto | Sí | 3–50 car., sin caracteres especiales |
| Descripción | Texto | Sí | Máx. 300 car. |
| Categorías | Selección múltiple | Sí | Mínimo 1 |
| Imagen | Archivo | No | JPG, PNG, WEBP |
| Nombre técnico | Texto | Solo Especialistas | Máx. 20 car. |
| Descripción técnica | Texto | Solo Especialistas | — |
| Tono | Selección múltiple | No | Máx. 3 |
| Instrucciones del sistema | Texto largo | Sí | Máx. 4.000 car. |
| Instrucción de ejecución | Texto largo | Solo Micro Agentes | Máx. 5.000 car. |
| Iniciadores | Lista | No | Máx. 5, de 3–150 car. |
| Capacidades | Selección múltiple | No | — |
| Modelo | Selección | Sí | — |
| Temperatura | Numérico | Sí | 0–1 |
| Esquema JSON | JSON | Solo Micro Agentes | Objeto válido con propiedades |

## Formulario de webhook

| Campo | Obligatorio | Restricción |
|---|---|---|
| Nombre | Sí | Longitud mínima y máxima definidas |
| URL | Sí | URL válida |
| Descripción | No | Longitud mínima y máxima definidas |
| Eventos | Sí | Mínimo uno |
| Tipo | Sí | Síncrono, Asíncrono o Cola |

## Formulario de integración

| Campo | Obligatorio | Notas |
|---|---|---|
| Nombre | Sí | — |
| Propósito / Descripción | Sí | — |
| Agente de IA | Sí | Agente que atiende el canal |
| Usuario responsable | Sí | — |
| Equipo | No | Mediante *Gestionar asignación* |
