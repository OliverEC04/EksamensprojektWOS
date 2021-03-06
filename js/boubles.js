﻿class Boubles
{
    constructor(country)
    {
        this.country = country;
    }

    draw()
    {
        this.infectedRadius = Math.log(this.country.infected * .5) * 2;
        this.deadRadius = Math.log(this.country.dead * .5) * 2;

        fill(255, 0, 0);
        strokeWeight(2);
        circle(this.country.mapPosition.x, this.country.mapPosition.y, this.infectedRadius * 2);
        fill(0);
        circle(this.country.mapPosition.x, this.country.mapPosition.y, this.deadRadius * 2);

        if (dist(mouseX, mouseY, this.country.mapPosition.x, this.country.mapPosition.y) < this.infectedRadius)
        {
            this.hover();
        }
    }

    hover()
    {
        this.fontSize = 15;
        this.panelSize =
        {
            x: 200,
            y: 60
        };

        fill(255)
        rect(this.country.mapPosition.x + this.infectedRadius * 2, this.country.mapPosition.y - this.panelSize.y * .5,
            this.panelSize.x, this.panelSize.y);
        fill(0);
        textSize(this.fontSize);
        text(this.country.name, this.country.mapPosition.x + this.infectedRadius * 2 + this.fontSize * .5, this.country.mapPosition.y - this.panelSize.y * .5 + this.fontSize);
        strokeWeight(0);
        text("Indbyggere: " + floor(this.country.population), this.country.mapPosition.x + this.infectedRadius * 2 + this.fontSize * .5, this.country.mapPosition.y - this.panelSize.y * .3 + this.fontSize);
        text("Smittede: " + floor(this.country.infected), this.country.mapPosition.x + this.infectedRadius * 2 + this.fontSize * .5, this.country.mapPosition.y - this.panelSize.y * .1 + this.fontSize);
        text("Døde: " + floor(this.country.dead), this.country.mapPosition.x + this.infectedRadius * 2 + this.fontSize * .5, this.country.mapPosition.y - this.panelSize.y * (-.1) + this.fontSize);
    }
}


function createBoubles()
{
    var boubles = [];

    for (i in countries)
    {
        boubles[i] = new Boubles(countries[i]);
        boubles[i].draw();
    }
}