import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export const Assignments: Command = {
    name: "Assignments",
    description: "Returns this weeks assignments.",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Here are the weeks assignments: ";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};