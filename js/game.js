let canvas;
let world;
let ctx;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


window.addEventListener("keydown", (e) => {
    if (e.code == "ArrowUp") {
        Keyboard.UP = false;
    }
    if (e.code == "ArrowDown") {
        Keyboard.DOWN = false;
    }
    if (e.code == "ArrowLeft") {
        Keyboard.LEFT = true;
    }
    if (e.code == "ArrowRight") {
        Keyboard.RIGHT = true;
    }
    if (e.code == "Space") {
        Keyboard.SPACE = true;
    }
    console.log(e);
});