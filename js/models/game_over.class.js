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
        'assets/gameover/frame_09_delay-0.1s.png'
    ];


    constructor(x, y, width, height) {
        super().loadImage('assets/gameover/frame_00_delay-0.1s.png');
        this.loadImages(this.GAME_OVER);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    animateCollectible() {
        setInterval(() => {
            this.playAnimation(this.GAME_OVER)
        }, 100);
    }

}