class MovableObject extends DrawableObject {

    speed;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    levelGround = 99;
    health = 100;
    health_MAX = 100;
    energy = 10;
    energy_MAX = 10;
    is_Hurt = false;
    is_Dead = false;
    lastHit = 0;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            else {
                this.y = world.level.level_end_bottom_y;
            }
        }, 1000 / 25)
    }


    jump() {
        if (this.y === world.level.level_end_bottom_y) {
            this.speedY = 11;
        }
    }


    isAboveGround() {
        return this.y < world.level.level_end_bottom_y;
    }


    isColliding(obj) {
        return ((this.x + 18) + (this.width - 30) > obj.x) &&
            (this.y + this.height > obj.y) &&
            ((this.x + 18) < obj.x) &&
            (this.y < obj.y + obj.height);
    }


    // isColliding(obj) {
    //     console.log(this.offsetX);
    //     return (this.x + this.width) >= obj.y && this.x <= (obj.x + obj.width) &&
    //         (this.y + this.offsetY + this.height) >= obj.Y &&
    //         (this.y + this.offsetY) <= (obj.y + obj.height) &&
    //         obj.onCollisionCourse;
    // }


    hit() {
        this.health -= 5;
        this.is_Hurt = true;
        if (this.x > 0 && !this.is_Dead) {
            // this.x -= 1;
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
        this.otherDirection = true;
    }


    moveToRight(speed) {
        this.x += speed;
        this.otherDirection = false;
    }


    moveUp(speed) {
        this.y += speed;
    }


    moveDown(speed) {
        this.y -= speed;
    }
}