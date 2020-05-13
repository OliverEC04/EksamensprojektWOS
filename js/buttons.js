class Buttons
{
    constructor(button, y, x, colour)
    {
        this.button = button;
        this.buttonx = x
        this.buttony = y
        this.size = {x: windowSize.x - windowSize.x*1/200 - 10, y: 40};
        this.colour = (colour == undefined) ? color(255, 255, 255) : colour;
        this.subSize = {x: 200, y: (this.button.subButtons == undefined) ? 40 : this.button.subButtons.length * 40};
        this.active;

        textSize(20);
    }

    // Kører for hver knap 30 gange i sekundet
    draw()
    {
        strokeWeight(0);
        fill(this.colour);
        text(this.button.name, this.buttonx, this.buttony + 30);
        
        if (this.button.subButtons != undefined && this.buttonx < mouseX && mouseX < this.buttonx + this.size.x && this.buttony < mouseY && mouseY < this.buttony + this.size.y)
        {
            this.active = true;
        }

        if (this.active)
        {
            this.hover();
        }
    }

    // Kører når man holder musen over knappen
    hover()
    {
        fill(0);
        stroke(60, 60, 60);
        strokeWeight(5);
        rect(this.buttonx - this.subSize.x - 20, this.buttony, this.subSize.x, this.subSize.y);
        
        fill(255);
        strokeWeight(0);

        for (var i = 0; i < this.button.subButtons.length; i++)
        {
            text(this.button.subButtons[i].name, this.buttonx - this.subSize.x, this.buttony + 30 + (i * 40));
        }
    }

    click()
    {
        
    }
}


function createButtons()
{
    var buttons = [];

    for (var i = 0; i < 9; i++)
    {
        if (i <= 2){
            buttons[i] = new Buttons(buttonLabels[i], mapPos.y + 50 * i, windowSize.x*1/170 + 10);
        } 

        if (i > 2 && i <= 4){
            buttons[i] = new Buttons(buttonLabels[i], mapPos.y + 250 + (50 * i), windowSize.x*1/170 + 10);
        } 

        if (i >= 5){
        buttons[i] = new Buttons(buttonLabels[i], mapPos.y + 50 * (i-5), mapWidth+ mapPos.x + 20);
        }

        buttons[i].draw();
    }
}

function rangListe() 
{
    var rangliste = [];
    var urangeretListe = [];
    var navneRangeret = [];

    for (var i = 0; i < countries.length; i++)
    {
        urangeretListe[i] = countries[i].infected
    }
 
    var rangeret = sort(urangeretListe, countries.length)

    for (var j = countries.length; j > countries.length-5; j--)
    {
        for (var k = 0; k < rangeret.length; k++)
        {
            if (countries[k].infected == rangeret[j])
            {
                navneRangeret[k] = countries[k].name
                console.log(navneRangeret[k])
            }
        }
        
        for (var p = 0; p > 5; p++) // det er det her for loop som fucker det helt op.
        {
        rangliste[j] = new Buttons({name: String(navneRangeret[p]) + ": " + String(rangeret[j])}, mapPos.y + 150 + 50 * (j - countries.length + 4), windowSize.x*1/170 + 10, color(255,0,0))
        }

        rangliste[j].draw()
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
