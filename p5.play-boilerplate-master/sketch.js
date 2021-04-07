function setup() {
  createCanvas(800,400);
  division = new Divison(400, 200, 50, 50);
  ground = new Ground(600,height,1200,20);
}

function draw() {
  background(255,255,255); 
  drawSprites();

}