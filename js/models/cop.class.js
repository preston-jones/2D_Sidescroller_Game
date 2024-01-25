class Cop extends MovableObject {

    x = 280 + Math.random() * 500; // Zahl zwischen 80 und 250
    y = 390;
    width = 140;
    height = 160;

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
        super().loadImage('./assets/sprites/enemies/cop/idle/cop2.png');
        this.loadImages(this.IMAGES_RUN);
        this.animateCop();
    }


    animateCop() {

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_RUN.length;// Modulu Function let i = 0 % 8; 0 geteilt durch 8 = 0, Rest 0
            let path = this.IMAGES_RUN[i];
            this.img = this.imageCache[path];
            this.currentImage ++;
        }, 100);
    }
}