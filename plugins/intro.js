const fetch = require('node-fetch');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let pp = await conn.profilePictureUrl(m.chat).catch(_ => null);

  let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`;

  let wibu = pickRandom(hwaifu)
  let thumb = await (await fetch(wibu)).buffer();  
  conn.sendFile(m.chat, thumb, '', krtu, m)
}
handler.help = ["intro"];
handler.tags = ["main"];
handler.command = /^(intro)$/i;
module.exports = handler;
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}