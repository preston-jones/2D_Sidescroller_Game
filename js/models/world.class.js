class World {

    character = new Character();
    enemies = [
        new Cop(),
        new Cop(),
        new Cop()
    ];
    chickenboss = new ChickenBoss();
    vehiclesNear = [
        new VehiclesNear(),
        new VehiclesNear()
    ];
    vehiclesFar = [
        new VehiclesFar('right', 5, 80, 30, 10),
        new VehiclesFar('left', 5, 100, 30, 10),
        new VehiclesFar('right', 5, 120, 30, 10),
        new VehiclesFar('left', 5, 140, 30, 10),
        new VehiclesFar('right', 5, 130, 30, 10),
        new VehiclesFar('left', 5, 110, 30, 10)
    ];
    backgroundBuildingsFar = [
        new BackgroundObject('assets/environment/background/skyline-a.png', -58, -25, 120, 190),
        new BackgroundObject('assets/environment/background/skyline-b.png', 62, -25, 120, 190),
        new BackgroundObject('assets/environment/background/skyline-a.png', 182, -25, 120, 190),
    ];
    animatedBackgroundSkyline = new SkylineFar();
    backgroundBuildingsNear = new SkylineNear();
    playground = [
        new BackgroundObject('assets/environment/floor.png', 0, -110, 450, 260)
    ];
    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height) // Clears the canvas

        this.addObjectsToMap(this.backgroundBuildingsFar);
        this.addToMap(this.animatedBackgroundSkyline);
        // this.addObjectsToMap(this.vehiclesFar);
        this.addToMap(this.backgroundBuildingsNear);
        this.addObjectsToMap(this.vehiclesNear);
        // this.addObjectsToMap(this.playground);
        this.addToMap(this.character);
        // this.addToMap(this.chickenboss);
        this.addObjectsToMap(this.enemies);


        // Draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () { //function loads when everithing above requestAnimationFrame() has loaded
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(movableObject) {
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }

}