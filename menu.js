var menu = {

	preload: function() {
		game.load.spritesheet('soundbtn', 'assets/soundbtn.png', 100, 100);
		game.load.spritesheet('playbtn', 'assets/play.png', 150, 150);
	},

	create: function() {
		
		this.bgsky = game.add.sprite(0, 0, 'menu');

		this.playbtn = game.add.button(20, 950, 'playbtn', this.play_game, this, 0, 1);

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


		//Lag meny her
	},

	update: function() {

		if (game.input.activePointer.isDown)
	    {
			//this.game.state.start('play');		
	    }
	},

	play_game: function() {
		this.game.state.start('play')
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
