/**
 * Statusbar class
 * 
 * Represents the statusbar object in the game.
 * 
 * @class StatusbarHealth
 * @extends {DrawableObject}
 */
class StatusbarHealth extends DrawableObject {

    /* Arrays of the images paths for the statusbar object. */
    IMAGES_HEALTH_STATUSBAR = [
        'assets/statusbar/healthbar/health_1.png',
        'assets/statusbar/healthbar/health_2.png',
        'assets/statusbar/healthbar/health_3.png',
        'assets/statusbar/healthbar/health_4.png',
        'assets/statusbar/healthbar/health_5.png',
        'assets/statusbar/healthbar/health_6.png',
    ];


    /**
     * The constructor of the Statusbar class.
     * 
     * @param {string} img - The image path of the statusbar.
     * @param {number} x - The x coordinate of the statusbar.
     * @param {number} y - The y coordinate of the statusbar.
     * @param {number} width - The width of the statusbar.
     * @param {number} height - The height of the statusbar.
     */
    constructor(img, x, y, width, height) {
        super().loadImage(img);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }


    updateStatusbarCharacterHealth(index) {
        this.loadImage(this.IMAGES_HEALTH_STATUSBAR[index]);
    }
}