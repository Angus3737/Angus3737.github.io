// Chinese Chess
// Angus Li
// April
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 80;
let grid;
let rows = 9;
let cols = 8;
let pieces;
let pieceSelected = "none";
let redKing;
let greenKing;
let selectedX = -1;
let selectedY = -1;
let selectedPieceType = 0;

let originalBoard = [
  ['p', 'p', 'p', 'p', 'k', 'p', 'p', 'p', 'p'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['river', 'river', 'river', 'river', 'river', 'river', 'river', 'river', 'river'],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['rp', 'rp', 'rp', 'rp', 'rp', 'rp', 'rp', 'rp', 'rp'],
  ['rp', 'rp', 'rp', 'k', 'rp', 'rp', 'rp', 'rp', 'rp']
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
      if (originalBoard[y][x] === 'p' || originalBoard[y][x] === 'rp') {
        image(pawn, x * CELL_SIZE - 40, y * CELL_SIZE + 40, CELL_SIZE, CELL_SIZE);
      }
      else if (originalBoard[y][x] === 'k') {
        image(king, x * CELL_SIZE - 40, y * CELL_SIZE + 40, CELL_SIZE, CELL_SIZE);
      }
      else if (originalBoard[y][x] === 'river') {
        image(water, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

      }
      else if (originalBoard[y][x] === "color") {

      }
      
    }
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);
  if (x >= 0 && x <= cols && y >= 0 && y < rows) {
    if (pieceSelected) {
      movePawn(selectedX, selectedY, x, y);
      pieceSelected = false;
      // originalBoard[y-1][x-1] = "color";
    }
    else if (originalBoard[y][x] !== 0 && originalBoard[y][x] !== "river") {
      pieceSelected = true;
      selectedX = x;
      selectedY = y;
      selectedPieceType = originalBoard[y][x];

    }
  }
}

function movePawn(oldX, oldY, newX, newY) {
  if (originalBoard[newY][newX] === 0 || originalBoard[newY][newX] === "river") {
    originalBoard[newY][newX] = originalBoard[oldY][oldX];
    originalBoard[oldY][oldX] = 0;
  }
}


function highlightMoves(originalBoard) {
  let x = originalBoard.x;
  let y = originalBoard.y;
  fill(0, 255, 0, 130);
  rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}