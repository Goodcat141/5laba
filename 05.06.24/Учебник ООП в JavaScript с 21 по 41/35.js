class User {
    #name;
    #surn;

    setName(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }

    setSurn(surn) {
        this.#surn = surn;
    }
    getSurn() {
        return this.#surn;
    }
}

class Employee extends User {
    #salary;
    #age;

    constructor(name, salary, age) {
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }

    getFull() {
        return this.#name + " " + this.#surn;
    }
}

const valera = new Employee("Valera", 3, 2)
valera.getName();
valera.setSurn("SUR")