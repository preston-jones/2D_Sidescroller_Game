class SkylineBack extends AnimatedBackground {

    IMAGES_SKYLINE_FAR = [
        'assets/environment/background/skyline-1.png',
        'assets/environment/background/skyline-2.png'
    ];

    constructor(imagePath, x, y, width, height) {
        super().loadImage(imagePath);
        this.loadImages(this.IMAGES_SKYLINE_FAR);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.animate();
    }


    animate() {
            this.animateBackground(0.2, 0.2);
    }
    
}