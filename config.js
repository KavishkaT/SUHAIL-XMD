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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_03_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEwLFxuICAgICAgICAzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDgxLFxuICAgICAgICA3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgNTcsXG4gICAgICAgIDUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTczLFxuICAgICAgICA2NixcbiAgICAgICAgMTM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzLFxuICAgICAgICA3MixcbiAgICAgICAgMjI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOUVg3TkJmRGpnN3JMUlY3UzZwSDc3OUM5TmFDdTVXL3V5VlIyNkpqdHVBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKN1JFX1dGUlRIYTN3dUppZXBvejV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ4MDJmMmVkLWJiZTUtNDNlYS1hNTM2LWQ5ZDJjODE2Y2EzYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICAxNjIsXG4gICAgICAxNDMsXG4gICAgICA4NSxcbiAgICAgIDE2NyxcbiAgICAgIDExOSxcbiAgICAgIDEwNyxcbiAgICAgIDIzMixcbiAgICAgIDk5LFxuICAgICAgNzQsXG4gICAgICAxOTIsXG4gICAgICAyNCxcbiAgICAgIDQ4LFxuICAgICAgNCxcbiAgICAgIDE0NCxcbiAgICAgIDksXG4gICAgICAyMTgsXG4gICAgICAxOTYsXG4gICAgICAxOCxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDExNyxcbiAgICAgIDI0MCxcbiAgICAgIDEzLFxuICAgICAgMjMxLFxuICAgICAgODcsXG4gICAgICAxNTMsXG4gICAgICAxNzUsXG4gICAgICAxMixcbiAgICAgIDUwLFxuICAgICAgNjAsXG4gICAgICAxNzAsXG4gICAgICA5OCxcbiAgICAgIDI1MCxcbiAgICAgIDEwNCxcbiAgICAgIDkxLFxuICAgICAgNDMsXG4gICAgICAyMDAsXG4gICAgICAxOTIsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVZSWlo5R1pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzcyMTk5NjM0OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzE1NjY5NzM3MzkxNzg6MjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTCtGdWVRR0VPS04rYm9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwWEFjNmF5bW1JemY5UEtZaWJtS25pdXg1djdZWUhpWmRVM1BtVHN0cWlBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZmcE1jUXNxcUFyanA2V0Vnbnl1VHlTa1dINmVwRWF6dFV2ajBTZGtRM0tnUjNRdnYwSTlkZ21Pd2t3ZHRNVk5FQzFvOGlpdkdKbHBuZXVKTXV0b0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBqYzVkYnlTbjU4NG9oYWMwUlRicis4MmNjb2R3azR0SVIvRFdrUjFCbFlBSUZYL1lkVGpvT3BjSkdMN0dqQ0t3TUwwSTRTN3RUbHBMUG9YdlVGbEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzcyMTk5NjM0OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQyMzE3ODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJNU9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUk1Ty5qc29uIjogIntcImtleURhdGFcIjpcIm1YaUxwUG9WTDRqQktUT3hCZERYLzdhUnVmWVFPejFVUVk3M3BuMEU0RzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgyMTI2MjUyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
