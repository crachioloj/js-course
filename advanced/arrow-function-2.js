const add = () => {
    return arguments[0] + arguments[1]; // "arguments" doesn't exist in arrow functions. just get a weird error
};

console.log(add(1,2,3,4))

const car = {
    color: 'Red',
    getSummary() { 
        return `The car is ${this.color}`;  //can't use "this" in arrow functions
    }
}

console.log(car.getSummary())