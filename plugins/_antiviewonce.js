/*


Di Record : Zyko MD
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


const { downloadContentFromMessage } = require('@adiwajshing/baileys')
let handler = m => m

handler.before = async function (m) {
    let chat = db.data.chats[m.chat]
    if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return
    if (!chat.viewonce || chat.isBanned) return
if (m.mtype == "viewOnceMessageV2") {
try {
let msg = m.message.viewOnceMessageV2.message;
let type = Object.keys(msg)[0];
let media = await downloadContentFromMessage(
msg[type],
type == "imageMessage" ? "image" : "video"
);
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (/video/.test(type)) {
await conn.sendMessage(
m.chat,
{ video: buffer, caption: `A N T I V I E W O N C E\n\n*_Dari: @${m.sender.split("@")[0]}*_\n\n*_Pesan antiviewonce:_*\n` + msg[type].caption, mentions: [m.sender] },
    { quoted: m })
} else if (/image/.test(type)) {
await conn.sendMessage(
m.chat,
{ image: buffer, caption: `A N T I V I E W O N C E\n\n*_Dari: @${m.sender.split("@")[0]}_*\n\n*_Pesan antiviewonce:_*\n` + msg[type].caption, mentions: [m.sender] },
    { quoted: m }
    )
}
} catch (e) {
console.log(e);
}
}
}   
module.exports = handler

