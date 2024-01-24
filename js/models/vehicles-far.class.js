class VehiclesFar extends MovableObject {
    
    constructor(direction, startVelocity, y, width, height) {
        super().loadVehicleAnimation(direction, startVelocity, y, width, height);
        this.velocityMin = 5;
        this.velocityMax = 9;
        this.y = y;
        this.x = -300;
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
            setInterval(() => {
                this.x += startVelocity;
                if (this.x >= 2000) {   
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
            let loop = setInterval(() => {
                this.x -= startVelocity;
                if (this.x <= -300) {   
                    startVelocity = Math.round(this.velocityMin + Math.random() * this.velocityMax);
                    imagePath = this.loadRandomVehicleImageLeft();
                    this.loadImage(imagePath);
                    this.x = Math.round(1000 + Math.random() * 5000); // start position  in px!!!!! fix it
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
}