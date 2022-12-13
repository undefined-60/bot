"use strict";
const { default: makeWASocket, proto, generateWAMessageContent, fetchLatestWaWebVersion, updateProfileStatus, readMessages, useMultiFileAuthState, DisconnectReason, groupFetchAllParticipating, fetchPrivacySettings, WA_DEFAULT_EPHEMERAL, getDevice, generateWAMessageFromContent } = require('undefined/baileys');
const store = {};
const fs = require('fs-extra');
const { socket, mega, mediafire, zippyshare, downloadMediaMessage, serialize, getAndSaveMediaMessage, convert, position, resolve, banner, agent, assert, hex, aleatory, http, verificado, live, mentions, sleep, randomColors1, verify, check, getBuffer, getRandom, getGroupAdmins, runtime, parseMs, downloadAndSaveMediaMessage, textF } = require('./lib/myfunc');
/***
https://github.com/undefined-60/baileys-updated
[24/11 3:56 AM] typeof: NorthWest, North, NorthEast, West, Center, East, SouthWest, South, or SouthEast
[24/11 3:57 AM] typeof: magick 404.jpg -gravity center -crop 600x600+0+0 -resize 200x200 output.webp

[22/11 9:12 AM] typeof: ffmpeg -f image2 -i image%d.jpg video.gif
[22/11 12:35 PM] typeof: magick -background transparent -fill red -font DejaVu-Sans -pointsize 100 -size 512x512  -gravity center caption:'Hello World! going to school.' caption.png
[22/11 12:51 PM] typeof: convert -delay 100 *.jpg -loop 0 saida_animada.gif

[24/11 4:57 AM] typeof: ffmpeg -i 404.mp4 -vf crop=404:404 -s 200:200 magick.mp4 && magick magick.mp4 magick.webp
[24/11 4:57 AM] typeof: magick 404.jpg -gravity center -crop 600x600+0+0 -resize 200x200 output.webp
[24/11 4:58 AM] typeof: magick 404.jpg -gravity center -crop 600x600+0+0 -resize 200x200 -quality 90% output.webp
[24/11 2:42 PM] typeof: magick 404.jpg -resize 1024x450! welcome.png -composite welcom.png
[24/11 4:53 PM] typeof: convert resize.jpeg -resize 600x600 -gravity center circle.png -compose copyopacity -composite -resize 140x140  watt.png
[24/11 5:11 PM] typeof: convert -size 300x300 -composite welcome.png watt.png -geometry 180x180+785+162 wtts.png
[24/11 7:05 PM] typeof: convert -size 150x150 xc:grey11 -bordercolor red -border 5x5 ws.png
[24/11 2:42 PM] typeof: convert resize.jpeg -resize 600x600 -gravity center circle.png -compose copyopacity -composite -resize 140x140  watt.png
***/
process.env.HOME == '/app' ? "" : console.log(require('./lib/myfunc').banner.string);
const ConnectOnWhatsApp = async () => {
	const { state, saveCreds } = await useMultiFileAuthState('./src/session');
	const conn = makeWASocket({
		auth: state,
		browser: ['UndefinedBot Multi Device', 'Desktop', '3.0.0'],
		getMessage: async ({ id }) => (store[id] && store[id].message || { conversation: 'Hello!!' })
		});
		const read = (fs) => new Promise((resolve) => (async () => resolve(fs.endsWith('.json') ? JSON.parse(require('node:fs').readFileSync(fs)) : require(fs)))().catch((err) => (resolve({}), console.log(err.message))));
		
		conn.ev.on('messages.upsert', ({ messages, type: msgType }) => messages.forEach(async ({ message, key, pushName }, indice) => { store[key.id] = messages[indice];
			try {
				console.log(messages[indice]);
				const config = await read('./src/config.json');
				config.read ? conn.readMessages([key]) : "";
				if (key.remoteJid == 'status@broadcast') return;
				if (key.id.startsWith('BAE5') || key.id.startsWith('SEX5')) return;
				//var form = (await read('performance-now'))();
				const type = (object = Object.keys(message || {}), object.filter((i) => !i.match(/Distribution|ContextInfo/gi) && i)[0]); var object;
				const chat = key.remoteJid.endsWith('@g.us');
				const aguard = config.await[Math.floor(Math.random() * config.await.length)];
				const sender = chat ? key.participant : key.remoteJid;
				const body = (budy = (type == 'conversation' ? message.conversation : (type == 'imageMessage') ? message.imageMessage.caption : (type == 'videoMessage') ? message.videoMessage.caption : (type == 'extendedTextMessage') ? message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (message.buttonsResponseMessage?.selectedButtonId || message.listResponseMessage?.singleSelectReply.selectedRowId || message.text) : (type == 'senderKeyDistributionMessage') ? (message.conversation ? message.conversation : (message.extendedTextMessage ? message.extendedTextMessage.text : '')) : ''), budy || ""); var budy;
				const from = key.remoteJid;
				const timedat = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
				const content = JSON.stringify(message);
				const args = body ? body.trim().split(" ").slice(1) : [];
				const argx = args.join(" ");
				const metadata = chat ? await conn.groupMetadata(from).catch(() => {}) : {};
				const groupNm = chat ? metadata?.subject : '';
				const prefix = config.multiprefix ? body.slice(0, 1).match(/[^a-zA-Z0-9]/gi) : (body.startsWith(config.prefix) ? config.prefix : false);
				const rowm = prefix ? body.replace(prefix, '').trim().split(" ").shift().toLowerCase() : false;
				const groupParticipants = chat ? metadata.participants : [];
				const __getGroupAdmin = chat ? groupParticipants?.map(({ admin, id }) => admin && id || { id }) : [];
				const iAdmin = __getGroupAdmin.includes(sender);
				const iModer = __getGroupAdmin.includes(conn.user.id.split(':')[0] + "@s.whatsapp.net");
				const _iMe = sender == conn.user.id.split(':')[0] + "@s.whatsapp.net";
				const reply = (message) => sendMessageAnError(from, [{ text: message }, { quoted: messages[indice] }]);
				const defaultButtons = (cmd, atributo) => [{ buttonId: prefix + cmd, buttonText: { displayText: atributo ? atributo : 'PROXIMA' }, type: 1 }];
				const _newThrowErrr = (atributo) => { reply(atributo); throw '@' };
				const owner = config.owner.includes(sender);
				const _icmd = config.comandos.includes(rowm);
				
				const sendMessageAnError = async (jid, [message, quoted], response, i = conn.sendPresenceUpdate('composing', jid)) => {
					return Promise.resolve(await conn.sendMessage(jid, message, quoted).catch(async (err) => await conn.sendMessage(jid, response || { text: err.message }, { quoted: messages[indice] })));
					};
					
				console.log('\x1b[1;31m~\x1b[1;37m>', (rowm ? '[\x1b[1;32mEXEC\x1b[1;37m]' : '[\x1b[1;31mRECV\x1b[1;37m]'), timedat, require('chalk').green.underline(rowm ? rowm : body || (type ? String(type).slice(0, -7) : 'baileys')), require('chalk').red('from'), require('chalk').green.underline(pushName.toString() || 'no name') + (chat ? (require('chalk').red(' in ') + require('chalk').green.underline(groupNm || 'desconhecido...')) : ""));
				
				try {
					switch ((msgType == 'notify' ? rowm : "" + messages[indice].messageSTubTYpe)) {
						case'ping':
						var a = await read('performance-now');
						var b = a();
						var c = a() - b;
						await sendMessageAnError(from, [{ text: `\`\`\`Velocidade: ${c.toFixed(4)}ms * ${(messages[indice].messageTimestamp - (Date.now() / 1000)).toFixed(4)}\`\`\`` }, { quoted: messages[indice] }]);
						break
						
						case'hentai':
						var $ = await socket("https://www.hentaistube.com/buscar/?s=" + argx);
						var s = serialize($, $('div.epiItem').length, `{ title: $('div.epiItem').eq(i).find('a').find('div.epiItemNome').text(), rowId: '$episodes ' + $('div.epiItem').eq(i).find('a').attr('href') }`, `$('div.epiItem').eq(i).find('a').attr('href').includes('episodios/')`);
						s.length ? sendMessageAnError(from, [{ title: argx, text: "$", buttonText: 'SELECIONAR', sections: [{ title: 'undefined project', rows: s }] }]) : reply('Nenhum resultado encontrado.');
						break
						
						case'episodes':
						var $ = await socket(argx);
						var s = serialize($, $('div.pagAniListaContainer').find('li').length, `{ title: $('div.pagAniListaContainer').find('li').eq(i).find('a').text(), rowId: '$tubes ' + $('div.pagAniListaContainer').find('li').eq(i).find('a').attr('href') }`);
						var e = serialize($, $('div.boxAnimeSobreLinha').length, `$('div.boxAnimeSobreLinha').eq(i).text()`).join('\n').replace(':\n', ': ');
						s.length ? sendMessageAnError(from, [{ title: $('strong.breadcrumb_last').text(), text: e + '\n\n' + $('div#sinopse2').text(), buttonText: 'SELECIONAR', sections: [{ title: 'undefined project', rows: s }] }]) : reply('Nenhum resultado encontrado.');
						break
						
						case'mek':
						console.log(JSON.stringify(messages[indice], null, 2));
						break
						
						case'down':
						switch(argx.match('mega.n') ? '2' : (argx.match('mediafire') ? '1' : (argx.match('zippyshare') ? '4' : '3'))) {
							case'4':
							var $ = await zippyshare(argx);
							console.log($)
							return
							sendMessageAnError(from, [{ document: { url: $.down }, mimetype: $.mime, fileName: $.name }]);
							break
							
							case'3':
							var $ = await socket(argx);
							console.log($)
							return
							(await socket($('div.toggle').find('a').attr('href'), { responseType: 'stream' })).pipe(fs.createWriteStream(require('os').tmpdir() + '/' + $('[aria-current="page"]').text() + '.mp4').on('close', () => sendMessageAnError(from, [{ document: fs.readFileSync(require('os').tmpdir() + '/' + $('[aria-current="page"]').text() + '.mp4'), mimetype: 'video/mp4', fileName: $('[aria-current="page"]').text() + '.mp4' }])));
							break
							
							case'2':
							var $ = await mega(argx);
							console.log($)
							return
							$.down.pipe(fs.createWriteStream(require('os').tmpdir() + `/` + $.name).on('close', () => sendMessageAnError(from, [{ document: fs.readFileSync(require('os').tmpdir() + `/` + $.name), mimetype: $.mime, fileName: $.name }])));
							break
							
							case'1':
							var $ = await mediafire(argx);
							console.log($)
							return
							sendMessageAnError(from, [{ document: { url: $.down }, mimetype: $.mime, fileName: $.name }]);
							break
							
							default:
							reply('Em andamento, não acabado. tente outro.');
							};
							break
						
						case'tubes':
						var $ = await socket(args.join(" "));
						var s = (serialize($, $('div.panels').find('div.panel').find('a').length, `{ buttonId: '$down ' + $('div.panels').find('div.panel').find('a').eq(i).attr('href'), buttonText: { displayText: $('div.panels').find('div.panel').find('a').find('strong').eq(i).text() }, type: 1 }`));
						(s.length ? sendMessageAnError(from, [{ image: { url: $('meta[property="og:image"]').attr('content') }, caption: ($('meta[property="og:title"]').last().attr('content') + '\n\n' + $('div.pagEpiDesc').find('p').last().text()), buttons: s }]) : reply('no results'));
						break
						};
						}
						catch (err) {
							console.log('switch:', err);
							reply(rowm.concat(': ', err.message));
							};
							}
							catch (err) {
								console.log('upsert:', err);
								};
								}));
		
		conn.ev.on('connection.update', async ({ connection, qr, lastDisconnect }) => {
			if (qr) {
				console.log('É necessário um segundo dispositivo para escanear o QRCODE');
				}
				else {
					if (connection == 'close') {
						if (![401, 500, 440].includes(lastDisconnect.error?.output.statusCode)) {
							await ConnectOnWhatsApp();
							}
							else {
								console.log(require('chalk').red('desconectado: '.concat(lastDisconnect.error)));
								process.exit();
								};
								};
								if (connection == 'open') {
									console.log(require('chalk').rgb(0, 255, 0)('conectado!'));
									};
									};
									});
		conn.ev.on('creds.update', saveCreds);
		};
		ConnectOnWhatsApp().catch((err) => console.log('socket:', err));