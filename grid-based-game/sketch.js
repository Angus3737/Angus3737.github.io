// Chinese Chess
// Angus Li
// April 10, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 80;
let rows = 9;
let cols = 9;
let pieces;
let pieceSelected = false;
let redKing;
let greenKing;
let selectedX = -1;
let selectedY = -1;
let selectedPieceType = 0;
let state = "redTurn";

let board = [
  ['p', 'p', 'p', 'p', 'k', 'p', 'p', 'p', 'p'],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ['rp', 'rp', 'rp', 'rp', 'rk', 'rp', 'rp', 'rp', 'rp']
];

function preload() {
  //load images for pieces
  redKing = loadImage("redking.png");
  blackKing = loadImage("blackking.png");
  redPawn = loadImage("redpawn.png");
  blackPawn = loadImage("blackpawn.png");

  water = loadImage("blue-water.avif");
}

function setup() {
  createCanvas(CELL_SIZE * cols, CELL_SIZE * rows);

  let link = createA('https://www.ymimports.com/pages/how-to-play-xiangqi-chinese-chess', 'How to Play');
  link.position(-200, 200);
}

function lockedScreen() {
  //background for the instruction texts

  background (100);
  fill("white");
  rect(-200, -250, 400, 500);
  fill(0);

  //switch to the simulation when E is pressed

  if (keyIsDown(69)) {
    state = "redTurn";
  }
}

function draw() {
  background(220);


  displayGrid();
  displayRiver();
  displayPieces();
}

function displayGrid() {
  // draws a grid 8 x 9
  fill(247, 219, 167);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}


function displayRiver() {
  for (let x = 0; x < cols; x++) {
    image(water, x * CELL_SIZE, 4 * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }
}

function displayPieces() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (board[y][x] === 'rp') {
        image(redPawn, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }

      else if (board[y][x] === 'p') {
        image(blackPawn, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }

      else if (board[y][x] === 'rk') {
        image(redKing, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }

      else if (board[y][x] === 'k') {
        image(blackKing, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }

      else if (board[y][x] === "color") {

      }
      
    }
  }
}


function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
      let clickedPiece = board[y][x];

    if (pieceSelected) {
      let pieceMoved = movePiece(selectedX, selectedY, x, y);
      pieceSelected = false;

      //alternate turns if moved
      if (pieceMoved) {
        if (state === "redTurn") {
          state = "blackTurn";
        }
        else if (state === "blackTurn") {
          state = "redTurn";
        }
      }
    }
    else if (clickedPiece !== 0) {
      if ((state === "redTurn" && clickedPiece.startsWith("r")) || 
      (state === "blackTurn" && !clickedPiece.startsWith("r"))) {
        selectedX = x;
        selectedY = y;
        selectedPieceType = clickedPiece;
        pieceSelected = true;
      }
    }
  }
}

function movePiece(oldX, oldY, newX, newY) {
  let piece = board[oldY][oldX];
  let targetPiece = board[newY][newX];

  //invalid move
  if (!(oldX === newX || oldY === newY)) {
    return false;
  }

  if (!clearPath(oldX, oldY, newX, newY)) {
    return false;
  }

  //can't capture its own piece
  if (targetPiece !== 0 && sameTeam(piece, targetPiece)) {
    return false;
  }

  board[newY][newX] = piece;
  board[oldY][oldX] = 0;
  return true;
}



function clearPath(oldX, oldY, newX, newY) {
  //vertical moves
  if (oldX === newX) {
    let step;
    if(newY > oldY) {
      step = 1;
    }
    else {
      step = -1;
    }

    for (let y = oldY + step; y !== newY; y += step) {
      if (board[y][oldX] !== 0) {
        return false;
      }
    }
  }
  else if (oldY === newY) {
    let step
    if (newX > oldX) {
      step = 1;
    }
    else {
      step = -1
    }
    for (let x = oldX + step; x !== newX; x += step) {
      if (board[oldY][x] !== 0) {
        return false
      }
    }
  }
  return true;
}

function sameTeam(piece1, piece2) {
  if (piece1.startsWith('r') && piece2.startsWith('r')) {
    return true;
  }
  if (!piece1.startsWith('r') && !piece2.startsWith('r')) {
    return true;
  }
  return false;
}