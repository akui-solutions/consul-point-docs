---
id: suscripcion
title: Suscripción
sidebar_label: Suscripción
sidebar_position: 6
description: La suscripción de la organización en ConsulPoint, sus créditos y bonos, y cómo solicitar una suscripción nueva.
---

# Suscripción

<PageMeta route="/settings/billing">administrador</PageMeta>

En **Configuración → Suscripción** se consulta la suscripción de la organización y sus créditos, y se solicita una suscripción nueva. Las suscripciones no se pagan desde la plataforma: se **solicitan**, y el equipo de ConsulPoint se pone en contacto para activarlas.

Tiene dos apartados: **Resumen** y **Suscripciones**.

## Resumen

El resumen se divide en cuatro pestañas.

### Mi suscripción

<Screenshot src="/img/configuracion/mi-suscripcion.png" alt="Pestaña Mi suscripción en Configuración de ConsulPoint" caption="Suscripción → Resumen → Mi suscripción (datos de ejemplo)" />

Muestra la suscripción actual y su precio, mensual o anual. Si se aplicó un código de descuento, el precio original aparece tachado junto al código. Debajo se ven tres datos:

| Dato | Significado |
|---|---|
| **Créditos del periodo** | Los créditos que la suscripción da en cada ciclo |
| **Ciclo de suscripción** | **Mensual**, **Anual** o **Prueba** |
| **Créditos disponibles** | Los créditos que le quedan a la organización |

También indica cuándo se renueva la suscripción. **Ver todo** abre el detalle: el inicio y el fin del periodo, el descuento aplicado y, en **Incluye**, el máximo de cada recurso de la suscripción (o **Ilimitado**).

El uso actual frente a esos máximos se consulta en [Auditoría y Reportes](/control/auditoria-y-reportes#límites). Qué pasa al llegar a un máximo, o al quedarse sin créditos, se explica en [Créditos y límites](/organizacion/creditos-y-limites).

### Bonos de crédito

Los créditos llegan en **bonos**, y cada bono caduca en una fecha. Cada ciclo de la suscripción genera un bono con los créditos del periodo, que caduca al final del ciclo. ConsulPoint también puede asignar bonos adicionales.

La pestaña muestra cada bono con los créditos usados del total y su fecha de caducidad, y se puede filtrar por **Disponibles**, **Caducados** o **Agotados**.

<Screenshot src="/img/configuracion/bonos.png" alt="Bonos de crédito de la organización" caption="Suscripción → Resumen → Bonos de crédito" />

Al cambiar de suscripción, los bonos de la anterior se desactivan.

### Solicitudes

Las solicitudes de suscripción de la organización, con su estado: **Pendiente**, **Aprobada**, **Rechazada** o **Cancelada**. Una solicitud pendiente se puede retirar con **Cancelar solicitud**.

### Códigos de referido

Los códigos de descuento que ConsulPoint asignó a la organización, con su descuento, cuántas veces se han usado y si siguen activos.

## Suscripciones

<Screenshot src="/img/configuracion/planes.png" alt="Suscripciones disponibles en Configuración de ConsulPoint" caption="Suscripción → Suscripciones (suscripciones y precios de ejemplo)" />

Cada suscripción muestra su precio, si es mensual o anual, y lo que incluye: el máximo de cada recurso, **Ilimitado** o **No incluido**. La suscripción actual lleva la etiqueta **Actual**.

### Solicitar una suscripción

1. En la suscripción elegida, pulsar **Solicitar suscripción**.
2. Opcionalmente, escribir una **Nota para el equipo** (hasta 500 caracteres) y un **Código de descuento**. Con un código válido se ven el precio de catálogo, el descuento y el precio final.
3. Pulsar **Enviar solicitud**.

<Screenshot src="/img/configuracion/solicitar-plan.png" alt="Diálogo para solicitar una suscripción" caption="Solicitar una suscripción" maxWidth={560} />

La solicitud no es un pago. El equipo de ConsulPoint la revisa y se pone en contacto con la organización. Cuando la aprueba, los administradores reciben la notificación **Solicitud de suscripción aprobada**, la suscripción pasa a estar activa y se genera el bono de créditos del nuevo ciclo.

Solo puede haber una solicitud pendiente a la vez: para pedir otra suscripción hay que cancelar antes la que está en revisión.
