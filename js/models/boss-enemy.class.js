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
    boss_fight = new Audio('assets/audio/Boss_fight.mp3');

    constructor() {
        super().loadImage(this.IMAGES_FLY[0]);
        // this.x = 1880; // left corner
        this.x;
        this.otherDirection = true;
        this.loadImages(this.IMAGES_FLY);
        this.loadImages(this.IMAGES_ENEMY_EXPLOTION);
        this.animateBossEnemy(this.IMAGES_FLY);
    }


    // animateBossEnemy(images_arr) {
    //     this.animateEnemie(images_arr, this.IMAGES_ENEMY_EXPLOTION);
    // }


    animateBossEnemy(images_arr) {
        this.x = 2200;
        let moveInterval = setInterval(() => {
            if (!this.is_Dead) {
                this.StayAnimation();
            }
            if (this.is_Dead) {
                this.stay();
                
            }
        }, 1000 / 60);

        let animateInterval = setInterval(() => {
            if (!this.is_Dead) {
                this.playAnimation(images_arr);
            }
            if (this.is_Dead) {
            }
            clearInterval(moveInterval);
        }, 150);
    }


    StayAnimation() {
        let moveRight = false;
        setInterval(() => {
            if (world && world.character.x >= 1880 && !moveRight) {
                this.boss_fight.play();
                this.x -= this.speed;
                if (this.x <= 2100) {
                    moveRight = true;
                }
            } else {
                this.x += this.speed;
                if (this.x >= 2110) { // replace 2200 with the desired right boundary
                    moveRight = false;
                }
            }
        }, 150);
        let moveUp = false;
        setInterval(() => {
            if (!moveUp) {
                this.y -= this.speed;
                if (this.y <= 0) {
                    moveUp = true;
                }
            } else {
                this.y += this.speed;
                if (this.y >= 5) { // replace 2200 with the desired right boundary
                    moveUp = false;
                }
            }
        }, 200);
    }
}