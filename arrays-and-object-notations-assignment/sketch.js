// Spiral Animation

// const LINE_SIZE = 50;
let spiralArray = [];
let state = ["medium"]

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(200);
  for (let spiral of spiralArray) {
    spiralAnimation(spiral)
  }

  orbitControl();
}


function keyPressed() {
  if (keyCode === 84) {
    let camX = 0;
    let camY = -800;
    let camZ = 0;
    camera(camX, camY, camZ, 0, 0, 0, 0, 0, 1);
  }
}

function spiralAnimation(spiral) {
  push();
  translate(spiral.x1, spiral.y1, spiral.z1); // Moves each new line

  for (let i = 0; i < 20; i++) {
// Moves each new line
    rotateY(frameCount * 0.005);
    line(0, 0, 0, spiral.x2, spiral.y2, spiral.z2);
    translate(60, 20, -10);
  }
  pop();
}

function mousePressed() {
  spawnSpiral();
}

function spawnSpiral() {
  let someSpiral= {
    x1: 0,
    y1: random(-200, -100),
    z1: 0,
    x2: random(500, 1500),
    y2: random(500, 1500),
    z2: random(-300, 300),
  };
  spiralArray.push(someSpiral);
}