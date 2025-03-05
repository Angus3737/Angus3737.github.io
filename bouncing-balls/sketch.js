// Bouncing Ball Object Demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall();
}

function draw() {
  background(220);

  for (let ball of ballArray) {
    //move ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    //display ball
    fill("red");
    circle(ball.x, ball.y, ball.radius * 2);

    if (ball.x > windowWidth) {
      ball.x -= windowWidth;
    }
    else if (ball.x < 0){
      ball.x += windowWidth;
    }
    else if (ball.y > windowHeight){
      ball.y -= windowHeight;
    }
    else if (ball.y < 0){
      ball.y += windowHeight;
    }
  }
}


function mousePressed() {
  spawnBall();
}

function spawnBall() {
  let someBall = {
    x: random(width),
    y: random(height),
    radius: random(15, 40),
    dx: random(-5, 5),
    dy: random(-5, 5)
  };
  ballArray.push(someBall);
}