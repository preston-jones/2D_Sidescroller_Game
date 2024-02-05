class Drone extends MovableObject {

    x;
    y = 10;
    width = 40;
    height = 40;
    speed = 0.5;

    IMAGES_STAY = [
        'assets/sprites/enemies/drone/drone-1.png',
    ];
    IMAGES_FLY = [
        'assets/sprites/enemies/drone/drone-1.png',
        'assets/sprites/enemies/drone/drone-2.png',
        'assets/sprites/enemies/drone/drone-3.png',
        'assets/sprites/enemies/drone/drone-4.png'
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('assets/sprites/enemies/drone/drone-1.png');
        this.x = Math.round(250 + Math.random() * 500);
        this.loadImages(this.IMAGES_FLY);
        this.applyGravity();
        this.animateDrone();
    }


    animateDrone() {
        setInterval(() => {
            if (this.x > 0) {
                this.x -= this.speed
                this.otherDirection = false;
            }
            if (this.x < 0) {
                this.x += this.speed
                this.otherDirection = true;
            }
        }, 1000 / 60);
    }
}