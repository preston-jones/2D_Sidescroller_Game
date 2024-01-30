class Character extends MovableObject {

    width = 60;
    height = 60;
    x = 0;
    y = 90;
    speed = 2;

    IMAGES_RUN = [
        'assets/sprites/character/player_male/Run/Run1.png',
        'assets/sprites/character/player_male/Run/Run2.png',
        'assets/sprites/character/player_male/Run/Run3.png',
        'assets/sprites/character/player_male/Run/Run4.png',
        'assets/sprites/character/player_male/Run/Run5.png',
        'assets/sprites/character/player_male/Run/Run6.png',
        'assets/sprites/character/player_male/Run/Run7.png',
        'assets/sprites/character/player_male/Run/Run8.png',
    ];
    IMAGES_STAY = [
        'assets/sprites/character/player_male/Idle/Idle1.png',
        'assets/sprites/character/player_male/Idle/Idle2.png',
        'assets/sprites/character/player_male/Idle/Idle3.png',
        'assets/sprites/character/player_male/Idle/Idle4.png',
    ];
    world;
    jumping_sound = new Audio('assets/audio/run.mp3');
    constructor() {
        super().loadImage('assets/sprites/character/player_male/Idle/Idle1.png');
        this.loadImages(this.IMAGES_RUN);
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
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.move(this.IMAGES_RUN);
            }
        }, 100);
    }


    jump() {

    }
}