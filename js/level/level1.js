let level1; /* global variable for the first level of the game */


/**
 * Function to initialize the first level of the game. Contains all the objects and elements of the first level.
 */
function initLevel1() {
    level1 = new Level(
        [
            new Cop(800, 2000, 1, 0.7),
            new Cop(800, 2000, 1, 0.7),
            new Cop(800, 2000, 1, 0.7),
            new Cop(800, 2000, 1, 0.7),
            new Bootleg(900, 1100),
            new Bootleg(900, 1100),
            new Bootleg(900, 1100),
            new Drone(300, 700),
            new Drone(800, 1200),
            new Drone(1000, 1500),
            new BossEnemy()
        ],
        [
            new VehiclesFront('assets/sprites/vehicles/v-truck.png', 1000, 50, 163, 60, 0.5, -1)
        ],
        [
            new BackgroundStatic('assets/environment/background/skyline-a.png', -58, -25, 120, 190),
            new BackgroundStatic('assets/environment/background/skyline-b.png', 62, -25, 120, 190),
            new BackgroundStatic('assets/environment/background/skyline-a.png', 182, -25, 120, 190),
        ],
        [
            new SkylineBack('assets/environment/background/skyline-1.png', -300, 0, 300, 150),
            new SkylineBack('assets/environment/background/skyline-2.png', -600, 0, 300, 150),

            new SkylineBack('assets/environment/background/skyline-1.png', 0, 0, 300, 150),
            new SkylineBack('assets/environment/background/skyline-2.png', 300, 0, 300, 150),

            new SkylineBack('assets/environment/background/skyline-1.png', 600, 0, 300, 150),
            new SkylineBack('assets/environment/background/skyline-2.png', 900, 0, 300, 150),
        ],
        [
            new SkylineFront('assets/environment/background/near-buildings-a-bg.png', -50, 10, 400, 150),
            new SkylineFront('assets/environment/background/near-buildings-b-bg.png', 360, 10, 400, 150),

            new SkylineFront('assets/environment/background/near-buildings-a-bg.png', 770, 10, 400, 150),
            new SkylineFront('assets/environment/background/near-buildings-b-bg.png', 1180, 10, 400, 150),

            new SkylineFront('assets/environment/background/near-buildings-a-bg.png', 1590, 10, 400, 150),
            new SkylineFront('assets/environment/background/near-buildings-b-bg.png', 2000, 10, 400, 150),
        ],
        [
            new Playground('assets/environment/floor2.png', 0, 120, 600, 50),
            new Playground('assets/environment/floor2.png', 598, 120, 600, 50),
            new Playground('assets/environment/floor2.png', 1189, 120, 600, 50),
            new Playground('assets/environment/floor2.png', 1789, 120, 600, 50),
            new Playground('assets/sprites/vehicles/v-red-reversed.png', -20, 70, 95, 60)
        ],
        [
            new CollectibleEnergy(600, 40, 15, 15),
            new CollectibleEnergy(900, 40, 15, 15),
            new CollectibleEnergy(1500, 40, 15, 15),
            new CollectibleEnergy(1800, 40, 15, 15)
        ],
        [
            new CollectibleHealth(1000, 112, 15, 15),
            new CollectibleHealth(1400, 112, 15, 15),
            new CollectibleHealth(1800, 112, 15, 15)
        ],
        [
            new Game_over(0, -45, 300, 200)
        ],
        [
            new Victory(45, 0, 200, 100)
        ],
        [
            new Fireworks(-30, -25, 250, 200),
            new Fireworks(150, 0, 250, 200)
        ]
    );
}