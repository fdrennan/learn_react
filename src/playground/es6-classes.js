class Person {
    constructor(name = 'Anonymous', age= 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello you ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
};

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` This major is ${this.major}`;
        }
        return description;
    }
}

const me = new Student('Freddy Drennan', 27, 'Computer Science');
console.log(me.hasMajor());
console.log(me.getDescription());