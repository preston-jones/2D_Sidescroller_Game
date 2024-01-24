class VehiclesNear extends MovableObject {
    
    constructor(direction, startVelocity, y, width, height) {
        super().loadVehicleAnimation(direction, startVelocity, y, width, height);
        this.velocityMin = 15;
        this.velocityMax = 30;
        this.y = y;
        this.height = height;
        this.width = width;
    }


    loadVehicleAnimation(direction, startVelocity, y, width, height) {
        if (direction === 'left') {
            this.moveLeft(startVelocity);
        }
        if (direction === 'right') {
            this.moveRight(startVelocity);
        }
    }


    moveRight(startVelocity) {
        let imagePath = this.loadRandomVehicleImageRight();
        this.loadImage(imagePath);
            let loop = setInterval(() => {
                this.x += startVelocity;
                if (this.x >= 3000) {   
                    startVelocity = Math.round(this.velocityMin + Math.random() * this.velocityMax);
                    imagePath = this.loadRandomVehicleImageRight();
                    this.loadImage(imagePath);
                    this.x = -300;
                }
            }, 1000 / 60);
    }
    moveLeft(startVelocity) {
        let imagePath = this.loadRandomVehicleImageLeft();
        this.loadImage(imagePath);
            setInterval(() => {
                this.x -= startVelocity;
                if (this.x <= -3000) {   
                    startVelocity = Math.round(this.velocityMin + Math.random() * this.velocityMax);
                    imagePath = this.loadRandomVehicleImageLeft();
                    this.loadImage(imagePath);
                    this.x = Math.round(5000 + Math.random() * 10000); // start position  in px!!!!! fix it
                }
            }, 1000 / 60);
    }


    loadRandomVehicleImageLeft() {
        let randomVehicleImage;
        let randomNumber = Math.round(Math.random() * 3);
        if (randomNumber <= 1) {
            randomVehicleImage = 'assets/sprites/vehicles/v-police.png';
        }
        if (randomNumber == 2) {
            randomVehicleImage = 'assets/sprites/vehicles/v-red.png';
        }
        if (randomNumber == 3) {
            randomVehicleImage = 'assets/sprites/vehicles/v-yellow.png';
        }
        return randomVehicleImage;
    }


    loadRandomVehicleImageRight() {
        let randomVehicleImage;
        let randomNumber = Math.round(Math.random() * 3);
        if (randomNumber <= 1) {
            randomVehicleImage = 'assets/sprites/vehicles/v-police-reversed.png';
        }
        if (randomNumber == 2) {
            randomVehicleImage = 'assets/sprites/vehicles/v-red-reversed.png';
        }
        if (randomNumber == 3) {
            randomVehicleImage = 'assets/sprites/vehicles/v-yellow-reversed.png';
        }
        return randomVehicleImage;
    }


    chooseRandomeDirection() {
        let directions = ['left', 'right'],
        randomDirection = directions[Math.floor(Math.random() * directions.length)];
        return randomDirection;
    }
}