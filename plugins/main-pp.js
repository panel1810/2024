let handler = async (m, { conn, usedPrefix, text, command }) => {
  let name = conn.getName(m.sender)
  let message = `*UTAMAKAN ASSALAMU'ALAIKUM*

pesan di hapus oleh botz
user name : @${m.sender.split("@")[0]} 

CARA MENGGUNAKAN FITUR BOTZ

Hello ${name}! Thank you for using this bot service.

The following is a list of commands you can use:

1. *.menu* - Displays the menu list
2. *.info* - Displays information about this bot
3. *.help* - Displays help on how to use this bot

Please use the command above to interact with this bot. Thank You!
  `
  let msg = await conn.sendMessage(m.chat, { delete: m.key })
  conn.sendTextWithMentions(m.chat, message, msg)
  
}

handler.customPrefix = /^(pp|p)$/i
handler.command = new RegExp

module.exports = handler
