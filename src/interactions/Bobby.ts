import { CommandInteraction, Client, APIVersion } from "discord.js";
import { Command } from "../Command";

export const Mommy: Command = {
    name: "mommy",
    description: "mommy",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.followUp({
            ephemeral: true,
            embeds: [{
              image: {
                url: "https://media.tenor.com/66D-mjGsQ3cAAAAd/bobby-hill-valentines-day.gif",
              }
            }]
        });
    }
};