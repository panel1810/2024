let handler = async (m, { conn, text }) => {
    global.edit = text;
    let menuList = {
        doc: '_*📄 Success set menu menjadi Document!*_',
        simple: '_*📋 Success set menu menjadi Simple!*_',
        gif: '_*🎞️ Success set menu menjadi GIF!*_',
        payment: '_*💰 Success set menu menjadi Payment!*_',
        call: '_*📞 Success set menu menjadi Call!*_',
        gc: '_*🌐 Success set menu menjadi link !*_'
    };

    if (menuList[text]) {
        m.reply(menuList[text]);
    } else {
        m.reply(`
📝 *BERIKUT LIST TAMPILAN MENU AWAL*

1. *doc* : Menampilkan menu dengan dokumen 📄
2. *simple* : Menampilkan menu dengan tampilan sederhana 📋
3. *gif* : Menampilkan menu dengan GIF 🎞️
4. *payment* : Menampilkan menu dengan pembayaran 💰
5. *call* : Menampilkan menu dengan panggilan 📞
6. *gc* : Menampilkan menu dengan link grup 🌐

_Cara mengubah menu:_
Ketik ulang command *.ubahmenu <options>*

*Contoh:* .ubahmenu payment
`);
    }
};

handler.help = ["ubahmenu"].map(v => v + ' <options>');
handler.tags = ['owner'];
handler.command = /^ubahmenu|editmenu$/i;
handler.rowner = true;
module.exports = handler;
