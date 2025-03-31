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

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  if (originalBoard[y][x] !== 0 && originalBoard[y][x] !== "river") {
    pieceSelected = "selected";
    // highlightMoves();
    console.log(x, y);
    movePawn(pawn.x, pawn.y);
  }
}

function movePawn(x, y) {
  if (x >= 0 && x <= cols && y >= 0 && y <= rows && originalBoard[y][x] === OPEN_TILE) {
    //previous Pawn location
    let oldX = pawn.x;
    let oldY = pawn.y;

    //reset the old spot ot be open
    grid[oldY][oldX] = OPEN_TILE;
    //keep track of where the Pawn is now
    pawn.x = x;
    pawn.y = y;

    //put Pawn on grid
    originalBoard[pawn.y][pawn.x] = pawn;
  }
}

function highlightMoves(originalBoard) {
  let x = originalBoard.x;
  let y = originalBoard.y;
  fill(0, 255, 0, 130);
  rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}