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
    if (!text) return conn.reply(m.chat, 'Silakan masukkan nama folder yang ingin Anda buat.', m)
    if (fs.existsSync(`./${text}`)) {
        conn.reply(m.chat, 'Folder dengan nama tersebut sudah ada.', m)
        return
    }    
    try {
        fs.mkdirSync(`./${text}`)
        conn.reply(m.chat, `Berhasil membuat folder dengan nama *${text}*`, m)
    } catch (e) {
        console.error(e)
        conn.reply(m.chat, 'Gagal membuat folder. Silakan coba lagi.', m)
    }
}

handler.help = ['addfolder'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(addfolder)$/i
handler.owner = true
module.exports = handler