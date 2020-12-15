class Player{
  constructor(){
      this.image = loadImage("shooter.png");
      this.x = width/2;
      this.y = height-40;
      this.lives = 3;
      this.score = 0;
      this.bullets = []
  }
  display(){
    imageMode(CENTER)
    image(this.image,this.x,this.y,40,40);
  }
  moveRight(){
      this.x = this.x + 10;
  }
  moveLeft(){
    this.x = this.x - 10;
  }
  shoot(){
    var bullet = new Bullet(this.x,this.y);
    //bullet.velocity.X = 10;
    this.bullets.push(bullet);
  }
  draw(){
     for(let bullet of this.bullets){
       bullet.draw();
       bullet.y = bullet.y-10;
       //this.updateBullets(bullet.x,bullet.y)
     }
  }
  hasHitAlien(bullet){
   return invader.checkCollision(bullet.x,bullet.y);
  }
  updateBullets(){
     //invader.checkCollision(x,y)
     for(var i = this.bullets.length-1;i>=0;i--){
       var currentBullet = this.bullets[i]
       if(this.hasHitAlien(currentBullet)){
         this.score = this.score+1
         this.bullets.slice(i,1)
         break;
       }
     }
  }
  displayScore(){
     textSize(20)
     fill("red")
     text("score:"+this.score,500,50)
  }
  displaylives(){
   if(invader.detectCollision(this.x,this.y)){
     this.lives-=1
   }
   textSize(20)
   fill("red")
   text("lives:"+this.lives,40,30)
  }
}