class Shot extends MovableObject {

    IMAGES_SHOT = [
        'assets/sprites/misc/shot/shot-1.png',
        'assets/sprites/misc/shot/shot-2.png',
        'assets/sprites/misc/shot/shot-3.png',
    ];
    IMAGES_SHOT_HIT = [
        'assets/sprites/misc/shot-hit/shot-hit-1.png',
        'assets/sprites/misc/shot-hit/shot-hit-2.png',
        'assets/sprites/misc/shot-hit/shot-hit-3.png'
    ];

    constructor(x, y, direction) {
        super().loadImage('assets/sprites/misc/shot/shot-1.png');
        this.loadImages(this.IMAGES_SHOT);
        this.loadImages(this.IMAGES_SHOT_HIT);
        this.width = 10;
        this.height = 10;
        this.x = x;
        this.y = y + 15;
        this.speed = 2;
        this.animateShot(direction);
    }


    animateShot(direction) {
        let hit = false;
        let animationInterval;
    
        const checkCollisionAndAnimate = () => {
            if (hit) {
                clearInterval(animationInterval);
                this.animateImpact();
                setTimeout(() => {
                    const shotIndex = world.shots.indexOf(this);
                    if (shotIndex > -1) {
                        world.shots.splice(shotIndex, 1);
                    }
                }, 100); // Adjust timeout to match the hit animation duration
            } else {
                this.x += direction ? -this.speed : this.speed;
                this.playAnimation(this.IMAGES_SHOT);
                world.level.enemies.forEach(enemy => {
                    if (this.isColliding(enemy)) {
                        hit = true;
                        enemy.hit();
                    }
                });
            }
        };
    
        if (direction) {
            this.x = this.x;
        } else {
            this.x = this.x + 50;
        }
    
        animationInterval = setInterval(checkCollisionAndAnimate, 1000 / 60);
    }


    animateImpact() {
        this.playAnimation(this.IMAGES_SHOT_HIT);
    }

}