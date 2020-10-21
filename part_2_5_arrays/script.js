const nums = [23, 12 ,25, 35, 28];

const input = +prompt('Enter a number: ');
const index = nums.indexOf(input);

if (index > -1) {
    console.log(nums[index]);
} else {
    console.log('Not found');
}

const array = [];

for (let i = 0; i < 5; i++) {
    let input1 = +prompt('Enter a number: ');
    array.push(input1);
}
console.log(array);

const input2 = +prompt('Enter a number to delete: ');
console.log(input2);
const index2 = array.indexOf(input2);
console.log(index2);
if (index2 > -1) {
    array.splice(index2, 1);
}

console.log(array);
