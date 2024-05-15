/**
 * Level class
 * 
 * Level class is used to store all the variables containing the arrays of objects that are used to create the level.
 * 
 * @class Level
 */
class Level {
    enemies;
    animatedObjectFront;
    backgroundImageStatic;
    animatedBackgroundBack;
    animatedBackgroundFront;
    playground;
    collectibles_energy;
    collectibles_health;
    gameOver;
    victory;
    fireworks;

    level_start_x = -1;
    // level_end_x = 1130;
    level_boss_arena_border_left_x = 1880;
    level_end_x = 2130;
    level_end_bottom_y = 77;
    // level_end_bottom_y = 99;
    boss_dead = false;


    /**
     * The constructor of the Level class.
     * @param {Array of objects[]} enemies - Array of enemy objects in the level.
     * @param {Array of objects[]} animatedObjectFront - Array of animated objects in the front of the level.
     * @param {Array of objects[]} backgroundImageStatic - Array of objects containing static background images of the level.
     * @param {Array of objects[]} animatedBackgroundBack - Array of objects containing animated background images in the back of the level.
     * @param {Array of objects[]} animatedBackgroundFront - Array of objects containing animated background object in the front of the level.
     * @param {Array of objects[]} playground - Array of objects containing the ground platform object of the level.
     * @param {Array of objects[]} collectibles_energy - Array of objects containing all collectible energy objects in the level.
     * @param {Array of objects[]} collectibles_health - Array of objects containing all collectible health objects in the level.
     * @param {Array of objects[]} gameOver - Array of objects containing the game over object of the level.
     * @param {Array of objects[]} victory - Array of objects containing the victory object of the level.
     * @param {Array of objects[]} fireworks - Array of objects containing the fireworks object of the level.
     */
    constructor(enemies, animatedObjectFront, backgroundImageStatic, animatedBackgroundBack, animatedBackgroundFront, playground, collectibles_energy, collectibles_health, gameOver, victory, fireworks) {

        this.enemies = enemies;
        this.animatedObjectFront = animatedObjectFront;
        this.backgroundImageStatic = backgroundImageStatic;
        this.animatedBackgroundBack = animatedBackgroundBack;
        this.animatedBackgroundFront = animatedBackgroundFront;
        this.playground = playground;
        this.collectibles_energy = collectibles_energy;
        this.collectibles_health = collectibles_health;
        this.gameOver = gameOver;
        this.victory = victory;
        this.fireworks = fireworks;
    }
}