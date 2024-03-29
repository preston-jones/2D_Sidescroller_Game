class Cop extends MovableObject {

    x;
    y = 10;
    width = 60;
    height = 50;
    speed = 1.5;
    health = 1;

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

    constructor() {
        super().loadImage('assets/sprites/enemies/cop/idle/cop2.png');
        this.x = 850 + Math.random() * 1000;
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_ENEMY_EXPLOTION);
        this.applyGravity();
        this.animateCop(this.IMAGES_RUN);
    }


    animateCop(images_arr) {
        this.animateEnemie(images_arr, this.IMAGES_ENEMY_EXPLOTION);
    }

}