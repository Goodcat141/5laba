class Student {
    constructor(name) {
        this.name = name;
    }
}
class Employee {
    constructor(name) {
        this.name = name;
    }
}


let users = [
    new Student('user1'),
    new Employee('user2'),
    new Student('user3'),
    new Employee('user4'),
    new Student('user5'),
    new Employee('user6'),
    new Student('user7'),
];
for(let i = 0; i < users.length; i++){
    if(users[i] instanceof Employee){
        console.log(users[i].name);
    }
}
