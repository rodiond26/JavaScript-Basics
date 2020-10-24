fetch('./data.json')
.then((res) => {
    return res.text();
    //return res.json();
})
.then((data) => {
    console.log(data);
});
