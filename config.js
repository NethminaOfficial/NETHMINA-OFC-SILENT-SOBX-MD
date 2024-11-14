const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "uqQ0UIya#nmflt3FNrAzANvsJlpVXeNzL_2_Kr7Y-ZBggJgler5E",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/7dd5b186621993e20b73b.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓*/n/n*Hᴇʟʟᴏ....I'ᴍ Aʟɪᴠᴇ Nᴏᴡ...🙋‍♂💗*/n/n┌───────────────────────/n/n*CONTACT NO* - https://wa.me/+94776369728?text=Hi/n/n*GROUP LINK* - https://chat.whatsapp.com/FUGjjEbLPQp7KHL5jAUJb8/n/n🔥  *Ｆᴏʀ ＳᴛΔᵀᴜs Vɪᴇᴡs* ° 🔥/n┌───────────────────────/n├ 🍓 *Name* :-  *_BHASHITHA NETHMINA_* /n├ 🍓 *Nick Name* :-  *_NETHMINA OFC_*  /n├ 🍓 *Age* :-  *_17  YEARS OLD_*/n├ 🍓 *Live in* :- *_GALLE_*/n├ 🍓 *Contact* :- 94706369728/n└───────────────────────/n/n*🗓 Type [.menu] for my command list.*/n/n*🛜 𝚸𝚯𝐖𝚵𝚪𝚵𝐃 𝐁𝐘 𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘*/n/n/n> ♡ ㅤ      ❍ㅤ        ⎙ㅤ    ⌲ 
/n> ˡᶦᵏᵉ     ᶜᵒᵐᵐᵉⁿᵗ     ˢᵃᵛᵉ    ˢʰᵃʳᵉ",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "➺ѕเℓεɳƭ_ℓσѵε૨࿐",
};
