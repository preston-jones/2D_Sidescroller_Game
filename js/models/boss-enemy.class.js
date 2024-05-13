class BossEnemy extends MovableObject {
    y = 16;
    offsetY = 0;
    width = 80;
    height = 70;
    offset_left = 10;
    offset_top = 5;
    offset_right = -20;
    offset_bottom = -10;
    speed = 0.5;
    health = 10;
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
        this.x = 2120;
        this.otherDirection = true;
        this.loadImages(this.IMAGES_FLY);
        this.loadImages(this.IMAGES_ENEMY_EXPLOTION);
        this.animateBossEnemy(this.IMAGES_FLY);
    }


    animateBossEnemy(images_arr) {
        let waitInterval = setInterval(() => {
            this.playAnimation(images_arr);
        }, 150);

        let startInterval = setInterval(() => {
            if (world && world.character.x >= 1949) {
                clearInterval(waitInterval);
                clearInterval(startInterval);
                this.stopLevelBackgroundMusic();
                this.startBossFightMusic();
                world.character.isInBattleArena = true;
                world.character.enteredBattleArena = true;
                this.animateBossFight();
            }
        }, 100);
    }


    stopLevelBackgroundMusic() {
        level_bgr_music.pause();
        level_bgr_music.currentTime = 0;
        level_bgr_music.muted = true;
    }


    startBossFightMusic() {
        boss_fight_music.currentTime = 0;
        boss_fight_music.play();
        if (boss_fight_music.muted) {
            boss_fight_music.muted = true;
        }
    }


    stopBossFightMusic() {
        boss_fight_music.pause();
        boss_fight_music.muted = true;
    }


    animateBossFight() {
        let moveInterval;
        let animateInterval;
        if (!this.is_Dead) {
            animateInterval = setInterval(() => {
                this.playAnimation(this.IMAGES_FLY);
                this.checkDeathOfBossfight(animateInterval);
            }, 150);
            moveInterval = setInterval(() => {
                if (this.x <= 2044) {
                    this.moveLeftAnimation();
                }
                if (this.x > 2044) {
                    this.moveRightAnimation();
                }
            }, 1000 / 50);
        }

        setTimeout(() => {
            clearInterval(moveInterval);
            clearInterval(animateInterval);
            this.attackCharacter(animateInterval);
        }, 6000);
    }


    attackCharacter(animateInterval) {
        let attackAnimationInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_FLY);
            this.checkDeathOfBossfight(animateInterval);
        }, 150);

        let attackCharacterInterval = setInterval(() => {
            if (this.x < world.character.x) {
                this.otherDirection = false;
                this.x += 6 * this.speed; // Move twice as fast
            } else if (this.x > world.character.x) {
                this.otherDirection = true;
                this.x -= 6 * this.speed; // Move twice as fast
            }
            // Move down towards the character's position
            if (this.y < world.character.y) {
                this.y += 6 * this.speed; // Move twice as fast
                // this.moveUp = true;
            }
            if (this.isColliding(world.character)) {
                clearInterval(attackCharacterInterval);
                clearInterval(attackAnimationInterval);
                setTimeout(() => {
                    this.animateBossFight();
                }, 25);
            }
        }, 1000 / 25);
    }


    checkDeathOfBossfight(animateInterval) {
        if (this.is_Dead) {
            this.stopBossFightMusic();
            this.bossEnemyIsDead(this.IMAGES_ENEMY_EXPLOTION, animateInterval);
        }
        if (world.character.is_Dead) {
            this.stopBossFightMusic();
        }
    }


    bossEnemyIsDead(array, animateInterval) {
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


    moveRightAnimation() {
        if (!this.moveRight) {
            this.x -= this.speed;
            if (this.x <= 2100) {
                this.moveRight = true;
            }
        } else {
            this.x += this.speed;
            if (this.x >= 2110) { // right boundary
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


    moveLeftAnimation() {
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
            if (this.x >= 1890) { // left boundary
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


    moveUpAnimation() {
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