// Finder index-nummeret på et objekt i et array ud fra objektets navn
function getIndex(array, value)
{
    for (var i = 0; i < array.length; i++)
    {
        if (array[i].name == value)
        {
            return i;
        }
    }
}


// Returner true hvis man klikker på det angivne område
function click(size, position, active)
{
    if (isClicked == false && mouseIsPressed && position.x < mouseX && mouseX < position.x + size.x && position.y < mouseY && mouseY < position.y + size.y)
    {
        isClicked = true;

        if (active == false)
        {
            active = true;
        }
        else if (active)
        {
            active = false;
        }
    }
    else if (mouseIsPressed == false)
    {
        isClicked = false;
    }

    return active;
}


// Laver et velkommen-vindue når spillet starter
function welcome()
{
    tick++;

    var window = new Window({x: mapWidth * 2/3, y: mapWidth * 2/3}, {name: "Velkommen til Virus Knockout", description: "Du er den danske regering i en verden der er hårdt ramt af virus. Din mission er at holde smitte trykket lavt og beskytte danmark, mod den usynlige fjende. På venstre side ser du statistiker, her kan du holde øje med dit lands mentale helbred, økonomi og smittetryk, Men også hvordan virus hærger i resten af europa. På højre side kan du investere landets penge og på den måde holde smitte trykket ned. “ HUSK AT INVESTERE PENGENE GODT. SÅ VI KAN KNOCKOUT VIRUSSEN !!! “. "});

    if (tick < 100)
    {
        window.draw();
    }
}


function startGame()
{
    console.log("start");
    fps = 30;
    document.getElementById("start").style.display = "none";
}