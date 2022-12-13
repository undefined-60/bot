const fs = require('fs')
const crypto = require('crypto')
const toMs = require('ms')

const tictactoe = JSON.parse(fs.readFileSync('./lib/tictac/tictactoe.json'))
const reloadTTT = () => { global._ttt = JSON.parse(fs.readFileSync('./lib/tictac/tttset.json')) }

const addTTTset = (TTTdifficulty, userID, userName, groupID) => { reloadTTT()
let position = false
Object.keys(_ttt).forEach((i) => {
if (_ttt[i].info.player == userID) {
position = i
}
})
if (position !==  false) {
_ttt[position] = { info: { group: groupID, player: userID, playername: userName }, 
config: { status: "on", difficulty: TTTdifficulty, Activate1: "on", Activate2: "on", Activate3: "on", autoEnd: Date.now() },
esp: { a1:"🔲", a2:"🔲", a3:"🔲", b1:"🔲", b2:"🔲", b3:"🔲", c1:"🔲", c2:"🔲", c3:"🔲" }
}
} else {
const obj = { info: { group: groupID, player: userID, playername: userName }, 
config: { status: "on", difficulty: TTTdifficulty, Activate1: "on", Activate2: "on", Activate3: "on", autoEnd: Date.now() },
esp: { a1:"🔲", a2:"🔲", a3:"🔲", b1:"🔲", b2:"🔲", b3:"🔲", c1:"🔲", c2:"🔲", c3:"🔲" }
}
_ttt.push(obj)
}
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
}

const TTTposition = (ID) => { reloadTTT()
let position = false
Object.keys(_ttt).forEach((i) => {
if (_ttt[i].info.group = ID) {
position = i
}
})
if (position !== false) {
return Number(position)
} else {
return undefined
}
}

//TESTE PARA VITÓRIA DE ❌
const WinnerX = (p) => { reloadTTT()
if (
(_ttt[p].esp.a1=="❌"&&_ttt[p].esp.a2=="❌"&&_ttt[p].esp.a3=="❌") || (_ttt[p].esp.b1=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.b3=="❌") || (_ttt[p].esp.c1=="❌"&&_ttt[p].esp.c2=="❌"&&_ttt[p].esp.c3=="❌") || 
(_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b1=="❌"&&_ttt[p].esp.c1=="❌") || (_ttt[p].esp.a2=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c2=="❌") || (_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b3=="❌"&&_ttt[p].esp.c3=="❌") ||
(_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c3=="❌") || (_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c1=="❌")
) {
return true
} else {
return false
}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = (p) => { reloadTTT()
if (
(_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.a3=="⭕") || (_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.b3=="⭕") || (_ttt[p].esp.c1=="⭕"&&_ttt[p].esp.c2=="⭕"&&_ttt[p].esp.c3=="⭕") || 
(_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.c1=="⭕") || (_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c2=="⭕") || (_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b3=="⭕"&&_ttt[p].esp.c3=="⭕") ||
(_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c3=="⭕") || (_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c1=="⭕")
) {
return true
} else {
return false
}
}

//TESTE PARA EMPATE
const Tie = (p) => { reloadTTT()
if (_ttt[p].esp.a1!="🔲"&&_ttt[p].esp.a2!="🔲"&&_ttt[p].esp.a3!="🔲"&&_ttt[p].esp.b1!="🔲"&&_ttt[p].esp.b2!="🔲"&&_ttt[p].esp.b3!="🔲"&&_ttt[p].esp.c1!="🔲"&&_ttt[p].esp.c2!="🔲"&&_ttt[p].esp.c3!="🔲") {
return true
} else {
return false
}
}

const IA = (p) => { reloadTTT()
if (WinnerX(p) || WinnerO(p) || Tie(p)) {
_ttt[p].config.Activate1 = "off"
//INICIO DO MODO IMPOSSIVEL
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.a3=="🔲") || (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.a3=="⭕") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.a3=="⭕") ||
(_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.b3=="🔲") || (_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.b3=="⭕") || (_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.b3=="⭕") ||
(_ttt[p].esp.c1=="⭕"&&_ttt[p].esp.c2=="⭕"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.c1=="⭕"&&_ttt[p].esp.c2=="🔲"&&_ttt[p].esp.c3=="⭕") || (_ttt[p].esp.c1=="🔲"&&_ttt[p].esp.c2=="⭕"&&_ttt[p].esp.c3=="⭕") ||
(_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.c1=="🔲") || (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.c1=="⭕") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.c1=="⭕") ||
(_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c2=="🔲") || (_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c2=="⭕") || (_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c2=="⭕") ||
(_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b3=="⭕"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b3=="🔲"&&_ttt[p].esp.c3=="⭕") || (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b3=="⭕"&&_ttt[p].esp.c3=="⭕") ||
(_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c3=="⭕") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c3=="⭕") ||
(_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c1=="🔲") || (_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c1=="⭕") || (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(_ttt[p].esp.a1=="❌"&&_ttt[p].esp.a2=="❌"&&_ttt[p].esp.a3=="🔲") || (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.a3=="❌") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.a2=="❌"&&_ttt[p].esp.a3=="❌") ||
(_ttt[p].esp.b1=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.b3=="🔲") || (_ttt[p].esp.b1=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.b3=="❌") || (_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.b3=="❌") ||
(_ttt[p].esp.c1=="❌"&&_ttt[p].esp.c2=="❌"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.c1=="❌"&&_ttt[p].esp.c2=="🔲"&&_ttt[p].esp.c3=="❌") || (_ttt[p].esp.c1=="🔲"&&_ttt[p].esp.c2=="❌"&&_ttt[p].esp.c3=="❌") ||
(_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b1=="❌"&&_ttt[p].esp.c1=="🔲") || (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.c1=="❌") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b1=="❌"&&_ttt[p].esp.c1=="❌") ||
(_ttt[p].esp.a2=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c2=="🔲") || (_ttt[p].esp.a2=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c2=="❌") || (_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c2=="❌") ||
(_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b3=="❌"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b3=="🔲"&&_ttt[p].esp.c3=="❌") || (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b3=="❌"&&_ttt[p].esp.c3=="❌") ||
(_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c3=="❌") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c3=="❌") ||
(_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c1=="🔲") || (_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c1=="❌") || (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c1=="❌")
)){
_ttt[p].config.Activate1 = "off"
IAmove1(p)
//JOGADAS PROGRAMADAS ABAIXO
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "❌" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "⭕") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "❌" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "⭕") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "❌" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "⭕" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "⭕" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "❌" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "❌" && _ttt[p].esp.b1 == "❌" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "❌" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "❌" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲"))) {
 	  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.a1 = "⭕"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "⭕" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "❌" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "❌") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "⭕" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "❌" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "❌" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "❌") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "❌" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "❌" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.a2 = "⭕"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "⭕" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "❌") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "❌" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "⭕" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "❌" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "⭕") ||
   (_ttt[p].esp.a1 == "⭕" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "❌" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "❌") ||
   (_ttt[p].esp.a1 == "❌" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "❌") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.a3 = "⭕"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "❌" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "⭕" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "⭕" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "❌"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.b1 = "⭕"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "⭕" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "❌" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "⭕" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "⭕") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "⭕") ||
   (_ttt[p].esp.a1 == "⭕" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "⭕" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "❌" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "⭕" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "⭕" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "❌" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "⭕" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "❌" && _ttt[p].esp.a2 == "??" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "⭕") ||
   (_ttt[p].esp.a1 == "⭕" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "❌") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "⭕" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "❌" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "⭕" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "⭕" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "❌" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "⭕") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "⭕") ||
   (_ttt[p].esp.a1 == "⭕" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "⭕" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "⭕" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "⭕" && _ttt[p].esp.b1 == "❌" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "❌") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "❌" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "❌" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "❌" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "❌" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "🔲"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.b2 = "⭕"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "❌" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "⭕") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "⭕" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "❌" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.b3 = "⭕"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "❌" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "⭕" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "⭕" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "❌" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "❌" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "⭕") ||
   (_ttt[p].esp.a1 == "⭕" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "❌") ||
   (_ttt[p].esp.a1 == "❌" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "❌" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "❌") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "❌" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "🔲"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.c1 = "⭕"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "❌" && _ttt[p].esp.b1 == "❌" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "⭕" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "❌" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "⭕"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.c2 = "⭕"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" &&
  ((_ttt[p].esp.a1 == "⭕" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "❌" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "🔲" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "⭕" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "❌" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "❌" && _ttt[p].esp.a3 == "⭕" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "❌" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "❌" && _ttt[p].esp.b1 == "❌" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "⭕" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "❌" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "🔲" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "❌" && _ttt[p].esp.c2 == "🔲" && _ttt[p].esp.c3 == "🔲") ||
   (_ttt[p].esp.a1 == "🔲" && _ttt[p].esp.a2 == "🔲" && _ttt[p].esp.a3 == "🔲" && _ttt[p].esp.b1 == "🔲" && _ttt[p].esp.b2 == "⭕" && _ttt[p].esp.b3 == "❌" && _ttt[p].esp.c1 == "🔲" && _ttt[p].esp.c2 == "❌" && _ttt[p].esp.c3 == "🔲"))) {
  _ttt[p].config.Activate1 = "off"
  _ttt[p].esp.c3 = "⭕"
} else if (_ttt[p].config.difficulty == "IMPOSSIBLE" && (_ttt[p].esp.a1 ==  "🔲" || _ttt[p].esp.a3 ==  "🔲" || _ttt[p].esp.b2 ==  "🔲" || _ttt[p].esp.c1 ==  "🔲" || _ttt[p].esp.c3 ==  "🔲")) {
//PRIORIZAR CANTOS E CENTRO
_ttt[p].config.Activate1 = "off"
while (_ttt[p].config.Activate3 == "on") {
priorityC(p)
}
_ttt[p].config.Activate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (_ttt[p].config.difficulty == "HARD" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.a3=="🔲") || (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.a3=="⭕") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.a3=="⭕") ||
(_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.b3=="🔲") || (_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.b3=="⭕") || (_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.b3=="⭕") ||
(_ttt[p].esp.c1=="⭕"&&_ttt[p].esp.c2=="⭕"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.c1=="⭕"&&_ttt[p].esp.c2=="🔲"&&_ttt[p].esp.c3=="⭕") || (_ttt[p].esp.c1=="🔲"&&_ttt[p].esp.c2=="⭕"&&_ttt[p].esp.c3=="⭕") ||
(_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.c1=="🔲") || (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.c1=="⭕") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.c1=="⭕") ||
(_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c2=="🔲") || (_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c2=="⭕") || (_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c2=="⭕") ||
(_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b3=="⭕"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b3=="🔲"&&_ttt[p].esp.c3=="⭕") || (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b3=="⭕"&&_ttt[p].esp.c3=="⭕") ||
(_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c3=="⭕") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c3=="⭕") ||
(_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c1=="🔲") || (_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c1=="⭕") || (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(_ttt[p].esp.a1=="❌"&&_ttt[p].esp.a2=="❌"&&_ttt[p].esp.a3=="🔲") || (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.a3=="❌") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.a2=="❌"&&_ttt[p].esp.a3=="❌") ||
(_ttt[p].esp.b1=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.b3=="🔲") || (_ttt[p].esp.b1=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.b3=="❌") || (_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.b3=="❌") ||
(_ttt[p].esp.c1=="❌"&&_ttt[p].esp.c2=="❌"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.c1=="❌"&&_ttt[p].esp.c2=="🔲"&&_ttt[p].esp.c3=="❌") || (_ttt[p].esp.c1=="🔲"&&_ttt[p].esp.c2=="❌"&&_ttt[p].esp.c3=="❌") ||
(_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b1=="❌"&&_ttt[p].esp.c1=="🔲") || (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.c1=="❌") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b1=="❌"&&_ttt[p].esp.c1=="❌") ||
(_ttt[p].esp.a2=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c2=="🔲") || (_ttt[p].esp.a2=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c2=="❌") || (_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c2=="❌") ||
(_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b3=="❌"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b3=="🔲"&&_ttt[p].esp.c3=="❌") || (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b3=="❌"&&_ttt[p].esp.c3=="❌") ||
(_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c3=="❌") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c3=="❌") ||
(_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c1=="🔲") || (_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c1=="❌") || (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c1=="❌")
)){
//HARD
_ttt[p].config.Activate1 = "off"
IAmove1(p)
} else if (_ttt[p].config.difficulty == "NORMAL" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.a3=="🔲") || (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.a3=="⭕") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.a3=="⭕") ||
(_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.b3=="🔲") || (_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.b3=="⭕") || (_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.b3=="⭕") ||
(_ttt[p].esp.c1=="⭕"&&_ttt[p].esp.c2=="⭕"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.c1=="⭕"&&_ttt[p].esp.c2=="🔲"&&_ttt[p].esp.c3=="⭕") || (_ttt[p].esp.c1=="🔲"&&_ttt[p].esp.c2=="⭕"&&_ttt[p].esp.c3=="⭕") ||
(_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.c1=="🔲") || (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.c1=="⭕") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.c1=="⭕") ||
(_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c2=="🔲") || (_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c2=="⭕") || (_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c2=="⭕") ||
(_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b3=="⭕"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b3=="🔲"&&_ttt[p].esp.c3=="⭕") || (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b3=="⭕"&&_ttt[p].esp.c3=="⭕") ||
(_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c3=="⭕") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c3=="⭕") ||
(_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c1=="🔲") || (_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c1=="⭕") || (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(_ttt[p].esp.a1=="❌"&&_ttt[p].esp.a2=="❌"&&_ttt[p].esp.a3=="🔲") || (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.a3=="❌") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.a2=="❌"&&_ttt[p].esp.a3=="❌") ||
(_ttt[p].esp.b1=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.b3=="🔲") || (_ttt[p].esp.b1=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.b3=="❌") || (_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.b3=="❌") ||
(_ttt[p].esp.c1=="❌"&&_ttt[p].esp.c2=="❌"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.c1=="❌"&&_ttt[p].esp.c2=="🔲"&&_ttt[p].esp.c3=="❌") || (_ttt[p].esp.c1=="🔲"&&_ttt[p].esp.c2=="❌"&&_ttt[p].esp.c3=="❌") ||
(_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b1=="❌"&&_ttt[p].esp.c1=="🔲") || (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.c1=="❌") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b1=="❌"&&_ttt[p].esp.c1=="❌") ||
(_ttt[p].esp.a2=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c2=="🔲") || (_ttt[p].esp.a2=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c2=="❌") || (_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c2=="❌") ||
(_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b3=="❌"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b3=="🔲"&&_ttt[p].esp.c3=="❌") || (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b3=="❌"&&_ttt[p].esp.c3=="❌") ||
(_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c3=="🔲") || (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c3=="❌") || (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c3=="❌") ||
(_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c1=="🔲") || (_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c1=="❌") || (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c1=="❌")
)){
//NORMAL
_ttt[p].config.Activate1 = "off"
let randomNORMAL = Math.floor(Math.random() * 3)
if (randomNORMAL == 0 || randomNORMAL == 1) {
IAmove1(p)
} else {
while (_ttt[p].config.Activate2 == "on") {
IAalter(p)
}
}
_ttt[p].config.Activate2 = "on"
} else {
//EASY / RANDOM
let randomALL = Math.floor(Math.random() * 9)
switch (randomALL) {
case 0:
if (_ttt[p].esp.a1 == "🔲") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.a1 = "⭕"
}
break
case 1:
if (_ttt[p].esp.a2 == "🔲") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.a2 = "⭕"
}
break
case 2:
if (_ttt[p].esp.a3 == "🔲") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.a3 = "⭕"
}
break
case 3:
if (_ttt[p].esp.b1 == "🔲") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.b1 = "⭕"
}
break
case 4:
if (_ttt[p].esp.b2 == "🔲") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.b2 = "⭕"
}
break
case 5:
if (_ttt[p].esp.b3 == "🔲") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.b3 = "⭕"
}
break
case 6:
if (_ttt[p].esp.c1 == "🔲") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.c1 = "⭕"
}
break
case 7:
if (_ttt[p].esp.c2 == "🔲") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.c2 = "⭕"
}
break
case 8:
if (_ttt[p].esp.c3 == "🔲") {
_ttt[p].config.Activate1 = "off"
_ttt[p].esp.c3 = "⭕"
}
break
}
}
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
}

const IAmove1 = (p) => {
//JOGADA PARA VITÓRIA
if (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.a3=="🔲") {
_ttt[p].esp.a3 = "⭕"
} else if (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.a3=="⭕") {
_ttt[p].esp.a2 = "⭕"
} else if (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.a3=="⭕") {
_ttt[p].esp.a1 = "⭕"
} else if (_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.b3=="🔲") {
_ttt[p].esp.b3 = "⭕"
} else if (_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.b3=="⭕") {
_ttt[p].esp.b2 = "⭕"
} else if (_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.b3=="⭕") {
_ttt[p].esp.b1 = "⭕"
} else if (_ttt[p].esp.c1=="⭕"&&_ttt[p].esp.c2=="⭕"&&_ttt[p].esp.c3=="🔲") {
_ttt[p].esp.c3 = "⭕"
} else if (_ttt[p].esp.c1=="⭕"&&_ttt[p].esp.c2=="🔲"&&_ttt[p].esp.c3=="⭕") {
_ttt[p].esp.c2 = "⭕"
} else if (_ttt[p].esp.c1=="🔲"&&_ttt[p].esp.c2=="⭕"&&_ttt[p].esp.c3=="⭕") {
_ttt[p].esp.c1 = "⭕"
} else if (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.c1=="🔲") {
_ttt[p].esp.c1 = "⭕"
} else if (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.c1=="⭕") {
_ttt[p].esp.b1 = "⭕"
} else if (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b1=="⭕"&&_ttt[p].esp.c1=="⭕") {
_ttt[p].esp.a1 = "⭕"
} else if (_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c2=="🔲") {
_ttt[p].esp.c2 = "⭕"
} else if (_ttt[p].esp.a2=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c2=="⭕") {
_ttt[p].esp.b2 = "⭕"
} else if (_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c2=="⭕") {
_ttt[p].esp.a2 = "⭕"
} else if (_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b3=="⭕"&&_ttt[p].esp.c3=="🔲") {
_ttt[p].esp.c3 = "⭕"
} else if (_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b3=="🔲"&&_ttt[p].esp.c3=="⭕") {
_ttt[p].esp.b3 = "⭕"
} else if (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b3=="⭕"&&_ttt[p].esp.c3=="⭕") {
_ttt[p].esp.a3 = "⭕"
} else if (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c3=="🔲") {
_ttt[p].esp.c3 = "⭕"
} else if (_ttt[p].esp.a1=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c3=="⭕") {
_ttt[p].esp.b2 = "⭕"
} else if (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c3=="⭕") {
_ttt[p].esp.a1 = "⭕"
} else if (_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c1=="🔲") {
_ttt[p].esp.c1 = "⭕"
} else if (_ttt[p].esp.a3=="⭕"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c1=="⭕") {
_ttt[p].esp.b2 = "⭕"
} else if (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b2=="⭕"&&_ttt[p].esp.c1=="⭕") {
_ttt[p].esp.a3 = "⭕"
//JOGADA PARA BLOQUEIO
} else if (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.a2=="❌"&&_ttt[p].esp.a3=="🔲") {
_ttt[p].esp.a3 = "⭕"
} else if (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.a3=="❌") {
_ttt[p].esp.a2 = "⭕"
} else if (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.a2=="❌"&&_ttt[p].esp.a3=="❌") {
_ttt[p].esp.a1 = "⭕"
} else if (_ttt[p].esp.b1=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.b3=="🔲") {
_ttt[p].esp.b3 = "⭕"
} else if (_ttt[p].esp.b1=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.b3=="❌") {
_ttt[p].esp.b2 = "⭕"
} else if (_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.b3=="❌") {
_ttt[p].esp.b1 = "⭕"
} else if (_ttt[p].esp.c1=="❌"&&_ttt[p].esp.c2=="❌"&&_ttt[p].esp.c3=="🔲") {
_ttt[p].esp.c3 = "⭕"
} else if (_ttt[p].esp.c1=="❌"&&_ttt[p].esp.c2=="🔲"&&_ttt[p].esp.c3=="❌") {
_ttt[p].esp.c2 = "⭕"
} else if (_ttt[p].esp.c1=="🔲"&&_ttt[p].esp.c2=="❌"&&_ttt[p].esp.c3=="❌") {
_ttt[p].esp.c1 = "⭕"
} else if (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b1=="❌"&&_ttt[p].esp.c1=="🔲") {
_ttt[p].esp.c1 = "⭕"
} else if (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b1=="🔲"&&_ttt[p].esp.c1=="❌") {
_ttt[p].esp.b1 = "⭕"
} else if (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b1=="❌"&&_ttt[p].esp.c1=="❌") {
_ttt[p].esp.a1 = "⭕"
} else if (_ttt[p].esp.a2=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c2=="🔲") {
_ttt[p].esp.c2 = "⭕"
} else if (_ttt[p].esp.a2=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c2=="❌") {
_ttt[p].esp.b2 = "⭕"
} else if (_ttt[p].esp.a2=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c2=="❌") {
_ttt[p].esp.a2 = "⭕"
} else if (_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b3=="❌"&&_ttt[p].esp.c3=="🔲") {
_ttt[p].esp.c3 = "⭕"
} else if (_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b3=="🔲"&&_ttt[p].esp.c3=="❌") {
_ttt[p].esp.b3 = "⭕"
} else if (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b3=="❌"&&_ttt[p].esp.c3=="❌") {
_ttt[p].esp.a3 = "⭕"
} else if (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c3=="🔲") {
_ttt[p].esp.c3 = "⭕"
} else if (_ttt[p].esp.a1=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c3=="❌") {
_ttt[p].esp.b2 = "⭕"
} else if (_ttt[p].esp.a1=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c3=="❌") {
_ttt[p].esp.a1 = "⭕"
} else if (_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c1=="🔲") {
_ttt[p].esp.c1 = "⭕"
} else if (_ttt[p].esp.a3=="❌"&&_ttt[p].esp.b2=="🔲"&&_ttt[p].esp.c1=="❌") {
_ttt[p].esp.b2 = "⭕"
} else if (_ttt[p].esp.a3=="🔲"&&_ttt[p].esp.b2=="❌"&&_ttt[p].esp.c1=="❌") {
_ttt[p].esp.a3 = "⭕"
}
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT() 
}

//MOVIMENTO ALTERNATIVO
const IAalter = (p) => {
let randomALTER = Math.floor(Math.random() * 9)
switch (randomALTER) {
case 0:
if (_ttt[p].esp.a1 == "🔲") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.a1 = "⭕"
}
break
case 1:
if (_ttt[p].esp.a2 == "🔲") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.a2 = "⭕"
}
break
case 2:
if (_ttt[p].esp.a3 == "🔲") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.a3 = "⭕"
}
break
case 3:
if (_ttt[p].esp.b1 == "🔲") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.b1 = "⭕"
}
break
case 4:
if (_ttt[p].esp.b2 == "🔲") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.b2 = "⭕"
}
break
case 5:
if (_ttt[p].esp.b3 == "🔲") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.b3 = "⭕"
}
break
case 6:
if (_ttt[p].esp.c1 == "🔲") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.c1 = "⭕"
}
break
case 7:
if (_ttt[p].esp.c2 == "🔲") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.c2 = "⭕"
}
break
case 8:
if (_ttt[p].esp.c3 == "🔲") {
_ttt[p].config.Activate2 = "off"
_ttt[p].esp.c3 = "⭕"
}
break
}
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = (p) => {
let randomPriC = Math.floor(Math.random() * 5)
switch (randomPriC) {
case 0 :
if (_ttt[p].esp.a1 == "🔲") {
_ttt[p].config.Activate3 = "off"
_ttt[p].esp.a1 = "⭕"
}
break
case 1 :
if (_ttt[p].esp.a3 == "🔲") {
_ttt[p].config.Activate3 = "off"
_ttt[p].esp.a3 = "⭕"
}
break
case 2 :
if (_ttt[p].esp.b2 == "🔲") {
_ttt[p].config.Activate3 = "off"
_ttt[p].esp.b2 = "⭕"
}
break
case 3 :
if (_ttt[p].esp.c1 == "🔲") {
_ttt[p].config.Activate3 = "off"
_ttt[p].esp.c1 = "⭕"
}
break
case 4 :
if (_ttt[p].esp.c3 == "🔲") {
_ttt[p].config.Activate3 = "off"
_ttt[p].esp.c3 = "⭕"
}
break
}
fs.writeFileSync('./lib/tictac/tttset.json', JSON.stringify(_ttt, null, 2)); reloadTTT()
}

//---------------------------------------------------------------------------------------------------------------

const addTTTId = (userId) => {
const obj = { jid: userId, wins: 0, defeats: 0, ties: 0, points: 0 }
tictactoe.push(obj)
fs.writeFileSync('./lib/tictac/tictactoe.json', JSON.stringify(tictactoe, null, 2))
}

const addTTTwin = (userId, amount) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
tictactoe[position].wins += amount
fs.writeFileSync('./lib/tictac/tictactoe.json', JSON.stringify(tictactoe, null, 2))
}
}

const addTTTdefeat = (userId, amount) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
tictactoe[position].defeats += amount
fs.writeFileSync('./lib/tictac/tictactoe.json', JSON.stringify(tictactoe, null, 2))
}
}

const addTTTtie = (userId, amount) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
tictactoe[position].ties += amount
fs.writeFileSync('./lib/tictac/tictactoe.json', JSON.stringify(tictactoe, null, 2))
}
}

const addTTTpoints = (userId, amount) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
tictactoe[position].points += amount
fs.writeFileSync('./lib/tictac/tictactoe.json', JSON.stringify(tictactoe, null, 2))
}
}

const getTTTId = (userId) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
return tictactoe[position].jid
}
}

const getTTTwins = (userId) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
return tictactoe[position].wins
}
}

const getTTTdefeats = (userId) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
return tictactoe[position].defeats
}
}

const getTTTties = (userId) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
return tictactoe[position].ties
}
}

const getTTTpoints = (userId) => {
let position = false
Object.keys(tictactoe).forEach((i) => {
if (tictactoe[i].jid == userId) {
position = i
}
})
if (position !== false) {
return tictactoe[position].points
}
}

//-----------------------------------------------------------------------------------------------------------------

const ttthelp = (prefix) => {
return `
━━━━━━❰⊰❰⊰✾⊱❱⊱❱━━━━ ━━

𖣯🌀ㄒ丨匚 ㄒ卂匚 ㄒㄖ乇🌀𖣯

━━━━━━❰⊰❰⊰✾⊱❱⊱❱━━━━ ━━

✿ 👥 Somente para *Grupos*
✿ 🧩 Somente com *Games ON*

❖ INICIAR
╻
┣ ❏ Para iniciar digite:
┃ ┗ ⟬ *${prefix}ttt* [DIFICULDADE] ⟭
┗ ❏ Apenas uma pessoa por vez

❖ DIFICULDADE
╻
┣ ❏ easy : totalmente aleatório
┃     (Só azarado pra perder nessa)
┣ ❏ normal : 66% de chance 
┃     de bloqueio e vitória
┣ ❏ hard : 100% de chance 
┃     de bloqueio e vitória 
┗ ❏ impossible : Só Kuuhaku
   pra vencer isso

❖ TEMPORIZADOR
╻
┣ ❏ Uma nova partida só poderá
┃     ser iniciada após um intervalo
┃     de 4 minutos apartir do início
┃     da partida anterior
┃
┣ ❏ O jogador deverá esperar
┃     5 minutos para jogar novamente
┃
┗ ❏ A partida terminará 
   automaticamente após 4 minutos

❖ COMANDOS
╻
┣ ❏ Para marcar digite:
┃ ┗ ⟬ *${prefix}coord* [ COORDENADA ] ⟭
┃
┗ ❏ Exemplo:
   ┗ ⟬ ${prefix}coord a1 
   ----------------------
   🌀1️⃣2️⃣3️⃣
   🅰️❌🔲🔲
   🅱️🔲🔲🔲
   ©️🔲🔲🔲  ⟭

❖ SEU STATUS
╻
┗ ❏ Para ver seu status digite:
 ┗ ⟬ *${prefix}tttme* ⟭

❖ RANK     
╻
┗ ❏ Rank dos 3 melhores players  
 ┗ ⟬ *${prefix}tttrank* ⟭  

❖ RECOMPENSAS
╻
┣ ❏ EASY
┃ ┣ ⟬ Vitória : +「 15 / 30 」⟭
┃ ┗ ⟬ Derrota : -「 100 / 200 」⟭
┃
┣ ❏ NORMAL
┃ ┣ ⟬ Vitória : +「 35 / 70 」⟭
┃ ┗ ⟬ Derrota : -「 35 / 70 」⟭
┃
┣ ❏ HARD
┃ ┣ ⟬ Vitória : +「 100 / 200 」⟭
┃ ┗ ⟬ Derrota : -「 15 / 30 」⟭
┃
┣ ❏ IMPOSSIBLE
┃ ┣ ⟬ Vitória : +「 1000 / 2000 」⟭
┃ ┗ ⟬ Derrota : -「 0 / 0 」⟭
┃
┣ ❏ EMPATE
┃ ┗ ⟬ 「 0 / 0 」 ⟭
┃ 
┗ ❏ PARTIDA NÃO FINALIZADA
 ┗ ⟬ - 「 35 / 70 」 ⟭

━━━━━━❰⊰❰⊰✾⊱❱⊱❱━━━━━━
`
}

const tttme = (userName1, userWins, userDefeats, userTies, userPoints) => {
  return `
━━━━━━❰⊰❰⊰✾⊱❱⊱❱━━━━━━

 𖣯🌀ㄒ丨匚 ㄒ卂匚 ㄒㄖ乇🌀𖣯

❖ NOME: ${userName1} 

━━━━━━❰⊰❰⊰✾⊱❱⊱❱━━━━━━

╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸
│ ➣ VITÓRIAS: ${userWins} 🎊
│ ➣ DERROTAS: ${userDefeats} 💥
│ ➣ EMPATES: ${userTies} 🌀
│ ➣ PONTOS: ${userPoints} ✨
╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸

━━━━━━❰⊰❰⊰✾⊱❱⊱❱━━━━━━
`
}

module.exports = { addTTTset, TTTposition, WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC, addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints, ttthelp, tttme }