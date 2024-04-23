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
        e.preventDefault();
        keyboard.C = true;
    });
    document.getElementById('shoot').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.C = false;
    });

}