let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let ffmpeg = require('fluent-ffmpeg')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  let name = text.trim()
  if (!name) return conn.reply(m.chat, 'Masukkan Nama image yang akan dihapus!', m)
  let ext = '.png'
  let namabaru = name + ext
  let filepath = path.join(__dirname, '../media/', namabaru)
  if (!fs.existsSync(filepath)) {
    return conn.reply(m.chat, `File *${namabaru}* tidak ditemukan.`, m)
  }
  fs.unlinkSync(filepath)
  conn.reply(m.chat, `Berhasil menghapus *${namabaru}*`, m)
}

handler.help = ['delmedia']
handler.tags = ['owner']
handler.command = /^delmedia$/i
handler.owner = true

module.exports = handler
