let newColor = "white";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  backgroundChange();
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
      color(148, 75, 187)
    ];
    newColor = random(theColors);
  }
}
