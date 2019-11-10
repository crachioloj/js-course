// prototypal inheritance

class Person {
    constructor (firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;
    
        this.likes.forEach(like => {
            bio += ` ${this.firstName} likes ${like}.`
        });
    
        return bio;
    }
    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }
    getBio() {
        return `${this.fullName} is a ${this.position}`;
        // return `${this.firstName} ${this.lastName} is a ${this.position}`;
    }
    getYearsLeft() {
        return 65 - this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes = []) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }
    getBio() {
        const isPassing = this.grade >= 70;
        return `${this.firstName} ${this.lastName} is ${isPassing ? 'passing' : 'failing'}. Grade: ${this.grade}`
    }
    upgradeGrade(increment) {
        this.grade += increment;
    }
}

const student = new Student('Franz', 'Kafka', 12, 80, ['Writing', 'Basketball']);
console.log(student);
console.log(student.getBio());
student.upgradeGrade(-10);
console.log(student.getBio());
student.upgradeGrade(-10);
console.log(student.getBio());
student.upgradeGrade(25);
console.log(student.getBio());

const emp = new Employee('Bill', 'Little', 45, 'Teacher', ['Teaching', 'Biking']);
emp.fullName = 'Bob Dole';
console.log(emp.getBio());
console.log(emp.getYearsLeft())

const person2 = new Person('Quincy', 'Smith', 21)

console.log(person2.getBio());