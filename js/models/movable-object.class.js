class MovableObject extends DrawableObject {

    offsetY = 0;
    offsetX = 0;
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


    // isColliding(obj) {
    //     return (this.x < obj.x + obj.width) &&
    //         (this.x + this.width > obj.x) &&
    //         (this.y < obj.y + obj.height) &&
    //         (this.y + this.height > obj.y);
    // }


    isColliding(obj) {
        return (this.x + this.offsetX + this.width) >= obj.x &&
            (this.x + this.offsetX) <= (obj.x + obj.width) &&
            (this.y + this.offsetY + this.height) >= obj.y &&
            (this.y + this.offsetY) <= (obj.y + obj.height);
        // && 
        // obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }


    hit() {
        if (this instanceof Character) {
            console.log('Character is Hit');
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
            if (this.health < 0) {
                this.health = 0;
                this.is_Dead = true;
            }

        }
    }


    isDead() {
        return this.health == 0;
    }


    moveToLeft(speed) {
        this.x -= speed;
        if (this instanceof Character) {
            this.otherDirection = true;
        }
    }


    moveToRight(speed) {
        this.x += speed;
        if (this instanceof Character) {
            this.otherDirection = false;
        }
    }


    stay() {
        this.x = this.x;
    }


    moveDown(speed) {
        this.y -= speed;
    }


    shotImpact() {
        console.log('BOOOOOM');
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
            console.log('Enemy is dead, playing death animation');
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
            console.log('Enemys start moving');
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