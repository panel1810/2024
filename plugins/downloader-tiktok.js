const { Tiktokdl } = require("../lib/zyko")
//const { wait } = require("../lib/function")
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 if (!text) throw `🚩 *Example:* ${usedPrefix+command} link TikTok`
    await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
    try {
 //   await wait(m)
 m.reply(md)
    let ler = await Tiktokdl(text)
    let cer = ler.result
	let cap = `
              *「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────

📛 *Nickname:* ${cer.author.nickname}
🆔 *aweme_id:* ${cer.aweme_id}
🌍 *region:* ${cer.region}
⏰ *create_time:* ${cer.create_time}
🆔 *uid:* ${cer.author.uid}
🔑 *unique_id:* ${cer.author.unique_id}
🎂 *birthday:* ${cer.author.birthday}
⏳ *duration:* ${cer.author.duration}

📒 *Description:* ${cer.desc}

_©YT ZYKO MD OFFICIAL 🍭_
`
conn.sendMessage(m.chat, { video: { url: cer.download.nowm }, caption: cap }, { quoted: m})
} catch (error) {
    console.error(error)
    conn.reply(m.chat, `link tidak valid/tidak support`, m)
  }
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttdl|tiktok|tiktokdl|tiktokdownload|tt|tiktokvid|ttvid)$/i
handler.limit = true
handler.register = true
module.exports = handler