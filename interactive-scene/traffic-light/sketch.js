// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let waitTime = 2000;
let lastSwitchTime = 0;
let state = "red";

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  switchLights();
}

function switchLights(){
  if (state === "red") {
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top
    fill(255);
    ellipse(width/2, height/2 + 65, 50, 50); //bottom    
    if (millis() > lastSwitchTime + 2*waitTime) {
      state = "green";
      lastSwitchTime = millis();
    }
  }
 
  else if (state === "green") {
    fill(255);
    ellipse(width/2, height/2, 50, 50); //middle
    fill('green');
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
    if (millis() > lastSwitchTime + 3*waitTime) {
      state = "yellow";
      lastSwitchTime = millis();
    }
  }
  else if (state === "yellow") {
    fill(255);
    ellipse(width/2, height/2 - 65, 50, 50); //top
    fill('yellow');
    ellipse(width/2, height/2, 50, 50); //middle
    if (millis() > lastSwitchTime + waitTime) {
      state = "red";
      lastSwitchTime = millis();
    }
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}