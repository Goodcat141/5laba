(function () {
    // Задание 1
    class Employee {
        constructor(name, position, department) {
            this.name = name;
            this.position = position;
            this.department = department;
        }
    }

    class Position {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class Department {
        constructor(name, address) {
            this.name = name;
            this.address = address;
        }
    }

    // Задание 2
    var valera = new Employee("Генадий", new Position("Осинизатор", 16), new Department("1", "Сталина"));

    // Задание 3
    console.log(`${valera.name}\n${valera.position.name}\n${valera.department.name}`);
})();