---
id: memoria
title: Memoria de los agentes
sidebar_label: Memoria
sidebar_position: 3
description: Cómo un agente de ConsulPoint recuerda lo relevante de cada persona entre conversaciones. Dónde se usa, cómo activarla, qué guarda, quién puede verla y cómo se borra.
---

# Memoria de los agentes

<PageMeta route="/studio/assistant/details/memory/:id">editar sobre **Estudio** y, en el agente, **Puede editar** o superior, para activarla o cambiarla</PageMeta>

Con la **memoria**, un agente recuerda lo relevante de cada persona de una conversación a otra: su nombre, cómo prefiere que le hablen, en qué está trabajando o qué pidió que no se repita. No hace falta volver a explicárselo cada vez.

Cada persona tiene una memoria propia con cada agente. Lo que recuerda un agente no lo ve ningún otro agente.

**Casos de uso:** un asistente interno que recuerda el área y los proyectos de cada empleado; un agente de WhatsApp que recuerda los pedidos anteriores y lo que quedó pendiente con cada cliente.

## Dónde se usa

La memoria solo se usa en conversaciones directas entre el agente y una sola persona.

| Conversación | Usa memoria |
|---|---|
| Chat interno de una persona a solas con el agente | Sí, la de esa persona |
| WhatsApp | Sí, la del contacto |
| Telegram, chat privado | Sí, la del contacto |
| Aplicación externa | Sí, la del contacto |
| API de agentes, con un identificador del usuario final | Sí, la de ese usuario. Ver [API de agentes](/api-agentes#memoria-por-usuario-final) |
| Conversación compartida con otras personas | No |
| Grupo de Telegram | No |
| Mensajes que escribe una persona del equipo al tomar el control de un canal | No |

Los [especialistas](/control/estudio/especialistas) que consulta el agente reciben lo que el agente recuerda de la persona, pero no pueden guardar ni borrar nada. Los especialistas y los microagentes no tienen memoria propia.

## Activar la memoria

- **Al crear el agente**: en **Capacidades**, **Agregar capacidad** y elegir **Memoria**. Ver [Crear un agente](/control/estudio/crear-un-agente#funciones-integradas).
- **Después**: en el detalle del agente, pestaña **Memoria**, **Activar memoria**.

La pestaña **Memoria** muestra si está **Activada** o **Desactivada** y qué debe recordar el agente. **Editar** cambia lo que debe recordar, y el menú de la tarjeta tiene **Desactivar memoria**.

Activarla, cambiarla o desactivarla requiere permiso de editar sobre el **Estudio** y, en el agente, el nivel **Puede editar** o superior (ver [Acceso](/control/estudio/agentes#acceso)). Sin permiso sobre el Estudio, la pestaña indica **Quien administra el agente puede activarla.**

<Screenshot src="/img/estudio/memoria-agente.png" alt="Pestaña Memoria en el detalle de un agente de ConsulPoint" caption="Detalle de un agente → Memoria" />

### Qué debe recordar

**Qué debe recordar este agente** indica qué información guardar de cada persona, en forma de lista. Hasta 4.000 caracteres. **Usar el ejemplo** rellena el campo con una plantilla para empezar:

```markdown
# Perfil del usuario
- Nombre:
- Cargo / empresa:
- Preferencias de idioma y tono:

# Contexto
- Objetivos o proyectos en curso:
- Datos relevantes de conversaciones anteriores:

# Preferencias
- Lo que le gusta o pidió recordar:
- Lo que pidió evitar:
```

Si se deja vacío, el agente recuerda lo del ejemplo con los usuarios de la plataforma y, con los contactos de los canales, su nombre, idioma, pedidos anteriores y lo pendiente.

### Desactivar la memoria

Al desactivarla, el agente deja de recordar y de usar lo que sabe de cada persona. Lo que ya recordaba **no se borra**: se conserva hasta que alguien lo elimine, y vuelve a usarse si se activa de nuevo.

## Qué guarda el agente

El agente decide qué guardar durante la conversación, siguiendo lo que debe recordar:

- Guarda datos nuevos y duraderos, no cada mensaje ni los detalles pasajeros.
- Si un dato cambia, reemplaza el anterior.
- Si la persona le pide olvidar algo, borra solo eso.
- Guarda lo que la persona dijo, sin suponer.
- Solo confirma que guardó algo cuando de verdad lo guardó.

Nunca guarda contraseñas ni credenciales, datos de pago, datos de salud ni datos sensibles como religión, opiniones políticas u orientación sexual. Con los contactos de los canales y los usuarios de la API, tampoco guarda instrucciones que intenten cambiar su comportamiento ni datos de otras personas.

En Conversaciones, la respuesta en la que el agente guardó algo lo indica. Ver [Lo que recuerda el agente](/conversaciones/conversar-con-un-agente#lo-que-recuerda-el-agente).

## Quién puede ver y borrar la memoria

Lo que el agente recuerda de una persona es privado.

| Memoria de… | Quién la ve | Qué se puede hacer | Dónde |
|---|---|---|---|
| Una persona de la organización | Solo esa persona | Ver, corregir y borrar | En la conversación, **Memoria del agente**. Ver [Lo que recuerda el agente](/conversaciones/conversar-con-un-agente#lo-que-recuerda-el-agente) |
| Una persona de la organización, por un administrador | Nadie más: el administrador solo ve si existe y cuándo se actualizó | Borrar | Pestaña **Memoria** del agente → **Borrar la memoria de una persona…** |
| Un contacto de un canal | Los administradores | Ver y borrar | En la conversación del canal, **Memoria del agente**. Ver [Canales y atención humana](/conversaciones/canales-y-atencion-humana#memoria-del-contacto) |
| Un usuario de la API | Quien integra, con la clave de API | Ver y borrar | Ver [API de agentes](/api-agentes#memoria-por-usuario-final) |

### Borrar la memoria de una persona

Para cuando alguien deja la organización o pide que se borren sus datos. Solo para administradores.

1. En el detalle del agente, pestaña **Memoria**, abrir el menú y elegir **Borrar la memoria de una persona…**.
2. Buscar a la persona por nombre o email. La ventana indica si el agente guarda algo de ella y la fecha de la última actualización.
3. Pulsar **Borrar memoria**.

:::danger Borrado inmediato
La memoria se borra en cuanto se pulsa **Borrar memoria** y no se recupera. En su próxima conversación, el agente empieza de cero con esa persona.
:::

### Borrado automático

La memoria se borra sola, sin posibilidad de recuperarla, cuando se elimina:

| Se elimina… | Se borra la memoria de… |
|---|---|
| Una persona de la organización | Esa persona, con todos los agentes |
| Un contacto o una integración | Los contactos afectados |
| El agente | Todas las personas, contactos y usuarios de la API |
| Una clave de API, o se quita un agente de la clave | Los usuarios de la API de esa clave |

Además, la memoria de un contacto se borra sola cuando pasa un año sin conversar con ese agente. La de las personas de la organización y la de los usuarios de la API no caduca.

Desactivar la memoria, desactivar una clave de API o quitar a una persona de un espacio de trabajo **no** borran la memoria.

## Créditos

La memoria no tiene un coste propio. En cada mensaje, el agente lee lo que recuerda de la persona, y eso cuenta como parte de la pregunta: cuanto más larga es la memoria, más créditos consume cada respuesta. Lo que recuerda de cada persona puede ocupar hasta 8.000 caracteres.

Con un [modelo propio](/organizacion/proveedores-de-ia) de la organización, la memoria no consume créditos, como el resto de la respuesta.

## Agentes del catálogo

En un agente instalado desde el [Catálogo de integraciones](/organizacion/catalogo-de-aplicaciones), la memoria la decide quien lo publica: la organización no puede activarla, desactivarla ni ver qué debe recordar. Si el agente la usa, aparece como **Memoria** en la tarjeta **Qué puede hacer** de la pestaña **General**.

Un administrador puede borrar la memoria de una persona desde el menú de esa misma tarjeta.

## Buenas prácticas

:::tip Pedir solo lo que se va a usar
Una lista corta y concreta en **Qué debe recordar** da mejores resultados y consume menos créditos que una larga.
:::

:::tip Avisar a quien conversa
Conviene que las personas y los contactos sepan que el agente recuerda lo que comparten con él y que pueden pedirle que olvide algo.
:::
