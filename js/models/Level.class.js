class Level {

    enemies;
    animatedObjectFront;
    animatedObjectBack;
    backgroundImageStatic;
    animatedBackgroundBack;
    animatedBackgroundFront;
    playground;
    collectibles_energy;

    level_start_x = -1;
    level_end_x = 1130;
    level_end_bottom_y = 77;
    // level_end_bottom_y = 99;


    constructor(enemies, animatedObjectFront, animatedObjectBack, backgroundImageStatic, animatedBackgroundBack, animatedBackgroundFront, playground, collectibles_energy) {
        this.enemies = enemies;
        this.animatedObjectFront = animatedObjectFront;
        this.animatedObjectBack = animatedObjectBack;
        this.backgroundImageStatic = backgroundImageStatic;
        this.animatedBackgroundBack = animatedBackgroundBack;
        this.animatedBackgroundFront = animatedBackgroundFront;
        this.playground = playground;
        this.collectibles_energy = collectibles_energy;
    }
}