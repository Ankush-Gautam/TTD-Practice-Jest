function ceasarCipher(string, shiftFactor) {
  const array = string.split('');

  const symbols = [
    ' ',
    '.',
    ',',
    '"',
    '?',
    '|',
    '\\',
    '/',
    '*',
    '!',
    '~',
    '#',
    '$',
    '@',
    '%',
    '^',
    '&',
    ')',
    '(',
    '+',
    '-',
    '=',
    '_',
    '{',
    '}',
  ];

  //converting to ascii value
  const cipherArray = array.map((letter) => {
    //safeguarding to wrap xyz to abc instead to real ascii to {|}
    if (letter === 'x') return 'a';
    if (letter === 'y') return 'b';
    if (letter === 'z') return 'c';

    //don't change symbols
    if (symbols.includes(letter)) return letter;

    const cipherAscii = letter.charCodeAt(0) + shiftFactor; //65 + 3
    return String.fromCharCode(cipherAscii);
  });

  return cipherArray.join(''); //converting to string
}

module.exports = ceasarCipher;
