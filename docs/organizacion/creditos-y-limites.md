---
id: creditos-y-limites
title: Créditos y límites
sidebar_label: Créditos y límites
sidebar_position: 7
description: Qué pasa en ConsulPoint cuando la organización no tiene una suscripción activa, se queda sin créditos o llega a un límite de su suscripción, y qué avisos se ven.
---

# Créditos y límites

Qué pasa cuando la organización no tiene una suscripción activa, se queda sin créditos o llega a un límite de su suscripción, y qué avisos ve cada persona. La suscripción y los créditos se consultan en [Suscripción](/organizacion/suscripcion).

## Sin suscripción activa

La organización se queda sin suscripción activa si no tiene ninguna asignada, si terminó su periodo de prueba o si venció su suscripción. Las suscripciones de pago tienen **3 días de gracia** tras el fin del periodo, en los que se puede seguir trabajando con normalidad.

Sin suscripción activa, la organización queda en **modo consulta**: todo lo que ya existe se puede ver, pero no se puede crear ni modificar nada. Los botones de crear aparecen desactivados con el aviso **Tu organización necesita una suscripción activa para hacer esto.**, y cualquier cambio se rechaza con **Se necesita una suscripción activa**. Solicitar una suscripción sigue siendo posible.

En la parte superior de la plataforma aparece un aviso según la situación:

| Situación | Aviso |
|---|---|
| Sin suscripción | **Elige una suscripción para empezar** |
| Terminó la prueba | **Tu prueba de *nombre* terminó** |
| Venció la suscripción | **Tu suscripción a *nombre* venció** |
| En los días de gracia | **Tu suscripción vence el *fecha***: se puede seguir trabajando con normalidad hasta entonces |
| Hay una solicitud de suscripción en revisión | **Tu solicitud de suscripción está en revisión** |

Los administradores ven el botón **Ver suscripciones**; el resto de personas, que hablen con un administrador.

## Sin créditos

Los créditos pagan el uso de IA: las respuestas de los agentes, la preparación de archivos, los análisis y la voz. Una operación en curso nunca se corta por falta de créditos: si gasta más de lo que queda, la diferencia se descuenta del siguiente bono.

Cuando los créditos llegan a cero empieza un **periodo de gracia corto**. Los administradores reciben el aviso **Créditos agotados**, con la fecha en que termina. Pasado ese plazo, deja de funcionar lo que consume créditos:

| Módulo | Qué se detiene | Aviso |
|---|---|---|
| Conversaciones | Las respuestas de los agentes con modelos de ConsulPoint | **No hay créditos disponibles para realizar esta consulta.** |
| Centro de Conocimiento | Preparar archivos para los agentes | **No quedan créditos para preparar este archivo.** |
| Bandeja Inteligente | Los análisis con IA de los correos | **Se detuvo por falta de créditos.** |

Si el agente tiene [memoria](/control/estudio/memoria#créditos), lo que recuerda de la persona se envía con cada mensaje y forma parte de su consumo.

Los agentes que usan un **modelo propio** de la organización siguen respondiendo, porque esos modelos no consumen créditos.

Los créditos vuelven con el bono del siguiente ciclo o con un bono adicional asignado por ConsulPoint.

## Límites de la suscripción

Cada suscripción fija un máximo para recursos como usuarios, roles, agentes, conversaciones, carpetas, almacenamiento, espacios de trabajo, integraciones, conectores, webhooks, claves de API, etiquetas, contactos, esquemas de datos o habilidades. Un recurso sin máximo aparece como **Ilimitado**.

Al llegar a un máximo solo se bloquea crear más; lo que ya existe se conserva. La plataforma muestra **Llegaste al tope de tu suscripción**, con la opción **Mejorar suscripción**, que lleva a [Suscripciones](/organizacion/suscripcion#suscripciones). Antes de llegar, los administradores reciben el aviso **Límite casi alcanzado**.

El uso de cada recurso frente a su máximo se ve en [Auditoría y Reportes](/control/auditoria-y-reportes#límites).

### Modelos propios

Los modelos de IA propios de la organización solo se pueden registrar si la suscripción los incluye, y hasta el máximo que fije. Si la organización cambia a una suscripción que no los incluye, los modelos ya registrados se conservan, pero no se pueden usar en agentes hasta que la suscripción vuelva a incluirlos.
