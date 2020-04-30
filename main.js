///<reference path="p5.global-mode.d.ts" />

function setup()
{
    createCanvas(windowWidth - 100, windowHeight - 100);

    drawMap(String(windowWidth * (4/6)) + "px", {x: "autoCenter", y: "40px"});
}

function draw()
{
    frameRate(30);
    clear();
    timer();
}