export const { PI: pi, SQRT2: sq2, sin, cos } = Math

/**
 * @param {number} a 
 * @param {number} b 
 */
export const rand = (a, b) => a === b ? a : Math.random() * (b - a) + a

/**
 * @param {number} a 
 * @param {number} b 
 * @param {number} k [0, 1]
 */
export const lerp = (a, b, k) => (b - a) * k + a
