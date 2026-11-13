---
id: creditos-y-limites
title: Créditos y límites
sidebar_label: Créditos y límites
sidebar_position: 7
description: Qué pasa en ConsulPoint cuando la organización no tiene un plan activo, se queda sin créditos o llega a un límite de su plan, y qué avisos se ven.
---

# Créditos y límites

Qué pasa cuando la organización no tiene un plan activo, se queda sin créditos o llega a un límite de su plan, y qué avisos ve cada persona. El plan y los créditos se consultan en [Suscripción](/organizacion/suscripcion).

## Sin plan activo

La organización se queda sin plan activo si no tiene ninguno asignado, si terminó su periodo de prueba o si venció su suscripción. Los planes de pago tienen **3 días de gracia** tras el fin del periodo, en los que se puede seguir trabajando con normalidad.

Sin plan activo, la organización queda en **modo consulta**: todo lo que ya existe se puede ver, pero no se puede crear ni modificar nada. Los botones de crear aparecen desactivados con el aviso **Tu organización necesita un plan activo para hacer esto.**, y cualquier cambio se rechaza con **Se necesita un plan activo**. Solicitar un plan sigue siendo posible.

En la parte superior de la plataforma aparece un aviso según la situación:

| Situación | Aviso |
|---|---|
| Sin plan | **Elige un plan para empezar** |
| Terminó la prueba | **Tu prueba de *plan* terminó** |
| Venció la suscripción | **Tu suscripción a *plan* venció** |
| En los días de gracia | **Tu plan vence el *fecha***: se puede seguir trabajando con normalidad hasta entonces |
| Hay una solicitud de plan en revisión | **Tu solicitud de plan está en revisión** |

Los administradores ven el botón **Ver planes**; el resto de personas, que hablen con un administrador.

## Sin créditos

Los créditos pagan el uso de IA: las respuestas de los agentes, la preparación de archivos, los análisis y la voz. Una operación en curso nunca se corta por falta de créditos: si gasta más de lo que queda, la diferencia se descuenta del siguiente bono.

Cuando los créditos llegan a cero empieza un **periodo de gracia corto**. Los administradores reciben el aviso **Créditos agotados**, con la fecha en que termina. Pasado ese plazo, deja de funcionar lo que consume créditos:

| Módulo | Qué se detiene | Aviso |
|---|---|---|
| Conversaciones | Las respuestas de los agentes con modelos de ConsulPoint | **No hay créditos disponibles para realizar esta consulta.** |
| Centro de Conocimiento | Preparar archivos para los agentes | **No quedan créditos para preparar este archivo.** |
| Bandeja Inteligente | Los análisis con IA de los correos | **Se detuvo por falta de créditos.** |

Los agentes que usan un **modelo propio** de la organización siguen respondiendo, porque esos modelos no consumen créditos.

Los créditos vuelven con el bono del siguiente ciclo o con un bono adicional asignado por ConsulPoint.

## Límites del plan

Cada plan fija un máximo para recursos como usuarios, roles, agentes, conversaciones, carpetas, almacenamiento, espacios de trabajo, integraciones, conectores, webhooks, claves de API, etiquetas, contactos o esquemas de datos. Un recurso sin máximo aparece como **Ilimitado**.

Al llegar a un máximo solo se bloquea crear más; lo que ya existe se conserva. La plataforma muestra **Llegaste al tope de tu plan**, con la opción **Mejorar plan**, que lleva a [Planes](/organizacion/suscripcion#planes). Antes de llegar, los administradores reciben el aviso **Límite casi alcanzado**.

El uso de cada recurso frente a su máximo se ve en [Auditoría y Reportes](/control/auditoria-y-reportes).

### Modelos propios

Los modelos de IA propios de la organización solo se pueden registrar si el plan los incluye, y hasta el máximo del plan. Si la organización cambia a un plan que no los incluye, los modelos ya registrados se conservan, pero no se pueden usar en agentes hasta que el plan vuelva a incluirlos.
