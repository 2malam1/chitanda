let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/beafced0f801babb634e0.jpg'
let sewa = `
╔━━━❁ *Group Menu* ❁
┃ ❁ .enable
┃ ❁ .disable
┃ ❁ .absen
┃ ❁ .add
┃ ❁ .+
┃ ❁ .cekid
┃ ❁ .ceksewa
┃ ❁ .delete
┃ ❁ .demote
┃ ❁ .hidetag
┃ ❁ .infogrup
┃ ❁ .linkgc
┃ ❁ .promote
┃ ❁ .setbye
┃ ❁ .setdesc
┃ ❁ .sdesc
┃ ❁ .setnamagc
┃ ❁ .setppgc
┃ ❁ .group
┃ ❁ .setwelcome
┃ ❁ .gcsider
┃ ❁ .tagadmin
┃ ❁ .tagall
┃ ❁ .tagme
┃ ❁ .cekpacar
┃ ❁ .ikhlasin
┃ ❁ .tembak
┃ ❁ .putus
┃ ❁ .terima
┃ ❁ .tolak
┃ ❁ .odemote
┃ ❁ .kick
┃ ❁ .-
┃ ❁ .getprofile
╚━━━━━━━━━━━━❁
 _2023❁NoviMD❁_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['groupmenu']
handler.tags = ['main']
handler.command = /^(groupmenu)$/i

export default handler