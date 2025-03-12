// Spiral Animation

// const LINE_SIZE = 50;
let spiralArray = [];
let state = ["medium"];
// let color = (random(0,255), random(0,255), random(0,255));
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  create();
  orbitControl();
  spawnLine();
  spawnLine2();
}


function keyPressed() {
  if (keyCode === 84) {
    let camX = 0;
    let camY = -800;
    let camZ = 0;
    camera(camX, camY, camZ, 0, 0, 0, 0, 0, 1);
  }
}

function keyPressed2() {
  if (keyCode === 82) {
    let camX = 0;
    let camY = 0;
    let camZ = 800;
    camera(camX, camY, camZ, 0, 0, 0, 0, 0, 1);
  }
}

function spiralAnimation(spiral) {
  push();
  translate(spiral.x1, spiral.y1, spiral.z1);

  for (let i = 0; i < 20; i++) {
    rotateY(frameCount * 0.005);
    stroke("red");
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
    x2: random(1000, 2000),
    y2: random(1000, 2000),
    z2: random(-300, 300),
  };
  spiralArray.push(someSpiral);
}

function create() {
  for (let spiral of spiralArray) {
    spiralAnimation(spiral);
  }
}

function spawnLine() {
  rotateY(frameCount * 0.005);
  stroke("green");
  line(0, 0, 0, 2000, 1000, 10);
  translate(60, 20, -10);
}

function spawnLine2() {
  rotateY(frameCount * 0.005);
  stroke("green");
  line(0, 0, 0, 1500, 1000, 10);
  translate(60, 20, -10);
}