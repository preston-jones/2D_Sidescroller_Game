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
        'assets/statusbar/energybar/energy_1.png',
        'assets/statusbar/energybar/energy_2.png',
        'assets/statusbar/energybar/energy_3.png',
        'assets/statusbar/energybar/energy_4.png',
        'assets/statusbar/energybar/energy_5.png',
        'assets/statusbar/energybar/energy_6.png',
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
        this.loadImages(this.IMAGES_HEALTH_STATUSBAR);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }


    setImageIndexForCharacter() {
        if (world.character.health === 10) {return 0;}
        else if (world.character.health === 8) {return 1;}
        else if (world.character.health === 6) {return 2;}
        else if (world.character.health === 4) {return 3;}
        else if (world.character.health === 2) {return 4;}
        else if (world.character.health === 0) {return 5;}
    }


    setStatusbarForCharacter(statusbarname, value) {
        this.checkStatusBarName(statusbarname);
        this.loadImage(this.statusbar_img[this.setImageIndexForCharacter(value)]);
    }
}