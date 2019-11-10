let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

let person = {
    name: 'Joseph',
    age: 33,
    location: 'Charlotte'
}

console.log(`${person.name} is ${person.age} and is from ${person.location}`);

person.age++;

console.log(`${person.name} is ${person.age} and is from ${person.location}`);