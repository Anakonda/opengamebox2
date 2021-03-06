import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'

export default class Game extends Phaser.Game {
  constructor (store) {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    super(width, height, Phaser.AUTO, 'content', null);

    this.store = store;

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Game', GameState, false);

    this.state.start('Boot');
  }
}
