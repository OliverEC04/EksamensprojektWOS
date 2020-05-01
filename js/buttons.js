class Buttons
{
    constructor(name, y)
    {
        this.name = name;
        //this.onClick = onClick;
        this.buttonx = windowSize.x*1/180 
        this.buttony = y

        

       
    }

    draw()
    {

        text("button", this.buttonx, this.buttony);
    }
}

function createButtons()
{
    var buttons = [];

    for (var i = 0; i < 10; i++)
    {
        buttons[i] = new Buttons("Test", mapPos.y + 50 * i);
        buttons[i].draw();
    }
}


function lines()
{
    fill(34, 34, 34,0)
    stroke(60, 60, 60);
    strokeWeight(5);
    rect(mapPos.x, mapPos.y, mapWidth, mapWidth ) // map rectangle
    quad(windowSize.x*1/200, mapPos.y, 
        mapPos.x-10,mapPos.y, 
        mapPos.x-10, mapWidth+mapPos.y, 
        windowSize.x*1/200,mapWidth+mapPos.y) // data rectangle
    quad(windowSize.x - windowSize.x*1/200 - 10, mapPos.y, 
        windowSize.x - windowSize.x*1/200 - 10, mapWidth + mapPos.y, 
        mapWidth+ mapPos.x + 10 , mapWidth+mapPos.y,  
        mapWidth+ mapPos.x + 10,mapPos.y) // funktion rectangle


    //line(windowWidth/6, windowHeight/10, windowWidth/6, windowHeight) // Data
    //line(windowWidth*5/6, windowHeight/10, windowWidth*5/6, windowHeight) // Funktioner
    //line(0,windowHeight/10, windowWidth, windowHeight/10) // Top bar
}
