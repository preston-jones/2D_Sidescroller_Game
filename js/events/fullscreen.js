// --- FULLSCREEN EVENT ---
let canvas_is_loaded = false;

function startFullscreenEvent() {
    let menu_fullscreen_button = document.getElementById('menu_fullscreen_button_container');
    let fullscreen_btn = document.getElementById('fullscreen_button');
    menu_fullscreen_button.addEventListener('click', toggleFullScreen);
    fullscreen_btn.addEventListener('click', toggleFullScreen);
}


function toggleFullScreen() {
    let fullscreen = document.getElementById('fullscreen');
    if (!document.fullscreenElement) {
        enterFullscreen(fullscreen);
        document.getElementById('settings_button_menu_fullscreen').innerHTML = ``;
        document.getElementById('settings_button_menu_fullscreen').innerHTML = `ON`;

        if (canvas_is_loaded) {
            hideHeader();
            disableAnimatedFullscreenBackground();
        }
    }
    else if (document.fullscreenElement) {
        disableAnimatedFullscreenBackground();
        closeFullscreen(fullscreen);
        document.getElementById('settings_button_menu_fullscreen').innerHTML = ``;
        document.getElementById('settings_button_menu_fullscreen').innerHTML = `OFF`;

        if (canvas_is_loaded) {
            showHeader();
            enableAnimatedFullscreenBackground();
        }
    }
}


function enterFullscreen(element) {
    document.getElementById('startscreen').classList.add('fullscreen_startscreen');
    document.getElementById('canvas').classList.add('fullscreen');
    document.getElementById('menu_fullscreen_icon').src = 'assets/img/icons/collapse.png';
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
    document.getElementById('menu_fullscreen_icon').src = 'assets/img/icons/expand.png';
    document.getElementById('fullscreen_button').src = 'assets/img/icons/expand.png';

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {      // for IE11 (remove June 15, 2022)
        document.msExitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
    }
}