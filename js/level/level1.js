const level1 = new Level(
    [
        new Cop(),
        new Cop(),
        new Bootleg(),
        new Drone(),
        new BossEnemy()
    ],
    [
        new VehiclesFront('right', 0, 80, 30, 10),
        new VehiclesFront('left', 400, 100, 30, 10)
    ],
    [
        new VehiclesBack('right', 0, 80, 30, 10),
        new VehiclesBack('left', 400, 100, 30, 10),
        new VehiclesBack('right', 5, 120, 30, 10),
        new VehiclesBack('left', 800, 140, 30, 10),
        new VehiclesBack('right', 5, 130, 30, 10),
        new VehiclesBack('left', 1900, 110, 30, 10),

        new VehiclesBack('right', 3500, 80, 30, 10),
        new VehiclesBack('left', 1400, 100, 30, 10),
        new VehiclesBack('right', -50, 120, 30, 10),
        new VehiclesBack('left', 1800, 140, 30, 10),
        new VehiclesBack('right', -100, 130, 30, 10),
        new VehiclesBack('left', 1900, 110, 30, 10),

        new VehiclesBack('right', 0, 80, 30, 10),
        new VehiclesBack('left', 450, 90, 30, 10),
        new VehiclesBack('right', 55, 30, 30, 10),
        new VehiclesBack('left', 850, 40, 30, 10),
        new VehiclesBack('right', 5, 13, 30, 10),
        new VehiclesBack('left', 1900, 110, 30, 10),

        new VehiclesBack('right', 3700, 80, 30, 10),
        new VehiclesBack('left', 1300, 100, 30, 10),
        new VehiclesBack('right', -59, 120, 30, 10),
        new VehiclesBack('left', 1700, 140, 30, 10),
        new VehiclesBack('right', -100, 130, 30, 10),
        new VehiclesBack('left', 1400, 110, 30, 10)
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
    ],
    [
        new CollectibleEnergy(200, 112, 15, 15),
        new CollectibleEnergy(600, 112, 15, 15)
    ],
    [
        new CollectibleHealth(400, 112, 15, 15),
        new CollectibleHealth(800, 112, 15, 15)
    ],
    [
        new Game_over(0, -20, 300, 200)
    ],
    [
        new You_win(45, 10, 200, 100)
    ],
    [
        new Fireworks(-30, -25, 250, 200),
        new Fireworks(150, 0, 250, 200)
    ]
);