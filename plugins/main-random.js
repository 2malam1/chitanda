let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
let sewa = `
╔━━━❁ *Random Menu* ❁
┃ ❁ .nekopoi
┃ ❁ .asupan
┃ ❁ .blackpink
┃ ❁ .bocil
┃ ❁ .bts
┃ ❁ .china
┃ ❁ .cosplay
┃ ❁ .geayubi
┃ ❁ .gensin
┃ ❁ .hentai
┃ ❁ .indonesia
┃ ❁ .japan
┃ ❁ .korea
┃ ❁ .malaysia
┃ ❁ .thailand
┃ ❁ .vietnam
╚━━━━━━━━━━━━❁
 _2023❁2malam
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['random']
handler.tags = ['main']
handler.command = /^(random)$/i

export default handler