class VehiclesFront extends MovableObject {

    // y = -30 + Math.round(Math.random() * 20);
    y = 30;
    height = 60;
    width = 163;
    speed = Math.round(1 + Math.random() * 2);
    direction = this.chooseRandomeDirection();
    CURRENT_VEHICLE_IMAGE = [this.chooseVehicleImage()];
    IMAGE_VEHICLES = [
        'assets/sprites/vehicles/v-police.png'
    ];

    constructor() {
        super().loadImage(this.CURRENT_VEHICLE_IMAGE);
        this.x = 100;
        this.loadImages(this.CURRENT_VEHICLE_IMAGE);
        this.chooseVehicleImage();
        this.loadImages(this.CURRENT_VEHICLE_IMAGE);
        this.animateVehicle();
    }


    animateVehicle() {
        setInterval(() => {
            if (this.direction === 'left') {
                this.otherDirection = false;
                this.x -= this.speed;
            }
            if (this.direction === 'right') {
                this.otherDirection = true;
                this.x += this.speed;
            }
            
        }, 1000 / 60);

        setInterval(() => {
            if (this.direction === 'left' || this.direction === 'right') {this.playAnimation(this.IMAGE_VEHICLES);}
        }, 50);
    }


    chooseRandomeDirection() {
        let directions = ['left', 'right'],
            randomDirection = directions[Math.floor(Math.random() * directions.length)];
            if (randomDirection === 'left') {this.x = 300;}
            if (randomDirection === 'right') {this.x = -100;}
        return randomDirection;
    }


    chooseVehicleImage() {
        let index = Math.round(0 + Math.random() * 2);
        if (index === 0) {return 'assets/sprites/vehicles/v-police.png';}
        if (index === 1) {return 'assets/sprites/vehicles/v-red.png';}
        if (index === 2) {return 'assets/sprites/vehicles/v-yellow.png';}
    }
}