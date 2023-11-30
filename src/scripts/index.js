// const viewport = document.querySelector(".viewport");

// const ballArray = [];

// for (let i=0; i<Ball_COUNT; i++){
//     const ball = new Ball(100, 100);
//     ballArray.push(ball);
// }








// let speed = 1;
// const position = {
//     x : 200,
//     y : 10
// };

const container = document.querySelector('.container');




// const checkCollision = ()=>{
//     if (position.x > 500-20 || position.x <0){
//         speed *= -1;
//     }
// }

// const update = ()=>{
//     position.x += speed;
// }

// const animate = ()=>{
//     update();
//     draw();
//     checkCollision();
//     window.requestAnimationFrame(animate);
// }
// animate();

const randomGen = (lower, upper)=>{
    return lower + Math.random() * (upper - lower);
}

class Ball {
    constructor(x, y){
        this.x = x;
        this.y = y;

     this.element = document.createElement('div');
     this.element.classList.add('ball');
    }

    draw = ()=>{
        this.element.style.top = this.x + 'px';
        this.element.style.left = this.y + 'px';
        container.appendChild(this.element);
    }
}

let points = [];

for (let i = 0; i<20; i++){
    let x = randomGen(0, 480);
    let y = randomGen(0, 480);
    points.push({x, y});
}
console.log(points);
points.forEach((data, index)=>{
    let ball = new Ball(data.x, data.y);
    ball.draw();
});



