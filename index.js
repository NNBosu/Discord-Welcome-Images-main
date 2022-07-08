//define the libraries
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
//when its ready log it
client.on("ready", ()=>console.log("READY"));
//define welcome "package"
const welcome = require("./welcome");
welcome(client);
//start the bot
client.login(config.TOKEN);
