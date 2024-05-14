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
        this.animateVictory();
    }

    animateVictory() {
        resetMusicTime(victory_music);
        setInterval(() => {
            this.playAnimation(this.YOU_WIN)
            if (world && world.level.boss_dead && !world.character.is_Dead) {
                stopLevelBackgroundMusic();
                startVictorySound();
            }
        }, 100);
    }

}