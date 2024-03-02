const path = require("path");
const { exec } = require("child_process")
const { pickRandom } = require("../lib/function")
const fs = require("fs")
let handler = async (m, { conn, text, args, usedPrefix, command }) => { 
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''

    if (/audio/.test(mime)){ 
        let media = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
        let out = path.join(__dirname, `${makeid(5)}.mp3`)
        exec(`ffmpeg -i ${media} -filter_complex "areverse" ${out}`, async (err, stderr, stdout) => {
            if (err) return m.reply('Error!')
            await conn.sendFile(m.chat, out, 'audio.mp3', '', m)
            fs.unlinkSync(out)
            fs.unlinkSync(media)
        })
    } else if (/image|video/.test(mime)) {
        let media = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
        let out = path.join(__dirname, `${makeid(5)}.mp4`)
        exec(`ffmpeg -i ${media} -vf reverse ${out}`, async (err, stderr, stdout) => {
            if (err) return m.reply('Error!')
            await conn.sendFile(m.chat, out, 'audio.mp4', '', m)
            fs.unlinkSync(out)
            fs.unlinkSync(media)
        })
    } else {
        m.reply('Harap balas dengan pesan audio, video, atau gambar!')
    }
}

handler.help = ['terbalik'].map(v => v + ' <image/video>')
handler.tags = ['tools']
handler.command = /^(terbalik)$/i
handler.group = true
module.exports = handler

const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
/*


Di Recorde: Zyko MD
©Zyko MD 2023

 * ig: @zzyko_04
 * yt: @zykobotz
 * tt: @zzyko_04

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/
