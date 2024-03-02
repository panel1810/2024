let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     Sistem Bot
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BERJALAN DENGAN BAIK*', 'status@broadcast')
}
handler.help = ['sistembot']
handler.tags = ['info']
handler.command = /^(sistembot)$/i
module.exports = handler 