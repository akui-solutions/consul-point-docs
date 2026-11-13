---
id: problemas-frecuentes
title: Problemas frecuentes del Estudio
sidebar_label: Problemas frecuentes
sidebar_position: 7
description: Soluciones a los problemas más habituales al crear y usar agentes, especialistas y microagentes en el Estudio de ConsulPoint.
---

# Problemas frecuentes

## El agente responde de forma genérica, sin usar los documentos

| Causa | Solución |
|---|---|
| No tiene la función integrada **Acceso al centro de conocimiento** | En el detalle del agente, pestaña **Capacidades**, **Gestionar funciones** y activarla |
| Las carpetas no están compartidas con el agente | Compartirlas desde el Centro de Conocimiento. Ver [Conocimiento de los agentes](/centro-de-conocimiento/conocimiento-de-los-agentes) |
| Los documentos aún se están preparando, o falló la preparación | Revisar **Disponible para agentes** en cada archivo, o el estado en la pestaña **Documentos** del agente |
| Quien conversa no tiene acceso a esas carpetas | El agente solo busca en carpetas a las que también tiene acceso la persona que pregunta |
| Las instrucciones no le dicen que use la documentación | Indicarlo en **Instrucciones del sistema**, por ejemplo: "Responde siempre a partir de la documentación disponible" |

## El agente no consulta a un especialista

| Causa | Solución |
|---|---|
| El especialista no está asignado al agente | Pestaña **Especialistas** del agente → **Asignar especialista** |
| La **Descripción técnica** es vaga o no cubre ese caso | Reescribirla indicando con precisión cuándo consultarlo. Ver [Especialistas](/control/estudio/especialistas#crear-un-especialista) |
| Varios especialistas tienen descripciones parecidas | Delimitar mejor el tema de cada uno |

## No se puede crear

| Síntoma | Causa |
|---|---|
| El botón **Nuevo agente** está desactivado o no aparece | No hay un plan activo, o el rol no tiene permiso de creación sobre el Estudio |
| Al crear, la plataforma avisa de que se alcanzó el límite del plan | El plan tiene un número máximo de agentes, que incluye especialistas y microagentes. Eliminar los que no se usan o ampliar el plan |
| **Ya existe un agente llamado "…" en tu organización** | El nombre ya lo usa otro agente o microagente. Elegir otro |
| No aparece la opción **Personas y roles concretos** en el acceso | Solo está disponible para agentes, no para especialistas |
| No aparece la pestaña **Biblioteca de esquemas** | Con los roles predeterminados, es solo para administradores |
| **Tu plan actual no incluye modelos propios** | Los modelos propios de la organización (**Custom**) dependen del plan |

## No se puede eliminar

| Síntoma | Causa y solución |
|---|---|
| **Eliminar** está desactivado en un agente | El agente ya tiene conversaciones. Los agentes con conversaciones no se pueden eliminar |
| No aparece **Eliminar** | Con los roles predeterminados, solo los administradores eliminan agentes |
| Un descriptor de imágenes no se deja eliminar | Alguna carpeta lo usa en su **Conversión de PDF**. Cambiar antes el descriptor de esas carpetas |

## Microagentes

| Síntoma | Causa y solución |
|---|---|
| El microagente no aparece al configurar una carpeta de extracción | Solo se ofrecen los de tipo **Extractor de documentos**. El tipo no se puede cambiar: crear uno nuevo del tipo correcto |
| El microagente no aparece en las reglas de la Bandeja Inteligente | Solo se ofrecen los de tipo **Lector de correo** y **Email a Markdown** |
| Los datos extraídos salen incompletos o con avisos | Revisar la instrucción de ejecución y las descripciones de los campos del esquema. Ver [Microagentes](/control/estudio/microagentes#buenas-prácticas) |
| Se creó un segundo analizador de conversaciones y no se usa | La plataforma usa el primero creado en la organización |
| No se puede editar una versión de un esquema | Está en uso. Crear una **Nueva versión** |
