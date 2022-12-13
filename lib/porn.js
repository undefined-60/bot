const superagent = require('superagent')
const cheerio = require('cheerio')

exports.xnxx = async (query, search, page) => {
const url = query + (search ? ('/' + (page ? page : '0')) : "")
const { text } = await superagent.get(url).set("user-agent", "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36")
const $ = cheerio.load(text)
const res = []
if (search) {
total = $('span.name').length
for (let x = 0; x < total; x++) {
ress = {
views: $('p.metadata').eq(x).find('span.right').text().replace(/\n/g, ""),
title: $('div.thumb-under').eq(x).find('p > a').text(),
profile: $('span.name').eq(x).text(),
url: "https://www.xnxx.com" + $('div.thumb-under').eq(x).find('p > a').attr('href'),
duration: $('p.metadata').eq(x).text().split('%')[1].split('-')[0].replace(/\n/g, "")
}
res.push(ress)
}
} else {
total = $('div.metadata-row').eq(1).find('a').length >= 3 ? 3 : cher('div.metadata-row').eq(1).find('a').length
tags = ""
for (let x = 0; x < total; x++) {
tags += $('div.metadata-row').eq(1).find('a').eq(x).text() + '; '
}
ress = {
duration: $('div.clear-infobar').find('span.metadata').text().split($('div.clear-infobar').find('span.metadata').find('a.gold-plate').text())[1].split('-')[0].replace(/\n/g, "").trim(),
tags: tags,
profile: $('div.clear-infobar').find('span.metadata').find('a.gold-plate').text(),
title: $('div.clear-infobar').find('strong').text(),
bad: $('span.vote-actions').find('a.vote-action-bad').find('span').text(),
rating: $('div#video-votes').find('span.rating-box').text(),
thumbnail: $('div#html5video').find('div').eq(1).find('img').attr('src'),
baixa: $('div#html5video').find('div').eq(3).find('a').attr('href'),
good: $('span.vote-actions').find('a.vote-action-good').find('span').text(),
media: $('div#html5video').find('div').eq(4).find('a').attr('href'),
views: $('div.clear-infobar').find('span.metadata').text().split('-')[2].replace(/\n/g, "").trim()
}
res.push(ress)
}
return res
}