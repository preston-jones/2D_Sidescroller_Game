// --- KEYPRESS EVENT ---

/**
 * Function to show the character selection page
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


function startMobileControllerEvent() {
    let menu_controller_button = document.getElementById('menu_control_mode_icon_container');
    let controller_btn = document.getElementById('controller_button');
    menu_controller_button.addEventListener('click', toggleMobileController);
    controller_btn.addEventListener('click', toggleMobileController);
}


function toggleMobileController() {
    if (!mobileController) {
        document.getElementById('gamepad_overlay').classList.add('showMobileController');
        document.getElementById('controller_button').src = 'assets/img/icons/keyboard.png';

        document.getElementById('menu_control_icon').src = 'assets/img/icons/controller_mobile.png';
        document.getElementById('settings_button_menu_control_mode').innerHTML = ``;
        document.getElementById('settings_button_menu_control_mode').innerHTML = `GAMEPAD`;

        mobileController = true;
    }
    else {
        document.getElementById('gamepad_overlay').classList.remove('showMobileController');
        document.getElementById('controller_button').src = 'assets/img/icons/controller_mobile.png';

        document.getElementById('menu_control_icon').src = 'assets/img/icons/keyboard.png';
        document.getElementById('settings_button_menu_control_mode').innerHTML = ``;
        document.getElementById('settings_button_menu_control_mode').innerHTML = `KEYBOARD`;

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
        console.log(e);
        e.preventDefault();
        keyboard.C = true;
    });
    document.getElementById('shoot').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.C = false;
    });

}