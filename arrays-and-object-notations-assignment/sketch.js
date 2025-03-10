// Spiral Animation

// const LINE_SIZE = 50;
// let lineArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(200);

  orbitControl();

  for (let i = 0; i < 25; i++) {
    translate(60, 20, -10); // Moves each new line
    rotateY(frameCount * 0.005);
    line(0, -200, 0, 200, 100, -50);
  }
  // movingLine();
}

// function movingLine() {
//   // Rotate around the y-axis.
//   rotateY(frameCount * 0.05);

//   // Draw a line.
//   line(0, -200, 0, 200, 400, -10);
 
//   // Translate to the second point.
//   translate(60, 20, -10);
// }

function keyPressed() {
  if (keyCode === 84) {
    let camX = 0;
    let camY = -800;
    let camZ = 0;
    camera(camX, camY, camZ, 0, 0, 0, 0, 0, 1)
  }
}