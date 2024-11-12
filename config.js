const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348121236348";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_07_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgMTY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICA0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3LFxuICAgICAgICA4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDkxLFxuICAgICAgICA1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NixcbiAgICAgICAgMTYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICA1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0LFxuICAgICAgICA3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDkwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5YVozWnQ1NzVwS0VXZTFtVE1CNEpnUWFwMzNaWGxuUXY0WFNINTRPb3A0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMjEyMzYzNDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVEQjdDRTUzQ0NERjIxRjY4MTlDOTUyQzc2RTYzNTM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTQwOTY0MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRZUNmUm1LYVRYcV94V2g1U1huWll3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFhYzE2NzNmLWI0MDYtNGU2MS05ZGVkLTRmYTg5MzY0MGVlN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAyMTcsXG4gICAgICAxNzYsXG4gICAgICA5MixcbiAgICAgIDYzLFxuICAgICAgMTUwLFxuICAgICAgMjIyLFxuICAgICAgMTA2LFxuICAgICAgMjAsXG4gICAgICAxNjQsXG4gICAgICAxODUsXG4gICAgICAxNzAsXG4gICAgICAxOTQsXG4gICAgICAyMyxcbiAgICAgIDM3LFxuICAgICAgMTg4LFxuICAgICAgODYsXG4gICAgICAxMDYsXG4gICAgICAxNjQsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAxMDEsXG4gICAgICA0NSxcbiAgICAgIDY5LFxuICAgICAgMjAwLFxuICAgICAgNDcsXG4gICAgICAyMTMsXG4gICAgICAxNTQsXG4gICAgICAyNDAsXG4gICAgICAxMzYsXG4gICAgICAxMjksXG4gICAgICAyMzMsXG4gICAgICA0MCxcbiAgICAgIDIyMyxcbiAgICAgIDIyMCxcbiAgICAgIDQ3LFxuICAgICAgMTAzLFxuICAgICAgNzMsXG4gICAgICA5MixcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJESkU1RUNXWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyMTIzNjM0ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR29sZGVuXCIsXG4gICAgXCJsaWRcIjogXCIyMTg0NTA3OTQ0MzQ4MDc6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYm52Y0lHRU4vdHpMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZ2bzFGeUlmam1KSEUyak5kcmtWTUJ5WkpuUDd3MTNuOENibm5RdzFBVzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaUZ3N3NkSmdWQ3VxV1JLR1BLSm9CdzdQWXhDUGNxSmV1QzRuNHFvTUM3UVdITEJibExpQS80eVVVeUQrSkZkRHAxNVZnV2hhUGlaRDl6dlJkYVpvQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibVN5UDZrNEdibWVZVzNYNTBudDdmV2kvbUxxcUpTWDc3a1F6bDkvRkU4ZEtOTXBUa05yT29UMThtRVFRdWlkUDNKMjV1ZFMwR09FOTFrRHJrMWJxaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyMTIzNjM0ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTQwOTYzNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxXWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFdaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK1hSb3FCdG5NTWhiQWRidkx0MU5OWDQvNEgxSWpIcktrbVFRSlA5eExzST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzUwMDM3NDc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
