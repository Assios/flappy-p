var load = {
    preload: function () {
        game.stage.backgroundColor = '#1d1a4f';
        game.load.image('sky', 'assets/sky.jpg');
        game.load.spritesheet('bird', 'assets/bird.png', 72, 64);
        game.load.image('powerade', 'assets/powerade.png');
        game.load.image('poweradef', 'assets/powerade_f.png');
        game.load.image('menu', 'assets/bg_menu.jpg');
    },
    create: function () {
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
        this.game.state.start('menu')
    }
}