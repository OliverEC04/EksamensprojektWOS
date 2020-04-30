function drawMap(width, position)
{
    var map = document.getElementById("map");
    if (position.x == "autoCenter")
    {
        position.x = String(windowWidth * .5 - parseInt(width) * .5) + "px";
        console.log(position.x);
    }

    map.style.width = String(width);
    map.style.marginLeft = String(position.x);
    map.style.marginTop = String(position.y);
}