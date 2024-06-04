class User {
    #name;

    setName(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
}

class Employee extends User {
    setName(name) {
        if (name.length > 0) setName(name);
    }
}