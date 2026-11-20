---
id: problemas-frecuentes
title: Common issues in Conversations
sidebar_label: Common issues
sidebar_position: 5
description: Solutions to the most common issues in ConsulPoint Conversations.
---

# Common issues

## The agent {#el-agente}

| Symptom | Cause and solution |
|---|---|
| It answers generically, without using the documents | Check **View sources**. If there are no sources, see [Common issues in Studio](/control/estudio/problemas-frecuentes#el-agente-responde-de-forma-genérica-sin-usar-los-documentos) |
| An agent does not appear when starting the conversation | You do not have access to it. An administrator grants it, in the agent's **Access** tab |
| **This agent is no longer available** | It's a catalog agent its publisher withdrew and turned off. The message isn't sent and the conversation can only be read. See [Catalog agents](/control/estudio/agentes-del-catalogo#si-lo-retiran-del-catálogo) |
| You cannot switch agents | The agent is fixed with the first message. Open a new conversation |
| **Web search**, **Attach files** or **Dictate** does not appear | The agent does not have that built-in function. It is turned on in Studio, in the agent's **Capabilities** tab |
| **The response was interrupted** | Send the message again |
| **Context window is almost full** | Open a new conversation |
| Agents stop answering | The organization has run out of credits. Check the usage |
| **Agent memory** doesn't appear | The agent has no memory, or the conversation is shared with other people. See [What the agent remembers](/conversaciones/conversar-con-un-agente#lo-que-recuerda-el-agente) |
| **Memory full** on an answer | What the agent remembers reached its limit. In **Agent memory**, **Edit** and delete what's no longer useful |
| **Memory not updated** on an answer | The agent couldn't save something. Ask again later |
| **Agent memory isn't available right now** | Try again later |
| **This agent has memory turned off, so it can't be edited** | Whoever manages the agent turned it off. You can still see and delete what it remembers |

## Files {#archivos}

| Symptom | Cause and solution |
|---|---|
| A file **can't be attached in this conversation** | Its type is not supported in that channel |
| **Is larger than allowed** | In internal conversations, up to 10 MB per file |
| It won't let you attach more | Up to 5 files per message |
| **Files not supported by** a provider | The agent's model cannot read that file type. Convert it to PDF or text |

## Conversations {#conversaciones}

| Symptom | Cause and solution |
|---|---|
| The **New conversation** button is disabled | The organization has no active subscription, or your role does not allow creating conversations |
| **Share conversation** does not appear | The conversation has no messages yet, or your role does not allow editing it |
| You cannot find a person when sharing | They do not have access to the conversation's agent |
| A conversation disappeared from the list | It was deleted, or it is no longer shared with you |
| Inside a workspace you cannot see other conversations | You only see that workspace's conversations |

## Channels {#canales}

| Symptom | Cause and solution |
|---|---|
| You cannot see the conversations of a WhatsApp or Telegram | You are not part of that integration's team |
| **You don't have a … connection set up yet** | There is no integration for that channel. See [Integrations and channels](/modulos/integraciones) |
| You cannot write in a conversation | Someone else is handling it |
| The agent does not answer on a channel | Someone took control or the conversation is being handled. **Activate agent** or **Mark as resolved** |
