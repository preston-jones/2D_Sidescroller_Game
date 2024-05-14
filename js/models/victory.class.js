class Victory extends DrawableObject {

    VICTORY = [
        'assets/victory/victory_1.png',
        'assets/victory/victory_2.png',
        'assets/victory/victory_3.png',
    ];


    constructor(x, y, width, height) {
        super().loadImage('assets/victory/victory_1.png');
        this.loadImages(this.VICTORY);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.animateVictory();
    }

    animateVictory() {
        resetMusicTime(victory_music);
        setInterval(() => {
            this.playAnimation(this.VICTORY)
            if (world && world.level.boss_dead && !world.character.is_Dead) {
                stopBossFightMusic();
                stopLevelBackgroundMusic();
                startVictorySound();
                showNewGameButton();
            }
        }, 100);
    }

}