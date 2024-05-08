// --- HD RENDERING ---

/**
 * Function to start the HD rendering event.
 */
function startHDRenderingEvent() {
    let menu_rendering_button = document.getElementById('menu_HDrendering_button_container');
    let rendering_btn = document.getElementById('rendering_button');
    menu_rendering_button.addEventListener('click', toggleHDRenderingButton);
    rendering_btn.addEventListener('click', toggleHDRenderingButton);
}


/**
 * Function to toggle the HD rendering button.
 * Changes the icon src. of the rendering button in the menu settings and the navbar.
 * Adds the 'hd_rendering' class to the canvas element, using the css property 'image-rendering: pixelated'.
 * Sets the hd rendering button to ON or OFF, depending on the current state of the HD rendering mode
 * by loading the corresponding HTML template.
 */
function toggleHDRenderingButton() {
    if (!HD_Rendering) {
        document.getElementById('canvas').classList.add('hd_rendering');
        document.getElementById('rendering_button').src = 'assets/img/icons/hd_render_on.png';
        document.getElementById('menu_HDrendering_icon').src = 'assets/img/icons/hd_render_on.png';
        document.getElementById('settings_button_menu_HDrendering').innerHTML = ``;
        document.getElementById('settings_button_menu_HDrendering').innerHTML = `ON`;
        HD_Rendering = true;
    }
    else {
        document.getElementById('canvas').classList.remove('hd_rendering');
        document.getElementById('rendering_button').src = 'assets/img/icons/hd_render_off.png';
        document.getElementById('menu_HDrendering_icon').src = 'assets/img/icons/hd_render_off.png';
        document.getElementById('settings_button_menu_HDrendering').innerHTML = ``;
        document.getElementById('settings_button_menu_HDrendering').innerHTML = `OFF`;
        HD_Rendering = false;
    }
}