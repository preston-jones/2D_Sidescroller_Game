// --- NEW GAME BUTTON ---

function newGameButtonHover() {
    document.getElementById('newgame_button').addEventListener('mouseover', function() {
        this.src = 'assets/img/icons/newGame_Button.png';
        // this.src = 'assets/img/icons/newGame_Button_reversed.png';
    });
    
    document.getElementById('newgame_button').addEventListener('mouseout', function() {
        this.src = 'assets/img/icons/newGame_Button_reversed.png';
        // this.src = 'assets/img/icons/newGame_Button.png';
    });
}


function newGameButtonAddFullscreenClass() {
    document.getElementById('newgame_button_inner_container').classList.remove('newgame_button_inner_container_fullscreen_off');
    document.getElementById('newgame_button_inner_container').classList.add('newgame_button_inner_container_fullscreen_on');
    document.getElementById('newgame_button').classList.remove('newgame_button_fullscreen_off');
    document.getElementById('newgame_button').classList.add('newgame_button_fullscreen_on');
}


function newGameButtonRemoveFullscreenClass() {
    document.getElementById('newgame_button_inner_container').classList.add('newgame_button_inner_container_fullscreen_off');
    document.getElementById('newgame_button_inner_container').classList.remove('newgame_button_inner_container_fullscreen_on');
    document.getElementById('newgame_button').classList.add('newgame_button_fullscreen_off');
    document.getElementById('newgame_button').classList.remove('newgame_button_fullscreen_on');
}


function hideNewGameButton() {
    document.getElementById('newgame_button_container').classList.remove('d-flex');
    document.getElementById('newgame_button_container').classList.add('d-none');
}


function showNewGameButton() {
    document.getElementById('newgame_button_container').classList.remove('d-none');
    document.getElementById('newgame_button_container').classList.add('d-flex');
}