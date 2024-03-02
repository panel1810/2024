const fs = require('fs')

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🗿',
			key: m.key,
		}
	})
  let files = fs.readdirSync('./mp3')
  if (!files.length) {
    conn.reply(m.chat, 'Tidak ada audio/vn di dalam folder.', m)
    return
  }
  let vnList = files.filter(file => file.endsWith('.opus')).map(file => `◦ ${file.replace('.opus', '')}`).join('\n')
  let vnmp3 = files.filter(file => file.endsWith('.mp3')).map(file => `◦ ${file.replace('.mp3', '')}`).join('\n')
  let caption = '*LIST AUDIO FOLDER MP3*\n\n*Audio/Voice List Note: OPUS*\n\n' + vnList + '\n\n\n' + '*Audio/Voice List Note: MP3*\n\n' + vnmp3
  conn.reply(m.chat, caption, m)
}

handler.help = ['listmp3']
handler.tags = ['owner']
handler.command = /^listmp3$/i
module.exports = handler