const Discord = require('discord.js');

module.exports = {
  name: "help", //Aquí ponemos el nombre del comando
  alias: ["hp"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){

 const embedprincipal = new Discord.MessageEmbed()

 .setTitle("bienvenido al apartado de ayuda :D")
 .setDescription("reacciona a ⛏️ para ir al apartado de Mineria\n\nReacciona a 👷  para ir al apartado de staff\n\nReacciona a 🔑 Para ir a la pagina principal ")

 const embedmineria = new Discord.MessageEmbed()
 .setTitle("apartado de mineria") 
 .setDescription("**m!mine**\nMina Cualquier mineral \n**m!bal** \nmira cuanto dinero tienes\n**m!i**\nmira todos los objetos de tu inventario ")
 .setColor("RANDOM")
 const embedstaff = new Discord.MessageEmbed()
 .setTitle("apartado de staff") 
 .setDescription("**m!say**\nPuedes hacer que el bot repita lo que digas con este comando\n**m!send** \nPuedes enviar un mensaje con el bot a cualquier canal")
 .setColor("RANDOM")

 message.channel.send(embedprincipal).then(msg => {
   msg.react("⛏️")
   msg.react("👷")
   msg.react("🔑")   

   msg.awaitReactions((reaction, user) => {
     if(message.author.id !== user.id) return;
     if(reaction.emoji.name === "🔑"){
       msg.edit(embedprincipal)
     }

     if(reaction.emoji.name === "⛏️"){
       msg.edit(embedmineria)
     }
     if(reaction.emoji.name === "👷"){
       msg.edit(embedstaff)
     }
    })
  })

 }

} 