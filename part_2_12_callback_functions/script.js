// Выполнить действие после того, как асинхронная операция завершится
// callback функция передается в качестве параметра функции и может быть вызвана в любой момент

const request = (cb) => { // cb - callback функция
    console.log('request');

    setTimeout(() => {
        console.log('response');
        const data = { text: 'hi'};
        cb(data);
    }, 2000);
}

const handler = (data) => {
    console.log('handler', data);
}

request(handler);

// передача анонимной функции
/*
request((data) => {
    console.log('hello', data);
});
*/