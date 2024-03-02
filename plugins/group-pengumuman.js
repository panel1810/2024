/*


Di Record : Zyko MD
©Zyko MD 2024

 * ig: @zzyko_04
 * yt: @zykobotz
 * tt: @zzyko_04

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/



const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')

let handler = async (m, { conn, text, participants }) => {
    let q = text
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    
//    if (!m.quoted) throw `✳️ Reply Pesan`
    
//    if (m.quoted) {
    if (m.quoted && !q) {
        conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users })
    } else {
        const fcon = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? { remoteJid: "status@broadcast" } : {})
            },
            message: {
                contactMessage: {
                    title: "sri",
                    h: `haloo`,
                    jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                }
            }
        }
        conn.sendMessage(m.chat, { text: q || '', mentions: participants.map(a => a.id) }, m)
    }
}

handler.help = ['hidetag'].map(v => v + ' <teks>')
handler.tags = ['group']
handler.command = /^(h|o|pengumuman|announce|hiddentag|hidetag)$/i
handler.limit = true
handler.group = true
handler.admin = true

module.exports = handler