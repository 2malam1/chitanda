let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0e8e264ea5a23f0d20415.jpg'
let sewa = `
╔━━━❁ *Quotes Menu* ❁
┃ ❁ .bacot
┃ ❁ .bucin
┃ ❁ .dare
┃ ❁ .galau
┃ ❁ .gombal
┃ ❁ .hacker
┃ ❁ .q-islam
┃ ❁ .quotes
┃ ❁ .katabijak
┃ ❁ .motivasi
┃ ❁ .pantun
┃ ❁ .senja
┃ ❁ .truth
┃ ❁ .videoquotes
┃ ❁ .videogalau
╚━━━━━━━━━━━━❁
 _2023❁2malam
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['quotesmenu']
handler.tags = ['main']
handler.command = /^(quotesmenu)$/i

export default handler