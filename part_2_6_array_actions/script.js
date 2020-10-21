const nums = [11, 12, 13, 14, 15];

const input = prompt('Enter 5 numbers: ');

const userArray = input.split(',');

const newArray = nums.concat(userArray);

console.log(newArray);