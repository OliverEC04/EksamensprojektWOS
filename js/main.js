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

//Map variabler
var mapWidth = windowSize.x * (4/6) - 100;
mapWidth = mapWidth - (windowSize.y + windowSize.y * (1/10))> 0 ? mapWidth - (mapWidth - windowSize.y) - windowSize.y * (1/10) : mapWidth; //Udregner om mappet går under skærmen

var mapPos = //Positionen af kortet
{
    x: windowSize.x * .5 - mapWidth * .5,
    y: windowSize.y * (1/10)
};


function setup()
{
    timer = new Timer();
    createButtons();
}


function draw()
{
    frameRate(30);
    createCanvas(windowSize.x, windowSize.y);
    clear();
    createBoubles();
    rangListe();
    mentalHealth();
    lines();
    drawMap(String(mapWidth) + "px" , {x: String(mapPos.x) + "px", y: String(mapPos.y) + "px"});
    updateSmitte();
    updateButtons();

    timer.draw()
}


// SKAL FLYTTES
// Finder index-nummeret på et objekt i et array ud fra objektets navn
function getIndex(array, value)
{
    for (var i = 0; i < array.length; i++)
    {
        if (array[i].name == value)
        {
            return i;
        }
    }
}

// Skal også flyttes
// Returner true hvis man klikker på det angivne område
function click(size, position, active)
{
    if (isClicked == false && mouseIsPressed && position.x < mouseX && mouseX < position.x + size.x && position.y < mouseY && mouseY < position.y + size.y)
    {
        isClicked = true;

        if (active == false)
        {
            active = true;
        }
        else if (active)
        {
            active = false;
        }
    }
    else if (mouseIsPressed == false)
    {
        isClicked = false;
    }

    return active;
}