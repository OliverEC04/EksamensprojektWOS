class Buttons
{
    constructor(button, y, x, colour)
    {
        // Angiver variabler for hvert objekt af klassen
        this.button = button;
        this.buttonx = x;
        this.buttony = y;
        this.size = {x: (windowSize.x - mapWidth - 40) / 2, y: 40};
        this.colour = (colour == undefined) ? color(255, 255, 255) : colour;
        this.subSize = {x: 200, y: this.button.subButtons == undefined ? 40 : this.button.subButtons.length * 40};
        this.menuActive = false;

        // Tegner tekst for knappen
        textSize(20);
        this.txt = createButton(this.button.name);
        this.txt.position(this.buttonx, this.buttony + 20);
        this.txt.style('background-color', color(0, 0, 0, 0));
        this.txt.style('color', this.colour);

        // For hver undermenu i knappen
        for (var i = 0; i < (this.button.subButtons == undefined ? 0 : this.button.subButtons.length); i++)
        {
            buttonLabels[getIndex(buttonLabels, this.button.name)].subButtons[i].window = new Window({x: mapWidth * 2/3, y: mapWidth * 2/3}, this.button.subButtons[i], {closeBtn: true, btnName: this.button.name}); // Laver et vindue til undermenuen
            buttonLabels[getIndex(buttonLabels, this.button.name)].subButtons[i].active = false; // Angiver om vinduet skal vises
        }
    }

    // Kører for hver knap 30 gange i sekundet
    draw()
    {
        // Viser menuen hvis man klikker på knappen
        this.menuActive = click(this.size, {x: this.buttonx, y: this.buttony}, this.menuActive);        

        if (this.menuActive && this.button.subButtons != undefined)
        {
            this.menu();

            for (var i = 0; i < this.button.subButtons.length; i++)
            {
                // Åbner vinduet hvis man klikker på knappen
                buttonLabels[getIndex(buttonLabels, this.button.name)].subButtons[i].active = click({x: this.subSize.x, y: this.size.y}, {x: this.buttonx - this.subSize.x - 20, y: this.buttony + this.size.y * i}, buttonLabels[getIndex(buttonLabels, this.button.name)].subButtons[i].active);
                if (buttonLabels[getIndex(buttonLabels, this.button.name)].subButtons[i].active)
                {
                    buttonLabels[getIndex(buttonLabels, this.button.name)].subButtons[i].window.draw();
                    buttonLabels[getIndex(buttonLabels, this.button.name)].subButtons[i].window.drawSlider();
                }
            }
        }
        // Lukker vinduet hvis hvis menuen ikke er åben
        else if (this.button.subButtons != undefined)
        {
            for (var i = 0; i < this.button.subButtons.length; i++)
            {
                buttonLabels[getIndex(buttonLabels, this.button.name)].subButtons[i].active = false;
            }
        }

        // Fjerner slideren fra vinduet hvis det ikke vises
        if (this.button.subButtons != undefined)
        {
            for (var i = 0; i < this.button.subButtons.length; i++)
            {
                if (buttonLabels[getIndex(buttonLabels, this.button.name)].subButtons[i].active == false)
                {
                    buttonLabels[getIndex(buttonLabels, this.button.name)].subButtons[i].window.removeSlider();
                }
            }
        }
    }    

    // Kører når man klikker på knappen
    menu()
    {
        if (this.button.subButtons != undefined)
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
    }
}


// Tegner en vindue ud fra størrelse, indhold, og om der skal være en luk-knap
class Window
{
    constructor(size, content, close)
    {
        this.size = size;
        this.position = {x: windowSize.x / 2 - this.size.x / 2, y: mapPos.y};
        this.content = content;
        this.close = close;
        this.slider;
        this.okBtnsize = {x: 120, y: 30};

        if (this.close != undefined)
        {
            this.closeBtn = close.closeBtn;
            this.btnName = close.btnName;
        }
    }

    // Tegner vinduet med titlen og beskrivelse
    draw()
    {
        // Tegner kassen til vinduet
        fill(0);
        stroke(60, 60, 60);
        strokeWeight(5);
        rect(this.position.x, this.position.y, this.size.x, this.size.y);

        if (this.close != undefined)
        {
            // Tegner luk knappen
            fill(255, 0, 0);
            stroke(60, 60, 60);
            strokeWeight(5);
            rect(this.position.x + this.size.x - 30, this.position.y + 10, 20, 20);

            // Aktiverer hvis man klikker på luk knappen
            if (isClicked == false && mouseIsPressed && 
                this.position.x + this.size.x - 30 < mouseX && 
                mouseX < this.position.x + this.size.x - 10 && 
                this.position.y + 10 < mouseY && 
                mouseY < this.position.y + 30)
            {
                isClicked = true;
                buttonLabels[getIndex(buttonLabels, this.btnName)].subButtons[getIndex(buttonLabels[getIndex(buttonLabels, this.btnName)].subButtons, this.content.name)].active = false; // Finder knappen og ændrer dens aktiv værdi til false
            }
        }

        // Tegner titlen på vinduet
        strokeWeight(0);
        fill(255);
        textSize(30);
        text(this.content.name, this.position.x + this.size.x / 2 - textWidth(this.content.name) / 2, this.position.y + 30);

        //Tegner beskrivelsen af vinduet
        textSize(15);
        text(this.content.description, this.position.x + 10, this.position.y + 50, this.size.x - 20);
    }

    // Tegner en slider på vinduet
    drawSlider()
    {
        // Tegner en slider hvis den ikke allerede eksisterer
        if (this.slider == undefined)
        {
            this.slider = createSlider(0, budget, countries[getIndex(countries, "Danmark")][String(this.content.name.toLowerCase()) + "Index"] == undefined ? 0 : countries[getIndex(countries, "Danmark")][String(this.content.name.toLowerCase()) + "Index"], budget / 100);
            this.sliderWidth = this.size.x * 2/3;
            this.slider.style('width', String(this.sliderWidth) + "px");
            this.slider.position(this.position.x + this.size.x / 2 - this.sliderWidth / 2, this.position.y + this.size.y * .75);
        }

        // Tegner værdier til slideren
        text("0", 
        this.position.x + this.size.x / 2 - this.sliderWidth / 2 - textWidth("0") / 2, 
        this.position.y + this.size.y * .75 + 20); // Minimumsværdien

        text(String(budget), 
        this.position.x + this.size.x / 2 + this.sliderWidth / 2 - textWidth(String(budget)) / 2, 
        this.position.y + this.size.y * .75 + 20); // Maksimumsværdien

        text(String(this.slider.value()), 
        this.position.x + this.size.x / 2 - this.sliderWidth / 2 + this.sliderWidth * (this.slider.value() / budget) - textWidth(String(this.slider.value())) / 2, 
        this.position.y + this.size.y * .75 - 20); // Nuværende værdi

        // Tegner en confirm knap
        fill(0, 255, 0);
        stroke(60, 60, 60);
        strokeWeight(5);
        rect(this.position.x + this.size.x / 2 - this.okBtnsize.x / 2, 
            this.position.y + this.size.y * .85, 
            this.okBtnsize.x, 
            this.okBtnsize.y); // Selve knappen

        fill(0);
        strokeWeight(0);
        text("Confirm", 
        this.position.x + this.size.x / 2 - textWidth("Confirm") / 2, 
        this.position.y + this.size.y * .85 + 20); // Teksten

        // Aktiverer hvis man klikker på knappen
        if (isClicked == false && mouseIsPressed && budget >= this.slider.value() &&
            this.position.x + this.size.x / 2 - this.okBtnsize.x / 2 < mouseX && 
            mouseX < this.position.x + this.size.x / 2 - this.okBtnsize.x / 2 + this.okBtnsize.x && 
            this.position.y + this.size.y * .85 < mouseY && 
            mouseY < this.position.y + this.size.y * .85 + this.okBtnsize.y + 30)
        {
            isClicked = true;
            // Ændrer Danmarks index ud fra sliderens værdi
            countries[getIndex(countries, "Danmark")][String(this.content.name.toLowerCase()) + "Index"] += this.slider.value();
            budget = budget - this.slider.value();
            buttonLabels[getIndex(buttonLabels, this.btnName)].subButtons[getIndex(buttonLabels[getIndex(buttonLabels, this.btnName)].subButtons, this.content.name)].active = false;
        }
    }

    removeSlider()
    {
        // Fjerner slideren når vinduet lukkes
        if (this.slider != undefined && buttonLabels[getIndex(buttonLabels, this.btnName)].subButtons[getIndex(buttonLabels[getIndex(buttonLabels, this.btnName)].subButtons, this.content.name)].active == false)
        {
            this.slider.remove();
            this.slider = undefined;
        }
    }
}


function createButtons()
{
    for (var i = 0; i < 11; i++)
    {
        if (i <= 4){
            buttons[i] = new Buttons(buttonLabels[i], mapPos.y + 50 * i, windowSize.x*1/170 + 10);
        }

        if (i > 4 && i <= 7) // mentalt helbred og budget
        {
            buttons[i] = new Buttons(buttonLabels[i], mapPos.y + 250 + (50 * i), windowSize.x*1/170 + 10);
        } 

        if (i >= 8)
        {
            buttons[i] = new Buttons(buttonLabels[i], mapPos.y + 50 * (i-8), mapWidth+ mapPos.x + 20);
        }
    }
}


function updateButtons()
{
    for (var i = 0; i < 11; i++)
    {
        switch (i)
        {
            case 1:
                buttons[i].txt.remove();

                buttons[i] = new Buttons({name: String(floor(countries[getIndex(countries, "Danmark")]["infected"]))}, mapPos.y + 50 * i, windowSize.x*1/170 + 10, color(255,0,0));
                break;

            case 3:
                buttons[i].txt.remove();

                buttons[i] = new Buttons({name: String(floor(countries[getIndex(countries, "Danmark")]["dead"]))}, mapPos.y + 50 * i, windowSize.x*1/170 + 10, color(255,0,0));
                break;

            case 7:
                buttons[i].txt.remove();

                buttons[i] = new Buttons({name: String(budget) + " kr"}, mapPos.y + 250 + 50 * i, windowSize.x*1/170 + 10);
                //console.log(budget);
                break;
        }

        buttons[i].draw();
    }
}


function displayLandeRang() // viser landene rangerede efter smittet
{
    for (var i = 1; i < 6; i++)
    {
        // Fjerner den forrige rangliste
        if (countriesNames[i] != undefined)
        {
            countriesNames[i].txt.remove();
        }

        
        countriesNames[i] = new Buttons({name: String(countries[ i-1].name + ": " + String(floor(countries[i-1].infected)))}, mapPos.y + 200 + 50 * i, windowSize.x*1/170 + 10, color(255,0,0))

        countriesNames[i].draw()
    }
}


function rangListe() // Sortere listen i filen data.js fra færrest til flest smittet
{
    countries.sort(function(a, b){return (b.infected -a.infected)})
    displayLandeRang()
}


function mentalHealth(mentalHealthIndex)
{
    stroke(150,150, 150);
    noFill();
    rect(windowSize.x*1/125, mapPos.y+540, windowSize.x*1/7, 10);
    fill(255, 255, 255);
    rect(windowSize.x*1/125, mapPos.y+540, windowSize.x*1/7 * mentalHealthIndex, 10);
    noFill();

}


function lines()
{
    fill(34, 34, 34,0)
    stroke(60, 60, 60);
    strokeWeight(5);
    rect(mapPos.x, mapPos.y, mapWidth, mapWidth ) // map rectangle
    quad(windowSize.x / 200, mapPos.y, 
        mapPos.x-10,mapPos.y, 
        mapPos.x-10, mapWidth+mapPos.y, 
        windowSize.x / 200,mapWidth+mapPos.y) // data rectangle
    quad(windowSize.x - windowSize.x / 200 - 10, mapPos.y, 
        windowSize.x - windowSize.x / 200 - 10, mapWidth + mapPos.y, 
        mapWidth+ mapPos.x + 10 , mapWidth+mapPos.y,  
        mapWidth+ mapPos.x + 10,mapPos.y) // funktion rectangle


    //line(windowWidth/6, windowHeight/10, windowWidth/6, windowHeight) // Data
    //line(windowWidth*5/6, windowHeight/10, windowWidth*5/6, windowHeight) // Funktioner
    //line(0,windowHeight/10, windowWidth, windowHeight/10) // Top bar
}