// --- FULLSCREEN EVENT ---
let canvas_is_loaded = false;


/**
 * Function to start the fullscreen event
 */
function startFullscreenEvent() {
    let menu_fullscreen_button = document.getElementById('menu_fullscreen_button_container');
    let fullscreen_btn = document.getElementById('fullscreen_button');
    menu_fullscreen_button.addEventListener('click', toggleFullScreen);
    fullscreen_btn.addEventListener('click', toggleFullScreen);
}


/**
 * Function to toggle the fullscreen mode
 */
function toggleFullScreen() {
    let fullscreen = document.getElementById('fullscreen');
    if (!document.fullscreenElement) {
        turnFullscreenOn(fullscreen);
    }
    else if (document.fullscreenElement) {
        turnFullscreenOff();
    }
    toggleHeader ();
    toggleAnimatedBackground();
}


/**
 * Function to turn the fullscreen mode on.
 * @param {string} fullscreen - The element to be set to fullscreen.
 */
function turnFullscreenOn(fullscreen) {
    enterFullscreen(fullscreen);
    isInFullscreen = true;
    loadFullscreenMenuButtonHTMLTemplate();
}


/**
 * Function to turn the fullscreen mode off.
 */
function turnFullscreenOff() {
    closeFullscreen();
    isInFullscreen = false;
    loadFullscreenMenuButtonHTMLTemplate();
}


/**
 * Sets the fullscreen button to ON or OFF depending on the current state of the fullscreen mode,
 * by loading the corresponding HTML template.
 */
function loadFullscreenMenuButtonHTMLTemplate() {
    if (isInFullscreen) {
        document.getElementById('settings_button_menu_fullscreen').innerHTML = ``;
        document.getElementById('settings_button_menu_fullscreen').innerHTML = `ON`;
    }
    else {
        document.getElementById('settings_button_menu_fullscreen').innerHTML = ``;
        document.getElementById('settings_button_menu_fullscreen').innerHTML = `OFF`;
    }
}


/**
 * Toggles the Src. of the Fullscreen icon in the menu settings and the navbar.
 */
function toggleFullscreenIcon() {
    if (isInFullscreen) {
        document.getElementById('menu_fullscreen_icon').src = 'assets/img/icons/expand.png';
        document.getElementById('fullscreen_button').src = 'assets/img/icons/expand.png';
    }
    else {
        document.getElementById('menu_fullscreen_icon').src = 'assets/img/icons/collapse.png';
        document.getElementById('fullscreen_button').src = 'assets/img/icons/collapse.png';
    }
}


/**
 * Function to enter fullscreen mode.
 * @param {string} element - The element to be set to fullscreen.
 */
function enterFullscreen(element) {
    document.getElementById('startscreen').classList.add('fullscreen_startscreen');
    document.getElementById('canvas').classList.add('fullscreen');
    toggleFullscreenIcon();

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        element.webkitRequestFullscreen();
    }
}


/**
 * Function to close fullscreen mode.
 * doesn't require a parameter for the fullscreen element, as it closes the fullscreen mode of the whole document.
 */
function closeFullscreen() {
    document.getElementById('startscreen').classList.remove('fullscreen_startscreen');
    document.getElementById('canvas').classList.remove('fullscreen');
    toggleFullscreenIcon();

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {      // for IE11 (remove June 15, 2022)
        document.msExitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
    }
}