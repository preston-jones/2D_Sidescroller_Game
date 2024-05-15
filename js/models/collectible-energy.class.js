/**
 * CollectibleEnergy class
 * 
 * CollectibleEnergy class is a class that extends from DrawableObject class
 * and it is used to create an object that the character can collect in the game.
 * The object recharges the energy of the character.
 * 
 * @class CollectibleEnergy
 * @extends DrawableObject
 */
class CollectibleEnergy extends DrawableObject {
    offset_left = -5;
    offset_top = 0;
    offset_right = 5;
    offset_bottom = 0;


    /* Arrays of the images paths for the animations of this object. */
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


    /**
     * The constructor of the CollectibleEnergy class.
     * @param {number} x - The x coordinate of the collectible energy object on the canvas.
     * @param {number} y - The y coordinate of the collectible energy object on the canvas.
     * @param {number} width - The width of the collectible energy object.
     * @param {number} height - The height of the collectible energy object.
     */
    constructor(x, y, width, height) {
        super().loadImage('assets/collectibles/energy/energy-1.png');
        this.loadImages(this.IMAGES_ENERGY);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.animateCollectible();
    }


    /**
     * Animates the CollectibleEnergy object.
     */
    animateCollectible() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ENERGY)
        }, 100);
    }
}