function setup() {
  createCanvas(400, 400);
  mX = random(360);
  mY = 0;
  speed = 5;
  mo = false;
}

function draw() {
  background(220);
  addpS(mouseX, 350);

  if (mouseIsPressed && !mo) {
    mo = true;
  }
  if (mo) {
    missile(mX, mY);
    mY = mY + speed;
  }
  if (mY > 360) {
    mY = -50;
    mX = random(360);
    mo = false;
  }
}

function addpS(x, y) {
  push();
  randInt = random(220);
  translate(x, y);
  stroke(255, 0, 0);
  strokeWeight(2);
  fill(0);
  if (mouseIsPressed) {
    fill(randInt);
  }
  ellipse(25, 25, 50, 20);
  ellipse(25, 15, 30, 30);
  pop();
}

function missile(x, y) {
  translate(x, y);
  noStroke();
  fill(255, 0, 0);
  ellipse(25, 25, 50, 10);
  ellipse(25, 25, 10, 50);
  fill(0);
  ellipse(25, 25, 20, 20);
}
