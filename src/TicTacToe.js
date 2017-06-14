'use strict';

var TicTacToe = function(gameSize) {
  this._grid = new Grid(gameSize);
  this._currentPlayer = 'X';
};
TicTacToe.prototype.move = function(x,y) {
  if (this._grid[x][y] === '') {
    this._grid[x][y] = this.getCurrentPlayer();
    this.endTurn();
  } else {
    throw 'Field already occupied, please choose another';
  }
};
TicTacToe.prototype.getPos = function(x,y) {
  return this._grid[x][y];
};
TicTacToe.prototype.getCurrentPlayer = function() {
  return this._currentPlayer;
};
TicTacToe.prototype.endTurn = function() {
  this.switchPlayer();
};
TicTacToe.prototype.switchPlayer = function() {
  this._currentPlayer === 'X' ? this._currentPlayer = 'O' : this._currentPlayer = 'X';
};
