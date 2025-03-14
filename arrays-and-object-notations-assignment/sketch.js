// Solar System Animation

// const LINE_SIZE = 50;
let sunRaysArray = [];
let state = "unlocked";
let colorValue;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorValue = color(random(0,255), random(0,255), random(0,255));
}

function lockedScreen() {
  // background (100);

  // let p = createP('Press T to view from the top position');
  // p.position(windowWidth/2 - 150, windowHeight/2 - 200);

  // let p1 = createP('Press R to reset the viewing position');
  // p1.position(windowWidth/2 - 150, windowHeight/2 - 100);

  // let p2 = createP('Use the mouse and scroll wheel to look around');
  // p2.position(windowWidth/2 - 150, windowHeight/2);

  // let p3 = createP('Press space to enter');
  // p3.position(windowWidth/2 - 150, windowHeight/2 + 100);

  // fill("white");
  // rect(0, 0, 300, 500);
  // fill(0);
  // textSize(24);
  // text("Press T to view from the top position", 0, 0);

  if (keyIsDown(69)) {
    state = "unlocked";
  }
}

function unlockedScreen() {
  background(0);
  create();
  orbitControl();
  spacePressed();
  spawnLine();
  spawnSun();
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
  else if (keyCode === 89) {
    spawnsunRays();
  }
  else if (keyCode === 13) {
  
    spawnPlanets();
  }
}

function spawnSun() {
  //draws the sun in the center
  rotateY(frameCount * 0.005);
  stroke("orange");
  translate(0, 0, 0);
  sphere(110);
}

function sunRaysAnimation(sunRays) {
  push();
  translate(sunRays.x1, sunRays.y1, sunRays.z1);

  for (let i = 0; i < 25; i++) {
    rotateY(frameCount * 0.01);
    stroke("yellow");
    line(0, 0, 0, sunRays.x2, sunRays.y2, sunRays.z2);
    translate(60, 5, 0);
  }
  pop();
}

function spacePressed() {
  //spawns sun rays when space is pressed
  // if (keyIsDown(89)){
  //   spawnsunRays();
  // }

}

//edit this one and the new spawning function, change name

function spawnsunRays() {
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
}

function spawnLine() {
  rotateY(frameCount * 0.005);
  stroke("blue");
  line(0, 0, 0, 2000, 0, 1000);
  translate(0, 0, 0);
}



function spawnPlanets() {
  rotateY(frameCount * 0.01);
  stroke("yellow");
  line(0, 0, 0, sunRays.x2, sunRays.y2, sunRays.z2);
  translate(60, 5, 0);
}