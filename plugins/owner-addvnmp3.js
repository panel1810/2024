let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let ffmpeg = require('fluent-ffmpeg')
let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let vn = m.quoted && m.quoted.mimetype.startsWith('audio') ? await m.quoted.download() : m.msg.audioData
  if (!vn) return conn.reply(m.chat, '🚩 Send/Reply Song with the caption *.addvn* onichan\n\nfitur ini adalah untuk add vn kepada folder mp3 di dalam script ini jadi folder mp3 yang telah add vn maka vn yang add bisa gunakan dengan ganti audio dan sebagai nya\n\n by zyko', m)

  let name = text.trim()
  if (!name) return conn.reply(m.chat, 'Enter Name!', m)

  let ext = path.extname(name)
  let namabaru = name.replace(ext, '') + '.opus'

  let filepath = path.join(__dirname, '../mp3/', namabaru)
  if (fs.existsSync(filepath)) {
    return conn.reply(m.chat, `File *${namabaru}* telah di gunakan. Silahkan cari nama yang lain.`, m)
  }
 conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let bufs = []
  let cmd = spawn('ffmpeg', [
    '-i', '-',
    '-f', 'opus',
    '-ar', '48000',
    '-ac', '2',
    '-vbr', 'on',
    '-application', 'voip',
    '-compression_level', '10',
    '-frame_duration', '20',
    '-packet_loss', '5',
    'pipe:1'
  ])
  cmd.stderr.on('data', console.error)
  cmd.stdout.on('data', chunk => bufs.push(chunk))
  cmd.on('exit', async code => {
    if (code !== 0) return conn.reply(m.chat, `🚩 Gagal menambahkan *${name}*.opus`, m)

    let buffer = Buffer.concat(bufs)
    await fs.promises.writeFile(filepath, buffer)

    conn.reply(m.chat, `🚩 Berhasil menyimpan *${namabaru}*\nke folder mp3`, m)
  })
  cmd.stdin.write(vn)
  cmd.stdin.end()
}
handler.help = ['addvnmp3']
handler.tags = ['owner']
handler.command = /^addvnmp3$/i
handler.owner = true
module.exports = handler