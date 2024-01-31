class MovableObject {
    x;
    y;
    height;
    width;
    speed;
    img;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    levelGround = 99;
    world;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            else {
                this.y = this.levelGround;
            }
        }, 1000 / 60)
    }


    jump() {
        this.y = 40;
    }


    isAboveGround() {
        return this.y < this.levelGround;
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(arr) {
        let i = this.currentImage % arr.length;// Modulu Function let i = 0 % 8; 0 geteilt durch 8 = 0, Rest 0
        let path = arr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}