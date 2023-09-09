let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/beafced0f801babb634e0.jpg'
let sewa = `
╔━━━❁ *Islamic Menu* ❁
┃ ❁ .asmaulhusna
┃ ❁ .ayatkursi
┃ ❁ .salat <daerah>
┃ ❁ .niatsholat
╚━━━━━━━━━━━━❁
 _2023❁NoviMD❁_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['islamic']
handler.tags = ['main']
handler.command = /^(islamic)$/i

export default handler