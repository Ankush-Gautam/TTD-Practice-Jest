const analyzeArray = require('./analyzeArray');

const object1 = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

test('analyze the array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual(object1);
});

const object2 = {
  average: 45.2,
  min: 22,
  max: 83,
  length: 5,
};

test('analyze the array', () => {
  expect(analyzeArray([44, 83, 32, 45, 22])).toStrictEqual(object2);
});
