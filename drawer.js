function drawMap(width, position)
{
    var mapWidth = width;
    var map = document.getElementById("map");
    if (position.x == "autoCenter")
    {
        position.x = String(windowWidth * .5 - parseInt(width) * .5) + "px";
    }

    var diff = map.clientHeight - height;
    var newMapWidth;
    if (diff < 0)
    {
        newMapWidth = String(parseInt(mapWidth) - diff) + "px";
        console.log(diff);
    }
    else
    {
        newMapWidth = mapWidth;
    }

    map.style.width = String(newMapWidth);
    map.style.marginLeft = String(position.x);
    map.style.marginTop = String(position.y);
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