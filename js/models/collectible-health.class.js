class CollectibleHealth extends DrawableObject {

    IMAGES_HEALTH = [
        'assets/collectibles/health/heart-1.png',
        'assets/collectibles/health/heart-2.png',
        'assets/collectibles/health/heart-3.png',
        'assets/collectibles/health/heart-4.png',
        'assets/collectibles/health/heart-5.png',
        'assets/collectibles/health/heart-6.png',
        'assets/collectibles/health/heart-7.png',
        'assets/collectibles/health/heart-8.png',
        'assets/collectibles/health/heart-9.png',
        'assets/collectibles/health/heart-10.png',
        'assets/collectibles/health/heart-11.png',
        'assets/collectibles/health/heart-12.png',
        'assets/collectibles/health/heart-13.png',
    ];


    constructor(x, y, width, height) {
        super().loadImage('assets/collectibles/health/heart-1.png');
        this.loadImages(this.IMAGES_HEALTH);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.animateCollectible();
    }

    animateCollectible() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_HEALTH)
        }, 100);
    }

}