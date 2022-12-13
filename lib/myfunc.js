const { proto, delay, getContentType, downloadContentFromMessage } = require('./@adiwajshing/baileys')
const cheerio = require('cheerio');
const cfonts = require('cfonts');
const chalk = require('chalk');
const fs = require("fs");
const axios = require('axios');
const { exec } = require('child_process');


//    "knights-canvas": "^1.3.7-a",
//    "discord-canvas": "^1.4.1",
//    "canvacord": "^5.3.0",
const colors1 = ["white", "cyan", "red", "green", "blue", "yellow", "magenta"]
const colors2 = ["magenta", "yellow", "blue", "green", "red", "cyan", "white"]
exports.randomColors1 = randomColors1 = colors1[Math.floor(Math.random() * (colors1.length))]
exports.randomColors2 = randomColors2 = colors2[Math.floor(Math.random() * (colors2.length))]

exports.http = async function (query, headers, voltar) {
const made = await axios(query, headers)['catch']((data) => { return query.match(/.jpg|.png|.jpeg/g) ? { data: fs.readFileSync('./src/404.jpg') } : { data } });
return voltar ? made : made['data'];
};

exports.socket = socket = async (url, params, types = url.match(/.jpg|.png|.jpeg/) ? { responseType: 'arraybuffer' } : {}) => {
	const create = require('axios').create({
		headers: {
			'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
			},
			...types
			});
			const { headers, data, status } = info = await create(url, params ? params : {}).catch((FailsAX) => (FailsAX));
			return new Promise((resolve, reject) => {
				if (status == 200) {
					if (headers['content-type'].includes('text/html')) {
						resolve(cheerio.load(data));
						}
						else {
							resolve(data);
							};
							}
							else {
								reject(info);
								};
								});
								};

exports.mediafire = async (file, filename = file.slice(0, -5).split('/').pop().split('+').join(" ")) => new Promise(async (resolve) => {
	const $ = webx = await socket(file);
	resolve({
		mime: filename.match('mp4') ? 'video/mp4' : 'application/' + filename.split(".").pop(),
		name: filename,
		down: 'https:' + $('#downloadButton').attr('href')
		});
		});

exports.mega = mega = async (file, File = require('megajs').File) => new Promise(async (resolve) => {
	File.fromURL(file).loadAttributes().then(($, { name } = wv = $) => {
		resolve({
			mime: name.match('mp4') ? 'video/mp4' : 'application/' + name.split(".").pop(),
			name: name,
			down: $.download()//pipe
			});
			});
			});

exports.zippyshare = zippyshare = async (file, haves = file.split(`/v/`).shift()) => new Promise(async (resolve) => {
	const $ = webxs = await socket(file)
	const name = kf = $('[property="og:title"]').attr('content').trim();
	const document = {
		getElementById:(selector) => Object.values($('#' + selector)).shift().attribs
		};
		eval($('div.center').find('script').text());
		resolve({
			mime: name.match('mp4') ? 'video/mp4' : 'application/' + name.split(".").pop(),
			name: name,
			down: haves + $('#dlbutton').attr('href')
			});
			});

exports.addMetadata = async function (arch, metadata) {
	return new Promise(async (resolve, reject) => {
		const web = require('node-webpmux');
		const buff = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
		var x = Buffer.from(JSON.stringify({ "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author }), 'utf-8');
		var y = Buffer.concat([buff, x]);(y.writeUIntLE(x.length, 14, 4));
		var z = new web.Image();(await z.load(arch));(z.exif = y);(resolve(await z.save(null)));
		})
		};

exports.serialize = ($, elements, params, condicional = true) => (Function(`$`, `length`, `const array = Array(length).fill(); array.forEach((r, i) => ${condicional} && array.fill(${params}, i)); return [...new Set(array.filter((i) => i && i))];`)($, elements));

const resolve = (data, type, x = (type == 'sort' ? null : (Object.values(data || {})[0] || ('./src/404.' + (type == 'img' ? 'jpg' : 'mp4'))))) => {
return (type == 'sort' ? data[Math.floor(Math.random() * data.length)] : (typeof x == 'object' ? x[0]['url'] : x));
};
exports.resolve = resolve;

exports.aleatory = (object) => {
return object[Math.floor(Math.random() * object.length)]
}

const colors = ['white', '#ff00ff', 'cyan', '#adff2f', '#00fa9a', 'black', 'red', '#00ff00', '#1e90ff', 'blue', '#7fffd4', 'yellow', '#7fff00', 'magenta'];
const geter1 = resolve(colors, 'sort');
const geter2 = resolve(colors, 'sort');

exports.banner = cfonts.render(('undefined bot'), {
lineHeight: 1,
font: 'tiny',
align: 'center',
gradient: [geter1, geter2]
});

exports.textF = (text) => {
a = text.toLowerCase()
return a.replace(/á|ã|â|à/g, "a").replace(/é|ê|è/g, "e").replace(/í|î|ì/g, "i").replace(/ó|õ|ô|ò/g, "o").replace(/ú|û|ù/g, "u")
}

exports.downloadAndSaveMediaMessage = async (type_file, path_file = "null", m) => {
var download = type_file == 'image' ? (m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage) : type_file == 'video' ? (m.message.videoMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage) : type_file == 'sticker' ? (m.message.stickerMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage) : type_file == 'audio' ? (m.message.audioMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage) : false
var stream = await downloadContentFromMessage(download, type_file)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(path_file, buffer)
return path_file
}

exports.downloadMediaMessage = async ({ isQuotedMsg, type, quotedMsg, message }) => {
	return new Promise(async resolve => {
		const data = isQuotedMsg ? quotedMsg[quotedMsg.type] : message[type];
		const path = getRandom(data.mimetype.match('audio') ? '.mpeg' : `.` + data.mimetype.split('/')[1]);
		await downloadContentFromMessage(data, data.mimetype == 'image/webp' ? 'sticker' : data.mimetype.split('/')[0]).then(bytes => bytes.pipe(fs.createWriteStream(path)).on('close', () => resolve(path)));
		});
		};

exports.verify = (find, array) => {
position = false
Object.keys(array).forEach((i) => {
if (array[i] == find) {
position = i
}
})
return position
}

exports.check = (find, array, attr) => {
position = false
Object.keys(array).forEach((i) => {
if (array[i][attr || "id"] == find) {
position = i
}
})
return position
}

exports.position = (find, array, attr) => {
let position = false
Object.keys(array).forEach((i) => {
if ((attr ? array[i]["id"] : array[i]) == find) {
position = i
}
})
return position
}

exports.hex = (number) => {
const token = '1234567890qwertyuiopasdfghjklmnbvcxz1234567890'
let x = ''
for (let i = 0; i < number; i++) {
x += token[Math.floor(Math.random() * token.length)]
}
return x
}

exports.assert = function (data, type, max, end, html, finish) {
var $ = cheerio.load(html)
var h = ""
for (let i = 0; i < max; i++) {
h += (finish ? finish : '') + (type == 'text' ? $(data).eq(i).text() : $(data).eq(i).attr(type)) + end
}
return h
}

exports.sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}

exports.parseMs = (milliseconds) => {
return {
days: Math.trunc(milliseconds / 86400000),
hours: Math.trunc(milliseconds / 3600000) % 24,
minutes: Math.trunc(milliseconds / 60000) % 60,
seconds: Math.trunc(milliseconds / 1000) % 60
}
}

exports.getRandom = getRandom = (ext, abyss = typeof ext == 'object' ? ext : [ext]) => {
	var filename = [];
	for (let f of abyss) {
		filename.push(require('os').tmpdir() + `/` + require('crypto').randomBytes(6).readUIntLE(0, 6).toString(36) + f);
		};
		return filename.length >= 2 ? filename : filename.shift();
		};

exports.getAndSaveMediaMessage = async ({ isQuotedMsg, type, quotedMsg, message } = m, option) => {
a = isQuotedMsg ? message.extendedTextMessage?.contextInfo.quotedMessage.type : type;
b = isQuotedMsg ? message.extendedTextMessage?.contextInfo.quotedMessage[a] : message[a];
c = a == 'imageMessage' ? 'image' : (a == 'videoMessage' ? 'video' : (a == 'stickerMessage' ? 'sticker' : 'audio' ));
//a.mimetype == 'image/webp' ? 'sticker' : a.mimetype.split('/')[0];
x = await downloadContentFromMessage(b, c);
y = Buffer.from([]);
for await (const z of x) {
y = Buffer.concat([y, z]);
};
//a.mimetype.match('audio') ? '.mpeg' : '.' + a.mimetype.split('/')[1];
k = getRandom(c == 'image' ? '.png' : (c == 'video' ? '.mp4' : (c == 'sticker' ? '.webp' : '.mpeg' )));
option ? fs.writeFileSync(k, y) : "";
return option ? k : y;
}

exports.getGroupAdmins = function (participants) {
let admins = []
for (let i of participants) {
i.admin !== null ? admins.push(i.id) : ''
}
return admins
}

exports.runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " Dia, " : " Dias, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Hora, " : " Horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Minuto, " : " Minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Segundos" : " Segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.live = { key: { "fromMe": false, "participant": '0@s.whatsapp.net' }, message: {  "liveLocationMessage": {  } } }

exports.verificado = (options, caption) => ({ key : { fromMe: false, participant : "0@s.whatsapp.net" },  message: { extendedTextMessage: { text: caption ?? " ", ...options } } });

exports.mentions = (groupMembers) => {
asxz = []
for (let i of groupMembers) {
asxz.push(i.id)
}
return asxz
}

const users = ["Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/103.0.5060.63 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/14.0b12646 Mobile/15E148 Safari/605.1.15 Yahoo","Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/104.0.5112.88 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/223.0.463913120 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/104.0.5112.88 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/103.0.5060.63 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/225.0.466661455 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/103.0.5060.63 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/104.0.5112.88 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/104.0.5112.88 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/103.0.5060.63 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/103.0  Mobile/15E148 Safari/605.1.15","Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148","Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/104.0.5112.99 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/103.1  Mobile/15E148 Safari/605.1.15"];
exports.agent = () => {
return users[Math.floor(Math.random() * users.length)]
}

exports.convert = (url, entry, exit) => {
return new Promise((resolve, reject) => {
exec(`wget ${url} -O ${entry} && ffmpeg -i ${entry} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${exit}`, async (err) => {
if (err) {
resolve(fs.readFileSync('./src/404.mp4'));
}
resolve(fs.readFileSync(exit));
});
});
};