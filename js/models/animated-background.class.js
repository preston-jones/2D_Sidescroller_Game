class AnimatedBackground extends MovableObject {

    animate(x, y) {
            if (keyboard.RIGHT && world.character.x > 60 && world.character.x < 893 && !world.character.is_Dead && !world.character.is_Hurt) {
                if (!keyboard.SHIFTLEFT || !keyboard.SHIFTRIGHT) {
                    this.x -= x;
                }
                if (keyboard.SHIFTLEFT || keyboard.SHIFTRIGHT) {
                    x = 0.5;
                    this.x -= x;
                }
            }
            if (keyboard.LEFT && world.character.x > 60 && world.character.x < 893 && !world.character.is_Dead && !world.character.is_Hurt) {
                if (!keyboard.SHIFTLEFT || !keyboard.SHIFTRIGHT) {
                    this.x += x;
                }
                if (keyboard.SHIFTLEFT || keyboard.SHIFTRIGHT) {
                    x = 0.5;
                    this.x += x;
                }
            }
            // if (keyboard.UP && world.character.y < 170) {
            //     this.y += y;
            // }
            // if (keyboard.DOWN && world.character.y > 90) {
            //     this.y -= y;
            // }
    }
}