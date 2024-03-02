let handler = async (m, { groupMetadata, command, usedPrefix, text }) => {
    if (!text) throw `Contoh:
    ${usedPrefix + command} pengcoli`
    let user = db.data.users
    let ps = groupMetadata.participants.map(v => v.id)
    let a = pickRandom(ps)
    let b = pickRandom(ps)
    let c = pickRandom(ps)
    let d = pickRandom(ps)
    let e = pickRandom(ps)
    let f = pickRandom(ps)
    let g = pickRandom(ps)
    let h = pickRandom(ps)
    let i = pickRandom(ps)
    let j = pickRandom(ps)
    let k = Math.floor(Math.random() * 70);
    let x = `${pickRandom(['😨', '😅', '😂', '😳', '😎', '🥵', '😱', '🐦', '🙄', '🐤', '🗿', '🐦', '🤨', '🥴', '😐', '👆', '😔', '👀', '👎'])}`
    let l = Math.floor(Math.random() * x.length);
    let top = `*${x} Top 10 ${text} ${x}*

*1. ${user?.[a]?.registered ? user[a].name: conn.getName(a)}*
*2. ${user?.[b]?.registered ? user[b].name: conn.getName(b)}*
*3. ${user?.[c]?.registered ? user[c].name: conn.getName(c)}*
*4. ${user?.[d]?.registered ? user[d].name: conn.getName(d)}*
*5. ${user?.[e]?.registered ? user[e].name: conn.getName(e)}*
*6. ${user?.[f]?.registered ? user[f].name: conn.getName(f)}*
*7. ${user?.[g]?.registered ? user[g].name: conn.getName(g)}*
*8. ${user?.[h]?.registered ? user[h].name: conn.getName(h)}*
*9. ${user?.[i]?.registered ? user[i].name: conn.getName(i)}*
*10. ${user?.[j]?.registered ? user[j].name: conn.getName(j)}*
`.trim()
    m.reply(top)
}
handler.help = ['top']
handler.tags = ['fun']
handler.command = /^top$/i
handler.group = true
module.exports = handler 

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}