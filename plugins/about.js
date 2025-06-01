const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["macoder","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 𝐌𝐀𝐂𝐎𝐃𝐄𝐑-𝐗𝐌𝐃 〕━━┈⊷*

*👋 𝐇𝐄𝐋𝐋𝐎 ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 𝐀𝐁𝐎𝐔𝐓 𝐌𝐄 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ, ɪᴛs ᴍᴀᴄᴏᴅᴇʀ-xᴍᴅ-ʙᴏᴛ*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ : ᴍᴀᴄᴏᴅᴇʀ*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : ᴏ.ᴍᴀɴʏᴀᴋᴀ*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : @ᴠɪʙʀᴀ_ᴋᴇʏᴢ*
*┃★│* *ᴀɢᴇ : 16 ʏᴇᴀʀs ᴏʟᴅ*
*┃★│* *ᴄɪᴛʏ : ʀᴜsᴛᴇɴʙᴜʀɢ*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴊᴀᴠᴀsᴄʀɪᴘᴛ ᴡʜᴀᴛsᴀᴘᴘ-ʙᴏᴛ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

       *[ • 𝐂𝐑𝐄𝐃𝐈𝐓𝐒 • ]*
*╭━━━〔 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *▢ᴍᴀᴄᴏᴅᴇʀ*
*┃★│* *▢ᴛᴇᴄʜᴘʀᴏ*
 ┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*


*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀᴄᴏᴅᴇʀ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/73mlk5.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363302677217436@newsletter',
      newsletterName: 'MACODER-XMD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
