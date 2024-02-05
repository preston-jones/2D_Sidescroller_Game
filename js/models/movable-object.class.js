class MovableObject extends DrawableObject{

    speed;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    levelGround = 99;
    energy = 100;
    energy_MAX = 500;
    is_Hurt = false;
    is_Dead = false;
    lastHit = 0;
    world;


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


    playAnimation(arr) {
        let i = this.currentImage % arr.length;// Modulu Function let i = 0 % 8; 0 geteilt durch 8 = 0, Rest 0
        let path = arr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    isColliding(obj) {
        return (this.x + this.width > obj.x) &&
            (this.y + this.height > obj.y) &&
            (this.x < obj.x) &&
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
        this.energy -= 1;
        if (this.energy < 0) {
            this.energy = 0;
            this.is_Dead = true;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;  // Difference in ms
        timepassed = timepassed / 1000; //Difference in s
        return timepassed < 1; // wurden innerhalb der letzten 5 sec getroffen
    }


    isDead() {
        return this.energy = 0;
    }
}