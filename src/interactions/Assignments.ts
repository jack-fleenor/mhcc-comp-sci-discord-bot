import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

interface Assignment{
    title: string;
    description: string;
    dueDate: Date;
}

interface Assignments extends Array<Assignment>{}

const assignments: Assignments = [
    {
        title: "Week 2 Pltl Worksheet",
        description: "Submit to tutor.",
        dueDate: new Date('JAN 31, 2023')
    },
    {
        title: "Flowchart Assignment",
        description: "Click link",
        dueDate: new Date('JAN 17, 2023'),
    }
]

export const Assignments: Command = {
    name: "assignments",
    description: "Returns this weeks assignments.",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        const header = "Here are the weeks assignments for Computer Science 1: \n";
        let message: string = '';
        assignments.forEach((assignment: Assignment) => {
            const title = `Title: ${assignment['title']}\n`;
            const description = `Description: ${assignment['description']}\n`;
            const dueDate = `Due Date: ${assignment['dueDate'].toDateString()}\n`;
            message = message + '\n' + title + description + dueDate;
        });

        const content = header + message;

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};