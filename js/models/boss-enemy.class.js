class BossEnemy extends MovableObject {

    x;
    y = 16;
    offsetY = 0;
    width = 80;
    height = 70;
    speed = 0.5;
    health = 8;
    moveRight = false;
    moveUp = false;
    isOnRight = false;
    isOnLeft = false;
    isUp = true;
    isAttacking = false; // Initialize isAttacking to false
    hasAttacked = false; // Initialize hasAttacked to false

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
                this.playBossFightMusic();
                world.character.isInBattleArena = true;
                this.animateBossEnemy(this.IMAGES_FLY, this.IMAGES_ENEMY_EXPLOTION);
                clearInterval(startInterval);
            }
        }, 100);
    }


    playBossFightMusic() {
        level_bgr_music.pause();
        level_bgr_music.currentTime = 0;
        level_bgr_music = boss_fight_music;
        level_bgr_music.loop = true;
        level_bgr_music.play();
    }


    animateBossEnemy(images_arr, array) {
        this.StayRightAnimation();
        let moveInterval = setInterval(() => {
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
                console.log('Enemy is dead, playing death animation');
                this.playAnimation_Enemy_DEAD(array);
                explosion_sound.play();
                clearInterval(animateInterval);
                setTimeout(() => {
                    // Assuming world.enemies is the array holding all enemy objects
                    let index = world.level.enemies.indexOf(this);
                    if (index > -1) {
                        world.level.enemies.splice(index, 1);
                    }
                }, 100); // Adjust the timeout to match the length of the death animation
                world.level.boss_dead = true;
            }

        }, 150);
    }


    attackCharacter() {
        console.log('ATTACK!!!');
        if (world && world.character) {
            let characterX = world.character.x;
            let characterY = world.character.y;

            // Move quickly to the character's position
            if (this.x < characterX) {
                this.otherDirection = false;
                this.x += 2 * this.speed; // Move twice as fast
            } else if (this.x > characterX) {
                this.otherDirection = true;
                this.x -= 2 * this.speed; // Move twice as fast
            }
            // Move down towards the character's position
            if (this.y < characterY) {
                this.y += 2 * this.speed; // Move twice as fast
                // this.moveUp = true;
            }
        }
        setTimeout(() => {
            this.hasAttacked = true;
        }, 2000);
    }


    StayRightAnimation() {
        if (!this.hasAttacked) {
            setTimeout(() => {
                this.attackCharacter();
            }, 5000);
        }
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

        if (this.isUp) {
            if (!this.moveUp) {
                this.y -= 0.3;
                if (this.y <= 0) {
                    this.moveUp = true;
                }
            } else {
                this.y += 0.3;
                if (this.y >= 20) {
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
        this.hasAttacked = false;
    }


    StayLeftAnimation() {
        if (!this.hasAttacked) {
            setTimeout(() => {
                this.attackCharacter();
            }, 4000);
        }
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

        if (this.isUp) {
            if (!this.moveUp) {
                this.y -= 0.3;
                if (this.y <= 0) {
                    this.moveUp = true;
                }
            } else {
                this.y += this.speed;
                if (this.y >= 20) {
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
        this.hasAttacked = false;
    }
}