class Character extends MovableObject {

    width = 60;
    height = 50;
    x = 0;
    y = 10;
    speed = 2;
    health = 10;
    health_MAX = 10;
    energy = 10;
    energy_MAX = 10;
    character_Selection = 'male';


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


    IMAGES_WALK = this.characterWalk();
    characterWalk() {
        if (this.character_Selection === 'female') {
            return [
                'assets/sprites/character/player_female/walk/walk-1.png',
                'assets/sprites/character/player_female/walk/walk-2.png',
                'assets/sprites/character/player_female/walk/walk-3.png',
                'assets/sprites/character/player_female/walk/walk-4.png',
                'assets/sprites/character/player_female/walk/walk-5.png',
                'assets/sprites/character/player_female/walk/walk-6.png',
                'assets/sprites/character/player_female/walk/walk-7.png',
                'assets/sprites/character/player_female/walk/walk-8.png',
                'assets/sprites/character/player_female/walk/walk-9.png',
                'assets/sprites/character/player_female/walk/walk-10.png',
                'assets/sprites/character/player_female/walk/walk-11.png',
                'assets/sprites/character/player_female/walk/walk-12.png',
                'assets/sprites/character/player_female/walk/walk-13.png',
                'assets/sprites/character/player_female/walk/walk-14.png',
                'assets/sprites/character/player_female/walk/walk-15.png',
                'assets/sprites/character/player_female/walk/walk-16.png',
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


    playerShot = new Shot(this.IMAGES_PLAYER_SHOT, this.x, this.y);
    world;
    walk_sound = new Audio('assets/audio/walk.mp3');
    run_sound = new Audio('assets/audio/run.mp3');
    jump_sound = new Audio('assets/audio/jump.mp3');
    shoot_sound = new Audio('assets/audio/shoot.ogg');
    hurt_sound = new Audio('assets/audio/hurt.ogg');
    music_sound = new Audio('assets/audio/city_theme.mp3');
    constructor() {
        super().loadImage(this.IMAGES_STAY[0]);
        this.loadImages(this.IMAGES_STAY);
        this.loadImages(this.IMAGES_WALK);
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
        setInterval(() => {
            this.run_sound.pause();
            this.walk_sound.pause();
            this.moveCamera();

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.is_Dead && !this.is_Hurt) {
                if (!this.world.keyboard.SHIFTRIGHT || !this.world.keyboard.SHIFTLEFT) {
                    this.moveToRight(0.5);
                    this.walk_sound.play();
                    this.run_sound.pause();
                }
                if (this.world.keyboard.SHIFTRIGHT || this.world.keyboard.SHIFTLEFT) {
                    this.moveToRight(1.5);
                    this.run_sound.play();
                    this.walk_sound.pause();
                }
            }
            if (this.world.keyboard.LEFT && this.x > this.world.level.level_start_x && this.x > this.world.level.level_boss_arena_border_left_x && !this.is_Dead && !this.is_Hurt) {

                if (!this.world.keyboard.SHIFTRIGHT || !this.world.keyboard.SHIFTLEFT) {
                    this.moveToLeft(0.5);
                    this.walk_sound.play();
                    this.run_sound.pause();
                }
                if (this.world.keyboard.SHIFTRIGHT || this.world.keyboard.SHIFTLEFT) {
                    this.moveToLeft(1.5);
                    this.run_sound.play();
                    this.walk_sound.pause();
                }
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
            // this.playAnimation_HURT();
            this.playAnimation_JUMP();
            // this.playAnimation_SHOOT();
            this.playAnimation_DOWN();
            console.log(this.x);
        }, 150);
    }


    playAnimation_WALK() {
        if (!this.world.keyboard.SHIFTLEFT || !this.world.keyboard.SHIFTRIGHT) {
            this.playAnimation(this.IMAGES_WALK);
        }
    }


    playAnimation_RUN() {
        if (this.world.keyboard.SHIFTLEFT || this.world.keyboard.SHIFTRIGHT) {
            this.playAnimation(this.IMAGES_RUN);
        }
    }


    playAnimation_JUMP() {
        if (this.world.keyboard.RIGHT && !this.is_Dead || this.world.keyboard.LEFT && !this.is_Dead && !this.is_Hurt) {
            if (this.world.keyboard.SPACE && this.y < world.level.level_end_bottom_y) {
                this.playAnimation(this.IMAGES_JUMP);
            }
            this.playAnimation_WALK();

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
        if (this.world.keyboard.UP && !this.is_Dead || this.world.keyboard.DOWN && !this.is_Dead && !this.is_Hurt) {
            if (this.y > world.level.level_end_bottom_y) {
                this.playAnimation(this.IMAGES_CLIMB);
            }
            if (this.y <= world.level.level_end_bottom_y) {
                this.playAnimation(this.IMAGES_CROUCH);
            }
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
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
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
        if (this.x >= 60) {
            this.world.camera_x = -this.x + 58;
            this.world.camera_y = 0;
        }
        if (this.x >= 1950) {
            this.world.camera_x = -1893;
            this.world.camera_y = 0;
        }
        ///
        if (this.x >= 1960) {
            this.world.camera_x = -1903;
            this.world.camera_y = 0;
        }
    }



}