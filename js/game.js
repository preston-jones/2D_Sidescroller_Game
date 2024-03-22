let canvas;
let world;
let ctx;
let keyboard = new Keyboard();
let musicOff = false;
let soundEffectsOff = false;
let isGameOver = false;

function init() {
    document.getElementById('startscreen').classList.add('close_startscreen');
    document.getElementById('canvas').classList.add('show_canvas');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    pressMobileButtons();
}


// Keyboard(classname).UP(Key of Variable in this class)
window.addEventListener("keydown", (e) => {
    if (e.code == "ArrowDown") {
        keyboard.DOWN = true;
    }
    if (e.code == "ArrowLeft") {
        keyboard.LEFT = true;
    }
    if (e.code == "ArrowRight") {
        keyboard.RIGHT = true;
    }
    if (e.code == "Space") {
        keyboard.SPACE = true;
    }
    if (e.code == "KeyC") {
        keyboard.C = true;
    }
    if (e.code == "Enter") {
        keyboard.ENTER = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.code == "ArrowDown") {
        keyboard.DOWN = false;
    }
    if (e.code == "ArrowLeft") {
        keyboard.LEFT = false;
    }
    if (e.code == "ArrowRight") {
        keyboard.RIGHT = false;
    }
    if (e.code == "Space") {
        keyboard.SPACE = false;
    }
    if (e.code == "KeyC") {
        keyboard.C = false;
    }
    if (e.code == "Enter") {
        keyboard.ENTER = false;
    }
});


function pressMobileButtons() {
    document.getElementById('arrow_left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('arrow_left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
    document.getElementById('arrow_right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('arrow_right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    document.getElementById('jump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });
    document.getElementById('jump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
    document.getElementById('shoot').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.C = true;
    });
    document.getElementById('shoot').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.C = false;
    });

}


function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    enterFullscreen(fullscreen);
}


function enterFullscreen(element) {
    document.getElementById('startscreen').classList.add('fullscreen_startscreen');
    document.getElementById('canvas').classList.add('fullscreen');
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }

}


function sound() {
    musicOff = true;
    console.log(world.level.enemies);
}