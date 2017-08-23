const Discord = require('discord.js');
const client = new Discord.Client();
var grabbed = false;
var rpgClient = null;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
	
	if (message.author.username == "DiscordRPG" && message.author.discriminator == "0366" && grabbed == false) {
		
		console.log("Recorded DiscordRPG, queueing loops.");
		rpgClient = message.author;
		grabbed = true;
		
		for ( var i = 0 ; i < 288 ; i++ ) {	
			setTimeout(function() {
				console.log ("Running process...");
				message.author.send ("#!chop")
				message.author.send ("#!forage")
				message.author.send ("#!mine")
				console.log ("Finished process, waiting 5 minutes...");
			}, i * 310000);
		}
		
	}
	
});

// Log the bot into the server
client.login("");