// деструктуризация - деструктурирующее присваивание

let person = {
    name: 'Sam',
    years: 25
}

let {name, years: age, height = null} = person;

console.log(name, age, height); //Sam 25 null
