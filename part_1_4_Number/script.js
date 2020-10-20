const Kb = 15;
const bit = 15 * 1024 * 8;

console.log(bit);

const sum = 0.1 + 0.2; // 0.30000000000000004
console.log(sum);

console.log(sum.toFixed(3)); // "0.300" - функция возвращает строку
console.log(+sum.toFixed(3)); // 0.3 - кастинг из строки в число

const miles = prompt('Enter miles: ');
const kilometres = miles * 1.6;
console.log(kilometres); // "19.200000000000003"
console.log(+kilometres.toFixed(3)); // 19.2



//NaN - результат не является числом

const num = 256;
const zero = 0;
console.log(num / zero); //Infinity
