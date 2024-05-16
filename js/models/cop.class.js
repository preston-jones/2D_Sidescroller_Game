/**
 * Cop class is a class that extends from MovableObject class
 * and it is used to create an enemy object that moves in the game.
 * 
 * @class Cop
 * @extends MovableObject
 */
class Cop extends MovableObject {
    y = 10;
    width = 60;
    height = 50;
    offset_left = 10;
    offset_top = 0;
    offset_right = -20;
    offset_bottom = -0;
    speed = 1.5;
    health = 1;

    /* Arrays of the images paths for the animations of this object. */
    IMAGES_STAY = [
        'assets/sprites/enemies/cop/idle/cop1.png',
        'assets/sprites/enemies/cop/idle/cop2.png',
        'assets/sprites/enemies/cop/idle/cop3.png',
    ];
    IMAGES_RUN = [
        'assets/sprites/enemies/cop/run/cop1.png',
        'assets/sprites/enemies/cop/run/cop2.png',
        'assets/sprites/enemies/cop/run/cop3.png',
        'assets/sprites/enemies/cop/run/cop4.png',
        'assets/sprites/enemies/cop/run/cop5.png',
        'assets/sprites/enemies/cop/run/cop6.png',
        'assets/sprites/enemies/cop/run/cop7.png',
        'assets/sprites/enemies/cop/run/cop8.png',
        'assets/sprites/enemies/cop/run/cop9.png',
        'assets/sprites/enemies/cop/run/cop10.png',
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
     * The constructor of the Cop class.
     * @param {number} random_x_min - The minimum x coordinate of the cop object on the canvas.
     * @param {number} random_x_max - The maximum x coordinate of the cop object on the canvas.
     * @param {number} random_speed_min - The minimum speed of the cop object.
     * @param {number} random_speed_max - The maximum speed of the cop object.
     */
    constructor(random_x_min, random_x_max, random_speed_min, random_speed_max) {
        super().loadImage('assets/sprites/enemies/cop/idle/cop2.png');
        this.x = Math.round(random_x_min + Math.random() * random_x_max);
        this.speed = (random_speed_min + Math.random() * random_speed_max).toFixed(2);
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_ENEMY_EXPLOTION);
        this.applyGravity();
        this.animateCop(this.IMAGES_RUN);
    }


    /**
     * Animates the cop enemy object.
     * @param {string[]} images_arr - The array of images paths for the enemy object for animation.
     */
    animateCop(images_arr) {
        this.animateEnemy(images_arr, this.IMAGES_ENEMY_EXPLOTION);
    }
}