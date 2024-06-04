class Employee {
    #name;
    #salary;
    #age;

    constructor(name, salary, age) {
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }

    // Задание 1
    getAge() {
        return this.#age;
    }

    // Задание 2
    setAge(age) {
        if (age > 18 && age < 65) this.#age = age;
    }
}