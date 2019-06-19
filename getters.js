/*

Enumerable.js

    Реализуйте метод toArray, возвращающий массив обработанных элементов коллекции. Мемоизируйте этот массив во внутреннем свойстве memo.

    const coll = new Enumerable([1, 2, 3, 4, 5, 6]);
    const filteredColl = coll.where(n => n > 3);

    // В этот момент запускаются отложенные операции и результат возвращается.
    filteredColl.toArray(); // [4, 5, 6]

    // Повторный запуск извлекает массив из `memo`. Вычисления больше не производятся.
    filteredColl.toArray(); // [4, 5, 6]

    Реализуйте свойство length, которое возвращает количество элементов в коллекции. Так как для вычисления её длины, нужно получить результирующий массив (применив все отложенные операции), логично реализовать это свойство как getter, который вызывает внутри себя toArray.

    const coll = new Enumerable([1, 2, 3, 4, 5, 6]);
    filteredColl = coll.where(n => n > 3);

    // В этот момент запускаются отложенные операции и результат возвращается.
    filteredColl.length; // 3

    // Так как toArray мемоизирован, то повторный вызов не приводит к вычислениям, массив берется из memo
    filteredColl.length; // 3

*/

select(fn) {
  return this.build(coll => coll.map(fn));
}

orderBy(fn, direction = 'asc') {
  const comparator = (a, b) => {
    const a1 = fn(a);
    const b1 = fn(b);

    const compareResult = direction === 'asc' ? 1 : -1;

    if (a1 > b1) {
      return compareResult;
    }

    if (a1 < b1) {
      return -compareResult;
    }

    return 0;
  };
  return this.build(coll => coll.sort(comparator));
}

where(fn) {
  return this.build(coll => coll.filter(fn));
}

// BEGIN (write your solution here)
toArray() {
  if (!this.memo) {
    this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
  }
  return this.memo.slice();
}

get length() {
  return this.toArray().length;
}
// END
}

export default Enumerable;
