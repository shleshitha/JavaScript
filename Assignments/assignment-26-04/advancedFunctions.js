// function flexibleFunction (a,b,...rest){
//     console.log("a: ",a);
//     console.log("b: ",b);
//     console.log("rest: ",rest);
// }

// flexibleFunction(1);
// flexibleFunction(1,2);
// flexibleFunction(1,2,3,4,5);


// In the above code even if num of parameters doesn't match the parameters in function defintion. It doesnt throw any error. Beacuse when less parameters are passed js automatically assigns undefined to remining parameters.
// ...rest takes all the remaining parameters , it should be at the end 


function sumAll(...rest){
    let sum = 0;
    rest.forEach((x)=>{
        sum+=x;
    })
    return sum;
}

console.log(sumAll(1,2,3));
console.log(sumAll(3,3,3,3,3,3,3));