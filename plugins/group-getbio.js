let handler = async (m, { conn, text, args, isOwner, participants }) => {
	if (m.quoted) {
		try {
			let user = m.quoted.sender;
			let bio = await conn.fetchStatus(m.quoted.sender)
			conn.reply(m.chat, `[ bio @${(user || '').replace(/@s\.whatsapp\.net/g, '')} ]\n\n${bio.status}`, null, { mentions: [user] })
		} catch (e) {
			console.log(e)
			let user = m.quoted.sender;
			conn.reply(m.chat, `Bio @${(user || '').replace(/@s\.whatsapp\.net/g, '')} di private.`, null, { mentions: [user] })
		}
	} else {
		if (!text) return m.reply(`*@tag* someone!`)
		try {
			let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
			let bio = await conn.fetchStatus(who)
			conn.reply(m.chat, `[ bio @${(who || '').replace(/@s\.whatsapp\.net/g, '')} ]\n\n${bio.status}`, null, { mentions: [who] })
		} catch (e) {
			console.log(e)
			let user = m.mentionedJid[0]
			conn.reply(m.chat, `Bio @${(user || '').replace(/@s\.whatsapp\.net/g, '')} di private.`, null, { mentions: [user] })
		}
	}
}
handler.help = ['getbio <@tag/reply>']
handler.tags = ['group']
handler.command = /^(getb?io)$/i
handler.group = true
module.exports = handler