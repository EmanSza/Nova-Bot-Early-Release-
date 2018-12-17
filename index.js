const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

bot.login(process.env.token);

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  
  });
});

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(`${guild.memberCount} Members :D` , {type: "WATCHING"});

});

//bot.on('ready', () => {
   // bot.user.setStatus('available')
    //bot.user.setPresence({
      //  game: {
        //    name: ` ${guild.memberCount} Members :D`,
          //  type: "watching",
            //url:"https://www.twitch.tv/monstercat"
        //}
    //});
//});



bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
 }else
       

 if(message.content === "nb.setmodlog") {
        message.reply(author, "Sorry User \n This Command is Down Due To Command Code Error \n But you can check for Update here \n https://emansza.github.io ");
    }else
       if (message.content === 'nb.avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }

});

