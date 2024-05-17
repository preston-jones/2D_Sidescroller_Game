/**
 * BossEnemy class is a class that extends from MovableObject class
 * and it is used to create the boss enemy object in the game.
 * 
 * @class BossEnemy
 * @extends MovableObject
 */
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
    health = 6;
    moveRight = false;
    moveUp = false;
    isOnRight = false;
    isOnLeft = false;
    isUp = true;
    isAttacking = false; // Initialize isAttacking to false
    hasAttacked = false; // Initialize hasAttacked to false
    moveInterval;
    animateInterval;
    attackCharacterInterval;
    attackCharacterInterval_2;


    /* Arrays of the images paths for the animations of this object. */
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


    /**
     * The constructor of the BossEnemy class.
     */
    constructor() {
        super().loadImage(this.IMAGES_FLY[0]);
        this.x = 2120;
        this.otherDirection = true;
        this.loadImages(this.IMAGES_FLY);
        this.loadImages(this.IMAGES_ENEMY_EXPLOTION);
        this.animateBossEnemy(this.IMAGES_FLY);
    }


    /**
     * The method to animate the boss enemy object.
     * 
     * @param {Array} images_arr The array of the images paths for the animations of this object.
     */
    animateBossEnemy(images_arr) {
        this.animateInterval = setInterval(() => {
            this.playAnimation(images_arr);
            this.checkDeathOfBossfight();
        }, 150);

        let startInterval = setInterval(() => {
            if (world && world.character.x >= 1949) {
                clearInterval(startInterval);
                stopLevelBackgroundMusic();
                startBossFightMusic();
                world.character.isInBattleArena = true;
                world.character.enteredBattleArena = true;
                this.animateBossFight();
            }
        }, 100);
    }


    /**
     * The method to animate the boss enemy object during the boss fight.
     */
    animateBossFight() {
        if (!this.is_Dead && !world.character.is_Dead) {
            this.enemyBossIsNotAttacking();
            this.enemyBossIsAttacking();
        }
        if (!this.is_Dead && world.character.is_Dead) {
            this.enemyBossIsNotAttacking();
        }
    }


    /**
     * This Function moves the boss enemy object when it is not attacking the character.
     */
    enemyBossIsNotAttacking() {
        this.speed = 0.5;
        if (!this.is_Dead) {
            this.moveInterval = setInterval(() => {
                if (this.x <= 2044) { /* 2044 is suggested value for the middle of the screen */
                    this.moveEnemyBossLeft();
                }
                if (this.x > 2044) {
                    this.moveEnemyBossRight();
                }
            }, 1000 / 50);
        }
    }


    /**
     * This Function calls the different attack patterns of the boss enemy object.
     */
    enemyBossIsAttacking() {
        if (this.health > 3) {
            setTimeout(() => {
                clearInterval(this.moveInterval);
                this.firstAttackCharacter();
            }, 3000);
        }


        if (this.health <= 3) {
            setTimeout(() => {
                clearInterval(this.moveInterval);
                this.secondAttackCharacter();
            }, 4000);
        }
    }


    /**
     * Function of the first Attack pattern of the boss enemy object.
     */
    firstAttackCharacter() {
        this.speed = 1;
        this.attackCharacterInterval = setInterval(() => {
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
                clearInterval(this.attackCharacterInterval);
                setTimeout(() => {
                    this.animateBossFight();
                }, 25);
            }
        }, 1000 / 25);
    }


    /**
     * Function of the second Attack pattern of the boss enemy object.
     */
    secondAttackCharacter() {
        this.speed = 1;
        this.attackCharacterInterval_2 = setInterval(() => {
            // Save the boss's original position
            const originalX = this.x;
            const originalY = this.y;

            // Jump to the character's position
            this.x = world.character.x;
            this.y = world.character.y;

            if (this.isColliding(world.character)) {
                clearInterval(this.attackCharacterInterval_2);
                setTimeout(() => {
                    this.animateBossFight();
                }, 25);
            }
        }, 1000 / 25);
    }


    /**
     * The method to check the death of the boss enemy object.
     */
    checkDeathOfBossfight() {
        if (this.is_Dead) {
            this.bossEnemyIsDead(this.IMAGES_ENEMY_EXPLOTION);
        }
    }


    /**
     * The method to play the animation of the boss enemy object when it is dead.
     * It also removes the object from the world.
     */
    bossEnemyIsDead(array) {
        this.playAnimation_Enemy_DEAD(array);
        explosion_sound.play();
        clearInterval(this.animateInterval);
        setTimeout(() => {
            // world.enemies is the array holding all enemy objects.
            let index = world.level.enemies.indexOf(this);
            if (index > -1) {
                world.level.enemies.splice(index, 1);
            }
        }, 100); // Adjust the timeout to match the length of the death animation
        world.level.boss_dead = true;
    }


    /**
     * Function to move the boss enemy object to the right.
     */
    moveEnemyBossRight() {
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
    }


    /**
     * Function to move the boss enemy object to the left.
     * This function is used after the boss enemy is attacking the character.
     */
    moveEnemyBossLeft() {
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
    }


    /**
     * Function to move the boss enemy object up.
     * This function is used after the boss enemy is attacking the character.
     */
    moveEnemyBossUp() {
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
    }
}