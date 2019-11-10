let num = 33.31349

console.log(num.toFixed(1))

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// let min = 10;
// let max = 20;
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);

let createRandomNumBetween = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let makeGuess = function(guess){
    let randomNum = createRandomNumBetween(1, 5);
    console.log(`Random number: ${randomNum}`);
    return guess === randomNum;
}

console.log(makeGuess(1));