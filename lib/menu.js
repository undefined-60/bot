const fs = require("fs-extra")

exports.menu = async (prefix, pushName, cash, level, xp, mensagens, comandos, patente, runtime) => {
const config = JSON.parse(fs.readFileSync('./src/config.json'))
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

return `\`\`\`⋆╭────▢
⋆│➻ BotName: ${config.bot}
⋆│➻ Privado: ${config.self ? 'sim' : 'não'}
⋆│➻ Prefix: ${prefix}
⋆│➻ Antipv: ${config.antipv ? 'on' : 'off'}
⋆│➻ Multiprefixo: ${config.multiprefix ? 'on' : 'off'}
⋆│➻ Proprietário: ${config.nick}
⋆│➻ Tempo online: ${runtime.replace('Minutos', 'M').replace('Segundos', 'S')}
⋆╰────▢
⋆╭────▢
⋆│➻ Nome: ${pushName}
⋆│➻ Dinheiro: ${cash ? cash : '0'}
⋆│➻ Level: ${level ? level : '1'}
⋆│➻ XP: ${xp ? xp : '0'}
⋆│➻ Patente: ${patente ? patente : 'iniciante'}
⋆│➻ Mensagens: ${mensagens ? mensagens : '0'}
⋆│➻ Comandos dados: ${comandos ? comandos : '0'}
⋆╰────▢
⋆ ⎙ stickers
⋆╭─▢
⋆│➻ ${prefix}sticker [marcar:imagem:video]
⋆│➻ ${prefix}togif [marcar:sticker]
⋆│➻ ${prefix}f [marcar:imagem:video]
⋆│➻ ${prefix}stickers [query]
⋆│➻ ${prefix}clf [marcar:imagem]
⋆│➻ ${prefix}st [marcar:imagem:video]
⋆│➻ ${prefix}semoji [emoji]
⋆│➻ ${prefix}take [marcar:sticker]
⋆│➻ ${prefix}attp [query]
⋆│➻ ${prefix}toimg [marcar:sticker]
⋆│➻ ${prefix}emojimix [emoji:|:emoji]
⋆╰─▢${readmore}
⋆ ⎙ download
⋆╭─▢
⋆│➻ ${prefix}mcpe [minecraft]
⋆│➻ ${prefix}playlist [query]
⋆│➻ ${prefix}ytmp3 [link]
⋆│➻ ${prefix}xvideos [query]
⋆│➻ ${prefix}ytmp4 [link]
⋆│➻ ${prefix}fbwhatch [link]
⋆│➻ ${prefix}instagram [link]
⋆│➻ ${prefix}nhentai [query]
⋆│➻ ${prefix}aptoide [query]
⋆│➻ ${prefix}play [query]
⋆│➻ ${prefix}uptdown [query]
⋆╰─▢${readmore}
⋆ ⎙ outros menus
⋆╭─▢
⋆│➻ ${prefix}administrador
⋆│➻ ${prefix}anime
⋆│➻ ${prefix}hentai
⋆│➻ ${prefix}alteradores
⋆│➻ ${prefix}jogos
⋆│➻ ${prefix}pesquisa
⋆│➻ ${prefix}logos
⋆│➻ ${prefix}efeitos
⋆│➻ ${prefix}proprietario
⋆╰─▢\`\`\``
}

/*
〚
〛
〖
〗
ᵘⁿᵈᵉᶠᶦⁿᵈᵉᵇᵒᵗ
ᥙᥒdᥱfιᥒdᥱB᥆t
ᵠʷᵉʳᵗʸᵘᶦᵒᵖᵃˢᵈᶠᵍʰʲᵏˡᶜ̧ᶻˣᶜᵛᵇⁿᵐ
Qᥕᥱrtᥡᥙι᥆ρᥲ᥉dfghjkᥣᥴ̧z᥊ᥴ᥎bᥒ꧑
Qᴡᴇʀᴛʏᴜɪᴏᴘᴀsᴅғɢʜᴊᴋʟᴄ̧ᴢxᴄᴠʙɴᴍ
QᗯᕮᖇTYᑌIOᑭᗩSᗞᖴＧᕼᒍKᒪᑕ̧Z᙭ᑕᐯᗷᘉᗰ
QЩΣЯƬYЦIӨPΛƧDFGΗJKᄂᄃ̧ZXᄃVBПM
Ⓠⓦⓔⓡⓣⓨⓤⓘⓞⓟⓐⓢⓓⓕⓖⓗⓙⓚⓛⓒ̧ⓩⓧⓒⓥⓑⓝⓜ
🅠🅦🅔🅡🅣🅨🅤🅘🅞🅟🅐🅢🅓🅕🅖🅗🅙🅚🅛🅒̧🅩🅧🅒🅥🅑🅝🅜
🆀🆆🅴🆁🆃🆈🆄🅸🅾🅿🅰🆂🅳🅵🅶🅷🅹🅺🅻ç🆉🆇🅲🆅🅱🅽🅼
Ⓠⓦⓔⓡⓣⓨⓤⓘⓞⓟⓐⓢⓓⓕⓖⓗⓙⓚⓛⓒ̧ⓩⓧⓒⓥⓑⓝⓜ
⚀
⚁
▓
➺
➞
```⋆╭────❐
⋆│➻ BotName: undefinedBot
⋆│➻ Privado: não
⋆│➻ Prefix: $
⋆│➻ Antipv: off
⋆│➻ Multiprefixo: off
⋆│➻ Proprietário: carlos</>
⋆│➻ Tempo online: 14 horas 21 minutos 39 segundos
⋆╰────❏
⋆╭────❐
⋆│➻ Nome: http://xvideoeos.com/carlos
⋆│➻ Dinheiro: 17829
⋆│➻ XP: 39073
⋆│➻ Petente: diamante III
⋆│➻ Mensagens: 241
⋆│➻ Comandos dados: 241
⋆╰────❏
⋆ ⎙ download
⋆╭─▢
⋆│➻ ${prefix}mcpe [versão]
⋆│➻ ${prefix}playlist [query]
⋆│➻ ${prefix}ytmp3 [url]
⋆│➻ ${prefix}ytmp4 [url]
⋆│➻ ${prefix}aptoide [query]
⋆│➻ ${prefix}fbwhatch [url]
⋆│➻ ${prefix}nhentai [query]
⋆│➻ ${prefix}instagram [url]
⋆│➻ ${prefix}play [query]
⋆│➻ ${prefix}xvideos [query]
⋆│➻ ${prefix}uptdown [query]
⋆╰─⎔
⋆ ⎙ stickers
⋆╭─⋗
⋆│➻ ${prefix}sticker [marcar:imagem:video]
⋆│➻ ${prefix}st [marcar:imagem:video]
⋆│➻ ${prefix}togif [marcar:figurinha]
⋆│➻ ${prefix}f [marcar:imagem:video]
⋆│➻ ${prefix}stickers [query]
⋆│➻ ${prefix}clf [marcar:imagem]
⋆│➻ ${prefix}attp [query]
⋆│➻ ${prefix}toimg [marcar:figurinha]
⋆│➻ ${prefix}semoji [emoji]
⋆│➻ ${prefix}take [marcar:figurinha]
⋆│➻ ${prefix}emojimix [emogi:emoji]
⋆╰─⊳
⋆ ⎙ auteradores
⋆╭─⌦
⋆│➻ ${prefix}esquilo [marcar:audio]
⋆│➻ ${prefix}robot [marcar:audio]
⋆│➻ ${prefix}slow [marcar:audio]
⋆│➻ ${prefix}volume [marcar:audio]
⋆│➻ ${prefix}bass [marcar:audio]
⋆│➻ ${prefix}fast [marcar:audio]
⋆│➻ ${prefix}reverse [marcar:video]
⋆│➻ ${prefix}lento [marcar:video]
⋆│➻ ${prefix}rapido [marcar:video]
⋆│➻ ${prefix}reverseaud [marcar:audio]
⋆╰─⌬
⋆ ⎙ pesquisa
⋆╭─▢
⋆│➻ ${prefix}googleimage [marcar:imagem]
⋆│➻ ${prefix}filmes [query]
⋆│➻ ${prefix}gimg [query]
⋆│➻ ${prefix}celular [query]
⋆│➻ ${prefix}films [query]
⋆│➻ ${prefix}gis [query]
⋆│➻ ${prefix}wikipedia [query]
⋆│➻ ${prefix}google [query]
⋆│➻ ${prefix}googlesearch [query]
⋆│➻ ${prefix}pesquisar [query]
⋆│➻ ${prefix}googleimg [marcar:imagem]
⋆╰─■
⋆ ⎙ editor - imagem
⋆╭─□
⋆│➻ ${prefix}triggered [marcar:imagem]
⋆│➻ ${prefix}gun [marcar:imagem]
⋆│➻ ${prefix}wanted [marcar:imagem]
⋆│➻ ${prefix}blur [marcar:imagem]
⋆│➻ ${prefix}cinza [marcar:imagem]
⋆│➻ ${prefix}rip [marcar:imagem]
⋆│➻ ${prefix}gayimg [marcar:imagem]
⋆│➻ ${prefix}circle [marcar:imagem]
⋆│➻ ${prefix}trash [marcar:imagem]
⋆╰─■
⋆ ⎙ administrador
⋆╭─❏
⋆│➻ ${prefix}promover [@:mensagem]
⋆│➻ ${prefix}ban [@:mensagem]
⋆│➻ ${prefix}tag [texto]
⋆│➻ ${prefix}marcar [texto]
⋆│➻ ${prefix}rebaixar [@:mensagem]
⋆│➻ ${prefix}gp [1:0]
⋆│➻ ${prefix}ephemeral [1:0]
⋆│➻ ${prefix}add [numero:mensagem]
⋆╰─❏
⋆ ⎙ imagem - logos
⋆╭─❏
⋆│➻ ${prefix}phlogo [texto:|:texto]
⋆│➻ ${prefix}1917 [texto]
⋆│➻ ${prefix}hacker [texto]
⋆│➻ ${prefix}logo [texto]
⋆│➻ ${prefix}gaming [texto]
⋆│➻ ${prefix}lion [texto:|:texto]
⋆│➻ ${prefix}thunder [texto]
⋆│➻ ${prefix}matrix [texto]
⋆│➻ ${prefix}break [texto]
⋆│➻ ${prefix}wolf [texto:|:texto]
⋆│➻ ${prefix}bear [texto]
⋆│➻ ${prefix}angel [texto]
⋆│➻ ${prefix}broken [texto]
⋆│➻ ${prefix}stone [texto:|:texto]
⋆│➻ ${prefix}freefire [texto]
⋆│➻ ${prefix}glitch2 [texto]
⋆│➻ ${prefix}glitch [texto:|:texto]
⋆│➻ ${prefix}team [texto]
⋆│➻ ${prefix}soldado [texto]
⋆│➻ ${prefix}joker [texto]
⋆│➻ ${prefix}marvel [texto:|:texto]
⋆╰─❏
⋆ ⎙ imagem/gif - anime
⋆╭─❏
⋆│➻ ${prefix}megumin
⋆│➻ ${prefix}waifu
⋆│➻ ${prefix}neko
⋆│➻ ${prefix}marin
⋆│➻ ${prefix}oppai
⋆│➻ ${prefix}maid
⋆│➻ ${prefix}fox
⋆│➻ ${prefix}mori
⋆│➻ ${prefix}uniform
⋆│➻ ${prefix}selfie
⋆│➻ ${prefix}ecchi
⋆│➻ ${prefix}wallpaperanime
⋆│➻ ${prefix}gif-cuddle
⋆│➻ ${prefix}gif-hug
⋆│➻ ${prefix}gif-smug
⋆│➻ ${prefix}gif-kiss
⋆│➻ ${prefix}gif-slap
⋆│➻ ${prefix}gif-dance
⋆│➻ ${prefix}gif-cry
⋆│➻ ${prefix}gif-kick
⋆│➻ ${prefix}gif-mon
⋆│➻ ${prefix}gif-poke
⋆│➻ ${prefix}gif-tickle
⋆╰─❏
⋆ ⎙ imagem/gif - hentai
⋆╭─❏
⋆│➻ ${prefix}hentai
⋆│➻ ${prefix}h-waifu
⋆│➻ ${prefix}h-neko
⋆│➻ ${prefix}kitsune
⋆│➻ ${prefix}h-oppai
⋆│➻ ${prefix}tentaculos
⋆│➻ ${prefix}tigh
⋆│➻ ${prefix}anal
⋆│➻ ${prefix}boobs
⋆│➻ ${prefix}gif-boobs
⋆│➻ ${prefix}gif-blowjob
⋆│➻ ${prefix}gif-anal
⋆╰─❏
⋆ ⎙ ativadores
⋆╭─❏
⋆│➻ ${prefix}antiviewonce [1:0]
⋆│➻ ${prefix}welcome [1:0]
⋆│➻ ${prefix}antilinkhard [1:0]
⋆│➻ ${prefix}antifake [1:0]
⋆│➻ ${prefix}antilink [1:0]
⋆│➻ ${prefix}antitexto [1:0]
⋆│➻ ${prefix}anticontato [1:0]
⋆│➻ ${prefix}antiloc [1:0]
⋆│➻ ${prefix}x9 [1:0]
⋆│➻ ${prefix}anticatalogo [1:0]
⋆│➻ ${prefix}nsfw [1:0]
⋆│➻ ${prefix}leveis [1:0]
⋆│➻ ${prefix}welxometexto [1:0]
⋆╰─❏
⋆ ⎙ proprietário
⋆╭─❏
⋆│➻ ${prefix}banghost [numeto]
⋆│➻ ${prefix}bcmd [comando]
⋆│➻ ${prefix}afk [motivo]
⋆│➻ ${prefix}atividade [-all:mensagem]
⋆│➻ ${prefix}ghost [-all:mensagem]
⋆│➻ ${prefix}ping
⋆│➻ ${prefix}dcmd [comando]
⋆│➻ ${prefix}addanagrama [palavra]
⋆╰─❏
⋆ ⎙ administrador
⋆╭─❏
⋆│➻ ${prefix}anagrama [init:esp]
⋆│➻ ${prefix}tictac [dificuldade]
⋆│➻ ${prefix}ttt [@]
⋆│➻ ${prefix}cassino 
⋆╰─❏```
┌━══
└━══
╔════⇲ 
║┎╼╾╼╾╼╾╼╾╼╾╼╾╼┓
││
││
║┖╼╾╼╾╼╾╼╾╼╾╼╾╼┛
╚
├──
❏
┣
┏
┗
↳
➠
➻
) return reply(mess.only.ownerB)
@@@
'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋
@@@
'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋
@@@
'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋
@@@
'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋
@@@
'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋
'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋'͊͊͊͊͋͋͋͋͋
*/
//}