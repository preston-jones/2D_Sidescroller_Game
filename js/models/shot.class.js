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
        this.loadImages(this.IMAGES_SHOT_HIT);
        this.width = 10;
        this.height = 10;
        this.x = x;
        this.y = y + 15;
        this.speed = 2;
        this.animateShot(direction);
    }


    animateShot(direction) {
        if (direction && !this.impact) {
            this.x = this.x;
            setInterval(() => {
                if (this.impact) {
                    this.x = this.x;
                }
                if (!this.impact) {
                    this.x -= this.speed;
                }
            }, 1000 / 60)
            setInterval(() => {
                if (!this.impact) {
                    this.playAnimation(this.IMAGES_SHOT);
                }
            }, 25)
        }
        if (!direction && !this.impact) {
            this.x = this.x + 50;
            setInterval(() => {
                if (this.impact) {
                    this.x = this.x;
                }
                if (!this.impact) {
                    this.x += this.speed;
                }
            }, 1000 / 60)
            setInterval(() => {
                if (!this.impact) {
                    this.playAnimation(this.IMAGES_SHOT);
                }
            }, 25)
        }
    }


    animateImpact() {
        this.playAnimation(this.IMAGES_SHOT_HIT);
    }

}