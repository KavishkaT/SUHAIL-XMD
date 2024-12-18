const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_12_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI4LFxuICAgICAgICA0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTksXG4gICAgICAgIDUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMixcbiAgICAgICAgMjQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgMzksXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzLFxuICAgICAgICAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgODUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcxLFxuICAgICAgICA4NixcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNixcbiAgICAgICAgMTMwLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJ4MUpxNE5WUmVHOG9SN1FSODBxUHBpYWpiSE1rNDd6bXQwaVR6Mjl3cFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkt1Y184VmR3UVU2RnRPVkxDaVhmMXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjVlOGEwN2YtNDJlMy00YWJlLWEyZGItZTQ1ZmMxYTk4M2EzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgNjksXG4gICAgICAxNTQsXG4gICAgICAyMjQsXG4gICAgICAyMTYsXG4gICAgICA3NixcbiAgICAgIDE3LFxuICAgICAgMTEsXG4gICAgICAyMixcbiAgICAgIDkzLFxuICAgICAgMTc1LFxuICAgICAgMTc4LFxuICAgICAgMTcwLFxuICAgICAgMTk0LFxuICAgICAgMTk4LFxuICAgICAgMTcyLFxuICAgICAgMTQ2LFxuICAgICAgMjYsXG4gICAgICAxMixcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDE4OCxcbiAgICAgIDQ5LFxuICAgICAgODQsXG4gICAgICAxNjEsXG4gICAgICAyNSxcbiAgICAgIDE2NixcbiAgICAgIDkxLFxuICAgICAgMjA0LFxuICAgICAgMTI5LFxuICAgICAgMTA4LFxuICAgICAgMTkyLFxuICAgICAgMjE5LFxuICAgICAgMTc2LFxuICAgICAgOTEsXG4gICAgICAyMjgsXG4gICAgICA4MixcbiAgICAgIDE2MixcbiAgICAgIDE5LFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQU5YQVlENDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYwMzgzOTU5OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bS34bWD4bWb4oGxX+G1icuj4bWJXCIsXG4gICAgXCJsaWRcIjogXCIxNTIzNDcyMjEyMjU2NTc6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTI1d3VRRUVQeUhpcnNHR0JFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzMkdDYVpnODIwT1Uzei9kOFRlT3Y3c3hlV05wTEF2bDhvN3kwdTBtV1VrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdDWW8yZERsRU1hZTZmQUppcHhNWEJGQUcrc1Fuak5HTitieUEzMHJ5VkIyTHZwK1U2ZHNyUVN4dTJ5VzZESm5rampzSmJ3aHpjSWFQbCtsY1BrUEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhLcm9tY2NIKzZHRFRhbXRzSjRoYUo4YlN1endNSmFJM1Q2V0RTTWR1TlRScTM5RzFQdTNPVFhyNW1obUVHYldVR3RRZEg5T2J5VXpxcUFETnNnWmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYwMzgzOTU5OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NTA5NTY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTklxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOSXEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrWHI0dm9zTlJNbFBGMW80STZLUlBxM2U4VlJ4WjVkTHovZ3RoMGt0ZVZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyODQ1NDU2NzcsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsN119LFwidGltZXN0YW1wXCI6XCIxNzM0MDE4Nzc0Mzc0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "KAVI-EXE V",
  ownername:process.env.OWNER_NAME|| "KAVI-EXE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
