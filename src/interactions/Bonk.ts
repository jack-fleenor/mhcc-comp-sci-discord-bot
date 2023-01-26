import { CommandInteraction, Client, APIVersion } from "discord.js";
import { Command } from "../Command";

export const Bonk: Command = {
    name: "bonk",
    description: "Put the horny in their place.",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.followUp({
            ephemeral: true,
            embeds: [{
              image: {
                url: "https://media.giphy.com/media/qs4ll1FSxKnNHeSmom/giphy.gif",
              }
            }]
        });
    }
};