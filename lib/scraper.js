const axios = require('axios')
const cheerio = require('cheerio')

async function mediafire (mediafireUrl) {
a = await axios.get(mediafireUrl, {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
return {
download: $('div.download_link').find('a#downloadButton').attr('href'),
size: $(`li:contains("File size:")`).parent().text().split('Uploaded')[0].replace(/\n/g, "").replace(/ /g, "").replace(':', ': '),
upload: $(`li:contains("Uploaded:")`).parent().text().split('Uploaded:')[1].replace(/\n/g, "").replace(/ /g, ""),
name: $('div.dl-info').find('div.filename').text().split('.')[0],
type: $('div.dl-info').find('div.filetype').text()
}
}

async function wikipedia (query) {
a = await axios.get("https://pt.m.wikipedia.org/w/index.php?search=" + encodeURIComponent(query) + "&title=Especial%3APesquisar&profile=default&fulltext=1&ns0=1", {
headers: {
"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; LM-X210) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.87 Mobile Safari/537.36"
}
})
$ = cheerio.load(a.data)
n = ""
k = $('div.mw-search-result-heading').length
if (k <= 0) return "Nenhum resultado."
for (let i = 0; i < k; i++) {
h = $('div.mw-search-result-heading').eq(i).find('a').attr('title') || "Indisponível"
g = 'https://pt.m.wikipedia.org/wiki' + $('div.mw-search-result-heading').eq(i).find('a').attr('href') || "HTTP_404"
c = $('div.searchresult').eq(i).text() || "Indisponível"
s = $('div.mw-search-result-data').eq(i).text() || "Indisponível"
n += `❑ Título: ${h}\n❑ Descrição: ${c}\n❑ Link: ${g}\n❑ Data de postagem: ${s}\n\n`
}
return n
}

module.exports = { wikipedia, mediafire }