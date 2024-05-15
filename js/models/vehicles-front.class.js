/**
 * VehiclesFront class
 * 
 * Class for the vehicle object that moves in the background of the game.
 * 
 * @class VehiclesFront
 * @extends MovableObject
 */
class VehiclesFront extends MovableObject {
    height;
    width;
    speed = 2;
    direction;
    currentImage = 0;


    /**
     * The constructor of the VehiclesFront class.
     * 
     * @param {string} image - The image path of the vehicle.
     * @param {number} x - The x coordinate of the vehicle.
     * @param {number} y - The y coordinate of the vehicle.
     * @param {number} width - The width of the vehicle.
     * @param {number} height - The height of the vehicle.
     * @param {number} speed - The speed of the vehicle.
     * @param {number} direction - The direction of the vehicle.
     */
    constructor(image, x, y, width, height, speed, direction) {
        super().loadImage(image);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = direction; // -1 for left, 1 for right
        this.animateVehicle(y);
    }


    /**
     * Animates the vehicle.
     * 
     * @param {number} y - The y coordinate of the vehicle.
     */
    animateVehicle(y) {
        setInterval(() => {
            if (this.x >= 2300) {
                this.direction = -1;
            } else if (this.x <= -200) {
                this.direction = 1;
            }

            if (this.direction === 1) {
                this.moveToRight(this.speed);
                this.y = y;  
            } else {
                this.moveToLeft(this.speed);
                this.y = 10;                
            }
        }, 1000 / 60);
    }
}