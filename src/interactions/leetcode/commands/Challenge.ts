import { CommandInteraction, Client } from "discord.js";
import { Command } from "../../../Command";

export const LeetCodeChallenge: Command = {
    name: "leetcode challenge",
    description: "Challenges you to a LeetCode problem to test your skills.",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello there!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};