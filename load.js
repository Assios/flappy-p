var load = {
    preload: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 260;
        this.scale.minHeight = 480;
        this.scale.maxWidth = 640;
        this.scale.maxHeight = 1136;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);

        game.stage.backgroundColor = '#1d1a4f';
        game.add.text(50, 100, "LOADING", { font: "80px Arial", fill: "#fff", align: "center" });
        game.load.image('sky', 'assets/sky.jpg');
        game.load.spritesheet('bird', 'assets/bird.png', 72, 64);
        game.load.image('obstacle', 'assets/obstacle.png');
        game.load.image('obstaclef', 'assets/obstacle_f.png');
        game.load.image('achievements', 'assets/achievements.jpg');
        game.load.image('menu', 'assets/bg_menu.jpg');
        game.load.audio('air', 'assets/air.mp3');
        game.load.audio('novelle', 'assets/novelle.mp3');
        game.load.audio('kink', 'assets/kink.mp3');

        game.load.audio('m1', 'assets/m1.mp3');
        game.load.audio('m2', 'assets/m2.mp3');
        game.load.audio('m3', 'assets/m3.mp3');
        game.load.audio('m4', 'assets/m4.mp3');
        game.load.audio('m5', 'assets/m5.mp3');
        game.load.audio('m6', 'assets/m6.mp3');
        game.load.audio('m7', 'assets/m7.mp3');
        game.load.audio('m8', 'assets/m8.mp3');
        game.load.audio('m9', 'assets/m9.mp3');
        game.load.audio('m10', 'assets/m10.mp3');
    },
    create: function () {
        this.game.state.start('menu')
    }
}
