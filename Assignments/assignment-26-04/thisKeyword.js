// const user = {
//     name : "Alice",
//     greetDelayed : function(){
//         setTimeout(function() {
//             console.log(`Hello, ${this.name}`);
//         }, 1000);
//     }
// }
// user.greetDelayed();


// This code is giving hello undefined because we are using regular function. To fix this we should use arrow functions or bind

const user = {
    name : "Alice",
    greetDelayed : function(){
        setTimeout(() => {
            console.log(`Hello, ${this.name}`);
        }, 1000);
    }
}
user.greetDelayed();