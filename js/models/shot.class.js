class Shot extends MovableObject {

    IMAGES_SHOT = [
        'assets/sprites/misc/shot/shot-1.png',
        'assets/sprites/misc/shot/shot-2.png',
        'assets/sprites/misc/shot/shot-3.png',
    ];
    IMAGES_SHOT_HIT = [
        'assets/sprites/misc/shot-hit/shot-hit-1.png',
        'assets/sprites/misc/shot-hit/shot-hit-2.png',
        'assets/sprites/misc/shot-hit/shot-hit-3.png'
    ];

    constructor(x, y, direction) {
        super().loadImage('assets/sprites/misc/shot/shot-1.png');
        this.loadImages(this.IMAGES_SHOT);
        this.width = 10;
        this.height = 10;
        this.x = x;
        this.y = y + 15;
        this.speed = 2;
        this.animateShot(direction);
    }


    animateShot(direction) {
        if (this.impact) {
            console.log('IMPACT');
            this.x = this.x;
            this.playAnimation(this.IMAGES_SHOT);
        }
        if (direction && !this.impact) {
            this.x = this.x;
            setInterval(() => {
                this.x -= this.speed;
            }, 1000 / 60)
            setInterval(() => {
                this.playAnimation(this.IMAGES_SHOT);
            }, 25)
        }
        if (!direction && !this.impact) {
            this.x = this.x + 50;
            setInterval(() => {
                this.x += this.speed;
            }, 1000 / 60)
            setInterval(() => {
                this.playAnimation(this.IMAGES_SHOT);
            }, 25)
        }
    }

}