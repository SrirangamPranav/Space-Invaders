class Invader{
  constructor(){
    //this.image = loadImage("invader1.png");
    this.y = 50;
    this.rowCount = 8;
    this.aliens = [];
    this.alienbullets=[]
  }
  createAleins(){
   var x = 50;
   var y = this.y;
    for(var i=0;i<this.rowCount;i++){
      x = x+50;
      y = this.y;
      for(var j=0;j<8;j++){
       this.aliens.push(new alien(x,y,30,30))
        y = y+40;
      }
    }
  }
  display(){
   var numberofaliens = this.rowCount*8;
    for(var i=0;i<numberofaliens;i++){
      if(this.aliens[i]){
        this.aliens[i].initializeAlien();
      } 
    }
  }
  checkCollision(x,y){
   for(var i=this.aliens.length-1;i>=0;i--){
       var CurrentAlien = this.aliens[i]
      // console.log(dist(x,y,CurrentAlien.x,CurrentAlien.y))
       if(dist(x,y,CurrentAlien.x,CurrentAlien.y)<=15){
         this.aliens.splice(i,1)
         console.log("hi")
         return true;
       }
    }
   return false;
  }
  makeBottomAlienShoot(){
    //var randomAlien = Math.round(random(56,63))
    var alienpos = [];
    for(var i=0;i<this.aliens.length;i++){
      if(this.aliens[i].y>=330){
         alienpos.push(i)
      }
    }
    var randomAlien = random(alienpos)
    console.log(randomAlien)
    var selectedAlien = this.aliens[randomAlien]
    if(selectedAlien){
      var bullet = new Bullet(selectedAlien.x,selectedAlien.y)
      this.alienbullets.push(bullet)
    }
  }
  drawAlienBullet(){
     for(var i =0;i<this.alienbullets.length;i++){
      this.alienbullets[i].draw();
      this.alienbullets[i].y+=10
     }
  }
  detectCollision(x,y){
    for(var i =this.alienbullets.length-1;i>=0;i--){
     var CurrentAlienBullet = this.alienbullets[i]
      if(dist(x,y,CurrentAlienBullet.x,CurrentAlienBullet.y)<=20){
        this.alienbullets.splice(i,1)
        return true;    
      }
    }
  return false;
  }
}