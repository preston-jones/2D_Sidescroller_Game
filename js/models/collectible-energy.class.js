class CollectibleEnergy extends DrawableObject {

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
        'assets/collectibles/energy/energy-19.png'
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