///<reference path="p5.global-mode.d.ts" />

//Globale variabler
var windowSize = // Størrelsen af vinduet
{
    x: window.innerWidth,
    y: window.innerHeight
};
var btn; // ?
var timer; // Indeholder et Timer objekt
var buttons = []; // Indeholder knapperne fra menuen
var countriesNames = []; // ?
var isClicked = false; // Sørger for at musen kun aktiverer 1 gang når man klikker
var tick = 0;
var fps = .1;

//Map variabler
var mapWidth = windowSize.x * (4/6) - 100;
mapWidth = mapWidth - (windowSize.y + windowSize.y * (1/10))> 0 ? mapWidth - (mapWidth - windowSize.y) - windowSize.y * (1/10) : mapWidth; //Udregner om mappet går under skærmen

var mapPos = //Positionen af kortet
{
    x: windowSize.x * .5 - mapWidth * .5,
    y: windowSize.y * (1/10)
};


// Funktioner der kører 1 gang
function setup()
{
    timer = new Timer();
    createButtons();
}

// Kører 30 gange i sekundet
function draw()
{
    frameRate(fps);
    createCanvas(windowSize.x, windowSize.y);
    clear();
    createBoubles();
    rangListe();
    mentalHealth(countries[getIndex(countries, "Danmark")].mentalHealthIndex);
    lines();
    drawElements(String(mapWidth) + "px" , {x: String(mapPos.x) + "px", y: String(mapPos.y) + "px"});
    updateIndex();
    updateButtons();
    timer.draw();
    welcome();
}