class Ball {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.dx = getRandom(-1, 1);
        this.dy = getRandom(-1, 1);
     this.element = document.createElement('div');
     this.element.classList.add('ball');
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
        this.x += this.dx * SPEED;
        this.y += this.dy * SPEED;
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
    if(this.x < boundaryLeft || this.x + BALL_WIDTH > boundaryWidth){
        this.dx = -this.dx;
    }
    if(this.y < boundaryTop || this.y + BALL_HEIGHT > boundaryHeight){
        this.dy = -this.dy;
    }
}


}