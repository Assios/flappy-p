var menu = {

	create: function() {
		this.bgsky = game.add.sprite(0, 0, 'menu');
		this.game.add.text(20, 20, "SCORE: " + SCORE, { font: "35px Arial", fill: "#fff", align: "center" });

		SCORE = 0;
		//Lag meny her
	},

	update: function() {

		if (game.input.activePointer.isDown)
	    {
			this.game.state.start('play');		
	    }
	}
};
