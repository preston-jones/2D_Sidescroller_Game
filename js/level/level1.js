const level1 = new Level(
    [
        new Cop(),
        new Cop(),
        new Bootleg(),
        new Drone()
    ],
    [
        new VehiclesFront(),
        new VehiclesFront()
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
        new VehiclesBack('left', 1900, 110, 30, 10)
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
        new SkylineFront('assets/environment/background/near-buildings-b-bg.png', 1900, 10, 400, 150),
    ],
[
    new BackgroundStatic('assets/environment/floor.png', 0, -110, 450, 260)
]

);