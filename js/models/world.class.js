class World {
    character;
    control = true;
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    camera_y = 0;
    isOnPlatform = false;
    shots = [];
    characterShot = [];
    isGameOver = false;
    check;
    GAME_INTERVALS = [];
    statusbar_HEALTH;
    statusbar_ENERGY;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.ctx.filter = 'invert(0)';
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.shotFired = false;
        this.startLevel();
    }


    startLevel() {
        this.character = new Character();
        this.initStatusbar();
        this.draw();
        this.setWorld();
        this.run();
    }


    initStatusbar() {
        this.statusbar_HEALTH = new Statusbar('assets/statusbar/healthbar/health_1.png', 10, 7, 55, 11);
        this.statusbar_ENERGY = new Statusbar('assets/statusbar/energybar/energy_1.png', 10, 20, 55, 15);
    }


    enterBossArenaEffect() {
        if (this.character && this.character.isInBattleArena && this.character.enteredBattleArena) {
            let invert = false;
            const intervalId = setInterval(() => {
                if (invert) {
                    this.ctx.filter = 'hue-rotate(90deg)';
                }
                else {
                    this.ctx.filter = 'hue-rotate(-0.25turn)';
                }
                invert = !invert;
            }, 1000 / 60); // Change this value to adjust the speed of the flickering

            setTimeout(() => {
                clearInterval(intervalId);
                this.ctx.filter = 'invert(0)'; // Reset the filter after the flickering ends
                this.character.enteredBattleArena = false;
            }, 1000); // Stop the flickering after 1 second
        }
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
        }, 100);
    }


    shoot() {
            if (this.keyboard.C && !this.shotFired && this.character.energy > 0 && !this.is_Hurt && !this.character.is_Dead) {
                shoot_sound.play();
                this.characterShot = [];
                this.characterShot = new Shot(this.character.x, this.character.y, this.character.otherDirection);
                this.shots.push(this.characterShot);
                this.character.energy -= 1;
                this.character.playAnimation_SHOOT();
                this.checkEnergyStatus();
                this.checkCollisions();
                this.shotFired = true;
            }
    }


    checkEnergyStatus() {
        if (this.character.energy === 10) { this.statusbar_ENERGY = new Statusbar('assets/statusbar/energybar/energy_1.png', 10, 20, 55, 15); }
        if (this.character.energy === 8) { this.statusbar_ENERGY = new Statusbar('assets/statusbar/energybar/energy_2.png', 10, 20, 55, 15); }
        if (this.character.energy === 6) { this.statusbar_ENERGY = new Statusbar('assets/statusbar/energybar/energy_3.png', 10, 20, 55, 15); }
        if (this.character.energy === 4) { this.statusbar_ENERGY = new Statusbar('assets/statusbar/energybar/energy_4.png', 10, 20, 55, 15); }
        if (this.character.energy === 2) { this.statusbar_ENERGY = new Statusbar('assets/statusbar/energybar/energy_5.png', 10, 20, 55, 15); }
        if (this.character.energy === 0) { this.statusbar_ENERGY = new Statusbar('assets/statusbar/energybar/energy_6.png', 10, 20, 55, 15); }
    }


    checkHealthStatus() {
        if (this.character.health === 10) { this.statusbar_HEALTH = new Statusbar('assets/statusbar/healthbar/health_1.png', 10, 7, 55, 11); }
        if (this.character.health === 8) { this.statusbar_HEALTH = new Statusbar('assets/statusbar/healthbar/health_2.png', 10, 7, 55, 11); }
        if (this.character.health === 6) { this.statusbar_HEALTH = new Statusbar('assets/statusbar/healthbar/health_3.png', 10, 7, 55, 11); }
        if (this.character.health === 4) { this.statusbar_HEALTH = new Statusbar('assets/statusbar/healthbar/health_4.png', 10, 7, 55, 11); }
        if (this.character.health === 2) { this.statusbar_HEALTH = new Statusbar('assets/statusbar/healthbar/health_5.png', 10, 7, 55, 11); }
        if (this.character.health === 0) { this.statusbar_HEALTH = new Statusbar('assets/statusbar/healthbar/health_6.png', 10, 7, 55, 11); }
    }


    checkCollisions() {
        this.checkCollisionWithEnemy();
        this.checkCollisionOfShot();
        this.checkCollisionWithCollectibles();
    }


    checkCollisionWithEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (!this.character.inCollision) {
                    this.character.hit();
                }
            }
            else {
                this.character.inCollision = false; // Reset inCollision when the collision ends
            }
        });
    }


    checkCollisionOfShot() {
        if (this.characterShot instanceof MovableObject) {
            this.level.enemies.forEach((enemy) => {
                if (this.characterShot && this.characterShot.isColliding(enemy)) {
                    this.characterShot.impact = true;
                    this.characterShot.animateImpact();
                    enemy.hit();
                    this.characterShot = null;
                }
            });
        }
    }


    checkCollisionWithCollectibles() {
        this.level.collectibles_energy.forEach((energy) => {
            if (this.character.isColliding(energy)) {
                collecting_sound.play();
                this.character.energy = 10;
                this.checkEnergyStatus();
                let index = this.level.collectibles_energy.indexOf(energy);
                if (index > -1) {
                    this.level.collectibles_energy.splice(index, 1);
                }
            }
        });
        this.level.collectibles_health.forEach((health) => {
            if (this.character.isColliding(health)) {
                collecting_sound.play();
                this.character.health = 10;
                this.checkHealthStatus();
                let index = this.level.collectibles_health.indexOf(health);
                if (index > -1) {
                    this.level.collectibles_health.splice(index, 1);
                }
            }
        });
    }


    drawGameOver() {
        if (this.character.is_Dead) {
            this.addObjectsToMap(this.level.gameOver);
        }
    }


    drawYouWin() {
        if (this.level.boss_dead) {
            this.addObjectsToMap(this.level.youWin);
        }
    }


    drawFireworks() {
        if (this.level.boss_dead) {
            this.addObjectsToMap(this.level.fireworks);
        }
    }


    draw() {
        if (!exit_Game && canvas && this.ctx) {
            this.enterBossArenaEffect();
            this.ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
            // moves camera view
            this.addObjectsToMap(this.level.backgroundImageStatic);
            this.addObjectsToMap(this.level.animatedBackgroundBack);
            this.drawFireworks();
            // moves camera
            this.ctx.translate(this.camera_x, this.camera_y);
            // -----
            this.addObjectsToMap(this.level.animatedObjectFront);
            this.addObjectsToMap(this.level.animatedBackgroundFront);
            this.addObjectsToMap(this.level.playground);
            this.addObjectsToMap(this.level.collectibles_energy);
            this.addObjectsToMap(this.level.collectibles_health);
            this.addToMap(this.character);
            this.addObjectsToMap(this.level.enemies);
            this.addObjectsToMap(this.shots);
            // moves camera view back to default
            this.ctx.translate(-this.camera_x, this.camera_y);
            // -----
            this.addToMap(this.statusbar_HEALTH);
            this.addToMap(this.statusbar_ENERGY);
            this.drawGameOver();
            this.drawYouWin();
            // Draw wird immer wieder aufgerufen
            let self = this;
            requestAnimationFrame(function () { //function loads when everithing above requestAnimationFrame() has loaded
                self.draw();
            });
        }
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
        // movableObject.drawFrame(this.ctx);
        // movableObject.drawRealFrame(this.ctx);

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