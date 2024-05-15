/**
 * Victory class
 * 
 * Represents the victory screen.
 * 
 * @class Victory
 * @extends {DrawableObject}
 */
class Victory extends DrawableObject {

    /* Arrays of the images paths for the animations of this object. */
    VICTORY = [
        'assets/victory/victory_1.png',
        'assets/victory/victory_2.png',
        'assets/victory/victory_3.png',
    ];


    /**
     * The constructor of the Victory class.
     * 
     * @param {number} x - The x coordinate of the victory object on the canvas.
     * @param {number} y - The y coordinate of the victory object on the canvas.
     * @param {number} width - The width of the victory object.
     * @param {number} height - The height of the victory object.
     */
    constructor(x, y, width, height) {
        super().loadImage('assets/victory/victory_1.png');
        this.loadImages(this.VICTORY);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.animateVictory();
    }


    /**
     * Animates the victory screen.
     */
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