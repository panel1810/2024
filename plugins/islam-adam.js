const fs = require("fs")
let handler = async (m, { text, usedPrefix, command }) => {
let res = JSON.parse(fs.readFileSync(`./lib/database/islam/${command}.json`))
let kisah = res[Math.floor(Math.random() * res.length)]
let hasil = `
🕌 Nabi : ${kisah.name}
📅 Tanggal Lahir : ${kisah.thn_kelahiran}
📍 Tempat Lahir : ${kisah.tmp}
🕰 Usia : ${kisah.usia}

📜 Kisah : ${kisah.description}`;

     conn.sendMessage(m.chat, { image: { url: kisah.image_url }, caption: hasil }, { quoted: m})
     }
handler.help = ['adam']
handler.tags = ['quran']
handler.command = /^adam$/i
handler.register = false
handler.limit = true
module.exports = handler
