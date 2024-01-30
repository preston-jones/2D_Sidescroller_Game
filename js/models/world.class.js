class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    camera_y = 0;

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
        this.addObjectsToMap(this.level.backgroundImageStatic);
        this.addObjectsToMap(this.level.animatedBackgroundBack);
        this.addObjectsToMap(this.level.animatedObjectBack);
        this.addObjectsToMap(this.level.animatedBackgroundFront);
        this.addObjectsToMap(this.level.enemies);
        // moves camera view
        this.ctx.translate(this.camera_x, this.camera_y);
        // -----

        // this.addObjectsToMap(this.level.VehiclesFront);
        // this.addObjectsToMap(this.playground);
        // this.addToMap(this.chickenboss);
        this.addToMap(this.character);

        // moves camera view back to default
        this.ctx.translate(-this.camera_x, -this.camera_y);
        // -----

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
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
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