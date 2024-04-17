class Level {

    enemies;
    animatedObjectFront;
    animatedObjectBack;
    backgroundImageStatic;
    animatedBackgroundBack;
    animatedBackgroundFront;
    playground;
    collectibles_energy;
    collectibles_health;
    gameOver;
    youWin;
    fireworks;

    level_start_x = -1;
    // level_end_x = 1130;
    level_boss_arena_border_left_x = 1880;
    level_end_x = 2130;
    level_end_bottom_y = 77;
    // level_end_bottom_y = 99;
    boss_dead = false;

    constructor(enemies, animatedObjectFront, animatedObjectBack, backgroundImageStatic, animatedBackgroundBack, animatedBackgroundFront, playground, collectibles_energy, collectibles_health, gameOver, youWin, fireworks) {

        this.enemies = enemies;
        this.animatedObjectFront = animatedObjectFront;
        this.animatedObjectBack = animatedObjectBack;
        this.backgroundImageStatic = backgroundImageStatic;
        this.animatedBackgroundBack = animatedBackgroundBack;
        this.animatedBackgroundFront = animatedBackgroundFront;
        this.playground = playground;
        this.collectibles_energy = collectibles_energy;
        this.collectibles_health = collectibles_health;
        this.gameOver = gameOver;
        this.youWin = youWin;
        this.fireworks = fireworks;
    }
}