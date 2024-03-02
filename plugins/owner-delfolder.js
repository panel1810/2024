/*


Di Buat : Zyko MD
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


let fs = require('fs')
let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silakan masukkan nama folder yang ingin Anda hapus.', m)
    if (!fs.existsSync(`./${text}`)) {
        conn.reply(m.chat, 'Folder dengan nama tersebut tidak ditemukan.', m)
        return
    }    
    try {
        fs.rmdirSync(`./${text}`, { recursive: true });
        conn.reply(m.chat, `Berhasil menghapus folder dengan nama *${text}*`, m)
    } catch (e) {
        console.error(e)
        conn.reply(m.chat, 'Gagal menghapus folder. Silakan coba lagi.', m)
    }
}
handler.help = ['delfolder'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(delfolder)$/i
handler.owner = true
module.exports = handler
