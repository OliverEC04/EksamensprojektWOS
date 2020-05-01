class Boubles
{
    constructor(country)
    {
        this.country = country;
    }

    draw()
    {
        this.infectedRadius = this.country.infected / this.country.population * 4000;
        this.deadRadius = this.country.dead / this.country.population * 4000;

        fill(255, 0, 0);
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
            x: 120,
            y: 80
        };

        fill(255)
        rect(this.country.mapPosition.x + this.infectedRadius * 2, this.country.mapPosition.y - this.panelSize.y * .5,
            this.panelSize.x, this.panelSize.y);
        fill(0);
        textSize(this.fontSize);
        text(this.country.name, this.country.mapPosition.x + this.infectedRadius * 2 + this.fontSize * .5, this.country.mapPosition.y - this.panelSize.y * .5 + this.fontSize);
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