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

client.on('message', message => {
    if (message.content === 'Porcodio') {
    	message.reply('Diocane ');
  	}
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'Avatar perfavore') {
    // Send the user's avatar URL
      message.reply(message.mentions.members.first());
      message.reply(message.author.avatarURL);
  }
});

/*
client.on('message', message => {
    if (message.content === 'Cambia colore') {
    	role.setColor('#FF0000')
  	}
});
*/

/*
  Benvenuto
*/

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('generale', 'test-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) {
      message.reply('Non trovo il canale :( ')
  }
  // Send the message, mentioning the member
  channel.send(`Benvenuto nel server, ${member}`);
});

client.login(process.env.BOT_TOKEN);
