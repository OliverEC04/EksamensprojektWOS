class Buttons
{
    constructor(name, y, x)
    {
        this.name = name;
        //this.onClick = onClick;
        this.buttonx = x
        this.buttony = y + 30

        

       
    }

    draw()
    {
        textSize(20)
        text(this.name, this.buttonx, this.buttony);
    }
}

function createButtons(name)
{
    var buttons = [];
    var buttonLabels = ["Antal smittede","Antal doede", "Antal smittede efter land", "Mentalt helbred", "Okonomi", "Sundhedsvaesenet", "Forskning", "Regeringstiltag", "Sidste"];

    for (var i = 0; i < 9; i++)
    {
        if (i <= 4){
            buttons[i] = new Buttons(buttonLabels[i], mapPos.y + 50 * i, windowSize.x*1/170);
        } 

        if (i >= 5){
        buttons[i] = new Buttons(buttonLabels[i], mapPos.y + 50 * (i-5), mapWidth+ mapPos.x + 10);
        }

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
