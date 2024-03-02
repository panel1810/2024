/*


Di Buat : Zyko MD
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


let handler = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    text,
    command
}) => {
if (!text) return m.reply(`🚩 Enter the group id and text in the correct format, for Example: ${usedPrefix+command}1234567890@g.us|assalamualaikum save Zyko MD`)
let [groupId, pushText] = text.split('|') //text.split("|")[0]
if (!groupId || !pushText) throw m.reply(`Enter the group id and text in the correct format, for Example: ${usedPrefix+command}1234567890@g.us|assalamualaikum save Zyko MD`)
m.reply('🚩 Sedang Pushkotak')
const metadata2 = await conn.groupMetadata(groupId)
const halss = metadata2.participants
for (let mem of halss) {
await delay(4000) //4 detik 
conn.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: text.split("|")[1] })
}  
m.reply('🚩 Success Push Contacts')
}
handler.command = handler.help = ['pushkontakid', 'pushid']
handler.tags = ['pushkontak']
handler.owner = true
handler.private = true
module.exports = handler
const delay = time => new Promise(res => setTimeout(res, time))