const num1 = 5;
const num2 = 8;

function sum(a, b) {
    return a + b;
}

const val = sum(num1, num2);

function say() {
    return 'hi';
}

const val1 = say(); // возврат строки

function logger(str) {
    console.log(str);
}

logger('Start!'); // выполнение действия функцией

function calc(num, exp) {
    let res = 1;
    for (let i = 1; i <= exp; i++) {
        res *= num;
    }
    return res;
}

const result = calc(2, 30);

console.log(result);


// !!! Запись функции в переменную - анонимная функция
const fun = function(a) {
    return 'fun';
}

// ES2015
// !!! Стрелочная функция - сокращенная запись обычной функции
// Стрелочная функция должна быть куда-нибудь записана, например, в переменную
const fun = (a) => {  // в скобках парметры фукнции!
    return 'fun';
}

const sum = (a, b) => {
    return a + b;
}

const area = (a, b) => {
    if (a > 0 && b > 0) {
        return a * b;
    } else {
        return null;
    }
}

const result = area(5, 4);
console.log(result);
