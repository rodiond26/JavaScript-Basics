function counter(from, to) {
    let number = from;

    const id = setInterval(() => {
        console.log(number);

        if (number == to) {
            clearInterval(id);
        } else {
            number++;
        }
    }, 1000); // шаг интервала
}

counter(3, 10);