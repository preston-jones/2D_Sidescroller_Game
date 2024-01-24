class Vehicles extends MovableObject {

    constructor(startVelocity, y, width, height) {
        super().animateVehicles(startVelocity);
        this.velocityMin = 10;
        this.velocityMax = 30;
        this.y = y;
        this.height = height;
        this.width = width;
    }


    animateVehicles(startVelocity) {
        let imagePath = this.loadRandomVehicle();
        this.loadImage(imagePath);
            setInterval(() => {
                this.x -= startVelocity;
                if (this.x <= -300) {   
                    startVelocity = Math.round(this.velocityMin + Math.random() * this.velocityMax);
                    imagePath = this.loadRandomVehicle();
                    this.loadImage(imagePath);
                    this.x = Math.round(1000 + Math.random() * 5000); // start position  in px
                }
            }, 1000 / 60);
    }


    loadRandomVehicle() {
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
}