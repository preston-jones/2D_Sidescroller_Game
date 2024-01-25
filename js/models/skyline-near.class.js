class SkylineNear extends AnimatedBackground {

    width = 400;
    height = 150;
    x = 0;
    y = 15;
    speed = 2;

    IMAGES_SKYLINE_NEAR = [
        'assets/environment/background/near-buildings-a-bg.png',
        'assets/environment/background/near-buildings-b-bg.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_SKYLINE_NEAR[0]);
        this.loadImages(this.IMAGES_SKYLINE_NEAR);
        // this.animateBackground(this.IMAGES_SKYLINE_NEAR);
    }
}