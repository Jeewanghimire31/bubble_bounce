// balls will be rendered in this dom element
const container = document.querySelector(".container");

// Array to store balls
const ballsArray = [];

// create balls and store in an array
for (let i=0; i<Ball_COUNT; i++){
    const x = getRandom(0, VIEWPORT_WIDTH-BALL_WIDTH);
    const y = getRandom(0, VIEWPORT_HEIGHT-BALL_HEIGHT);
    const speed = getRandom(MIN_SPEED, MAX_SPEED);
    const ball = new Ball(x, y, speed);
    ballsArray.push(ball);
}

// add balls in viewport
ballsArray.forEach(ball =>{
    container.appendChild(ball.getElement());
});


const render = ()=>{
    ballsArray.forEach((ball)=>{
        ball.move();
        ball.draw();

        ball.checkCollisionWall(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);

        ballsArray.forEach(otherBall=>{
            if (ball === otherBall){
                return;
            }
            ball.checkCollisionBall(otherBall);
        });
    });
    requestAnimationFrame(render);
}

render();
