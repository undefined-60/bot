const { sleep, live, check, verify, hex } = require("./myfunc")
const toMs = require('ms')
const fs = require('fs-extra')

exports.getMessage = (sender, from) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
return x.level[n].data[z].message
}
}
}

exports.saveMessage = (sender, from, amount) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
x.level[n].data[z].message += amount
fs.writeFileSync('./src/basedata.json', JSON.stringify(x, null, 2))
}
}
}

exports.saveCommand = (sender, from, amount) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
x.level[n].data[z].command += amount
fs.writeFileSync('./src/basedata.json', JSON.stringify(x, null, 2))
}
}
}

exports.saveUsedCommand = (sender, from, command) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
b = check(command, x.level[n].data[z].used)
if (b) {
x.level[n].data[z].used[b].value += Number(1)
fs.writeFileSync('./src/basedata.json', JSON.stringify(x, null, 2))
} else {
x.level[n].data[z].used.push({ id: command, value: 1 })
fs.writeFileSync('./src/basedata.json', JSON.stringify(x, null, 2))
}
}
}
}

exports.getCommand = (sender, from) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
return x.level[n].data[z].command
}
}
}

exports.getUserId = (sender, from) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
return x.level[n].data[z].id
}
}
}

exports.saveGroupId = (from) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (!n) {
x.level.push({ id: from, data: [] })
fs.writeFileSync('./src/basedata.json', JSON.stringify(x, null, 2))
}
}

exports.saveData = (sender, from, timedat) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
x.level[n].data.push({ id: sender, level: 1, message: 0, xp: 0, cash: 0, command: 0, time: timedat, used: [] })
fs.writeFileSync('./src/basedata.json', JSON.stringify(x, null, 2))
}
}

exports.reloadGhost = (from, sender, timedat) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
x.level[n].data[z].time = timedat
fs.writeFileSync('./src/basedata.json', JSON.stringify(x, null, 2))
}
}
}

exports.getGroupId = (from) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
return x.level[n].id
}
}

exports.getLevel = (sender, from) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
return x.level[n].data[z].level
}
}
}

exports.getXp = (sender, from) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
return x.level[n].data[z].xp
}
}
}

exports.saveLevel = (sender, from, amount) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
x.level[n].data[z].level += amount
fs.writeFileSync('./src/basedata.json', JSON.stringify(x, null, 2))
}
}
}

exports.saveXp = (sender, from, amount) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
x.level[n].data[z].xp += amount
fs.writeFileSync('./src/basedata.json', JSON.stringify(x, null, 2))
}
}
}

exports.getCash = (sender, from) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
return x.level[n].data[z].cash
}
}
}

exports.getTimeDat = (sender, from) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
return x.level[n].data[z].time
}
}
}

exports.saveCash = (sender, from, amount) => {
x = JSON.parse(fs.readFileSync('./src/basedata.json'))
n = check(from, x.level)
if (n) {
z = check(sender, x.level[n].data)
if (z) {
x.level[n].data[z].cash += amount
fs.writeFileSync('./src/basedata.json', JSON.stringify(x, null, 2))
}
}
}

exports.getRank = (level) => { if (level > 00 && level <= 02) return "Bronze I"; if (level > 02 && level <= 04) return "Bronze II"; if (level > 04 && level <= 06) return "Bronze III"; if (level > 06 && level <= 08) return "Prata I"; if (level > 08 && level <= 11) return "Prata II"; if (level > 11 && level <= 14) return "Prata III"; if (level > 14 && level <= 17) return "Ouro I"; if (level > 17 && level <= 21) return "Ouro II"; if (level > 21 && level <= 25) return "Ouro III"; if (level > 25 && level <= 29) return "Platina I"; if (level > 29 && level <= 34) return "Platina II"; if (level > 34 && level <= 39) return "Platina III"; if (level > 39 && level <= 44) return "Diamante I"; if (level > 44 && level <= 50) return "Diamante II"; if (level > 50 && level <= 56) return "Diamante III"; if (level > 56 && level <= 62) return "Mestre I"; if (level > 62 && level <= 69) return "Mestre II"; if (level > 69 && level <= 76) return "Mestre III"; if (level > 76 && level <= 83) return "Desafiante I"; if (level > 83 && level <= 91) return "Desafiante II"; if (level > 91 && level <= 99) return "Desafiante III"; if (level > 99 && level >= 99) return "Lendário" }

exports.getPercent = (required, xp) => {
return (((750 - (required - xp)) / 750) * 100).toFixed(2)
}