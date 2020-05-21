///<reference path="p5.global-mode.d.ts" />

//Variabler
var windowSize =
{
    x: window.innerWidth,
    y: window.innerHeight
};
var btn;
var timer;

//Map variabler
var mapWidth = windowSize.x * (4/6) - 100;
//Udregner om mappet går under skærmen
mapWidth = mapWidth - (windowSize.y + windowSize.y * (1/10))> 0 ? mapWidth - (mapWidth - windowSize.y) - windowSize.y * (1/10) : mapWidth;

var mapPos =
{
    x: windowSize.x * .5 - mapWidth * .5,
    y: windowSize.y * (1/10)
};


function setup()
{
   
    timer = new Timer();
}


function draw()
{
    frameRate(30);
    createCanvas(windowSize.x, windowSize.y);
    clear();
    createBoubles();
    createButtons()
    rangListe();
    mentalHealth();
    lines();
    drawMap(String(mapWidth) + "px" , {x: String(mapPos.x) + "px", y: String(mapPos.y) + "px"});

    timer.draw()
}