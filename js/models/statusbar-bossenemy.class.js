/**
 * Statusbar class
 * 
 * Represents the statusbar object in the game.
 * 
 * @class StatusbarBossEnemy
 * @extends {DrawableObject}
 */
class StatusbarBossEnemy extends DrawableObject {

    /* Arrays of the images paths for the statusbar object. */
    IMAGES_HEALTH_STATUSBAR_BOSSENEMY = [
        'assets/statusbar/boss_healthbar/boss_healthbar_1.png',
        'assets/statusbar/boss_healthbar/boss_healthbar_2.png',
        'assets/statusbar/boss_healthbar/boss_healthbar_3.png',
        'assets/statusbar/boss_healthbar/boss_healthbar_4.png',
        'assets/statusbar/boss_healthbar/boss_healthbar_5.png',
        'assets/statusbar/boss_healthbar/boss_healthbar_6.png',
        'assets/statusbar/boss_healthbar/boss_healthbar_7.png',
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


    getImageIndex(index) {
        if (index === 30) {return 0;}
        else if (index === 25) {return 1;}
        else if (index === 20) {return 2;}
        else if (index === 15) {return 3;}
        else if (index === 10) {return 4;}
        else if (index === 5) {return 5;}
        else if (index === 0) {return 6;}
    }


    updateStatusbarBossEnemyHealth(bossEnemyHealth) {
        let imageIndex = this.getImageIndex(bossEnemyHealth);
        if (imageIndex !== undefined) {
            this.loadImage(this.IMAGES_HEALTH_STATUSBAR_BOSSENEMY[imageIndex]); 
        }
    }
}