function setup() {
  createCanvas(400, 400);
  mX = random(360);
  mY = 0;
  speed = 5;
  mo = false;
  collide = false;
  cD = 40;
}

function draw() {
  background(60);
  //dStar()
  addpS(mouseX, 350);

  if (mouseIsPressed && !mo) {
    mo = true;
  }
  if (mo) {
    missile(mX, mY);
    mY = mY + speed;
    let tH = mY + cD > 350;
    let tL = mouseX + cD < mX;
    let tR = mX + cD < mouseX;
    if (tH && !tL && !tR) {
      collide = true;
      rM();
    }
  }
  if (mY > 400) {
    rM();
  }
}

function addpS(x, y) {
  push();
  randInt = random(220);
  translate(x, y);
  stroke(255, 0, 0);
  strokeWeight(2);
  if (collide && !mo) {
    fill(220);
  } else {
    fill(0);
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

function rM() {
  mY = -50;
  mX = random(360);
  mo = false;
}

function dStar() {
  fill(220);
  for (let i = 0; i < 25; i++) {
    //push();
    ellipse(random(width), random(height), 10);
    //pop();
  }
}
