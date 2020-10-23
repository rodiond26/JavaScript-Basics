function generateKoef(min, max) {
    const coef = Math.random() * (max - min) + min;
    return Math.floor(coef);
}

console.log(generateKoef(1, 20));

const a = generateKoef(3, 33);
const b = generateKoef(4, 44);

const input = prompt(`${a}x = ${b}. x = ?`);

const res = Math.floor(b / a);

if (input == res) {
    alert('Right');
} else {
    alert('Wrong');
}

const 