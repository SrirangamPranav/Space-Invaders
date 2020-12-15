class alien{
  constructor(x,y,width,height){
    this.image = loadImage("alien.png")
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }
  initializeAlien(){
    imageMode(CENTER)
    image(this.image,this.x,this.y,this.width,this.height);
  }
}