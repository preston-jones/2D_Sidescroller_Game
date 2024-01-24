class SkylineFar extends AnimatedBackground {

    IMAGES_SKYLINE_FAR = [
        {
            'path': 'assets/environment/background/skyline-1.png',
            'width': 300,
            'height': 150,
            'x': 0,
            'y': 0
        },
        {
            'path':'assets/environment/background/skyline-2.png',
            'width': 300,
            'height': 150,
            'x': 300,
            'y': 0
        }
    ];
    currentImage = 0;

    constructor() {
        super().loadImage(this.IMAGES_SKYLINE_FAR[0].path);
        this.loadImages(this.IMAGES_SKYLINE_FAR, this.IMAGES_SKYLINE_FAR.x, this.IMAGES_SKYLINE_FAR.y, this.IMAGES_SKYLINE_FAR.width, this.IMAGES_SKYLINE_FAR.height);
        this.animateBackground(this.IMAGES_SKYLINE_FAR, 1);
        this.width = this.IMAGES_SKYLINE_FAR[0].width;
        this.height = this.IMAGES_SKYLINE_FAR[0].height;
        this.y = this.IMAGES_SKYLINE_FAR[0].y;
        this.x = this.IMAGES_SKYLINE_FAR[0].x;
    }
}