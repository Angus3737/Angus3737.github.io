// Solar System Simulation
// Angus Li
//


let sunRaysArray = [];
let planetsArray = [];
let state = "locked";
let colorValue;
let p;
let p1;
let p2;
let p3;
let p4;
let p5;
let p6;
// import starsTexture from '../img/starsTexture.jpg';

// const cubeTextureLoader = new THREE.CubeTextureLoader();
// scene.background = cubeTextureLoader.load([
//   starsTexture,
//   starsTexture,
//   starsTexture,
//   starsTexture,
//   starsTexture,
//   starsTexture,  
// ]);


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //title
  // p.style("font-size", "20px"); 

  p = createP("Solar Sytem Simlation");
  p.position(windowWidth/2 - 150, windowHeight/2 - 250);

  //instructions
  p1 = createP('Press T to view from the top position');
  p1.position(windowWidth/2 - 150, windowHeight/2 - 150);

  p2 = createP('Press R to reset the viewing position');
  p2.position(windowWidth/2 - 150, windowHeight/2 - 100);

  p3 = createP('Press Y to add the suns rays');
  p3.position(windowWidth/2 - 150, windowHeight/2 - 50);
  
  p4 = createP('Press ENTER to spawn planets');
  p4.position(windowWidth/2 - 150, windowHeight/2);

  p5 = createP('Use the mouse and scroll wheel to look around');
  p5.position(windowWidth/2 - 150, windowHeight/2 + 100);

  p6 = createP('Press E to enter');
  p6.position(windowWidth/2 - 150, windowHeight/2 + 150);
}

function lockedScreen() {
  // creates introscreen with instructions

  background (100);

  fill("white");
  rect(-200, -250, 400, 550);
  fill(0);

  if (keyIsDown(69)) {
    state = "unlocked";
  }
}

function unlockedScreen() {
  //call functions
  background(0);
  create();
  orbitControl();
  spawnSun();
}

function draw() {
  //checking the state
  if (state === "locked") {
    lockedScreen();
  } 
  else {
    unlockedScreen();
    //hide all the text
    p.hide();
    p1.hide();
    p2.hide();
    p3.hide();
    p4.hide();
    p5.hide();
    p6.hide();
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
  //press Y to spawn sun rays
  else if (keyCode === 89) {
    createSunRays();
  }
  //press ENTER to spawn planets
  else if (keyCode === 13) {
    createPlanets();
  }
}


function spawnSun() {
  //draws the sun in the center
  rotateY(frameCount * 0.005);
  //orange stroke
  stroke(255, 72, 0);
  //yellow fill
  fill(255, 170, 0);
  sphere(110, 21);
} 

function sunRaysAnimation(sunRays) {
  
  push();
  translate(sunRays.x1, sunRays.y1, sunRays.z1);

  for (let i = 0; i < 37; i++) {
    rotateY(frameCount * 0.01);
    stroke("yellow");
    line(0, 0, 0, sunRays.x2, sunRays.y2, sunRays.z2);
    translate(60, 5, 0);
  }
  pop();
}


function createSunRays() {
  //sun rays notation
  let somesunRays= {
    x1: 25,
    y1: -90,
    z1: 0,
    x2: 150,
    y2: 10,
    z2: 200,
  };
  sunRaysArray.push(somesunRays);
}

function create() {
  for (let sunRays of sunRaysArray) {
    sunRaysAnimation(sunRays);
  }
  for (let planets of planetsArray) {
    planetsOrbit(planets);
  }
}

function createPlanets() {
  // let orbitRadius = random(300, 1000);
  // let startAngle = random(0, 2 * Math.PI);

  //planet notation
  let somePlanets= {
    r: random(20, 90),
    angle: random(0, 2 * Math.PI),
    orbitRadius: random(300, 1000),
    speed: 0.01,
    y: 0,
    detailX: random(0, 10),
    detailY: random(0, 10),
    colorValue: color(random(0,255), random(0,255), random(0,255)),
  };
  planetsArray.push(somePlanets);
}

function planetsOrbit(planets) {
  
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

function mousePressed() {
  for (let i = planetsArray.length - 1; i >= 0; i--) {
    let planet = planetsArray[i];

    let planetPosition = createVector(planet.orbitRadius * cos(planet.angle),
  planet.y, planet.orbitRadius * sin(planet.angle));

    let screenPosition = screenPosition(planetPosition.x, planetPosition.y, planetPosition.z);

    let distance = dist(mouseX, mouseY, screenPosition.x, screenPosition.y);

    //if the planet is being clicked on
    if (distance < planet.r) {
      planetsArray.splice(i, 1);
    }
  }
}