const Discord = require('discord.js');const { Client, MessageEmbed, Collection, Guild  } = require("discord.js");
const db = require("megadb")
const carbon = new db.crearDB("carbon")
const piedra = new db.crearDB("piedra")


module.exports = {
  name: "mine", //Aquí ponemos el nombre del comando
  alias: ["m"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){

  const user = message.author || message.mentions.members.first() 

  if(!carbon.tiene(`${user.id}`))

    carbon.establecer(`${user.id}` , 0)

  let randomc = Math.floor(Math.random() *5) + 10



  if(!piedra.tiene(`${user.id}`))

   piedra.establecer(`${user.id}` , 0)

  let randomP = Math.floor(Math.random() *10) + 20
  

  carbon.sumar(`${user.id}`, randomc)
  piedra.sumar(`${user.id}`, randomP)

  
  message.channel.send(`El usuario ${user} ha minado y gano ${randomc} y ${randomP} <:PIEDRA:868114727887331379> `);
} 

}  
