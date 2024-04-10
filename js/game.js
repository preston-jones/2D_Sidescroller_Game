let canvas;
let world;
let ctx;
let keyboard = new Keyboard();
let musicOff = false;
let isGameOver = false;
let isInFullscreen = false;
let soundMuted = true;
let mobileController = false

// SOUND FILES
let level_bgr_music = new Audio('assets/audio/cyber_runner.mp3');
level_bgr_music.loop = true;
let boss_fight_music = new Audio('assets/audio/Boss_fight.mp3');
boss_fight_music.muted = false;
let jump_sound = new Audio('assets/audio/jump.mp3');        
jump_sound.muted = false;
let shoot_sound = new Audio('assets/audio/shoot.mp3');
shoot_sound.muted = false;
let hurt_sound = new Audio('assets/audio/hurt.mp3');
hurt_sound.muted = false;
let death_sound = new Audio('assets/audio/death.mp3');
death_sound.muted = false;
let explosion_sound = new Audio('assets/audio/explosion.mp3');
explosion_sound.muted = false;
let collecting_sound = new Audio('assets/audio/collecting.mp3');
collecting_sound.muted = false;
let game_over_sound = new Audio('assets/audio/gameover.mp3');
game_over_sound.muted = false;


function init() {
    loadTemplates();
}


async function loadTemplates() {
    await includeHTML();
    startFullscreenEvent();
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
    closeStartscreen();
    loadCanvas();
    pressMobileButtons();
    loadBackgroundMusic();
}


function closeStartscreen() {
    document.getElementById('startscreen').classList.add('d-none');
}


function loadCanvas() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('canvas').classList.add('d-block');
}


function loadBackgroundMusic() {
    level_bgr_music.play();
}


function toggleSound() {
    if (!soundMuted) {
        document.getElementById('audio_button').src = 'assets/img/icons/audio_on.png';
        level_bgr_music.muted = false;
        jump_sound.muted = false;
        shoot_sound.muted = false;
        hurt_sound.muted = false;
        death_sound.muted = false;
        explosion_sound.muted = false;
        game_over_sound.muted = false;
        soundMuted = true;
    }
    else {
        document.getElementById('audio_button').src = 'assets/img/icons/audio_off.png';
        level_bgr_music.muted = true;
        jump_sound.muted = true;
        shoot_sound.muted = true;
        hurt_sound.muted = true;
        death_sound.muted = true;
        explosion_sound.muted = true;
        game_over_sound.muted = true;
        soundMuted = false;
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


function toggleMobileController() {
    if (!mobileController) {
        document.getElementById('gamepad_overlay').classList.add('showMobileController');
        document.getElementById('controller_button').src = 'assets/img/icons/keyboard.png';
        mobileController = true;
    }
    else {
        document.getElementById('gamepad_overlay').classList.remove('showMobileController');
        document.getElementById('controller_button').src = 'assets/img/icons/controller_mobile.png';
        mobileController = false;
    }
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
        keyboard.DOWN = false;
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


function startFullscreenEvent() {
    let fullscreen_btn = document.getElementById('fullscreen_button');
    fullscreen_btn.addEventListener('click', toggleFullScreen);
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