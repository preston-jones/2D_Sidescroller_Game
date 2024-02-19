class SkylineFront extends AnimatedBackground {

    IMAGES_SKYLINE_NEAR = [
        'assets/environment/background/near-buildings-a-bg.png',
        'assets/environment/background/near-buildings-b-bg.png'
    ];

    constructor(imagePath, x, y, width, height) {
        super().loadImage(imagePath);
        this.loadImages(this.IMAGES_SKYLINE_NEAR);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        // this.animateBackground();
    }


    animateBackground() {

            this.animate(2, 2);

    }
}