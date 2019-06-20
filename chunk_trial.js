/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число, которое задает размер чанка (куска). Функция должна вернуть массив, состоящий из чанков указанной размерности.

chunk(['a', 'b', 'c', 'd'], 2);
// → [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// → [['a', 'b', 'c'], ['d']]
*/

const chunk = (arr, len) => {

  let chunks = [];
      let i = 0;
      let n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}

/* UCHITEL
export default (coll, size) => {
  const iter = (iterColl, acc = []) => {
    if (iterColl.length === 0) {
      return acc;
    }
    return iter(
      iterColl.slice(size),
      [...acc, iterColl.slice(0, size)],
    );
  };

  return iter(coll);
};
*/
