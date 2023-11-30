class Ball {
    constructor(x, y){
        this.x = x;
        this.y = y;

     this.element = document.createElement('div');
     this.element.classList.add('ball');
    }
    }

    /**
     * returns the dom 
     * 
     * @returns HTML DIV Element
     */

    getElement = ()=>this.element;
    getX = ()=>this.x;
    getY = ()=>this.y;
