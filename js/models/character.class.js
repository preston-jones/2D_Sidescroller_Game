class Character extends MovableObject {

    width = 60;
    height = 50;
    // x = 58;
    x = 1800;
    y = 10;
    offsetX = -20;
    offsetY = -15;
    speed = 2;
    health = 100;
    health_MAX = 10;
    energy = 10;
    energy_MAX = 10;
    character_Selection = 'female';
    isInBattleArena = false;
    isDeadCounter = true;


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


    world;
    playerShot = new Shot(this.IMAGES_PLAYER_SHOT, this.x, this.y);
    jump_sound = new Audio('assets/audio/jump.mp3');
    shoot_sound = new Audio('assets/audio/shoot.ogg');
    hurt_sound = new Audio('assets/audio/hurt.ogg');
    death_sound = new Audio('assets/audio/death.mp3');
    music_sound = new Audio('assets/audio/city_theme_2.mp3');
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
        this.animateCharacter();
    }


    animateCharacter() {
        console.log('character: ' + this.offsetY);
        setInterval(() => {
            if (!this.musicOff && !this.is_Dead && !this.isInBattleArena) {
                this.music_sound.play();
            }
            else {
                this.music_sound.pause();
            }
            this.moveCamera();

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.is_Dead && !this.is_Hurt) {
                this.moveToRight(1.5);
            }
            if (this.world.keyboard.LEFT && this.x > this.world.level.level_start_x && !this.is_Dead && !this.is_Hurt) {
                this.moveToLeft(1.5);
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


    playAnimation_RUN() {
        this.playAnimation(this.IMAGES_RUN);
    }


    playAnimation_JUMP() {
        if (this.world.keyboard.RIGHT && !this.is_Dead || this.world.keyboard.LEFT && !this.is_Dead && !this.is_Hurt) {
            if (this.world.keyboard.SPACE && this.y < world.level.level_end_bottom_y) {
                this.playAnimation(this.IMAGES_JUMP);
            }
            this.playAnimation_RUN();
        }
        if (this.world.keyboard.SPACE && this.y < world.level.level_end_bottom_y && !this.is_Dead && !this.is_Hurt) {
            this.jump_sound.play();
            this.playAnimation(this.IMAGES_JUMP);
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_JUMP);
            }
        }
    }


    playAnimation_DOWN() {
        this.offsetY = 0;
        if (this.world.keyboard.DOWN && !this.is_Dead && !this.is_Hurt) {
            this.offsetY = 20;
            this.playAnimation(this.IMAGES_CROUCH);
        }
    }


    playAnimation_SHOOT() {
        this.playAnimation(this.IMAGES_SHOOT);
        this.shoot_sound.play();
        if (this.world.keyboard.C && this.world.keyboard.RIGHT || this.world.keyboard.C && this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_RUN_SHOOT);
            this.shoot_sound.play();
        }
    }


    playAnimation_HURT() {
        this.hurt_sound.pause();
        if (!this.is_Dead) {
            this.hurt_sound.play();
            this.playAnimation(this.IMAGES_HURT);
        }
    }


    playAnimation_DEAD() {
        let index = world.level.enemies.findIndex(enemy => enemy instanceof BossEnemy); // MERKEN und LERNEN!!!
        if (this.is_Dead) {
            this.world.level.enemies[index].boss_fight.pause();
            this.playAnimation(this.IMAGES_DEAD);
            if (this.isDeadCounter) {
                this.death_sound.play();
                this.isDeadCounter = false;
            }
        }
    }


    playAnimation_STAY() {
        this.playAnimation(this.IMAGES_STAY);
    }


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