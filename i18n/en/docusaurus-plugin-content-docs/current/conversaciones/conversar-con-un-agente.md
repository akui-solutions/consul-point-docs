---
id: conversar-con-un-agente
title: Talking to an agent
sidebar_label: Talking to an agent
sidebar_position: 2
description: How to start a conversation with a ConsulPoint agent, attach files, dictate, use web search, see each answer's sources and test an agent.
---

# Talking to an agent

How to start a conversation, write, attach files, use the agent's tools and understand its answers.

## Starting a conversation {#iniciar-una-conversación}

1. Click **New conversation** in the list.
2. Choose **Internal chat** (the **WhatsApp** and **Telegram** options start a conversation with an external contact; see [Channels and human support](/conversaciones/canales-y-atencion-humana)).
3. Choose an agent. **View all options** opens a search box with every agent you have access to.
4. Write your first question, or click one of the **conversation starters** the agent offers.

The agent is fixed once you send the first message: to talk to another agent, open a new conversation.

### AI Agents Center {#centro-de-agentes-de-ia}

In the agent menu in the conversation header, **Browse Agent Store** opens the **AI Agents Center**: every agent in the organization you have access to, with a search by name. Each agent shows its description and its model, and **Start conversation** opens a conversation with it.

Clicking an agent shows its details: **Conversation starters**, built-in functions, **Model**, **Temperature** and **Integrated experts** (its [specialists](/control/estudio/especialistas)). **Chat with agent** starts the conversation.

## Writing {#escribir}

- **Enter** sends and **Shift + Enter** adds a line break.
- A message can be up to 65,000 characters. A counter appears as you get close to the limit.
- **Dictate** turns your voice into text, up to 5 minutes per recording. It only appears if the agent has the **Speech to text** built-in function.

### Attaching files {#adjuntar-archivos}

**Attach files**, drag or paste. It only appears if the agent has the **Attach files** built-in function.

| | In an internal conversation |
|---|---|
| Files per message | Up to 5 |
| Images | JPG, PNG, WEBP, up to 10 MB |
| Documents | PDF, DOCX, XLS, XLSX, TXT, up to 10 MB |

Attached files are sent to the model so it can read them in that conversation. They are not saved in the Knowledge Hub and other agents do not consult them.

### Tools {#herramientas}

The **Tools** menu in the message box turns on options for the next messages:

| Tool | What it does | Appears if… |
|---|---|---|
| **Web search** | The agent can look up current information on the internet | The agent has **Web search** |
| **Certified sources** | The agent can consult verified information sources (Cala AI) | The agent has **Certified sources** |
| **Connectors** | Choose which of the agent's external tools are used in this conversation | The agent has connectors |

Active tools are shown as chips above the message box and are removed by clicking them. Each web search uses credits.

## The answers {#las-respuestas}

Answers can include formatted text, tables, diagrams (with **Download SVG** and **View fullscreen**), CSV data (**Download CSV**), images and figures from the Knowledge Hub documents.

### What the agent did {#qué-hizo-el-agente}

Above each answer, a line sums up what the agent did to answer: **Took 3 actions**, or the action itself if there was only one. While it answers, the line shows live what it is doing (**Searching the documents…**). Clicking it shows the steps and, for each one, the **Query** and the **Result**; for web searches, the **Pages consulted**.

| Action | When it appears |
|---|---|
| **Searched the documents** | It consulted the Knowledge Hub |
| **Searched the web for "…"** / **Read a web page** | It used web search |
| **Searched certified sources** | It used certified sources |
| **Looked up the data extracted from the documents** | It consulted data from [smart extraction](/centro-de-conocimiento/extraccion-inteligente) folders |
| **Looked up the audio and video transcripts** | It consulted media files |
| **Searched the documents for images** / **Shared images from the documents** | It used images from the documents |
| **Consulted "…"** | It consulted a [specialist](/control/estudio/especialistas) |
| **Used the skill "…"**, **Read "…" from the skill "…"**, **Ran "…" from the skill "…"** | It used a [skill](/control/estudio/habilidades) |
| **Checked the calendar availability** / **Scheduled "…"** | It used Google Calendar |
| **Handed the conversation to a person** | It asked for human support (see [Channels and human support](/conversaciones/canales-y-atencion-humana)) |
| **Used a tool** | It used a [connector](/organizacion/conectores) or another tool |

If an action fails, it is marked **Failed**. Everyone in the conversation sees this line.

Actions on each answer:

| Action | What it does |
|---|---|
| **Copy response** | Copies the text |
| **Generate audio** | Reads the answer aloud. Uses credits |
| **Translate message** | Translates the answer; **Show original** goes back to the original text |
| **View sources** | Opens the message sources. Only if the agent consulted any |

If a message is not sent, **Retry message** tries again.

### Message sources {#fuentes-del-mensaje}

**Message Sources** shows the information the agent consulted for that answer:

<Screenshot src="/img/en/conversaciones/fuentes-del-mensaje.png" alt="Message Sources window in ConsulPoint Conversations" caption="Message Sources" maxWidth={560} />

| Type | What it is |
|---|---|
| **Knowledge hub** / **Internal knowledge base** | Fragments of documents, with their relevance percentage and the search that found them |
| **Web source** | Internet pages consulted |
| **Verified source Cala AI** | Certified sources |
| **Multimedia resource** | Video or audio transcripts |

It is the best way to check that the agent answers with your organization's documents and not with the model's general knowledge.

:::danger Deleting a fragment
**Delete this fragment** removes that fragment from the agent's knowledge, for everyone and every conversation. It cannot be undone. Use it only to remove incorrect information. The original document does not change.
:::

## Context window {#ventana-de-contexto}

Each model can take into account a limited amount of conversation. When the conversation uses 80% of that space, an indicator appears in the message box; at 90%, a warning: **Context window is almost full**.

Past the limit, the model can no longer answer with the whole conversation and the platform says so. At that point it is best to open a new conversation.

:::tip One conversation per topic
Opening a new conversation when you change subject improves the accuracy of the answers and reduces usage.
:::

## Credits {#créditos}

Each answer uses the organization's credits, except with the organization's own models. If they run out, after a short grace period the agents stop answering until they are topped up.

## Testing an agent {#probar-un-agente}

Before opening an agent to more people or connecting it to a channel, it is a good idea to test it here:

| Test | Expected behavior |
|---|---|
| Question covered by the documentation | It answers correctly and **View sources** shows the expected documents |
| Question not covered | It says it does not have that information, without making it up |
| Question outside its role | It redirects as its instructions say |
| Ambiguous question | It asks for clarification |
| Question for a specialist | **What the agent did** shows **Consulted "…"** |
