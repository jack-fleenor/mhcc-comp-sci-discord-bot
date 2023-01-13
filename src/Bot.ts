import { Client } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";
import config from "./config";

const token = config.DISCORD_TOKEN

console.log("Bot is starting...");

const client = new Client({
  intents: []
});

ready(client);
interactionCreate(client);

client.login(token);