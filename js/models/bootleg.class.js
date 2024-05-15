/* Bootleg class
 * 
 * Bootleg class is a class that extends from MovableObject class
 * and it is used to create an enemy object that moves in the game.
 * 
 * Bootleg class has the following properties:
 * 
 * y: number
 * width: number
 * height: number
 * offset_left: number
 * offset_top: number
 * offset_right: number
 * offset_bottom: number
 * speed: number
 * health: number
 * IMAGES_STAY: string[] - array of the images paths for the enemy object for animation.
 * IMAGES_RUN: string[] - array of the images paths for the enemy object for animation.
 * IMAGES_ENEMY_EXPLOTION: string[] - array of the images paths for the enemy object for animation.
 * currentImage: number
 * 
 * Bootleg class has the following methods:
 * 
 * constructor()
 * animateBootleg(images_arr: string[]): void
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
    health = 3;

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
     */
    constructor() {
        super().loadImage('assets/sprites/enemies/Bootleg/bootleg-idle.png');
        this.x = 900 + Math.random() * 1100;
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