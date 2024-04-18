// --- SOUND EVENT ---
function loadBackgroundMusic() {
    document.body.addEventListener('click', function() {
        level_bgr_music.play();
        level_bgr_music.muted = true;
        soundMuted = true;
    }, { once: true });
}


function startSoundEvent() {
    let menu_audio_button = document.getElementById('menu_audio_icon_container');
    let audio_btn = document.getElementById('audio_button');
    menu_audio_button.addEventListener('click', toggleSound);
    audio_btn.addEventListener('click', toggleSound);
}


function playBackgroundMusic() {
    soundMuted = false;
    level_bgr_music.play();
}


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


function disableSound() {
    level_bgr_music.muted = true;
    jump_sound.muted = true;
    shoot_sound.muted = true;
    hurt_sound.muted = true;
    death_sound.muted = true;
    explosion_sound.muted = true;
    game_over_sound.muted = true;
    boss_fight_music.muted = true;
    collecting_sound.muted = true;
    fireworks_sound.muted = true;
    victory_music.muted = true;
    soundMuted = true;
}


function enableSound() {
    level_bgr_music.muted = false;
    jump_sound.muted = false;
    shoot_sound.muted = false;
    hurt_sound.muted = false;
    death_sound.muted = false;
    explosion_sound.muted = false;
    game_over_sound.muted = false;
    boss_fight_music.muted = false;
    collecting_sound.muted = false;
    fireworks_sound.muted = false;
    victory_music.muted = false;
    soundMuted = false;
}