/**
 * Drone class
 * 
 * Drone class is a class that extends from MovableObject class
 * and it is used to create an enemy object that moves in the game.
 * 
 * @class Drone
 * @extends MovableObject
 */
class Drone extends MovableObject {
    y = 60;
    width = 40;
    height = 40;
    offset_left = 5;
    offset_top = 0;
    offset_right = -10;
    offset_bottom = 0;
    speed = 0.5;
    health = 1;

    /* Arrays of the images paths for the animations of this object. */
    IMAGES_STAY = [
        'assets/sprites/enemies/drone/drone-1.png',
    ];
    IMAGES_FLY = [
        'assets/sprites/enemies/drone/drone-1.png',
        'assets/sprites/enemies/drone/drone-2.png',
        'assets/sprites/enemies/drone/drone-3.png',
        'assets/sprites/enemies/drone/drone-4.png'
    ];
    IMAGES_ENEMY_EXPLOTION = [
        'assets/sprites/misc/enemy-explosion/enemy-explosion-1.png',
        'assets/sprites/misc/enemy-explosion/enemy-explosion-2.png',
        'assets/sprites/misc/enemy-explosion/enemy-explosion-3.png',
        'assets/sprites/misc/enemy-explosion/enemy-explosion-4.png',
        'assets/sprites/misc/enemy-explosion/enemy-explosion-5.png',
        'assets/sprites/misc/enemy-explosion/enemy-explosion-6.png',
    ];
    currentImage = 0;


    /**
     * The constructor of the Drone class.
     * @param {number} random_x_min - The minimum x coordinate of the drone object on the canvas.
     * @param {number} random_x_max - The maximum x coordinate of the drone object on the canvas.
     */
    constructor(random_x_min, random_x_max) {
        super().loadImage('assets/sprites/enemies/drone/drone-1.png');
        this.x = Math.round(random_x_min + Math.random() * random_x_max);
        this.loadImages(this.IMAGES_STAY);
        this.loadImages(this.IMAGES_ENEMY_EXPLOTION);
        this.animateDrone(this.IMAGES_STAY);
    }


    /**
     * Animates the drone enemy object.
     * @param {string[]} images_arr - The array of images paths for the enemy object for animation.
     */
    animateDrone(images_arr) {
        this.animateEnemy(images_arr, this.IMAGES_ENEMY_EXPLOTION);
    }
}