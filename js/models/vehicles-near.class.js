class VehiclesNear extends MovableObject {

    x = 300;
    height = 60;
    width = 163;

    IMAGE_VEHICLES = [
        'assets/sprites/vehicles/v-police.png'
    ];

    constructor() {
        super().loadImage(this.IMAGE_VEHICLES[0]);
        this.speed = 8 + Math.random() * 15;
        this.    y = 0 + Math.random() * 30;
        this.loadImages(this.IMAGE_VEHICLES);
        this.animateVehicle();
    }


    animateVehicle() {
        this.moveLeft(this.IMAGE_VEHICLES, this.speed);
    }


    chooseRandomeDirection() {
        let directions = ['left', 'right'],
            randomDirection = directions[Math.floor(Math.random() * directions.length)];
        return randomDirection;
    }
}