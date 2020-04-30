function drawMap(mapWidth, mapPos)
{
    var map = document.getElementById("map");
    var diff = parseInt(mapWidth) - height;

    if (diff > 0)
    {
        mapWidth = String(parseInt(mapWidth) - diff) + "px";
    }

    if (mapPos.x == "autoCenter")
    {
        mapPos.x = String(windowWidth * .5 - parseInt(mapWidth) * .5) + "px";
    }

    map.style.width = String(mapWidth);
    map.style.marginLeft = String(mapPos.x);
    map.style.marginTop = String(mapPos.y);
}

var sCounter = 0; // skal fjernes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var mCounter = 0;

function timer()
{

    sCounter++;
    mCounter++;
    sekund = round(sCounter/30);
    minut = mCounter/30/60;

    if (sekund >= 60)
    {
        sekund = 0
    }
    
    textFont('Helvetica');
    textSize(22);
    text(String(minut) + ":" + String(sekund), windowWidth/20, windowHeight/10-5)

}