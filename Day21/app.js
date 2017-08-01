angular
.module("mainApp",[])
.controller("firstCtrl",firstCtrl)


function firstCtrl(){

    var first = this;
    first.people = [{
  "id": 1,
  "first_name": "Brew",
  "last_name": "Okie",
  "email": "bokie0@is.gd",
  "gender": "Male",
  "ip_address": "167.0.178.41",
  "amount": 88,
  "date": "6/5/2017"
}, {
  "id": 2,
  "first_name": "Kain",
  "last_name": "Hearon",
  "email": "khearon1@go.com",
  "gender": "Male",
  "ip_address": "83.95.185.110",
  "amount": 19,
  "date": "11/25/2016"
}, {
  "id": 3,
  "first_name": "Zabrina",
  "last_name": "Roslen",
  "email": "zroslen2@vinaora.com",
  "gender": "Female",
  "ip_address": "234.201.95.116",
  "amount": 96,
  "date": "5/11/2017"
}, {
  "id": 4,
  "first_name": "Steven",
  "last_name": "Glenn",
  "email": "sglenn3@telegraph.co.uk",
  "gender": "Male",
  "ip_address": "49.187.236.93",
  "amount": 45,
  "date": "12/29/2016"
}, {
  "id": 5,
  "first_name": "Innis",
  "last_name": "Shurrocks",
  "email": "ishurrocks4@cnet.com",
  "gender": "Male",
  "ip_address": "251.110.249.194",
  "amount": 20,
  "date": "4/14/2017"
}, {
  "id": 6,
  "first_name": "Keane",
  "last_name": "Greenless",
  "email": "kgreenless5@cloudflare.com",
  "gender": "Male",
  "ip_address": "184.20.164.231",
  "amount": 82,
  "date": "11/4/2016"
}, {
  "id": 7,
  "first_name": "Leann",
  "last_name": "Masham",
  "email": "lmasham6@theglobeandmail.com",
  "gender": "Female",
  "ip_address": "6.7.205.43",
  "amount": 19,
  "date": "4/8/2017"
}, {
  "id": 8,
  "first_name": "Vincenty",
  "last_name": "Curnow",
  "email": "vcurnow7@youtube.com",
  "gender": "Male",
  "ip_address": "127.22.34.98",
  "amount": 12,
  "date": "12/11/2016"
}, {
  "id": 9,
  "first_name": "Vicky",
  "last_name": "Pfeiffer",
  "email": "vpfeiffer8@stanford.edu",
  "gender": "Female",
  "ip_address": "198.192.142.176",
  "amount": 31,
  "date": "1/26/2017"
}, {
  "id": 10,
  "first_name": "Packston",
  "last_name": "Corringham",
  "email": "pcorringham9@discuz.net",
  "gender": "Male",
  "ip_address": "50.56.105.19",
  "amount": 88,
  "date": "5/11/2017"
}, {
  "id": 11,
  "first_name": "Englebert",
  "last_name": "Northcott",
  "email": "enorthcotta@tuttocitta.it",
  "gender": "Male",
  "ip_address": "244.119.238.19",
  "amount": 82,
  "date": "9/3/2016"
}, {
  "id": 12,
  "first_name": "Dud",
  "last_name": "Edgeon",
  "email": "dedgeonb@google.nl",
  "gender": "Male",
  "ip_address": "24.98.159.12",
  "amount": 74,
  "date": "4/3/2017"
}, {
  "id": 13,
  "first_name": "Stanford",
  "last_name": "Dutchburn",
  "email": "sdutchburnc@dmoz.org",
  "gender": "Male",
  "ip_address": "182.200.93.77",
  "amount": 41,
  "date": "10/30/2016"
}, {
  "id": 14,
  "first_name": "Goldi",
  "last_name": "Cholerton",
  "email": "gcholertond@sciencedaily.com",
  "gender": "Female",
  "ip_address": "213.92.198.128",
  "amount": 78,
  "date": "5/18/2017"
}, {
  "id": 15,
  "first_name": "Leonidas",
  "last_name": "Yerrell",
  "email": "lyerrelle@nifty.com",
  "gender": "Male",
  "ip_address": "220.114.87.23",
  "amount": 19,
  "date": "7/6/2017"
}, {
  "id": 16,
  "first_name": "Lulu",
  "last_name": "Gonsalo",
  "email": "lgonsalof@virginia.edu",
  "gender": "Female",
  "ip_address": "61.168.55.202",
  "amount": 6,
  "date": "8/7/2016"
}, {
  "id": 17,
  "first_name": "Chuck",
  "last_name": "Krienke",
  "email": "ckrienkeg@hubpages.com",
  "gender": "Male",
  "ip_address": "38.138.70.183",
  "amount": 59,
  "date": "9/28/2016"
}, {
  "id": 18,
  "first_name": "Ophelia",
  "last_name": "Blackborow",
  "email": "oblackborowh@newyorker.com",
  "gender": "Female",
  "ip_address": "227.36.95.43",
  "amount": 37,
  "date": "6/9/2017"
}, {
  "id": 19,
  "first_name": "Van",
  "last_name": "Ferryman",
  "email": "vferrymani@home.pl",
  "gender": "Male",
  "ip_address": "209.149.216.55",
  "amount": 7,
  "date": "5/14/2017"
}, {
  "id": 20,
  "first_name": "Iorgos",
  "last_name": "Sante",
  "email": "isantej@dagondesign.com",
  "gender": "Male",
  "ip_address": "39.228.107.182",
  "amount": 11,
  "date": "5/22/2017"
}, {
  "id": 21,
  "first_name": "Bidget",
  "last_name": "Eberle",
  "email": "beberlek@paginegialle.it",
  "gender": "Female",
  "ip_address": "185.119.152.131",
  "amount": 1,
  "date": "10/11/2016"
}, {
  "id": 22,
  "first_name": "Georgeanne",
  "last_name": "Dikelin",
  "email": "gdikelinl@businessinsider.com",
  "gender": "Female",
  "ip_address": "215.252.205.148",
  "amount": 64,
  "date": "12/6/2016"
}, {
  "id": 23,
  "first_name": "Ethelin",
  "last_name": "McFee",
  "email": "emcfeem@quantcast.com",
  "gender": "Female",
  "ip_address": "125.121.181.134",
  "amount": 65,
  "date": "7/12/2017"
}, {
  "id": 24,
  "first_name": "Sanderson",
  "last_name": "Annear",
  "email": "sannearn@wsj.com",
  "gender": "Male",
  "ip_address": "9.177.233.254",
  "amount": 84,
  "date": "1/12/2017"
}, {
  "id": 25,
  "first_name": "Sophia",
  "last_name": "Sparkwell",
  "email": "ssparkwello@bloomberg.com",
  "gender": "Female",
  "ip_address": "27.42.80.201",
  "amount": 62,
  "date": "10/16/2016"
}, {
  "id": 26,
  "first_name": "Ninnetta",
  "last_name": "Rikkard",
  "email": "nrikkardp@latimes.com",
  "gender": "Female",
  "ip_address": "195.209.202.168",
  "amount": 41,
  "date": "11/13/2016"
}, {
  "id": 27,
  "first_name": "Sheri",
  "last_name": "Godspeede",
  "email": "sgodspeedeq@bandcamp.com",
  "gender": "Female",
  "ip_address": "90.171.248.142",
  "amount": 42,
  "date": "2/8/2017"
}, {
  "id": 28,
  "first_name": "Gwenore",
  "last_name": "Heaford",
  "email": "gheafordr@usgs.gov",
  "gender": "Female",
  "ip_address": "76.3.119.110",
  "amount": 74,
  "date": "4/18/2017"
}, {
  "id": 29,
  "first_name": "Reinhard",
  "last_name": "Mea",
  "email": "rmeas@wsj.com",
  "gender": "Male",
  "ip_address": "205.241.158.26",
  "amount": 24,
  "date": "4/16/2017"
}, {
  "id": 30,
  "first_name": "Jeffy",
  "last_name": "Chippin",
  "email": "jchippint@homestead.com",
  "gender": "Male",
  "ip_address": "156.206.91.77",
  "amount": 52,
  "date": "11/24/2016"
}, {
  "id": 31,
  "first_name": "Vanni",
  "last_name": "Kivelhan",
  "email": "vkivelhanu@miitbeian.gov.cn",
  "gender": "Female",
  "ip_address": "79.58.189.118",
  "amount": 91,
  "date": "5/3/2017"
}, {
  "id": 32,
  "first_name": "Sioux",
  "last_name": "Gurling",
  "email": "sgurlingv@hc360.com",
  "gender": "Female",
  "ip_address": "10.66.252.237",
  "amount": 34,
  "date": "11/23/2016"
}, {
  "id": 33,
  "first_name": "Patrice",
  "last_name": "Fissenden",
  "email": "pfissendenw@omniture.com",
  "gender": "Female",
  "ip_address": "159.8.6.38",
  "amount": 78,
  "date": "7/2/2017"
}, {
  "id": 34,
  "first_name": "Chevy",
  "last_name": "Anwyl",
  "email": "canwylx@sciencedaily.com",
  "gender": "Male",
  "ip_address": "176.181.237.117",
  "amount": 94,
  "date": "3/17/2017"
}, {
  "id": 35,
  "first_name": "Laurette",
  "last_name": "Cudbird",
  "email": "lcudbirdy@deliciousdays.com",
  "gender": "Female",
  "ip_address": "221.105.223.157",
  "amount": 21,
  "date": "6/30/2017"
}, {
  "id": 36,
  "first_name": "Elwin",
  "last_name": "Griffith",
  "email": "egriffithz@linkedin.com",
  "gender": "Male",
  "ip_address": "91.214.205.161",
  "amount": 97,
  "date": "4/19/2017"
}, {
  "id": 37,
  "first_name": "Dolph",
  "last_name": "Brockest",
  "email": "dbrockest10@adobe.com",
  "gender": "Male",
  "ip_address": "186.24.41.84",
  "amount": 75,
  "date": "5/25/2017"
}, {
  "id": 38,
  "first_name": "Nissa",
  "last_name": "Crimp",
  "email": "ncrimp11@mozilla.org",
  "gender": "Female",
  "ip_address": "229.90.27.54",
  "amount": 28,
  "date": "8/29/2016"
}, {
  "id": 39,
  "first_name": "Elene",
  "last_name": "Antrag",
  "email": "eantrag12@hexun.com",
  "gender": "Female",
  "ip_address": "231.58.59.98",
  "amount": 17,
  "date": "9/1/2016"
}, {
  "id": 40,
  "first_name": "Shauna",
  "last_name": "Jirusek",
  "email": "sjirusek13@photobucket.com",
  "gender": "Female",
  "ip_address": "115.229.185.242",
  "amount": 92,
  "date": "8/2/2016"
}, {
  "id": 41,
  "first_name": "Ranique",
  "last_name": "Feetham",
  "email": "rfeetham14@wikispaces.com",
  "gender": "Female",
  "ip_address": "233.245.204.7",
  "amount": 50,
  "date": "8/8/2016"
}, {
  "id": 42,
  "first_name": "Madlen",
  "last_name": "Kiddie",
  "email": "mkiddie15@posterous.com",
  "gender": "Female",
  "ip_address": "26.81.163.151",
  "amount": 63,
  "date": "2/22/2017"
}, {
  "id": 43,
  "first_name": "Goldie",
  "last_name": "Bowring",
  "email": "gbowring16@wp.com",
  "gender": "Female",
  "ip_address": "162.8.148.29",
  "amount": 34,
  "date": "9/20/2016"
}, {
  "id": 44,
  "first_name": "Jannel",
  "last_name": "Zmitrovich",
  "email": "jzmitrovich17@stumbleupon.com",
  "gender": "Female",
  "ip_address": "245.27.93.113",
  "amount": 73,
  "date": "5/5/2017"
}, {
  "id": 45,
  "first_name": "Ricardo",
  "last_name": "Beinisch",
  "email": "rbeinisch18@chron.com",
  "gender": "Male",
  "ip_address": "244.242.22.239",
  "amount": 73,
  "date": "3/4/2017"
}, {
  "id": 46,
  "first_name": "Angelle",
  "last_name": "Tredwell",
  "email": "atredwell19@goodreads.com",
  "gender": "Female",
  "ip_address": "56.191.97.244",
  "amount": 7,
  "date": "9/20/2016"
}, {
  "id": 47,
  "first_name": "Martynne",
  "last_name": "Sayse",
  "email": "msayse1a@irs.gov",
  "gender": "Female",
  "ip_address": "243.218.165.236",
  "amount": 82,
  "date": "4/12/2017"
}, {
  "id": 48,
  "first_name": "Kurt",
  "last_name": "Gullberg",
  "email": "kgullberg1b@smugmug.com",
  "gender": "Male",
  "ip_address": "243.101.79.32",
  "amount": 52,
  "date": "1/4/2017"
}, {
  "id": 49,
  "first_name": "Willetta",
  "last_name": "Zuanelli",
  "email": "wzuanelli1c@skype.com",
  "gender": "Female",
  "ip_address": "154.204.75.2",
  "amount": 69,
  "date": "9/13/2016"
}, {
  "id": 50,
  "first_name": "Ansel",
  "last_name": "Haliday",
  "email": "ahaliday1d@cargocollective.com",
  "gender": "Male",
  "ip_address": "253.163.205.181",
  "amount": 46,
  "date": "2/12/2017"
}, {
  "id": 51,
  "first_name": "Salomi",
  "last_name": "McKeowon",
  "email": "smckeowon1e@washington.edu",
  "gender": "Female",
  "ip_address": "79.190.204.229",
  "amount": 25,
  "date": "6/8/2017"
}, {
  "id": 52,
  "first_name": "Chip",
  "last_name": "Fourman",
  "email": "cfourman1f@nifty.com",
  "gender": "Male",
  "ip_address": "136.239.179.86",
  "amount": 51,
  "date": "11/14/2016"
}, {
  "id": 53,
  "first_name": "Lionel",
  "last_name": "Ianniello",
  "email": "lianniello1g@cargocollective.com",
  "gender": "Male",
  "ip_address": "203.130.124.145",
  "amount": 90,
  "date": "1/19/2017"
}, {
  "id": 54,
  "first_name": "Scarlet",
  "last_name": "Halewood",
  "email": "shalewood1h@addtoany.com",
  "gender": "Female",
  "ip_address": "139.160.151.204",
  "amount": 8,
  "date": "9/7/2016"
}, {
  "id": 55,
  "first_name": "Dale",
  "last_name": "Farbrace",
  "email": "dfarbrace1i@google.cn",
  "gender": "Female",
  "ip_address": "171.228.44.53",
  "amount": 86,
  "date": "5/28/2017"
}, {
  "id": 56,
  "first_name": "Robert",
  "last_name": "Keningley",
  "email": "rkeningley1j@elegantthemes.com",
  "gender": "Male",
  "ip_address": "113.167.124.14",
  "amount": 83,
  "date": "2/12/2017"
}, {
  "id": 57,
  "first_name": "Robin",
  "last_name": "Ewington",
  "email": "rewington1k@cmu.edu",
  "gender": "Male",
  "ip_address": "32.100.74.98",
  "amount": 91,
  "date": "3/7/2017"
}, {
  "id": 58,
  "first_name": "Ulrike",
  "last_name": "Burrus",
  "email": "uburrus1l@csmonitor.com",
  "gender": "Female",
  "ip_address": "11.9.69.159",
  "amount": 2,
  "date": "7/2/2017"
}, {
  "id": 59,
  "first_name": "Ezmeralda",
  "last_name": "Backshall",
  "email": "ebackshall1m@cornell.edu",
  "gender": "Female",
  "ip_address": "206.27.66.73",
  "amount": 30,
  "date": "5/23/2017"
}, {
  "id": 60,
  "first_name": "Raffarty",
  "last_name": "Acklands",
  "email": "racklands1n@stumbleupon.com",
  "gender": "Male",
  "ip_address": "49.90.113.71",
  "amount": 38,
  "date": "9/2/2016"
}, {
  "id": 61,
  "first_name": "Vincents",
  "last_name": "Please",
  "email": "vplease1o@pcworld.com",
  "gender": "Male",
  "ip_address": "58.42.126.139",
  "amount": 97,
  "date": "11/4/2016"
}, {
  "id": 62,
  "first_name": "Cameron",
  "last_name": "Vasyutin",
  "email": "cvasyutin1p@fda.gov",
  "gender": "Male",
  "ip_address": "37.128.207.81",
  "amount": 69,
  "date": "2/19/2017"
}, {
  "id": 63,
  "first_name": "Obie",
  "last_name": "Wallsworth",
  "email": "owallsworth1q@seattletimes.com",
  "gender": "Male",
  "ip_address": "63.166.224.158",
  "amount": 40,
  "date": "10/14/2016"
}, {
  "id": 64,
  "first_name": "Verge",
  "last_name": "Searl",
  "email": "vsearl1r@cbslocal.com",
  "gender": "Male",
  "ip_address": "14.130.187.102",
  "amount": 40,
  "date": "1/13/2017"
}, {
  "id": 65,
  "first_name": "Sean",
  "last_name": "Renne",
  "email": "srenne1s@thetimes.co.uk",
  "gender": "Female",
  "ip_address": "187.14.190.179",
  "amount": 73,
  "date": "1/23/2017"
}, {
  "id": 66,
  "first_name": "Pippo",
  "last_name": "Britton",
  "email": "pbritton1t@dyndns.org",
  "gender": "Male",
  "ip_address": "104.236.150.170",
  "amount": 11,
  "date": "7/4/2017"
}, {
  "id": 67,
  "first_name": "Torin",
  "last_name": "Clash",
  "email": "tclash1u@hubpages.com",
  "gender": "Male",
  "ip_address": "81.23.105.83",
  "amount": 38,
  "date": "9/5/2016"
}, {
  "id": 68,
  "first_name": "Grenville",
  "last_name": "Momford",
  "email": "gmomford1v@behance.net",
  "gender": "Male",
  "ip_address": "142.159.179.98",
  "amount": 65,
  "date": "9/11/2016"
}, {
  "id": 69,
  "first_name": "Janek",
  "last_name": "Heynen",
  "email": "jheynen1w@arstechnica.com",
  "gender": "Male",
  "ip_address": "141.50.98.4",
  "amount": 2,
  "date": "3/3/2017"
}, {
  "id": 70,
  "first_name": "Mariann",
  "last_name": "Norman",
  "email": "mnorman1x@deviantart.com",
  "gender": "Female",
  "ip_address": "220.79.150.154",
  "amount": 47,
  "date": "9/6/2016"
}, {
  "id": 71,
  "first_name": "Monah",
  "last_name": "Moizer",
  "email": "mmoizer1y@cmu.edu",
  "gender": "Female",
  "ip_address": "128.101.242.249",
  "amount": 83,
  "date": "7/11/2017"
}, {
  "id": 72,
  "first_name": "Adams",
  "last_name": "Capstaff",
  "email": "acapstaff1z@harvard.edu",
  "gender": "Male",
  "ip_address": "254.170.168.115",
  "amount": 91,
  "date": "11/10/2016"
}, {
  "id": 73,
  "first_name": "Valentino",
  "last_name": "Hradsky",
  "email": "vhradsky20@geocities.jp",
  "gender": "Male",
  "ip_address": "130.127.152.103",
  "amount": 68,
  "date": "7/18/2017"
}, {
  "id": 74,
  "first_name": "Jonell",
  "last_name": "Valek",
  "email": "jvalek21@mediafire.com",
  "gender": "Female",
  "ip_address": "17.109.28.130",
  "amount": 36,
  "date": "5/3/2017"
}, {
  "id": 75,
  "first_name": "Cary",
  "last_name": "Jude",
  "email": "cjude22@craigslist.org",
  "gender": "Male",
  "ip_address": "238.143.161.196",
  "amount": 30,
  "date": "5/3/2017"
}, {
  "id": 76,
  "first_name": "Geraldine",
  "last_name": "Bettleson",
  "email": "gbettleson23@tamu.edu",
  "gender": "Female",
  "ip_address": "153.95.69.233",
  "amount": 96,
  "date": "8/19/2016"
}, {
  "id": 77,
  "first_name": "Rene",
  "last_name": "Mougel",
  "email": "rmougel24@weibo.com",
  "gender": "Female",
  "ip_address": "167.214.110.74",
  "amount": 7,
  "date": "8/5/2016"
}, {
  "id": 78,
  "first_name": "Gweneth",
  "last_name": "Whittleton",
  "email": "gwhittleton25@google.ru",
  "gender": "Female",
  "ip_address": "150.74.210.209",
  "amount": 29,
  "date": "6/19/2017"
}, {
  "id": 79,
  "first_name": "Charmain",
  "last_name": "McPhate",
  "email": "cmcphate26@google.com.hk",
  "gender": "Female",
  "ip_address": "234.20.119.78",
  "amount": 62,
  "date": "2/17/2017"
}, {
  "id": 80,
  "first_name": "Isabella",
  "last_name": "Thurling",
  "email": "ithurling27@dailymotion.com",
  "gender": "Female",
  "ip_address": "199.174.162.193",
  "amount": 85,
  "date": "10/9/2016"
}, {
  "id": 81,
  "first_name": "Robbin",
  "last_name": "Grayling",
  "email": "rgrayling28@berkeley.edu",
  "gender": "Female",
  "ip_address": "31.37.251.156",
  "amount": 8,
  "date": "5/25/2017"
}, {
  "id": 82,
  "first_name": "Allx",
  "last_name": "Rickell",
  "email": "arickell29@hostgator.com",
  "gender": "Female",
  "ip_address": "225.122.67.16",
  "amount": 22,
  "date": "6/15/2017"
}, {
  "id": 83,
  "first_name": "Bobbee",
  "last_name": "O'dell",
  "email": "bodell2a@i2i.jp",
  "gender": "Female",
  "ip_address": "31.214.203.140",
  "amount": 85,
  "date": "5/19/2017"
}, {
  "id": 84,
  "first_name": "Cob",
  "last_name": "Rubes",
  "email": "crubes2b@vinaora.com",
  "gender": "Male",
  "ip_address": "30.224.118.17",
  "amount": 73,
  "date": "9/11/2016"
}, {
  "id": 85,
  "first_name": "Pepita",
  "last_name": "Yaus",
  "email": "pyaus2c@google.com.au",
  "gender": "Female",
  "ip_address": "114.40.20.127",
  "amount": 96,
  "date": "8/23/2016"
}, {
  "id": 86,
  "first_name": "Mavra",
  "last_name": "Hourston",
  "email": "mhourston2d@ucsd.edu",
  "gender": "Female",
  "ip_address": "230.70.197.146",
  "amount": 19,
  "date": "3/16/2017"
}, {
  "id": 87,
  "first_name": "Brooks",
  "last_name": "Copo",
  "email": "bcopo2e@sciencedirect.com",
  "gender": "Male",
  "ip_address": "174.102.221.66",
  "amount": 95,
  "date": "7/13/2017"
}, {
  "id": 88,
  "first_name": "Freddy",
  "last_name": "McVittie",
  "email": "fmcvittie2f@jigsy.com",
  "gender": "Female",
  "ip_address": "76.90.155.3",
  "amount": 60,
  "date": "4/19/2017"
}, {
  "id": 89,
  "first_name": "Carissa",
  "last_name": "Goater",
  "email": "cgoater2g@bloglovin.com",
  "gender": "Female",
  "ip_address": "210.156.206.124",
  "amount": 76,
  "date": "2/13/2017"
}, {
  "id": 90,
  "first_name": "Etienne",
  "last_name": "Allinson",
  "email": "eallinson2h@jugem.jp",
  "gender": "Male",
  "ip_address": "36.24.9.166",
  "amount": 94,
  "date": "1/21/2017"
}, {
  "id": 91,
  "first_name": "Cami",
  "last_name": "Ord",
  "email": "cord2i@ucoz.ru",
  "gender": "Female",
  "ip_address": "233.86.33.73",
  "amount": 58,
  "date": "10/27/2016"
}, {
  "id": 92,
  "first_name": "Blinny",
  "last_name": "Sholl",
  "email": "bsholl2j@ycombinator.com",
  "gender": "Female",
  "ip_address": "103.124.240.36",
  "amount": 91,
  "date": "9/26/2016"
}, {
  "id": 93,
  "first_name": "Aldo",
  "last_name": "Julian",
  "email": "ajulian2k@quantcast.com",
  "gender": "Male",
  "ip_address": "184.184.143.203",
  "amount": 79,
  "date": "11/5/2016"
}, {
  "id": 94,
  "first_name": "Sophronia",
  "last_name": "Warlawe",
  "email": "swarlawe2l@loc.gov",
  "gender": "Female",
  "ip_address": "223.28.12.47",
  "amount": 55,
  "date": "12/2/2016"
}, {
  "id": 95,
  "first_name": "Meade",
  "last_name": "O'Collopy",
  "email": "mocollopy2m@histats.com",
  "gender": "Male",
  "ip_address": "222.96.6.42",
  "amount": 73,
  "date": "4/5/2017"
}, {
  "id": 96,
  "first_name": "Andrej",
  "last_name": "Ivachyov",
  "email": "aivachyov2n@umich.edu",
  "gender": "Male",
  "ip_address": "132.177.50.127",
  "amount": 50,
  "date": "10/23/2016"
}, {
  "id": 97,
  "first_name": "Hirsch",
  "last_name": "Crosskill",
  "email": "hcrosskill2o@paypal.com",
  "gender": "Male",
  "ip_address": "224.95.126.10",
  "amount": 93,
  "date": "11/24/2016"
}, {
  "id": 98,
  "first_name": "Alonzo",
  "last_name": "Proud",
  "email": "aproud2p@shop-pro.jp",
  "gender": "Male",
  "ip_address": "224.76.91.90",
  "amount": 12,
  "date": "7/2/2017"
}, {
  "id": 99,
  "first_name": "Tedman",
  "last_name": "Larmet",
  "email": "tlarmet2q@imageshack.us",
  "gender": "Male",
  "ip_address": "13.158.173.35",
  "amount": 58,
  "date": "4/4/2017"
}, {
  "id": 100,
  "first_name": "Erasmus",
  "last_name": "Raper",
  "email": "eraper2r@networkadvertising.org",
  "gender": "Male",
  "ip_address": "198.0.191.58",
  "amount": 100,
  "date": "4/4/2017"
}]


first.date = new Date();
first.comparator = function(data,input){
console.log(input, data);
return data.length>=input;
}


}