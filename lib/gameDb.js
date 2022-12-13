const { sleep, check, verify } = require("./myfunc")
const fs = require('fs')
const toMs = require('ms')

exports.moveAndStatusForGame = async (sender, from, position) => {
const database = JSON.parse(fs.readFileSync('./src/database.json'))
x = check(from, database.game)
y = false
if (x) {
Object.keys(database.game[x].jogos).forEach((i) => {
if (database.game[x].jogos[i].x == sender || database.game[x].jogos[i].o == sender) {
y = i
}
})
if (y !== false) {
switch (position.toString().toLowerCase()) {
case's':
data = database.game[x].jogos[y]
if (data.o == sender && data.online == false) {
data.online = true
data.time = Date.now() + toMs("150s")
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

case'n':
data = database.game[x].jogos[y]
if (data.o == sender && data.online == false) {
database.game[x].jogos.splice(y, 1)
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

case'1':
data = database.game[x].jogos[y]
if (data.matrix[0] == '⭕') return
if (data.matrix[0] == '❌') return
if (data.x == sender && data.online == true) {
data.matrix[0] = '❌'
data.jogar = data.o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (data.o == sender && data.online == true) {
data.matrix[0] = '⭕'
data.jogar = data.x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

case'2':
data = database.game[x].jogos[y]
if (data.matrix[1] == '⭕') return
if (data.matrix[1] == '❌') return
if (data.x == sender && data.online == true) {
data.matrix[1] = '❌'
data.jogar = data.o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (data.o == sender && data.online == true) {
data.matrix[1] = '⭕'
data.jogar = data.x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

case'3':
data = database.game[x].jogos[y]
if (data.matrix[2] == '⭕') return
if (data.matrix[2] == '❌') return
if (data.x == sender && data.online == true) {
data.matrix[2] = '❌'
data.jogar = data.o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (data.o == sender && data.online == true) {
data.matrix[2] = '⭕'
data.jogar = data.x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

case'4':
data = database.game[x].jogos[y]
if (data.matrix[3] == '⭕') return
if (data.matrix[3] == '❌') return
if (data.x == sender && data.online == true) {
data.matrix[3] = '❌'
data.jogar = data.o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (data.o == sender && data.online == true) {
data.matrix[3] = '⭕'
data.jogar = data.x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

case'5':
data = database.game[x].jogos[y]
if (data.matrix[4] == '⭕') return
if (data.matrix[4] == '❌') return
if (data.x == sender && data.online == true) {
data.matrix[4] = '❌'
data.jogar = data.o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (data.o == sender && data.online == true) {
data.matrix[4] = '⭕'
data.jogar = data.x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

case'6':
data = database.game[x].jogos[y]
if (data.matrix[5] == '⭕') return
if (data.matrix[5] == '❌') return
if (data.x == sender && data.online == true) {
data.matrix[5] = '❌'
data.jogar = data.o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (data.o == sender && data.online == true) {
data.matrix[5] = '⭕'
data.jogar = data.x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

case'7':
data = database.game[x].jogos[y]
if (data.matrix[6] == '⭕') return
if (data.matrix[6] == '❌') return
if (data.x == sender && data.online == true) {
data.matrix[6] = '❌'
data.jogar = data.o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (data.o == sender && data.online == true) {
data.matrix[6] = '⭕'
data.jogar = data.x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

case'8':
data = database.game[x].jogos[y]
if (data.matrix[7] == '⭕') return
if (data.matrix[7] == '❌') return
if (data.x == sender && data.online == true) {
data.matrix[7] = '❌'
data.jogar = data.o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (data.o == sender && data.online == true) {
data.matrix[7] = '⭕'
data.jogar = data.x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

case'9':
data = database.game[x].jogos[y]
if (data.matrix[8] == '⭕') return
if (data.matrix[8] == '❌') return
if (data.x == sender && data.online == true) {
data.matrix[8] = '❌'
data.jogar = data.o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (data.o == sender && data.online == true) {
data.matrix[8] = '⭕'
data.jogar = data.x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
break

default:
}

if (database.game[x].jogos[y] !== undefined) {
if (database.game[x].jogos[y].matrix[0] == '❌' && database.game[x].jogos[y].matrix[1] == '❌' && database.game[x].jogos[y].matrix[2] == '❌') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[3] == '❌' && database.game[x].jogos[y].matrix[4] == '❌' && database.game[x].jogos[y].matrix[5] == '❌') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[6] == '❌' && database.game[x].jogos[y].matrix[7] == '❌' && database.game[x].jogos[y].matrix[8] == '❌') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[0] == '❌' && database.game[x].jogos[y].matrix[3] == '❌' && database.game[x].jogos[y].matrix[6] == '❌') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[1] == '❌' && database.game[x].jogos[y].matrix[4] == '❌' && database.game[x].jogos[y].matrix[7] == '❌') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[2] == '❌' && database.game[x].jogos[y].matrix[5] == '❌' && database.game[x].jogos[y].matrix[8] == '❌') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[0] == '❌' && database.game[x].jogos[y].matrix[4] == '❌' && database.game[x].jogos[y].matrix[8] == '❌') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[2] == '❌' && database.game[x].jogos[y].matrix[4] == '❌' && database.game[x].jogos[y].matrix[6] == '❌') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].x
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[0] == '⭕' && database.game[x].jogos[y].matrix[1] == '⭕' && database.game[x].jogos[y].matrix[2] == '⭕') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[3] == '⭕' && database.game[x].jogos[y].matrix[4] == '⭕' && database.game[x].jogos[y].matrix[5] == '⭕') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[6] == '⭕' && database.game[x].jogos[y].matrix[7] == '⭕' && database.game[x].jogos[y].matrix[8] == '⭕') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[0] == '⭕' && database.game[x].jogos[y].matrix[3] == '⭕' && database.game[x].jogos[y].matrix[6] == '⭕') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[1] == '⭕' && database.game[x].jogos[y].matrix[4] == '⭕' && database.game[x].jogos[y].matrix[7] == '⭕') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[2] == '⭕' && database.game[x].jogos[y].matrix[5] == '⭕' && database.game[x].jogos[y].matrix[8] == '⭕') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[0] == '⭕' && database.game[x].jogos[y].matrix[4] == '⭕' && database.game[x].jogos[y].matrix[8] == '⭕') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[2] == '⭕' && database.game[x].jogos[y].matrix[4] == '⭕' && database.game[x].jogos[y].matrix[6] == '⭕') {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = database.game[x].jogos[y].o
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
if (database.game[x].jogos[y].matrix[0] !== '1️⃣' && database.game[x].jogos[y].matrix[1] !== '2️⃣' && database.game[x].jogos[y].matrix[2] !== '3️⃣' && database.game[x].jogos[y].matrix[3] !== '4️⃣' && database.game[x].jogos[y].matrix[4] !== '5️⃣' && database.game[x].jogos[y].matrix[5] !== '6️⃣' && database.game[x].jogos[y].matrix[6] !== '7️⃣' && database.game[x].jogos[y].matrix[7] !== '8️⃣' && database.game[x].jogos[y].matrix[8] !== '9️⃣' && database.game[x].jogos[y].finish == false) {
database.game[x].jogos[y].finish = true
database.game[x].jogos[y].winner = false
fs.writeFileSync('./src/database.json', JSON.stringify(database, null, 2))
}
}
}
}
}