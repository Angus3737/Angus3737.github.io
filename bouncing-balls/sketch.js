// Bouncing Ball Object Demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall();
}

function draw() {
  background(220);
  for (let ball of ballArray){
    moveBalls(ball);
    displayBalls(ball);

}

}


function moveBalls(ball) {

  ball.x += ball.dx;
  ball.y += ball.dy;

  //display ball
  fill("red");
  circle(ball.x, ball.y, ball.radius * 2);

  if (ball.x - ball.radius > width) {
    ball.x = -ball.radius;
  }
  else if (ball.x + ball.radius< 0){
    ball.x = width + ball.radius;
  }
  else if (ball.y - ball.radius> height){
    ball.y = -ball.radius;
  }
  else if (ball.y + ball.radius< 0){
    ball.y = height + ball.radius;
  }
}

function displayBalls(ball) {
  fill("red");
  circle(ball.x, ball.y, ball.radius*2)
}

function mousePressed() {
  spawnBall();
}

function spawnBall() {
  let someBall = {
    x: random(width),
    y: random(height),
    radius: random(30, 70),
    dx: random(-5, 5),
    dy: random(-5, 5)
  };
  ballArray.push(someBall);
}