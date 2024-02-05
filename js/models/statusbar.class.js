class Statusbar extends DrawableObject {

    health;

    IMAGES_HEALTH = [
        'assets/statusbar/heart.png'
    ];
    IMAGES_ENERGY = [
        'assets/statusbar/energy.png'
    ];


    constructor(img, status, x, y, width, height) {
        super().loadImage(img);
        this.health = `${status}`;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }



}