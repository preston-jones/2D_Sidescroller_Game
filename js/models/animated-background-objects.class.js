class AnimatedBackground extends MovableObject {

    animate(arr) {
        this.width = arr[this.currentImage].width;
        this.height = arr[this.currentImage].height;
        this.y = arr[this.currentImage].y;
        this.x = arr[this.currentImage].x;
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SKYLINE_FAR.length;// Modulu Function let i = 0 % 8; 0 geteilt durch 8 = 0, Rest 0 ???
            this.x -= 1;
            this.currentImage++;
        }, 100);
    }


    animateBackground(arr, speed) {
        this.loadImage(arr[0].path);
            setInterval(() => {
                this.x -= speed;
            }, 100);
    }
}