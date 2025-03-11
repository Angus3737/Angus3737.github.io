// Perlin Noise Demo
// Moving a circle

let x;
let y;
let timeX = 0;
let timeY = 1000;
let deltaTime = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  fill("black");
  x = noise(timeX) * width;
  y = noise(timeY) * height;
  circle(x, y, 50); 

  timeX += deltaTime;
  timeY += deltaTime;
}
