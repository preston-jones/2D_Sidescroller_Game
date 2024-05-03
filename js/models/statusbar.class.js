class Statusbar extends DrawableObject {

    health;

    IMAGES_HEALTH = [
        'assets/statusbar/healthbar/health_1.png',
        'assets/statusbar/healthbar/health_2.png',
        'assets/statusbar/healthbar/health_3.png',
        'assets/statusbar/healthbar/health_4.png',
        'assets/statusbar/healthbar/health_5.png',
        'assets/statusbar/healthbar/health_6.png',
    ];
    IMAGES_ENERGY = [
        'assets/statusbar/energybar/energy_1.png'
    ];


    constructor(img, x, y, width, height) {
        super().loadImage(img);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}