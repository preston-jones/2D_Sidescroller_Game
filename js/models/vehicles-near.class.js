class VehiclesNear extends MovableObject {

    x;
    y = 0 + Math.round(Math.random() * 30);
    height = 60;
    width = 163;
    speed = Math.round(1 + Math.random() * 2)
    direction = this.chooseRandomeDirection();
    indexOfVehicleImage = this.chooseVehicleImage();

    IMAGE_VEHICLES = [
        'assets/sprites/vehicles/v-police.png',
        'assets/sprites/vehicles/v-red.png',
        'assets/sprites/vehicles/v-yellow.png'
    ];

    constructor() {
        super().loadImage(this.IMAGE_VEHICLES[0]); 
        this.loadImages(this.IMAGE_VEHICLES);
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
            if (this.direction === 'left' || this.direction === 'right') {this.move(this.IMAGE_VEHICLES);}
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
        let imageArray = this.IMAGE_VEHICLES.length;
        let image = 0 + Math.round(Math.random() * imageArray);
        return image;
    }
}