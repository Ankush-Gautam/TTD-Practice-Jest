function analyzeArray(array) {
  const sortedArray = array.sort();
  const sum = array.reduce((cur, sum) => cur + sum, 0);

  const length = array.length;
  const average = sum / length;

  const min = sortedArray[0]; //first
  const max = sortedArray[length - 1];

  return { average, min, max, length };
}

module.exports = analyzeArray;
