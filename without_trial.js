/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и элементы, которые должны отсутствовать в возвращаемом массиве.

without([2, 1, 2, 3], 1, 2, 5);
// → [3]
*/

const without = (arr, ...rest) => {
    const filtered =  arr.filter(elem=>!rest.includes(elem));
    return filtered;
};
export default without;
