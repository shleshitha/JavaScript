function createUniqueCounter(){
    let count = 0;

    return {
        increment(){
            count++;
            return count;
        },
        getValue(){
            return count;
        }
    };
}

const counter = createUniqueCounter();
console.log(`The current value of count is ${counter.getValue()}`);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(`The current value of count is ${counter.getValue()}`);

const counterB = createUniqueCounter();
console.log(`The current value of countB is ${counterB.getValue()}`);