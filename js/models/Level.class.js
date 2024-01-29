class Level {

    enemies;
    vehiclesNear;
    vehiclesFar;
    backgroundBuildingsFar;
    animatedBackgroundSkyline;
    backgroundBuildingsNear;
    playground;


    constructor(enemies, vehiclesNear, vehiclesFar, backgroundBuildingsFar, animatedBackgroundSkyline, backgroundBuildingsNear, playground) {
        this.enemies = enemies;
        this.vehiclesNear = vehiclesNear;
        this.vehiclesFar = vehiclesFar;
        this.backgroundBuildingsFar = backgroundBuildingsFar;
        this.animatedBackgroundSkyline = animatedBackgroundSkyline;
        this.backgroundBuildingsNear = backgroundBuildingsNear;
        this.playground = playground;
    }
}