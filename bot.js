// Extract the required classes from the discord.js module
const { Client, RichEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

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

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'somma') {
    // Send the user's avatar URL
      var x = 2;
      var y = 3;
      var somma = 0;
      somma = x+y;
      message.reply(message.mentions.members.first());
      message.reply(message.author.avatarURL);
      message.reply(somma);
  }
});

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
