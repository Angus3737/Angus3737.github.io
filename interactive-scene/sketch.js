let cutePotato;
let sadheart;
let smallheart;
let button;
let hearts = [];
let gravity = 0.1;
let dx = 4;
let dy = 4;
let x = 250;
let y = 150;
let boxWidth = 150;
let boxHeight = 100;
let newColor = "white";
let state = "notAnswered";

function setup() {
  createCanvas(600, 500);
  textSize(32);
  fill(0);
  stroke(0);
  strokeWeight(2);
  imageMode(CENTER);
  x = 280;
  y = 240;
  //no button
  button = createButton(' No  ');
  button.position(400, 310);
  //when clicked
  button.mousePressed(setupNewHearts);
  //text
  let p = createP('Press space to change background');
  p.position(100, 430);

}

function preload() {
  cutePotato = loadImage("cutepotato.png");
  sadheart = loadImage("sadheart.png");
  smallheart = loadImage("smallheart.png");
}

function draw() {
  //draw background
  background(newColor)
  drawBoxes();
  printText();
  display();

  //interactive functions
  move();
  newHearts();
  miniHearts();
  switchPages();
}

function drawBoxes() {
  //green yes box
  fill(32, 139, 58);
  rect(100, 250, boxWidth, boxHeight);
  
  //red no box
  // fill(239, 35, 60);
  // rect(350, 250, boxWidth, boxHeight);
}

function printText() {
  //texts
  fill(0);
  textSize(32);
  text("Yes", 150, 310);
  // text("No", 400, 310);
  text("Will You Be My Valentines??", 100, 120);
  textSize(16);
  
}

function keyPressed() {
  //when space is pressed, a random color will be the background
  if (keyCode === 32) {
    let theColors = [
      //pastel red
      color(230, 57, 70),
      //dark red
      color(164, 19, 60),
      //bright pink
      color(255, 112, 166),
      //pink
      color(255, 143, 171),
      //pastel purple
      color(149, 113, 134),
      //dark purple
      color(148, 75, 187),
    ];
    newColor = random(theColors);
  }
}

function display() {
  //draw potato image
  image(cutePotato, x, y, 310, 175);
}

function miniHearts() {
  //mini hearts will flash when the mouse hovers over "Yes" box
  if (mouseX > 100 && mouseX < 250 && mouseY > 250 && mouseY < 350) {
    let x = random(70, 280);
    let y = random(220, 380);
    image(smallheart, x, y, 40, 40);
  }
}

function move() {
  //moves the potato with WASD
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
    // a moves him left
    x -= dx;
  }
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    // d moves him right
    x += dx;
  }
  if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
    // w moves him up
    y -= dy;
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
    // s moves him down
    y += dy;
  }
}

function mousePressed() {
  //When "Yes" is clicked while cutepotato is in the box, html appears
  if (
    mouseX > 100 &&
    mouseX < 250 &&
    mouseY > 250 &&
    mouseY < 350 &&
    //checking if cutepotato is in "Yes" box
    x > 90 &&
    x < 240 &&
    y > 240 &&
    y < 290
  ) {
    state = "yesAnswered";
  }
  //When No is clicked a heart drops in random position
  // if (mouseX > 350 && mouseX < 500 && mouseY > 250 && mouseY < 350) {
  //   let newHeart = {
  //     x: random(0, 500),
  //     y: 0,
  //     speed: 1,
  //   };
  //   hearts.push(newHeart);
  // }
}

function switchPages() {
  if (state === "yesAnswered"){
    loadAnotherScript();
  }
}

function loadAnotherScript() {
  //loads html file
  window.location.href = "Yes.html";
}

function setupNewHearts(){
  let newHeart = {
    x: random(0, 500),
    y: 0,
    speed: 1,
  };
  hearts.push(newHeart);
}


function newHearts() {
  // Drops new hearts
  let h = 0;
  while (h < hearts.length) {
    let object = hearts[h];

    // Gravity
    object.y += object.speed;
    object.speed += gravity;

    // Hits the ground
    if (object.y > 450) {
      object.y = 450; // Keep on the ground
      object.speed *= -0.8; // Bounce with energy loss

      // Stops bouncing if it's too slow
      if (abs(object.speed) < 1.5) {
        object.speed = 0;
      }
    }

    // Draws rectangle
    image(sadheart, object.x, object.y, 100, 90);
    h++;
  }
}
