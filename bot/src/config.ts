import dotenv from "dotenv";

dotenv.config();

interface ENV {
  DISCORD_TOKEN: string | undefined;
}

interface Config {
  DISCORD_TOKEN: string;
}

const getConfig = (config: string | ""): ENV => {
  let configObj: any = {};
  configObj[config] = process.env[config];
  console.log(configObj);
  return configObj;
  // return {
  //   DISCORD_TOKEN: process.env.DISCORD_TOKEN
  // };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig('DISCORD_TOKEN');

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;