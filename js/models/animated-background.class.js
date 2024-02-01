class AnimatedBackground extends MovableObject {

    animate(x, y) {
        console.log(world.character.x);
            if (keyboard.RIGHT && world.character.x > 60 && world.character.x < 893) {
                if (!keyboard.SHIFTLEFT || !keyboard.SHIFTRIGHT) {
                    this.x -= x;
                }
                if (keyboard.SHIFTLEFT || keyboard.SHIFTRIGHT) {
                    x = 0.5;
                    this.x -= x;
                }
            }
            if (keyboard.LEFT && world.character.x > 60 && world.character.x < 893) {
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