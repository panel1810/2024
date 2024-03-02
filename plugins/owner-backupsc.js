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



const fs = require('fs')
let handler = async (m, { conn, text }) => {
if (!text) throw `masuka Text backupsc\n\nContoh: .backupsc zykobotz`
await m.reply("Sabar Mas Lagi Backup!!!");
const { execSync } = require("child_process");
const ls = (await execSync("ls"))
  .toString()
  .split("\n")
  .filter(
    (pe) =>
 pe != "node_modules" &&
 pe != "session" &&
 pe != "package-lock.json" &&
 pe != "yarn.lock" &&
 pe != ""
  );
const exec = await execSync(`zip -r ${text}.zip ${ls.join(" ")}`);
await conn.sendMessage(
  m.sender,
  {
    document: await fs.readFileSync(`./${text}.zip`),
    mimetype: "application/zip",
    fileName: `${text}`,
  },
{ quoted: m }
);
await execSync(`rm -rf ${text}V3.zip`);
m.reply("*_Succes backupsc, botz telah mengirimkan ke chat private ✅_*")
}
handler.help = ['backupsc'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(backupsc)$/i
handler.owner = true
module.exports = handler