class Bootleg extends MovableObject {

    x;
    y = 10;
    width = 60;
    height = 50;
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

    constructor() {
        super().loadImage('assets/sprites/enemies/Bootleg/bootleg-idle.png');
        this.x = 900 + Math.random() * 1100;
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_ENEMY_EXPLOTION);
        this.applyGravity();
        this.animateBootleg(this.IMAGES_RUN);
    }


    animateBootleg(images_arr) {
        this.otherDirection = true;
        this.animateEnemy(images_arr, this.IMAGES_ENEMY_EXPLOTION);
    }

}