const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    }
}
const counter = createCounter()
counter.increment();
counter.decrement();
counter.decrement();
counter.count = 0; //doesn't work!
console.log(counter.get())

//Adder
const createAdder = (a) => {
    return (b) => {
        console.log(`B: ${b}`)
        return a + b;
    }
}

const add10 = createAdder(10);
console.log(add10(-2))
console.log(add10(20))

const createTipper = (tip) => {
    return (bill) => {
        return bill * tip;
    }
};

const tipper20pct = createTipper(.20);
console.log(tipper20pct(100.12))
console.log(tipper20pct(9))

