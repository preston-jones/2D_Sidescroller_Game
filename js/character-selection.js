function showCharacterSelectPage() {
    document.getElementById('story').classList.add('d-none');
    document.getElementById('character-select').classList.remove('d-none');
    characterAnimation();
}


function characterAnimation() {
    let animationIndex = 0;
    let animationInterval;

    animateFemaleCharacter(animationIndex, animationInterval);
    animateMaleCharacter(animationIndex, animationInterval);
}


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