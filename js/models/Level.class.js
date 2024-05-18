/**
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
    statusbar_HEALTH;
    statusbar_ENERGY;
    bossEnemy_HEALTHBAR;
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
     * @param {object[]} enemies - Array of enemy objects in the level.
     * @param {object[]} animatedObjectFront - Array of animated objects in the front of the level.
     * @param {object[]} backgroundImageStatic - Array of objects containing static background images of the level.
     * @param {object[]} animatedBackgroundBack - Array of objects containing animated background images in the back of the level.
     * @param {object[]} animatedBackgroundFront - Array of objects containing animated background object in the front of the level.
     * @param {object[]} playground - Array of objects containing the ground platform object of the level.
     * @param {object[]} collectibles_energy - Array of objects containing all collectible energy objects in the level.
     * @param {object[]} collectibles_health - Array of objects containing all collectible health objects in the level.
     * @param {object[]} statusbar_HEALTH - Array of objects containing the health statusbar object of the character.
     * @param {object[]} statusbar_ENERGY - Array of objects containing the energy statusbar object of the character.
     * @param {object[]} bossEnemy_HEALTHBAR - Array of objects containing the boss enemy healthbar object of the level.
     * @param {object[]} gameOver - Array of objects containing the game over object of the level.
     * @param {object[]} victory - Array of objects containing the victory object of the level.
     * @param {object[]} fireworks - Array of objects containing the fireworks object of the level.
     */
    constructor(enemies, animatedObjectFront, backgroundImageStatic, animatedBackgroundBack, animatedBackgroundFront, playground, collectibles_energy, collectibles_health, statusbar_HEALTH, statusbar_ENERGY, bossEnemy_HEALTHBAR, gameOver, victory, fireworks) {

        this.enemies = enemies;
        this.animatedObjectFront = animatedObjectFront;
        this.backgroundImageStatic = backgroundImageStatic;
        this.animatedBackgroundBack = animatedBackgroundBack;
        this.animatedBackgroundFront = animatedBackgroundFront;
        this.playground = playground;
        this.collectibles_energy = collectibles_energy;
        this.collectibles_health = collectibles_health;
        this.statusbar_HEALTH = statusbar_HEALTH;
        this.statusbar_ENERGY = statusbar_ENERGY;
        this.bossEnemy_HEALTHBAR = bossEnemy_HEALTHBAR;
        this.gameOver = gameOver;
        this.victory = victory;
        this.fireworks = fireworks;
    }
}