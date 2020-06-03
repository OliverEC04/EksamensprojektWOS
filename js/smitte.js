function smitte(country)
{
    var intiativesIndex = random(1, 2);

    // Udregner hvor mange nye smittede der skal være
    var smittetryk = country.population / country.area * .02 / (country.BNP / random(10, 100)) * (country.infected * .01 + 1);
    
    // Flokimunitet
    if (country.infeced >= country.population * .7)
    {
        smittetryk = random(-0.5, .0001);
    }

    else if (country.infeced >= country.population * .00001)
    {
        smittetryk = random(-0.5, .0001);
    }

    return smittetryk;
}


function dead(country)
{
    var intiativesIndex = Math.random() + 1;

    // DeadRatio = 2% af de smittede divideret med (random) intiativer - landets BNP
    var deadRatio = country.infected * 0.02

    return deadRatio
}


function updateIndex()
{
    for (var i = 0; i < countries.length; i++)
    {
        countries[i].infected += smitte(countries[i]);
        countries[i].dead = dead(countries[i]);
    }

    // Udregner Danmarks smittetryk ud fra de tiltag man laver
    var iDK = getIndex(countries, "Danmark");
    countries[iDK].initiativesIndex = (countries[iDK].udstyrIndex + countries[iDK].sengepladserIndex + countries[iDK].vaccineIndex + countries[iDK].udgangsforbudIndex) / 5000000000 + 1;
    budget += 10000;

    countries[iDK].infected = countries[iDK].infected / (random(997, countries[iDK].initiativesIndex + 1000) / 1000);
    countries[iDK].mentalHealthIndex = 1 - (countries[iDK].initiativesIndex - 1) / 4;
}
