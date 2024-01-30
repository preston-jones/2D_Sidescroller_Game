class AnimatedBackground extends MovableObject {

    animate(x, y) {
            if (keyboard.RIGHT && world.character.world.character.x < world.level.level_end_x) {
                this.x -= x;
            }
            if (keyboard.LEFT && world.character.x > -1) {
                this.x += x;
            }
            if (keyboard.UP && world.character.y < 170) {
                this.y += y;
            }
            if (keyboard.DOWN && world.character.y > 90) {
                this.y -= y;
            }
    }
}