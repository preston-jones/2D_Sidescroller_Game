class CollectibleEnergy extends DrawableObject {
    offset_left = -5;
    offset_top = 0;
    offset_right = 5;
    offset_bottom = 0;

    IMAGES_ENERGY = [
        'assets/collectibles/energy/energy-1.png',
        'assets/collectibles/energy/energy-2.png',
        'assets/collectibles/energy/energy-3.png',
        'assets/collectibles/energy/energy-4.png',
        'assets/collectibles/energy/energy-5.png',
        'assets/collectibles/energy/energy-6.png',
        'assets/collectibles/energy/energy-7.png',
        'assets/collectibles/energy/energy-8.png',
        'assets/collectibles/energy/energy-9.png',
        'assets/collectibles/energy/energy-10.png',
        'assets/collectibles/energy/energy-11.png',
        'assets/collectibles/energy/energy-12.png',
        'assets/collectibles/energy/energy-13.png',
        'assets/collectibles/energy/energy-14.png',
        'assets/collectibles/energy/energy-15.png',
        'assets/collectibles/energy/energy-16.png',
        'assets/collectibles/energy/energy-17.png',
        'assets/collectibles/energy/energy-18.png',
        'assets/collectibles/energy/energy-19.png',
        'assets/collectibles/energy/energy-20.png',
        'assets/collectibles/energy/energy-21.png',
        'assets/collectibles/energy/energy-22.png',
        'assets/collectibles/energy/energy-23.png',
        'assets/collectibles/energy/energy-24.png'
    ];


    constructor(x, y, width, height) {
        super().loadImage('assets/collectibles/energy/energy-1.png');
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