const storeGood = {
    number: 1001,
    place: 'A101',
    weight: 25
}

const shopGood = Object.assign({}, storeGood, { cost: 10});
storeGood.number = 2000;

console.log(storeGood, shopGood);