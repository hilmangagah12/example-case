const fs = require('fs')

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id',
}

// Apikey
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'QzTp4BRkHktP2ay',
}

global.namabot = "Bot Store"
global.namaowner = "Zeeoneofc"
global.packname = namabot
global.author = namaowner
global.myweb = "https://s.id/zeeoneofc"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['62887435047326']
global.pairingNumber = "" //pairing number to install bot 
global.sessionName = 'session'
global.background = "https://telegra.ph/file/40342e0085d521cb8b907.jpg" //maks size 50kb agar welcome nya gk lemot
global.prefa = ['-_-']
global.grup_only = false //bot hanya bisa di gunakan dalam grup jika true
global.mess = {
    done: 'Done ✅',
    wait: '_⌛ Sedang di proses_',
    admin: '_Fitur Khusus Admin Group_',
    botNotAdmin: '_Jadikan Bot Sebagai Admin Terlebih Dahulu_',
    owner: '_Fitur Khusus Owner Bot_',
    group: '_Fitur Khusus Dalam Group_',
}
global.butwel =  [{
   buttonId: '.menu',
   buttonText: {
      displayText: '⚡ Menu'
   },
   type: 1
}, {
   buttonId: '.owner',
   buttonText: {
      displayText: 'Owner 👤'
   },
   type: 1
}]
global.help = {
menu(pushname, salam, mundur, upload, download, totalGb, usedGb, freeGb, ownerName, botName, jam, tanggal, runtime, prefix){
  return `${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}

*HITUNG MUNDUR IDUL FITRI 🌜*
 ${mundur}

╭✄┈┈┈⟬ *STATISTIC* ⟭
┆❐ Upload : ${upload}
┆❐ Downloads : ${download}
┆❐ Total : ${totalGb} GB
┆❐ Used : ${usedGb} GB
┆❐ Free : ${freeGb} GB
╰──────────◇
╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${ownerName}
┆❐ Bot Name : ${botName}
┆❐ Time : ${jam}
┆❐ Date : ${tanggal}
┆❐ Runtime : ${runtime}
╰──────────◇

╭✄┈┈┈⟬ *ANIME* ⟭
┆❐ ${prefix}akame
┆❐ ${prefix}anna
┆❐ ${prefix}asuna-yuki
┆❐ ${prefix}ayuzawa
┆❐ ${prefix}chitoge
┆❐ ${prefix}emilia
┆❐ ${prefix}erza
┆❐ ${prefix}hinata
┆❐ ${prefix}inori
┆❐ ${prefix}kaga-kouko
┆❐ ${prefix}kaori-miyazono
┆❐ ${prefix}kotori-minami
┆❐ ${prefix}killua
┆❐ ${prefix}mikasa
┆❐ ${prefix}mio-akiyama
┆❐ ${prefix}mizore-sirayuki
┆❐ ${prefix}nakiri-alice
┆❐ ${prefix}naruto
┆❐ ${prefix}riyas-gremori
┆❐ ${prefix}sakura
┆❐ ${prefix}sento-isuzu
┆❐ ${prefix}shana
┆❐ ${prefix}shiina
┆❐ ${prefix}shinka
┆❐ ${prefix}winry
┆❐ ${prefix}yukino
┆❐ ${prefix}yuzuki
┆❐ ${prefix}mikosiba
┆❐ ${prefix}luffy
┆❐ ${prefix}zoro
┆❐ ${prefix}ussop
┆❐ ${prefix}sanji
┆❐ ${prefix}minato
┆❐ ${prefix}boruto
┆❐ ${prefix}sarada
┆❐ ${prefix}mitsuki
┆❐ ${prefix}orochimaru
┆❐ ${prefix}tsunade
┆❐ ${prefix}kakashi
┆❐ ${prefix}rimuru
┆❐ ${prefix}sagiri
┆❐ ${prefix}natsu
┆❐ ${prefix}tanjirou
┆❐ ${prefix}loli
╰──────────◇

╭✄┈┈┈⟬ *ASUPAN* ⟭
┆❐ ${prefix}chika
┆❐ ${prefix}rikagusriani
┆❐ ${prefix}bocil
┆❐ ${prefix}geayubi
┆❐ ${prefix}santuy
┆❐ ${prefix}ukhty
┆❐ ${prefix}asupan
┆❐ ${prefix}delvira
┆❐ ${prefix}ayu
┆❐ ${prefix}bunga
┆❐ ${prefix}aura
┆❐ ${prefix}nisa
┆❐ ${prefix}ziva
┆❐ ${prefix}yana
┆❐ ${prefix}viona
┆❐ ${prefix}syania
┆❐ ${prefix}riri
┆❐ ${prefix}syifa
┆❐ ${prefix}mama-gina
┆❐ ${prefix}alcakenya
┆❐ ${prefix}mangayutri
╰──────────◇

╭✄┈┈┈⟬ *CECAN* ⟭
┆❐ ${prefix}china
┆❐ ${prefix}indonesia
┆❐ ${prefix}malaysia
┆❐ ${prefix}thailand
┆❐ ${prefix}korea
┆❐ ${prefix}japan
┆❐ ${prefix}vietnam
┆❐ ${prefix}jenni
┆❐ ${prefix}jiiso
┆❐ ${prefix}lisa
┆❐ ${prefix}rose
╰──────────◇

╭✄┈┈┈⟬ *COGAN* ⟭
┆❐ ${prefix}wuyifan
┆❐ ${prefix}suga
┆❐ ${prefix}parkchanyeol
┆❐ ${prefix}ohsehun
┆❐ ${prefix}luhan
┆❐ ${prefix}kimtaehyung
┆❐ ${prefix}kimseok
┆❐ ${prefix}kimnanjoon
┆❐ ${prefix}kimminseok
┆❐ ${prefix}kimjunmyeon
┆❐ ${prefix}kimjong
┆❐ ${prefix}kimjondae
┆❐ ${prefix}jungkook
┆❐ ${prefix}jimin
┆❐ ${prefix}jhope
┆❐ ${prefix}huangzitao
┆❐ ${prefix}dohkyungsoo
┆❐ ${prefix}baekhyung
╰──────────◇

╭✄┈┈┈⟬ *DOWNLOADER* ⟭
┆❐ ${prefix}ytmp4
┆❐ ${prefix}ytmp3
┆❐ ${prefix}play
┆❐ ${prefix}ytsearch
┆❐ ${prefix}igdl
┆❐ ${prefix}igphoto
┆❐ ${prefix}igvideo
┆❐ ${prefix}igreels
┆❐ ${prefix}pinterest
┆❐ ${prefix}mediafire
┆❐ ${prefix}tiktok
┆❐ ${prefix}tiktokaudio
┆❐ ${prefix}tiktokvn
╰──────────◇

╭✄┈┈┈⟬ *SEMOJI* ⟭
┆❐ ${prefix}apple
┆❐ ${prefix}aubykddi
┆❐ ${prefix}docomo
┆❐ ${prefix}softbank
┆❐ ${prefix}mozilla
┆❐ ${prefix}htc
┆❐ ${prefix}lg
┆❐ ${prefix}messenger
┆❐ ${prefix}emojidex
┆❐ ${prefix}openmoji
┆❐ ${prefix}joypixels
┆❐ ${prefix}facebook2
┆❐ ${prefix}twitter2
┆❐ ${prefix}whatsapp
┆❐ ${prefix}microsoft
┆❐ ${prefix}samsung
┆❐ ${prefix}google
╰──────────◇

╭✄┈┈┈⟬ *EPHOTO 360* ⟭
┆❐ ${prefix}1917text
┆❐ ${prefix}angelwing
┆❐ ${prefix}announofwin
┆❐ ${prefix}birthdaycake
┆❐ ${prefix}capercut
┆❐ ${prefix}cardhalloween
┆❐ ${prefix}christmascard
┆❐ ${prefix}christmasseason
┆❐ ${prefix}covergamepubg
┆❐ ${prefix}covergraffiti
┆❐ ${prefix}dragonfire
┆❐ ${prefix}embroider
┆❐ ${prefix}fabrictext
┆❐ ${prefix}facebookgold
┆❐ ${prefix}facebooksilver
┆❐ ${prefix}funnyanimations
┆❐ ${prefix}funnyhalloween
┆❐ ${prefix}galaxybat
┆❐ ${prefix}galaxywallpaper
┆❐ ${prefix}generalexam
┆❐ ${prefix}glowingtext
┆❐ ${prefix}graffiti3d
┆❐ ${prefix}graffititext
┆❐ ${prefix}graffititext2
┆❐ ${prefix}graffititext3
┆❐ ${prefix}greetingcardvideo
┆❐ ${prefix}halloweenbats
┆❐ ${prefix}heartcup
┆❐ ${prefix}heartflashlight
┆❐ ${prefix}horrorletter
┆❐ ${prefix}icetext
┆❐ ${prefix}instagramgold
┆❐ ${prefix}instagramsilver
┆❐ ${prefix}lightningpubg
┆❐ ${prefix}lovecard
┆❐ ${prefix}lovelycute
┆❐ ${prefix}masteryavatar
┆❐ ${prefix}merrycard
┆❐ ${prefix}messagecoffee
┆❐ ${prefix}metalstar
┆❐ ${prefix}milkcake
┆❐ ${prefix}modengold3
┆❐ ${prefix}moderngold
┆❐ ${prefix}moderngold2
┆❐ ${prefix}moderngoldsilver
┆❐ ${prefix}nameonheart
┆❐ ${prefix}noeltext
┆❐ ${prefix}projectyasuo
┆❐ ${prefix}pubgbirthday
┆❐ ${prefix}pubgglicthvideo
┆❐ ${prefix}pubgmascotlogo
┆❐ ${prefix}puppycute
┆❐ ${prefix}realembroidery
┆❐ ${prefix}retrotext
┆❐ ${prefix}rosebirthday
┆❐ ${prefix}snowontext
┆❐ ${prefix}starsnight
┆❐ ${prefix}summerbeach
┆❐ ${prefix}sunglightshadow
┆❐ ${prefix}textcakes
┆❐ ${prefix}texthalloween
┆❐ ${prefix}textonglass
┆❐ ${prefix}textsky
┆❐ ${prefix}thundertext
┆❐ ${prefix}twittergold
┆❐ ${prefix}twittersilver
┆❐ ${prefix}viettel
┆❐ ${prefix}vintagetelevision
┆❐ ${prefix}watercolor2
┆❐ ${prefix}womansday
┆❐ ${prefix}writeblood
┆❐ ${prefix}writegalaxy
┆❐ ${prefix}writehorror
┆❐ ${prefix}youtubegold
┆❐ ${prefix}youtubesilver
┆❐ ${prefix}zombie3d
┆❐ ${prefix}shirtclub
┆❐ ${prefix}steellettering
┆❐ ${prefix}letterstext
┆❐ ${prefix}barcashirt
┆❐ ${prefix}premiercup
┆❐ ${prefix}stylepoligon
┆❐ ${prefix}lifebuoys
┆❐ ${prefix}juventusshirt
╰──────────◇

╭✄┈┈┈⟬ *LOGO MAKER* ⟭
┆❐ ${prefix}anonymous2
┆❐ ${prefix}astronotspace
┆❐ ${prefix}avatar3q360
┆❐ ${prefix}avatarff
┆❐ ${prefix}avatarleagueofking
┆❐ ${prefix}avatarlolbyname
┆❐ ${prefix}avataroverwatch
┆❐ ${prefix}bannerofaov
┆❐ ${prefix}bannerofaov2
┆❐ ${prefix}bannerofapex
┆❐ ${prefix}banneroffreefire
┆❐ ${prefix}banneroflol
┆❐ ${prefix}bannerofoverwatch
┆❐ ${prefix}bannerofpubg
┆❐ ${prefix}bannerytcsgo
┆❐ ${prefix}beautifulgalaxylol
┆❐ ${prefix}beautifulshimmering
┆❐ ${prefix}blueneon
┆❐ ${prefix}circlemarcotteam
┆❐ ${prefix}colorfulpubg
┆❐ ${prefix}companylogo
┆❐ ${prefix}companylogo2
┆❐ ${prefix}coverbannerlol
┆❐ ${prefix}coverdota2
┆❐ ${prefix}coverfblol
┆❐ ${prefix}coverfreefirefb
┆❐ ${prefix}coverleagueofking
┆❐ ${prefix}coverloknew
┆❐ ${prefix}coverofwarface
┆❐ ${prefix}coveronepiecefb
┆❐ ${prefix}crossfirecover
┆❐ ${prefix}crossfirestyle
┆❐ ${prefix}csgocover
┆❐ ${prefix}cutegirlgamer
┆❐ ${prefix}cyberhunterfb
┆❐ ${prefix}dragonballfb
┆❐ ${prefix}effect3donbeach
┆❐ ${prefix}elegantrotation
┆❐ ${prefix}fbgamepubgcover
┆❐ ${prefix}footballteam
┆❐ ${prefix}gaminglogo4fvs
┆❐ ${prefix}gamingmascot
┆❐ ${prefix}gradientlogo
┆❐ ${prefix}gunlogogaming
┆❐ ${prefix}introvideomaker
┆❐ ${prefix}letterlogos 
┆❐ ${prefix}logoaccording 
┆❐ ${prefix}logogamingassasin 
┆❐ ${prefix}lolcoverbyname 
┆❐ ${prefix}lolpentakill 
┆❐ ${prefix}lolwallpaper 
┆❐ ${prefix}maketeamlogo 
┆❐ ${prefix}mascotstyle 
┆❐ ${prefix}metalmascot 
┆❐ ${prefix}newlolavatar 
┆❐ ${prefix}overwatchcover 
┆❐ ${prefix}overwatchwallpaper 
┆❐ ${prefix}pencilsketch 
┆❐ ${prefix}pubgcutelogo 
┆❐ ${prefix}pubglogomaker 
┆❐ ${prefix}rovwallpaper 
┆❐ ${prefix}rovwallpaperhd 
┆❐ ${prefix}teamlogo 
┆❐ ${prefix}wallpaperaov 
┆❐ ${prefix}wallpaperml 
╰──────────◇

╭✄┈┈┈⟬ *GAMES* ⟭
┆❐ ${prefix}tebakgambar
┆❐ ${prefix}tebakkata
┆❐ ${prefix}tebakbendera
┆❐ ${prefix}tebakkalimat
┆❐ ${prefix}tebaksiapa
┆❐ ${prefix}tebakkabupaten
┆❐ ${prefix}tebakkota
┆❐ ${prefix}tebakkimia
┆❐ ${prefix}tebaklirik
┆❐ ${prefix}tebaktebakan
┆❐ ${prefix}tekateki
┆❐ ${prefix}susunkata
┆❐ ${prefix}caklontong
╰──────────◇

╭✄┈┈┈⟬ *IMAGE EFFECT* ⟭
┆❐ ${prefix}triggered
┆❐ ${prefix}brazzers
┆❐ ${prefix}burn
┆❐ ${prefix}ddungeon
┆❐ ${prefix}deepfry
┆❐ ${prefix}dictator
┆❐ ${prefix}fire
┆❐ ${prefix}gay
┆❐ ${prefix}jail
┆❐ ${prefix}lookwhatkarenhave
┆❐ ${prefix}missionpassed
┆❐ ${prefix}ps4
┆❐ ${prefix}redple
┆❐ ${prefix}sharpen
┆❐ ${prefix}thanos
┆❐ ${prefix}sniper
┆❐ ${prefix}instagram2
┆❐ ${prefix}scary
┆❐ ${prefix}moustache
┆❐ ${prefix}wasted
┆❐ ${prefix}utatoo
┆❐ ${prefix}rip
┆❐ ${prefix}wanted
┆❐ ${prefix}beautiful
┆❐ ${prefix}blur
┆❐ ${prefix}invert
┆❐ ${prefix}greyscale
┆❐ ${prefix}contrast
┆❐ ${prefix}sepia
┆❐ ${prefix}distort
┆❐ ${prefix}glitch3
┆❐ ${prefix}approved
┆❐ ${prefix}rejected
┆❐ ${prefix}3000years
┆❐ ${prefix}circle
╰──────────◇

╭✄┈┈┈⟬ *ISLAMIC* ⟭
┆❐ ${prefix}asmaulhusna
┆❐ ${prefix}kisahnabi
┆❐ ${prefix}jadwalshalat
┆❐ ${prefix}randomquran
┆❐ ${prefix}randomquran2
┆❐ ${prefix}dictator
┆❐ ${prefix}listsurah
┆❐ ${prefix}tafsirsurah
┆❐ ${prefix}alquranaudio
╰──────────◇

╭✄┈┈┈⟬ *NSFW & SFW* ⟭
┆❐ ${prefix}baka
┆❐ ${prefix}smug
┆❐ ${prefix}neko-sfw
┆❐ ${prefix}hentai-gif
┆❐ ${prefix}spank
┆❐ ${prefix}blowjob
┆❐ ${prefix}cumarts
┆❐ ${prefix}eroyuri
┆❐ ${prefix}eroneko
┆❐ ${prefix}erokemonomimi
┆❐ ${prefix}erokitsune
┆❐ ${prefix}ero
┆❐ ${prefix}feet
┆❐ ${prefix}erofeet
┆❐ ${prefix}feetgif
┆❐ ${prefix}femdom
┆❐ ${prefix}futanari
┆❐ ${prefix}hentai
┆❐ ${prefix}holoero
┆❐ ${prefix}holo
┆❐ ${prefix}keta
┆❐ ${prefix}kitsune
┆❐ ${prefix}kemonomimi
┆❐ ${prefix}pussyart
┆❐ ${prefix}pussywankgif
┆❐ ${prefix}girl-solo
┆❐ ${prefix}girl-solo-gif
┆❐ ${prefix}tits
┆❐ ${prefix}trap
┆❐ ${prefix}yuri
┆❐ ${prefix}avatar2
┆❐ ${prefix}anal
┆❐ ${prefix}bj
┆❐ ${prefix}boobs
┆❐ ${prefix}classic
┆❐ ${prefix}cumsluts
┆❐ ${prefix}kuni
┆❐ ${prefix}lesbian
┆❐ ${prefix}neko
┆❐ ${prefix}neko-gif
┆❐ ${prefix}ahegao
┆❐ ${prefix}bdsm
┆❐ ${prefix}cuckold
┆❐ ${prefix}cum
┆❐ ${prefix}foot
┆❐ ${prefix}gangbang
┆❐ ${prefix}glasses
┆❐ ${prefix}jahy
┆❐ ${prefix}masturbation
┆❐ ${prefix}nsfw-neko
┆❐ ${prefix}orgy
┆❐ ${prefix}panties
┆❐ ${prefix}tentacles
┆❐ ${prefix}thighs
┆❐ ${prefix}zettai
┆❐ ${prefix}cuddle
┆❐ ${prefix}foxgirl
┆❐ ${prefix}kemonomimi2
┆❐ ${prefix}woof
┆❐ ${prefix}holo2
┆❐ ${prefix}hug
┆❐ ${prefix}kiss
┆❐ ${prefix}lizard
┆❐ ${prefix}meowi
┆❐ ${prefix}neko2
┆❐ ${prefix}pat
┆❐ ${prefix}poke
┆❐ ${prefix}slap
┆❐ ${prefix}tickle
╰──────────◇

╭✄┈┈┈⟬ *PHOTOOXY* ⟭
┆❐ ${prefix}typography-flower
┆❐ ${prefix}under-flower
┆❐ ${prefix}bevel-text
┆❐ ${prefix}silk-text
┆❐ ${prefix}sweet-andy
┆❐ ${prefix}smoke-typography
┆❐ ${prefix}carvedwood
┆❐ ${prefix}scary-cemetery
┆❐ ${prefix}royallook
┆❐ ${prefix}coffeecup2
┆❐ ${prefix}illuminated
┆❐ ${prefix}harry-potter2
┆❐ ${prefix}birthday-cake
┆❐ ${prefix}embroidery
┆❐ ${prefix}flaming
┆❐ ${prefix}furtext
┆❐ ${prefix}nightsky
┆❐ ${prefix}glow-rainbow
┆❐ ${prefix}gradient-avatar
┆❐ ${prefix}white-cube
┆❐ ${prefix}graffiti-cover
┆❐ ${prefix}rainbow-shine
┆❐ ${prefix}smoky-neon
┆❐ ${prefix}quotes-underfall
┆❐ ${prefix}vector-nature
┆❐ ${prefix}yellow-rose
┆❐ ${prefix}love-text
┆❐ ${prefix}underwater-ocean
┆❐ ${prefix}nature-text
┆❐ ${prefix}wolf-metal
┆❐ ${prefix}summer-text
┆❐ ${prefix}wooden-board
┆❐ ${prefix}quote-wood
┆❐ ${prefix}love-text
┆❐ ${prefix}quotes-undergrass
┆❐ ${prefix}naruto-banner
┆❐ ${prefix}love-message
┆❐ ${prefix}textoncup2
┆❐ ${prefix}burn-paper
┆❐ ${prefix}smoke
┆❐ ${prefix}romantic-messages
┆❐ ${prefix}shadow-sky
┆❐ ${prefix}text-cup
┆❐ ${prefix}coffecup
┆❐ ${prefix}battlegrounds-logo
┆❐ ${prefix}battlefield4
┆❐ ${prefix}text-8bit
╰──────────◇

╭✄┈┈┈⟬ *RANDOM STICKER* ⟭
┆❐ ${prefix}patrick
┆❐ ${prefix}popoci
┆❐ ${prefix}sponsbob
┆❐ ${prefix}kawan-sponsbob
┆❐ ${prefix}awoawo
┆❐ ${prefix}chat
┆❐ ${prefix}benedict
┆❐ ${prefix}dbfly
┆❐ ${prefix}dino-kuning
┆❐ ${prefix}doge
┆❐ ${prefix}gojosatoru
┆❐ ${prefix}hope-boy
┆❐ ${prefix}jisoo
┆❐ ${prefix}kr-robot
┆❐ ${prefix}kucing
┆❐ ${prefix}lonte
┆❐ ${prefix}manusia-lidi
┆❐ ${prefix}menjamet
┆❐ ${prefix}meow
┆❐ ${prefix}nicholas
┆❐ ${prefix}tyni
╰──────────◇

╭✄┈┈┈⟬ *CANVAS* ⟭
┆❐ ${prefix}ttp
┆❐ ${prefix}attp
┆❐ ${prefix}foliokiri
┆❐ ${prefix}foliokanan
┆❐ ${prefix}nuliskanan
┆❐ ${prefix}nuliskiri
╰──────────◇

╭✄┈┈┈⟬ *TEXT PRO* ⟭
┆❐ ${prefix}3dbox
┆❐ ${prefix}3dchrome
┆❐ ${prefix}3dglue
┆❐ ${prefix}3dstone
┆❐ ${prefix}abstra
┆❐ ${prefix}advanced
┆❐ ${prefix}bear
┆❐ ${prefix}berry
┆❐ ${prefix}biscuit
┆❐ ${prefix}black-metal
┆❐ ${prefix}blackpink
┆❐ ${prefix}blood
┆❐ ${prefix}blood2
┆❐ ${prefix}blue-balloon
┆❐ ${prefix}blue-gem
┆❐ ${prefix}blue-glass
┆❐ ${prefix}blue-glitter
┆❐ ${prefix}blue-jewelry
┆❐ ${prefix}blue-metal
┆❐ ${prefix}blue-sparkling
┆❐ ${prefix}bokeh
┆❐ ${prefix}bread
┆❐ ${prefix}broken
┆❐ ${prefix}bronze-glitter
┆❐ ${prefix}candy
┆❐ ${prefix}captain-as2
┆❐ ${prefix}carbon
┆❐ ${prefix}chocolate
┆❐ ${prefix}chrismast
┆❐ ${prefix}christmas
┆❐ ${prefix}cloudsky
┆❐ ${prefix}cyan-balloon
┆❐ ${prefix}cyan-glass
┆❐ ${prefix}cyan-jewelry
┆❐ ${prefix}cyan-sparkling
┆❐ ${prefix}dark-gold
┆❐ ${prefix}decorate
┆❐ ${prefix}decorate-purple
┆❐ ${prefix}decorative
┆❐ ${prefix}deluxe-gold
┆❐ ${prefix}demon
┆❐ ${prefix}denim
┆❐ ${prefix}discovery
┆❐ ${prefix}dropwater
┆❐ ${prefix}drug
┆❐ ${prefix}embossed
┆❐ ${prefix}engraved
┆❐ ${prefix}equalizer
┆❐ ${prefix}eroded-metal
┆❐ ${prefix}fabric
┆❐ ${prefix}fiction
┆❐ ${prefix}firework
┆❐ ${prefix}glitch
┆❐ ${prefix}gloss
┆❐ ${prefix}glossy
┆❐ ${prefix}glossy-blue
┆❐ ${prefix}glossy-carbon
┆❐ ${prefix}gold-balloon
┆❐ ${prefix}gold-glitter
┆❐ ${prefix}gold-sparkling
┆❐ ${prefix}golden
┆❐ ${prefix}gradient
┆❐ ${prefix}gradient2
┆❐ ${prefix}green-balloon
┆❐ ${prefix}green-glass
┆❐ ${prefix}green-glitter
┆❐ ${prefix}green-jewelry
┆❐ ${prefix}green-neon
┆❐ ${prefix}green-sparkling
┆❐ ${prefix}halloween
┆❐ ${prefix}halloween2
┆❐ ${prefix}holographic
┆❐ ${prefix}honey2
┆❐ ${prefix}hot-metal
┆❐ ${prefix}ice
┆❐ ${prefix}joker
┆❐ ${prefix}juice
┆❐ ${prefix}koifish
┆❐ ${prefix}luxury2
┆❐ ${prefix}magma
┆❐ ${prefix}marble
┆❐ ${prefix}marble2
┆❐ ${prefix}matrix
┆❐ ${prefix}metal-silver
┆❐ ${prefix}metaldark
┆❐ ${prefix}metallic2
┆❐ ${prefix}minion
┆❐ ${prefix}multicolor
┆❐ ${prefix}natural
┆❐ ${prefix}neon
┆❐ ${prefix}neon-devil
┆❐ ${prefix}neon-light
┆❐ ${prefix}neon2
┆❐ ${prefix}neonc
┆❐ ${prefix}neonlight
┆❐ ${prefix}neonligth2
┆❐ ${prefix}newyear
┆❐ ${prefix}newyear2
┆❐ ${prefix}orange-glass
┆❐ ${prefix}orange-jewelry
┆❐ ${prefix}oscar
┆❐ ${prefix}papercut
┆❐ ${prefix}peridot
┆❐ ${prefix}pink-balloon
┆❐ ${prefix}pink-glitter
┆❐ ${prefix}pink-sparkling
┆❐ ${prefix}purple
┆❐ ${prefix}purple-balloon
┆❐ ${prefix}purple-gem
┆❐ ${prefix}purple-glass
┆❐ ${prefix}purple-glitter
┆❐ ${prefix}purple-jewelry
┆❐ ${prefix}purple-shiny-glass
┆❐ ${prefix}purple-sparkling
┆❐ ${prefix}rainbow2
┆❐ ${prefix}red-balloon
┆❐ ${prefix}red-glass
┆❐ ${prefix}red-jewelry
┆❐ ${prefix}red-sparkling
┆❐ ${prefix}road-warning
┆❐ ${prefix}robot
┆❐ ${prefix}rock
┆❐ ${prefix}rusty
┆❐ ${prefix}scifi
┆❐ ${prefix}shiny
┆❐ ${prefix}silver-glitter
┆❐ ${prefix}silver-jewelry
┆❐ ${prefix}sircuit
┆❐ ${prefix}skeleton
┆❐ ${prefix}sketch
┆❐ ${prefix}snow
┆❐ ${prefix}steel
┆❐ ${prefix}strawberry
┆❐ ${prefix}summer
┆❐ ${prefix}summery
┆❐ ${prefix}thunder
┆❐ ${prefix}thunder2
┆❐ ${prefix}toxic
┆❐ ${prefix}transformer
┆❐ ${prefix}underwater
┆❐ ${prefix}wall
┆❐ ${prefix}water-pipe
┆❐ ${prefix}watercolor
┆❐ ${prefix}wicker
┆❐ ${prefix}wonderful-graffiti
┆❐ ${prefix}wood
┆❐ ${prefix}writing
┆❐ ${prefix}xmas
┆❐ ${prefix}yellow-glass
┆❐ ${prefix}yellow-jewelry
┆❐ ${prefix}horror
┆❐ ${prefix}game8bit
┆❐ ${prefix}layered
┆❐ ${prefix}glitch2
┆❐ ${prefix}cool-graffiti
┆❐ ${prefix}cool-wall-graffiti
┆❐ ${prefix}realistic
┆❐ ${prefix}space3d
┆❐ ${prefix}glitch-tiktok
┆❐ ${prefix}stone
┆❐ ${prefix}marvel
┆❐ ${prefix}marvel2
┆❐ ${prefix}metal-rose-gold
┆❐ ${prefix}pornhub
┆❐ ${prefix}avengers
┆❐ ${prefix}metal-rainbow
┆❐ ${prefix}metal-gold
┆❐ ${prefix}metal-galaxy
┆❐ ${prefix}lion
┆❐ ${prefix}wolf-black-white
┆❐ ${prefix}wolf-galaxy
┆❐ ${prefix}ninja
┆❐ ${prefix}3dsteel
┆❐ ${prefix}horror2
┆❐ ${prefix}lava
┆❐ ${prefix}bagel
╰──────────◇

╭✄┈┈┈⟬ *GROUP* ⟭
┆❐ ${prefix}setwelcome
┆❐ ${prefix}changewelcome
┆❐ ${prefix}delsetwelcome
┆❐ ${prefix}setleft
┆❐ ${prefix}changeleft
┆❐ ${prefix}delsetleft
┆❐ ${prefix}antiwame
┆❐ ${prefix}antiwame2
┆❐ ${prefix}open
┆❐ ${prefix}close
┆❐ ${prefix}antilink
┆❐ ${prefix}antilink2
┆❐ ${prefix}hidetag
╰──────────◇
`
}
}
