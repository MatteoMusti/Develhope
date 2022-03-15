function calculate() {
    const calc = {
        result: 0,
        
        add(n) {
            this.result += n;
            return this
        },

        sub(n) {
            this.result -= n;
            return this
        },

        multiply(n) {
            this.result *= n;
            return this
        },

        divide(n) {
            this.result /= n;
            return this
        },

        printResult() {
            console.log(this.result);
        }
    }
    return calc;
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
