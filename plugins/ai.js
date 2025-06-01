const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');


cmd({
  pattern: 'fluxpro',
  alias: 'flux',
  react: '🧩',
  desc: 'Generate an image using Flux',
  category: 'image',
  filename: __filename
}, async (conn, mek, m, {
  body,
  from,
  quoted,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const text = body.trim().replace(command, '').trim();
    if (!text) {
      return reply(`*ᴜsᴀɢᴇ:* ${command} <prompt>\n\n*ᴇxᴀᴍᴘʟᴇ:* ${command} cat`);
    }

    await reply('> *ᴍᴀᴄᴏᴅᴇʀ xᴍᴅ ᴘʀᴏᴄᴇssɪɴɢ ɪᴍᴀɢᴇ...*');

    const apiUrl = `https://apis.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;

    await conn.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🎨 *FLUX IMAGE GENERATOR*\n\n📄 *ᴘʀᴏᴍᴘᴛ:* ${text}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀᴄᴏᴅᴇʀ` }, { quoted: m });
  } catch (error) {
    console.error('Error in Flux command:', error);
    reply(`*ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀᴇᴅ:*\n\n> ${error.message}`);
  }
});
