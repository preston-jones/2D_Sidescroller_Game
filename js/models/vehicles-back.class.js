class VehiclesBack extends MovableObject {
    
    x;
    y = 60 + Math.round(Math.random() * 100);
    height = 10;
    width = 30;
    speed = Math.round(1 + Math.random() * 2)
    direction = this.chooseRandomeDirection();

    IMAGE_VEHICLES = [
        'assets/sprites/vehicles/v-police.png'
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
}