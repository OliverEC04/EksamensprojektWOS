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

        textSize(20);
    }

    // Kører for hver knap 30 gange i sekundet
    draw()
    {
        //document.getElementsByTagName(button)
        
        this.txt = createButton(this.button.name);
        this.txt.position(this.buttonx, this.buttony + 20);
        this.txt.style('background-color', color(0, 0, 0, 0))
        
        if (mouseIsPressed && this.button.subButtons != undefined && this.buttonx < mouseX && mouseX < this.buttonx + this.size.x && this.buttony < mouseY && mouseY < this.buttony + this.size.y)
        {
            if (this.button.show == undefined || this.button.show == "hide")
            {
                this.button.show = "show";
            }
            else if (this.button.show == "show")
            {
                this.button.show = "hide";
            }
        }

        if (this.button.show == "show" && this.button.subButtons != undefined)
        {
            this.click();
        }
    }

    // Kører når man holder musen over knappen
    click()
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

    subClick()
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

function displayLandeRang() // viser landene rangerede efter smittet
{
    countriesNames = []

    for (var i = 1; i < 6; i++)
    {
        countriesNames[i] = new Buttons({name: String(countries[countries.length - i].name + ": " + String(countries[countries.length-i].infected))}, mapPos.y + 100 + 50 * i, windowSize.x*1/170 + 10, color(255,0,0))

        countriesNames[i].draw()
    }
}

function rangListe() // Sortere listen i filen data.js fra færrest til flest smittet
{
    countries.sort(function(a, b){return (a.infected - b.infected)})
    displayLandeRang()
}


function mentalHealth(mentalHealthIndex)
{
    rect(windowSize.x*1/170 + 10, mapPos.y + 450, 100, 5)

    stroke(150,150, 150);
    noFill();
    rect(windowSize.x*1/170 + 10 , mapPos.y + 450, windowSize.x*1/7, 10);

    if (mentalHealthIndex < 80)
    {
        fill()
    }
    rect(windowSize.x*1/170 + 10 , mapPos.y + 450, mentalHealthIndex, 10);

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
function økonomi()
{
    //økonomi for landet
 
}