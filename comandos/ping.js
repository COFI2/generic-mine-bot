const Discord = require('discord.js');

module.exports = {
  name: "ping", //Aquí ponemos el nombre del comando
  alias: ["p"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){

  
  message.channel.send(`**MI ping es de ${client.ws.ping}ms **`)


 }

} 