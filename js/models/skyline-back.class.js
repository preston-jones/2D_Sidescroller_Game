/**
 * SkylineBack class
 * 
 * Represents the animated skyline background object in the back of the level.
 * 
 * @class SkylineBack
 * @extends {AnimatedBackground}
 */
class SkylineBack extends AnimatedBackground {

    /* Array of images for the skyline background */
    IMAGES_SKYLINE_FAR = [
        'assets/environment/background/skyline-1.png',
        'assets/environment/background/skyline-2.png'
    ];


    /**
     * The constructor of the SkylineBack class.
     * 
     * @param {string} imagePath - The image path of the skyline background.
     * @param {number} x - The x coordinate of the skyline background.
     * @param {number} y - The y coordinate of the skyline background.
     * @param {number} width - The width of the skyline background.
     * @param {number} height - The height of the skyline background.
     */
    constructor(imagePath, x, y, width, height) {
        super().loadImage(imagePath);
        this.loadImages(this.IMAGES_SKYLINE_FAR);
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
        this.animateBackground(0.2);
    }
}