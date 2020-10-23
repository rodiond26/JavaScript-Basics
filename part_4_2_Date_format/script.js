const input = prompt('DD MM YYYY');
const [day, month, year] = input.split(' ');

const inputDate = new Date(`${year}-${month}-${day}`);

let diff = Date.now() - inputDate;

diff = diff / 1000 / 60 / 60;

console.log(diff.toFixed(0));

function formatDate(date) {
    let day = twoDigit(date.getDate());
    let month = twoDigit(date.getMonth() + 1);
    let year = twoDigit(date.getFullYear());
    let hours = twoDigit(date.getHours());
    let minutes = twoDigit(date.getMinutes());

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function twoDigit(value) {
    let newValue = value;
    if (value < 10) {
        newValue = '0' + value;
    } 
    return newValue;
}

const date = new Date('2007-06-02T05:55');
console.log(formatDate(date));