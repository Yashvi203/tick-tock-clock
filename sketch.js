function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
}

function draw() {
  background(255,255,255); 
  
  stoke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}