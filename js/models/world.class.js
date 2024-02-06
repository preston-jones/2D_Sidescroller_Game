class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    camera_y = 0;
    shootingObjects = [];
    statusbar = [
        new Statusbar('assets/statusbar/heart.png', this.character.energy, 10, 4, 20, 20),
        new Statusbar('assets/statusbar/energy.png', this.character.energy, 12, 24, 15, 15),
    ];
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkShooting();
        }, 20);
    }


    checkShooting() {
            if (this.keyboard.C) {
                let characterShot = new Shot(this.character.x, this.character.y);
                this.shootingObjects.push(characterShot);
            }
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
            }
        });
    }


    drawStatusValue(ctx) {
        ctx.font = "10pt VT323";
        ctx.fillStyle = "white";
        ctx.fillText(this.character.health + '/' + this.character.health_MAX, 32, 18);
        ctx.fillText(this.character.energy + '/' + this.character.energy_MAX, 32, 35);
    }


    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height) // Clears the canvas


        // moves camera view
        this.addObjectsToMap(this.level.backgroundImageStatic);
        this.addObjectsToMap(this.level.animatedBackgroundBack);
        this.ctx.translate(this.camera_x, this.camera_y);
        // -----


        this.addObjectsToMap(this.level.animatedObjectBack);
        this.addObjectsToMap(this.level.animatedBackgroundFront);
        // this.addObjectsToMap(this.level.VehiclesFront);
        // this.addObjectsToMap(this.playground);
        // this.addToMap(this.chickenboss);
        this.addObjectsToMap(this.level.enemies);

        this.addToMap(this.character);
        this.addObjectsToMap(this.shootingObjects);
        // moves camera view back to default
        this.ctx.translate(-this.camera_x, this.camera_y);
        // -----
        this.addObjectsToMap(this.statusbar);
        this.drawStatusValue(this.ctx);
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
        if (movableObject.otherDirection) { //checks, if the variable is true
            this.flipImage(movableObject);
        }

        movableObject.draw(this.ctx);
        movableObject.drawFrame(this.ctx);
        movableObject.drawCharacterFrame(this.ctx);

        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }


    flipImage(movableObject) {
        this.ctx.save(); //saves current status of ctx (context)
        this.ctx.translate(movableObject.width, 0)  //change methode how to draw images
        this.ctx.scale(-1, 1) //mirrors the image horizontal
        movableObject.x = movableObject.x * -1;
    }


    flipImageBack(movableObject) {
        //everytime we`ve set the variable to true
        movableObject.x = movableObject.x * -1;
        this.ctx.restore(); //resets the settings of ctx to default
    }

}