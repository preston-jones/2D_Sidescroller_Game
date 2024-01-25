class Cop extends MovableObject {

    x = 200 + Math.random() * 300; // Zahl zwischen 200 und 300
    y = 98;
    width = 50;
    height = 50;
    speed = 4;

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
        this.loadImages(this.IMAGES_RUN);
        this.animateCop();
    }


    animateCop() {
        this.moveLeft(this.IMAGES_RUN, this.speed);
    }
}