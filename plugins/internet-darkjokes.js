const fetch = require('node-fetch')
const { pickRandom } = require("../lib/function")
let handler = async (m, { conn }) => {
    let res = await(await fetch('https://raw.githubusercontent.com/tegarpryd/merlynkurnia/d367f3f359df10c09f35d4b3cb9ec384eafb1b47/fun/darkjoke.json')).json()
    let img = pickRandom(res)
    await conn.sendFile(m.chat, img.image, "", "Dark ga si adick adick", m)
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^(darkjoke|darkjokes)$/i
handler.limit = true
module.exports = handler 