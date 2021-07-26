const Discord = require('discord.js');
const client = new Discord.Client();

const {  Client, MessageEmbed } = require("discord.js")
module.exports = {
  name: "say", //Aquí ponemos el nombre del comando
  alias: ["s"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){


  let texto = args.join(" ")
  if(!texto) return message.channel.send("Debes escribir algo para que lo diga")

   message.channel.send(texto, { allowedMentions: { parse: ["users"] } })
 }
} 