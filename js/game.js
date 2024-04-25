let canvas;
let world;
let ctx;
let keyboard = new Keyboard();
let musicOff = false;
let isGameOver = false;
let isInFullscreen = false;
let soundMuted = true;
let mobileController = false
let HD_Rendering = false;
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
    startMobileControllerEvent();
    startHDRenderingEvent();
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
    initLevel1();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    canvas_is_loaded = true;
    document.getElementById('canvas').classList.add('d-block');
    startMusicByGamestart();
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
    canvas_is_loaded = false;
    // Stop all ongoing game loops or intervals
    clearAllIntervals();

    // Clear the canvas if it exists
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Reset game-related variables and states
    exit_Game = false;
    character = null;
    canvas = null;
    ctx = null;
    world = null;
    canvas_is_loaded = false;
    isGameOver = false;
    musicOff = false;
    soundMuted = true;
    mobileController = false;
    HD_Rendering = false;
    character_selected = null;
    level = null;

    // Stop all sounds
    level_bgr_music.pause();
    boss_fight_music.pause();
    victory_music.pause();
    fireworks_sound.pause();
    jump_sound.pause();
    shoot_sound.pause();
    hurt_sound.pause();
    death_sound.pause();
    explosion_sound.pause();
    collecting_sound.pause();
    game_over_sound.pause();

    // Reset other game settings
    hideCanvas();
    hideNavbar();
    loadStartScreen();
    disableSound();
}


function clearAllIntervals() {
    // location.reload(true);
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
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


function loadControl() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('control').classList.remove('d-none');
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