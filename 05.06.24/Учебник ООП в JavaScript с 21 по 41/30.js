class Employee {
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }

    // Задание 1
    getSalary() {
        return this.#salary;
    }
    
    setSalary(salary) {
        this.#salary = salary;
    }
}