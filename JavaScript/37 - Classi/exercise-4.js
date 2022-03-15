class BankAccount {
    #credit = 0;

    constructor(credit){
        this.#credit = credit
    }

    deposit(amount) {
        this.#credit += amount;
    }

    withdraw(amount) {
        this.#credit -= amount;
    }

    view() {
        console.log(`Your current credit is: ${this.#credit}`)
    }
}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();