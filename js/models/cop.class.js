class Cop extends MovableObject {

    x;
    y = 10;
    width = 60;
    height = 50;
    speed = 1.5;
    health = 5;

    IMAGES_STAY = [
        'assets/sprites/enemies/cop/idle/cop1.png',
        'assets/sprites/enemies/cop/idle/cop2.png',
        'assets/sprites/enemies/cop/idle/cop3.png',
    ];
    IMAGES_RUN = [
        'assets/sprites/enemies/cop/run/cop1.png',
        'assets/sprites/enemies/cop/run/cop2.png',
        'assets/sprites/enemies/cop/run/cop3.png',
        'assets/sprites/enemies/cop/run/cop4.png',
        'assets/sprites/enemies/cop/run/cop5.png',
        'assets/sprites/enemies/cop/run/cop6.png',
        'assets/sprites/enemies/cop/run/cop7.png',
        'assets/sprites/enemies/cop/run/cop8.png',
        'assets/sprites/enemies/cop/run/cop9.png',
        'assets/sprites/enemies/cop/run/cop10.png',
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('assets/sprites/enemies/cop/idle/cop2.png');
        this.x = 250 + Math.random() * 1000;
        this.loadImages(this.IMAGES_RUN);
        this.applyGravity();
        this.animateCop();
    }


    animateCop() {
        console.log(this.is_Dead);

        setInterval(() => {
            if (!this.is_Dead) {
                this.moveToLeft(this.speed);
            }
            if (this.is_Dead) {
                this.stay();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (!this.is_Dead) {
                this.playAnimation(this.IMAGES_RUN);
            }
            if (this.is_Dead) {
                console.log('cop is dead');
                this.playAnimation_Enemy_DEAD();
            }

        }, 130);
    }

}