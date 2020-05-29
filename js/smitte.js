function smitte(country)
{
    var intiativesIndex = random(0, 1000);

    var smittetryk = (country.population / country.area / 1000 + intiativesIndex - country.BNP / 1000) * (country.infected / 10000) / 100;

    return smittetryk;
}


function updateSmitte()
{
    for (var i = 0; i < countries.length; i++)
    {
        countries[i].infected += smitte(countries[i]);
    }
}
