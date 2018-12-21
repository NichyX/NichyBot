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

client.on('message', message => {
    if (message.content === 'nichybotinfo') {
    	const exampleEmbed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Titolo')
    .setURL('https://www.twitch.tv/nichyx')
    .setAuthor('NichyX', 'https://cdn.discordapp.com/avatars/213584350812438528/c2514a01a286ddf9005a21ac258d3706.png?size=2048', 'https://www.twitch.tv/nichyx')
    .setDescription('Il bot di NichyX')
    .setThumbnail('https://cdn.discordapp.com/avatars/213584350812438528/c2514a01a286ddf9005a21ac258d3706.png?size=2048')
    .addField('Regular field title', 'Some value here')
    .addBlankField()
    .addField('Inline field title', 'Some value here', true)
    .addField('Inline field title', 'Some value here', true)
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://cdn.discordapp.com/avatars/213584350812438528/c2514a01a286ddf9005a21ac258d3706.png?size=2048')
    .setTimestamp()
    .setFooter('©2019, NichyX. Tutti i diritti riservati.    ', 'https://cdn.discordapp.com/avatars/213584350812438528/c2514a01a286ddf9005a21ac258d3706.png?size=2048');

channel.send(exampleEmbed);
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
