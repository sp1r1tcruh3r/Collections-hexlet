/*


При работе с текстом скобки занимают важное место. Мы сплошь и рядом сталкиваемся со скобками разных видов (а если рассматривать шире, то с любыми парными сущностями, обозначающими начало и конец блока текста): это и программный код, и html-разметка, и форматы данных (например, JSON) и обычное письмо.

При этом важно соблюдать требования к структуре, которую образуют скобки в тексте:

    Закрывающая скобка не должна идти впереди открывающей.
    Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
    Для структуры, состоящей из скобок разных типов, важен порядок закрытия скобок: первой закрывется скобка, чей тип совпадает с типом последней открытой скобки (LIFO, типичная задача для стека).

isBracketStructureBalanced.js

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет является ли эта строка сбалансированной (соответствующей требованиям). Пустая строка (отсутствие скобок) считается сбалансированной.

import isBracketStructureBalanced from 'bracketStructureValidator';

isBracketStructureBalanced('[()]');  // true
isBracketStructureBalanced('{<>}}'); // false

Функция должна поддерживать, минимум, четыре вида скобок: круглые — (), квадратные — [], фигурные — {} и угловые — <>.
*/

const isBracketStructureBalanced = (str) => {
  if (str === '') return true
  const arr = str.split('');
  if (arr.length % 2 !== 0) return false

  const brackets = [')', ']', '}', '>'];
  const stack = [];
  let counter = 0;
  let balance = true

  arr.forEach((elem) => {
    if (!brackets.includes(elem)) {
      if (elem === '(') stack.unshift(')');
      if (elem === '[') stack.unshift(']');
      if (elem === '{') stack.unshift('}');
      if (elem === '<') stack.unshift('>');
      counter += 1;
    } else if (elem !== stack.shift()) {
      counter -= 1;
      balance = false;
    } else {
      counter -= 1;
    }
  });
  if (counter !== 0) balance = false;
  return balance;
};

export default isBracketStructureBalanced;
