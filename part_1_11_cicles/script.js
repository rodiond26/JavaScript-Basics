// 1. Цикл с предусловием
let sum = 0;
let num = 1;

while (num <= 100) {
    sum += num;
    num++;
}

console.log(sum);

// 2. Цикл с постусловием
const res = (254 * 7) + (124 - 16) / 9;
let input;

do {
    input = prompt('(254 * 7) + (124 - 16) / 9 = ?')
} while (input != res);

console.log('Success!');

// 3. Цикл for
const input1 = +prompt('Enter a number: ');
let result = 1;

for (let i = 1; i <= input1; i ++) {
    result *= i;
}
console.log(result);

// 4. break

let sum1 = 0;

while (true) {
    const input2 = prompt('Enter a number or = ');

    if (input2 == '=') {
        break;
    } else {
        sum1 += Number(input2);
    }
}
console.log(sum1);
