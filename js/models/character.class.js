class Character extends MovableObject {

    width= 60;
    height = 60;
    x = 60;
    y = 90;
    speed = 5;

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

    constructor() {
        super().loadImage('assets/sprites/character/player_male/Idle/Idle1.png');
        this.loadImages(this.IMAGES_RUN);
        this.animateCharacter();
    }


    animateCharacter() {
        this.moveRight(this.IMAGES_RUN, this.speed);
    }


    jump() {

    }
}