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


    hit(enemy) {
        console.log(this.health);
        console.log('hit');
        if (this.x > 0 && !this.is_Dead && this.lastCollidedWith !== enemy) {
            this.health -= 1;
            this.is_Hurt = true;
            this.lastCollidedWith = enemy;
        }
        if (this.health < 0) {
            this.health = 0;
            this.is_Dead = true;
        } else {
            this.lastHit = new Date().getTime();
        }
        this.is_Hurt = false;
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;  // Difference in ms
        timepassed = timepassed / 1000; //Difference in s
        return timepassed < 1; // wurden innerhalb der letzten 5 sec getroffen
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


    moveUp(speed) {
        this.y += speed;
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
            if (!this.is_Dead) {
                this.moveToLeft(this.speed);
            }
            if (this.is_Dead) {
                this.stay();
                clearInterval(moveInterval);
            }
        }, 1000 / 60);

        let animateInterval = setInterval(() => {
            if (!this.is_Dead) {
                this.playAnimation(images_arr);
            }
            if (this.is_Dead) {
                console.log('Enemy is dead, playing death animation');
                this.playAnimation_Enemy_DEAD(array);
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


    checkIfHurt() {
        if (this.isHurt() && !this.is_Dead) {
            console.log('is hit');
        }
    }

}