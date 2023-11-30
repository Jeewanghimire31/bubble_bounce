// balls will be rendered in this dom element
const container = document.querySelector(".container");

// Array to store balls
const ballsArray = [];

// create balls and store in an array
for (let i=0; i<Ball_COUNT; i++){
    const x = getRandom(0, VIEWPORT_WIDTH-BALL_WIDTH)
    const y = getRandom(0, VIEWPORT_HEIGHT-BALL_HEIGHT)
    const ball = new Ball(x, y);
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
    })
    requestAnimationFrame(render);
}

render();
