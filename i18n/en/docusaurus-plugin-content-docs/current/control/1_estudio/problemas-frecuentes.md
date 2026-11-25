---
id: problemas-frecuentes
title: Common Studio problems
sidebar_label: Common issues
sidebar_position: 7
description: Solutions to the most common issues when creating and using agents, specialists and micro-agents in the ConsulPoint Studio.
---

# Common issues

## The agent gives generic answers without using the documents {#el-agente-responde-de-forma-genérica-sin-usar-los-documentos}

| Cause | Solution |
|---|---|
| It doesn't have the **Knowledge hub access** built-in function | In the agent's detail, on the **Capabilities** tab, use **Manage functions** and turn it on |
| The folders aren't shared with the agent | Share them from the Knowledge Hub. See [Agent knowledge](/centro-de-conocimiento/conocimiento-de-los-agentes) |
| The documents are still being prepared, or preparation failed | Check **Availability for agents** on each file, or the status on the agent's **Documents** tab |
| The person talking to it doesn't have access to those folders | The agent only searches folders the person asking also has access to |
| The search doesn't find the right passage: similar records, procedures cut in half, in-house acronyms | Adjust the folder's [agents' search](/centro-de-conocimiento/busqueda-de-los-agentes) |
| The instructions don't tell it to use the documentation | Say so in **System instructions**, for example: "Always answer based on the available documentation" |

## The agent doesn't consult a specialist {#el-agente-no-consulta-a-un-especialista}

| Cause | Solution |
|---|---|
| The specialist isn't assigned to the agent | The agent's **Specialists** tab → **Assign specialist** |
| The **Technical description** is vague or doesn't cover that case | Rewrite it saying precisely when to consult it. See [Specialists](/control/estudio/especialistas#crear-un-especialista) |
| Several specialists have similar descriptions | Define each one's topic more clearly |

## The agent doesn't remember what it was told {#el-agente-no-recuerda-lo-que-se-le-dijo}

| Cause | Solution |
|---|---|
| The agent doesn't have memory turned on | Agent's **Memory** tab → **Turn on memory**. See [Agent memory](/control/estudio/memoria) |
| The conversation is shared, a Telegram group or a team message in a channel | Memory is only used in direct conversations with a single person. See [Where it's used](/control/estudio/memoria#dónde-se-usa) |
| It's a different agent | Each agent has its own memory of each person |
| The fact isn't in **What to remember** or is passing | Add it to **What to remember** on the **Memory** tab |
| The answer shows **Memory full** or **Memory not updated** | See [What the agent remembers](/conversaciones/conversar-con-un-agente#lo-que-recuerda-el-agente) |

## The Memory tab doesn't appear or memory can't be turned on {#no-aparece-la-pestaña-memoria-o-no-se-puede-activar}

| Cause | Solution |
|---|---|
| It's a specialist or a micro-agent | Only agents have memory |
| It's a catalog agent | Memory is decided by whoever publishes it. See [Catalog agents](/control/estudio/memoria#agentes-del-catálogo) |
| **Whoever manages the agent can turn it on.** appears | You need permission to edit **Studio** |
| Turning it on or saving isn't allowed | On the agent you need the **Can edit** level or higher. An administrator grants it on the **Access** tab |
| **Delete a person's memory…** doesn't appear | It's for administrators only |

## You can't create one {#no-se-puede-crear}

| Symptom | Cause |
|---|---|
| The **New agent** button is disabled or doesn't appear | There's no active subscription, or the role doesn't have create permission on the Studio |
| When creating, the platform warns that the subscription limit has been reached | The subscription has a maximum number of agents, which includes specialists and micro-agents. Delete the ones you don't use or upgrade the subscription |
| **An agent named "…" already exists in your organization** | The name is already used by another agent or micro-agent. Choose another |
| The **Specific people and roles** option doesn't appear in access | It's only available for agents, not for specialists |
| The **Schema library** tab doesn't appear | With the default roles, it's for administrators only |
| **Your current subscription doesn't include your own models** | The organization's own models (**Custom**) depend on the subscription |

## You can't delete one {#no-se-puede-eliminar}

| Symptom | Cause and solution |
|---|---|
| **Delete** is disabled on an agent | The agent already has conversations: agents with conversations can't be deleted. Or it's published in the catalog (**It's published in the catalog. Withdraw it from the catalog before deleting it.**): withdraw it first. See [Publish agents](/control/estudio/publicar-agentes#eliminar-un-agente-publicado) |
| **Delete** doesn't appear | With the default roles, only administrators delete agents |
| An image describer can't be deleted | A folder uses it in its **PDF conversion**. First change the describer of those folders |
| **Delete from catalog** is disabled | The published agent is installed in some organization; the option says how many. You can delete it once no organization has it installed |

## Catalog agents {#agentes-del-catálogo}

| Symptom | Cause and solution |
|---|---|
| The agent shows **Inactive** and doesn't answer | It was turned off in the organization. Click **Turn on** in its detail header. See [Turn on and off](/control/estudio/agentes-del-catalogo#activar-y-desactivar) |
| Its conversations show **This agent is no longer available** | The agent is turned off, was uninstalled, or the publisher withdrew it and turned it off. See [Catalog agents](/control/estudio/agentes-del-catalogo) |
| **Turn on** and **Turn off** don't appear | They only exist on catalog agents. You need edit permission on **Studio** and the **Can edit** level or higher on the agent; with the access it's installed with, only administrators |

## Micro-agents {#microagentes}

| Symptom | Cause and solution |
|---|---|
| The micro-agent doesn't appear when setting up an extraction folder | Only **Document Extractor** micro-agents are offered. The type can't be changed: create a new one of the right type |
| The micro-agent doesn't appear in Smart Inbox rules | Only **Mail Reader** and **Email to Markdown** micro-agents are offered |
| The extracted data is incomplete or has warnings | Review the execution instruction and the descriptions of the schema fields. See [Micro-agents](/control/estudio/microagentes#buenas-prácticas) |
| A second conversation analyzer was created and isn't used | The platform uses the first one created in the organization |
| A schema version can't be edited | It's in use. Create a **New version** |
