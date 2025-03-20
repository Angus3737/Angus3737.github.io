// Arrays and Object Notations Assignment - Solar System Simulation
// Angus Li
// March 20, 2025
// Purpose: Creating a simulation of a fictional solar system including the sun and orbiting planets
// Extras for Experts: I explored WEBGL with 3d elements and added sound effects


let sunRaysArray = [];
let planetsArray = [];
let state = "locked";
let colorValue;

//html text
let p;
let p1;
let p2;
let p3;
let p4;
let p5;

function preload() {
  //load in sound effects

  audioDisappear = createAudio("disappearsound.wav");
  audioMajestic = createAudio("orchestratransition.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //instructions

  p = createP('Press T to view from the top position');
  p.position(windowWidth/2 - 150, windowHeight/2 - 200);

  p1 = createP('Press R to reset the viewing position');
  p1.position(windowWidth/2 - 150, windowHeight/2 - 150);

  p2 = createP('Press Y to add the suns rays');
  p2.position(windowWidth/2 - 150, windowHeight/2 - 100);
  
  p3 = createP('Press ENTER to spawn planets');
  p3.position(windowWidth/2 - 150, windowHeight/2 - 50);

  p4 = createP('Use the mouse and scroll wheel to look around');
  p4.position(windowWidth/2 - 150, windowHeight/2 + 50);

  p5 = createP('Press E to enter');
  p5.position(windowWidth/2 - 150, windowHeight/2 + 100);
}

function lockedScreen() {
  //background for the instruction texts

  background (100);
  fill("white");
  rect(-200, -250, 400, 500);
  fill(0);

  //switch to the simulation when E is pressed

  if (keyIsDown(69)) {
    state = "unlocked";
  }
}

function unlockedScreen() {
  //call functions

  background(0);
  updateSimulation();
  orbitControl();
  spawnSun();

  //hide all the text

  p.hide();
  p1.hide();
  p2.hide();
  p3.hide();
  p4.hide();
  p5.hide();
}

function draw() {
  //check the state and display the correct screen

  if (state === "locked") {
    lockedScreen();
  } 
  else {
    unlockedScreen();
  }

}

function keyPressed() {
  //press T for top view
  if (keyCode === 84) {
    let camX = 0;
    let camY = -800;
    let camZ = 0;
    camera(camX, camY, camZ, 0, 0, 0, 0, 0, 1);
  }
  //press R to reset view
  else if (keyCode === 82) {
    let camX = 0;
    let camY = 0;
    let camZ = 800;
    camera(camX, camY, camZ, 0, 0, 0, 0, 1, 0);
  }
  //press Y to spawn sun rays, with sound effect
  else if (keyCode === 89) {
    audioMajestic.play();
    createSunRays();
  }
  //press ENTER to spawn planets
  else if (keyCode === 13) {
    createPlanets();
  }
  //press Backspace to get rid of previous planet, with sound effect
  else if (keyCode === 8) {
    audioDisappear.play();
    planetsArray.pop();
  }
}


function spawnSun() {
  //draws the sun in the center with orange stroke and yellow fill

  rotateY(frameCount * 0.005);
  stroke(255, 72, 0);
  fill(255, 170, 0);
  sphere(130, 21);
} 

function createSunRays() {
  //sun rays notation

  let somesunRays= {
    x1: 25,
    y1: -110,
    z1: 0,
    x2: 200,
    y2: 10,
    z2: 200,
  };
  sunRaysArray.push(somesunRays);
}

function sunRaysAnimation(sunRays) {
  //creates 43 rays of light that spiral

  push();

  translate(sunRays.x1, sunRays.y1, sunRays.z1);

  for (let i = 0; i < 43; i++) {
    rotateY(frameCount * 0.01);
    stroke("yellow");
    line(0, 0, 0, sunRays.x2, sunRays.y2, sunRays.z2);
    translate(60, 5, 0);
  }
  pop();
}


function updateSimulation() {
  //updates and renders the sun rays and planets

  for (let sunRays of sunRaysArray) {
    sunRaysAnimation(sunRays);
  }
  for (let planets of planetsArray) {
    planetsOrbit(planets);
  }
}

function createPlanets() {
  //planet notation

  let somePlanets= {
    r: random(20, 90),
    angle: random(0, 2 * Math.PI),
    orbitRadius: random(300, 3000),
    speed: 0.01,
    y: 0,
    colorValue: color(random(0,255), random(0,255), random(0,255)),
  };
  planetsArray.push(somePlanets);
}

function planetsOrbit(planets) {
  //spawns in a planet that orbits around the sun

  planets.angle += planets.speed;

  let orbitX = planets.orbitRadius * cos(planets.angle);
  let orbitZ = planets.orbitRadius * sin(planets.angle);

  push();

  translate(orbitX, planets.y, orbitZ);
  rotateY(frameCount * 0.01);
  stroke(51);
  fill(planets.colorValue);
  sphere(planets.r);

  pop();
}