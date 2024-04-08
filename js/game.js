let canvas;
let world;
let ctx;
let keyboard = new Keyboard();
let musicOff = false;
let isGameOver = false;
let isInFullscreen = false;

let bgr_music = new Audio('assets/audio/city_theme_2.mp3');
let boss_fight = new Audio('assets/audio/Boss_fight.mp3');

function init() {
    loadTemplates();
    loadSounds();
}


async function loadTemplates() {
    await includeHTML();
    let fullscreen_btn = document.getElementById('fullscreen_button');
    fullscreen_btn.addEventListener('click', toggleFullScreen);
  }


async function includeHTML() {
    let includeElements = document.querySelectorAll("[w3-include-html]");
    for (let i = 0; i < includeElements.length; i++) {
      const element = includeElements[i];
      file = element.getAttribute("w3-include-html");
      let resp = await fetch(file);
      if (resp.ok) {
        element.innerHTML = await resp.text();
      } else {
        element.innerHTML = "Page not found";
      }
    }
  }


function loadGame() {
    document.getElementById('startscreen').classList.add('close_startscreen');
    document.getElementById('canvas').classList.add('show_canvas');
    pressMobileButtons();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


function loadSounds() {
    bgr_music.pause ();
    boss_fight.pause();
}


function toggleSound() {
    if (bgr_music.paused) {
        document.getElementById('audio_button').src = 'assets/img/icons/audio_on.png';
        bgr_music.play();
        boss_fight.pause();
    } else {
        document.getElementById('audio_button').src = 'assets/img/icons/audio_off.png';
        bgr_music.pause();
        
    }
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


function mobileController() {
    document.getElementById('gamepad_overlay').classList.toggle('showMobileController');
}


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
    document.getElementById('arrow_down').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    });
    document.getElementById('arrow_down').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
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


function toggleFullScreen() {
    let fullscreen = document.getElementById('fullscreen');
    if (!document.fullscreenElement) {
        enterFullscreen(fullscreen);
    } else if (document.fullscreenElement) {
        closeFullscreen(fullscreen);
    }
}


function enterFullscreen(element) {
    document.getElementById('startscreen').classList.add('fullscreen_startscreen');
    document.getElementById('canvas').classList.add('fullscreen');
    document.getElementById('fullscreen_button').src = 'assets/img/icons/collapse.png';

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        element.webkitRequestFullscreen();
    }
}


function closeFullscreen(element) {
    document.getElementById('startscreen').classList.remove('fullscreen_startscreen');
    document.getElementById('canvas').classList.remove('fullscreen');
    document.getElementById('fullscreen_button').src = 'assets/img/icons/expand.png';

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {      // for IE11 (remove June 15, 2022)
        document.msExitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
    }
}