const fs = require('fs')
const fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
let res = JSON.parse(fs.readFileSync('./package.json'))

let ver = `Bot ini menggunakan script by zyko md official\n\n*Version:* ${res.version}`
m.reply(ver)
  }
handler.help = ['cekversi']
handler.tags = ['info']
handler.command =  /^(cekversi)$/i

handler.register = true
handler.premium = false
handler.limit = false

module.exports = handler 
