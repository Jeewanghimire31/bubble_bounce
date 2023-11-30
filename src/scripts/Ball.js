class Ball {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y){
        this.x = x;
        this.y = y;

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

    draw = ()=>{
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }
}