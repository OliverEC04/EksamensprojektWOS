function drawMap(width, position)
{
    var map = document.getElementById("map");

    map.style.width = String(width);
    map.style.marginLeft = String(position.x);
    map.style.marginTop = String(position.y);
}