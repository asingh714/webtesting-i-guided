const { add } = require('./calculator.js');

// test away!
describe('calculator.js', () => {
  describe('calculator', () => {
    describe('add()', () => {
      // test case
      it('should add of 2 numbers', () => {
        // assertions
        expect(add(2, 2)).toBe(4);
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 2)).toBe(1);
        expect(add(0, 0)).toBe(0);
      });

      // should return the passed value, if only one value provided
      it('should return the passed value, if only one value provided', () => {
        expect(add(1)).toBe(1);
        expect(add(99)).toBe(99);
      });

      // should calculate the sum of any number of arguments separated by comma
      it('should calculate the sum of any number of arguments separated by comma', () => {
        expect(add(1, 2, 3)).toBe(6);
        expect(add(1, 2, 3, 4)).toBe(10);
      });

      // should handle an array of numbers
      it('should calculate the sum of any number of arguments in an array', () => {
        expect(add([1, 2, 3])).toBe(6);
        expect(add([1, 2, 3, 4])).toBe(10);
      });

      it.todo('passing strings');
      it.todo('not passing values');
      it.todo('passing null or undefined or objects or arrays or NaN');
    });
  });
});
