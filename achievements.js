var achievements = {

	preload: function() {
		game.load.spritesheet('ach_hardcore', 'assets/ach_hardcore.png', 220, 180);
		game.load.spritesheet('ach_69', 'assets/ach_69.png', 220, 180);
		game.load.spritesheet('ach_100', 'assets/ach_100.png', 220, 180);
		game.load.spritesheet('hc_30', 'assets/hc_30.png', 220, 180);
		game.load.spritesheet('ach_bdsm', 'assets/ach_bdsm.png', 220, 180);
		game.load.spritesheet('ach_noob', 'assets/ach_noob.png', 220, 180);
		game.load.spritesheet('ach_poster', 'assets/ach_poster.png', 220, 180);
		game.load.spritesheet('ach_secret', 'assets/ach_secret.png', 220, 180);
		game.load.spritesheet('backmenu', 'assets/backmenu.png', 200, 100);

	},

	create: function() {

			game.add.sprite(0, 0, 'achievements');

			this.game.add.text(60, 1050, "To be continued...", { 
							font: "35px Arial", 
							fill: "#000", 
							align: "center"});

			A_POINTS = 0;

			//ACHIEVEMENTS

			//hardcore
			this.ach_hardcore = game.add.sprite(30, 180, 'ach_hardcore');
			if (BEST < 60)
				this.ach_hardcore.alpha = 0.3;
			else
				A_POINTS += 50;

			//69
			this.ach_69 = game.add.sprite(380, 180, 'ach_69');
			if (!(BEST > 68))
				this.ach_69.alpha = 0.3;
			else
				A_POINTS += 50;

			//100
			this.ach_100 = game.add.sprite(30, 840, 'ach_100');
			if (BEST < 100)
				this.ach_100.alpha = 0.3;
			else
				A_POINTS += 100;

			//HC30
			this.hc_30 = game.add.sprite(30, 400, 'hc_30');
			if (HC30==0)
				this.hc_30.alpha = 0.3;
			else
				A_POINTS += 100;

			//BDSM
			this.ach_bdsm = game.add.sprite(30, 620, 'ach_bdsm');
			if (TOTAL < 10000)
				this.ach_bdsm.alpha = 0.3;
			else
				A_POINTS += 300;

			//noob
			this.ach_noob = game.add.sprite(380, 400, 'ach_noob');
			if (BEST < 20)
				this.ach_noob.alpha = 0.3;
			else
				A_POINTS += 20;	

			this.ach_secret = game.add.sprite(380, 840, 'ach_secret');
			this.ach_secret.alpha = 0.3;

			//poster
			this.ach_poster = game.add.sprite(380, 620, 'ach_poster');
			if (POSTER==0)
				this.ach_poster.alpha = 0.3;
			else
				A_POINTS += 300;

			this.ppxoints = this.game.add.text(20, 85, "Achievement points: " + A_POINTS, { 
				font: "35px Arial", 
				fill: "#fff", 
				align: "center"});

			this.ppxoints.angle = -1;

			this.backmenu = game.add.button(400, 1000, 'backmenu', this.goto_menu, this);

		},

	goto_menu: function() {
		game.state.start('menu');
	}
};
