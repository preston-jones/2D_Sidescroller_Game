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


    isAboveGround() {
        return this.y < world.level.level_end_bottom_y;
    }


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


    jump() {
        if (this.y === world.level.level_end_bottom_y) {
            this.speedY = 11;
        }
    }


    isColliding(obj) {
        return this.x + this.width + this.offset_right > obj.x + obj.offset_left &&
            this.y + this.height + this.offset_bottom > obj.y + obj.offset_top &&
            this.x + this.offset_left < obj.x + obj.width + obj.offset_right &&
            this.y + this.offset_top < obj.y + obj.height + obj.offset_bottom;
    }


    hit() {
        if (this instanceof Character) {
            let currentTime = new Date().getTime();
            if (!this.is_Dead && !this.inCollision && !this.is_Hurt && currentTime - this.lastHitTime > this.hitCooldown) {
                this.health -= 1;
                this.is_Hurt = true;
                this.inCollision = true;
                this.lastHitTime = currentTime; // Update lastHitTime
                world.checkHealthStatus();
                this.playAnimation_HURT();
                this.is_Hurt = false;
            }
            if (this.health < 0) {
                this.health = 0;
                this.is_Dead = true;
            } else {
                this.lastHit = new Date().getTime();
            }
        }
        if (this instanceof Cop || this instanceof Bootleg || this instanceof Drone || this instanceof BossEnemy) {
            this.health -= 1;
            this.enemyHitAnimation();
            if (this.health < 0) {
                this.health = 0;
                this.is_Dead = true;
            }
        }
    }


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


    isDead() {
        return this.health == 0;
    }


    moveToLeft(speed) {
        this.x -= speed;
        if (this instanceof Character) {
            this.otherDirection = true;
        }
        if (this instanceof VehiclesFront) {
            this.otherDirection = false;
        }
    }


    moveToRight(speed) {
        this.x += speed;
        if (this instanceof Character) {
            this.otherDirection = false;
        }
        if (this instanceof VehiclesFront) {
            this.otherDirection = true;
        }
    }


    stay() {
        this.x = this.x;
    }


    moveDown(speed) {
        this.y -= speed;
    }


    shotImpact() {
        impact = true;
    }


    playAnimation_Enemy_DEAD(array) {
        this.playAnimation(array);
    }


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


    eraseEnemy() {
        // Assuming world.enemies is the array holding all enemy objects
        let index = world.level.enemies.indexOf(this);
        if (index > -1) {
            world.level.enemies.splice(index, 1);
        }
    }


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