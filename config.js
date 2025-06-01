const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "enter your session ID here or if u did not plz upload creds.json file to the session folder",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prefix for bot
BOT_NAME: process.env.BOT_NAME || "✦ MACODER ✦ XMD ✦",
// add bot name here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custom emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// choose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "27656136438",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦ MACODER ✦ XMD ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ MACODER ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/73mlk5.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> 𝐌𝐀𝐂𝐎𝐃𝐄𝐑-𝐗𝐌𝐃 𝐈𝐒 𝐑𝐄𝐀𝐃𝐘 𝐀𝐍𝐃 𝐀𝐂𝐓𝐈𝐕𝐄\n\n\n𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 𝐌𝐀𝐂𝐎𝐃𝐄𝐑-𝐗𝐌𝐃 𝐁𝐘 𝐌𝐀𝐂𝐎𝐃𝐄𝐑_𝐓𝐄𝐂𝐇©⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 𝐌𝐀𝐂𝐎𝐃𝐄𝐑-𝐗𝐌𝐃 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "true",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "true",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
