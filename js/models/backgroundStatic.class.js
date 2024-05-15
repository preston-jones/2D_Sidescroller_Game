/**
 * BackgroundStatic class is a class that represents a static background element on the canvas.
 * 
 * @class BackgroundStatic
 * @extends MovableObject
 */
class BackgroundStatic extends MovableObject {


    /**
     * The constructor of the BackgroundStatic class.
     * @param {string} imagePath - The path to the image of the static background element.
     * @param {number} x - The x coordinate of the static background element on the canvas.
     * @param {number} y - The y coordinate of the static background element on the canvas.
     * @param {number} width - The width of the static background element.
     * @param {number} height - The height of the static background element.
     */
    constructor(imagePath, x, y, width, height) {
        super().loadImage(imagePath);
        this.width = width;
        this.height = height;
        this.y = y;
        this.x = x;
    }
}