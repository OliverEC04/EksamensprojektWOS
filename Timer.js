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
        this.scounter++
        this.sekund = (this.sekund + this.scounter)/30
      
      if (this.sekund>=60)
      {
        this.scounter = 0
        this.sekund = 0
        this.minut = minut+1
      }

        text(String(this.minut) + ":" + String(round(this.sekund)), windowWidth/12, windowHeight/20)
    }
}