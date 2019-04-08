const { add } = require("./calculator.js");

// test away!

// test cases 
it("should add 2 numbers", () => {
  expect(add(2, 2)).toBe(4);
  expect(add(1, 3)).toBe(4);
  expect(add(-1, 2)).toBe(1);
  expect(add(0, 0)).toBe(0);
});

it("should return the passed value, if only one value provided", () => {
  expect(add(5)).toBe(5);
  expect(add(99)).toBe(99);
});

it("should calculate the sum of any number of arguments seperated by comma", () => {
  expect(add(2, 2, 2)).toBe(6);
  expect(add(3, 4, 5, 6)).toBe(18);
})

it("should handle an array of numbers", () => {
  expect(add([2, 2, 2,])).toBe(6);
  expect(add([3, 4, 5, 6])).toBe(18);
})

it.todo("passing strings");
it.todo("not passing values");
it.todo("passing null or undefined or objects or array or NaN")


function honest() {
  return true;
}

test("an honest function should always tell the truth", () => {
  expect(honest).toBeTruthy();
});

// const sum = add(2, 2);

// test case
// test("adds 2 and 2", function() {
//   // Arrange
//   const expected = 4;
//   const value1 = 2;
//   const value2 = 2;

//   // Act
//   const sum = add(value1, value2);

//   // Assert
//   expected(sum).toEqual(expected);
// });
