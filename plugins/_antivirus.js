let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
// limpiar automaticamente los chats cuando un kaukerzzz envie algun tipo de traba
if (m.messageStubType === 68) {
let log = {
key: m.key,
content: m.msg,
sender: m.sender
}
await this.modifyChat(m.chat, 'clear', {
includeStarred: false
}).catch(console.log)
}}
export default handler