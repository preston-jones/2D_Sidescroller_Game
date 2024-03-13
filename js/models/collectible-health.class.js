class CollectibleHealth extends DrawableObject {

    IMAGES_ENERGY = [
        'assets/collectibles/health/health-1.png',
        'assets/collectibles/health/health-2.png',
        'assets/collectibles/health/health-3.png',
        'assets/collectibles/health/health-4.png',
        'assets/collectibles/health/health-5.png',
        'assets/collectibles/health/health-6.png',
        'assets/collectibles/health/health-7.png',
    ];


    constructor(x, y, width, height) {
        super().loadImage('assets/statusbar/heart.png');
        this.loadImages(this.IMAGES_ENERGY);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.animateCollectible();
    }

    animateCollectible() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ENERGY)
        }, 100);
    }

}