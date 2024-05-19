/**
 * The MovableObject class is a class that is used to create objects that can be moved on the canvas.
 * 
 * @class MovableObject
 */
class MovableObject extends DrawableObject {
    speed;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    levelGround = 100;
    health;
    health_MAX;
    energy;
    energy_MAX;
    is_Hurt = false;
    is_Dead = false;
    lastHit = 0;
    impact = false;
    lastCollidedWith = null;
    inCollision = false;
    lastHitTime = 0; // Add this line
    hitCooldown = 1000; // Cooldown period in milliseconds


    /**
     * This function checks if the object is above the ground.
     * 
     * @returns {boolean} - Returns true if the object is above the ground, otherwise false.
     */
    isAboveGround() {
        return this.y < world.level.level_end_bottom_y;
    }


    /**
     * This function applies gravity to the object.
     */
    applyGravity() {
        setInterval(() => {
            if (world && !world.isOnPlatform) {
                world.isOnPlatform = false;
                if (this.isAboveGround() || this.speedY > 0) {
                    this.y -= this.speedY;
                    this.speedY -= this.acceleration;
                }
                else {
                    this.y = world.level.level_end_bottom_y;
                }
            }
            if (world && world.isOnPlatform && this instanceof Character) {
                if (this.isAboveGround() || this.speedY > 0) {
                    this.y -= this.speedY;
                    this.speedY -= this.acceleration;
                }
                else {
                    this.y = 39;
                }
            }

        }, 1000 / 25)
    }


    /**
     * This function makes the object jump.
     */
    jump() {
        if (this.y === world.level.level_end_bottom_y) {
            this.speedY = 11;
            if (this instanceof Character) {
                jump_sound.play();
            }
        }
    }


    /**
     * This function checks if the object is colliding with another object.
     * 
     * @param {MovableObject} obj - The object to check for collision with.
     */
    isColliding(obj) {
        return this.x + this.width + this.offset_right > obj.x + obj.offset_left &&
            this.y + this.height + this.offset_bottom > obj.y + obj.offset_top &&
            this.x + this.offset_left < obj.x + obj.width + obj.offset_right &&
            this.y + this.offset_top < obj.y + obj.height + obj.offset_bottom;
    }


    /**
     * This function checks if the object is hit by another object.
     * If the object is an instance of Character or an enemy, the object loses health points.
     * It also checks if the object is dead.
     */
    hit() {
        if (this instanceof Character) {
            this.hitCharacter();
        }
        if (!world.shotFired) {
            if (this instanceof Cop || this instanceof Bootleg || this instanceof Drone) {
                this.hitEnemy();
            }
            if (this instanceof BossEnemy) {
                this.hitBossEnemy();
            }
            this.shotFired = true;
        }
    }


    hitCharacter() {
        let currentTime = new Date().getTime();
        if (!this.is_Dead && !this.inCollision && !this.is_Hurt && currentTime - this.lastHitTime > this.hitCooldown) {
            if (this.isInBattleArena) {
                this.health -= 2.5;
            }
            else {
                this.health -= 1;
            }
            this.is_Hurt = true;
            this.inCollision = true;
            this.lastHitTime = currentTime; // Update lastHitTime
            this.playAnimation_HURT();
            this.is_Hurt = false;
        }
        if (this.health <= 0) {
            this.health === 0;
            this.is_Dead = true;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    hitEnemy() {
        this.health -= 1;
        this.enemyHitAnimation();
        if (this.health <= 0) {
            this.health === 0;
            this.is_Dead = true;
        }
    }


    hitBossEnemy() {
        if (!this.isAttacking && !this.isColliding(world.character)) {
            this.health -= 1;
            this.speed += 0.05;
            this.enemyHitAnimation();
        }
        if (this.health <= 0) {
            this.health === 0;
            this.is_Dead = true;
        }
        world.level.bossEnemy_HEALTHBAR.updateStatusbarBossEnemyHealth(this.health);
    }


    /**
     * This function plays the hurt animation of the enemy object.
     * The enemy object blinks 5 times.
     */
    enemyHitAnimation() {
        let blinkTimes = 0;
        this.isInverted = false; // Add this line
        const blinkInterval = setInterval(() => {
            this.isInverted = blinkTimes % 2 === 0;
            blinkTimes++;
            if (blinkTimes >= 5) { // Blink for 1 second (50ms * 20)
                clearInterval(blinkInterval);
                this.isInverted = false; // Ensure the image is not inverted after blinking
            }
        }, 50); // Blink every 50ms
    }


    /**
     * This function checks if the object is dead.
     * 
     * @returns {boolean} - Returns true if the object is dead, otherwise false.
     */
    isDead() {
        return this.health == 0;
    }


    /**
     * Function to move the object to the left.
     * 
     * @param {number} speed - The speed at which the object moves to the left.
     */
    moveToLeft(speed) {
        this.x -= speed;
        if (this instanceof Character) {
            this.otherDirection = true;
        }
        if (this instanceof VehiclesFront) {
            this.otherDirection = false;
        }
    }


    /**
     * Function to move the object to the right.
     * 
     * @param {number} speed - The speed at which the object moves to the right.
     */
    moveToRight(speed) {
        this.x += speed;
        if (this instanceof Character) {
            this.otherDirection = false;
        }
        if (this instanceof VehiclesFront) {
            this.otherDirection = true;
        }
    }


    /**
     * Function to let the object stay at the same position.
     * This function is used to stop the movement of the object.
     */
    stay() {
        this.x = this.x;
    }


    /**
     * Function to move the object down.
     */
    moveDown(speed) {
        this.y -= speed;
    }


    /**
     * Function to play the death animation of the enemy object.
     * 
     * @param {string[]} array - The array of images to play the death animation.
     */
    playAnimation_Enemy_DEAD(array) {
        this.playAnimation(array);
    }


    /**
     * Function to move the enemy object and play the animation.
     * 
     * @param {string[]} images_arr - The array of images to play the animation.
     * @param {string[]} array - The array of images to play the explosion animation when the enemy object is dead.
     */
    animateEnemy(images_arr, array) {
        let moveInterval = setInterval(() => {
            this.moveEnemy(moveInterval);
        }, 1000 / 60);

        let animateInterval;
        if (this instanceof Bootleg) {
            animateInterval = setInterval(() => {
                this.enemyAnimation(images_arr, array, animateInterval);
            }, 225);
        }
        else {
            animateInterval = setInterval(() => {
                this.enemyAnimation(images_arr, array, animateInterval);
            }, 100);
        }
    }


    /**
     * Function to animate the enemy object.
     * If the enemy object is dead, the death animation is played and the function to erase the object from the canvas is called.
     * 
     * @param {string[]} images_arr - The array of images to play the animation.
     * @param {string[]} array - The array of images to play the explosion animation when the enemy object is dead.
     * @param {number} animateInterval - The interval at which the animation is played.
     */
    enemyAnimation(images_arr, array, animateInterval) {
        if (!this.is_Dead) {
            this.playAnimation(images_arr);
        }
        if (this.is_Dead) {
            this.playAnimation_Enemy_DEAD(array);
            explosion_sound.play();
            clearInterval(animateInterval);
            setTimeout(() => {
                this.eraseEnemy();
            }, 100); // Adjust the timeout to match the length of the death animation
        }
    }


    /**
     * Function to erase the enemy object from the canvas.
     */
    eraseEnemy() {
        // Assuming world.enemies is the array holding all enemy objects
        let index = world.level.enemies.indexOf(this);
        if (index > -1) {
            world.level.enemies.splice(index, 1);
        }
    }


    /**
     * Function to move the enemy object.
     * 
     * @param {number} moveInterval - The interval at which the enemy object is moved.
     */
    moveEnemy(moveInterval) {
        if (world && world.character.x >= 60) {
            if (!this.is_Dead) {
                this.moveToLeft(this.speed);
            }
            if (this.is_Dead) {
                this.stay();
                clearInterval(moveInterval);
            }
        }
    }
}