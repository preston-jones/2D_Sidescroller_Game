class VehiclesNear extends MovableObject {

    x;
    y = 0 + Math.random() * 30;
    height = 60;
    width = 163;
    speed = Math.round(8 + Math.random() * 10)
    direction = this.chooseRandomeDirection();

    IMAGE_VEHICLES = [
        'assets/sprites/vehicles/v-police.png'
    ];

    constructor() {
        super().loadImage(this.IMAGE_VEHICLES[0]); 
        console.log(this.speed); 
        console.log(this.direction); 
        this.loadImages(this.IMAGE_VEHICLES);
        this.animateVehicle();
    }


    animateVehicle() {
        setInterval(() => {
            if (this.direction === 'left') {this.x -= this.speed;}
            if (this.direction === 'right') {this.x += this.speed;}
            
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
}