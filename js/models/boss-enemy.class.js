class BossEnemy extends MovableObject {

    x;
    y = 6;
    width = 80;
    height = 70;
    speed = 0.3;
    health = 8;
    moveRight = false;
    moveUp = false;
    isOnRight = true;
    isOnLeft = false;
    isUp = true;

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
        this.x = 2200;
        // this.y = 65;
        this.otherDirection = true;
        this.loadImages(this.IMAGES_FLY);
        this.loadImages(this.IMAGES_ENEMY_EXPLOTION);
        this.boss();
        // this.animateBossEnemy(this.IMAGES_FLY);

    }


    boss() {
        let startInterval = setInterval(() => {
            if (world && world.character.x >= 1949) {
                world.character.music_sound.pause();
                world.character.isInBattleArena = true;
                this.animateBossEnemy(this.IMAGES_FLY);
                clearInterval(startInterval);
            }
        }, 100);
    }


    animateBossEnemy(images_arr) {
        this.StayRightAnimation();
        setInterval(() => {
            if (!this.is_Dead) {
                if (this.isOnRight) {
                    setTimeout(() => {
                        this.StayLeftAnimation();
                    }, 4000);
                }
                if (!this.isOnRight) {
                    setTimeout(() => {
                        this.StayRightAnimation();
                    }, 4000);
                }
            }
            if (this.is_Dead) {
                this.stay();

            }
        }, 1000 / 50);

        let animateInterval = setInterval(() => {
            if (!this.is_Dead) {
                this.playAnimation(images_arr);
            }
            if (this.is_Dead) {
            }
        }, 150);
    }


    StayRightAnimation() {
        this.boss_fight.play();
        let moveInterval_x = setInterval(() => {
            if (!this.moveRight) {
                this.x -= this.speed;
                if (this.x <= 2100) {
                    this.moveRight = true;
                }
            } else {
                this.x += this.speed;
                if (this.x >= 2110) { // replace 2200 with the desired right boundary
                    this.moveRight = false;
                    this.isOnRight = true;
                    this.isOnLeft = false;
                    this.otherDirection = true;
                }
            }
            clearInterval(moveInterval_x);
        }, 200);
        let moveInterval_y = setInterval(() => {
            if (world && this.x == world.character.x) {
                console.log('ATTACKE!!!');
            }
            if (this.isUp) {
                if (!this.moveUp) {
                    this.y -= 0.3;
                    if (this.y <= 0) {
                        this.moveUp = true;
                    }
                } else {
                    this.y += 0.3;
                    if (this.y >= 6) {
                        this.moveUp = false;
                    }
                }
            }
            if (!this.isUp) {
                if (!this.moveUp) {
                    this.y -= 0.3;
                    if (this.y <= 60) {
                        this.moveUp = true;
                    }
                } else {
                    this.y += this.speed;
                    if (this.y >= 70) {
                        this.moveUp = false;
                    }
                }
            }
            clearInterval(moveInterval_y);
        }, 125);
    }
    StayLeftAnimation() {
        this.boss_fight.play();
        let moveInterval_x = setInterval(() => {
            if (!this.moveRight) {
                this.x -= this.speed;
                if (this.x <= 1880) {
                    this.moveRight = true;
                    this.isOnRight = false;
                    this.isOnLeft = true;
                    this.otherDirection = false;
                }
            } else {
                this.x += this.speed;
                if (this.x >= 1890) { // replace 2200 with the desired right boundary
                    this.moveRight = false;
                }
            }
            clearInterval(moveInterval_x);
        }, 200);
        let moveInterval_y = setInterval(() => {
            if (world && this.x == world.character.x) {
                console.log('ATTACKE!!!');
            }
            if (this.isUp) {
                if (!this.moveUp) {
                    this.y -= 0.3;
                    if (this.y <= 0) {
                        this.moveUp = true;
                    }
                } else {
                    this.y += this.speed;
                    if (this.y >= 6) {
                        this.moveUp = false;
                    }
                }
            }
            if (!this.isUp) {
                if (!this.moveUp) {
                    this.y -= 0.3;
                    if (this.y <= 60) {
                        this.moveUp = true;
                    }
                } else {
                    this.y += this.speed;
                    if (this.y >= 70) {
                        this.moveUp = false;
                    }
                }
            }
            clearInterval(moveInterval_y);
        }, 125);
    }

}