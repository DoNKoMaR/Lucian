


import util from 'util'
import path from 'path'
let handler = async (m, { conn }) => {
let vn = './media/KoMaR.jpg'
conn.sendFile(m.chat, vn, 'KoMaR.jpg', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.help = ['ʜᴏʟᴀ']
handler.tags = ['audios']
handler.customPrefix =/^(hola|Komar|Hola|Ola|ola\?)$/i
handler.command = new RegExp

handler.fail = null
handler.exp = 100
export default handler