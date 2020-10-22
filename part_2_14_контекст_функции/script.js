const calc = {
    a: 0,
    b: 0,
    sum() {
        console.log(this.a + this.b);
    },
    mul() {
        console.log(this.a * this.b);
    },
    write(a, b) {
        this.a = a;
        this.b = b;
    }
}
calc.write(7, 8);
calc.sum();
calc.mul();
console.log(calc);