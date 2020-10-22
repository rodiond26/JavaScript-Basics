// promise - специальная конструкция, которая обрабатывает асинхронные операции

// new Promise((resolve, reject)) - resolve - если callback функция выполнится, reject - если callback функция не выполнится

const request = new Promise((resolve, reject) => {
    
    console.log('request');

    setTimeout(() => {
        console.log('response');
        resolve();
    }, 2000);

})

request.then(() => {
    console.log('resolved'); // при удачном выполнении функции внутри request
}, () => {
    console.log('rejected'); // при неудачном выполнении функции внутри request
}); // resolved

