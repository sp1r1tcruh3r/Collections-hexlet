/*

difference.js

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход два множества и возвращает множество, составленное из таких элементов, которые есть в первом множестве, но нет во втором.

difference(new Set([2, 1]), new Set([2, 3]));
// → [1]

*/

// BEGIN (write your solution here)
const difference = (set1, set2) =>{
  let arr = Array.from(set1)
  const setdiff = arr.filter(elem => !set2.has(elem));
  const bullShitArrayToSet = new Set(setdiff);
  return bullShitArrayToSet;//compare array to set wtf lol
};
export default difference;
// END
