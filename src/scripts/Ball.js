class Ball {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y, r=BALL_WIDTH/2, speed){
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = getRandom(MIN_SPEED, MAX_SPEED);
        this.dx = getRandom(-1, 1);
        this.dy = getRandom(-1, 1);
        
     this.element = document.createElement('div');
     this.element.classList.add('ball');
     this.element.style.backgroundColor = getRandomColor();
    }
   

    /**
     * returns the dom 
     * 
     * @returns HTML DIV Element
     */

    getElement = ()=>this.element;

    /**
     * 
     */
    getX = ()=>this.x;

    /**
     * 
     */
    getY = ()=>this.y;


    /**
     * @param {number} x
     */
    SetX = (x)=>{
        this.x = x;
    }

    /**
     * @param {number} y
     */
    SetY = (y)=>{
        this.y = y;
    }

    // move a ball towards a direction
    move = ()=>{
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;
    }

    draw = ()=>{
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }


    /**
     * 
     * @param {number} boundaryLeft 
     * @param {number} boundaryTop 
     * @param {number} boundaryWidth 
     * @param {number} boundaryHeight 
     */
    checkCollisionWall = (boundaryLeft, boundaryTop, boundaryWidth, boundaryHeight)=>{
        if (this.x <= boundaryLeft || this.x + this.r * 2 >= boundaryWidth) {
            this.dx *= -1;
            this.x =
              this.x <= boundaryLeft ? boundaryLeft : boundaryWidth - this.r * 2;
          }
          if (this.y <= boundaryTop || this.y + this.r * 2 >= boundaryHeight) {
            this.dy *= -1;
            this.y =
              this.y <= boundaryTop ? boundaryTop : boundaryHeight - this.r * 2;
          }
 }

 checkCollisionBall = (ball)=>{
    const ball_distance = distance(this.x, this.y, ball.x, ball.y);

    const sumOfRadii = this.r + ball.r;

    if(ball_distance <= sumOfRadii){
        this.dx *= -1;
        this.dy *= -1;

        ball.dx *= -1;
        ball.dy *= -1;
        
        
    }
    
    // console.log(ball_distance);
 }


}