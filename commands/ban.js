const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mod-log');
    let modRole = message.guild.roles.find('name', 'mod-log');
    if (!message.member.roles.has(modRole.id)) {
        return message.reply('you have insufficient permissions to use this command.').catch(console.error);
    }
    if (!modlog) return message.reply('I cannot find a mod-log channel!')
    if (message.mentions.users.size < 1) return message.reply('you must mention a user to ban.').catch(console.error);
    if (reason.length < 1) return message.reply('you must supply a reason to ban the mentioned user.');
    
    if (!message.guild.member(user).bannable) return message.reply('I cannot ban that user from the server.');
    message.guild.ban(user, 1);
    
    client.channels.get(modlog.id).send({embed: {
        color: 13174317,
        author: {
        name: `🚫 Banned ${user.username}#${user.discriminator} (${user.id})`,
        icon_url: user.avatarURL
        },
        title: "",
        url: "",
        description: `\`\`\`js\nReason: ${reason}\nResponsible moderator: ${message.author.tag} (${message.author.id})\`\`\``,
        // fields: [{
        //     name: "Fields",
        //     value: "They can have different fields with small headlines."
        // },
        // {
        //     name: "Masked links",
        //     value: "You can put [masked links](http://google.com) inside of rich embeds."
        // },
        // {
        //     name: "Markdown",
        //     value: "You can put all the *usual* **__Markdown__** inside of them."
        // }
        // ],
        timestamp: new Date(),
        footer: {
        //icon_url: client.user.avatarURL,
        text: "Moderation system powered by delet"
        }
    }
});

message.channel.send(`You successfully **banned** ${user.tag} for "${reason}". :ok_hand:`);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ban',
    description: 'Bans the mentioned user from the server.',
    usage: 'ban [user] [reason]'
};
