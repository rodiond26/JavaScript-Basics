const auto = {
    model: 'Audi',
    color: 'red',
    year: 2012
}

const input = prompt('Enter a property: ');
const value = auto[input];

if (value) {
    console.log(value);
} else { //undefined
    console.log('Not found');
}