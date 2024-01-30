class SkylineNear extends AnimatedBackground {

    IMAGES_SKYLINE_NEAR = [
        'assets/environment/background/near-buildings-a-bg.png',
        'assets/environment/background/near-buildings-b-bg.png'
    ];

    world;

    constructor(imagePath, x, y, width, height) {
        super().loadImage(imagePath);
        this.loadImages(this.IMAGES_SKYLINE_NEAR);
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
                this.x -= 2;
            }
            if (world.keyboard.LEFT && world.character.x > -2) {
                this.x += 2;
            }
            if (world.keyboard.UP && world.character.y < 170) {
                this.y += 2;
            }
            if (world.keyboard.DOWN && world.character.y > 90) {
                this.y -= 2;
            }
        }, 1000 / 60);
    }
}