let handler = async (m, { command, text }) => {
let jawab = ['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin']
let siapa = jawab[Math.floor(Math.random() * jawab.length)]
m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${siapa}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}
handler.help = ['apakah <teks>?']
handler.tags = ['fun']

handler.command = /^apakah$/i
handler.limit = false

module.exports = handler

