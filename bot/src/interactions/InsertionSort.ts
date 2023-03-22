import { CommandInteraction, Client, APIVersion } from "discord.js";
import { Command } from "../Command";

const algos = {
  "Insertion Sort": "```cpp\n" +
    "#include <iostream>" +
    "\n" +
    "using namespace std;" + "\n" + "\n" +
    "const int SIZE = 5;" + "\n" + "\n" +
    "void insertionSort(int[], int);\n" + "\n" +
    "int main()" +
    "\n" +
    "{\n" +
    "\t" + "int numbers[SIZE] = { 1, 2, 3, 4, 5};" + "\n" +
    "\t" + "insertionSort(numbers, SIZE); " + "\n" +
    "\treturn 0;" +
    "\n};" +
    "\n" + "\n" +
    "void insertionSort(int numbers[], int length)" + "\n" +
    "{" + '\n' +
    '\t' + "int temp;" + '\n' +
    "\t" + "int smallest;" + '\n' +
    "\t" + "for(int i = 0; i < length; i++)" + '\n' +
    "\t" + "{" + '\n' +
    "\t" + "\t" + "smallest = i" + '\n' +
    "\t" + "\t" + "for(int j = 0; j < length; j++)" + '\n' +
    "\t" + "\t" + "{" + '\n' +
    "\t" + "\t" + '\t' + "if(numbers[j] < numbers[smallest])" + '\n' +
    "\t" + "\t" + "\t" + "\t" + "smallest = j;" + '\n' +
    "\t" + "\t" + "}" + '\n' +    
    "\t" + "\t" + "temp = numbers[smallest];" + '\n' +
    "\t" + "\t" + "numbers[smallest] = numbers[i];" + '\n' +
    "\t" + "\t" + "numbers[i] = temp;" + '\n' +
    "\t" + "}" + '\n' +
    "\t" + "return;" + '\n' +
    "};" + "\n" +
    "```"
}

export const InsertionSort: Command = {
    name: "insertionsort",
    description: "Returns a C++ template.",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = algos["Insertion Sort"];
        await interaction.followUp({
            content
        });
    }
}
