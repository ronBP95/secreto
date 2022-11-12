require('dotenv').config(); //initialize dotenv
const { Client, Events, GatewayIntentBits } = require('discord.js'); //import discord.js

const client = new Client({
  intents: [
		GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
  ]
}); //create new client

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Slash Commands will go here

// Event handlers will go here

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token