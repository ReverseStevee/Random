const fs = require('fs');

const proxies = [];
const output_file = 'proxy.txt';

if (fs.existsSync(output_file)) {
  fs.unlinkSync(output_file);
  console.log(`'${output_file}' Telah Dihapus🕊.`);
}

const raw_proxy_sites = [
  "https://raw.githubusercontent.com/RamaXgithub/proxysc3/refs/heads/main/proxy.txt",
  "https://raw.githubusercontent.com/RamaXgithub/proxysc4/refs/heads/main/proxy.txt",
  "https://raw.githubusercontent.com/MOMMY2034/Free-Proxy-List/refs/heads/main/http.txt",
  "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/proxy.txt",
  "https://raw.githubusercontent.com/RamaXgithub/proxysc2/refs/heads/main/proxy.txt",
  "https://raw.githubusercontent.com/tuanminpay/live-proxy/master/http.txt",
  "https://raw.githubusercontent.com/TuanMinPay/live-proxy/master/http.txt",
  "https://raw.githubusercontent.com/Tsprnay/Proxy-lists/master/proxies/https.txt",
  "https://raw.githubusercontent.com/Tsprnay/Proxy-lists/master/proxies/http.txt",
  "https://raw.githubusercontent.com/ItzRazvyy/ProxyList/refs/heads/main/https.txt",
  "https://raw.githubusercontent.com/TheSpeedX/SOCKS-List/master/http.txt",
  "https://raw.githubusercontent.com/ItzRazvyy/ProxyList/refs/heads/main/http.txt",
  "https://raw.githubusercontent.com/javadbazokar/PROXY-List/refs/heads/main/https.txt",
  "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt",
  "https://raw.githubusercontent.com/javadbazokar/PROXY-List/refs/heads/main/http.txt",
  "https://raw.githubusercontent.com/Zaeem20/FREE_PROXIES_LIST/master/http.txt",
  "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/proxy.txt",
  "https://raw.githubusercontent.com/im-razvan/proxy_list/main/http.txt",
  "https://raw.githubusercontent.com/ItzRazvyy/ProxyList/main/https.txt",
  "https://raw.githubusercontent.com/ItzRazvyy/ProxyList/main/http.txt",
  "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies-http.txt",
  "https://raw.githubusercontent.com/zebbern/Proxy-Scraper/refs/heads/main/https.txt",
  "https://raw.githubusercontent.com/mmpx12/proxy-list/master/https.txt",
  "https://raw.githubusercontent.com/mmpx12/proxy-list/master/http.txt",
  "https://raw.githubusercontent.com/miyukii-chan/proxy-list/master/proxies/http.txt",
  "https://raw.githubusercontent.com/mishakorzik/Free-Proxy/main/proxy.txt",
  "https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/https.txt",
  "https://raw.githubusercontent.com/vakhov/fresh-proxy-list/master/http.txt",
  "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/http.txt",
  "https://raw.githubusercontent.com/zebbern/Proxy-Scraper/refs/heads/main/http.txt",
  "https://raw.githubusercontent.com/MuRongPIG/Proxy-Master/main/http.txt",
  "https://raw.githubusercontent.com/ObcbO/getproxy/master/file/https.txt",
  "https://raw.githubusercontent.com/ObcbO/getproxy/master/file/http.txt",
  "https://raw.githubusercontent.com/officialputuid/KangProxy/KangProxy/https/https.txt",
  "https://raw.githubusercontent.com/officialputuid/KangProxy/KangProxy/http/http.txt",
  "https://raw.githubusercontent.com/proxy4parsing/proxy-list/main/http.txt",
  "https://raw.githubusercontent.com/proxylist-to/proxy-list/main/http.txt",
  "https://raw.githubusercontent.com/ProxyScraper/ProxyScraper/main/http.txt",
  "https://raw.githubusercontent.com/prxchk/proxy-list/main/http.txt",
  "https://raw.githubusercontent.com/rdavydov/proxy-list/main/proxies/http.txt",
  "https://raw.githubusercontent.com/MOMMY2034/Free-Proxy-List/refs/heads/main/https",
  "https://raw.githubusercontent.com/jetkai/proxy-list/refs/heads/main/online-proxies/txt/proxies-http.txt",
  "https://raw.githubusercontent.com/rdavydov/proxy-list/refs/heads/main/proxies/http.txt",
  "https://raw.githubusercontent.com/Zaeem20/FREE_PROXIES_LIST/master/https.txt",
  "https://raw.githubusercontent.com/Jakee8718/Free-Proxies/refs/heads/main/proxy/http.txt",
  "https://raw.githubusercontent.com/Jakee8718/Free-Proxies/refs/heads/main/proxy/https.txt",
  "https://raw.githubusercontent.com/dpangestuw/Free-Proxy/refs/heads/main/All_proxies.txt",
  "https://raw.githubusercontent.com/dpangestuw/Free-Proxy/refs/heads/main/http_proxies.txt",
  "https://raw.githubusercontent.com/Anonym0usWork1221/Free-Proxies/refs/heads/main/proxy_files/http_proxies.txt",
  "https://raw.githubusercontent.com/sunny9577/proxy-scraper/master/generated/http_proxies.txt",
  "https://raw.githubusercontent.com/mython-dev/free-proxy-4000/refs/heads/main/proxy-4000.txt",
  "https://raw.githubusercontent.com/iplocate/free-proxy-list/refs/heads/main/all-proxies.txt",
  "https://raw.githubusercontent.com/iplocate/free-proxy-list/refs/heads/main/protocols/http.txt",
  "https://raw.githubusercontent.com/FosterG4/proxy-list/refs/heads/main/http.txt",
  "https://raw.githubusercontent.com/blei920/ProxyHub/refs/heads/main/proxies.txt",
  "https://raw.githubusercontent.com/nazavod777/proxy_list/refs/heads/main/all.txt",
  "https://raw.githubusercontent.com/nazavod777/proxy_list/refs/heads/main/http.txt",
  "https://raw.githubusercontent.com/nazavod777/proxy_list/refs/heads/main/https.txt",
  "https://raw.githubusercontent.com/GoekhanDev/free-proxy-list/refs/heads/main/http.txt",
  "https://raw.githubusercontent.com/dinoz0rg/proxy-list/refs/heads/main/scraped_proxies/http.txt",
  "https://raw.githubusercontent.com/dinoz0rg/proxy-list/refs/heads/main/checked_proxies/http.txt",
  "https://raw.githubusercontent.com/noarche/proxylist-socks5-sock4-exported-updates/refs/heads/main/http-online.txt",
  "https://raw.githubusercontent.com/vmheaven/VMHeaven-Free-Proxy-Updated/refs/heads/main/https.txt",
  "https://raw.githubusercontent.com/vmheaven/VMHeaven-Free-Proxy-Updated/refs/heads/main/http.txt",
  "https://raw.githubusercontent.com/proxylist-to/proxy-list/refs/heads/main/http.txt",
  "https://raw.githubusercontent.com/zenjahid/FreeProxy4u/refs/heads/main/http.txt",
  "https://raw.githubusercontent.com/saisuiu/Lionkings-Http-Proxys-Proxies/refs/heads/main/free.txt",
  "https://proxyspace.pro/socks5.txt",
  "https://proxyspace.pro/socks4.txt",
  "https://proxyspace.pro/https.txt",
  "https://proxyspace.pro/http.txt",
  "https://proxy-spider.com/api/proxies.example.txt",
  "https://openproxylist.xyz/socks5.txt",
  "https://openproxylist.xyz/socks4.txt",
  "https://openproxylist.xyz/https.txt",
  "https://openproxylist.xyz/http.txt",
  "https://naawy.com/api/public/proxylist/getList/?proxyType=socks5&format=txt",
  "https://naawy.com/api/public/proxylist/getList/?proxyType=socks4&format=txt",
  "https://naawy.com/api/public/proxylist/getList/?proxyType=https&format=txt",
  "https://naawy.com/api/public/proxylist/getList/?proxyType=http&format=txt",
  "https://multiproxy.org/txt_all/proxy.txt",
  "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=anonymous",
  "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all",
  "https://api.proxyscrape.com/v2/?request=displayproxies",
  "https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=10000&country=all&ssl=all&anonymity=all",
  "https://api.proxyscrape.com/?request=displayproxies&proxytype=http",
  "https://api.openproxylist.xyz/socks5.txt",
  "https://api.openproxylist.xyz/socks4.txt",
  "https://api.openproxylist.xyz/http.txt",
  "https://api.good-proxies.ru/getfree.php?count=1000&key=freeproxy",
];

async function fetchProxies() {
  for (const site of raw_proxy_sites) {
    try {
      const response = await fetch(site);
      if (response.ok) {
//console.log(`success: ${site}`);🕊🪽
        const data = await response.text();
        const lines = data.split('\n');
        for (const line of lines) {
          if (line.includes(':')) {
            const [ip, port] = line.split(':', 2);
            proxies.push(`${ip}:${port}`);
          }
        }
      } else {
//console.log(`skip: ${site}`);🕊🪽
      }
    } catch (error) {
//console.error(`skip: ${site}`);🕊🪽
    }
  }

  fs.writeFileSync(output_file, proxies.join('\n'));
  fs.readFile(output_file, 'utf8', (err, data) => {
    if (err) {
      console.error('Gagal Membaca File:', err);
      return;
    }
    const proxies = data.trim().split('\n');
    const totalProxies = proxies.length;
    console.log(`Successfully Scraping ${totalProxies} In Proxy🕊`);
  });
}
fetchProxies();