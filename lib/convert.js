const cheerio = require('cheerio')
const FormData = require('form-data')
const axios = require('axios')
const { exec } = require('child_process')
const fs = require('fs')
const log = console.debug

const webp2gifFile = async (v) => {
a = new FormData()
a.append('new-image-url', '')
a.append('new-image', fs.createReadStream(v))
b = await axios('https://s6.ezgif.com/webp-to-mp4', {
method: 'post',
data: a,
headers: {
"Content-Type": `multipart/form-data; boundary=${a._boundary}`
}
})
c = new FormData()
$ = cheerio.load(b.data)
d = $('input[name="file"]').attr('value')
c.append('file', d)
c.append('convert', "Convert WebP to MP4!")
e = await axios('https://ezgif.com/webp-to-mp4/' + d, {
method: 'post',
data: c,
headers: {
'Content-Type': `multipart/form-data; boundary=${c._boundary}`
}
})
k = cheerio.load(e.data)
x = 'https:' + k('div#output > p.outfile > video > source').attr('src')
return x
}

function recognize (filename, config = {}) {
const options = getOptions(config)
const binary = config.binary || "tesseract"
const command = [binary, `"${filename}"`, "stdout", ...options].join(" ")
if (config.debug) log("command", command)
return new Promise((resolve, reject) => {
exec(command, (error, stdout, stderr) => {
if (config.debug) log(stderr)
if (error) reject(error)
resolve(stdout)
})
})
}
function getOptions(config) {
const ocrOptions = ["tessdata-dir", "user-words", "user-patterns", "psm", "oem", "dpi"]
return Object.entries(config)
.map(([key, value]) => {
if (["debug", "presets", "binary"].includes(key)) return
if (key === "lang") return `-l ${value}`
if (ocrOptions.includes(key)) return `--${key} ${value}`
return `-c ${key}=${value}`
})
.concat(config.presets)
.filter(Boolean)
}

async function tiktokdownloader(Url) {
return new Promise (async (resolve, reject) => {
await axios.request({
url: "https://ttdownloader.com/",
method: "GET",
headers: {
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
}
}).then(respon => {
const $ = cheerio.load(respon.data)
const token = $('#token').attr('value')
axios({
url: "https://ttdownloader.com/req/",
method: "POST",
data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
headers: {
"accept": "*/*",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
}
}).then(res => {
const ch = cheerio.load(res.data)
const result = {
status: res.status,
result: {
nowatermark: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
watermark: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
audio: ch('#results-list > div:nth-child(4)').find(' div.download > a').attr('href')
}
}
resolve(result)
}).catch(reject)
}).catch(reject)
})
}

module.exports = { recognize, webp2gifFile, tiktokdownloader }