import { CommandInteraction, Client, APIVersion } from "discord.js";
import { Command } from "../Command";

export const CodeTemplate: Command = {
    name: "cpptemplate",
    description: "Returns a C++ template.",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "```cpp\n/*\n\tfilename:\n\tsummary:\n\tauthor:\n\tdate:\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main()\n{\n\t//Initialize variables\n\n\t//Assign values\n\n\t//Perform operations\n\n\treturn 0;\n}```";

        await interaction.followUp({
            content
        });
    }
};