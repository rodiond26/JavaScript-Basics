
let arr = [12, 23, 34, 45, 56, 67];
console.log(arr);

arr = arr.map(function (el) {
    let value;

    if (el % 2 == 0) {
        value = el / 2;
    } else {
        value = el;
    }
    return value;
});

console.log(arr);

let filtered = arr.filter(function (el) {
    return el < 30;
});

console.log(filtered);