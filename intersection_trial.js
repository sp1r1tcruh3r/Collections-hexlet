/*
Реализуйте и экспортируйте функцию по умолчанию, которая находит пересечение двух массивов. Пересечение двух массивов A и B — это массив только с теми элементами A и B, которые одновременно принадлежат обоим массивам, без дублей.

Обратите внимание, что порядок значений в пересечении должен соответствовать порядку появления этих значений в исходных массивах (сначала в первом переданном массиве, потом - во втором).

intersection([2, 1], [2, 3]);
// → [2]

intersection([3, 1, 3], [3, 3, 2]);
// → [3]

intersection(
      ['kirill', 'rakhim', 'alex', 'dima', 'dzhamshut'],
      ['ippolit', 'rakhim', 'dima', 'schtirlitz', 'kirill', 'alex', 'alibaba'],
    );
// → ['kirill', 'rakhim', 'alex', 'dima']
*/

const intersection = (arr1, arr2) => {
    const same =  arr1.filter(elem=>arr2.includes(elem)).concat([])
    return [...new Set(same)]
}
export default intersection;
