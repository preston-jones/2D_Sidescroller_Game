/**
 * World class
 * 
 * This class is responsible for the game world.
 * It contains all the objects that are part of the game world.
 * 
 * @class World
 */
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
    characterHasMoved = false;
    shotFired = false;


    /**
     * The constructor of the World class.
     * 
     * @param {HTMLCanvasElement} canvas - The canvas element.
     * @param {Keyboard} keyboard - The keyboard object.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.ctx.filter = 'invert(0)';
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.startLevel();
    }


    /**
     * Starts the game level.
     * Creates a new character object.
     */
    startLevel() {
        this.character = new Character();
        this.draw();
        this.setWorld();
        this.run();
    }


    /**
     * Copies the world object to the character object.
     * This is done to make the world object accessible in the character object.
     */
    setWorld() {
        this.character.world = this;
    }


    /**
     * Starts an interval to check for collisions.
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.drawBossFightCollectibles();
        }, 50);
    }


    /**
     * Launches the flickering filter effect when the character enters the boss arena.
     */
    enterBossArenaEffect() {
        if (this.character && this.character.isInBattleArena && this.character.enteredBattleArena) {
            let filterEffectInterval = this.setContextFilter();
            setTimeout(() => {
                clearInterval(filterEffectInterval);
                this.resetContextFilter();
                this.character.enteredBattleArena = false;
            }, 1000); // Stop the flickering filter effect after 1 second.
            this.resetCollectiblesArray();
        }
    }


    /**
     * Resets the collectibles array.
     * The collectibles array is reset when the character enters the boss arena.
     * This is done to prevent the collectibles from appearing in the boss arena.
     */
    resetCollectiblesArray() {
        this.level.collectibles_energy = [];
        this.level.collectibles_health = [];
    }


    /**
     * Set the flickering filter effect.
     * The filter effect is set to flicker between two filter effects.
     */
    setContextFilter() {
        let invert = false;
        let filterEffectInterval = setInterval(() => {
            if (invert) {
                this.ctx.filter = 'hue-rotate(90deg)';
            }
            else {
                this.ctx.filter = 'hue-rotate(-0.25turn)';
            }
            invert = !invert;
        }, 1000 / 60); // Change this value to adjust the speed of the flickering

        return filterEffectInterval;
    }


    /**
     * Reset the filter after the flickering filter effect ends.
     */
    resetContextFilter() {
        this.ctx.filter = 'invert(0)';
    }


    /**
     * Checks if the character is allowed to shoot.
     * Its then creates a new shot object and adds it to the shots array.
     * The character's energy is reduced by 1.
     */
    shoot() {
        if (this.keyboard.C && this.character.energy > 0 && !this.is_Hurt && !this.character.is_Dead) {
            shoot_sound.play();
            this.characterShot = [];
            this.characterShot = new Shot(this.character.x, this.character.y, this.character.otherDirection);
            this.shots.push(this.characterShot);
            this.character.energy -= 1;
            this.character.playAnimation_SHOOT();
            this.checkCollisions();
            this.level.statusbar_ENERGY.updateStatusbarCharacterEnergy(this.character.energy);
        }
    }


    /**
     * Checks the collision of the enemies, shots and collectibles.
     * The collision is checked to determine if the character is colliding with an enemy, shot or collectible.
     */
    checkCollisions() {
        this.checkCollisionWithEnemy();
        this.checkCollisionOfShot();
        this.checkCollisionWithCollectibles();
    }


    /**
     * Checks the collision of the character with an enemy.
     * If the character is colliding with an enemy, the hit() function of the character is called.
     */
    checkCollisionWithEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (!this.character.inCollision) {
                    this.character.hit();
                    this.level.statusbar_HEALTH.updateStatusbarCharacterHealth(this.character.health);
                }
            }
            else {
                this.character.inCollision = false; // Reset inCollision when the collision ends
            }
        });
    }


    /**
     * Checks the collision of the character shot with an enemy.
     * If the character shot is colliding with an enemy, the function for the impact animation is called and the enemy's health is reduced.
     * The character shot is then removed from the shots array.
     */
    checkCollisionOfShot() {
        if (this.characterShot instanceof MovableObject) {
            this.level.enemies.forEach((enemy) => {
                if (this.characterShot && this.characterShot.isColliding(enemy)) {
                    this.characterShot.animateImpact();
                    this.characterShot = null;
                }
            });
        }
    }


    /**
     * Checks the collision of the character with a collectible.
     * If the character is colliding with a collectible, the collectible is removed from the collectibles array.
     * The character's health or energy is then restored to the maximum value.
     * The health or energy statusbar is then updated.
     */
    checkCollisionWithCollectibles() {
        this.level.collectibles_energy.forEach((energy) => {
            if (this.character.isColliding(energy)) {
                collecting_sound.play();
                this.character.energy = 10;
                this.level.statusbar_ENERGY.updateStatusbarCharacterEnergy(10);
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
                this.level.statusbar_HEALTH.updateStatusbarCharacterHealth(10);
                let index = this.level.collectibles_health.indexOf(health);
                if (index > -1) {
                    this.level.collectibles_health.splice(index, 1);
                }
            }
        });
    }


    /**
     * This function draws the game over screen.
     * The game over screen is displayed when the character is dead.
     */
    drawGameOver() {
        if (this.character.is_Dead) {
            this.addObjectsToMap(this.level.gameOver);
        }
    }


    /**
     * This function draws the victory screen.
     * The victory screen is displayed when the boss enemy is dead.
     */
    drawVictory() {
        if (this.level.boss_dead) {
            this.addObjectsToMap(this.level.victory);
        }
    }


    /**
     *  This function draws the fireworks.
     * The fireworks are displayed when the boss enemy is dead.
     */
    drawFireworks() {
        if (this.level.boss_dead) {
            this.addObjectsToMap(this.level.fireworks);
        }
    }


    /**
     * This function checks if the character enters the battle arena and if the boss enemy is dead.
     * If so, it calls the function to draw the boss enemy healthbar.
     */
    drawBossEnemyHealthbar() {
        if (!this.level.boss_dead && this.character.isInBattleArena) {
            this.addToMap(this.level.bossEnemy_HEALTHBAR);
        }
    }


    /**
     * This Function draws a text on the canvas.
     * The text is displayed when the character is at the beginning of the game.
     * The text is displayed to inform the player that the game is best played in fullscreen mode.
     * The text is displayed until the character moves to the right.
     */
    drawTextOnGameStart() {
        if (world && this.ctx && !isInFullscreen && world.character && world.character.x <= 100 && !this.characterHasMoved) {
            this.ctx.font = "16px VT323";
            this.ctx.fillStyle = 'white';
            this.ctx.fillText("Best Played In Fullscreen Mode", 50, 60);
        }
        if (world && world.character && this.character.x >= 100) {
            this.characterHasMoved = true;
        }
    }


    /**
     * This function draws the collectibles in the boss fight.
     * The collectibles are displayed when the character's health or energy is low.
     * The collectibles are displayed randomly in the boss arena.
     */
    drawBossFightCollectibles() {
            if (this.character.isInBattleArena && this.character.health <= 4 && this.level.collectibles_health.length === 0) {
                let x_health = Math.floor(Math.random() * (2150 - 1900 + 1)) + 1900;
                this.level.collectibles_health = [new CollectibleHealth(x_health, 112, 15, 15)];
            }
            if (this.character.isInBattleArena && this.character.energy <= 2 && this.level.collectibles_energy.length === 0) {
                let x_energy= Math.floor(Math.random() * (2150 - 1900 + 1)) + 1900;
                this.level.collectibles_energy = [new CollectibleEnergy(x_energy, 112, 15, 15)];
            }
    }


    /**
     * Function to draw all objects on the canvas.
     * This function is called recursively to draw all objects on the canvas.
     */
    draw() {
        toggleHeader(); // This function is called to toggle the header on and off. It is defined in js/events/fullscreen.js. It is called here to check frequently if the header should be displayed or not.
        if (!exit_Game && canvas && this.ctx) {
            this.enterBossArenaEffect();
            this.ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
            // moves camera view
            // -- space for fix objects in the back
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
            // -- space for fix objects in the front
            this.drawTextOnGameStart();
            this.addToMap(this.level.statusbar_HEALTH);
            this.addToMap(this.level.statusbar_ENERGY);
            this.drawBossEnemyHealthbar();
            this.drawGameOver();
            this.drawVictory();
            // Draw is called recursively.
            let self = this;
            requestAnimationFrame(function () { //function loads when everithing above requestAnimationFrame() has loaded
                self.draw();
            });
        }
    }


    /**
     * Adds all object of an array to the map.
     * The objects are then drawn on the canvas.
     * 
     * @param {MovableObject} object - The object to add to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    /**
     * Adds a single object to the map.
     * The object is then drawn on the canvas.
     * 
     * @param {MovableObject} movableObject - The object to add to the map.
     */
    addToMap(movableObject) {
        if (movableObject && movableObject.otherDirection) { //checks, if the variable is true
            this.flipImage(movableObject);
        }

        movableObject.draw(this.ctx);
        // movableObject.drawFrame(this.ctx); //draws the hitbox of the object including the offset parameters
        // movableObject.drawRealFrame(this.ctx); //draws the hitbox of the object without the offset parameters

        if (movableObject && movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }


    /**
     * Flips the image horizontally to let the object face the direction it is moving.
     * 
     * @param {MovableObject} movableObject - The object to flip.
     */
    flipImage(movableObject) {
        this.ctx.save(); //saves current status of ctx (context)
        this.ctx.translate(movableObject.width, 0)  //change methode how to draw images
        this.ctx.scale(-1, 1) //mirrors the image horizontal
        movableObject.x = movableObject.x * -1;
    }


    /**
     * Flips the image back to its original state.
     * 
     * @param {MovableObject} movableObject - The object to flip back.
     */
    flipImageBack(movableObject) {
        //everytime we`ve set the variable to true
        movableObject.x = movableObject.x * -1;
        this.ctx.restore(); //resets the settings of ctx to default
    }
}