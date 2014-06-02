var menu = {

	preload: function() {
		game.load.spritesheet('soundbtn', 'assets/soundbtn.png', 100, 100);
		game.load.spritesheet('playbtn', 'assets/play.png', 150, 150);
		game.load.spritesheet('hardcoreb', 'assets/hardcore.png', 150, 150);
		game.load.spritesheet('bdsm', 'assets/bdsm.png', 150, 150);
	},

	create: function() {

		//read bestcookie
		BEST = parseInt(this.readCookie("bestcookie"))

		if (isNaN(BEST))
			BEST = 0;

		//read totalcookie

		TOTAL = parseInt(this.readCookie("totalcookie"));

		if (isNaN(TOTAL))
			TOTAL = 0;
		
		this.bgsky = game.add.sprite(0, 0, 'menu');

		this.playbtn = game.add.button(20, 950, 'playbtn', this.play_game, this, 0, 1);

		if (BEST > 59)
			game.add.button(150, 950, 'hardcoreb', this.play_hardcore, this, 0, 1);
		else
			game.add.button(150, 950, 'hardcoreb', this.not_yet, this, 0, 1);

		if (TOTAL > 9999)
			game.add.button(290, 950, 'bdsm', this.play_bdsm, this, 0, 1);
		else
			game.add.button(290, 950, 'bdsm', this.not_yet2, this, 0, 1);


		this.button = game.add.button(500, 1000, 'soundbtn', this.toggle, this);
		if (SOUND == 1)
			this.button.frame = 1;
		else
			this.button.frame = 0;

		this.game.add.text(20, 20, "LAST: " + LAST, { font: "35px Arial", fill: "#fff", align: "center" });

		this.game.add.text(210, 90, "TOTAL: " + TOTAL, { font: "35px Arial", fill: "#fff", align: "center" });

        this.besttext = this.game.add.text(420, 20, "BEST: " + BEST, {
            font: "35px Arial",
            fill: "#fff",
            align: "center"
        });
	},

	play_game: function() {
		HARDCORE = 0;
		BDSM = 0;
		this.game.state.start('play');
	},

	play_hardcore: function() {
		HARDCORE = 1;
		BDSM = 0;
		this.game.state.start('play');
	},

	play_bdsm: function() {
		HARDCORE = 0;
		BDSM = 1;
		this.game.state.start('play');
	},

	not_yet: function() {
		this.game.add.text(20, 800, "You need 60 points to unlock hardcore mode", {
            font: "28px Arial",
            fill: "#000",
            align: "center"
        });
	},

	not_yet2: function() {
		this.game.add.text(10, 850, "You need 10K total points to unlock bdsm mode", {
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
	},

	readCookie: function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
};
