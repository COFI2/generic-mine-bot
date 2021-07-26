
const Discord = require('discord.js'); //Definimos discord
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require('discord.js'); //Definimos guild, MessageEmbed y otras cosas importantes
const keepAlive = require("./server.js")
require('dotenv').config(); //Definimos keepAlive que nos servirá para tener el bot 24/7
const fs = require('fs'); //Definimos fs
let { readdirSync } = require('fs'); //Definimos readdirSync que también lo necesitamos

function presence(){
  client.user.setPresence({
     status: "dnd",  
     activity: {
        name: `${client.guilds.cache.size} Servers|m!help|Version 0.1 `,
        type: "COMPETING"
     }
  });
}
client.on("ready", () => {
    console.log("Modo latam on");
    presence();
});

client.commands = new Discord.Collection();
const commandFiles = fs
	.readdirSync('./comandos')
	.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./comandos/${file}`);
	client.commands.set(command.name, command);
}

let prefix = 'm!'; //Definimos un prefix para usar
//handler


client.on('message', message => {

  console.log(message.content)
	//Abrimos un evento message, esto es muy importante porque es donde estarán los comandos
	if (message.author.bot) return; //Con esto hacemos que el bot no responda a mensajes de otros bots lo cual evitará que entre en bucles
	if (!message.content.startsWith(prefix)) return; //Aquí hacemos que si el mensaje no empieza con el prefix el bot no responda

	let usuario = message.author ||message.mentions.members.first() 
  //Definimos el usuario
	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/g); //Definimos los argumentos
	const command = args.shift().toLowerCase(); //Definimos el comando

	let cmd = client.commands.find(
		c => c.name === command || (c.alias && c.alias.includes(command))
	);
	if (cmd) {
		cmd.execute(client, message, args);
	}

	//Aquí irían los comandos que pondremos más adelante
}); //Cerramos el evento


//de aqui haci abajo esto va en index claramente
const Monitor = require("ping-monitor")


keepAlive();
const monitor = new Monitor({
  website: "no",
  title: "Generic mine bot",
  interval: 5
})
//copia eso de arrriba

client.login(process.env.BRUH)
