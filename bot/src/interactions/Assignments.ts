import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
import axios from 'axios';
interface Assignment{
    title: string;
    description: string;
    dueDate: Date;
    link: string;
}

interface Assignments extends Array<Assignment>{};

export const Assignments: Command = {
    name: "assignments",
    description: "Returns this weeks assignments.",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        let header = "Here are the assignments due within the next 7 days.\n ----\n";
        let message: string = '';
        const assignments: Assignments = await axios
        .get("http://localhost:5174/api/assignments")
        .then((response: any) => {
            return response.data.data;
        })
        const today = new Date();
        assignments.sort((a: any, b: any) => {
            a = new Date(a.dueDate);
            b = new Date(b.dueDate);
            return a - b;
        })
        assignments.forEach((assignment: Assignment) => {
            const parsedDate: Date = new Date(assignment.dueDate);
            const msBetweenDates: number = parsedDate.getTime() - today.getTime();
            const daysBetweenDates: number = msBetweenDates / (24 * 60 * 60 * 1000);
            if (daysBetweenDates < 7 && daysBetweenDates >= 0) {
                const title: string = `[${assignment['title']}](${assignment['link']})\n`;
                const description: string = `${assignment['description']}\n\n`;
                const dueDate: string = `\tDue Date: ${assignment['dueDate']}\n`;
                message += title + dueDate + description;
            }
        });
        const content = header + message;
        await interaction.followUp({
            content
        });
    }
};