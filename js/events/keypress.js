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
 * Function to toggle the HD mobile controller button.
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
 * @param {object} e - The event object
 */
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
        console.log(e);
        e.preventDefault();
        keyboard.C = true;
    });
    document.getElementById('shoot').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.C = false;
    });
}