/**
 * Shot class
 * 
 * Represents a shot fired by the player.
 * 
 * @class Shot
 * @extends {MovableObject}
 */
class Shot extends MovableObject {

    /* Arrays of the images paths for the ground platform. */
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

    animationInterval;
    hit;
    direction;


    /**
     * The constructor of the Shot class.
     * 
     * @param {number} x - The x coordinate of the shot.
     * @param {number} y - The y coordinate of the shot.
     * @param {boolean} direction - The direction of the shot.
     * 
     */
    constructor(x, y, direction) {
        super().loadImage('assets/sprites/misc/shot/shot-1.png');
        this.loadImages(this.IMAGES_SHOT);
        this.loadImages(this.IMAGES_SHOT_HIT);
        this.width = 10;
        this.height = 10;
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.direction = direction;
        this.animateShot();
    }


    /**
     * Animates the shot.
     * 
     * @param {boolean} direction - The direction of the shot.
     */
    animateShot() {
        this.hit = false;
        this.y += world && world.keyboard.DOWN ? 30 : 15;
        this.x = this.direction ? this.x : this.x + 50;
        this.animationInterval = setInterval(this.checkCollisionOfShotAndAnimate.bind(this), 1000 / 60); /* bind(this) is used to pass the Shot object to the function. */
    }


    checkCollisionOfShotAndAnimate() {
        if (this.hit) {
            clearInterval(this.animationInterval);
            this.animateImpact();
            setTimeout(() => {
                const shotIndex = world.shots.indexOf(this);
                if (shotIndex > -1) {
                    world.shots.splice(shotIndex, 1);
                }
            }, 100); // Adjust timeout to match the hit animation duration
        } else {
            this.x += this.direction ? -this.speed : this.speed;
            this.playAnimation(this.IMAGES_SHOT);
            world.level.enemies.forEach(enemy => {
                if (this.isColliding(enemy)) {
                    this.hit = true;
                    enemy.hit();
                }
            });
        }
    }


    /**
     * Animates the impact of the shot.
     */
    animateImpact() {
        this.playAnimation(this.IMAGES_SHOT_HIT);
    }

}