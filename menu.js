class Menu
{
    constructor(name, onClick)
    {
        this.name = name;
        this.onClick = onClick;
    }

    draw()
    {
        strokeWeight(5)
        line(windowWidth/6, 0, windowWidth/6, windowHeight) // Data
        line(0,windowHeight/10, windowWidth, windowHeight/10) // Top bar
        
    }
}