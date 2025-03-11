// Spiral Animation

// const LINE_SIZE = 50;
let spiralArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(200);
  for (let spiral of spiralArray) {
    spiral();
  }

  orbitControl();
  spiral();

}


function keyPressed() {
  if (keyCode === 84) {
    let camX = 0;
    let camY = -800;
    let camZ = 0;
    camera(camX, camY, camZ, 0, 0, 0, 0, 0, 1)
  }
}

function spiral() {
  for (let i = 0; i < 25; i++) {
    translate(60, 20, -10); // Moves each new line
    rotateY(frameCount * 0.005);
    line(x1, y1, z1, x2, y2, z2);
  }
}

function mousePressed() {
  spawnSpiral()
}

function spawnSpiral() {
  let someSpiral= {
    x1: 0,
    y1: -200,
    z1: 0,
    x2: 200,
    y2: 100,
    z2: -50,
  };
  spiralArray.push(someSpiral);
}