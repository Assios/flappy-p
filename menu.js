var menu = {

	preload: function() {
		game.load.spritesheet('soundbtn', 'assets/soundbtn.png', 100, 100);
		game.load.spritesheet('playbtn', 'assets/play.png', 150, 150);
		game.load.spritesheet('hardcoreb', 'assets/hardcore.png', 150, 150);
	},

	create: function() {
		
		this.bgsky = game.add.sprite(0, 0, 'menu');

		this.playbtn = game.add.button(20, 950, 'playbtn', this.play_game, this, 0, 1);

		if (BEST > 59)
			game.add.button(150, 950, 'hardcoreb', this.play_hardcore, this, 0, 1);
		else
			game.add.button(150, 950, 'hardcoreb', this.not_yet, this, 0, 1);

		this.button = game.add.button(500, 1000, 'soundbtn', this.toggle, this);
		if (SOUND == 1)
			this.button.frame = 1;
		else
			this.button.frame = 0;

		this.game.add.text(20, 20, "LAST: " + LAST, { font: "35px Arial", fill: "#fff", align: "center" });

        this.besttext = this.game.add.text(420, 20, "BEST: " + BEST, {
            font: "35px Arial",
            fill: "#fff",
            align: "center"
        });

	},

	play_game: function() {
		ḦARDCORE = 0;
		this.game.state.start('play');
	},

	play_hardcore: function() {
		HARDCORE = 1;
		this.game.state.start('play');
	},

	not_yet: function() {
		this.game.add.text(20, 800, "You need 60 points to unlock hardcore mode", {
            font: "28px Arial",
            fill: "#000",
            align: "center"
        });
	},

	toggle: function() {
		
		if (this.button.frame == 0) {
			this.button.frame = 1;
			SOUND = 1;
		}
		else {
			this.button.frame = 0;
			SOUND = 0;
		}
	}
};
