// Spiral Animation

// const LINE_SIZE = 50;
let spiralArray = [];
let state = "unlocked";
let colorValue;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorValue = color(random(0,255), random(0,255), random(0,255));
}

// function lockedScreen() {
//   background (100);

//   let p = createP('Press T to view from the top position');
//   p.position(windowWidth/2 - 150, windowHeight/2 - 200);

//   let p1 = createP('Press R to reset the viewing position');
//   p1.position(windowWidth/2 - 150, windowHeight/2 - 100);

//   let p2 = createP('Use the mouse and scroll wheel to look around');
//   p2.position(windowWidth/2 - 150, windowHeight/2);

//   let p3 = createP('Press space to enter');
//   p3.position(windowWidth/2 - 150, windowHeight/2 + 100);

//   if (keyIsDown(69)) {
//     state = "unlocked";
//   }
// }

function unlockedScreen() {
  background(0);
  create();
  orbitControl();
  spacePressed();
  spawnLine();
  spawnLine2();
}

function draw() {
  if (state === "locked") {
    lockedScreen();
  } 
  else {
    unlockedScreen();
  }

}


function keyPressed() {
  //Press T for top view
  if (keyCode === 84) {
    let camX = 0;
    let camY = -800;
    let camZ = 0;
    camera(camX, camY, camZ, 0, 0, 0, 0, 0, 1);
  }
  //Press R to reset view
  else if (keyCode === 82) {
    let camX = 0;
    let camY = 0;
    let camZ = 800;
    camera(camX, camY, camZ, 0, 0, 0, 0, 1, 0);
  }
}

function spiralAnimation(spiral) {
  push();
  translate(spiral.x1, spiral.y1, spiral.z1);

  for (let i = 0; i < 20; i++) {
    rotateY(frameCount * 0.005);
    stroke(colorValue);
    line(0, 0, 0, spiral.x2, spiral.y2, spiral.z2);
    translate(60, 20, -10);
  }
  pop();
}

function spacePressed() {
  if (keyIsDown(32)){
    spawnSpiral();
  }

}

function spawnSpiral() {
  let someSpiral= {
    x1: 0,
    y1: random(-200, -100),
    z1: 0,
    x2: 2500,
    y2: 400,
    z2: 2500,
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
  stroke("blue");
  line(0, 0, 0, 2000, 0, 1000);
  translate(0, 0, 0);
}

function spawnLine2() {
  rotateY(frameCount * 0.005);
  stroke("green");
  line(0, 0, 0, 1500, 1000, 10);
  translate(60, 20, -10);
}