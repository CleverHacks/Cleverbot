/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
let handler = async (m, { conn, command, args }) => {
	if (!isUrl(args[0])) return m.reply('*[ ! ] Por favor use un Link*')
	if (!args[0].match(/www.facebook.com|fb.watch/g)) return m.reply('*[ ! ] Link inválido*\n_Por favor, use un link de Facebook_\n')
	let name = await conn.getName(m.sender)
	let mcarga = m.reply(MultiNK.Proces(name))
	await mcarga
try {
	let resfb = await fetchJson(`https://latam-api.vercel.app/api/facebookdl?apikey=${MyApiKey}&q=${args[0]}`)
	conn.sendMessage(m.chat, { video: { url: resfb.video }, fileName: `fbsd.mp4`, mimetype: 'video/mp4' }, { quoted: m }).catch(e => {m.reply(MultiNK.Error1())})
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['fbdl <link>']
handler.tags = ['servicio']
handler.command = /^(fbdl)$/i
handler.limit = true

export default handler
