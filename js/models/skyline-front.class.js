/**
 * SkylineFront class
 * 
 * Represents the animated skyline background object in the front of the level.
 * 
 * @class SkylineFront
 * @extends {AnimatedBackground}
 */
class SkylineFront extends AnimatedBackground {

    /* Array of images for the skyline background */
    IMAGES_SKYLINE_NEAR = [
        'assets/environment/background/near-buildings-a-bg.png',
        'assets/environment/background/near-buildings-b-bg.png'
    ];


    /**
     * The constructor of the SkylineFront class.
     * 
     * @param {string} imagePath - The image path of the skyline background.
     * @param {number} x - The x coordinate of the skyline background.
     * @param {number} y - The y coordinate of the skyline background.
     * @param {number} width - The width of the skyline background.
     * @param {number} height - The height of the skyline background.
     */
    constructor(imagePath, x, y, width, height) {
        super().loadImage(imagePath);
        this.loadImages(this.IMAGES_SKYLINE_NEAR);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.animate();
    }


    /**
     * Animates the skyline background.
     */
    animate() {
        this.animateBackground(0.1);
    }
}