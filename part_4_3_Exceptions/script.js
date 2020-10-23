try {
    const input = prompt('Enter your name:');

    const inputArray = input.split(' ');

    if (inputArray.length != 2) {
        throw new Error('Invalid input');
    }
} catch (err) {
    alert(err.message);
}
console.log('Done');
