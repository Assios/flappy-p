var W = 640;
var H = 1136;
var SPEED = 400;
var SCORE = 0;
var BEST = 0;
var DEFAULT_UP = -275;
var DEFAULT_DOWN = 550;

var game = new Phaser.Game(W, H, Phaser.AUTO, 'game', null, false, false);

game.state.add('load', load);
game.state.add('menu', menu);
game.state.add('play', play);

game.state.start('load');
