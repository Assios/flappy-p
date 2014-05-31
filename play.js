var play = {
    create: function () {

        this.sky = game.add.sprite(0, 0, 'sky');

        this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.powerade = game.add.group();
        this.powerade.createMultiple(5, 'powerade');
        this.powerade.setAll('checkWorldBounds', true);
        this.powerade.setAll('outOfBoundsKill', true);
        this.powerade.enableBody = true;
        this.powerade.scale.setTo(1.27, 1.27);
        this.poweradef = game.add.group();
        this.poweradef.createMultiple(5, 'poweradef');
        this.poweradef.setAll('checkWorldBounds', true);
        this.poweradef.setAll('outOfBoundsKill', true);
        this.poweradef.enableBody = true;
        this.poweradef.scale.setTo(1.27, 1.27);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.player = this.game.add.sprite(W / 2, H / 2 - 100, 'bird');
        this.player.scale.setTo(2.5, 2.5);
        this.player.animations.add('go', [0, 1, 2, 3, 4, 5], 10, true);
        this.player.animations.play('go');
        game.physics.arcade.enable(this.player);
        game.physics.arcade.enable(this.powerade);
        game.physics.arcade.enable(this.poweradef);
        this.player.anchor.setTo(0.5, 0.5);
        this.score = 0;
        this.scoretext = this.game.add.text(20, 20, "SCORE: 0", {
            font: "35px Arial",
            fill: "#000",
            align: "center"
        });
        this.besttext = this.game.add.text(420, 20, "BEST: " + BEST, {
            font: "35px Arial",
            fill: "#000",
            align: "center"
        });
        this.player.body.setSize(40, 30, 0, 0);
        this.player.body.gravity.y = 1600;
        this.timer = this.game.time.events.loop(1800, this.add_p, this);
        this.game.time.events.loop(1800, this.updateScore, this);

    },
    update: function () {
        if (this.player.angle < 20) this.player.angle += 1;
        game.input.onDown.add(this.jump, this);
        this.space.onDown.add(this.jump, this);
        if (this.player.inWorld == false) this.restart();
        game.physics.arcade.collide(this.player, this.powerade, 0, this.restart, this);
        game.physics.arcade.collide(this.player, this.poweradef, 0, this.restart, this)
    },
    render: function () {
        game.debug.body(this.powerade)
    },
    jump: function () {
        this.player.body.velocity.y = -600;
        tweenz = this.game.add.tween(this.player);
        tweenz.to({
            angle: -20
        }, 100);
        tweenz.start();
        if ((Math.floor(Math.random() * 2) + 1) == 1) {
            //this.ah.play()
        } else {
            //this.mhm.play()
        }
    },
    restart: function () {
        game.state.start('menu');
    },
    add_p: function () {
        var power = this.powerade.getFirstDead();
        var power2 = this.poweradef.getFirstDead();
        power.body.setSize(169, 581, 50, 90);
        power2.body.setSize(169, 581, 50, 40);
        var random = Math.floor(Math.random() * 400) - 200;
        power.reset(W, DEFAULT_UP + random);
        power2.reset(W, DEFAULT_DOWN + random);
        power.body.velocity.x = -250;
        power2.body.velocity.x = -250
    },
    updateScore: function () {
        this.score += 1;
        if (this.score > BEST) {
            BEST = this.score
        }
        this.scoretext.text = "SCORE: " + this.score;
        this.besttext.text = "BEST: " + BEST
    },
}