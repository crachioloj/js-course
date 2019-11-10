const square = (num) => num * num;

const squareLong = (num) => {
    return num * num;
}

console.log(square(4));

const people = [{
    name: 'Joseph',
    age:33
}, {
    name: 'Andrew',
    age:27
}, {
    name: 'Bob',
    age: 12
}]

const under30 = people.filter(p => p.age <= 30);

console.log(under30);

const age27 = people.filter(p => p.age == 27);

console.log(age27)