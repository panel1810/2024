let fs = require('fs')
let path = require('path')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  let image = m.quoted && m.quoted.mimetype.startsWith('image') ? await m.quoted.download() : m.msg.imageData
  if (!image) return conn.reply(m.chat, '🚩 Kirim/Reply gambar dengan keterangan *.addgambar* zyko\n\nfitur ini adalah untuk add gambar kepada folder media di dalam script ini jadi folder media yang telah add gambar maka image yang add bisa gunakan dengan ganti Poto dan sebagai nya\n\n by: zyko', m)
  let name = text.trim()
  if (!name) return conn.reply(m.chat, 'Masukkan Nama!', m)
  let ext = path.extname(name)
  let namabaru = name.replace(ext, '') + '.png'
  let filepath = path.join(__dirname, '../media/', namabaru)
  if (fs.existsSync(filepath)) {
    return conn.reply(m.chat, `File *${namabaru}* telah digunakan. Silakan cari nama yang lain.`, m)
  }
  fs.writeFileSync(filepath, image)
  conn.reply(m.chat, `🚩 Berhasil menyimpan *${namabaru}*\nke folder media`, m)
}

handler.help = ['addmedia']
handler.tags = ['owner']
handler.command = /^addmedia$/i
handler.owner = true
module.exports = handler
