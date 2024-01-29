const level1 = new Level(
    [
        new Cop(),
        new Cop(),
        new Cop()
    ],
    [
        new VehiclesNear(),
        new VehiclesNear()
    ],
    [
        new VehiclesFar('right', 5, 80, 30, 10),
        new VehiclesFar('left', 5, 100, 30, 10),
        new VehiclesFar('right', 5, 120, 30, 10),
        new VehiclesFar('left', 5, 140, 30, 10),
        new VehiclesFar('right', 5, 130, 30, 10),
        new VehiclesFar('left', 5, 110, 30, 10)
    ],
    [
        new BackgroundObject('assets/environment/background/skyline-a.png', -58, -25, 120, 190),
        new BackgroundObject('assets/environment/background/skyline-b.png', 62, -25, 120, 190),
        new BackgroundObject('assets/environment/background/skyline-a.png', 182, -25, 120, 190),
    ],
    [
        new SkylineFar('assets/environment/background/skyline-1.png', -300, 0, 300, 150),
        new SkylineFar('assets/environment/background/skyline-2.png', -600, 0, 300, 150),

        new SkylineFar('assets/environment/background/skyline-1.png', 0, 0, 300, 150),
        new SkylineFar('assets/environment/background/skyline-2.png', 300, 0, 300, 150),

        new SkylineFar('assets/environment/background/skyline-1.png', 600, 0, 300, 150),
        new SkylineFar('assets/environment/background/skyline-2.png', 900, 0, 300, 150),
    ],
    [
        new SkylineNear()
    ],
[
    new BackgroundObject('assets/environment/floor.png', 0, -110, 450, 260)
]

);