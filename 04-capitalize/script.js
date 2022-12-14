/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  // превратили строку в массив
  let strArray = str.split(' ');
  console.log(strArray);
  // создали новый пустой массив с помощью map
  let newArray = strArray.map(element => {
    // сложили первый символ элемента (перевели его в верхний регистр) и извлеченный остаток элемента
    // с помощью slice
    return element.charAt(0).toUpperCase() + element.slice(1);
  });

  // превратили массив обратно в строку (указали тип разделителя в параметре метода)
  let newString = newArray.join(' ');
  return newString;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"