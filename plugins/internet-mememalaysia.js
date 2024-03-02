const { googleImage } = require('@bochilteam/scraper')
const { pickRandom } = require("../lib/function")
let handler = async (m, { conn, command }) => {
    let res = await googleImage('meme malaysia')
    let image = pickRandom(res)
    await conn.sendFile(m.chat, image, null, `Nih ${command} nya`, m)
}
handler.help = ['mememalaysia']
handler.tags = ['internet']
handler.command = /^(mememalaysia)$/i
handler.limit = true
module.exports = handler