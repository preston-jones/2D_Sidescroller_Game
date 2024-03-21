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
    explosion_sound = new Audio('assets/audio/explosion.ogg');

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
        return (this.x < obj.x + obj.width) &&
            (this.x + this.width > obj.x) &&
            (this.y < obj.y + obj.height) &&
            (this.y + this.height > obj.y);
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


    animateEnemie(images_arr, array) {
        let moveInterval = setInterval(() => {
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
        }, 1000 / 60);

        let animateInterval = setInterval(() => {
            if (!this.is_Dead) {
                this.playAnimation(images_arr);
            }
            if (this.is_Dead) {
                console.log('Enemy is dead, playing death animation');
                this.playAnimation_Enemy_DEAD(array);
                this.explosion_sound.play();
                clearInterval(animateInterval);
                setTimeout(() => {
                    // Assuming world.enemies is the array holding all enemy objects
                    let index = world.level.enemies.indexOf(this);
                    if (index > -1) {
                        world.level.enemies.splice(index, 1);
                    }
                }, 100); // Adjust the timeout to match the length of the death animation
            }

        }, 150);
    }

}