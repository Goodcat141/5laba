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

// 1
class EmployeesCollection {
    #employees;

    constructor() {
        this.#employees = [];
    }

    // Задание 2
    addEmployee(employee) {
        this.#employees.push(employee);
    }

    // Задание 3
    printEmployees() {
        for (let employee of this.#employees) console.log(`${employee.getName()}`);
    }

    // Задание 4
    printEmployeesSalarySum() {
        let sum = 0;
        for (let employee of this.#employees) sum += employee.getSalary();
        console.log(sum);
    }

    // Задание 5
    printEmployeesSalaryAvg() {
        let sum = 0;
        for (let employee of this.#employees) sum += employee.getSalary();
        console.log(sum / this.#employees.length);
    }
}