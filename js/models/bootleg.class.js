class Bootleg extends MovableObject {

    x;
    y = 10;
    width = 60;
    height = 50;
    speed = 0.2;

    IMAGES_STAY = [
        'assets/sprites/enemies/Bootleg/bootleg-idle.png'
    ];
    IMAGES_RUN = [
        'assets/sprites/enemies/Bootleg Walk/bootleg-walk1.png',
        'assets/sprites/enemies/Bootleg Walk/bootleg-walk2.png',
        'assets/sprites/enemies/Bootleg Walk/bootleg-walk3.png',
        'assets/sprites/enemies/Bootleg Walk/bootleg-walk4.png',
        'assets/sprites/enemies/Bootleg Walk/bootleg-walk5.png',
        'assets/sprites/enemies/Bootleg Walk/bootleg-walk6.png',
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('assets/sprites/enemies/Bootleg/bootleg-idle.png');
        this.x = 150 + Math.random() * 200;
        this.loadImages(this.IMAGES_RUN);
        this.applyGravity();
        this.animateEnemie();
    }


    animateEnemie() {
        this.otherDirection = true;
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_RUN);
        }, 300);
    }
}