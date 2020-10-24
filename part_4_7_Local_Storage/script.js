//localStorage.clear();

const jsonObj = localStorage.getItem('user');

if (jsonObj) {
    const obj = JSON.parse(jsonObj);
    console.log(obj);
    alert(`Hello ${obj.name}`);
} else {
    const input = prompt('Enter your name');

    const obj = {
        name: input
    }

    const jsonObj = JSON.stringify(obj);

    console.log(jsonObj);

    localStorage.setItem('user', jsonObj);

    console.log(localStorage);
}