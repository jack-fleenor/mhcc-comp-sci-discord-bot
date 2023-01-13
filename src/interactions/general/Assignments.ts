import { CommandInteraction, Client } from "discord.js";
import { Command } from "../../Command";

interface Assignment{
    title: string;
    description: string;
    dueDate: Date;
    link: string;
}

interface Assignments extends Array<Assignment>{}

const assignments: Assignments = [
    {
        title: "Week 1 Pltl Worksheet - Basics",
        description: "Submit to tutor.",
        dueDate: new Date('JAN 19, 2023'),
        link: "https://mhcc.blackboard.com/webapps/blackboard/content/listContent.jsp?course_id=_64937_1&content_id=_2144597_1&mode=reset"
    },
    {
        title: "zyBooks Week 1",
        description: "Click link",
        dueDate: new Date('JAN 17, 2023'),
        link: "https://learn.zybooks.com/zybook/MHCCCS161WieseWinter2023?selectedPanel=assignments-panel"
    },    
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
            const link = `Link: ${assignment['link']}\n`;
            message = message + '\n' + title + description + dueDate + link;
        });

        const content = header + message;

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};