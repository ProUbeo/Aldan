const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [],  xp: []}).write()

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setUsername("Aldan")
    bot.user.setPresence({ game: { name: 'assister merlin'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "test" ){  

        const embed = new Discord.RichEmbed()
        .setTitle(``)
        .setColor(0xcc0099)
        .setDescription("coucou :3")
        message.channel.send({embed});
    }


}
)
