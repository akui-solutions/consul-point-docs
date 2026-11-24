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
| Los documentos aún se están preparando, o falló la preparación | Revisar **Disponibilidad para agentes** en cada archivo, o el estado en la pestaña **Documentos** del agente |
| Quien conversa no tiene acceso a esas carpetas | El agente solo busca en carpetas a las que también tiene acceso la persona que pregunta |
| La búsqueda no encuentra el fragmento correcto: fichas parecidas, procedimientos cortados, siglas propias | Ajustar la [búsqueda de los agentes](/centro-de-conocimiento/busqueda-de-los-agentes) de la carpeta |
| Las instrucciones no le dicen que use la documentación | Indicarlo en **Instrucciones del sistema**, por ejemplo: "Responde siempre a partir de la documentación disponible" |

## El agente no consulta a un especialista

| Causa | Solución |
|---|---|
| El especialista no está asignado al agente | Pestaña **Especialistas** del agente → **Asignar especialista** |
| La **Descripción técnica** es vaga o no cubre ese caso | Reescribirla indicando con precisión cuándo consultarlo. Ver [Especialistas](/control/estudio/especialistas#crear-un-especialista) |
| Varios especialistas tienen descripciones parecidas | Delimitar mejor el tema de cada uno |

## El agente no recuerda lo que se le dijo

| Causa | Solución |
|---|---|
| El agente no tiene la memoria activada | Pestaña **Memoria** del agente → **Activar memoria**. Ver [Memoria de los agentes](/control/estudio/memoria) |
| La conversación es compartida, un grupo de Telegram o un mensaje del equipo en un canal | La memoria solo se usa en conversaciones directas con una sola persona. Ver [Dónde se usa](/control/estudio/memoria#dónde-se-usa) |
| Es otro agente | Cada agente tiene su propia memoria de cada persona |
| El dato no figura en **Qué debe recordar** o es pasajero | Añadirlo a **Qué debe recordar** en la pestaña **Memoria** |
| La respuesta muestra **Memoria llena** o **Memoria sin actualizar** | Ver [Lo que recuerda el agente](/conversaciones/conversar-con-un-agente#lo-que-recuerda-el-agente) |

## No aparece la pestaña Memoria o no se puede activar

| Causa | Solución |
|---|---|
| Es un especialista o un microagente | Solo los agentes tienen memoria |
| Es un agente del catálogo | La memoria la decide quien lo publica. Ver [Agentes del catálogo](/control/estudio/memoria#agentes-del-catálogo) |
| Aparece **Quien administra el agente puede activarla.** | Hace falta permiso de editar sobre el **Estudio** |
| Al activarla o guardar, la plataforma no lo permite | En el agente hace falta el nivel **Puede editar** o superior. Lo da un administrador en la pestaña **Acceso** |
| No aparece **Borrar la memoria de una persona…** | Es solo para administradores |

## No se puede crear

| Síntoma | Causa |
|---|---|
| El botón **Nuevo agente** está desactivado o no aparece | No hay una suscripción activa, o el rol no tiene permiso de creación sobre el Estudio |
| Al crear, la plataforma avisa de que se alcanzó el límite de la suscripción | La suscripción tiene un número máximo de agentes, que incluye especialistas y microagentes. Eliminar los que no se usan o ampliar la suscripción |
| **Ya existe un agente llamado "…" en tu organización** | El nombre ya lo usa otro agente o microagente. Elegir otro |
| No aparece la opción **Personas y roles concretos** en el acceso | Solo está disponible para agentes, no para especialistas |
| No aparece la pestaña **Biblioteca de esquemas** | Con los roles predeterminados, es solo para administradores |
| **Tu suscripción actual no incluye modelos propios** | Los modelos propios de la organización (**Custom**) dependen de la suscripción |

## No se puede eliminar

| Síntoma | Causa y solución |
|---|---|
| **Eliminar** está desactivado en un agente | El agente ya tiene conversaciones: los agentes con conversaciones no se pueden eliminar. O está publicado en el catálogo (**Está publicado en el catálogo. Retíralo del catálogo antes de eliminarlo.**): retirarlo primero. Ver [Publicar agentes](/control/estudio/publicar-agentes#eliminar-un-agente-publicado) |
| No aparece **Eliminar** | Con los roles predeterminados, solo los administradores eliminan agentes |
| Un descriptor de imágenes no se deja eliminar | Alguna carpeta lo usa en su **Conversión de PDF**. Cambiar antes el descriptor de esas carpetas |
| **Borrar del catálogo** está desactivado | El agente publicado está instalado en alguna organización; la opción indica en cuántas. Se puede borrar cuando ya no esté instalado en ninguna |

## Agentes del catálogo

| Síntoma | Causa y solución |
|---|---|
| El agente muestra **Inactivo** y no responde | Se desactivó en la organización. Pulsar **Activar** en la cabecera de su detalle. Ver [Activar y desactivar](/control/estudio/agentes-del-catalogo#activar-y-desactivar) |
| En sus conversaciones aparece **Este agente ya no está disponible** | El agente está desactivado, se desinstaló, o quien lo publica lo retiró y lo desactivó. Ver [Agentes del catálogo](/control/estudio/agentes-del-catalogo) |
| No aparecen **Activar** ni **Desactivar** | Solo existen en los agentes del catálogo. Hace falta permiso de editar sobre el **Estudio** y el nivel **Puede editar** o superior en el agente; con el acceso con el que se instala, solo los administradores |

## Microagentes

| Síntoma | Causa y solución |
|---|---|
| El microagente no aparece al configurar una carpeta de extracción | Solo se ofrecen los de tipo **Extractor de documentos**. El tipo no se puede cambiar: crear uno nuevo del tipo correcto |
| El microagente no aparece en las reglas de la Bandeja Inteligente | Solo se ofrecen los de tipo **Lector de correo** y **Email a Markdown** |
| Los datos extraídos salen incompletos o con avisos | Revisar la instrucción de ejecución y las descripciones de los campos del esquema. Ver [Microagentes](/control/estudio/microagentes#buenas-prácticas) |
| Se creó un segundo analizador de conversaciones y no se usa | La plataforma usa el primero creado en la organización |
| No se puede editar una versión de un esquema | Está en uso. Crear una **Nueva versión** |
