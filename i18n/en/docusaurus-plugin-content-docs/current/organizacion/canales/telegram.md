---
id: telegram
title: Telegram
sidebar_label: Telegram
sidebar_position: 2
description: How to connect a Telegram bot to ConsulPoint so an agent handles its messages.
---

# Telegram

<PageMeta route="/settings/connectors">administrator</PageMeta>

A Telegram bot connected to ConsulPoint receives the messages from whoever writes to it, replies to them with an agent and shows them in [Conversations](/modulos/conversaciones).

## Before you start: create the bot {#antes-de-empezar-crear-el-bot}

The bot is created in Telegram, with **@BotFather**: send it `/newbot`, choose a name and a username for the bot, and BotFather returns the bot's **token** (something like `123456789:AAE…`). That token is the bot's credential: don't share it.

## Connect the bot {#conectar-el-bot}

In **Settings → Connectors**, click **Add integration → Telegram**. **Connect Telegram Bot** opens, in two steps.

<Screenshot src="/img/en/canales/telegram.png" alt="Connect Telegram Bot dialog" caption="Connect Telegram Bot" maxWidth={600} />

**1. Configure bot**

| Field | Content |
|---|---|
| **Integration name** | Required, between 3 and 100 characters. For example, "Support bot" |
| **Description** | Optional, up to 500 characters |
| **Bot token** | Required. The one @BotFather gave you |

Click **Create bot**. The platform checks the token with Telegram and gets the bot ready to receive messages. If the token isn't valid, it shows **Could not create bot**.

**2. Assign agent**

Choose the **Owner** and the **AI agent**, both required, and click **Save and activate**.

The bot's card appears in **Connectors** with its username (`@…`) and the **Connected** status. The details show the **Bot username**, which you can copy to share it.

:::warning Changing the token
If you regenerate the token in @BotFather, the safest option is to delete the integration and create it again with the new token.
:::

## Start a conversation {#iniciar-una-conversación}

In Telegram, a bot can't write first to someone who has never written to it. In [Conversations](/modulos/conversaciones), **Start Telegram conversation** lets you write to an **Existing contact** or to a **Telegram chat ID** (the contact can get it by writing to @userinfobot). If the contact hasn't started the bot yet, the platform tells you.
