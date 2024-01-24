class SkylineNear extends AnimatedBackground {

    IMAGES_SKYLINE_NEAR = [
        {
            'path': 'assets/environment/background/near-buildings-a-bg.png',
            'width': 400,
            'height': 150,
            'x': 0,
            'y': 15
        },
        {
            'path':'assets/environment/background/near-buildings-b-bg.png',
            'width': 400,
            'height': 150,
            'x': 410,
            'y': 0
        }
    ];
    currentImage = 0;

    constructor() {
        super().loadImage(this.IMAGES_SKYLINE_NEAR[0].path);
        this.loadImages(this.IMAGES_SKYLINE_NEAR, this.IMAGES_SKYLINE_NEAR.x, this.IMAGES_SKYLINE_NEAR.y, this.IMAGES_SKYLINE_NEAR.width, this.IMAGES_SKYLINE_NEAR.height);
        this.animateBackground(this.IMAGES_SKYLINE_NEAR, 2);
        this.width = this.IMAGES_SKYLINE_NEAR[0].width;
        this.height = this.IMAGES_SKYLINE_NEAR[0].height;
        this.y = this.IMAGES_SKYLINE_NEAR[0].y;
        this.x = this.IMAGES_SKYLINE_NEAR[0].x;
    }
}