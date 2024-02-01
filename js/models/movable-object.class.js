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
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            else {
                this.y = world.level.level_end_bottom_y;
            }
        }, 1000 / 25)
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        ctx.lineWidth = '1';
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }


    jump() {
            if (this.y === world.level.level_end_bottom_y) {
                this.speedY = 10;
            }
    }


    isAboveGround() {
        return this.y < world.level.level_end_bottom_y;
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