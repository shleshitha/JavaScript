function setupCounter (intialValue){
    let count = intialValue;

    function increment(){
        count++;
        return count;
    }

    function decrement(){
        count--;
        return count;
    }

    return {
        increment,
        decrement
    };
}

const counterOne = setupCounter(5);
console.log(counterOne.increment());
console.log(counterOne.increment());

const counterTwo = setupCounter(10);
console.log(counterTwo.decrement());

console.log(counterOne.decrement());



// In this code, counterOne and counterTwo are displaying independent values. This is because of closure. When a function call is made to setupCounter it creates an independent count variable and the functions increment and decrement remembers it. When we invoke those functions their independent variable is updated and returned.