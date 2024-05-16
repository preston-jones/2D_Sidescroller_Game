// --- KEYPRESS EVENT ---

/**
 * Function to start the keydown event for the keyboard.
 * @param {object} e - The event object
 */
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
    if (e.code == "ArrowUp") {
        keyboard.UP = true;
    }
    if (e.code == "Space") {
        keyboard.SPACE = true;
    }
    if (e.code == "KeyC") {
        keyboard.C = true;
        world.shoot();
    }
    if (e.code == "Enter") {
        keyboard.ENTER = true;
    }
});


/**
 * Function to start the keyup event for the keyboard.
 * @param {object} e - The event object
 */
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
    if (e.code == "ArrowUp") {
        keyboard.UP = false;
    }
    if (e.code == "Space") {
        keyboard.SPACE = false;
    }
    if (e.code == "KeyC") {
        keyboard.C = false;
        world.shotFired = false;
    }
    if (e.code == "Enter") {
        keyboard.ENTER = false;
    }
});


/**
 * Function to start the click event for the toggleMobileControllerButton() function.
 */
function startMobileControllerEvent() {
    let menu_controller_button = document.getElementById('menu_control_mode_icon_container');
    let controller_btn = document.getElementById('controller_button');
    menu_controller_button.addEventListener('click', toggleMobileControllerButton);
    controller_btn.addEventListener('click', toggleMobileControllerButton);
}


/**
 * Function to toggle the mobile controller button.
 * Changes the icon src. of the mobile controller button in the menu settings and the navbar.
 * Adds the 'show_mobile_controller' class to the mobile_controller_overlay element.
 * Sets the control mode button to MOBILE CONTROLLER or KEYBOARD, depending on the current state of the mobile controller mode
 * by loading the corresponding HTML template.
 */
function toggleMobileControllerButton() {
    if (!mobileController) {
        document.getElementById('mobile_controller_overlay').classList.add('show_mobile_controller');
        document.getElementById('controller_button').src = 'assets/img/icons/keyboard.png';

        document.getElementById('menu_control_icon').src = 'assets/img/icons/controller_mobile.png';
        document.getElementById('settings_button_menu_control_mode').innerHTML = ``;
        document.getElementById('settings_button_menu_control_mode').innerHTML = `MOBILE CONTROLLER`;

        mobileController = true;
    }
    else {
        document.getElementById('mobile_controller_overlay').classList.remove('show_mobile_controller');
        document.getElementById('controller_button').src = 'assets/img/icons/controller_mobile.png'; /*change controller_mobile.png into mobile_controller*/

        document.getElementById('menu_control_icon').src = 'assets/img/icons/keyboard.png';
        document.getElementById('settings_button_menu_control_mode').innerHTML = ``;
        document.getElementById('settings_button_menu_control_mode').innerHTML = `KEYBOARD`;

        mobileController = false;
    }
}


/**
 * Function to start the touchstart and touchend event for the mobile controller buttons.
 * The mobile controller works with the touch and mouse events.
 * @param {object} e - The event object
 */
function pressMobileButtons() {
    const buttons = ['arrow_left', 'arrow_right', 'arrow_down', 'arrow_up', 'jump', 'shoot'];
    const actions = {
        'arrow_left': { down: () => keyboard.LEFT = true, up: () => keyboard.LEFT = false },
        'arrow_right': { down: () => keyboard.RIGHT = true, up: () => keyboard.RIGHT = false },
        'arrow_down': { down: () => keyboard.DOWN = true, up: () => keyboard.DOWN = false },
        'arrow_up': { down: () => keyboard.SPACE = true, up: () => keyboard.SPACE = false },
        'jump': { down: () => keyboard.SPACE = true, up: () => keyboard.SPACE = false },
        'shoot': { down: () => { keyboard.C = true; world.shoot(); }, up: () => { keyboard.C = false; world.shotFired = false; } }
    };

    buttons.forEach(button => {
        const element = document.getElementById(button);
        element.addEventListener('touchstart', (e) => {
            e.preventDefault();
            actions[button].down();
        });
        element.addEventListener('touchend', (e) => {
            e.preventDefault();
            actions[button].up();
        });
        element.addEventListener('mousedown', (e) => {
            e.preventDefault();
            actions[button].down();
        });
        element.addEventListener('mouseup', (e) => {
            e.preventDefault();
            actions[button].up();
        });
    });
}