let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
let sewa = `
╔━━━❁ *Animanga Menu* ❁
┃ ❁ .amv
┃ ❁ .animeinfo
┃ ❁ .charainfo
┃ ❁ .doujinsearch
┃ ❁ .doujindetail
┃ ❁ .doujinlatest
┃ ❁ .komikusearch
┃ ❁ .komikudetail
┃ ❁ .komikulatest
┃ ❁ .mangainfo
┃ ❁ .mangatoons
┃ ❁ .nhentaisearch
┃ ❁ .nhentaidetail
┃ ❁ .otakusearch
┃ ❁ .otakudetail
┃ ❁ .doujinlatest
┃ ❁ .ppcp
┃ ❁ .storyanime
┃ ❁ .whatanime
┃ ❁ .jadianime
┃ ❁ .gangbang
┃ ❁ .hinata
┃ ❁ .masturbation
┃ ❁ .orgy
┃ ❁ .wallpaperq <query>
╚━━━━━━━━━━━━❁

 _2023❁2malam
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['ainmanga']
handler.tags = ['main']
handler.command = /^(ainmanga)$/i

export default handler