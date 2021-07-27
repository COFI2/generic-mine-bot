const Discord = require("discord.js")
const client = new Discord.Client();
  module.exports = {
  name: "uptime", //Aquí ponemos el nombre del comando
  alias: ["up"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],
  execute : async(client, message, args) => {

   let days = Math.floor(client.uptime / 86400000);
   let hours = Math.floor(client.uptime / 3600000) % 24;
   let minutes = Math.floor(client.uptime / 60000) % 60;
   let seconds = Math.floor(client.uptime / 1000)  % 60;


   const uptime = new Discord.MessageEmbed()
   .setTitle("**Tiempo Activo**")
   .setColor("RANDOM").setFooter(client.user.username,  client.user.AVATARURL)
   .setTimestamp()
   .setFooter(client.user.username,  client.user.AVATARURL)
   .setDescription(`:clock1: \`${days} Dias\` \`${hours} Horas\` \`${minutes} Minutos\` \`${seconds} segundos\``);
   return message.channel.send(uptime);
  }
} 