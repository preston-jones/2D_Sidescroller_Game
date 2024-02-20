class Playground extends DrawableObject {

    IMAGE_PLATFORM = [
        'assets/environment/floor.png'
    ];


    constructor(imagePath, x, y, width, height) {
        super().loadImage(imagePath);
        this.loadImages(this.IMAGE_PLATFORM);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

}