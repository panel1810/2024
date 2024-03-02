const { sticker } = require('../lib/sticker.js')
const api = require('api-dylux');
let handler = async (m, { conn, args, text, usedPrefix, command }) => {  
  if (!text) throw `Masukan Text!`
  let res = await api.ttp(text)
  await m.reply('Tunggu Sebentar...')
  const stiker = await sticker(false, res.result, global.packname, global.author);
    if (stiker) await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}        
handler.help = ['ttp'].map(v => v + ' <teks>');
handler.tags = ['sticker'];
handler.command = /^ttp$/i;
handler.limit = true
module.exports = handler