class Character extends MovableObject {

    width = 60;
    height = 50;
    x = 0;
    y = 40;
    speed = 2;

    IMAGES_RUN = [
        'assets/sprites/character/player_female/run/run-1.png',
        'assets/sprites/character/player_female/run/run-2.png',
        'assets/sprites/character/player_female/run/run-3.png',
        'assets/sprites/character/player_female/run/run-4.png',
        'assets/sprites/character/player_female/run/run-5.png',
        'assets/sprites/character/player_female/run/run-6.png',
        'assets/sprites/character/player_female/run/run-7.png',
        'assets/sprites/character/player_female/run/run-8.png'
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
    IMAGES_JUMP = [
        'assets/sprites/character/player_female/jump/jump-1.png',
        'assets/sprites/character/player_female/jump/jump-2.png',
        'assets/sprites/character/player_female/jump/jump-3.png',
        'assets/sprites/character/player_female/jump/jump-4.png'
    ];
    world;
    run_sound = new Audio('assets/audio/run.mp3');
    constructor() {
        super().loadImage('assets/sprites/character/player_female/idle/idle-1.png');
        this.applyGravity();
        this.animateCharacter();
    }


    animateCharacter() {

        setInterval(() => {
            this.run_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.run_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -1) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.run_sound.play();
            }
            if (this.world.keyboard.SPACE) {
                this.jump();
            }
            if (this.world.keyboard.UP && this.y < 170) {
                this.y += this.speed;
            }
            if (this.world.keyboard.DOWN && this.y > this.levelGround) {
                this.y -= this.speed;
            }
            this.world.camera_x = -this.x + 50; 
            this.world.camera_y = 0;


        }, 1000 / 60);

        setInterval(() => {
            console.log(this.y);
            this.loadImages(this.IMAGES_STAY);
            this.playAnimation(this.IMAGES_STAY);
            
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.loadImages(this.IMAGES_RUN);
                this.playAnimation(this.IMAGES_RUN);
            }
            if (this.world.keyboard.SPACE && this.y < this.levelGround) {
                this.loadImages(this.IMAGES_JUMP);
                this.playAnimation(this.IMAGES_JUMP);
            }
            if (this.world.keyboard.UP || this.world.keyboard.DOWN) {
                if (this.y > this.levelGround) {
                    this.loadImages(this.IMAGES_CLIMB);
                    this.playAnimation(this.IMAGES_CLIMB);
                }
                if (this.y <= this.levelGround) {
                    this.loadImages(this.IMAGES_CROUCH);
                    this.playAnimation(this.IMAGES_CROUCH);
                }
            }
            // if (!this.world.keyboard.RIGHT || !this.world.keyboard.LEFT || !this.world.keyboard.UP || !this.world.keyboard.DOWN) {
            //     this.loadImages(this.IMAGES_STAY);
            //     this.playAnimation(this.IMAGES_STAY);
            // }
        }, 120);
    }
}