/**
 * Level class
 * 
 * Level class is used to store all the variables containing the objects that are used to create the level.
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


    NOCH GEANAUER MACHEN --- unten
    /**
     * The constructor of the Level class.
     * @param {Drone[]} enemies - The array of enemy objects in the level.
     * @param {AnimatedObject} animatedObjectFront - The animated object in the front of the level.
     * @param {string} backgroundImageStatic - The path of the static background image of the level.
     * @param {AnimatedObject} animatedBackgroundBack - The animated background object in the back of the level.
     * @param {AnimatedObject} animatedBackgroundFront - The animated background object in the front of the level.
     * @param {Playground} playground - The playground object of the level.
     * @param {CollectibleEnergy[]} collectibles_energy - The array of collectible energy objects in the level.
     * @param {CollectibleHealth[]} collectibles_health - The array of collectible health objects in the level.
     * @param {GameOver} gameOver - The game over object of the level.
     * @param {Victory} victory - The victory object of the level.
     * @param {Fireworks} fireworks - The fireworks object of the level.
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