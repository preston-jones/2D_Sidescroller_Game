class You_win extends DrawableObject {

    YOU_WIN = [
        'assets/you_win/you_win_1.png',
        'assets/you_win/you_win_2.png',
        'assets/you_win/you_win_3.png',
    ];


    constructor(x, y, width, height) {
        super().loadImage('assets/you_win/you_win_1.png');
        this.loadImages(this.YOU_WIN);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.animateYouWin();
    }

    animateYouWin() {
        setInterval(() => {
            this.playAnimation(this.YOU_WIN)
            if (world && world.level.boss_dead) {
                level_bgr_music.pause();
                victory_music.play();
                fireworks_sound.play();
                victory_music.loop = true;
                fireworks_sound.loop = true;
            }
        }, 100);
    }

}