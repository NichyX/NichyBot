const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Sono vivo!');
});

client.on('message', message => {
    if (message.content === 'Sei vivo?') {
    	message.reply('Si, grazie per avermi creato :heart: ');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
