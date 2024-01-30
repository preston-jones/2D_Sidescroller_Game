class SkylineNear extends AnimatedBackground {

    IMAGES_SKYLINE_NEAR = [
        'assets/environment/background/near-buildings-a-bg.png',
        'assets/environment/background/near-buildings-b-bg.png'
    ];

    constructor(imagePath,x, y, width, height) {
        super().loadImage(imagePath);
        this.width = width;
        this.height = height;
        this.y = y;
        this.x = x;
    }
}