/**
 * AnimatedBackground class is a class that represents a static background element on the canvas.
 * 
 * @class AnimatedBackground
 * @extends MovableObject
 */
class AnimatedBackground extends MovableObject {


    /**
     * Animates the background when the character moves.
     * @param {number} x - The x coordinate of the background.
     */
    animateBackground(x) {
        setInterval(() => {
            if (world && world.character.x > 60 && world.character.x < 1888 && !world.keyboard.DOWN && !world.character.is_Dead && !world.character.is_Hurt) {
                if (keyboard.RIGHT && !keyboard.LEFT) {
                    this.x -= x;
                }
            }
            if (world && world.character.x > 60 && world.character.x < 1888 && !world.keyboard.DOWN && !world.character.is_Dead && !world.character.is_Hurt) {
                if (keyboard.LEFT && !keyboard.RIGHT) {
                    this.x += x;
                }
            }
        }, 1000 / 60);
    }
}