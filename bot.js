// Extract the required classes from the discord.js module
const { Client, RichEmbed } = require('discord.js');
const fs = require("fs");

let channels;
let data = null;
let voiceLogChannel = "";
let prefix = "";

// Create an instance of a Discord client
const client = new Client();

client.on('ready', () => {
    console.log('Sono vivo!');
	updateChannels();
	setLogChannel(data.voiceLogChannel);
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

client.on('voiceStateUpdate', (oldMember, newMember) => {
	// Check if voiceLogChannel has been set
	if (data.voiceLogChannel === "")
		return;

	let username = oldMember.displayName;
	let userid = oldMember.id;
	let oldVCID = oldMember.voiceChannelID;
	let newVCID = newMember.voiceChannelID;

	let oldChannelName = (oldVCID != null && typeof oldVCID != undefined) ? channels.get(oldVCID).name : null;
	let newChannelName = (newVCID != null && typeof newVCID != undefined) ? channels.get(newVCID).name : null;
	
	if (oldChannelName === null)
		voiceLogChannel.sendMessage(`${username} ${userid} connected to voice and joined ${newChannelName}`);
	else if (newChannelName === null)
		voiceLogChannel.sendMessage(`${username} ${userid} disconnected`);
	else
		voiceLogChannel.sendMessage(`${username} ${userid} moved to ${newChannelName}`);
});

client.on('channelCreate', (channel) => {
	updateChannels();
});

client.on('channelDelete', (channel) => {
	updateChannels();
});


client.on('message', (message) => {
	let msg = message.content;

	if (!msg.startsWith(prefix))
		return;

	// extract command and parameters
	let cmd = msg.replace(prefix, '').slice(0, msg.indexOf(' ') - 1);
	let params = msg.slice(msg.indexOf(' ') + 1, msg.length + 1);

	// check if the user has permission to make changes to the bot
	if (!message.member.hasPermission("ADMINISTRATOR", true))
		return;
	else {
		switch(cmd) {
			case "setLogChannel":
				// Primitive implementation, pls change
				setLogChannel(params, message.channel);
				writedata();
				break;
			default:
				message.channel.sendMessage("Sorry, I don't recognize that command T_T.");
		}
	}
});

let readdata = function () {
	data = JSON.parse(fs.readFileSync("data.json"));
	token = data.token;
	prefix = data.prefix;
}

let writedata = function () {
	fs.writeFile('data.json', JSON.stringify(data), 'utf8', () => {
		console.log('Data written successfully!');
	});
}

let updateChannels = function () {
	channels = client.channels;
}


let setLogChannel = function (channel, msgChannel) {
	voiceLogChannel = channels.get(channels.findKey('name', channel));

	// Return if no channel has been set
	if (typeof voiceLogChannel === 'undefined')
		return;
	else if (typeof voiceLogChannel === 'undefined' && msgChannel) {
		msgChannel.sendMessage(`Couldn't find channel '${channel}'`);
		return;
	}
	else if (voiceLogChannel.type === 'voice' && msgChannel) {
		msgChannel.sendMessage(`Can only log to text channels`);
		return;
	}

	data.voiceLogChannel = channel;

	if (msgChannel)
		msgChannel.sendMessage(`Channel for logging set to '${channel}'`);
}

readdata();

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