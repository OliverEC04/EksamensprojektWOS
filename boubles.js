class Boubles
{
    constructor(position, country)
    {
        this.position = position;
        this.country = country;
    }

    draw()
    {
        fill(255, 0, 0);
        circle(this.position.x, this.position.y, 10);
    }
}