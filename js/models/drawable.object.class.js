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


    drawRealFrame(ctx) {
        if (this instanceof Shot || this instanceof CollectibleEnergy || this instanceof CollectibleHealth || this instanceof Drone || this instanceof Cop || this instanceof Bootleg || this instanceof BossEnemy || this instanceof Character) {
            ctx.lineWidth = '1';
            ctx.beginPath();
            ctx.strokeStyle = 'yellow';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


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


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    playAnimation(arr) {
        let i = this.currentImage % arr.length;// Modulu Function let i = 0 % 8; 0 geteilt durch 8 = 0, Rest 0
        let path = arr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

}