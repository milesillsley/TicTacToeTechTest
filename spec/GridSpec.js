(function() {
  describe('Grid', function() {
    it('populates a blank 2 dimensional array', function() {
      grid = new Grid(1);
      expect(grid).toEqual([['']]);
      grid2 = new Grid(2);
      expect(grid2).toEqual([['',''],
                          ['','']]);
      grid3 = new Grid(3);
      expect(grid3).toEqual([['','',''],
                          ['','',''],
                          ['','','']]);
    });
  });
}());
