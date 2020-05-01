class Timer
{
    constructor()
    {
        this.sekund = 0;
        this.minut = 0;
        this.scounter = 0;
  
    }


    draw() 
    {
        this.scounter++
        this.sekund = (this.sekund + this.scounter)/30
      
      if (this.sekund>=60)
      {
        this.scounter = 0
        this.sekund = 0
        this.minut ++
      }

      stroke(0,0,0)
      fill(255,255,255)
      textSize(35)
      strokeWeight(2)
      textFont("Helvitica")  
      text(String(this.minut) + " : " + String(round(this.sekund)), windowSize.x/18, windowSize.y/20)
    }
}