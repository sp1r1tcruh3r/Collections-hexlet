/*
findIndexOfNearest.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив чисел и искомое число. Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.

Если в массиве содержится несколько чисел, одновременно являющихся ближайшими к искомому числу, то возвращается наименьший из индексов ближайших чисел.
Примеры

findIndexOfNearest([], 2);              // null
findIndexOfNearest([15, 10, 3, 4], 0);  // 2
findIndexOfNearest([7, 5, 3, 2], 4);    // 1
findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2
*/
// BEGIN (write your solution here)
const findIndexOfNearest = (arr, goal) => {
  if (arr.length===0) return null;
  const nearest = arr.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
  return arr.indexOf(nearest);
};
export default findIndexOfNearest;
//END
