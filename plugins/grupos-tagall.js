let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`ᴍᴇɴꜱᴀᴊᴇ: ${text ? `${text}\n` : ''}
    
┌─「🔹 ВНИМАНИЕ ГРУППА 🔹」\n` + users.map(v => '│◦❒ @' + v.replace(/@.+/, '')).join`\n` + '\n└────', null, {
mentions: users
    })
}

handler.help = ['ɪɴᴠᴏᴄᴀʀ']
handler.tags = ['grupos']
handler.command = ['invocar', 'внимание']
handler.admin = true
handler.group = true

export default handler
