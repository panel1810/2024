let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
let fit = `Total Fitur Bot Saat ini: \n*🔖 Plugins :* ±${totalf} File Plugins\n*🔖 Fitur :* ±${fitur.length}`  
  
await conn.sendMessage(m.chat, {
text: fit,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: zykomd,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})   
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler