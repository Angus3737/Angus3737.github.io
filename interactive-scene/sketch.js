let x;
let y;
let rectWidth = 75;
let rectHeight= 60;
let dx;
let dy;
let r;
let g;
let b;
let logo;

function preload(){
  logo = loadImage("download.png")
}

function setup() {
  createCanvas(350, 400);
  x = width/2;
  y = height/2;
  dx = random(-5, 5);
  dy = random(-5, 5);
  noStroke();
  changeBallColor();
}

function draw() {
  background(220);
  moveBall();
  bounceIfNeeded();
  displayBall();
}

function moveBall() {
  //move ball
  x += dx;   //x = x + dx;
  y += dy;
}

function bounceIfNeeded() {
  //bounce if needed
  if (x> width-rectWidth|| x < 0) {
    dx *= -1;
    changeBallColor();
    console.log("bounce " + x);
  }
  
  if (y > height - rectHeight || y < 0) {
    dy *= -1;
    changeBallColor();
  }
}

function displayBall() {
  // //display ball
  // fill(r, g, b);
  // rect(x, y, rectWidth, rectHeight );
  image(logo, x, y, rectWidth, rectHeight);
}

function changeBallColor() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}
