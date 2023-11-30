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
 * 
 * @param {number} x1 
 * @param {number} x2 
 * @param {number} y1 
 * @param {number} y2 
 * @returns number
 */

const distance = (x1, x2, y1, y2)=>{
    const dx = x1-x2;
    const dy = y1-y2;

    return Math.sqrt(dx*dx + dy*dy);
};

