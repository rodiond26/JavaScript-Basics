const now = new Date();

const secPerDay = 24 * 60 * 60;

const hrs = now.getHours();
const mins = now.getMinutes();
const sec = now.getSeconds();

const secPass = (hrs * 3600) + (mins * 60) + sec;

console.log(secPerDay - secPass);

console.log(Date.now());

let sum = 0;

const start = Date.now();

for (let i = 1; i <= 1000000; i++) {
    sum += (i * i);
}

const end = Date.now();

console.log(end - start);
