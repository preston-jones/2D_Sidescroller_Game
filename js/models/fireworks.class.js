class Fireworks extends DrawableObject {

    FIREWORKS = [
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-0.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-1.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-2.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-3.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-4.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-5.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-6.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-7.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-8.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-9.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-10.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-11.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-12.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-13.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-14.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-15.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-16.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-17.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-18.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-19.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-20.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-21.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-22.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-23.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-24.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-25.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-26.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-27.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-28.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-29.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-30.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-31.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-32.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-33.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-34.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-35.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-36.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-37.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-38.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-39.png',
        'assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-40.png',
    ];


    constructor(x, y, width, height) {
        super().loadImage('assets/fireworks/11646ced-10fd-47b5-b765-df9cabd8cc49-0.png');
        this.loadImages(this.FIREWORKS);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.animateFireworks();
    }

    animateFireworks() {
        setInterval(() => {
            this.playAnimation(this.FIREWORKS)
        }, 100);
    }

}