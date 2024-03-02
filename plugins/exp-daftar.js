const { createHash } = require('crypto')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const { delay } = require("../lib/function")
let Reg = /\|?(.*)([.|] *?)([0-9]*)\.([a-zA-Z]*)/i

let handler = async function (m, { text, usedPrefix, command, isOwner }) {
//let moment = require('moment-timezone');
let wibh = moment.tz('Asia/Jakarta').format('HH');
let wibm = moment.tz('Asia/Jakarta').format('mm');
let wibs = moment.tz('Asia/Jakarta').format('ss');
let wktuwib = `${wibh}:${wibm}:${wibs} WIB`;

let d = new Date();
d.setTime(d.getTime() + 7 * 3600000); // WIB to UTC+7
let locale = 'id';
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
let week = d.toLocaleDateString(locale, { weekday: 'long' });
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender  
  let reg = 'https://telegra.ph/file/975b07343239240e5a0be.jpg'
  let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
  let namae = conn.getName(m.sender)
  let md = `✪〘 𝟏𝐒𝐓 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐓𝐈𝐎𝐍 〙✪

Hai ${namae}

untuk mendaftar silahkan gunakan perintah 
${usedPrefix}${command} namaAnda.umur.jenisKelamin
Contoh: ${usedPrefix}${command} ZYKO.18.cowok

     〘 𝐙𝐘𝐊𝐎𝐁𝐎𝐓𝐙 〙`
  
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, { image: { url: pp }, caption: md }, { quoted: fkontak})
  let [_, name, splitter, age, gender] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  if (!gender) throw 'Jenis kelamin tidak boleh kosong (cowok/cewek)'
  age = parseInt(age)
  if (age > 30) throw 'WOI TUA (。-`ω´-)'
  if (age < 5) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.gender = gender
  user.regTime = +new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')  
  let fre = pickRandom(['OshdnpGaka','2004','2006','fghiul','A820bdoqP','hkihswu','bh!kaiyin','PagpqvUac','91hakHcwo','A820bdoqP',])
   let resgis = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let regsi = `✪〘 𝟏𝐒𝐓 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐓𝐈𝐎𝐍 〙✪
  
*Successful Registration!*


*Nama :* ${name}
*Umur :* ${age} Tahun
*Jenis Kelamin :* ${gender}
*Resi :* ${sn}
*premgift :* ${fre}
*Register On :* ${week} ${date}
*Tanggal On :* ${wktuwib}
*Nomor :* ${m.sender.split('@')[0]}
*Status:* ${isOwner? 'Owner':'User'} ${namebot}
*Premium :* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
*Owner :* ${isOwner? 'Owner':'User'}
*User Ke :* ${resgis}

Silahkan ketik *#rules* sebelum memulai bot.
  
            〘 𝐙𝐘𝐊𝐎𝐁𝐎𝐓𝐙 〙`
m.reply(`_succes verifikasi dari database cek private chat untuk melihat data diri._`)
conn.sendMessage(m.sender, { text: `*Memuat Data* › @${m.sender.split('@')[0]}`, mentions: [ `${m.sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })  
await delay(4000)          
conn.sendMessage(m.sender, { image: { url: pp }, caption: regsi }, { quoted: fkontak})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>.<jenisKelamin>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

module.exports = handler

  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }