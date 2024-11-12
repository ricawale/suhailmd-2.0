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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348121236348";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_21_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICA3OSxcbiAgICAgICAgNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzksXG4gICAgICAgIDc1LFxuICAgICAgICA1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDUxLFxuICAgICAgICAzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc5LFxuICAgICAgICA0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgODksXG4gICAgICAgIDExMixcbiAgICAgICAgODAsXG4gICAgICAgIDE2LFxuICAgICAgICA5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDM5LFxuICAgICAgICA2MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4RnJOQUxvaytKSDVJcVpFcUd6Y2RCMkFidFFLVDRxTXdOekFWMnVMVWdBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTRkVYTkZEM1REV3FqaFpYbWliX29nXCIsXG4gIFwicGhvbmVJZFwiOiBcImQxMjc3ZTMxLWUyZWUtNGM4YS05MjdkLTljZGE4MWIzNGUwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDE2MSxcbiAgICAgIDEzNCxcbiAgICAgIDE3LFxuICAgICAgMTIxLFxuICAgICAgODMsXG4gICAgICAxOTEsXG4gICAgICAxMTcsXG4gICAgICAxMDUsXG4gICAgICAxNjMsXG4gICAgICA4LFxuICAgICAgOCxcbiAgICAgIDEsXG4gICAgICAyLFxuICAgICAgMTIsXG4gICAgICAyMTYsXG4gICAgICAxMTcsXG4gICAgICAyMjYsXG4gICAgICAxNTEsXG4gICAgICA1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDUzLFxuICAgICAgMTM0LFxuICAgICAgMTU2LFxuICAgICAgOTQsXG4gICAgICAxMzUsXG4gICAgICA1OCxcbiAgICAgIDEzNixcbiAgICAgIDU0LFxuICAgICAgODYsXG4gICAgICAxMyxcbiAgICAgIDE4MixcbiAgICAgIDE2OCxcbiAgICAgIDE5NixcbiAgICAgIDQ5LFxuICAgICAgMTQwLFxuICAgICAgMjIxLFxuICAgICAgMTA1LFxuICAgICAgMCxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDQTlTQ1pBUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyMTIzNjM0ODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR29sZGVuXCIsXG4gICAgXCJsaWRcIjogXCIyMTg0NTA3OTQ0MzQ4MDc6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPZm52Y0lHRUx2MHpMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZ2bzFGeUlmam1KSEUyak5kcmtWTUJ5WkpuUDd3MTNuOENibm5RdzFBVzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwialoreFlZRzUxK3ZSUXBPYlFOM0syZG5BK0dmcVhRTHhkdE1jTWd3OXFWU1FNQlc4Qmw4dVByQTVZMCthNnlsZElOYUk0eDJuUG14QXZ2bHhtQ1B3QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUDkyQlhvcFNPLzJKZ3V3S056azVmQisxd2VJYktJZzJxMm1reGdjbk5qN09hSzc3bk83VlA0NjJDNnJzQU5mbUZOUnVUUy8rUi9JR2RhV09yZ0kyaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyMTIzNjM0ODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTQxMDQ5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxXZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFdkLmpzb24iOiAie1wia2V5RGF0YVwiOlwidHNSQ251MEM1VE5LZ0dRRTViclhWREd5clhDQlNDa3NjMmJhTTdOWWtlVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzUwMDM3NDc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMxNDEwNDE1NzU3XCJ9Igp9"  // PUT your SESSION_ID 


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
