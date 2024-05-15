/**
 * CollectibleHealth class
 * 
 * CollectibleHealth class is a class that extends from DrawableObject class
 * and it is used to create an object that the character can collect in the game.
 * The object recharges the health of the character.
 * 
 * @class CollectibleHealth
 * @extends DrawableObject
 */
class CollectibleHealth extends DrawableObject {
    offset_left = -5;
    offset_top = 0;
    offset_right = 5;
    offset_bottom = 0;

    /* Arrays of the images paths for the animations of this object. */
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


    /**
     * The constructor of the CollectibleEnergy class.
     * @param {number} x - The x coordinate of the collectible energy object on the canvas.
     * @param {number} y - The y coordinate of the collectible energy object on the canvas.
     * @param {number} width - The width of the collectible energy object.
     * @param {number} height - The height of the collectible energy object.
     */
    constructor(x, y, width, height) {
        super().loadImage('assets/collectibles/health/heart-1.png');
        this.loadImages(this.IMAGES_HEALTH);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.animateCollectible();
    }


    /**
     * Animates the CollectibleHealth object.
     */
    animateCollectible() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_HEALTH)
        }, 100);
    }
}