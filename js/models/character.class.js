class Character extends MovableObject {

    width= 60;
    height = 60;
    x = 60;
    y = 90;

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

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_RUN.length;// Modulu Function let i = 0 % 8; 0 geteilt durch 8 = 0, Rest 0 ???
            let path = this.IMAGES_RUN[i];
            this.img = this.imageCache[path];
            this.currentImage ++;
        }, 100);
    }


    jump() {

    }
}