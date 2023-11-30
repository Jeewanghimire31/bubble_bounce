// like random number generate garnu paryo vane  utils.js ma 
// yes sanga mtra nwvayera sab lai milne
/**
 * Returns a random number between a range
 * @param {number} min 
 * @param {number} max 
 * @returns number
 */
const getRandom = (min, max)=>{
    return min + Math.random() * max-min;
}


/**
 * Returns a random color in hex format.
 * @returns {string} Random color.
 */
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


/**
 * 
 * @param {number} x1 
 * @param {number} x2 
 * @param {number} y1 
 * @param {number} y2 
 * @returns number
 */

const distance = (x1, y1, x2,  y2)=>{
    const dx = x1-x2;
    const dy = y1-y2;

    return Math.sqrt(dx*dx + dy*dy);
};

