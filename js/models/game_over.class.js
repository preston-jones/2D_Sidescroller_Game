class Game_over extends DrawableObject {

    GAME_OVER = [
        'assets/gameover/frame_00_delay-0.1s.png',
        'assets/gameover/frame_01_delay-0.1s.png',
        'assets/gameover/frame_02_delay-0.1s.png',
        'assets/gameover/frame_03_delay-0.1s.png',
        'assets/gameover/frame_04_delay-0.1s.png',
        'assets/gameover/frame_05_delay-0.1s.png',
        'assets/gameover/frame_06_delay-0.1s.png',
        'assets/gameover/frame_07_delay-0.1s.png',
        'assets/gameover/frame_08_delay-0.1s.png',
        'assets/gameover/frame_09_delay-0.1s.png',
        'assets/gameover/frame_10_delay-0.1s.png',
        'assets/gameover/frame_11_delay-0.1s.png',
        'assets/gameover/frame_12_delay-0.1s.png',
        'assets/gameover/frame_13_delay-0.1s.png',
        'assets/gameover/frame_14_delay-0.1s.png',
        'assets/gameover/frame_15_delay-0.1s.png',
        'assets/gameover/frame_16_delay-0.1s.png',
        'assets/gameover/frame_17_delay-0.1s.png',
        'assets/gameover/frame_18_delay-0.1s.png',
        'assets/gameover/frame_19_delay-0.1s.png',
        'assets/gameover/frame_20_delay-0.1s.png',
        'assets/gameover/frame_21_delay-0.1s.png',
        'assets/gameover/frame_22_delay-0.1s.png',
        'assets/gameover/frame_23_delay-0.1s.png',
        'assets/gameover/frame_24_delay-0.1s.png',
        'assets/gameover/frame_25_delay-0.1s.png',
        'assets/gameover/frame_26_delay-0.1s.png',
        'assets/gameover/frame_27_delay-0.1s.png',
        'assets/gameover/frame_28_delay-0.1s.png',
        'assets/gameover/frame_29_delay-0.1s.png',
        'assets/gameover/frame_30_delay-0.1s.png'
    ];

    game_over_sound = new Audio('assets/audio/gameover.mp3');


    constructor(x, y, width, height) {
        super().loadImage('assets/gameover/frame_00_delay-0.1s.png');
        this.loadImages(this.GAME_OVER);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.animateCollectible();
    }

    animateCollectible() {
        setInterval(() => {
            this.playAnimation(this.GAME_OVER)
            if (world && world.character.is_Dead) {
                this.game_over_sound.play();
            }
        }, 100);
    }

}