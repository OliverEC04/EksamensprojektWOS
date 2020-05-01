class Boubles
{
    constructor(country)
    {
        this.country = country;
    }

    draw()
    {
        fill(255, 0, 0);
        circle(this.country.mapPosition.x, this.country.mapPosition.y, this.country.infected / this.country.population * 10000);
        fill(0);
        circle(this.country.mapPosition.x, this.country.mapPosition.y, this.country.dead / this.country.population * 10000);
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