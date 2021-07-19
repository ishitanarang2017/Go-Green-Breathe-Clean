var bg,bgsprite;
var human,man;
function preload(){
  bg=loadImage("bg.jpg");
  man=loadAnimation("man1.png","man2.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bgsprite=createSprite(width/2, height/2, width, height);
  bgsprite.addImage(bg);
  bgsprite.velocityX=-3;
  human=createSprite(300,height-50,50,50);
  human.addAnimation("walking",man)
}

function draw() {
  background(255,255,255);
  if(bgsprite.x<-300){
    bgsprite.x=width/2
  }  
  console.log(bgsprite.x)
  drawSprites();
}