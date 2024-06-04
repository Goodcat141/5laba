class Employee {
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }
    getName() {
        return this.#name;
    }
    getSalary() {
        return this.#salary;
    }
}

// Задание 1
let employees = [new Employee("Гена", 300), new Employee("Гоша", 35), new Employee("Олег", 0,1)];

// Задание 2
for (let employee of employees) console.log(`${employee.getName()}, ${employee.getSalary()} рублей.`);