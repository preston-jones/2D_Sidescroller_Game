class SkylineFar extends AnimatedBackground {

    IMAGES_SKYLINE_FAR = [
        'assets/environment/background/skyline-1.png',
        'assets/environment/background/skyline-2.png'
    ];

    world;

    constructor(imagePath, x, y, width, height) {
        super().loadImage(imagePath);
        this.loadImages(this.IMAGES_SKYLINE_FAR);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.functionABC();
    }


    functionABC() {
        setInterval(() => {
            // console.log(world.keyboard.RIGHT);
            if (world.keyboard.RIGHT && world.character.x < world.level.level_end_x) {
                this.x -= 0.3;
            }
            if (world.keyboard.LEFT && world.character.x > -1) {
                this.x += 0.3;
            }
            if (world.keyboard.UP && world.character.y < 170) {
                this.y += 0.3;
            }
            if (world.keyboard.DOWN && world.character.y > 90) {
                this.y -= 0.3;
            }
        }, 1000 / 60);
    }
}