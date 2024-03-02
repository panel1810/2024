let handler = async (m, { conn, text, args, usedPrefix, command }) => { 
  const participants = await conn.groupMetadata(m.chat).then(metadata => metadata.participants);
  
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
let neg = `*_Jumlah Anggota Grup Berdasarkan Negara:_*

*_🇮🇩Indonesia: ${countIndonesia}_*
*_🇲🇾Malaysia: ${countMalaysia}_*
*_🇺🇲USA + OTHER : ${countUSA}_*
*_🏳️Negara Lain: ${countOther}_*`
m.reply(neg);
}
handler.help = ['cekmember']
handler.tags = ['group']
handler.command = /^(cekmember)$/i
handler.group = true
module.exports = handler