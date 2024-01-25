class SkylineFar extends AnimatedBackground {

    width = 300;
    height = 150;
    x = 0;
    y = 0;
    speed = 1;

    IMAGES_SKYLINE_FAR = [
        'assets/environment/background/skyline-1.png',
        'assets/environment/background/skyline-2.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_SKYLINE_FAR[0]);
        this.loadImages(this.IMAGES_SKYLINE_FAR);
        // this.animateBackground(this.IMAGES_SKYLINE_FAR);
    }
}