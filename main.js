///<reference path="p5.global-mode.d.ts" />

//Variabler
var knap;
var testBouble;
var timer;


function setup()
{
    createCanvas(windowWidth - 50, windowHeight - 50);
    drawMap(String(windowWidth * (4/6)) + "px", {x: "autoCenter", y: String(windowHeight * (1/10)) + "px"});
    lines()

    knap = new Buttons("Test");
    
    testBouble = new Boubles({x: 1, y: 1});
    timer = new Timer();
}


function draw()
{
    frameRate(30);
    clear();

    timer.draw()
    testBouble.draw();
    knap.draw();

}