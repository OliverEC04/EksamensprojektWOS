class Timer
{
    constructor()
    {
        this.sekund = 0;
        this.minut = 0;
        this.scounter = 0
  
    }


    draw() 
    {
        scounter++
        this.sekund = (this.sekund + scounter)/30
      
      if (this.sekund>=60)
      {
        this.scounter = 0
        this.sekund = 0
        this.minut = minut+1
      }

        text(String(this.minut) + ":" + String(round(sekund)), 100,200)
    }
}