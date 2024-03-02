const fs = require('fs')

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕐',
			key: m.key,
		}
	})
  let files = fs.readdirSync('./media')
  if (!files.length) {
    conn.reply(m.chat, 'Tidak ada media/poto di dalam folder.', m)
    return
  }
  let medpng = files.filter(file => file.endsWith('.png')).map(file => `◦ ${file.replace('.png', '')}`).join('\n')
  let medjpg = files.filter(file => file.endsWith('.jpg')).map(file => `◦ ${file.replace('.jpg', '')}`).join('\n')
  let caption = '*LIST MEDIA FOLDER MEDIA*\n\n*List Media: PNG*\n\n' + medpng + '\n\n\n' + '*List Media: JPG*\n\n' + medjpg
  conn.reply(m.chat, caption, m)
}

handler.help = ['listmedia']
handler.tags = ['owner']
handler.command = /^listmedia$/i
module.exports = handler