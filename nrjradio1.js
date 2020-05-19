const Discord = require('discord.js');
const fs = require("fs")
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame("NRJ")
    console.log(`Logged in as ${client.user.tag}!`);
    client.channels.get("711313160677621891").join()
    .then(function play(connection) {
        const dispatcher = connection.playStream("http://185.52.127.173/fr/40050/mp3_128.mp3");
        dispatcher.on('end', () => {
            if (!client.guilds.get("711313160677621891").voiceChannelID) return
            play(connection)
        });
    }).catch(console.log);
});





setInterval(() => {
    client.channels.get("711313160677621891").leave()
    client.channels.get("711313160677621891").join()
    .then(function play(connection) {
        const dispatcher = connection.playStream("http://185.52.127.173/fr/40050/mp3_128.mp3");
        dispatcher.on('end', () => {
            if (!client.guilds.get("711313160677621891").voiceChannelID) return
            play(connection)
        });
    }).catch(console.log);



}, 1200000);





client.login("NzEyMzYxMjA5NjgwMzYzNTQw.XsQkgQ.aTLSuJunUGHOyoWwRQi265i6D5c");
client.on("error", ()=>{})