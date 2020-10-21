const auto = {
    model: 'Audi',
    color: 'red',
    year: 2012
}

const input = prompt('Enter a property: ');
const hasProp = input in auto;

if (hasProp) {
    delete auto[input];
} else {
    auto[input] = null;
}

console.log(auto);