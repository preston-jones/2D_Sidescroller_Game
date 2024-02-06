class Shot extends MovableObject {

    IMAGES_SHOT = [
        'assets/sprites/misc/shot/shot-1.png',
        'assets/sprites/misc/shot/shot-2.png',
        'assets/sprites/misc/shot/shot-3.png',
    ];

    constructor(x, y) {
        super().loadImage('assets/sprites/misc/shot/shot-1.png');
        this.loadImages(this.IMAGES_SHOT);
        this.width = 10;
        this.height = 10;
        this.speed = 1;
        this.x = x + 50;
        this.y = y + 15;
        // this.animateShot();

    }


    animateShot() {
        world.character.energy -= 1;
        if (world.character.energy <= 0) {
            world.character.energy = 0;
        }
        if (world.character.energy > 0) {
            setInterval(() => {
                this.x += 5;
            }, 1000 / 60)
            setInterval(() => {
                this.playAnimation(this.IMAGES_SHOT);
            }, 130)
        }
    }


}