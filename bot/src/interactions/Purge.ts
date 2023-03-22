import { CommandInteraction, Client } from "discord.js";
import { Command } from "../Command";
import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();

interface Assignment{
    title: string;
    description: string;
    dueDate: Date;
    link: string;
}

const getConfig = (config: string | ""): any => {
  let configObj: any = {};
  configObj[config] = process.env[config];
  console.log(configObj)
  return configObj;
};

interface Assignments extends Array<Assignment>{};

const arikPUUID = getConfig("ARIK_VALO_PUUID");
const abduPUUID = getConfig("ABDU_VALO_PUUID");
const pearlPUUID = getConfig("PEARL_VALO_PUUID");
const jinPUUID = getConfig("JIN_VALO_PUUID");

const players = [ arikPUUID, jinPUUID, abduPUUID, pearlPUUID ];
const playerKeys = Object.keys(players);

const fetchStats = async () => {
  for(let index = 0; index < players.length; index++){
    // cpmsp
    const key = playerKeys;
    const player = players[index];
    console.log(player);
    // console.log(key, player);
    // const baseURL = getConfig(key[0]);
    // console.log(key, " --y")
    // const baseUrlKey = Object.keys(baseURL)[0]
    // const endPoint = `${baseURL[baseUrlKey]}/v3/by-puuid/matches/na/${player}`;
    // console.log(endPoint, " ---");
    // axios.get(endPoint)
    // .then((response) => console.log(response))
    // .catch((error) => console.log(error));
  }
  
}

export const TestingCommands: Command = {
    name: "testcommand",
    description: "none of your business",
    type: 1, // CHAT_INPUT
    run: async (client: Client, interaction: CommandInteraction) => {
        let header = "NO\n";
        let message: string = "TOUCHY";
        const content = header + message;
        await fetchStats();
        await interaction.followUp({
            content
        });
    }
};