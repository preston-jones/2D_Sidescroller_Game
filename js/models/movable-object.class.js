class MovableObject {
    x;
    y;
    height;
    width;
    img;
    imageCache = {};

    loadImage(path, x, y, width, height) {
        this.x = x;
        this.y = y;
        this.height = width;
        this.width = height;
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr, x, y, width, height) {
        arr.forEach(path => {
            this.x = x;
            this.y = y;
            this.height = width;
            this.width = height;
            let img = new Image();
            img.src = path;
            this.imageCache[path]= img;
        });
    }

    moveRight() {
        console.log('move right');
    }

    moveLeft() {
        console.log('move left');
    }
}