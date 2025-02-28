let cutepotato;
let sadheart;
let smallheart;
let hearts = [];
let gravity = 0.1;
let x = 250;
let y = 150;
let newColor = "white";

function setup() {
  createCanvas(600, 500);
  textSize(32);
  fill(0);
  stroke(0);
  strokeWeight(2);
}

function preload() {
  cutepotato = loadImage("cutepotato.png");
  sadheart = loadImage("sadheart.png");
  smallheart = loadImage("smallheart.png");
}

function draw() {
  backgroundChange();
  
  //yes box
  fill(32, 139, 58);
  rect(100, 250, 150, 100);
  //no box
  fill(239, 35, 60);
  rect(350, 250, 150, 100);
  //texts
  fill(0);
  textSize(32);
  text("Yes", 150, 310);
  text("No", 400, 310);
  text("Will You Be My Valentines??", 100, 120);
  textSize(16);
  text("Press space to change background", 100, 430);
  //call functions
  display();
  newHearts();
  miniHearts();
}

function backgroundChange() {
  background(newColor);
}

function keyPressed() {
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

function miniHearts() {
  if (mouseX > 100 && mouseX < 250 && mouseY > 250 && mouseY < 350) {
    let x = random(70, 250);
    let y = random(200, 350);
    image(smallheart, x, y, 40, 40);
  }
}

function newHearts() {
  // Update and drop new hearts
  let i = 0;
  while (i < hearts.length) {
    let object = hearts[i];

    // Gravity
    object.y += object.speed;
    object.speed += gravity;

    // Hits the ground
    if (object.y > 410) {
      object.y = 410; // Keep on the ground
      object.speed *= -0.8; // Bounce with energy loss

      // Stops bouncing if it's too slow
      if (abs(object.speed) < 1.5) {
        object.speed = 0;
      }
    }

    // Draws rectangle
    image(sadheart, object.x, object.y, 100, 90);
    i++;
  }
}

function display() {
  image(cutepotato, x, y, 100, 100);
}

//function for "Yes"
function loadAnotherScript() {
  window.location.href = "Yes.html";
}

function mousePressed() {
  //When Yes is clicked it switches to html
  if (mouseX > 100 && mouseX < 250 && mouseY > 250 && mouseY < 350) {
    loadAnotherScript();
  }
  //When No is clicked a heart drops in random position
  if (mouseX > 350 && mouseX < 500 && mouseY > 250 && mouseY < 350) {
    let newHeart = {
      x: random(0, 500),
      y: 0,
      speed: 1,
    };
    hearts.push(newHeart);
  }
}
