// Chinese Chess
// Angus Li
// April
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let cellSize;
const SQUARE_DIMENSIONS = 10;
let grid;


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);

  displayGrid();
}

function displayGrid() {
  // draws a grid of rectangles of alternating colour
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      fill("black");
      rect(x * 50, y * 50, 50, 50);
    }
  }
}