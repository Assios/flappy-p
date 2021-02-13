var play = {
    create: function () {
        if (SOUND) {
            if (!BDSM) {
            this.air = this.game.add.audio('air');
            this.air.volume = 1.6;
            this.air.play();
        }
            this.novelle = this.game.add.audio('novelle');
            this.novelle.stop();
            if (HARDCORE) {
                this.novelle.volume = 2.0;
                this.novelle.play();
            }
        if (BDSM) {
            this.kink = this.game.add.audio('kink');
            this.kink.play();  
        }
        }

        this.sky = game.add.sprite(0, 0, 'sky');

        if (HARDCORE) {
            this.game.add.text(60, 400, "HARDCORE", {
                font: "60px Arial",
                fill: "#752d27",
                align: "center"
            });
        }

        if (SOUND) {
        this.m1 = this.game.add.audio('m1');
        this.m2 = this.game.add.audio('m2');
        this.m3 = this.game.add.audio('m3');
        this.m4 = this.game.add.audio('m4');
        this.m5 = this.game.add.audio('m5');
        this.m6 = this.game.add.audio('m6');
        this.m7 = this.game.add.audio('m7');
        this.m8 = this.game.add.audio('m8');
        this.m9 = this.game.add.audio('m9');
        this.m10 = this.game.add.audio('m10');
        this.m1.volume = 0.3;
        this.m2.volume = 0.3;
        this.m3.volume = 0.3;
        this.m4.volume = 0.3;
        this.m5.volume = 0.3;
        this.m6.volume = 0.3;
        this.m7.volume = 0.3;
        this.m8.volume = 0.3;
        this.m9.volume = 0.3;
        this.m10.volume = 0.3;
        }
        this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.obstacle = game.add.group();
        this.obstacle.createMultiple(5, 'obstacle');
        this.obstacle.setAll('checkWorldBounds', true);
        this.obstacle.setAll('outOfBoundsKill', true);
        this.obstacle.enableBody = true;
        this.obstacle.scale.setTo(1.27, 1.27);
        this.obstaclef = game.add.group();
        this.obstaclef.createMultiple(5, 'obstaclef');
        this.obstaclef.setAll('checkWorldBounds', true);
        this.obstaclef.setAll('outOfBoundsKill', true);
        this.obstaclef.enableBody = true;
        this.obstaclef.scale.setTo(1.27, 1.27);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.player = this.game.add.sprite(W / 2, H / 2 - 100, 'bird');
        this.player.scale.setTo(2.5, 2.5);
        this.player.animations.add('go', [0, 1, 2, 3, 4, 5], 10, true);
        this.player.animations.play('go');
        game.physics.arcade.enable(this.player);
        game.physics.arcade.enable(this.obstacle);
        game.physics.arcade.enable(this.obstaclef);
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
        this.player.body.setSize(32, 34, 10, 10);
        this.player.body.gravity.y = 1600;
        this.timer = this.game.time.events.loop(1800, this.add_p, this);
        this.game.time.events.loop(1800, this.updateScore, this);

    },
    update: function () {
        if (this.player.angle < 20) this.player.angle += 1;
        game.input.onDown.add(this.jump, this);
        this.space.onDown.add(this.jump, this);
        if (this.player.inWorld == false) this.restart();
        game.physics.arcade.collide(this.player, this.obstacle, 0, this.restart, this);
        game.physics.arcade.collide(this.player, this.obstaclef, 0, this.restart, this);

        if (HARDCORE) {
            this.player.body.position.y += Math.cos(Date.now()) * (this.score/3);
        }

        if (BDSM) {
            if (this.score > 29)
                POSTER = 1;
                document.cookie = 'postercookie='+POSTER+'; expires=Fri, 1 Aug 2030 20:47:11 UTC; path=/';
        }
    },

    jump: function () {
        this.player.body.velocity.y = -600;
        tweenz = this.game.add.tween(this.player);
        tweenz.to({
            angle: -20
        }, 100);
        tweenz.start();

        if (SOUND)
            this.randomSound();
    },
    restart: function () {

        TOTAL = TOTAL += SCORE;

        document.cookie = 'totalcookie='+TOTAL+'; expires=Fri, 1 Aug 2030 20:47:11 UTC; path=/';

        if (SCORE >= BEST) {
            document.cookie = 'bestcookie='+BEST+'; expires=Fri, 1 Aug 2030 20:47:11 UTC; path=/';
        }
        LAST = SCORE;
        if (SOUND)
            if (!BDSM)
                this.air.stop();
            if (HARDCORE)
                if (SCORE > 29)
                    document.cookie = 'hccookie=1; expires=Fri, 1 Aug 2030 20:47:11 UTC; path=/';
                this.novelle.stop();
            if (BDSM)
                this.kink.stop();
        game.state.start('menu');
    },
    add_p: function () {
        this.obst = this.obstacle.getFirstDead();
        this.obst2 = this.obstaclef.getFirstDead();
        this.obst.body.setSize(139, 581, 35, 115);
        this.obst2.body.setSize(139, 600, 35, 20);
        var random = Math.floor(Math.random() * 400) - 200;
        this.obst.reset(W, DEFAULT_UP + random);
        this.obst2.reset(W, DEFAULT_DOWN + random);
        this.obst.body.velocity.x = -250;
        this.obst2.body.velocity.x = -250;

        if (BDSM) {
            if ((Math.floor(Math.random() * 2) + 1) == 1)
                rr = 80;
            else
                rr = -80;
            this.obst.body.velocity.y = rr;
            this.obst2.body.velocity.y = rr;
        }
    },
    updateScore: function () {
        if (HARDCORE)
            this.score += 3;
        else
            this.score += 1;
        SCORE = this.score;
        if (this.score > BEST) {
            BEST = this.score
        }
        this.scoretext.text = "SCORE: " + SCORE;
        this.besttext.text = "BEST: " + BEST
    },
    randomSound: function() {
        switch(Math.floor((Math.random() * 10) + 1)) {
            case 1:
                this.m1.play();
                break;
            case 2:
                this.m2.play();
                break;
            case 3:
                this.m3.play();
                break;
            case 4:
                this.m4.play();
                break;
            case 5:
                this.m5.play();
                break;
            case 6:
                this.m6.play();
                break;
            case 7:
                this.m7.play();
            case 8:
                this.m8.play();
            case 9:
                this.m9.play();
            case 10:
                this.m10.play();
        }
    }
}
