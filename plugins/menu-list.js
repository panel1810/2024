/*


Di Record : Zyko MD
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


const { promises, readFileSync } = require('fs')
const { join } = require('path')
const { xpRange } = require('../lib/levelling.js')
const moment = require('moment-timezone')
const os = require('os')
const fs = require('fs')
const fetch = require('node-fetch')
const { makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let emotal = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '♪'])}`
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '🗿', '♪'])}`

  let tags = {
   'main': 'MAIN MENU', 
   'owner': 'OWNER',
   'ownerstore': 'OWNER STORE',
   'store': 'STORE',
   'seller': 'SELLER',
   'kalkulator': 'KALKULATOR',
   'pushkontak': 'PUSHKONTAK', 
   'unbanned': 'UNBANNED WHATSAPP',
   'maker': 'TEXTPRO',
   'ephoto': 'EPHOTO 360',
   'photooxy': 'PHOTOOXY',
   'nulis': 'MAGERNULIS',
   'asupan': 'ASUPAN',
   'quran': 'AL QUR\'AN && ISLAM', 
   'openai': 'OPENAI',
   'info': 'INFO',          
   'internet': 'INTERNET',
   'cerpen': 'CERPEN',   
   'anime': 'ANIME',   
   'nsfw': 'NSFW',
   'news': 'NEWS',
   'image': 'IMAGE',   
   'anonymous': 'ANONYMOUS CHAT',
   'menbalas': 'MENFESS',
   'stalker': 'STALKER',
   'downloader': 'DOWNLOADER',      
   'admin': 'ADMIN',
   'group': 'GROUP',
   'vote': 'VOTING',
   'absen': 'ABSEN',
   'catatan': 'CATATAN',
   'premium': 'PREMIUM',   
   'host': 'HOST',
   'jadian': 'JADIAN',
   'game': 'GAME',
   'rpg': 'RPG GAMES',
   'xp': 'EXP & LIMIT',
   'sticker': 'STICKER',
   'kerang': 'KERANG AJAIB',
   'quotes': 'QUOTES',
   'fun': 'FUN',
   'randomfoto': 'RANDOM FOTO',
   'audio': 'AUDIO',
   'sound': 'SOUND',
   'database': 'DATABASE',
   'advanced': 'ADVANCED',
   'tools': 'TOOLS',
   'nocategory': 'NO CATEGORY',
}   
	
const defaultMenu = {
before: ` 
╭─────═[ ℹ️ INFO USER ]═─────⋆
│${emotal} *Nama:* %name
│${emotal} *Tag:* %tag
│${emotal} *Premium:* %prems
│${emotal} *Limit:* %limit
│${emotal} *Uang:* %money
│${emotal} *Role:* %role
│${emotal} *Level:* %level
┠─────═[ 📅 TODAY ]═─────⋆
│${emotal} *${ucapan()} %name!*
│${emotal} *Tanggal:* %week %weton
│${emotal} *Date:* %date
│${emotal} *Tanggal Islam:* %dateIslamic
│${emotal} *WIB:* %wib
│${emotal} *Waktu:* %time
┠─────═[ 🤖 INFO BOT ]═─────⋆
│${emotal} *Nama Bot:* %me
│${emotal} *Mode:* %mode
│${emotal} *Prefix:* [ *%_p* ]
│${emotal} *Baileys:* Multi Device
│${emotal} *Platform:* %platform
│${emotal} *Type:* Node.Js
│${emotal} *Uptime:* %muptime
│${emotal} *Database:* %rtotalreg dari %totalreg
╰──────────═┅═──────────


⃝▣──「 *INFO CMD* 」───⬣
│ *%totalfeatures* Command
│ *Ⓟ* = Premium
│ *Ⓛ* = Limit
▣────────────⬣
%readmore
`.trimStart(),
header: '╭─▸ *FITUR*  *%category* \n│',
body: `│${emot} %cmd %isPremium %islimit`,
footer: '│\n╰────────────˧\n',
after: `${footer}`,
}
let handler = async (m, { conn, text, usedPrefix: _p, __dirname, args, usedPrefix, command}) => {
  try {
  let imgr = pickRandom(flaaa)
  await conn.sendMessage(m.chat, {
      react: {
          text: "🕑",
          key: m.key,
      }
  })  
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
let usrs = db.data.users[m.sender]


 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(fs.readFileSync('./package.json'))
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //---------------------    
    let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, totalfeatures, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

    //----------------- FAKE
//conn.sendMessage(m.chat, { text: `*_Sedang Memuat Proses_*\n\n*_Tunggu ya kak @${m.sender.split('@')[0]}_*`, mentions: [ `${m.sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: ftrol })


      //------------------< MENU All>----------------
/*let sn = `${pickRandom(['mangkane1','mangkane2','mangkane3','mangkane4','mangkane5','mangkane6','mangkane7','mangkane8','mangkane9','mangkane10','mangkane11','mangkane12','mangkane13','mangkane14','mangkane15','mangkane16','mangkane17','mangkane18','mangkane19','mangkane20','mangkane21','mangkane22','mangkane23','mangkane24'])}`      
      
let audio = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${sn}.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: sgc1,
    mediaType: 2, 
    description: sgc1,
    title: "Now Playing...",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/f17621727a115dff52282.jpg')).buffer(),
    sourceUrl: sgc1
}
     }
    })
    await delay(4000);  */
/*}
     }
    })*/
   
      


let jakartaTime = moment.tz('Asia/Jakarta').format('HH:mm:ss');
let bantenTime = moment.tz('Asia/Jakarta').clone().tz('Asia/Jakarta').format('HH:mm:ss');
let jayapuraTime = moment.tz('Asia/Jakarta').clone().tz('Asia/Jayapura').format('HH:mm:ss');
let makassarTime = moment.tz('Asia/Jakarta').clone().tz('Asia/Makassar').format('HH:mm:ss');
let malaysiaTime = moment.tz('Asia/Kuala_Lumpur').format('HH:mm:ss');
let japanTime = moment.tz('Asia/Tokyo').format('HH:mm:ss');
let thailandTime = moment.tz('Asia/Bangkok').format('HH:mm:ss');
let koreaTime = moment.tz('Asia/Seoul').format('HH:mm:ss');

let getDayTime = (time) => {
  let hour = moment(time, 'HH:mm:ss').format('HH');
  if (hour >= 6 && hour < 12) return 'Pagi';
  else if (hour >= 12 && hour < 18) return 'Siang';
  else if (hour >= 18 && hour < 24) return 'Malam';
  else return 'Dini hari';
};

let formattedText = `
*Databases:* ${totalreg}
*Version:* V.${version}
*Baileys:* Multi Device
*Tanggal Islam* : ${dateIslamic}
*Jam Dunia:*
  - Jakarta (${getDayTime(jakartaTime)}): ${jakartaTime}
  - Banten (${getDayTime(bantenTime)}): ${bantenTime}
  - Jayapura (${getDayTime(jayapuraTime)}): ${jayapuraTime}
  - Makassar (${getDayTime(makassarTime)}): ${makassarTime}
  - Malaysia (${getDayTime(malaysiaTime)}): ${malaysiaTime}
  - Jepang (${getDayTime(japanTime)}): ${japanTime}
  - Thailand (${getDayTime(thailandTime)}): ${thailandTime}
  - Korea Selatan (${getDayTime(koreaTime)}): ${koreaTime}
`;





      
      
let all = `
Hello @${m.sender.split("@")[0]}, ${ucapan()}, I am a WhatsApp botz that comes with cool features like download tiktok, create stickers, search for songs, and much more I'm here to help you, in various ways, including sending, and etc. The available features are below

${formattedText}


If you find an error, report it immediately by typing .reports good afternoon owner of the download-ig error feature! fix it!

 *INFO CMD*
     
*Ⓟ* = Premium
*Ⓛ* = Limit`
var _0x165d32=_0x3705;function _0x3781(){var _0x1ed418=['sendMessage','2836752hYQJWN','1267147gyxyrU','6711993HdbEWX','https://telegra.ph/file/9c708c3444b5cabf21bec.jpg','2KBJymj','12ameOVL','299315WVjIlL','6457XXHLBe','30972mXbalp','10PDOAth','1747731PFBnfk','52Ilsxsw','chat','sender','63613CcnJgP'];_0x3781=function(){return _0x1ed418;};return _0x3781();}function _0x3705(_0x14abf1,_0x512ab6){var _0x37814e=_0x3781();return _0x3705=function(_0x3705ee,_0x525fa6){_0x3705ee=_0x3705ee-0x17d;var _0x3dc0f3=_0x37814e[_0x3705ee];return _0x3dc0f3;},_0x3705(_0x14abf1,_0x512ab6);}(function(_0x46558b,_0x5c673e){var _0x1e3779=_0x3705,_0x50a61e=_0x46558b();while(!![]){try{var _0x49efe0=-parseInt(_0x1e3779(0x18a))/0x1+parseInt(_0x1e3779(0x180))/0x2*(parseInt(_0x1e3779(0x186))/0x3)+-parseInt(_0x1e3779(0x187))/0x4*(-parseInt(_0x1e3779(0x182))/0x5)+parseInt(_0x1e3779(0x181))/0x6*(-parseInt(_0x1e3779(0x17d))/0x7)+parseInt(_0x1e3779(0x18c))/0x8+parseInt(_0x1e3779(0x17e))/0x9*(parseInt(_0x1e3779(0x185))/0xa)+parseInt(_0x1e3779(0x183))/0xb*(-parseInt(_0x1e3779(0x184))/0xc);if(_0x49efe0===_0x5c673e)break;else _0x50a61e['push'](_0x50a61e['shift']());}catch(_0x2a324d){_0x50a61e['push'](_0x50a61e['shift']());}}}(_0x3781,0x7f111),conn[_0x165d32(0x18b)](m[_0x165d32(0x188)],{'video':{'url':sadAll()},'gifPlayback':!![],'caption':text,'mentions':[m['sender']],'contextInfo':{'mentionedJid':[m[_0x165d32(0x189)]],'externalAdReply':{'title':v,'body':v1,'thumbnailUrl':_0x165d32(0x17f),'sourceUrl':sgc1,'mediaType':0x1,'renderLargerThumbnail':!![]}}}));
      await conn.sendMessage(m.chat, {
        react: {
            text: "✅",
            key: m.key,
        }
    })
  } catch (e) {
      conn.reply(m.chat, "Maaf, menu sedang error", m)
      throw e
  }
}

handler.help = ['allmenu', 'all']
handler.tags = ['main']
handler.command = /^(allmenu|all|\?)$/i
handler.register = false
module.exports = handler
//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}
const delay = time => new Promise(res => setTimeout(res, time))

function sadAll() {
  let All = pickRandom([
"https://telegra.ph/file/f46c9ebb51efc49ea14d5.mp4",
"https://telegra.ph/file/1fb94fb0db4d9db149ad7.mp4",
"https://telegra.ph/file/6dac1453cbc23bff8754a.mp4",
"https://telegra.ph/file/7e744334e7bfd7e685c65.mp4",
"https://telegra.ph/file/9ca7a7e28257b73d2c0ce.mp4",
"https://telegra.ph/file/aaebb2ab4c79cc69906f7.mp4"
])
 return All
}