const { spawn, exec, execFile } = require('child_process')
const cheerio = require('cheerio')
const FormData = require('form-data')
const { default: Axios } = require('axios')
const fs = require('fs')
const crypto = require('crypto')
const { fromBuffer } = require('file-type')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const { resolve } = require("path")
const moment = require("moment-timezone") 
const path = require("path")
const chalk = require('chalk')

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const time = moment.tz().format('YYYY')

function addExif(packname, authorname, filename) {
if (!filename) filename = getRandom(`_${time}.exif`)
if (!packname) packname = 'By'
if (!authorname) authorname = 'Ethern Bot'
const json = {
'sticker-pack-id': 'com.etheral.waifuhub.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2',
'sticker-pack-name': packname,
'sticker-pack-publisher': authorname,
};
let length = new TextEncoder().encode(JSON.stringify(json)).length;
const f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
const code = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00];
if (length > 256) {
length = length - 256;
code.unshift(0x01);
} else {
code.unshift(0x00);
}
const fff = Buffer.from(code);
const ffff = Buffer.from(JSON.stringify(json), 'utf-8');
let len;
if (length < 16) {
len = length.toString(16);
len = '0' + length;
} else {
len = length.toString(16);
}
const ff = Buffer.from(len, 'hex');
const buffer = Buffer.concat([f, ff, fff, ffff]);
if (fs.existsSync(`./${filename}.exif`)) fs.unlinkSync(`./${filename}.exif`)
fs.writeFileSync(`./${filename}.exif`, buffer)
return `${filename}.exif`
}

const stickerCircle = async(Y, R, K, P) => {
return new Promise((resolve, reject) => {
A = getRandom('_.jpeg')
B = getRandom('_.png')
C = 'https://i.ibb.co/yVQ7VGD/black.png'
D = getRandom('_.webp')
E = getRandom('_.png')
F = getRandom('_.png')
exec(`convert ${Y} -resize 630x630^ -gravity center -extent 630x630 ${A} && wget ${C} -O ${B} && convert ${A} -gravity center ${B} -compose copyopacity -composite -trim ${E} && magick convert ${E} -resize 55% ${F}`, async (err) => {
if (err) return reject('Error in export')
addExif(R, K, P)
exec(`ffmpeg -i ${F} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${D}`, async (err) => {
exec(`webpmux -set exif ./${P}.exif ${D} -o ${D}`, async (err) => {
if (err) return reject('Error in export')
resolve({
result: fs.readFileSync(D),
c: 'Follow Instagram *@nause.dreams*'
})
fs.unlinkSync(Y)
fs.unlinkSync(B)
fs.unlinkSync(A)
fs.unlinkSync(E)
fs.unlinkSync(D)
fs.unlinkSync(F)
fs.unlinkSync(`./${P}.exif`)
})
})
})
})
}

exports.stickerCircle = stickerCircle