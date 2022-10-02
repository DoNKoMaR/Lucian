function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['ВЛАДЕЛЕЦ']
handler.tags = ['main']

handler.command = /^(владелец|creador)$/i

export default handler
