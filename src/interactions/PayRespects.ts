import { CommandInteraction, Client, APIVersion } from "discord.js";
import { Command } from "../Command";

export const PayRespects: Command = {
    name: "f",
    description: "Pay respects.",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.followUp({
            ephemeral: true,
            embeds: [{
              image: {
                url: 'https://i.pinimg.com/originals/f4/91/ad/f491ad9d484b99cd4d9745a736dfb6c5.gif',
              }
            }]
        });
    }
};