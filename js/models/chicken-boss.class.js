class ChickenBoss extends MovableObject {

    x = 280 + Math.random() * 500; // Zahl zwischen 80 und 250
    y = 295;
    width = 140;
    height = 160;

    IMAGES_RUN = [
        'assets/sprites/enemies/chickenboss/output-onlinepngtools.png',
        'assets/sprites/enemies/chickenboss/output-onlinepngtools_1.png',
        'assets/sprites/enemies/chickenboss/output-onlinepngtools_2.png',
        'assets/sprites/enemies/chickenboss/output-onlinepngtools_3.png',
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('assets/sprites/enemies/chickenboss/output-onlinepngtools.png');
        this.loadImages(this.IMAGES_RUN);
        this.animate();
    }


    animate() {

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_RUN.length;// Modulu Function let i = 0 % 8; 0 geteilt durch 8 = 0, Rest 0
            let path = this.IMAGES_RUN[i];
            this.img = this.imageCache[path];
            this.currentImage ++;
        }, 100);
    }
}