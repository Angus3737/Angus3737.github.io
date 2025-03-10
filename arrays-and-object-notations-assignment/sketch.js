// Spiral Animation

// const LINE_SIZE = 50;
// let lineArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(200);

  movingLine();
}

function movingLine() {
  // Rotate around the y-axis.
  rotateY(frameCount * 0.01);

  // Draw a line.
  line(0, -400, 0, 400, 0, -10);
 
  // Translate to the second point.
  translate(60, 20, -10);
}