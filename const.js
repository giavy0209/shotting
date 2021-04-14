const GRAVITY = 0.0001
const GUN_WIDTH = 0.05
const GUN_HEIGHT = 0.04
const BULLET_SIZE = .01
const BULLET_SPEED = 0.01

const ENEMY_MIN_SIZE = 0.05
const ENEMY_MAX_SIZE = 0.15
const ENEMY_SPEED = 0.005

const random = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function distance(x1, y1, x2, y2 ,r1 , r2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)) - (r1 + r2);
}