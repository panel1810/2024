let moment = require('moment-timezone')
let time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
let salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let [number, pesan] = text.split `|`
if (!number) return conn.reply(m.chat, '• *Example :* .call 62XXX|Hai', m)
if (!pesan) return conn.reply(m.chat, '• *Example :* .call 62XXX|Hai', m)
if (number == nomorown) return conn.reply(m.chat, 'Tidak bisa spam ke nomor ini!', m)
let call = { 
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: `${pesan}`
}}
conn.relayMessage(`${number}@s.whatsapp.net`, call, {})
let logs = `[ ✔️ ] Berhasil Call Korban wa.me/${number}`
conn.reply(m.chat, logs, m)
}
handler.help = ['call *<number|text>*']
handler.tags = ['tools']
handler.command = /^(call)$/i
handler.owner = true
module.exports = handler