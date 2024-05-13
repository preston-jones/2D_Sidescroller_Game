// --- SOUND EVENT ---

// Game sounds
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


/**
 * Function to start the sound event for the audio button.
 */
function startBackgroundMusic() {
    document.body.addEventListener('click', function () {
        level_bgr_music.play();
        level_bgr_music.muted = true;
        soundMuted = true;
    }, { once: true });
}


/**
 * Starts the background music and the game sounds when the game starts.
 */
function startSoundByGamestart() {
    level_bgr_music.currentTime = 0;
    level_bgr_music.play();
    soundMuted = true;
    toggleSound();
}


/**
 * Starts the click event for the toggleSound() function.
 */
function startSoundEvent() {
    let menu_audio_button = document.getElementById('menu_audio_icon_container');
    let audio_btn = document.getElementById('audio_button');
    menu_audio_button.addEventListener('click', toggleSound);
    audio_btn.addEventListener('click', toggleSound);
}


/**
 * Function to toggle the sound button.
 * Changes the icon src. of the sound button in the menu settings and the navbar.
 * Sets the sound button to ON or OFF, depending on the current state of the sound mode
 * by loading the corresponding HTML template.
 */
function toggleSound() {
    if (soundMuted) {
        document.getElementById('menu_audio_icon').src = 'assets/img/icons/audio_on.png';
        document.getElementById('audio_button').src = 'assets/img/icons/audio_on.png';
        document.getElementById('settings_button_menu_audio').innerHTML = ``;
        document.getElementById('settings_button_menu_audio').innerHTML = `ON`;
        enableSound();
    }
    else {
        document.getElementById('menu_audio_icon').src = 'assets/img/icons/audio_off.png';
        document.getElementById('audio_button').src = 'assets/img/icons/audio_off.png';
        document.getElementById('settings_button_menu_audio').innerHTML = ``;
        document.getElementById('settings_button_menu_audio').innerHTML = `OFF`;
        disableSound();
    }
}


/**
 * Disables all sounds of the game.
 */
function disableSound() {
    level_bgr_music.muted = true;
    jump_sound.muted = true;
    shoot_sound.muted = true;
    hurt_sound.muted = true;
    gameover_sound.muted = true;
    explosion_sound.muted = true;
    game_over_music.muted = true;
    boss_fight_music.muted = true;
    collecting_sound.muted = true;
    fireworks_sound.muted = true;
    victory_music.muted = true;
    soundMuted = true;
}


/**
 * Enables all sounds of the game.
 */
function enableSound() {
    level_bgr_music.muted = false;
    jump_sound.muted = false;
    shoot_sound.muted = false;
    hurt_sound.muted = false;
    gameover_sound.muted = false;
    explosion_sound.muted = false;
    game_over_music.muted = false;
    boss_fight_music.muted = false;
    collecting_sound.muted = false;
    fireworks_sound.muted = false;
    victory_music.muted = false;
    soundMuted = false;
}