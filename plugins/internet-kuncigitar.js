const { chord } = require("@bochilteam/scraper")
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `_Masukan Format Dengan Benar!_\n\n_Contoh_\n${usedPrefix + command} melukis senja`
	try {
	let sp = '       '
	let result = await chord(text)
	let res = `${sp} K U N C I G I T A R\n\n
Artist: ${result.artist}
Title: ${result.title}

*KUNCI GITAR:*
${result.chord}
`
m.reply(res)
} catch (error) {
    console.error(error)
    conn.reply(m.chat, `Gagal pencarian ${text} tidak ditemukan`, m)
  }
}
handler.help = ['kuncigitar'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^(kuncigitar|chord)$/i
handler.limit = true
module.exports = handler 