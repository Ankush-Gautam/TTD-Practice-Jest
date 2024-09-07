const ceasarCipher = require('./ceasarCipher');

test('Cipher the string', () => {
  expect(ceasarCipher('ankush', 5)).toBe('fspzxm');
});

test('Cipher the string', () => {
  expect(ceasarCipher('xyz', 3)).toBe('abc');
});

test('Cipher the string', () => {
  expect(ceasarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Cipher the string', () => {
  expect(ceasarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Cipher the string', () => {
  expect(ceasarCipher('ankush', 5)).toBe('fspzxm');
});
