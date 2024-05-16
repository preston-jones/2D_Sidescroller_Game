/**
 * Bootleg class is a class that extends from MovableObject class
 * and it is used to create an enemy object that moves in the game.
 * 
 * @class Bootleg
 * @extends MovableObject
 */
class Bootleg extends MovableObject {
    y = 10;
    width = 60;
    height = 50;
    offset_left = 5;
    offset_top = 0;
    offset_right = -10;
    offset_bottom = 0;
    speed = 0.15;
    health = 2;

    /* Arrays of the images paths for the animations of this object. */
    IMAGES_STAY = [
        'assets/sprites/enemies/Bootleg/bootleg-idle.png'
    ];
    IMAGES_RUN = [
        'assets/sprites/enemies/Bootleg Walk/bootleg-walk1.png',
        'assets/sprites/enemies/Bootleg Walk/bootleg-walk2.png',
        'assets/sprites/enemies/Bootleg Walk/bootleg-walk3.png',
        'assets/sprites/enemies/Bootleg Walk/bootleg-walk4.png',
        'assets/sprites/enemies/Bootleg Walk/bootleg-walk5.png',
        'assets/sprites/enemies/Bootleg Walk/bootleg-walk6.png',
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
     * The constructor of the Bootleg class.
     * @param {number} random_x_min - The minimum x coordinate of the bootleg object on the canvas.
     *  @param {number} random_x_max - The maximum x coordinate of the bootleg object on the canvas.
     */
    constructor(random_x_min, random_x_max) {
        super().loadImage('assets/sprites/enemies/Bootleg/bootleg-idle.png');
        this.x = Math.round(random_x_min + Math.random() * random_x_max);
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_ENEMY_EXPLOTION);
        this.applyGravity();
        this.animateBootleg(this.IMAGES_RUN);
    }


    /**
     * Animates the bootleg enemy object.
     * @param {string[]} images_arr - The array of images paths for the enemy object for animation.
     */
    animateBootleg(images_arr) {
        this.otherDirection = true;
        this.animateEnemy(images_arr, this.IMAGES_ENEMY_EXPLOTION);
    }

}