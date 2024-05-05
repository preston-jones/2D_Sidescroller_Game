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
let gameover_sound = new Audio('assets/audio/gameover.mp3');
gameover_sound.muted = false;
let explosion_sound = new Audio('assets/audio/explosion.mp3');
explosion_sound.muted = false;
let collecting_sound = new Audio('assets/audio/collecting.mp3');
collecting_sound.muted = false;
let game_over_music = new Audio('assets/audio/gameover_music.mp3');
game_over_music.muted = false;

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


/**
 * Initialize the game
 */
async function init() {
    await includeHTML();
    startFullscreenEvent();
    startSoundEvent();
    startMobileControllerEvent();
    startHDRenderingEvent();
    startBackgroundMusic();
}


/**
 * Include HTML templates
 */
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


/**
 * Load the game
 */
function loadGame() {
    hideStoryPage();
    hideStartscreen();
    initLevel1();
    initCanvas();
    startSoundByGamestart();
    pressMobileButtons();
    showNavbar();
    toggleAnimatedBackground();
    toggleHeader();
}


/**
 * Initialize canvas & game world
 */
function initCanvas() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    canvas_is_loaded = true;
}


/**
 * 
 * @param {string} element - The element to be animated
 */
function enableFadeInAnimation(element) {
    document.getElementById(element).classList.add('fade_in');
}


/**
 * 
 * @param {string} element - The element to be unanimated
 */
function disableFadeInAnimation(element) {
    document.getElementById(element).classList.remove('fade_in');
}


/**
 * enable fade out animation
 * @param {string} element - The element to be animated
 */
function enableFadeOutAnimation(element) {
    document.getElementById(element).classList.add('fade_out');
}


/**
 * disable fade out animation
 * @param {string} element - The element to be unanimated
 */
function disableFadeOutAnimation(element) {
    document.getElementById(element).classList.remove('fade_out');
}


/**
 * hide the character selection page
 */
function hideCharacterSelect() {
    document.getElementById('character-select').classList.add('d-none');
}


/**
 * show the navigation bar
 */
function showNavbar() {
    document.getElementById('navbar').classList.remove('d-none');
}


/**
 * hide the navigation bar
 */
function hideNavbar() {
    document.getElementById('navbar').classList.add('d-none');
}


/**
 * show story page
 */
function showStoryPage() {
    hideStartscreen();
    document.getElementById('story').classList.remove('d-none');
}


/**
 * hide story page
 */
function hideStoryPage() {
    // disableFadeOutAnimation('story');
    document.getElementById('story').classList.add('d-none');
    showCanvas();
}


/**
 * exit the game
 */
function exitGame() {
    exit_Game = true;
    canvas_is_loaded = false;
    resetGame();
}


/**
 * reset the game
 */
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


/**
 * clear the canvas
 */
function clearCanvas() {
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}


/**
 * reset the game variables
 */
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


/**
 * stop all sound by pause
 */
function stopAllSound() {
    level_bgr_music.pause();
    boss_fight_music.pause();
    victory_music.pause();
    fireworks_sound.pause();
    jump_sound.pause();
    shoot_sound.pause();
    hurt_sound.pause();
    gameover_sound.pause();
    explosion_sound.pause();
    collecting_sound.pause();
    game_over_music.pause();
}


/**
 * clear all intervals of the game
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


/**
 * show settings page
 */
function showSettingsPage() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('settings').classList.remove('d-none');
}

/**
 * show how to play page
 */
function showHowtoplayPage() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('how-to-play').classList.remove('d-none');
}


/**
 * 
 * @param {string} current_page - The current page to be hidden
 */
function backToStartScreen(current_page) {
    document.getElementById(current_page).classList.add('d-none');
    showStartScreen();
}


/**
 * show credits page
 */
function showCreditsPage() {
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('credits').classList.remove('d-none');
}


/**
 * show start screen
 */
function showStartScreen() {
    document.getElementById('startscreen').classList.remove('d-none');
}


/**
 * hide start screen
 */
function hideStartscreen() {
    document.getElementById('startscreen').classList.add('d-none');
}


/**
 * disable the animated background
 */
function disableAnimatedFullscreenBackground() {
    document.body.classList.remove('animated_background');
    document.getElementById('fullscreen').classList.remove('animated_background');
    document.getElementById('fullscreen').classList.add('static_background');
}


/**
 * enable the animated background
 */
function enableAnimatedFullscreenBackground() {
    document.body.classList.add('animated_background');
    document.getElementById('fullscreen').classList.remove('static_background');
    if (isInFullscreen) {
        document.getElementById('fullscreen').classList.add('animated_background');
    }
}


/**
 * toggle the animated background
 */
function toggleAnimatedBackground() {
    if (canvas_is_loaded && isInFullscreen) {
        disableAnimatedFullscreenBackground();
    }
    else {
        enableAnimatedFullscreenBackground();
    }
}


/**
 * toggle visibility of the page header
 */
function toggleHeader() {
    if (canvas_is_loaded && isInFullscreen || canvas_is_loaded && window.innerHeight < 420) {
        hideHeader();
    }
    else {
        showHeader();
    }
}


/**
 * hide the page header
 */
function hideHeader() {
    document.getElementById('header').classList.add('d-none');
}


/**
 * show the page header
 */
function showHeader() {
    document.getElementById('header').classList.remove('d-none');
}


/**
 * hide the canvas
 */
function hideCanvas() {
    document.getElementById('canvas').classList.remove('d-block');
}


/**
 * show the canvas
 */
function showCanvas() {
    document.getElementById('canvas').classList.add('d-block');
    enableFadeInAnimation('canvas');
}