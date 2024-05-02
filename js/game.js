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

// ASSETS FOR CHARACTER-SELECTION PAGE
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
    startBackgroundMusic();
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
    // hideCharacterSelect();
    // closeStartscreen();
    hideStoryPage();
    closeStartscreen();
    initLevel1();
    initCanvas();

    startSoundByGamestart();
    pressMobileButtons();
    showNavbar();
    toggleAnimatedBackground();
    toggleHeader();
}


function initCanvas() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    canvas_is_loaded = true;
}


function enableFadeInAnimation(element) {
    document.getElementById(element).classList.add('fade_in');
}


function disableFadeInAnimation(element) {
    document.getElementById(element).classList.remove('fade_in');
}


function enableFadeOutAnimation(element) {
    document.getElementById(element).classList.add('fade_out');
}


function disableFadeOutAnimation(element) {
    document.getElementById(element).classList.remove('fade_out');
}


function hideCharacterSelect() {
    document.getElementById('character-select').classList.add('d-none');
}


function showNavbar() {
    document.getElementById('navbar').classList.remove('d-none');
}


function hideNavbar() {
    document.getElementById('navbar').classList.add('d-none');
}


function showStoryPage() {
    enableFadeInAnimation('story');
    document.getElementById('story').classList.remove('d-none');
}


function hideStoryPage() {
    // disableFadeOutAnimation('story');
    enableFadeOutAnimation('story')
    document.getElementById('story').classList.add('d-none');
    showCanvas();
}


function exitGame() {
    exit_Game = true;
    canvas_is_loaded = false;
    resetGame();
}


function resetGame() {
    clearAllIntervals();
    disableFadeInAnimation('canvas');
    clearCanvas();
    resetGameVariables();
    stopAllSound();
    hideCanvas();
    hideNavbar();
    showStartScreen();
    disableSound();
    toggleAnimatedBackground();
    toggleHeader();
}


function clearCanvas() {
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}


function resetGameVariables() {
    exit_Game = false;
    world.character = null;
    world.level = null;
    world.canvas = null;
    world.ctx = null;
    canvas_is_loaded = false;
    isGameOver = false;
    musicOff = false;
    soundMuted = true;
    mobileController = false;
    HD_Rendering = false;
    character_selected = null;
}


function stopAllSound() {
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
}

// SHOW AND HIDE PAGES OF THE MAIN MENU
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


function showSettingsPage() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('settings').classList.remove('d-none');
}


function showHowtoplayPage() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('how-to-play').classList.remove('d-none');
}


function backToStartScreen(current_page) {
    document.getElementById(current_page).classList.add('d-none');
    showStartScreen();
}


function showCreditsPage() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('credits').classList.remove('d-none');
}


function showStartScreen() {
    document.getElementById('startscreen').classList.remove('d-none');
}


function closeStartscreen() {
    document.getElementById('startscreen').classList.add('d-none');
}


function disableAnimatedFullscreenBackground() {
    document.body.classList.remove('animated_background');
    document.getElementById('fullscreen').classList.remove('animated_background');
    document.getElementById('fullscreen').classList.add('static_background');
}


function enableAnimatedFullscreenBackground() {
    document.body.classList.add('animated_background');
    document.getElementById('fullscreen').classList.remove('static_background');
    if (isInFullscreen) {
        document.getElementById('fullscreen').classList.add('animated_background');
    }
}


function toggleAnimatedBackground() {
    if (canvas_is_loaded && isInFullscreen) {
        disableAnimatedFullscreenBackground();
        console.log('animated Bgr OFF');
    }
    else {
        enableAnimatedFullscreenBackground();
        console.log('animated Bgr ON');
    }
}


function toggleHeader() {
    if (canvas_is_loaded && isInFullscreen || canvas_is_loaded && window.innerHeight < 420) {
        hideHeader();
    }
    else {
        showHeader();
    }
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


function showCanvas() {
    document.getElementById('canvas').classList.add('d-block');
    enableFadeInAnimation('canvas');
}