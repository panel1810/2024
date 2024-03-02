const { googleImage } = require('@bochilteam/scraper')
const { pickRandom } = require("../lib/function")
let handler = async (m, { conn, command }) => {
    let res = await googleImage('meme japan')
    let image = pickRandom(res)
    await conn.sendFile(m.chat, image, null, `Nih ${command} nya`, m)
}
handler.help = ['memejapan']
handler.tags = ['internet']
handler.command = /^(memejapan)$/i
handler.limit = true
module.exports = handler