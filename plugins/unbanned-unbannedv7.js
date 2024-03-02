const axios = require('axios');
const cheerio = require('cheerio');
const { sleep } = require("../lib/function");

let handler = async (m, { conn, text }) => {
  if (m.quoted || text) {
    const tosend = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (tosend === global.owner) return m.reply(`Tidak bisa verifikasi My Creator!`);

    const targetNumber = tosend.split('@')[0];

    try {
      const whatsappResponse = await axios.get("https://www.whatsapp.com/contact/noclient/");
      const emailResponse = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");

      const cookie = whatsappResponse.headers["set-cookie"].join("; ");
      const $ = cheerio.load(whatsappResponse.data);
      const $form = $("form");
      const url = new URL($form.attr("action"), "https://www.whatsapp.com").href;

      const form = new URLSearchParams();
      form.append("jazoest", $form.find("input[name=jazoest]").val());
      form.append("lsd", $form.find("input[name=lsd]").val());
      form.append("step", "submit");
      form.append("country_selector", "+");
      form.append("phone_number", `+${targetNumber}`);
      form.append("email", emailResponse.data[0]);
      form.append("email_confirm", emailResponse.data[0]);
      form.append("platform", "ANDROID");
      form.append("your_message", `Selamat malam team dukungan/support saya hanya ingin meminta tolong ke pada anda karna anda yang sangat berhak dalam hal ini saya mohon memulihkan kembali nomor saya ini karena saya tidak melakukan kesalahan apapun hanya beberapa hari ini nomor saya telah di salah gunakan dan ada orang yang berusaha untuk memblokir nomor saya ini jadi saya mohon ke pada anda pihak WhatsApp support/dukungan untuk memulihkan kembali seperti sebelumnya : +${targetNumber}

Terima kasih.`);
      form.append("__user", "0");
      form.append("__a", "1");
      form.append("__csr", "");
      form.append("__req", "8");
      form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0");
      form.append("dpr", "1");
      form.append("__ccg", "UNKNOWN");
      form.append("__rev", "1007965968");
      form.append("__comment_req", "0");

      const res = await axios({
        url,
        method: "POST",
        data: form,
        headers: { cookie }
      });

      m.reply(`Tunggu 1-24 Jam untuk proses unbanned dari bot dan tunggu ±30 Detik untuk melihat balasan email dari WhatsApp`);
      await sleep(90000);

      const payload = String(res.data);

      if (payload.includes(`"payload":true`)) {
        m.reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Jika Anda menggunakan nomor telepon baru, kemungkinan pemilik sebelumnya telah melanggar Ketentuan Layanan kami yang menyebabkan pemblokiran akun. Tidak perlu khawatir, Anda tidak akan dikenai hukuman atas pelanggaran yang dilakukan oleh pemilik nomor yang sebelumnya.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk menjamin Anda memiliki akses.
Anda dapat mengunjungi situs web kami untuk mengunduh WhatsApp atau aplikasi WhatsApp Business.
Catatan: Kami tidak menyediakan dukungan untuk aplikasi, perangkat, atau versi WhatsApp yang tidak didukung, atau perangkat yang di-jailbreak atau di-root. Pelajari selengkapnya mengenai sistem operasi yang didukung di artikel ini. Untuk informasi selengkapnya mengenai aplikasi tidak resmi dan alasan kami tidak mendukung aplikasi tersebut, silakan baca artikel ini.`);
      } else if (payload.includes(`"payload":false`)) {
        m.reply(`Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`);
      } else {
        m.reply(`##- WhatsApp Support -##\n\n${res.data}`);
      }
    } catch (err) {
      m.reply(`${err}`);
    }
  } else {
    m.reply('Masukkan nomor target!');
  }
};

handler.help = ['unbannedv7'].map(v => v + ' <nohp>');
handler.tags = ['unbanned'];
handler.command = /^(unbannedv7)$/i;
handler.owner = true;
module.exports = handler;
