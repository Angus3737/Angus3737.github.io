// Chinese Chess
// Angus Li
// April
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 75;
let grid;
let rows = 9;
let cols = 8;
let pieces;
let originalBoard = [
  ['p', 'p', 'p', 'p', 'k', 'p', 'p', 'p',],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',],
  [0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0,],
  ['river', 'river', 'river', 'river', 'river', 'river', 'river', 'river',],
  [0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0,],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',],
  ['p', 'p', 'p', 'k', 'p', 'p', 'p', 'p',]
];

function preload() {
  pawn = loadImage("cartoon-point-chocolate-beans.png");
  king = loadImage("download.jpg");
  water = loadImage("blue-water.avif");
}

function setup() {
  createCanvas(CELL_SIZE * cols, CELL_SIZE * rows);

}

function draw() {
  background(220);

  displayGrid();
  displayPieces();
}

function displayGrid() {
  // draws a grid 8 x 9
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function displayPieces() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (originalBoard[y][x] === 'p') {
        image(pawn, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
      else if (originalBoard[y][x] === 'k') {
        image(king, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
      else if (originalBoard[y][x] === 'river') {
        image(water, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

      }
      
    }
  }
}
