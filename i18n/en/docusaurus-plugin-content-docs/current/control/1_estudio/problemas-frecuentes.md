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
| The folders aren't shared with the agent | Share them from the Knowledge Hub. See [Agents' knowledge](/centro-de-conocimiento/conocimiento-de-los-agentes) |
| The documents are still being prepared, or preparation failed | Check **Available to agents** on each file, or the status on the agent's **Documents** tab |
| The person talking to it doesn't have access to those folders | The agent only searches folders the person asking also has access to |
| The instructions don't tell it to use the documentation | Say so in **System instructions**, for example: "Always answer based on the available documentation" |

## The agent doesn't consult a specialist {#el-agente-no-consulta-a-un-especialista}

| Cause | Solution |
|---|---|
| The specialist isn't assigned to the agent | The agent's **Specialists** tab → **Assign specialist** |
| The **Technical description** is vague or doesn't cover that case | Rewrite it saying precisely when to consult it. See [Specialists](/control/estudio/especialistas#crear-un-especialista) |
| Several specialists have similar descriptions | Define each one's topic more clearly |

## You can't create one {#no-se-puede-crear}

| Symptom | Cause |
|---|---|
| The **New agent** button is disabled or doesn't appear | There's no active plan, or the role doesn't have create permission on the Studio |
| When creating, the platform warns that the plan limit has been reached | The plan has a maximum number of agents, which includes specialists and micro-agents. Delete the ones you don't use or upgrade the plan |
| **An agent named "…" already exists in your organization** | The name is already used by another agent or micro-agent. Choose another |
| The **Specific people and roles** option doesn't appear in access | It's only available for agents, not for specialists |
| The **Schema library** tab doesn't appear | With the default roles, it's for administrators only |
| **Your current plan doesn't include your own models** | The organization's own models (**Custom**) depend on the plan |

## You can't delete one {#no-se-puede-eliminar}

| Symptom | Cause and solution |
|---|---|
| **Delete** is disabled on an agent | The agent already has conversations. Agents with conversations can't be deleted |
| **Delete** doesn't appear | With the default roles, only administrators delete agents |
| An image describer can't be deleted | A folder uses it in its **PDF conversion**. First change the describer of those folders |

## Micro-agents {#microagentes}

| Symptom | Cause and solution |
|---|---|
| The micro-agent doesn't appear when setting up an extraction folder | Only **Document Extractor** micro-agents are offered. The type can't be changed: create a new one of the right type |
| The micro-agent doesn't appear in Smart Inbox rules | Only **Mail Reader** and **Email to Markdown** micro-agents are offered |
| The extracted data is incomplete or has warnings | Review the execution instruction and the descriptions of the schema fields. See [Micro-agents](/control/estudio/microagentes#buenas-prácticas) |
| A second conversation analyzer was created and isn't used | The platform uses the first one created in the organization |
| A schema version can't be edited | It's in use. Create a **New version** |
