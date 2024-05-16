/** 
 * The DrawableObject class is a class that is used to create objects that can be drawn on the canvas.
 * 
 * @class DrawableObject
 */
class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x;
    y;
    offset_left = 0;
    offset_top = 0;
    offset_right = 0;
    offset_bottom = 0;
    height;
    width;
    prevImageSrc;


    /**
     * Draws the object on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The canvas 2d context.
     */
    draw(ctx) {
        if (!this.img) {
            this.img = new Image();
            if (this instanceof Character) { this.img.src = 'assets/sprites/character/player_female/shoot/shoot.png'; }
            if (this instanceof Cop) { this.img.src = 'assets/sprites/enemies/cop/idle/cop2.png'; }
            if (this instanceof Bootleg) { this.img.src = 'assets/sprites/enemies/Bootleg/bootleg-idle.png'; }
            if (this instanceof Drone) { this.img.src = 'assets/sprites/enemies/drone/drone-1.png'; }
            if (this instanceof BossEnemy) { this.img.src = 'assets/sprites/enemies/Wasp/wasp1.png'; }
            this.img.onload = () => {
                this.drawImageWithFilter(ctx);
            };
        }
        else {
            this.drawImageWithFilter(ctx);
        }
    }


    /**
     * Draws the object on the canvas with an invert filter.
     * @param {CanvasRenderingContext2D} ctx - The canvas 2d context.
     */
    drawImageWithFilter(ctx) {
        const previousFilter = ctx.filter;
        if (this.isInverted && !this.is_Dead) {
            ctx.filter = 'invert(1)';
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
            ctx.filter = previousFilter; // Restore the previous filter only if the object is inverted
        } else {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }


    /**
     * Draws a yellow frame around the object on the canvas.
     * The frame is only drawn if the object is an instance of Shot, CollectibleEnergy, CollectibleHealth, Drone, Cop, Bootleg, BossEnemy or Character.
     * The frame visualizes the actual collision box of the object.
     * 
     * @param {CanvasRenderingContext2D} ctx - The canvas 2d context.
     */
    drawRealFrame(ctx) {
        if (this instanceof Shot || this instanceof CollectibleEnergy || this instanceof CollectibleHealth || this instanceof Drone || this instanceof Cop || this instanceof Bootleg || this instanceof BossEnemy || this instanceof Character) {
            ctx.lineWidth = '1';
            ctx.beginPath();
            ctx.strokeStyle = 'yellow';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    /**
     * Draws a blue frame around the object on the canvas.
     * The frame is only drawn if the object is an instance of Shot, CollectibleEnergy, CollectibleHealth, Drone, Cop, Bootleg, BossEnemy or Character.
     * The frame visualizes the collision box of the object including the offsets.
     * 
     * @param {CanvasRenderingContext2D} ctx - The canvas 2d context.
     */
    drawFrame(ctx) {
        if (this instanceof Shot || this instanceof CollectibleEnergy || this instanceof CollectibleHealth) {
            ctx.lineWidth = '1';
            ctx.beginPath();
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + this.offset_left, this.y + this.offset_top, this.width + this.offset_right, this.height + this.offset_bottom);
            ctx.stroke();
        }
        if (this instanceof Drone || this instanceof Cop || this instanceof Bootleg || this instanceof BossEnemy || this instanceof Character) {
            ctx.lineWidth = '1';
            ctx.beginPath();
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + this.offset_left, this.y + this.offset_top, this.width + this.offset_right, this.height + this.offset_bottom);
            ctx.stroke();
        }
    }


    /**
     * Loads an image from a given path.
     * @param {string} path - The path to the image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * Loads images from an array of paths.
     * @param {string[]} arr - The array of paths to the images.
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
     * Plays an looped animation of the object.
     * @param {string[]} arr - The array of paths to the images for the animation.
     */
    playAnimation(arr) {
        let i = this.currentImage % arr.length;// Modulu Function let i = 0 % 8; 0 geteilt durch 8 = 0, Rest 0
        let path = arr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}