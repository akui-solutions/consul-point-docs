---
id: campos
title: Referencia de campos
sidebar_label: Referencia de campos
sidebar_position: 1
description: Tabla de referencia de todos los campos de formulario de ConsulPoint con sus tipos, obligatoriedad y restricciones.
---

# Referencia de campos

## Formulario de agente

Detalle y contexto de cada campo en [Crear un agente](/control/estudio/crear-un-agente) y [Microagentes](/control/estudio/microagentes).

| Campo | Obligatorio | Restricción |
|---|---|---|
| Tipo de agente | Sí | No se puede cambiar tras la creación |
| Nombre | Sí | 3–50 caracteres, único en la organización |
| Descripción | Sí | Máx. 400 caracteres |
| Imagen | No | Solo agentes. JPG, PNG o WEBP, máx. 500 KB |
| Nombre técnico | Solo especialistas | Máx. 20 caracteres: letras, números y guion bajo |
| Descripción técnica | Solo especialistas | Máx. 10.000 caracteres |
| Instrucciones del sistema | Sí | Máx. 50.000 caracteres; en microagentes, máx. 20.000 |
| Tono de comunicación | No | Solo agentes. Máx. 3 |
| Iniciadores de conversación | No | Solo agentes. Máx. 5, de 3–150 caracteres |
| Capacidades | No | Los especialistas solo admiten Acceso al centro de conocimiento. Los microagentes no tienen |
| Modelo | Sí | — |
| Temperatura | Sí | 0–1, por defecto 0 |
| Documentos de conocimiento | No | PDF, DOCX, ODT o TXT, máx. 30 MB por archivo |
| Tipo de microagente | Solo microagentes | No se puede cambiar tras la creación |
| Instrucción de ejecución | Solo microagentes | Máx. 20.000 caracteres |
| Esquema de respuesta | Solo microagentes con esquema | Al menos 1 propiedad, máx. 4 niveles de anidamiento |
| Ejemplo de respuesta | Solo microagentes con esquema | Obligatorio |

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
