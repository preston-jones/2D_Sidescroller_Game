class Level {

    enemies;
    animatedObjectFront;
    animatedObjectBack;
    backgroundImageStatic;
    animatedBackgroundBack;
    animatedBackgroundFront;
    playground;

    level_end_x = 1000;


    constructor(enemies, animatedObjectFront, animatedObjectBack, backgroundImageStatic, animatedBackgroundBack, animatedBackgroundFront, playground) {
        this.enemies = enemies;
        this.animatedObjectFront = animatedObjectFront;
        this.animatedObjectBack = animatedObjectBack;
        this.backgroundImageStatic = backgroundImageStatic;
        this.animatedBackgroundBack = animatedBackgroundBack;
        this.animatedBackgroundFront = animatedBackgroundFront;
        this.playground = playground;
    }
}