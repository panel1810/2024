const fs = require('fs')
const path = require('path')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Contoh: ${usedPrefix}${command} zyko\n\nFitur ini untuk mengirimkan media dari folder media pada script bot WhatsApp`

  let mediaFolder = './media'
  let imageExtensions = ['.jpg', '.png']
  let imageName = null

  // Mencari ekstensi gambar yang tersedia
  for (let extension of imageExtensions) {
    let imagePath = path.join(mediaFolder, `${text}${extension}`)
    if (fs.existsSync(imagePath)) {
      imageName = `${text}${extension}`
      break;
    }
  }

  // Jika gambar tidak ditemukan
  if (!imageName) {
    return m.reply(`Gambar ${text} tidak ditemukan!`)
  }

  conn.chatRead(m.chat) // Menandai pesan sebagai telah dibaca
  conn.sendMessage(m.chat, {
    react: {
      text: '🕐',
      key: m.key,
    }
  })

  // Membaca file gambar ke dalam buffer
  let imageBuffer = fs.readFileSync(path.join(mediaFolder, imageName))

  // Mengirimkan gambar
  conn.sendFile(m.chat, imageBuffer, imageName, '', m)
}

handler.help = ['sendmedia']
handler.tags = ['owner']
handler.command = /^(sendmedia)$/i;
handler.owner = true
module.exports = handler
