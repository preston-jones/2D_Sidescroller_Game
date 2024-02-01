class Shot extends MovableObject {

    imgs = [];
    width = 10;
    height = 10;
    speed = 4;

    constructor(arr, x, y) {
        super().loadImage(arr[0]);
        this.x = x;
        this.y = y;
        this.loadImages(arr);
        // this.playAnimation();
    }
}