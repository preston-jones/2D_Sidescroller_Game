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

    IMAGES_STAY = [
        'assets/sprites/character/player_female/idle/idle-1.png',
        'assets/sprites/character/player_female/idle/idle-2.png',
        'assets/sprites/character/player_female/idle/idle-3.png',
        'assets/sprites/character/player_female/idle/idle-4.png'
    ];
    IMAGES_WALK = [
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
    IMAGES_RUN = [
        'assets/sprites/character/player_female/run/run-1.png',
        'assets/sprites/character/player_female/run/run-2.png',
        'assets/sprites/character/player_female/run/run-3.png',
        'assets/sprites/character/player_female/run/run-4.png',
        'assets/sprites/character/player_female/run/run-5.png',
        'assets/sprites/character/player_female/run/run-6.png',
        'assets/sprites/character/player_female/run/run-7.png',
        'assets/sprites/character/player_female/run/run-8.png'
    ];
    IMAGES_CLIMB = [
        'assets/sprites/character/player_female/climb/climb-1.png',
        'assets/sprites/character/player_female/climb/climb-2.png',
        'assets/sprites/character/player_female/climb/climb-3.png',
        'assets/sprites/character/player_female/climb/climb-4.png',
        'assets/sprites/character/player_female/climb/climb-5.png',
        'assets/sprites/character/player_female/climb/climb-6.png'
    ];
    IMAGES_CROUCH = [
        'assets/sprites/character/player_female/crouch/crouch.png'
    ];
    IMAGES_JUMP = [
        'assets/sprites/character/player_female/jump/jump-1.png',
        'assets/sprites/character/player_female/jump/jump-2.png',
        'assets/sprites/character/player_female/jump/jump-3.png',
        'assets/sprites/character/player_female/jump/jump-4.png'
    ];
    IMAGES_SHOOT = [
        'assets/sprites/character/player_female/shoot/shoot.png'
    ];
    IMAGES_RUN_SHOOT = [
        'assets/sprites/character/player_female/run-shoot/run-shoot-1.png',
        'assets/sprites/character/player_female/run-shoot/run-shoot-2.png',
        'assets/sprites/character/player_female/run-shoot/run-shoot-3.png',
        'assets/sprites/character/player_female/run-shoot/run-shoot-4.png',
        'assets/sprites/character/player_female/run-shoot/run-shoot-5.png',
        'assets/sprites/character/player_female/run-shoot/run-shoot-6.png',
        'assets/sprites/character/player_female/run-shoot/run-shoot-7.png',
        'assets/sprites/character/player_female/run-shoot/run-shoot-8.png'
    ];
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
    IMAGES_HURT = [
        'assets/sprites/character/player_female/hurt/hurt-1.png',
        'assets/sprites/character/player_female/hurt/hurt-2.png',
        'assets/sprites/character/player_female/hurt/hurt-3.png',
        'assets/sprites/character/player_female/hurt/hurt-4.png',
        'assets/sprites/character/player_female/hurt/hurt-5.png',
    ];
    IMAGES_DEAD = [
        'assets/sprites/character/player_female/dead/dead-1.png',
        'assets/sprites/character/player_female/dead/dead-2.png',
        'assets/sprites/character/player_female/dead/dead-3.png',
        'assets/sprites/character/player_female/dead/dead-4.png',
        'assets/sprites/character/player_female/dead/dead-5.png',
        'assets/sprites/character/player_female/dead/dead-6.png',
        'assets/sprites/character/player_female/dead/dead-7.png',
        'assets/sprites/character/player_female/dead/dead-8.png',
        'assets/sprites/character/player_female/dead/dead-9.png',
        'assets/sprites/character/player_female/dead/dead-10.png',
    ];
    playerShot = new Shot(this.IMAGES_PLAYER_SHOT, this.x, this.y);
    world;
    walk_sound = new Audio('assets/audio/walk.mp3');
    run_sound = new Audio('assets/audio/run.mp3');
    jump_sound = new Audio('assets/audio/jump.mp3');
    shoot_sound = new Audio('assets/audio/shoot.mp3');
    hurt_sound = new Audio('assets/audio/hurt.mp3');
    music_sound = new Audio('assets/audio/city_theme.mp3');
    constructor() {
        super().loadImage('assets/sprites/character/player_female/idle/idle-1.png');
        this.loadImages(this.IMAGES_STAY);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_CLIMB);
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
            if (this.world.keyboard.LEFT && this.x > this.world.level.level_start_x && !this.is_Dead && !this.is_Hurt) {

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
            if (this.world.keyboard.UP && this.y < 170 && !this.is_Dead && !this.is_Hurt) {
                this.moveUp(this.speed);
            }
            if (this.world.keyboard.DOWN && this.y > world.level.level_end_bottom_y && !this.is_Dead && !this.is_Hurt) {
                this.moveDown(this.speed);
            }
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation_STAY();
            this.playAnimation_DEAD();
            this.playAnimation_HURT()
            this.playAnimation_JUMP();
            this.playAnimation_SHOOT();
            this.playAnimation_DOWN();
        }, 130);
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
        if (this.world.keyboard.C && !this.is_Dead && !this.is_Hurt && this.energy > 0) {
            this.playAnimation(this.IMAGES_SHOOT);
            this.shoot_sound.play();
            if (this.world.keyboard.C && this.world.keyboard.RIGHT || this.world.keyboard.C && this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_RUN_SHOOT);
                this.shoot_sound.play();
            }
        }
    }


    playAnimation_HURT() {
        if (this.is_Hurt && !this.is_Dead) {
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
        if (this.x >= 950) {
            this.world.camera_x = -893;
            this.world.camera_y = 0;
        }
    }
    


}