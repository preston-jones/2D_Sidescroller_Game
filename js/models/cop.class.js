class Cop extends MovableObject {

    x;
    y = 8;
    width = 60;
    height = 50;
    speed = 0.5 + Math.random() * 0.8;

    IMAGES_RUN = [
        'assets/sprites/enemies/cop/run/cop1.png',
        'assets/sprites/enemies/cop/run/cop2.png',
        'assets/sprites/enemies/cop/run/cop3.png',
        'assets/sprites/enemies/cop/run/cop4.png',
        'assets/sprites/enemies/cop/run/cop5.png',
        'assets/sprites/enemies/cop/run/cop6.png',
        'assets/sprites/enemies/cop/run/cop7.png',
        'assets/sprites/enemies/cop/run/cop8.png',
        'assets/sprites/enemies/cop/run/cop9.png',
        'assets/sprites/enemies/cop/run/cop10.png',
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('assets/sprites/enemies/cop/idle/cop2.png');
        this.x = 200;
        this.loadImages(this.IMAGES_RUN);
        this.applyGravity();
        this.animateCop();
    }


    animateCop() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_RUN);
        }, 70);
    }
}