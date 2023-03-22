import { CommandInteraction, Client, APIVersion } from "discord.js";
import { Command } from "../Command";

export const CodeTemplate: Command = {
    name: "cpptemplate",
    description: "Returns a C++ template.",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "```cpp\n" +
          "/*\n\tfilename:" + 
          "\n\tsummary:" +
          "\n\tauthor:" +
          "\n\tdate:" +
          "\n*/" +
          "\n\n" +
          "#include <iostream>" +
          "\n" +
          "using namespace std;" +
          "\n\n/*\n\tPrototype functions\n" +
          "\texample -----\n" +
          "\tvoid myFunction();\n" +
          "*/" +
          // This is the start of the main code block
          "\n\nint main()" +
          "\n" +
          "{\n\t//Initialize variables\n" +
          "\n\t//Assign values\n" +
          "\n\t//Perform operations or call functions\n" +
          "\n\treturn 0;" +
          "\n}" +
          "\n\n/*\n\tDefine functions\n" +
          "\texample -----\n" +
          "\tvoid myFunction()\n" +
          "\t{\n" +
          "\t\tcout << \"Hello, world!\";\n" +
          "\t\treturn;\n" + 
          "\t}\n" +
          "*/\n" +
          "```";

        await interaction.followUp({
            content
        });
    }
};
