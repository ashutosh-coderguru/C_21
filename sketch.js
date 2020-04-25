function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(400, 200, 50, 50);
 rect1 = createSprite(400, 300, 50, 50);
  rect2 = createSprite(600,300, 50, 50);
  rect3 = createSprite(50,100, 50, 50);
  rect4 = createSprite(750,100, 50, 50);
  rect3.velocityX = 5;
  rect4.velocityX = -5;
  rect3.shapeColor="yellow";
  rect4.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(istouching(movingrect,rect1)){
    rect1.shapeColor="red";
    movingrect.shapeColor="red";
  }
else{  rect1.shapeColor="green";
movingrect.shapeColor="green";

}
 bounceoff(rect3,rect4);
  drawSprites();
}
