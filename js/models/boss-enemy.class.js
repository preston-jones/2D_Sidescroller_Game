class BossEnemy extends MovableObject {

    x;
    y = 6;
    width = 80;
    height = 70;
    speed = 0.3;
    health = 8;

    IMAGES_FLY = [
        'assets/sprites/enemies/Wasp/wasp1.png',
        'assets/sprites/enemies/Wasp/wasp2.png',
        'assets/sprites/enemies/Wasp/wasp3.png',
        'assets/sprites/enemies/Wasp/wasp4.png',
        'assets/sprites/enemies/Wasp/wasp5.png',
        'assets/sprites/enemies/Wasp/wasp6.png',
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
        super().loadImage(this.IMAGES_FLY[0]);
        this.x = 1880;
        // this.x = 2130;
        this.loadImages(this.IMAGES_FLY);
        this.loadImages(this.IMAGES_ENEMY_EXPLOTION);
        // this.animateBossEnemy(this.IMAGES_FLY);
    }


    animateBossEnemy(images_arr) {
        this.otherDirection = true;
        this.animateEnemie(images_arr, this.IMAGES_ENEMY_EXPLOTION);
    }

}