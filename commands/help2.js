const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Extra", "Commands")
        .addField("Ping", "Find The Ping Of The Bot")
    .addField("Si","Find Info on the server")
    .addField("Bi","Find info on the bot")
    .addField("uptime","Find The Bots Uptime")
    .addField("youtube","youtube search something")
    .addField("Updates", "Find out on Future Updates")
    .addField("meme","find a meme")
        .setColor('RANDOM');

    message.channel.send(botembed);
}

module.exports.help = {
    name: "help2"
}
