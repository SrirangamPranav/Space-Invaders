var invader;
var player1;
var gameState = "Start";
var shootSound;
var gameendsound;
function setup() {
  createCanvas(600,600);
   invader = new Invader();
   invader.createAleins();
   player1 = new Player();
   gameendsound = new Audio("gameend sound.wav")
   //gameendsound.loop = false;
}
function preload(){
   shootSound = loadSound("firing sound.mp3")
}
function draw() {
  background(0);
  if(gameState === "Start"){
 // gameendsound.pause();
  //gameendsound.currentTime = 0;
  invader.display();
  player1.display();
  //keyPressed();
  player1.draw();
  player1.updateBullets();
  player1.displayScore();
  player1.displaylives();
  if(frameCount%30 === 0){
    invader.makeBottomAlienShoot();
  }
  invader.drawAlienBullet();
  if(player1.lives === 0){
    gameState = "end";
    gameendsound.play();
  }
 }
 else if(gameState === "end"){
      textSize(30)
      fill("red")
      text("Game Over",200,300)
      delete player1;
      delete invader;
      //console.log(player1);
      
      if(keyCode === UP_ARROW){
        gameState = "Start"
        //player1.lives = 3;
        //player1.score = 0;
        invader = new Invader();
        invader.createAleins();
        player1 = new Player();
      }
 }
}
function keyPressed(){
  if(keyCode === RIGHT_ARROW || keyCode === 88){
    player1.moveRight();
  }
  else if(keyCode === LEFT_ARROW || keyCode === 90){
     player1.moveLeft();
  }
  if(keyCode === 32){
    player1.shoot();
    shootSound.play();
  }
}
