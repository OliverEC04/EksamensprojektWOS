function drawElements(mapWidth, mapPos)
{
    var map = document.getElementById("map");
    var logo = document.getElementById("logo");
    var start = document.getElementById("start");
    var diff = parseInt(mapWidth) - windowSize.y;

    if (diff > 0)
    {
        mapWidth = String(parseInt(mapWidth) - diff) + "px";
    }

    map.style.width = String(mapWidth);
    map.style.marginLeft = String(mapPos.x);
    map.style.marginTop = String(mapPos.y);

    logo.style.height = String(mapPos.y) + "px";
    logo.style.marginLeft = String(windowSize.x * .5 - logo.clientWidth * .5) + "px";

    start.style.marginLeft = String(windowSize.x * .5 - start.clientWidth * .5) + "px"; 
    start.style.marginTop = String(windowSize.y * .4) + "px";
}