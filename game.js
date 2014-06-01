var W = 640;
var H = 1136;
var SPEED = 400;
var SCORE = 0;
var BEST = 0;
var LAST = 0;
var DEFAULT_UP = -235;
var DEFAULT_DOWN = 540;
var SOUND = 1;

var game = new Phaser.Game(W, H, Phaser.AUTO, 'game', null, false, false);

game.state.add('load', load);
game.state.add('menu', menu);
game.state.add('play', play);

game.state.start('load');
