let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/43fcaa5cddd2613773e91.jpg'
let sewa = `👋🏻Halo Kak Namaku Adalah Novi MD, Aku adalah Chat Bot WhatsApp yang di Program menggunakan NodeJs untuk menjadi Asisten Virtual Auto-Reply di WhatsApp.\n\n*❁ mainmenu*\n*❁ aimenu*\n*❁ groupmenu*\n*❁ gamemenu*\n*❁ rpgmenu*\n*❁ stikermenu*\n*❁ makermenu*\n*❁ animanga*\n*❁ nsfwmenu*\n*❁ internet*\n*❁ downloadmenu*\n*❁ toolsmenu*\n*❁ islamic*\n*❁ quotesmenu*\n*❁ random*\n*❁ ownermenu*\n\n_2023❁NoviRaidenMD❁_
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu|help|bot|hai)$/i

export default handler
