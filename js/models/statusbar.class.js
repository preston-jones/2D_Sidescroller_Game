/**
 * Statusbar class
 * 
 * Represents the statusbar object in the game.
 * 
 * @class Statusbar
 * @extends {DrawableObject}
 */
class Statusbar extends DrawableObject {

    /* Arrays of the images paths for the statusbar object. */
    IMAGES_HEALTH_STATUSBAR = [
        'assets/statusbar/energybar/energy_1.png',
        'assets/statusbar/energybar/energy_2.png',
        'assets/statusbar/energybar/energy_3.png',
        'assets/statusbar/energybar/energy_4.png',
        'assets/statusbar/energybar/energy_5.png',
        'assets/statusbar/energybar/energy_6.png',
    ];
    IMAGES_ENERGY_STATUSBAR = [
        'aassets/statusbar/healthbar/health_1.png',
        'aassets/statusbar/healthbar/health_2.png',
        'aassets/statusbar/healthbar/health_3.png',
        'aassets/statusbar/healthbar/health_4.png',
        'aassets/statusbar/healthbar/health_5.png',
        'aassets/statusbar/healthbar/health_6.png',
    ];
    IMAGES_HEALTH_STATUSBAR_BOSSENEMY = [
        'assets/statusbar/boss_healthbar/boss_healthbar_1.png',
        'assets/statusbar/boss_healthbar/boss_healthbar_2.png',
        'assets/statusbar/boss_healthbar/boss_healthbar_3.png',
        'assets/statusbar/boss_healthbar/boss_healthbar_4.png',
        'assets/statusbar/boss_healthbar/boss_healthbar_5.png',
        'assets/statusbar/boss_healthbar/boss_healthbar_6.png',
        'assets/statusbar/boss_healthbar/boss_healthbar_7.png',
    ];

    image_INDEX;
    statusbar_img;

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


    setImageIndexForCharacter() {
        if (world.character.health === 10) {return 0;}
        else if (world.character.health === 8) {return 1;}
        else if (world.character.health === 6) {return 2;}
        else if (world.character.health === 4) {return 3;}
        else if (world.character.health === 2) {return 4;}
        else if (world.character.health === 0) {return 5;}
    }


    setImageIndexForBossEnemy(bossEnemyHealth) {
        if (bossEnemyHealth === 6) {return 0;}
        else if (bossEnemyHealth === 5) {return 1;}
        else if (bossEnemyHealth === 4) {return 2;}
        else if (bossEnemyHealth === 3) {return 3;}
        else if (bossEnemyHealth === 2) {return 4;}
        else if (bossEnemyHealth === 1) {return 5;}
        else if (bossEnemyHealth === 0) {return 6;}
    }


    setStatusbarForCharacter(statusbarname, value) {
        this.checkStatusBarName(statusbarname);
        this.loadImage(this.statusbar_img[this.setImageIndexForCharacter(value)]);
    }


    setStatusbarForBossEnemy(statusbarname, value) {
        this.checkStatusBarName(statusbarname);
        this.loadImage(this.statusbar_img[this.setImageIndexForBossEnemy(value)]);
    }


    checkStatusBarName(statusbarname) {
        if (statusbarname === 'health') {
            this.statusbar_img = this.IMAGES_HEALTH_STATUSBAR;
        } else if (statusbarname === 'energy') {
            this.statusbar_img = this.IMAGES_ENERGY_STATUSBAR;
        } else if (statusbarname === 'boss_health') {
            this.statusbar_img = this.IMAGES_HEALTH_STATUSBAR_BOSSENEMY;
        }
    }
}