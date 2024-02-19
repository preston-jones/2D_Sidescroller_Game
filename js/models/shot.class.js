class Shot extends MovableObject {
    IMAGES_SHOT = [
        'assets/sprites/misc/shot/shot-1.png',
        'assets/sprites/misc/shot/shot-2.png',
        'assets/sprites/misc/shot/shot-3.png',
    ];

    constructor(x, y, direction) {
        super().loadImage('assets/sprites/misc/shot/shot-1.png');
        this.loadImages(this.IMAGES_SHOT);
        // this.width = 10;
        // this.height = 10;
        this.x = x;
        this.y = y + 15;
        this.width = 60;
        this.height = 50;
        this.speed = 2;
        this.animateShot(direction);
    }


    animateShot(direction) {
            if (direction) {
                this.x = this.x;
                setInterval(() => {
                    this.x -= this.speed;
                }, 1000 / 60)
                setInterval(() => {
                    this.playAnimation(this.IMAGES_SHOT);
                }, 25)
            }
            if (!direction) {
                this.x = this.x + 50;
                setInterval(() => {
                    this.x += this.speed;
                }, 1000 / 60)
                setInterval(() => {
                    this.playAnimation(this.IMAGES_SHOT);
                }, 25)
                console.log(this.is_Hurt);
            }
    }

}