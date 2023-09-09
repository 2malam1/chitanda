let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/beafced0f801babb634e0.jpg'
let sewa = `
╔━━━ ❁ *Game Menu* ❁
┃ ❁ .caklontong
┃ ❁ .family100
┃ ❁ .iqtest
┃ ❁ .math
┃ ❁ .siapakahaku
┃ ❁ .suit
┃ ❁ .susunkata
┃ ❁ .tebakanime
┃ ❁ .tebakbendera
┃ ❁ .tebakchara
┃ ❁ .tebaksurah
┃ ❁ .tekateki
┃ ❁ .tebakkata
┃ ❁ .tictactoe
┃ ❁ .ttt
┃ ❁ .fightkucing
┃ ❁ .hunter
┃ ❁ .attack
┃ ❁ .atk
┃ ❁ .war
╚━━━━━━━━━━━━❁
 _2023❁NoviMD❁_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['gamemenu']
handler.tags = ['main']
handler.command = /^(gamemenu)$/i

export default handler