// --- HD RENDERING ---


/**
 * Function to show the character selection page
 */
function startHDRenderingEvent() {
    let menu_rendering_button = document.getElementById('menu_HDrendering_button_container');
    let rendering_btn = document.getElementById('rendering_button');
    menu_rendering_button.addEventListener('click', toggleHDRenderingEvent);
    rendering_btn.addEventListener('click', toggleHDRenderingEvent);
}


function toggleHDRenderingEvent() {
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