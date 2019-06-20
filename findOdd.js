const findOdd = (arr) => {
  const numbers = arr.reduce((acc, item) => {
    if (acc.has(item)) {
      const newValue = acc.get(item) + 1;
      return acc.set(item, newValue);
    }
    return acc.set(item, 1);
  }, new Map());
  const answer = Array.from(numbers.keys()).filter(item => numbers.get(item) % 2 > 0);
  return answer[0];
};
/* Find a value in array that encounters an odd amount of times */
