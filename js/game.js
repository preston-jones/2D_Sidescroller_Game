let canvas;
let world;
let ctx;
let keyboard = new Keyboard();
let musicOff = false;
let isGameOver = false;
let isInFullscreen = false;
let soundMuted = true;
let mobileController = false
let character_selected;
let exit_Game = false;

// SOUND FILES
let level_bgr_music = new Audio('assets/audio/cyber_runner.mp3');
level_bgr_music.muted = false;
level_bgr_music.loop = true;
let boss_fight_music = new Audio('assets/audio/Boss_fight.mp3');
boss_fight_music.muted = false;
let victory_music = new Audio('assets/audio/victory_music.mp3');
victory_music.muted = false;
let fireworks_sound = new Audio('assets/audio/fireworks.mp3');
fireworks_sound.muted = false;
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


let female_character_animation_array = [
    'assets/sprites/character/player_female/run/run-1.png',
    'assets/sprites/character/player_female/run/run-2.png',
    'assets/sprites/character/player_female/run/run-3.png',
    'assets/sprites/character/player_female/run/run-4.png',
    'assets/sprites/character/player_female/run/run-5.png',
    'assets/sprites/character/player_female/run/run-6.png',
    'assets/sprites/character/player_female/run/run-7.png',
    'assets/sprites/character/player_female/run/run-8.png'
];


let male_character_animation_array = [
    'assets/sprites/character/player_male/Run/Run1.png',
    'assets/sprites/character/player_male/Run/Run2.png',
    'assets/sprites/character/player_male/Run/Run3.png',
    'assets/sprites/character/player_male/Run/Run4.png',
    'assets/sprites/character/player_male/Run/Run5.png',
    'assets/sprites/character/player_male/Run/Run6.png',
    'assets/sprites/character/player_male/Run/Run7.png',
    'assets/sprites/character/player_male/Run/Run8.png',
];


async function init() {
    await includeHTML();
    startFullscreenEvent();
    startSoundEvent();
    loadBackgroundMusic();
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


function selectCharacterEvent() {
    let animationIndex = 0;
    let animationInterval;

    animatecharacterSelectionFemale(animationIndex, animationInterval);
    animatecharacterSelectionMale(animationIndex, animationInterval);
}


function animatecharacterSelectionFemale(animationIndex, animationInterval) {
    let character_female = document.getElementById('female');
    document.getElementById('female').addEventListener('mouseover', function () {
        animationInterval = setInterval(function () {
            character_female.src = female_character_animation_array[animationIndex];
            animationIndex = (animationIndex + 1) % female_character_animation_array.length;
        }, 100); // change interval as needed
    });

    document.getElementById('female').addEventListener('mouseout', function () {
        clearInterval(animationInterval);
        character_female.src = 'assets/sprites/character/player_female/idle/idle-2.png';
    });
    character_female.addEventListener('click', function () { selectCharacter(0); });
}


function animatecharacterSelectionMale(animationIndex, animationInterval) {
    let character_male = document.getElementById('male');
    document.getElementById('male').addEventListener('mouseover', function () {
        animationInterval = setInterval(function () {
            character_male.src = male_character_animation_array[animationIndex];
            animationIndex = (animationIndex + 1) % male_character_animation_array.length;
        }, 100); // change interval as needed
    });

    document.getElementById('male').addEventListener('mouseout', function () {
        clearInterval(animationInterval);
        character_male.src = 'assets/sprites/character/player_male/Idle/Idle2.png';
    });
    character_male.addEventListener('click', function () { selectCharacter(1); });
}


function selectCharacter(selected_character) {
    if (selected_character === 0) {
        character_selected = 'female';
    }
    if (selected_character === 1) {
        character_selected = 'male';
    }
    loadGame();
}


function loadGame() {
    hideCharacterSelect();
    closeStartscreen();
    loadCanvas();
    pressMobileButtons();
    loadNavbar();
}


function loadCanvas() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    canvas_is_loaded = true;
    document.getElementById('canvas').classList.add('d-block');
    startMusicByGamestart();
    if (document.fullscreenElement) {
        hideHeader();
    }
}


function hideCharacterSelect() {
    document.getElementById('character-select').classList.add('d-none');
}


function loadNavbar() {
    document.getElementById('navbar').classList.remove('d-none');
}


function hideNavbar() {
    document.getElementById('navbar').classList.add('d-none');
}


function resetGame() {
    exit_Game = true;
    canvas = null;
    ctx = null;
    // Reset other game settings
    hideCanvas();
    hideNavbar();
    loadStartScreen();
    disableSound();
}



function loadCharacterSelect() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('character-select').classList.remove('d-none');
    selectCharacterEvent();
}


function loadSettings() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('settings').classList.remove('d-none');
}


function backToStartScreen(current_page) {
    document.getElementById(current_page).classList.add('d-none');
    loadStartScreen();
}


function loadCredits() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('credits').classList.remove('d-none');
}


function loadStartScreen() {
    document.getElementById('startscreen').classList.remove('d-none');
}


function closeStartscreen() {
    document.getElementById('startscreen').classList.add('d-none');
}


function disableAnimatedFullscreenBackground() {
    document.body.classList.remove('animated_background');
    document.getElementById('fullscreen').classList.add('static_background');
}


function enableAnimatedFullscreenBackground() {
    document.body.classList.add('animated_background');
    document.getElementById('fullscreen').classList.remove('static_background');
}


function hideHeader() {
    document.getElementById('header').classList.add('d-none');
}


function showHeader() {
    document.getElementById('header').classList.remove('d-none');
}


function hideCanvas() {
    document.getElementById('canvas').classList.remove('d-block');
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