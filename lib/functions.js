const { getMessage, saveCash, getCash, getTimeDat, reloadGhost, saveMessage, getUserId, saveData, saveGroupId, getGroupId, getLevel, getXp, saveLevel, saveXp, getRank, saveCommand, saveUsedCommand, getCommand } = require("./level")
const { generateWAMessageFromContent, downloadContentFromMessage, DisconnectReason } = require("./@adiwajshing/baileys")
const { Aki } = require('aki-api')
const { moveAndStatusForGame } = require("./gameDb")
const region = 'pt'
var jogo = {
jogador: '',
now: true
}
const { sleep, verify, position, check, animation, live, verificado } = require("./myfunc")
const fs = require("fs-extra")
const chalk = require('chalk')

exports.LevelingXp = async (conn, from, m, sender, isGroup, groupMembers, icmd, cmd, pushName, timedat, mongo, db) => {
/*
{
(async () => {
await mongo('database', 'find', { _js: from }, 'all').then(async({ _js, data, level }, resu = _js, pi = level) => {
const insertPartcipants = async (mode) => {
insert = groupMembers.map((r) => ({ py: r.id, xp: 0, nv: 1, mes: 0, cmd: 0, time: "", used: [] }));
mode == '0' ? await mongo('database', 'insertOne', { _js: from, data: insert }) : await mongo('database', 'updateOne', [{ _js: from }, { data: insert }]);
};
if (resu) {
if (data) {
x = position(sender, data, 1);
if (x !== undefined && icmd == false) {
y = data[x].mes += 1;
z = data[x].time   = timedat;
await mongo('database', 'updateOne', [{ _js: from }, { data: data }]);
} else {
if (x !== undefined) {
if (position(cmd, data[x].used, true)) {
u = data[x].used[position(cmd, data[x].used, true)].value += 1;
} else {
e = data[x].used.push({ py: cmd, value: 1 });
};
s = data[x].cmd += 1;
await mongo('database', 'updateOne', [{ _js: from }, { data: data }]);
} else {
p = { py: sender, xp: 0, nv: 1, mes: 1, cmd: 0, time: "", used: [] };
g = data.push(p);
await mongo('database', 'updateOne', [{ _js: from }, { data: data }]);
};
};
if (pi) {
a = Math.floor(Math.random() * 80);
b = data[x].nv * 500 * 1.5;
if ((Number(data[x].xp += a)) >= b) {
data[x].nv += 1;
conn.sendMessage(from, { text: 'Nome: '.concat(pushName, '\nXP do usuario: ', data[x].xp, '\nNivel: ', (data[x].nv - 1), ' --> ', data[x].nv , '\nMensagens: ', data[x].mes) }, { quoted: m })
};
await mongo(from, 'updateOne', [{ _js: from }, { data: data }]);
};
} else {
await insertPartcipants('1');
};
} else {
await insertPartcipants('0');
};
});
})();
*/
};

exports.Inteligence = async (conn, from, m, budy, type, isQuotedMsg, quotedMsg, reply, mongo) => {
/*
const database = JSON.parse(fs.readFileSync('./src/database.json'));

if (isQuotedMsg && (quotedMsg ? quotedMsg.conversation : false) && type == 'extendedTextMessage' && (budy.startsWith(budy.match(/^[!*.#-/?]/gi)) ? false : true) && (quotedMsg.conversation.startsWith(quotedMsg?.conversation?.match(/^[!*.#-/?]/gi)) ? false : true)) {
await mongo('database', 'find', { _js: 'simi' }, 'all').then(async({ data }, t = position(quotedMsg.conversation, data, true)) => {
if (t !== undefined) {
if (position(budy, data[t].data, false) == undefined) {
data[t].data.push(budy);
await mongo('database', 'updateOne', [{ _js: 'simi' }, { data: data }]);
};
} else {
data.push({ py: quotedMsg.conversation, data: [budy] });
await mongo('database', 'updateOne', [{ _js: 'simi' }, { data: data }]);
};

if ((budy.startsWith(budy.match(/^[!*.#-/?]/gi)) ? false : true) && await mongo('database', 'find', { _js: from }, 'simi')) {
data.filter((r) => {
if (budy.match(r.py)) {
f = Math.floor(Math.random() * 2);
f == 0 ? reply(r.data[Math.floor(Math.random() * r.data.length)]) : conn.sendMessage(from, { sticker: fs.readFileSync('./src/stickers/' + database.sticker[Math.floor(Math.random() * database.sticker.length)] + '.webp') }, { quoted: m });
};
});
};
});
};
*/
};

exports.akinator = async (conn, from, message, prefix, sender, m, option) => {
switch(message) {
case'init':
let startAki = async () => {
global.aki = new Aki({ region });
await aki.start();
};
if (jogo.now) {
await startAki();
jogo.now = false;
jogo.jogador = sender;
} else {
conn.sendMessage(from, { text: 'Alguém está jogando...' }, { quoted: m });
};
sections = [
{
title: " ",
rows: [
{ title: "Sim", rowId: prefix + 'akinator ' + 'resp 0' },
{ title: "Não", rowId: prefix + 'akinator ' + 'resp 1' },
{ title: "Não Sei", rowId: prefix + 'akinator ' + 'resp 2' },
{ title: "Provavelmente Sim", rowId: prefix + 'akinator ' + 'resp 3' },
{ title: "Provavelmente Não", rowId: prefix + 'akinator ' + 'resp 4' },
]
}
];
conn.sendMessage(from, { 
text: aki.question + "\nEscolha uma opção.\nProgresso: " + aki.progress + '%',
title: "Question!",
buttonText: "SELECIONAR",
sections
});
break

case'resp':
if (jogo.jogador !== sender) return conn.sendMessage(from, { text: 'Não é você que está jogando.' }, { quoted: m });
await aki.step(option);
if (aki.progress >= 90 || aki.currentStep >= 90) {
await aki.win();
jogo.now = true;
buttons = [{ buttonId: prefix + 'akinator' + ' s', buttonText: { displayText: 'SIM' }, type: 1 }, { buttonId: prefix + 'akinator' + ' n', buttonText: { displayText: 'NÃO' }, type: 1 }];
conn.sendMessage(from, { image: { url: aki.answers[0].absolute_picture_path },
caption: aki.answers[0].name + ": " + aki.answers[0].description + '\nPor acaso este é o seu personagem?',
buttons: buttons,
headerType: 4
});
} else {
sections = [
{
title: " ",
rows: [
{ title: "Sim", rowId: prefix + 'akinator ' + 'resp 0' },
{ title: "Não", rowId: prefix + 'akinator ' + 'resp 1' },
{ title: "Não Sei", rowId: prefix + 'akinator ' + 'resp 2' },
{ title: "Provavelmente Sim", rowId: prefix + 'akinator ' + 'resp 3' },
{ title: "Provavelmente Não", rowId: prefix + 'akinator ' + 'resp 4' },
]
}
];
conn.sendMessage(from, { 
text: aki.question + "\nEscolha uma opção.\nProgresso: " + aki.progress.toFixed(0) + '%',
title: "Question!",
buttonText: "SELECIONAR",
sections
});
};
break

default:
}

}

exports.virtex = async (conn, from, m, sender, isGroup, iBotGroupAdmin, iGroupAdmin, body, pushName, type) => {
/*
const database = JSON.parse(fs.readFileSync('./src/database.json'))
const config = JSON.parse(fs.readFileSync('./src/config.json'))

if ( isGroup && iBotGroupAdmin && !iGroupAdmin && verify(from, database.texto) && body.length >= config.texto) { await conn.groupSettingUpdate(from, 'announcement').then(() => conn.sendMessage(from, { text: 'Grupo fechado! possível trava detectada... Irei remover imediatamente.' }, { quoted: live }) ); await sleep(2000); conn.groupParticipantsUpdate(from, [sender], 'remove'); await sleep(2000); conn.sendMessage(from, { text: 'Irei enviar destrava... aguarde até que o grupo seja aberto.' }, { quoted: live }); await sleep(2000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(2000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(2000); await conn.groupSettingUpdate(from, 'not_announcement'); await sleep(2000); conn.sendMessage(from, { text: 'Não suba as mensagens se você não estiver usando Whatsapp modificado.' }, { quoted: live }) }
if (!isGroup && body.length >= config.texto && config.travaTexto) { conn.sendMessage(from, { text: 'Possível trava detectada... Irei bloquear imediatamente.' }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Não suba as mensagens se você não estiver usando Whatsapp modificado.' }, { quoted: live }); await sleep(1000); conn.updateBlockStatus(sender, 'block') }

switch(type) {
case'viewOnceMessage':
if ( isGroup && iBotGroupAdmin && !iGroupAdmin && verify(from, database.once)) { e = m.message.viewOnceMessage.message['videoMessage'] ? m.message.viewOnceMessage.message.videoMessage : m.message.viewOnceMessage.message.imageMessage; e['viewOnce'] = false; e['caption'] = `Recuperando a mensagem do ${pushName}${(e.caption == "") ? "": `\n\n${e.caption}`}`; d = m.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: m.key.id }, message: { 'viewOnceMessage': { "message": { "imageMessage" : { "viewOnce" : true } } } } } : { key: { fromMe: false, participant: sender, id: m.key.id }, message: { "viewOnceMessage": { "message": { "videoMessage" : { "viewOnce": true } } } } }; p = await generateWAMessageFromContent(from, m.message.viewOnceMessage.message, { quoted: d }); await conn.relayMessage(from, p.message, { messageId: p.key.id }) }
break

case'productMessage':
if ( isGroup && iBotGroupAdmin && !iGroupAdmin && verify(from, database.catalogo)) { await conn.groupSettingUpdate(from, 'announcement').then(() => conn.sendMessage(from, { text: 'Grupo fechado! possível trava detectada... Irei remover imediatamente.' }, { quoted: live }) ); await sleep(2000); conn.groupParticipantsUpdate(from, [sender], 'remove'); await sleep(2000); conn.sendMessage(from, { text: 'Irei enviar destrava... aguarde até que o grupo seja aberto.' }, { quoted: live }); await sleep(2000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(2000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(2000); await conn.groupSettingUpdate(from, 'not_announcement'); await sleep(2000); conn.sendMessage(from, { text: 'Não suba as mensagens se você não estiver usando Whatsapp modificado.' }, { quoted: live }) }
if (!isGroup && config.antiTravaCatalogo) { conn.sendMessage(from, { text: 'Possível trava detectada... Irei bloquear imediatamente.' }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Não suba as mensagens se você não estiver usando Whatsapp modificado.' }, { quoted: live }); await sleep(1000); conn.updateBlockStatus(sender, 'block') }
break

case'contactMessage':
if ( isGroup && iBotGroupAdmin && !iGroupAdmin && verify(from, database.contato)) { await conn.groupSettingUpdate(from, 'announcement').then(() => conn.sendMessage(from, { text: 'Grupo fechado! possível trava detectada... Irei remover imediatamente.' }, { quoted: live }) ); await sleep(2000); conn.groupParticipantsUpdate(from, [sender], 'remove'); await sleep(2000); conn.sendMessage(from, { text: 'Irei enviar destrava... aguarde até que o grupo seja aberto.' }, { quoted: live }); await sleep(2000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(2000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(2000); await conn.groupSettingUpdate(from, 'not_announcement'); await sleep(2000); conn.sendMessage(from, { text: 'Não suba as mensagens se você não estiver usando Whatsapp modificado.' }, { quoted: live }) }
if (!isGroup && config.travaContato) { conn.sendMessage(from, { text: 'Possível trava detectada... Irei bloquear imediatamente.' }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Não suba as mensagens se você não estiver usando Whatsapp modificado.' }, { quoted: live }); await sleep(1000); conn.updateBlockStatus(sender, 'block') }
break

case'contactsArrayMessage':
if ( isGroup && iBotGroupAdmin && !iGroupAdmin && verify(from, database.contato)) { await conn.groupSettingUpdate(from, 'announcement').then(() => conn.sendMessage(from, { text: 'Grupo fechado! possível trava detectada... Irei remover imediatamente.' }, { quoted: live }) ); await sleep(2000); conn.groupParticipantsUpdate(from, [sender], 'remove'); await sleep(2000); conn.sendMessage(from, { text: 'Irei enviar destrava... aguarde até que o grupo seja aberto.' }, { quoted: live }); await sleep(2000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(2000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(2000); await conn.groupSettingUpdate(from, 'not_announcement'); await sleep(2000); conn.sendMessage(from, { text: 'Não suba as mensagens se você não estiver usando Whatsapp modificado.' }, { quoted: live }) }
if (!isGroup && config.travaContato) { conn.sendMessage(from, { text: 'Possível trava detectada... Irei bloquear imediatamente.' }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Não suba as mensagens se você não estiver usando Whatsapp modificado.' }, { quoted: live }); await sleep(1000); conn.updateBlockStatus(sender, 'block') }
break

case'locationMessage':
if ( isGroup && iBotGroupAdmin && !iGroupAdmin && verify(from, database.loc)) { await conn.groupSettingUpdate(from, 'announcement').then(() => conn.sendMessage(from, { text: 'Grupo fechado! possível trava detectada... Irei remover imediatamente.' }, { quoted: live }) ); await sleep(2000); conn.groupParticipantsUpdate(from, [sender], 'remove'); await sleep(2000); conn.sendMessage(from, { text: 'Irei enviar destrava... aguarde até que o grupo seja aberto.' }, { quoted: live }); await sleep(2000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(2000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(2000); await conn.groupSettingUpdate(from, 'not_announcement'); await sleep(2000); conn.sendMessage(from, { text: 'Não suba as mensagens se você não estiver usando Whatsapp modificado.' }, { quoted: live }) }
if (!isGroup && config.travaLoc) { conn.sendMessage(from, { text: 'Possível trava detectada... Irei bloquear imediatamente.' }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Marque as MENSAGENS como lidas\n' + '·\n'.repeat(250) }, { quoted: live }); await sleep(1000); conn.sendMessage(from, { text: 'Não suba as mensagens se você não estiver usando Whatsapp modificado.' }, { quoted: live }); await sleep(1000); conn.updateBlockStatus(sender, 'block') }
break

default:
}
*/
}

exports.velha = async (conn, from, m, sender, isGroup, body) => {
/*
const database = JSON.parse(fs.readFileSync('./src/database.json'))
if (isGroup && verify(from, database.leveling)) {
x = check(from, database.game)
y = false
z = false
if (x) {
Object.keys(database.game[x].jogos).forEach((i) => {
if (database.game[x].jogos[i].jogar == sender) {
z = i
}
if (database.game[x].jogos[i].o == sender) {
y = i
}
})
if (y !== false && database.game[x].jogos[y].online == false && isNaN(Number(body))) {
data = database.game[x].jogos[y]
moveAndStatusForGame(sender, from, body)
if (body.toLowerCase() == "s") {
conn.sendMessage(from, { text: "❌: @" + data.x.split("@")[0] + "\n" +  "⭕: @" + data.o.split("@")[0] + "\n\n" + `\`\`\`Start Game: @\`\`\`` + data.jogar.split("@")[0] + "\n\n" + data.matrix[0] + "  " + data.matrix[1] + "  " + data.matrix[2] + "\n" + data.matrix[3] + "  " + data.matrix[4] + "  " + data.matrix[5] + "\n" + data.matrix[6] + "  " + data.matrix[7] + "  " + data.matrix[8], contextInfo: { mentionedJid: [data.x, data.o] } }, { quoted: m })
}
if (body.toLowerCase() == "n") {
conn.sendMessage(from, { text: `\`\`\`Desculpe\`\`\`  @${data.x.split("@")[0]} \`\`\`O oponente cancelou...\`\`\``, contextInfo: { mentionedJid: [data.x] } }, { quoted: m })
}
}
if (z !== false && database.game[x].jogos[z].online  == true && database.game[x].jogos[z].finish == false && !isNaN(Number(body)) && Number(body) > 0 && Number(body) < 10) {
moveAndStatusForGame(sender, from, body)
g = JSON.parse(fs.readFileSync('./src/database.json'))
if (z !== false && database.game[x].jogos[z].online  == true && g.game[x].jogos[z].finish == true) {
if (g.game[x].jogos[z].winner == false) {
conn.sendMessage(from, { text: "❌: @" + g.game[x].jogos[z].x.split("@")[0] + "\n" + "⭕: @" + g.game[x].jogos[z].o.split("@")[0] + "\n\n" + `\`\`\`Empate.\`\`\`` + "\n\n" + g.game[x].jogos[z].matrix[0] + "  " + g.game[x].jogos[z].matrix[1] + "  " + g.game[x].jogos[z].matrix[2] + "\n" + g.game[x].jogos[z].matrix[3] + "  " + g.game[x].jogos[z].matrix[4] + "  " + g.game[x].jogos[z].matrix[5] + "\n" + g.game[x].jogos[z].matrix[6] + "  " + g.game[x].jogos[z].matrix[7] + "  " + g.game[x].jogos[z].matrix[8], contextInfo: { mentionedJid: [g.game[x].jogos[z].x, g.game[x].jogos[z].o] } }, { quoted: m })
g.game[x].jogos.splice(z, 1)
fs.writeFileSync('./src/database.json', JSON.stringify(g, null, 2))
} else {
conn.sendMessage(from, { text: "❌: @" + g.game[x].jogos[z].x.split("@")[0] + "\n" + "⭕: @" + g.game[x].jogos[z].o.split("@")[0] + "\n\n" + `\`\`\`Vencedor: @\`\`\`` + g.game[x].jogos[z].winner.split("@")[0] + "\n\n" + g.game[x].jogos[z].matrix[0] + "  " + g.game[x].jogos[z].matrix[1] + "  " + g.game[x].jogos[z].matrix[2] + "\n" + g.game[x].jogos[z].matrix[3] + "  " + g.game[x].jogos[z].matrix[4] + "  " + g.game[x].jogos[z].matrix[5] + "\n" + g.game[x].jogos[z].matrix[6] + "  " + g.game[x].jogos[z].matrix[7] + "  " + g.game[x].jogos[z].matrix[8], contextInfo: { mentionedJid: [g.game[x].jogos[z].x, g.game[x].jogos[z].o] } }, { quoted: m })
g.game[x].jogos.splice(z, 1)
fs.writeFileSync('./src/database.json', JSON.stringify(g, null, 2))
}
} else {
conn.sendMessage(from, { text: "❌: @" + g.game[x].jogos[z].x.split("@")[0] + "\n" + "⭕: @" + g.game[x].jogos[z].o.split("@")[0] + "\n\n" + `\`\`\`Sua vez: @\`\`\`` + g.game[x].jogos[z].jogar.split("@")[0] + "\n\n" + g.game[x].jogos[z].matrix[0] + "  " + g.game[x].jogos[z].matrix[1] + "  " + g.game[x].jogos[z].matrix[2] + "\n" + g.game[x].jogos[z].matrix[3] + "  " + g.game[x].jogos[z].matrix[4] + "  " + g.game[x].jogos[z].matrix[5] + "\n" + g.game[x].jogos[z].matrix[6] + "  " + g.game[x].jogos[z].matrix[7] + "  " + g.game[x].jogos[z].matrix[8], contextInfo: { mentionedJid: [g.game[x].jogos[z].x, g.game[x].jogos[z].o] } }, { quoted: m })
}
}
}
}
*/
}

exports.IndexSecundaria = async (conn, from, m, sender, isGroup, groupMembers, command, pushName, icmd, timedat, body, type, iGroupAdmin, iBotGroupAdmin, iMe, isQuotedMsg, quotedMsg, args, argx, metadata, owner, reply, prefix, iQ, groupMembersAdmins, aguard, sendMessageAnError) => {
const { sleep, verify, check, assert, http, agent, live, verificado, runtime, getRandom, downloadAndSaveMediaMessage, downloadMediaMessage } = require("./myfunc");
const database = JSON.parse(fs.readFileSync('./src/database.json'));
const config = JSON.parse(fs.readFileSync('./src/config.json'));
const { menu } = require('./menu.js');
const { writeExifImg512, writeExifVid512 } = require('./exift');
const basedata = JSON.parse(fs.readFileSync('./src/basedata.json'));
const cheerio = require('cheerio');
const { exec } = require('child_process');

try {
switch (command) {
case'menu':
xmenu = await menu (prefix, pushName, getCash(sender, from), getLevel(sender, from), getXp(sender, from), getMessage(sender, from), getCommand(sender, from), getRank(getLevel(sender, from)), runtime(process.uptime()))
conn.sendMessage(from, { image: fs.readFileSync('./src/404.jpg'), caption: xmenu, templateButtons: [{ index: 1, urlButton: { displayText: 'CRIADOR', url: 'wa.me/559984620740' } }, { index: 2, quickReplyButton: { displayText: 'MENU', id: prefix + 'menu' } }, { index: 3, quickReplyButton: { displayText: 'PING', id: prefix + 'ping' } }] })
break

case"mek":
console.log(JSON.stringify(m, null, 2))
break

case'fsf':

break

case'rec':
var mek = await http(args[0], { method: "get", headers: { "user-agent": agent() } });
console.log(mek)
var obj = Object.values(mek)[0]
var jp = typeof obj == 'object' ? obj[0]['url'] : obj
console.log(obj, jp)
//console.log(resolve(data, 'img'))
break

default: 
}

if (iQ('image', true) && verify(from, database.autofigura)) {
media = await downloadMediaMessage("image", m)
figur = await writeExifImg512(media, { packname: config.pack ? config.pack : groupName, author: config.author ? config.author : pushName })
await conn.sendMessage(from, { sticker: { url: figur } }, { quoted: m })
await fs.unlinkSync(figur)
}
if (iQ('video', true) && verify(from, database.autofigura)) {
media = await downloadMediaMessage("video", m)
figur = await writeExifVid512(media, { packname: config.pack ? config.pack : groupName, author: config.author ? config.author : pushName })
await conn.sendMessage(from, { sticker: { url: figur } }, { quoted: m })
await fs.unlinkSync(figur)
}
} catch (err) {
console.log(err)
}
}

const ativador = async (mongo, from, type, action, cmd, sendMessageAnError, m) => {
await mongo('db:0', 'find', { _id: '$0' }, 'red').then(async({ data }) => {
const writefile = async function (on) {
data[from] ? "" : data[from] = {};
data[from][type] = on;
};
const rejected = () => sendMessageAnError(from, [{ text: 'Este grupo ' + (action ? 'já' : 'não') + ' está incluso.' }, { quoted: m }]);
const concluir = () => sendMessageAnError(from, [{ text: '```O recurso: ' + cmd + '; foi ' + (action ? 'ativo' : 'desativado') + ' neste grupo.```' }, { quoted: m }]);
if (data[from]) {
if (data[from][type]) {
action ? rejected() : (writefile(action), concluir());
action ? "" : await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]);
} else {
action ? (writefile(action), concluir()) : rejected();
action ? await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]) : "";
};
} else {
action ? (writefile(action), concluir()) : rejected();
action ? await mongo('db:0', 'updateOne', [{ _id: '$0' }, { data: data }]) : "";
};
});
};
exports.ativador = ativador;

file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log("\x1b[1;31m~\x1b[1;37m>", "[\x1b[1;32mEXEC\x1b[1;37m]", `${__filename} updated!`.replace("/storage/emulated/0/bota/", ""))
delete require.cache[file]
require(file)
})