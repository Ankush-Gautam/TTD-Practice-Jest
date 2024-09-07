const reverseString = require('./reverse');

test('Reverse the string', () => {
  expect(reverseString('odin')).toBe('nido');
});
