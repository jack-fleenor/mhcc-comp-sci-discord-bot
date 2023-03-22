import { CommandInteraction, Client, APIVersion } from "discord.js";
import { Command } from "../Command";

const algos = {
  "Bubble Sort": "```cpp\n" +
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
    "\t" + "bool swapped;" + '\n' +
    "\t" + "for(int i = 0; i < length - 1; i++)" + '\n' +
    "\t" + "{" + '\n' +
    "\t" + "\t" + "swapped = false" + '\n' +
    "\t" + "\t" + "for(int j = 0; j < length - 1; j++)" + '\n' +
    "\t" + "\t" + "{" + '\n' +
    "\t" + "\t" + '\t' + "if(nums[j] > nums[j + 1])" + '\n' +
    "\t" + "\t" + "\t" + "{" + '\n' +
    "\t" + "\t" + "\t" + "\t" + "temp = numbers[j];" + '\n' +
    "\t" + "\t" + "\t" + "\t" + "numbers[j] = numbers[j + 1];" + '\n' +
    "\t" + "\t" + "\t" + "\t" + "numbers[j + 1] = temp;" + '\n' +
    "\t" + "\t" + "\t" + "\t" + "swapped = true;" + '\n' +
    "\t" + "\t" + "\t" + "};" + '\n' +
    "\t" + "\t" + "}" + '\n' +
    "\t" + "};" + '\n' +
    "\t" + "if(swapped == false)" + '\n' +
    "\t" + "\t" + "break;" + '\n' +
    "};" + "\n" +
    "```"
}

export const BubbleSort: Command = {
    name: "bubblesort",
    description: "Returns a C++ template.",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = algos["Bubble Sort"];
        await interaction.followUp({
            content
        });
    }
}
