/*

wordsCount.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два параметра: список слов и список стоп-слов. Задача функции вернуть объект типа Map, содержащий в себе частоту переданных слов. То есть, ключами являются сами слова, а значениями число повторений.

    Слова могут быть в разных регистрах, а подсчет должен работать без учета регистра. Соответственно в результирующем наборе слова должны быть представлены в нижнем регистре.
    Порядок слов в выходе должен совпадать с порядком появления новых слов во входном наборе.
    stopWords – это список стоп-слов, которые не должны попадать в результирующую структуру. Стоп-слова указываются в нижнем регистре.

const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
wordsCount(words, stopWords); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]

Подсказки

    Воспользуйтесь тройкой map/filter/reduce.
    Функция has типа Map проверяет наличие ключа в мапе
    Проверка должна быть регистро-независимой

*/

// BEGIN (write your solution here)
const wordsCount = (words, stopWords) => {
  const lowerCase = words.map(word => word.toLowerCase());
  const filtered = lowerCase.filter(word => !stopWords.includes(word));
  return filtered.reduce((acc, word) =>
    (!acc.has(word) ? acc.set(word, 1) : acc.set(word, (acc.get(word)) + 1)), new Map());
};
export default wordsCount;
// END
