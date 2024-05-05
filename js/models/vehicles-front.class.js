class VehiclesFront extends MovableObject {
    height;
    width;
    speed = 2;
    direction;
    currentImage = 0;

    constructor(image, x, y, width, height, speed, direction) {
        super().loadImage(image);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = direction; // -1 for left, 1 for right
        this.animateVehicle(y);
    }


    animateVehicle(y) {
        setInterval(() => {
            if (this.x >= 2300) {
                this.direction = -1;
            } else if (this.x <= -200) {
                this.direction = 1;
            }

            if (this.direction === 1) {
                this.moveToRight(this.speed);
                this.y = y;  
            } else {
                this.moveToLeft(this.speed);
                this.y = 10;                
            }
        }, 1000 / 60);
    }
}