var ball;
var bat;








function setup() {
  createCanvas(800,400);
  
  ball = createSprite(200, 200, 50, 50);
  ball.shapeColor="blue";
  ball.debug = true;
  bat = createSprite(350,200,40,80);
  bat.shapeColor="pink";
  bat.debug = true;
}

function draw() {
  background(255,255,255);  
  bat.x = World.mouseX;
  bat.y = World.mouseY;
  if (bat.x-ball.x < ball.width/2 + bat.width/2 && ball.x-bat.x < ball.width/2 + bat.width/2 && bat.y-ball.y < ball.height/2 + bat.height/2 && ball.y-bat.y < ball.height/2 + bat.height/2){
    ball.shapeColor="red";
    bat.shapeColor="green";
}
 else
 {
  ball.shapeColor="blue";
  bat.shapeColor="pink";
 }




 console.log(bat.x-ball.x);

  
  drawSprites();
}