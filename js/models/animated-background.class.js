class AnimatedBackground extends MovableObject {
    animateBackground(x) {
        setInterval(() => {
            if (world && world.character.x > 60 && world.character.x < 1890 && !world.character.is_Dead && !world.character.is_Hurt) {
                if (keyboard.RIGHT && !keyboard.LEFT) {
                        this.x -= x;
                }
            }
            if (world && world.character.x > 60 && world.character.x < 1890 && !world.character.is_Dead && !world.character.is_Hurt) {            
                if (keyboard.LEFT && !keyboard.RIGHT) {
                        this.x += x;
                }
            }
        }, 1000 / 60);
    }
}