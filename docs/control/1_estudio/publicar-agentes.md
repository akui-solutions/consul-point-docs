---
id: publicar-agentes
title: Publicar agentes en el catálogo
sidebar_label: Publicar agentes
sidebar_position: 5
description: Cómo una organización distribuidora publica sus agentes en el Catálogo de integraciones de ConsulPoint para que sus organizaciones los instalen, envía versiones nuevas y los retira.
---

# Publicar agentes en el catálogo

<PageMeta route="/studio/assistant/details/general/:id">organización distribuidora; crear sobre **Estudio** para publicar, editar para configurar o retirar</PageMeta>

Una **distribuidora** es una organización que lleva a otras organizaciones de ConsulPoint, sus clientes. Puede preparar un agente una vez y **publicarlo en el catálogo** para que esas organizaciones lo instalen listo para usar, sin ver sus instrucciones ni sus documentos. Cuando lo mejora, publica una versión nueva y les llega a todas.

Que una organización sea distribuidora lo configura ConsulPoint. En la plataforma, las distribuidoras tienen **Panel de Distribuidores** en el menú de usuario.

Para ver cómo lo recibe cada organización, ver [Agentes del catálogo](/control/estudio/agentes-del-catalogo).

## Qué se publica

| Se incluye | No se incluye |
|---|---|
| El agente: instrucciones, modelo, temperatura, tono, iniciadores de conversación, funciones integradas y lo que debe recordar con la [memoria](/control/estudio/memoria) | Los conectores: cada organización tendrá que conectarlos |
| Sus especialistas y los microagentes que usa | Las carpetas compartidas del Centro de Conocimiento |
| Las habilidades asignadas | Los permisos y los espacios de trabajo |
| Los esquemas de datos que usan | Las conversaciones |
| Los documentos propios del agente y de sus especialistas | Lo que el agente recuerda de cada persona |
| La imagen del agente | |

Las organizaciones que lo instalan pueden usarlo, pero no ven sus instrucciones, el contenido de sus documentos ni el de sus habilidades.

### Requisitos y límites

| | Límite |
|---|---|
| Niveles de especialistas | Hasta 10 |
| Agentes y especialistas | Hasta 30 |
| Agentes, microagentes, habilidades y esquemas en total | Hasta 100 |
| Documentos | Hasta 50, de hasta 25 MB cada uno y 200 MB en total |

- Todos los agentes tienen que usar un modelo de la plataforma: no se puede publicar con un [modelo propio](/organizacion/proveedores-de-ia) de la organización.
- Los nombres de los especialistas, habilidades y esquemas no pueden repetirse dentro del agente.
- Un microagente no se puede publicar por sí solo.
- No se puede publicar un agente que contenga agentes o habilidades instalados desde el catálogo.

### Créditos

Al publicar, los documentos del agente se preparan para que las organizaciones puedan consultarlos, y eso consume créditos de la distribuidora. En las versiones siguientes solo se cobran los documentos que cambiaron. Si no hay créditos suficientes, la publicación no se hace y no se cobra nada.

## Publicar

1. En el detalle del agente, pulsar **Publicar en el catálogo**.
2. Elegir **¿Quién puede instalarlo?**:
   - **Todas tus organizaciones**, también las que se agreguen después.
   - **Solo algunas organizaciones**, elegidas en la lista (hasta 200).
3. Elegir **¿Cómo les llegan las mejoras?**:
   - **Con aviso**: cada organización decide cuándo actualizar.
   - **Automáticas**: se aplican solas en todas las organizaciones.
4. Pulsar **Publicar**.

La publicación puede tardar unos minutos. Una bandeja abajo a la derecha muestra el avance y, al terminar, **Versión … publicada**. Si el agente usa conectores o carpetas compartidas, la bandeja indica cuáles tendrán que conectar las organizaciones o no se incluyen. Si algo falla, **Ver motivo** explica por qué.

La distribuidora sigue usando su agente original; las organizaciones reciben una copia.

## La tarjeta Publicación en el catálogo

Una vez publicado, la pestaña **General** del agente tiene la tarjeta **Publicación en el catálogo**, y la cabecera muestra su estado:

<Screenshot src="/img/estudio/tarjeta-publicacion.png" alt="Tarjeta Publicación en el catálogo en el detalle de un agente" caption="Detalle del agente → Publicación en el catálogo" />

| Estado | Significa |
|---|---|
| **En el catálogo** | Las organizaciones de la distribuidora pueden instalarlo |
| **En revisión** | Se pidió que todas las organizaciones puedan instalarlo. Mientras se revisa, solo las de la distribuidora |
| **Público** | Todas las organizaciones de ConsulPoint pueden encontrarlo e instalarlo |
| **No aprobado** | No se aprobó que sea público. Las organizaciones de la distribuidora siguen pudiendo instalarlo. La tarjeta muestra el **Motivo** |
| **Retirado** | Ya no se puede instalar. Según cómo se retiró, sigue funcionando donde estaba instalado o se desactivó |

La tarjeta muestra la **Versión** publicada y su fecha, **Quién puede instalarlo**, cómo llegan las **Mejoras** y cuántas organizaciones lo tienen instalado, con las que aún no tienen la última versión.

## Publicar una versión nueva

Los cambios que se hagan en el agente no llegan solos a las organizaciones. Cuando hay cambios, la tarjeta avisa **Hay cambios sin publicar**: el catálogo sigue ofreciendo la versión anterior hasta que se pulse **Publicar nueva versión**.

Si no hubo cambios, no se crea una versión nueva ni se cobra nada.

Cada organización recibe la versión según cómo lleguen las mejoras:

- **Con aviso**: sus administradores reciben **Nueva versión disponible** y la aplican cuando quieren.
- **Automáticas**: se aplica sola y reciben **Agente actualizado**.

Si una actualización automática falla en alguna organización (por ejemplo, porque supera un límite de su plan), la tarjeta avisa **No se pudo actualizar en … organizaciones**. **Reintentar actualizaciones** lo vuelve a intentar.

## Más acciones

En el menú de la tarjeta:

| Acción | Qué hace |
|---|---|
| **Configurar** | Cambiar quién puede instalarlo y cómo llegan las mejoras. Se aplica enseguida, sin publicar una versión nueva. El cambio en las mejoras rige desde la próxima versión |
| **Hacerlo público** | Pedir que todas las organizaciones de ConsulPoint puedan instalarlo. Lo revisa ConsulPoint; mientras tanto queda **En revisión** y se recibe un aviso al terminar la revisión |
| **Retirar del catálogo** | Ninguna organización podrá instalarlo a partir de ese momento. Ver más abajo |

### Retirar y reactivar

Al retirar un agente que ya está instalado, hay que elegir qué pasa con esas instalaciones:

| Opción | Qué pasa |
|---|---|
| **Que siga funcionando** | Las organizaciones lo siguen usando, pero ya no reciben versiones nuevas |
| **Desactivarlo** | Deja de responder en esas organizaciones |

Retirarlo cancela también una solicitud para hacerlo público. Para volver a ofrecerlo, **Reactivar en el catálogo**: las organizaciones pueden volver a instalarlo, y las que se quedaron con una versión anterior reciben la última según cómo lleguen las mejoras.

### Eliminar un agente publicado

Un agente publicado no se puede eliminar del Estudio: **Eliminar** queda desactivado con el aviso **Está publicado en el catálogo. Retíralo del catálogo antes de eliminarlo.** Una vez retirado se puede eliminar, pero ya no se podrán publicar versiones nuevas.

## Buenas prácticas

:::tip Probar antes de publicar
Conviene probar el agente en Conversaciones con preguntas reales antes de cada versión: con las mejoras automáticas, un error llega a todas las organizaciones a la vez.
:::

:::tip Avisar de los conectores
Si el agente necesita conectores, conviene indicarlo en su descripción, para que cada organización sepa qué conectar después de instalarlo.
:::
