var budget = 100000000000;
var countries = 
[
    {
        name: "Danmark",
        mapPosition: {x: mapPos.x + mapWidth * .32, y: mapPos.y + mapWidth * .5},
        population: 5806000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 42933,
        BNP: 49190
    },
    {
        name: "Sverige",
        mapPosition: {x: mapPos.x + mapWidth * .4, y: mapPos.y + mapWidth * .3},
        population: 10230000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 450295,
        BNP: 43900
    },
    {
        name: "Norge",
        mapPosition: {x: mapPos.x + mapWidth * .33, y: mapPos.y + mapWidth * .4},
        population: 5368000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 385203,
        BNP: 69890
    },
    {
        name: "Tyskland",
        mapPosition: {x: mapPos.x + mapWidth * .34, y: mapPos.y + mapWidth * .6},
        population: 83020000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 357386,
        BNP: 35980
    },
    {
        name: "Island",
        mapPosition: {x: mapPos.x + mapWidth * .06, y: mapPos.y + mapWidth * .23},
        population: 364134,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 103000,
        BNP: 38840
    },
    {
        name: "Finland",
        mapPosition: {x: mapPos.x + mapWidth * .5, y: mapPos.y + mapWidth * .3},
        population: 5518000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 338440,
        BNP: 37170
    },
    {
        name: "Rusland",
        mapPosition: {x: mapPos.x + mapWidth * .8, y: mapPos.y + mapWidth * .4},
        population: 144500000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 17100000,
        BNP: 14485
    },
    {
        name: "Storbritanien",
        mapPosition: {x: mapPos.x + mapWidth * .18, y: mapPos.y + mapWidth * .55},
        population: 66650000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 242496,
        BNP: 32960
    },
    {
        name: "Irland",
        mapPosition: {x: mapPos.x + mapWidth * .1, y: mapPos.y + mapWidth * .55},
        population: 4904000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 70273,
        BNP: 60350
    },
    {
        name: "Holland",
        mapPosition: {x: mapPos.x + mapWidth * .28, y: mapPos.y + mapWidth * .59},
        population: 17280000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 41543,
        BNP: 42020
    },
    {
        name: "Belgien",
        mapPosition: {x: mapPos.x + mapWidth * .25, y: mapPos.y + mapWidth * .63},
        population: 11460000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 30689,
        BNP: 35900
    },
    {
        name: "Luxemborg",
        mapPosition: {x: mapPos.x + mapWidth * .28, y: mapPos.y + mapWidth * .64},
        population: 613894,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 2586,
        BNP: 83640
    },
    {
        name: "Frankrig",
        mapPosition: {x: mapPos.x + mapWidth * .22, y: mapPos.y + mapWidth * .7},
        population: 66990000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 643801,
        BNP: 33360
    },
    {
        name: "Spanien",
        mapPosition: {x: mapPos.x + mapWidth * .1, y: mapPos.y + mapWidth * .85},
        population: 46940000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 505990,
        BNP: 25170
    },
    {
        name: "Portugal",
        mapPosition: {x: mapPos.x + mapWidth * .02, y: mapPos.y + mapWidth * .85},
        population: 10280000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 92212,
        BNP: 18550
    },
    {
        name: "Schweiz",
        mapPosition: {x: mapPos.x + mapWidth * .3, y: mapPos.y + mapWidth * .71},
        population: 85700000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 41285,
        BNP: 59970
    },
    {
        name: "Italien",
        mapPosition: {x: mapPos.x + mapWidth * .44, y: mapPos.y + mapWidth * .85},
        population: 60360000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 301338,
        BNP: 26860
    },
    {
        name: "Østrig",
        mapPosition: {x: mapPos.x + mapWidth * .4, y: mapPos.y + mapWidth * .7},
        population: 8859000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 83879,
        BNP: 38240
    },
    {
        name: "Polen",
        mapPosition: {x: mapPos.x + mapWidth * .45, y: mapPos.y + mapWidth * .57},
        population: 37970000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 312679,
        BNP: 12980
    },
    {
        name: "Tjekkiet",
        mapPosition: {x: mapPos.x + mapWidth * .4, y: mapPos.y + mapWidth * .64},
        population: 10650000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 78866,
        BNP: 18000
    },
    {
        name: "Slovakiet",
        mapPosition: {x: mapPos.x + mapWidth * .455, y: mapPos.y + mapWidth * .655},
        population: 5450000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 49035,
        BNP:15890
    },
    {
        name: "Ungarn",
        mapPosition: {x: mapPos.x + mapWidth * .48, y: mapPos.y + mapWidth * .69},
        population: 9773000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 93030,
        BNP: 13180
    },
    {
        name: "Slovenien",
        mapPosition: {x: mapPos.x + mapWidth * .41, y: mapPos.y + mapWidth * .73},
        population: 2081000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 20271,
        BNP: 20490
    },
    {
        name: "Kroatien",
        mapPosition: {x: mapPos.x + mapWidth * .43, y: mapPos.y + mapWidth * .76},
        population: 4076000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 56594,
        BNP: 12480
    },
    {
        name: "Bosnien & Herzegovina",
        mapPosition: {x: mapPos.x + mapWidth * .47, y: mapPos.y + mapWidth * .76},
        population: 3324000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 51197,
        BNP: 1
    },
    {
        name: "Serbien",
        mapPosition: {x: mapPos.x + mapWidth * .52, y: mapPos.y + mapWidth * .76},
        population: 6982000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 88361,
        BNP: 5430
    },
    {
        name: "Albanien",
        mapPosition: {x: mapPos.x + mapWidth * .505, y: mapPos.y + mapWidth * .817},
        population: 2846000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 28748,
        BNP:4797
    },
    {
        name: "Grækenland",
        mapPosition: {x: mapPos.x + mapWidth * .54, y: mapPos.y + mapWidth * .85},
        population: 10720000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 131987,
        BNP:18150
    },
    {
        name: "North Macedonia",
        mapPosition: {x: mapPos.x + mapWidth * .533, y: mapPos.y + mapWidth * .812},
        population: 2077000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 25713,
        BNP: 4020
    },
    {
        name: "Bulgarien",
        mapPosition: {x: mapPos.x + mapWidth * .58, y: mapPos.y + mapWidth * .78},
        population: 7000000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 110994,
        BNP: 6800
    },
    {
        name: "Romænien",
        mapPosition: {x: mapPos.x + mapWidth * .56, y: mapPos.y + mapWidth * .7},
        population: 19410000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 238397,
        BNP: 9130
    },
    {
        name: "Ukraine",
        mapPosition: {x: mapPos.x + mapWidth * .58, y: mapPos.y + mapWidth * .62},
        population: 41980000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 603628,
        BNP: 2818
    },
    {
        name: "Tyrkiet",
        mapPosition: {x: mapPos.x + mapWidth * .74, y: mapPos.y + mapWidth * .85},
        population: 82000000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 783562,
        BNP: 11470
    },
    {
        name: "Moldova",
        mapPosition: {x: mapPos.x + mapWidth * .62, y: mapPos.y + mapWidth * .685},
        population: 3546000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 33846,
        BNP: 2938
    },
    {
        name: "Hviderusland",
        mapPosition: {x: mapPos.x + mapWidth * .58, y: mapPos.y + mapWidth * .52},
        population: 9485000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 207595,
        BNP: 5726
    },
    {
        name: "Lithauen",
        mapPosition: {x: mapPos.x + mapWidth * .51, y: mapPos.y + mapWidth * .505},
        population: 2794000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 65300,
        BNP: 13880
    },
    {
        name: "Letland",
        mapPosition: {x: mapPos.x + mapWidth * .51, y: mapPos.y + mapWidth * .475},
        population: 1920000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 64589,
        BNP: 12490
    },
    {
        name: "Estland",
        mapPosition: {x: mapPos.x + mapWidth * .51, y: mapPos.y + mapWidth * .425},
        population: 1329000,
        infected: Math.floor(Math.random() * 100),
        dead: 1,
        area: 45226,
        BNP: 15670
    },
];


var buttonLabels = 
[
    {
        name: "Antal smittede"
    }, 
    {
        name: "Antal døde"
    }, 
    {
        name: "Antal smittede efter land"
    }, 
    {
        name: "Mentalt helbred"
    }, 
    {
        name: "Økonomi"
    },
    {
        name: budget
    }, 
    {
        name: "Sundhedsvæsenet", 
        subButtons: 
        [
            {
                name: "Udstyr",
                description: "Vælg hvor mange penge du ønsker at investere i udstyr"
            },
            {
                name: "Sengepladser"
            }
        ]
    }, 
    {
        name: "Forskning",
        subButtons:
        [
            {
                name: "Vaccine"
            }
        ]
    }, 
    {
        name: "Regeringstiltag",
        subButtons:
        [
            {
                name: "Grænser"
            }
        ]
    }, 
    {
        name:"Sidste",
        subButtons:
        [
            {
                name: "Lort"
            }
        ]
    }
];