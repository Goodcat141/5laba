class User {
    constructor(name, surn) {
        this.name = name;
        this.surn = surn;
    }

    getName() {
        return this.name;
    }
    getSurn() {
        return this.surn;
    }
}

// Задание 1
class Employee extends User {
    #salary;
    #age;

    // Задание 2
    constructor(name, salary, age) {
        this.name = name;
        this.#salary = salary;
        this.#age = age;
    }

    // Задание  3
    getAge() {
        return this.#age;
    }

    setAge(age) {
        this.#age = age;
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(salary) {
        this.#salary = salary;
    }
}