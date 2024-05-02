class VehiclesFront extends MovableObject {
    height = 60;
    width = 163;
    speed = 1;
    direction = 'right';
    IMAGE_VEHICLES = [
        'assets/sprites/vehicles/v-truck.png'
    ];
    currentImage = 0;

    constructor(x, y) {
        super().loadImage('assets/sprites/vehicles/v-truck.png');
        this.x = x;
        this.y = y;
        this.loadImages(this.IMAGE_VEHICLES);
        this.animateVehicle(this.IMAGE_VEHICLES);
    }


    animateVehicle(images_arr) {
        this.animateEnemy(images_arr, this.IMAGES_ENEMY_EXPLOTION);
    }
}