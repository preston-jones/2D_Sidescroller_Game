class BackgroundStatic extends MovableObject {

    x;
    y;

    constructor(imagePath,x, y, width, height) {
        super().loadImage(imagePath);
        this.width = width;
        this.height = height;
        this.y = y;
        this.x = x;
    }
}