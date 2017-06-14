(function() {
  'use strict';

  describe('TicTacToe', function() {

    var game;

    beforeEach(function() {
      game = new TicTacToe();
    });

    describe('the first turn',function() {
      it('X can claim a field on a grid',function() {
        game.move(0,0);
        expect(game.getPos(0,0)).toBe('X');
      });
    });

    describe('the second turn',function() {
      beforeEach(function() {
        game.move(0,0);
      });
      it('O can claim a field on a grid',function() {
        game.move(1,0);
        expect(game.getPos(1,0)).toBe('O');
      });
    });
  });
}());
