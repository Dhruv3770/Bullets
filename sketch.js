  
var car, wall;

var weight, speed;

function setup() {
  createCanvas(1600,400);

speed=random(223, 321);
weight=random(30, 52);
thickness=random(20, 80);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "blue";
  wall.debug = true;
  car = createSprite(50, 150,50,50);
  car.shapeColor = "white";
  car.debug = true;

  car.velocityX = speed;
  //fixedRect.velocityY = +5;

//  car.collide(wall);
}

function draw() {
  background(0,0,0);  
if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
if(damage>100000000){
car.shapeColor ="red";
}
if(damage<40000000){
car.shapeColor="green";
}
}
  drawSprites();
}