import { CommandInteraction, Client } from "discord.js";
import { Command } from "../../Command";

export const Hello: Command = {
    name: "helloworld",
    description: "Returns a random Hello World! snippet.",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello there!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};