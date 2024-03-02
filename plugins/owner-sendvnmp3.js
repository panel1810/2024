const fs = require('fs')
const path = require('path')

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `contoh: ${usedPrefix+command} sholawat\n\nfitur ini untuk ngambil audio yang ada di folder mp3 pada script botz WhatsApp`
  let audioFolder = './mp3'
  let audioName = `${text}.opus`
  let audioPath = path.join(audioFolder, audioName)

  if (!fs.existsSync(audioPath)) {
    let audioFiles = fs.readdirSync(audioFolder)
    let audioFile = audioFiles.find(file => file.toLowerCase() === audioName.toLowerCase())
    if (!audioFile) return m.reply(`Audio ${text} tidak ditemukan!.`)
    audioName = audioFile
    audioPath = path.join(audioFolder, audioName)
  }
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕐',
			key: m.key,
		}
	})
  let audioBuffer = fs.readFileSync(audioPath)
  conn.sendFile(m.chat, audioBuffer, audioName, '', m)
}

handler.help = ['sendvnmp3']
handler.tags = ['owner']
handler.command = /^(sendvnmp3)$/i;
handler.owner = true
module.exports = handler