const axios = require("axios");
const { cmd } = require("../command");


cmd({
    pattern: "adult",
    alias: ["adultmenu"],
    desc: "menu the bot",
    category: "menu",
    react: "🎀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*╭───❍「 18+ CMD🔞」❍*
‎*├⬡ .xᴠɪᴅᴇᴏ*
‎*├⬡ .ᴘᴏʀɴ*
‎*├⬡ .xᴠɪᴅᴇᴏs*
‎*├⬡ .ʀᴀɴᴅᴏᴍᴘᴏʀɴ*
‎*├⬡ .ʀᴀɴᴅᴏᴍxᴠɪᴅᴇᴏ*
‎*╰───────────────❍*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/73mlk5.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363302677217436@newsletter',
                        newsletterName: "/𝐌𝐀𝐂𝐎𝐃𝐄𝐑-𝐗𝐌𝐃  𝐀𝐃𝐔𝐋𝐓 𝐌𝐄𝐍𝐔🔞🔞₊",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
