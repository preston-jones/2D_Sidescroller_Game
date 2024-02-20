class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x;
    y;
    height;
    width;


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        if (this instanceof Cop || this instanceof Bootleg || this instanceof Drone || this instanceof Shot || this instanceof  CollectibleEnergy) {
            ctx.lineWidth = '1';
            ctx.beginPath();
            ctx.strokeStyle = 'white';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
        if (this instanceof Character) {
            ctx.lineWidth = '1';
            ctx.beginPath();
            ctx.strokeStyle = 'white';
            ctx.rect(this.x + 18, this.y, this.width -30, this.height);
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