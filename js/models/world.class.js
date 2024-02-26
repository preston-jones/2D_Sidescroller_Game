class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    camera_y = 0;
    isOnPlatform = false;
    shots = [];
    characterShot = [];
    statusbar = [
        new Statusbar('assets/statusbar/heart.png', this.character.energy, 10, 4, 15, 15),
        new Statusbar('assets/statusbar/energy.png', this.character.energy, 12, 24, 10, 10),
    ];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.shoot();
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkIfOnPlatform();
        }, 100);
    }


    shoot() {
        setInterval(() => {
            if (this.keyboard.C && this.character.energy > 0 && !this.character.is_Dead) {
                this.characterShot = new Shot(this.character.x, this.character.y, this.character.otherDirection);
                this.shots.push(this.characterShot);
                this.character.energy -= 1;
                this.checkCollisionOfShot(this.characterShot);
            }
        }, 120);
    }


    checkIfOnPlatform() {
        this.level.playground.forEach((platform) => {
            if (this.character.isColliding(platform)) {
                // console.log('is above');
                console.log(this.level.playground[0].y);
                this.isOnPlatform = true;
            }
            else {
                // console.log('is on Ground');
                this.isOnPlatform = false;
            }
        });
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
            }
        });
    }


    checkCollisionOfShot(characterShot) {
        setInterval(() => {
        this.level.enemies.forEach((enemy) => {
            if (characterShot.isColliding(enemy)) {
                characterShot.impact = true;
                enemy.hit();
            }
        });
        // characterShot.impact = false;
    }, 100);
    }


    drawStatusValue(ctx) {
        ctx.font = "8pt VT323";
        ctx.fillStyle = "white";
        ctx.fillText(this.character.health + '/' + this.character.health_MAX, 30, 15);
        ctx.fillText(this.character.energy + '/' + this.character.energy_MAX, 30, 32);
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
        this.addObjectsToMap(this.level.playground);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectibles);

        this.addToMap(this.character);
        this.addObjectsToMap(this.shots);
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