class Character extends MovableObject {

    width = 60;
    height = 60;
    x = 0;
    y = 90;
    speed = 2;

    IMAGES_RUN = [
        'assets/sprites/character/player_female/run/run-1.png',
        'assets/sprites/character/player_female/run/run-2.png',
        'assets/sprites/character/player_female/run/run-3.png',
        'assets/sprites/character/player_female/run/run-4.png',
        'assets/sprites/character/player_female/run/run-5.png',
        'assets/sprites/character/player_female/run/run-6.png',
        'assets/sprites/character/player_female/run/run-7.png',
        'assets/sprites/character/player_female/run/run-8.png',
    ];
    IMAGES_STAY = [
        'assets/sprites/character/player_female/idle/idle-1.png',
        'assets/sprites/character/player_female/idle/idle-2.png',
        'assets/sprites/character/player_female/idle/idle-3.png',
        'assets/sprites/character/player_female/idle/idle-4.png'
    ];
    IMAGES_CLIMB = [
        'assets/sprites/character/player_female/climb/climb-1.png',
        'assets/sprites/character/player_female/climb/climb-2.png',
        'assets/sprites/character/player_female/climb/climb-3.png',
        'assets/sprites/character/player_female/climb/climb-4.png',
        'assets/sprites/character/player_female/climb/climb-5.png',
        'assets/sprites/character/player_female/climb/climb-6.png'
    ];
    IMAGES_CROUCH = [
        'assets/sprites/character/player_female/crouch/crouch.png'
    ];
    world;
    jumping_sound = new Audio('assets/audio/run.mp3');
    constructor() {
        super().loadImage('assets/sprites/character/player_female/idle/idle-1.png');
        // this.loadImages(this.IMAGES_STAY);
        this.animateCharacter();
    }


    animateCharacter() {

        setInterval(() => {
            this.jumping_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.jumping_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -1) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.jumping_sound.play();
            }
            if (this.world.keyboard.UP && this.y < 170) {
                console.log(this.y);
                this.y += this.speed;
            }
            if (this.world.keyboard.DOWN && this.y > 90) {
                this.y -= this.speed;
            }
            this.world.camera_x = -this.x + 50;
            this.world.camera_y = -this.y + 90;


        }, 1000 / 60);

        setInterval(() => {
            this.loadImages(this.IMAGES_STAY);
            this.move(this.IMAGES_STAY);
            
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.loadImages(this.IMAGES_RUN);
                this.move(this.IMAGES_RUN);
            }
            if (this.world.keyboard.UP || this.world.keyboard.DOWN) {
                if (this.y > 90) {
                    this.loadImages(this.IMAGES_CLIMB);
                    this.move(this.IMAGES_CLIMB);
                }
                if (this.y <= 90) {
                    this.loadImages(this.IMAGES_CROUCH);
                    this.move(this.IMAGES_CROUCH);
                }
            }
            // if (!this.world.keyboard.RIGHT || !this.world.keyboard.LEFT || !this.world.keyboard.UP || !this.world.keyboard.DOWN) {
            //     this.loadImages(this.IMAGES_STAY);
            //     this.move(this.IMAGES_STAY);
            // }
        }, 100);
    }


    jump() {

    }
}