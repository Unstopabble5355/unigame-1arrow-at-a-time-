var zombieImg,Zombie,zomgroup;
var unicorn,UnicornAnimation,unicornImg;
var ground,groundImg;

var play=1;
var end=0;
var gameState=play;
var score;
var arrowImg,arrow;
function preload(){
zombieImg=loadImage("zombie.png");
UnicornAnimation=loadAnimation("unicorn1.png","unicorn2.png");
unicornImg=loadImage("uni.png")
groundImg=loadImage("ground2.png");
arrowImg=loadImage("ARROW.png");

}

function setup() {
  createCanvas(600,200)

  ground=createSprite(200,180,400,20);
ground.addImage("ground",groundImg)
ground.velocityX=-3;

unicorn=createSprite(50,160,20,50);
unicorn.addAnimation("running",UnicornAnimation);
unicorn.scale=0.1;
 
zomgroup=new Group();
 argroup=new Group()
 score=0;
 
}
function draw() {
background("cyan");

text("score:"+score,367,21);
if (gameState===play){
  if(ground.x<0){
    ground.x=ground.width/2;
    }

    if(frameCount%60===0){
      ground.velocityX=ground.velocityX-0.5;
      zomgroup.velocityX=zomgroup.velocityXeach-0.5;
    }

    Zombiespawn();

    unicorn.addAnimation(UnicornAnimation);
  //if(keyDown(RIGHT_ARROW)){
   // arrowS();
   //}
   if(argroup.isTouching(zomgroup)){
    score=score+5;
     zomgroup.destroyEach();
   }

if(zomgroup.isTouching(unicorn)){
gameState=end;
score=score;

}
}

else if(gameState===end){
ground.velocity=0;
zomgroup.destroyEach();
unicorn.destroy();
textSize(20);
background("black");
text("gameOver!  Unicorn died",200,100);

}
 
  



  

    drawSprites();
}

function Zombiespawn(){
if(frameCount%100===0){
    zombie=createSprite(600,160,10,40);
    zombie.addImage(zombieImg);
    zombie.velocityX=-3;
zombie.scale=0.1;
zomgroup.add(zombie);

}
}
function arrowS(){
arrow=createSprite(unicorn.x+80,unicorn.y);
arrow.addImage(arrowImg);
arrow.scale=0.2;

arrow.velocityX=3;
argroup.add(arrow);
}
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
arrowS();
  }
}