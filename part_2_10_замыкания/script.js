// !!! Функция может вызывать функцию !!!
function outer() {
    //let message = 'hi';
    
    return function () {
        console.log(message);
    }
}

const value = outer();

const message = 'hey';
value(); // "hi"