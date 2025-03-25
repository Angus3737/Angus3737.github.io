// Rectangle grid


let cellSize = 50;
let grid;
let rows;
let cols;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.ceil(width/cellSize);
  rows = Math.ciel(height/cellSize);
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background(220);
  displayCells();
}

function displayCells() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[x][y] === 0) {
        fill ("white");
      }
      else if (grid[x][y] === 1) {
        fill("black");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function generateRandomGrid() {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //toss a 0 or 1 randomly
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}
