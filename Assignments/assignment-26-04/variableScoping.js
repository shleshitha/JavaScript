// console.log(mysteryVariable);
// mysteryVariable = 10;
// console.log(mysteryVariable);

// function revealMystery() {
//     console.log("Inside revealMystery:", mysteryVariable);
//     var mysteryVariable = 20;
//     console.log("Inside revealMystery (after declaration):", mysteryVariable);
// }
// revealMystery();
// console.log("After revealMystery:", mysteryVariable);


// console.log(mysteryVariable);
let mysteryVariable = 10;
console.log(mysteryVariable);

function revealMystery() {
    console.log("Inside revealMystery:", mysteryVariable);
    let mysteryVariable = 20;
    console.log("Inside revealMystery (after declaration):", mysteryVariable);
}
revealMystery();
console.log("After revealMystery:", mysteryVariable);



// if we use let and try to print the variable before declaring it throws an error.
// But if we use var we will not get any error instead compiler prints undefined.
// This is beacause of Hoisting
// when variables are declared using var then these are hoisted to the top but assigned only in its place. Hoisting will not occur in let