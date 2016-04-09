require("dotenv").config()
var chat = require("node-lol-chat/lolchat.io.js");

console.log(chat);

chat.connect(process.env.LOL_USER, process.env.LOL_PASSWORD, 'eu_west');