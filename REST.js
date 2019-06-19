/*
Enumerable.js

Реализуйте метод where, основываясь на следующем интерфейсе:

Функция может принимать любое количество параметров, каждый из которых может быть либо функцией, либо объектом. Для функций должна осуществляться простая фильтрация, для объектов нужно проверять соответствие элемента коллекции значениям по тем же ключам, что и в переданном объекте.

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];
coll = new Enumerable(cars);

const result = coll
  .where(car => car.brand === 'kia')
  .where(car => car.year > 2011);

result.toArray();
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]

const result2 = coll.where({ brand: 'bmw' });
result2.toArray();
// [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
// ]

const result3 = coll.where({ brand: 'kia', model: 'sorento' });
result3.toArray();
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

const result3 = coll.where({ brand: 'kia' }, {  model: 'sorento' });
result3.toArray();
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

const result4 = coll.where({ brand: 'kia' }, car => car.year < 2013);
result4.toArray();
// [
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]

Подсказки

    Извлечь ключи из объекта можно функцией Object.keys.
    Проверка на функцию: typeof <value> === 'function'.
    Метод every проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции. Подробнее в документации.
*/
/* УЧЫТЭЛ
where(...predicates) {
    const fns = predicates.map((predicate) => {
      if (typeof predicate === 'function') {
        return coll => coll.filter(predicate);
      }

      const keys = Object.keys(predicate);
      return coll => coll.filter(element =>
        keys.every(key => predicate[key] === element[key]));
    });
    return this.build(fns);
  };
*/

where(...params) {
    let coll = this;
    const funcOrObj = (param) => {
      if (typeof param === 'function') {
        coll = coll.build(col => col.filter(param));
      } else {
        const keysArr = Object.keys(param);
        const keyParams = collElem => keysArr.every(key => collElem[key] === param[key]);
        coll = coll.build(col => col.filter(keyParams));
      }
    };
    params.forEach(funcOrObj);
    return coll;
}
