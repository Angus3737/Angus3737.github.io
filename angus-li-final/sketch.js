// Angus Li
// Computer Science 30 Final

let ballArray = [];
let radius = 50;


function setup() {
  createCanvas(windowWidth, windowHeight);

  //starting 5 balls
  for (let i = 0; i < 5; i++) {
    let ball = new Ball(random(radius, width - radius), random(radius, height - radius));
    ballArray.push(ball);
  }
}

function draw() {
  background(220);

  //displays and moves each ball
  for (let ball of ballArray) {
    ball.display();
    ball.move();
  }
}

function keyPressed() {

  //adds another ball when any key is pressed
  let ball = new Ball(random(radius, width - radius), random(radius, height - radius));
  ballArray.push(ball);
}

function mousePressed() {
  //remove ball when clicked
  checkIfPointInsideBall(mouseX, mouseY);
}

function checkIfPointInsideBall(x, y) {

  for (let ball of ballArray) {
    //checking is mouse is on ball
    if (dist(x, y, ball.x, ball.y) < ball.radius) {

      //remove ball
      let index = ballArray.indexOf(ball);
      ballArray.splice(index, 1);  
    }
  }
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 50;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
  }

  display() {

    //draw cirlce
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {

    //ball moving
    this.x += this.dx;
    this.y += this.dy;

    //balls bouncing
    //left wall
    if (this.x - this.radius < 0) {
      this.dx *= -1;
    }

    //right wall
    if (this.x + this.radius > width) {
      this.dx *= -1;
    }

    //top wall
    if (this.y - this.radius < 0) {
      this.dy *= -1;
    }

    //bottom wall
    if (this.y + this.radius > height) {
      this.dy *= -1;
    }
  }
}