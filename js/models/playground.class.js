/**
 * Playground class is used to create the ground platform for the game.
 * 
 * @class Playground
 * @extends DrawableObject
 */
class Playground extends DrawableObject {

    /* Array of the images paths for the ground platform. */
    IMAGE_PLATFORM = [
        'assets/environment/floor.png'
    ];


    /**
     * The constructor of the Playground class.
     * @param {string} imagePath - The path to the image of the ground platform.
     * @param {number} x - The x coordinate of the ground platform.
     * @param {number} y - The y coordinate of the ground platform.
     * @param {number} width - The width of the ground platform.
     * @param {number} height - The height of the ground platform.
     */
    constructor(imagePath, x, y, width, height) {
        super().loadImage(imagePath);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
}