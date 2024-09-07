const calculator = require('./calculator');

test('Add function test', () => {
  expect(calculator.add(2, 5)).toBe(7);
});

test('sub function test', () => {
  expect(calculator.subtract(2, 5)).toBe(-3);
});

test('mul function test', () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});

test('divide function test', () => {
  expect(calculator.divide(112, 4)).toBe(28);
});
