const { googleImage } = require('@bochilteam/scraper')
const { pickRandom } = require("../lib/function")
let handler = async (m, { conn, command }) => {
    let res = await googleImage('meme korea')
    let image = pickRandom(res)
    await conn.sendFile(m.chat, image, null, `Nih ${command} nya`, m)
}
handler.help = ['memekorea']
handler.tags = ['internet']
handler.command = /^(memekorea)$/i
handler.limit = true
module.exports = handler