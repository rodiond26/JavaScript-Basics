// 25 != '25'

const value = 25 / '5';  // 5 - число

const value = 25 + '5';  // 255 - строка

const value = '157'; // строка
console.log(+value); // число

const value = Number('157'); // из строки в число

const value = Number('str157'); // NaN

const value = Number(undefined); // NaN

const value = Number(null); // = 0

const value = Number(true); // = 1

const value = Number(false); // = 0

const value = 125 + true; // = 126

const value = 125 / false; // = Infinity

const str = "25" + 10; // "2510"

const str = 4 + 5 + '7'; // "97" - сложение происходит слева направо, типы преобразуются попарно

const str = String(25); // "25" - строка

Boolean(0) // false
Boolean('') // false
Boolean(NaN) // false
Boolean(undefined) // false
Boolean(null) // false


