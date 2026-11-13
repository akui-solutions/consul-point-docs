---
id: problemas-frecuentes
title: Problemas frecuentes de Administración
sidebar_label: Problemas frecuentes
sidebar_position: 2
description: "Soluciones a los problemas habituales al administrar ConsulPoint: usuarios, permisos, plan y créditos, canales, conectores, claves de API y webhooks."
---

# Problemas frecuentes de Administración

Qué hacer ante los avisos y situaciones más habituales al administrar una organización. Cada fila enlaza a la página donde se explica el tema completo.

## Usuarios e invitaciones

| Síntoma | Causa y solución |
|---|---|
| **Llegaste al tope de tu plan** al invitar | La organización tiene tantas personas activas como permite el plan. Desactivar a alguien o solicitar un plan mayor. Las invitaciones pendientes no cuentan. Ver [Usuarios](/organizacion/usuarios#invitar-a-una-persona) |
| **Se ha producido un error al enviar la invitación.** | Ese correo ya pertenece a la organización. Buscar a la persona en la lista |
| La persona no recibe el correo de invitación | Revisar la carpeta de spam. Después, **Enviar recordatorio** si está **Pendiente**, o **Reenviar invitación** si está **Expirado**. Ambos generan un enlace nuevo |
| Quien ya tenía cuenta no recibió enlace para crear contraseña | Es lo esperado: entra con su contraseña de siempre y la organización aparece en su lista. Ver [Acceder a la plataforma](/introduccion/acceder-a-la-plataforma#aceptar-una-invitación) |
| La persona ve **Enlace de invitación expirado** | **Reenviar invitación** desde la lista de usuarios |
| No aparece **Eliminar usuario** | Solo se pueden eliminar invitaciones **Pendiente** o **Expirado**. A quien ya aceptó se le desactiva. Ver [Usuarios](/organizacion/usuarios#acciones) |
| Una persona no ve aún el cambio de rol | Los cambios de rol tardan unos minutos en aplicarse a las sesiones abiertas |
| Una persona no puede entrar | Puede estar desactivada. **Activar usuario** desde la lista |

## Permisos: un módulo no aparece

| Síntoma | Causa y solución |
|---|---|
| Un módulo no aparece en el menú | El rol no tiene **Ver** sobre ese módulo. Ver [Roles](/organizacion/roles) |
| **No tienes acceso a esta sección** al abrir un enlace | Igual que el anterior: el rol de esa persona no puede ver la página |
| **Este módulo no está disponible** | El plan de la organización no incluye ese módulo, aunque el rol tenga el permiso. Ver [Matriz de permisos](/referencia/permisos) |
| Alguien con permisos no ve Usuarios, Roles, Equipos, Suscripción, Proveedores de IA o Conectores | Esas secciones son solo para el rol **Administrador**. Ver [Matriz de permisos](/referencia/permisos#secciones-solo-para-administradores) |
| No aparece **Configuración** | Se está dentro de un espacio de trabajo. Volver a **Principal** en el selector de la barra superior |
| **No se puede eliminar el rol** | Hay personas con ese rol, también desactivadas o con la invitación pendiente. Cambiar su rol o eliminar sus invitaciones primero |
| **Debes asignar al menos un permiso a un módulo.** | Un rol necesita al menos un permiso |
| El rol **Administrador** no se puede editar | Es fijo. Para un acceso parecido con límites, crear un rol propio |

## Plan, créditos y límites

| Síntoma | Causa y solución |
|---|---|
| **Se necesita un plan activo**, botones de crear desactivados | La organización no tiene plan activo: la prueba terminó o la suscripción venció. Todo se puede consultar, nada se puede crear ni modificar. Solicitar un plan en [Suscripción](/organizacion/suscripcion). Ver [Sin plan activo](/organizacion/creditos-y-limites#sin-plan-activo) |
| **Tu plan vence pronto** / **Plan vencido** | Renovar desde [Suscripción](/organizacion/suscripcion) antes de que termine el margen |
| **Créditos agotados** | Hay un breve margen para recargar. Después, los agentes dejan de responder salvo los que usan un modelo propio. Ver [Sin créditos](/organizacion/creditos-y-limites#sin-créditos) |
| **Llegaste al tope de tu plan** al crear algo | Se alcanzó el máximo de ese recurso. El uso de cada uno está en [Auditoría y Reportes](/control/auditoria-y-reportes#límites-de-tu-suscripción). Liberar espacio o solicitar un plan mayor |
| No se libera espacio de contactos al desactivarlos | Los contactos inactivos también cuentan. Solo eliminarlos libera espacio |
| **Ya tienes una solicitud pendiente…** | Cancelar la solicitud pendiente antes de pedir otra suscripción |
| **Este código no es válido, ha caducado o ya no tiene usos disponibles.** | Revisar el código de descuento o solicitar el plan sin él |

## Modelos propios

| Síntoma | Causa y solución |
|---|---|
| **La conexión falló** al probar un modelo | El motivo aparece debajo. Si **el proveedor rechazó la API Key**, usar **Cambiar API Key**; si **no reconoce este ID de modelo**, corregirlo con **Editar**. Ver [Proveedores de IA](/organizacion/proveedores-de-ia) |
| **La dirección no es válida** | La dirección del modelo tiene que ser HTTPS y pública |
| No se puede eliminar un modelo | Hay agentes que lo usan. Asignarles otro modelo primero |
| **Tu plan no incluye modelos de IA propios** | El plan no incluye esta función. Los modelos ya registrados se conservan pero no se pueden usar en agentes. Ver [Modelos propios](/organizacion/creditos-y-limites#modelos-propios) |
| Los agentes avisan de que el modelo propio rechazó la API Key o se quedó sin saldo | La clave del proveedor caducó o la cuenta del proveedor necesita recarga. Se resuelve en el proveedor y, si cambió la clave, con **Cambiar API Key** |

## Canales

| Síntoma | Causa y solución |
|---|---|
| **Tu plan alcanzó el límite de integraciones.** | Solo cuentan las integraciones activas. Desactivar o eliminar alguna, o solicitar un plan mayor |
| WhatsApp: **Caducada — reconectar** o el aviso **Conexión a punto de caducar** | La conexión asistida dura 60 días. Repetir la conexión asistida con el mismo número. Ver [Cuando la conexión caduca](/organizacion/canales/whatsapp#cuando-la-conexión-caduca) |
| WhatsApp: el agente deja de responder con una conexión manual | El token de Meta caducó. Usar un token permanente. Ver [Conexión manual](/organizacion/canales/whatsapp#conexión-manual) |
| WhatsApp: error al conectar | Ver la tabla de [Si algo falla](/organizacion/canales/whatsapp#si-algo-falla). Si **Meta no respondió**, esperar unos minutos e intentarlo de nuevo |
| **Número creado sin asignar** | Asignar un agente o un equipo al número desde los detalles de la integración. Sin asignar, nadie responde |
| WhatsApp: el número no envía ni recibe | Falta el PIN. **Introducir PIN** en la integración |
| WhatsApp: la IA dejó de responder en un chat | Alguien respondió desde la app WhatsApp Business: la IA se apaga en ese chat. Ver [Modo del número](/organizacion/canales/whatsapp#modo-del-número) |
| Telegram: **No se pudo crear el bot** | El token no es correcto. Copiarlo de nuevo desde BotFather. Si se regeneró allí, eliminar la integración y crearla otra vez. Ver [Telegram](/organizacion/canales/telegram) |
| Telegram: no se puede escribir a un contacto | El contacto tiene que escribir primero al bot |
| Aplicación externa: **Sin conectar** | Falta la URL de entrega. **Editar** y completarla. Ver [Aplicación externa](/organizacion/canales/aplicacion-externa) |
| Aplicación externa: el sistema externo deja de funcionar tras regenerar | Regenerar la API key o el secreto anula el anterior al momento. Entregar los nuevos al equipo del sistema externo |
| Google Calendar: **El enlace de conexión caducó** | Volver a pulsar conectar y completar el proceso de Google sin demora. Ver [Google Calendar](/organizacion/canales/google-calendar) |
| Google Calendar aparece desactivado al agregar integración | Ya hay un calendario conectado: solo se permite uno por organización |
| Un canal no responde y la conversación pide atención humana | El agente no pudo responder. Revisar que queden [créditos](/organizacion/creditos-y-limites#sin-créditos) y, con modelo propio, su clave. Mientras tanto, el equipo puede responder desde [Conversaciones](/conversaciones/canales-y-atencion-humana) |
| No se puede eliminar un equipo | Atiende alguna integración. Quitarlo de esas integraciones primero. Ver [Equipos](/organizacion/equipos) |

## Conectores y catálogo

| Síntoma | Causa y solución |
|---|---|
| Un conector aparece **Sin conectar** | Cada persona tiene que autorizarlo con **Autorizar con OAuth**. Ver [Conectores](/organizacion/conectores) |
| **Error de autorización** | La autorización no se completó. Intentarlo de nuevo |
| Un conector desinstalado aparece **No disponible** en un agente | Se quita del agente al guardarlo |
| No se puede desinstalar algo **Asignado a tu organización** | Lo activó ConsulPoint para la organización y no se desinstala desde el catálogo |
| Un elemento aparece como **No disponible** o retirado | Se retiró del catálogo: sigue instalado, pero no se puede reinstalar ni actualizar. Ver [Elementos retirados](/organizacion/catalogo-de-aplicaciones#elementos-retirados) |
| No se puede instalar otra habilidad | Se alcanzó el máximo del plan. Desinstalar o eliminar alguna, o solicitar un plan mayor |
| Los botones de instalar o desinstalar no aparecen | Instalar y actualizar piden permiso de crear sobre el módulo; desinstalar, de eliminar |
| Un cambio en los permisos de una aplicación no se nota | Tarda unos minutos en aplicarse. Ver [Instalar y administrar](/aplicaciones-integradas/instalar-y-administrar) |

## Claves de API y webhooks

| Síntoma | Causa y solución |
|---|---|
| Una herramienta externa recibe `401` | La clave no existe, normalmente porque se regeneró. Entregar la clave nueva. La pestaña **Eventos** de la clave muestra **Clave no encontrada**. Ver [Claves de API](/organizacion/claves-de-api#la-ficha-de-una-clave) |
| Una herramienta externa recibe `403` | La clave está desactivada o vencida, o la organización no tiene plan o créditos. Activarla o ampliar **Expira** con **Editar** |
| Una clave aparece **Por vencer** o **Vencida** | Vence en menos de 7 días, o ya venció. Ampliar la fecha con **Editar** |
| **No se puede regenerar** | La clave está desactivada. Activarla antes de regenerar |
| No se puede eliminar una clave o un webhook | Desactivarlo primero |
| Un webhook no llega | El sistema que lo recibe tiene que responder en menos de 10 segundos, y el webhook tiene que estar **Activo**. Los avisos no se reintentan. Ver [Webhooks](/control/webhooks#qué-se-envía) |
| Un webhook de conversación no avisa de todas | **Todas las conversaciones actualizadas** cubre solo las conversaciones de quien lo creó |

## Espacios de trabajo

| Síntoma | Causa y solución |
|---|---|
| **Llegaste al tope de tu plan** al crear un espacio | Los espacios inactivos también cuentan. Ver [Espacios de trabajo](/modulos/espacios-de-trabajo#crear-un-espacio) |
| **No se pudo enviar la invitación** | La persona ya es miembro del espacio, o hubo un problema puntual. Revisar la pestaña **Usuarios** |
| Una invitación aparece **Expirada** | Pasaron 7 días. **Reenviar** desde el menú de su fila |
| Un espacio no aparece en el selector | Está inactivo. Activarlo desde la lista de espacios |
| No aparece el engranaje **Gestionar espacios de trabajo** | Solo se muestra en la organización principal, no dentro de un espacio |
| No se puede desvincular un agente o una aplicación | Solo puede hacerlo el **Administrador** del espacio |
