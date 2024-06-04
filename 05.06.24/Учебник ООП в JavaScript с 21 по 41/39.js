class User {
    setName(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}

// 1
class Employee extends User {}

// 2
class Programmer extends Employee {
    // 4
    printAnything() {
        console.log(this.getName());
        console.log(super.getName());
        console.log(super.constructor.name);
        console.log(super.constructor);
        console.log(super.constructor.prototype);
        console.log(super.constructor.prototype.constructor);
        console.log(super.constructor.prototype.constructor.name);
        console.log(super.constructor.prototype.constructor.prototype);
        console.log(super.constructor.prototype.constructor.prototype.constructor);
        console.log(super.constructor.prototype.constructor.prototype.constructor.name);
        console.log(super.constructor.prototype.constructor.prototype.constructor.prototype);
        console.log(super.constructor.prototype.constructor.prototype.constructor.prototype.constructor);
    }
}

// 3
class Designer extends Employee {}