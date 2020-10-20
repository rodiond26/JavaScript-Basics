const age = prompt('Enter age');

if (age < 18) {
    alert('Too young');
} else if (age > 75) {
    alert('Too old');
} else {
    alert('Access Granted');
}

(100 > 200) ? (console.log(true)) : (console.log(false));

const sym = 'M';

const gender = (sym === 'M') ? 'male' : 'female';
