function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  addpS(mouseX,350)
}

function addpS(x,y){
  push()
  randInt = random(0,220)
  translate(x,y)
  stroke(255, 0, 0);
  strokeWeight(2);
  fill(0);
  if (mouseIsPressed){
    fill(randInt)
  }
  ellipse(25, 25, 50, 20);
  ellipse(25, 15, 30, 30);
  pop()
}
