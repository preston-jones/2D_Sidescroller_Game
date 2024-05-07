/**
 * Function to show the character selection page
 */
function showCharacterSelectPage() {
    document.getElementById('story').classList.add('d-none');
    document.getElementById('character-select').classList.remove('d-none');
    characterAnimation();
}


/**
 * Loads the character animation of the character selection page
 */
function characterAnimation() {
    let animationIndex = 0;
    let animationInterval;

    animateFemaleCharacter(animationIndex, animationInterval);
    animateMaleCharacter(animationIndex, animationInterval);
}


/**
 * Function to animate the Female character of the character selection page
 * @param {string} animationIndex - Index of the animation array
 * @param {number} animationInterval - Variable to store the animation interval. Returns the interval ID which can be used to clear the interval
 */
function animateFemaleCharacter(animationIndex, animationInterval) {
    let character_female = document.getElementById('female');
    document.getElementById('female').addEventListener('mouseover', function () {
        animationInterval = setInterval(function () {
            character_female.src = female_character_animation_array[animationIndex];
            animationIndex = (animationIndex + 1) % female_character_animation_array.length;
        }, 100); // change interval as needed
    });

    document.getElementById('female').addEventListener('mouseout', function () {
        clearInterval(animationInterval);
        character_female.src = 'assets/sprites/character/player_female/idle/idle-2.png';
    });
}


/**
 * Function to animate the Male character of the character selection page
 * @param {string} animationIndex - Index of the animation array
 * @param {number} animationInterval - Variable to store the animation interval. Returns the interval ID which can be used to clear the interval
 */
function animateMaleCharacter(animationIndex, animationInterval) {
    let character_male = document.getElementById('male');
    document.getElementById('male').addEventListener('mouseover', function () {
        animationInterval = setInterval(function () {
            character_male.src = male_character_animation_array[animationIndex];
            animationIndex = (animationIndex + 1) % male_character_animation_array.length;
        }, 100); // change interval as needed
    });

    document.getElementById('male').addEventListener('mouseout', function () {
        clearInterval(animationInterval);
        character_male.src = 'assets/sprites/character/player_male/Idle/Idle2.png';
    });
}


/**
 * Function to animate the Female character of the character selection page
 * @param {number} selected_character - Index of the selected character || 0 = female 1 = male
 */
function selectCharacter(selected_character) {
    if (selected_character === 0) {
        character_selected = 'female';
    }
    if (selected_character === 1) {
        character_selected = 'male';
    }
    hideCharacterSelect();
    loadGame();
}