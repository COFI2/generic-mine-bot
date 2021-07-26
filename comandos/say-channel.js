const Discord = require('discord.js');

module.exports = {
  name: "send", //Aquí ponemos el nombre del comando
  alias: ["sc"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){

   var perms = message.member.hasPermission("ADMINISTRATOR")

  if(!perms) return message.channel.send("No tienes permisos para ejuctar el comando")

  let canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("debes mensionar un canal")

  let texto = args.slice(1).join(" ")
  if(!texto) return message.channel.send("debes escribir algo para repetirlo")


  canal.send(texto)

  

 }

}