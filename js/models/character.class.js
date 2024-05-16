/**
 * Character class is a class that extends from MovableObject class
 * and it is used to create the character object that is controlled by the player in the game.
 * 
 * @class Character
 * @extends MovableObject
 */
class Character extends MovableObject {
    width = 60;
    height = 50;
    x = 58;
    y = 75;
    offset_left = 15;
    offset_top = 10;
    offset_right = -30;
    offset_bottom = -10;
    speed = 2;
    health = 10;
    health_MAX = 10;
    energy = 10;
    energy_MAX = 10;
    character_Selection = character_selected;
    isInBattleArena = false;
    enteredBattleArena = false;
    isDeadCounter = true;
    world;
    playerShot = new Shot(this.IMAGES_PLAYER_SHOT, this.x, this.y);

    /* Arrays of the images paths for the animations of this object. */
    IMAGES_STAY = this.characterStay();
    characterStay() {
        if (this.character_Selection === 'female') {
            return [
                'assets/sprites/character/player_female/idle/idle-1.png',
                'assets/sprites/character/player_female/idle/idle-2.png',
                'assets/sprites/character/player_female/idle/idle-3.png',
                'assets/sprites/character/player_female/idle/idle-4.png'
            ];
        }
        if (this.character_Selection === 'male') {
            return [
                'assets/sprites/character/player_male/Idle/Idle1.png',
                'assets/sprites/character/player_male/Idle/Idle2.png',
                'assets/sprites/character/player_male/Idle/Idle3.png',
                'assets/sprites/character/player_male/Idle/Idle4.png'
            ];
        }
    }


    IMAGES_RUN = this.characterRun();
    characterRun() {
        if (this.character_Selection === 'female') {
            return [
                'assets/sprites/character/player_female/run/run-1.png',
                'assets/sprites/character/player_female/run/run-2.png',
                'assets/sprites/character/player_female/run/run-3.png',
                'assets/sprites/character/player_female/run/run-4.png',
                'assets/sprites/character/player_female/run/run-5.png',
                'assets/sprites/character/player_female/run/run-6.png',
                'assets/sprites/character/player_female/run/run-7.png',
                'assets/sprites/character/player_female/run/run-8.png'
            ];
        }
        if (this.character_Selection === 'male') {
            return [
                'assets/sprites/character/player_male/Run/Run1.png',
                'assets/sprites/character/player_male/Run/Run2.png',
                'assets/sprites/character/player_male/Run/Run3.png',
                'assets/sprites/character/player_male/Run/Run4.png',
                'assets/sprites/character/player_male/Run/Run5.png',
                'assets/sprites/character/player_male/Run/Run6.png',
                'assets/sprites/character/player_male/Run/Run7.png',
                'assets/sprites/character/player_male/Run/Run8.png',
            ];
        }
    }


    IMAGES_CROUCH = this.characterCrouch();
    characterCrouch() {
        if (this.character_Selection === 'female') {
            return [
                'assets/sprites/character/player_female/crouch/crouch.png'
            ];
        }
        if (this.character_Selection === 'male') {
            return [
                'assets/sprites/character/player_male/Duck/Duck1.png',
                'assets/sprites/character/player_male/Duck/Duck2.png',
                'assets/sprites/character/player_male/Duck/Duck3.png',
                'assets/sprites/character/player_male/Duck/Duck4.png',
            ];
        }
    }


    IMAGES_JUMP = this.characterJump();
    characterJump() {
        if (this.character_Selection === 'female') {
            return [
                'assets/sprites/character/player_female/jump/jump-1.png',
                'assets/sprites/character/player_female/jump/jump-2.png',
                'assets/sprites/character/player_female/jump/jump-3.png',
                'assets/sprites/character/player_female/jump/jump-4.png'
            ];
        }
        if (this.character_Selection === 'male') {
            return [
                'assets/sprites/character/player_male/Jump/Jump1.png',
                'assets/sprites/character/player_male/Jump/Jump2.png',
                'assets/sprites/character/player_male/Jump/Jump3.png',
                'assets/sprites/character/player_male/Jump/Jump4.png',
                'assets/sprites/character/player_male/Jump/Jump5.png',
                'assets/sprites/character/player_male/Jump/Jump6.png',
                'assets/sprites/character/player_male/Jump/Jump7.png',
            ];
        }
    }


    IMAGES_SHOOT = this.characterShoot();
    characterShoot() {
        if (this.character_Selection === 'female') {
            return [
                'assets/sprites/character/player_female/shoot/shoot.png'
            ];
        }
        if (this.character_Selection === 'male') {
            return [
                'assets/sprites/character/player_male/Shoot/Shoot1.png',
                'assets/sprites/character/player_male/Shoot/Shoot2.png',
                'assets/sprites/character/player_male/Shoot/Shoot3.png'
            ];
        }
    }


    IMAGES_RUN_SHOOT = this.characterRunShoot();
    characterRunShoot() {
        if (this.character_Selection === 'female') {
            return [
                'assets/sprites/character/player_female/run-shoot/run-shoot-1.png',
                'assets/sprites/character/player_female/run-shoot/run-shoot-2.png',
                'assets/sprites/character/player_female/run-shoot/run-shoot-3.png',
                'assets/sprites/character/player_female/run-shoot/run-shoot-4.png',
                'assets/sprites/character/player_female/run-shoot/run-shoot-5.png',
                'assets/sprites/character/player_female/run-shoot/run-shoot-6.png',
                'assets/sprites/character/player_female/run-shoot/run-shoot-7.png',
                'assets/sprites/character/player_female/run-shoot/run-shoot-8.png'
            ];
        }
        if (this.character_Selection === 'male') {
            return [
                'assets/sprites/character/player_male/Shoot/Shoot1.png',
                'assets/sprites/character/player_male/Shoot/Shoot2.png',
                'assets/sprites/character/player_male/Shoot/Shoot3.png'
            ];
        }
    }


    IMAGES_PLAYER_SHOT = [
        'assets/sprites/misc/shot/shot-1.png',
        'assets/sprites/misc/shot/shot-2.png',
        'assets/sprites/misc/shot/shot-3.png'
    ];
    IMAGES_SHOT_PLAYER_HIT = [
        'assets/sprites/misc/shot-hit/shot-hit-1.png',
        'assets/sprites/misc/shot-hit/shot-hit-2.png',
        'assets/sprites/misc/shot-hit/shot-hit-3.png'
    ];


    IMAGES_HURT = this.characterHurt();
    characterHurt() {
        if (this.character_Selection === 'female') {
            return [
                'assets/sprites/character/player_female/hurt/hurt-1.png',
                'assets/sprites/character/player_female/hurt/hurt-2.png',
                'assets/sprites/character/player_female/hurt/hurt-3.png',
                'assets/sprites/character/player_female/hurt/hurt-4.png',
                'assets/sprites/character/player_female/hurt/hurt-5.png',
            ];
        }
        if (this.character_Selection === 'male') {
            return [
                // 'assets/sprites/character/player_male/Hurt/Hurt1.png',
                'assets/sprites/character/player_male/Hurt/Hurt2.png',
                // 'assets/sprites/character/player_male/Hurt/Hurt3.png',
                // 'assets/sprites/character/player_male/Hurt/Hurt4.png',
                // 'assets/sprites/character/player_male/Hurt/Hurt5.png'
            ];
        }
    }


    IMAGES_DEAD = this.characterDead();
    characterDead() {
        if (this.character_Selection === 'female') {
            return [
                'assets/sprites/character/player_female/dead/dead-1.png',
                'assets/sprites/character/player_female/dead/dead-2.png',
                'assets/sprites/character/player_female/dead/dead-3.png',
                'assets/sprites/character/player_female/dead/dead-4.png',
                'assets/sprites/character/player_female/dead/dead-5.png',
                'assets/sprites/character/player_female/dead/dead-6.png',
                'assets/sprites/character/player_female/dead/dead-7.png',
                'assets/sprites/character/player_female/dead/dead-8.png',
                'assets/sprites/character/player_female/dead/dead-9.png',
                'assets/sprites/character/player_female/dead/dead-10.png'
            ];
        }
        if (this.character_Selection === 'male') {
            return [
                'assets/sprites/character/player_male/dead/dead-1.png',
                'assets/sprites/character/player_male/dead/dead-2.png',
                'assets/sprites/character/player_male/dead/dead-3.png',
                'assets/sprites/character/player_male/dead/dead-4.png',
                'assets/sprites/character/player_male/dead/dead-5.png',
                'assets/sprites/character/player_male/dead/dead-6.png',
                'assets/sprites/character/player_male/dead/dead-7.png',
                'assets/sprites/character/player_male/dead/dead-8.png',
                'assets/sprites/character/player_male/dead/dead-9.png',
                'assets/sprites/character/player_male/dead/dead-10.png',
            ];
        }
    }


    /**
     * The constructor of the Character class.
     */
    constructor() {
        super().loadImage(this.IMAGES_STAY[0]);
        this.loadImages(this.IMAGES_STAY);
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_CROUCH);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_SHOOT);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.moveCharacter();
    }


    
    /**
     * The function to move the character object.
     */
    moveCharacter() {
        setInterval(() => {
            this.moveCamera();

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.is_Dead && !this.is_Hurt) {
                this.moveToRight(1.7);
            }
            if (this.world.keyboard.LEFT && this.x > this.world.level.level_start_x && !this.is_Dead && !this.is_Hurt) {
                this.moveToLeft(1.7);
            }
            if (this.world.keyboard.SPACE && !this.is_Dead && !this.is_Hurt) {
                this.jump();
            }
            if (this.world.keyboard.DOWN && this.y > world.level.level_end_bottom_y && !this.is_Dead && !this.is_Hurt) {
                this.moveDown(this.speed);
            }
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation_STAY();
            this.playAnimation_DEAD();
            this.playAnimation_JUMP();
            this.playAnimation_DOWN();
        }, 150);
    }


    /**
     * Function to play the running animation of the character object.
     */
    playAnimation_RUN() {
        this.playAnimation(this.IMAGES_RUN);
    }


    /**
     * Function to play the jump animation of the character object.
     */
    playAnimation_JUMP() {
        if (this.world.keyboard.RIGHT && !this.is_Dead || this.world.keyboard.LEFT && !this.is_Dead && !this.is_Hurt) {
            if (this.world.keyboard.SPACE && this.y < world.level.level_end_bottom_y) {
                this.playAnimation(this.IMAGES_JUMP);
            }
            this.playAnimation_RUN();
        }
        if (this.world.keyboard.SPACE && this.y < world.level.level_end_bottom_y && !this.is_Dead && !this.is_Hurt) {
            this.playAnimation(this.IMAGES_JUMP);
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_JUMP);
            }
        }
    }


    /**
     * Function to play the crouch animation of the character object.
     */
    playAnimation_DOWN() {
        this.offset_top = 10;
        this.offset_bottom = -10;
        if (this.world.keyboard.DOWN && !this.is_Dead && !this.is_Hurt) {
            this.offset_top = 25;
            this.offset_bottom = -25;
            this.playAnimation(this.IMAGES_CROUCH);
        }
    }


    /**
     * Function to play the shoot animation of the character object.
     */
    playAnimation_SHOOT() {
        this.playAnimation(this.IMAGES_SHOOT);
        if (this.world.keyboard.C && this.world.keyboard.RIGHT || this.world.keyboard.C && this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_RUN_SHOOT);
        }
    }


    /**
     * Function to play the is hurt animation of the character object.
     */
    playAnimation_HURT() {
        hurt_sound.pause();
        if (!this.is_Dead) {
            hurt_sound.play();
            this.playAnimation(this.IMAGES_HURT);
        }
    }


    /**
     * Function to play the is dead animation of the character object.
     */
    playAnimation_DEAD() {
        if (this.is_Dead) {
            stopBossFightMusic();
            stopLevelBackgroundMusic();
            this.playAnimation(this.IMAGES_DEAD);
            showNewGameButton();
            if (this.isDeadCounter) {
                startGameOverSound();
                this.isDeadCounter = false;
            }
        }
    }


    /**
     * Function to play the stay/idle animation of the character object.
     */
    playAnimation_STAY() {
        this.playAnimation(this.IMAGES_STAY);
    }


    /**
     * Function to move the camera.
     */
    moveCamera() {
        if (this.x < 60) {
            this.world.camera_x = 0;
            this.world.camera_y = 0;
        }
        if (this.x >= 60 && this.x <= 1949 && !this.isInBattleArena) {
            this.world.camera_x = -this.x + 58;
            this.world.camera_y = 0;
        }
        if (this.x >= 60 && this.x >= 1949 && this.world.camera_x >= -1893) {
            this.world.camera_x = -1893;
            this.world.camera_y = 0;
            this.world.level.level_start_x = 1890;
        }
    }
}