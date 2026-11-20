---
id: agentes-del-catalogo
title: Agentes del catálogo
sidebar_label: Agentes del catálogo
sidebar_position: 4
description: Cómo instalar un agente ya hecho desde el Catálogo de integraciones de ConsulPoint, qué se puede hacer con él, cómo se actualiza y qué pasa al desinstalarlo.
---

# Agentes del catálogo

<PageMeta route="/store/agents">ver sobre **Estudio** para verlos; crear para instalarlos y actualizarlos; eliminar para desinstalarlos</PageMeta>

Además de crear agentes propios, la organización puede instalar **agentes ya hechos** desde la pestaña **Agentes** del [Catálogo de integraciones](/organizacion/catalogo-de-aplicaciones). Los publican ConsulPoint y, si la organización trabaja con una distribuidora, también esa distribuidora.

Un agente del catálogo llega listo para usar: con sus instrucciones, sus documentos, sus especialistas y sus habilidades. La organización lo usa, pero no lo edita: quien lo publica lo mantiene y envía las versiones nuevas.

**Casos de uso:** un agente de atención al cliente preparado por la distribuidora para todas sus organizaciones; un asistente especializado en una normativa, con su documentación incluida.

## Encontrar un agente

La pestaña **Agentes** del catálogo muestra los agentes disponibles para la organización, con buscador. Cada tarjeta indica:

- quién lo publica (**De …**), y si es **Destacado**;
- **Asignado por tu distribuidor** o **Asignado a tu organización**, si alguien lo instaló para la organización;
- la versión y una descripción;
- qué incluye además del agente: especialistas, microagentes, habilidades, esquemas de datos y documentos.

<Screenshot src="/img/catalogo/catalogo-agentes.png" alt="Pestaña Agentes del Catálogo de integraciones de ConsulPoint" caption="Catálogo de integraciones → Agentes (agentes de ejemplo)" />

Al pulsar la tarjeta se abre el detalle, con la versión, la categoría, **Para empezar** (ejemplos de preguntas) y **Qué incluye**.

<Screenshot src="/img/catalogo/detalle-agente-catalogo.png" alt="Detalle de un agente en el Catálogo de integraciones" caption="Detalle de un agente del catálogo" maxWidth={600} />

## Instalar

1. Pulsar **Instalar** en la tarjeta o en el detalle.
2. En **Instalar agente**, revisar lo que se va a crear: **Este agente**, sus especialistas, microagentes, habilidades y esquemas de datos. Los marcados **Opcional** se pueden quitar.
3. Si un nombre ya existe en la organización, se propone otro, que se puede cambiar.
4. Elegir el **Modelo de IA** con el que responderá el agente. Por defecto, el que eligió quien lo publica.
5. Pulsar **Instalar agente**.

Al terminar aparece **Agente instalado**, y el agente ya está en el Estudio.

| Situación | Qué pasa |
|---|---|
| Hay que elegir un modelo de IA | Solo un administrador puede hacerlo. Si no lo es, la ventana pide que lo haga un administrador |
| La instalación supera un límite de la suscripción | La ventana lo indica (**Se supera el límite de tu suscripción**) con lo que ocupa cada tipo de recurso. Los agentes, especialistas y microagentes cuentan como agentes. Ver [Créditos y límites](/organizacion/creditos-y-limites#límites-de-la-suscripción) |
| El agente usa conectores | Los conectores no vienen con el agente. Hay que instalarlos y conectarlos en la organización. Ver [Conectores](/organizacion/conectores) |

## En el Estudio

Un agente instalado aparece en el Estudio con la marca **Del catálogo**: se puede usar, pero no editar.

<Screenshot src="/img/estudio/agente-del-catalogo.png" alt="Detalle de un agente del catálogo en el Estudio de ConsulPoint" caption="Un agente del catálogo en el Estudio" />

| Se puede | No se puede |
|---|---|
| Conversar con él, también desde los canales y la API | Editarlo ni eliminarlo desde el Estudio |
| Decidir quién lo usa, en la pestaña **Acceso** | Ver sus instrucciones ni el contenido de sus documentos |
| Activar o desactivar sus habilidades | Editar sus habilidades ni ver su contenido |
| Compartir con él carpetas del [Centro de Conocimiento](/centro-de-conocimiento/conocimiento-de-los-agentes) y asignarle conectores | Cambiar su modelo, sus especialistas ni su memoria |

El detalle del agente tiene menos pestañas:

| Pestaña | Contenido |
|---|---|
| **General** | La información del agente, **Instalado por**, la tarjeta **Qué puede hacer** (sus funciones, especialistas y habilidades) y **Documentos**, solo con los nombres |
| **Conectores** | Las herramientas externas que puede usar |
| **Acceso** | Quién lo usa. El único nivel es **Puede usar** |
| **Consultas por API** | Las consultas hechas con una [clave de API](/organizacion/claves-de-api) |

**Ver en el catálogo** lleva a su ficha en la pestaña **Instaladas** del catálogo, donde se actualiza y se desinstala.

Las habilidades que vienen con el agente muestran el aviso **Esta habilidad viene con un agente del catálogo**: se pueden activar o desactivar, pero su contenido está protegido. Se actualizan y se quitan junto con el agente.

### En las conversaciones

El agente responde igual que uno propio, con estas diferencias:

- No revela sus instrucciones ni su configuración, aunque se le pidan.
- En las fuentes de una respuesta se ve el nombre del documento consultado, pero no su texto.
- En **Qué hizo el agente** se ven los pasos, pero no su resultado.

Si tiene [memoria](/control/estudio/memoria#agentes-del-catálogo), funciona como en cualquier agente, pero la decide quien lo publica.

## Actualizar

Cuando quien publica envía una versión nueva, llega de una de dos formas, según lo que haya elegido:

| Forma | Qué ve la organización |
|---|---|
| Con aviso | Los administradores reciben la notificación **Nueva versión disponible**, y la tarjeta muestra **Actualizar**. La organización decide cuándo |
| Automática | La versión se aplica sola, y los administradores reciben **Agente actualizado** |

Para actualizar a mano, pulsar **Actualizar** en el catálogo y revisar los cambios en **Actualizar agente**.

:::warning Se aplica la versión completa
Actualizar reemplaza el modelo del agente por el de la versión nueva y quita los especialistas y habilidades que ya no trae. Se conservan su nombre, quién lo usa, los espacios de trabajo y las carpetas compartidas con él.
:::

## Desinstalar

En la pestaña **Instaladas** del catálogo, o en el detalle del agente, menú **⋯** → **Desinstalar**.

- El agente se borra del Estudio junto con sus especialistas, microagentes y habilidades: solo funcionan mientras el agente está instalado.
- Los esquemas de datos que haya creado se conservan, salvo que se marquen para borrarlos.
- Si el agente tiene conversaciones, se conserva en el Estudio para poder consultarlas, pero deja de recibir versiones nuevas.

## Si lo retiran del catálogo

Quien publica un agente puede retirarlo. En ese caso ya no se puede instalar ni actualizar, y el catálogo lo muestra como **No disponible**. Para la organización que ya lo tiene, hay dos posibilidades:

| Caso | Qué pasa |
|---|---|
| Sigue funcionando | El agente sigue respondiendo con la versión instalada |
| Se desactivó | El agente deja de responder. En sus conversaciones aparece **Este agente ya no está disponible**, el mensaje no se envía y ya no se puede escribir. Se puede leer la conversación |

En los dos casos se puede desinstalar.

## Buenas prácticas

:::tip Probarlo antes de abrirlo a todos
Después de instalarlo, conviene dar acceso solo a unas pocas personas, probarlo en Conversaciones con preguntas reales y después ampliarlo en la pestaña **Acceso**.
:::
