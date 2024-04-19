class Drone extends MovableObject {

    x;
    y = 51;
    width = 40;
    height = 40;
    speed = 0.5;
    health = 1;

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

    constructor(random_x_min, random_x_max) {
        super().loadImage('assets/sprites/enemies/drone/drone-1.png');
        this.x = Math.round(random_x_min + Math.random() * random_x_max);
        this.loadImages(this.IMAGES_STAY);
        this.loadImages(this.IMAGES_ENEMY_EXPLOTION);
        this.animateDrone(this.IMAGES_STAY);
    }


    animateDrone(images_arr) {
        this.animateEnemy(images_arr, this.IMAGES_ENEMY_EXPLOTION);
    }
}