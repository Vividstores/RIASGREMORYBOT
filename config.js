I//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2347088716112";
global.sudo = process.env.SUDO || "2347088716112";
global.owner = process.env.OWNER_NUMBER || "2347088716112";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0I3V2I3eXp3R1NWMTlqa0lDTXg1VkpwZ0pOcU5yY0x1aDYvM1BQdUwxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVW03WkRiMm1lZDhTZ1FTcFZIOTZmZFQvdTBhQzNldnhNV0xjWGRBVVhqND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RGh0dUVuNGIyUHZvT1dGNWJ0MTIyTVUzOHBYdVVSaC9uZFRMN0VKakdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpZW9BTExpS20rdEVySlRiclR1UGJISmhveGlaeGVzd0luc2haTzlEZTMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIMWdZbDd3OGMxQ1loaFltRzJkTUNWTlA2TnAzbXZiQlR1WGFQK0ZtR1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVrSi9ONXF5ZVBGVjFaaVh6QXFlUUVPZ25GOWlNbkQ0SStPNFRVYjFzMDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VnUUs1QkNKSE5mUVZRZk1wRTNsUE03ckFzT3hpeEZTczNmaTdIczFYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2tzRlV0eC9uenM0S2xBakxLOVRLaWZuVndJVGdRZEtKUjdPM2grMWVUdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIxTWUySGNmZkNhWmg2dnRvOXVtSFVSQWFCbVl2ZVpQa1NHMlVGVm0rUFN0WVNjNy9yNytPVU94U0FFaUdhbTB6YmRBU1NwZTRFcGNGa0pIK2IzcERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJWaE5CRTltLzlUSkt4NjExbXdZM1ovNTdHZHorUW0vM1hVb2lLUTN5clE4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwODg3MTYxMTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkJFNzIwOEE4MTRGQkY2Qjk4RDdGQUU2QzM2QjYwQjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDk3NDgzNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA4ODcxNjExMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzOEU3NTc5MTRBNTE3QzBDQUNERkQyOEVGRERDRERFMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwOTc0ODM1fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJSjlQZjFmZVRPaXlVNXRSM0FHamZBIiwicGhvbmVJZCI6ImIzOTc4MmI3LTNhMjMtNDgwMy05MjVlLWU5MTQzZGZiYzUxMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSVDJzTWI4dlJldHNrNjdRdXRnWlAxT1k0YWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3NtZ2ZyM0ZpQVpLTyt3TmRqRVVONnhVWldFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJCS0ZOUzFTIiwibWUiOnsiaWQiOiIyMzQ3MDg4NzE2MTEyOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVml2aWQgU3RvcmVzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMm11ZDhDRU9Hb3Nya0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrS2pXVGJSN1pZRmlLbHRKNEtGNGZqem5BWXloVUROR2ovaDVHcDFQUFRNPSIsImFjY291bnRTaWduYXR1cmUiOiJnRGVZNjRXTklCUkRVdWNVdzFjaFYxMkFhbWFqS3o4Mi9BenZaRGVpalpPQ0x2Qm1vL04xcVVpVS8rcUFEUU1rTGNWRVpLaUhMOUluYXJZMDNVWE1Ddz09IiwiZGV2aWNlU2lnbmF0dXJlIjoic3c2RGJjZWNQUldFaU1xKy9wN0VFcmo2NjUxSUpNbHNnaVNPUDFxamRKb2xuRHZvMHo3V3JHZG4zUUhzUzFMRGhIL050MzdOWW1lOHc3K1dmTFJtQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDg4NzE2MTEyOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmlvMWsyMGUyV0JZaXBiU2VDaGVINDg1d0dNb1ZBelJvLzRlUnFkVHoweiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDk3NDgzMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPYngifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
