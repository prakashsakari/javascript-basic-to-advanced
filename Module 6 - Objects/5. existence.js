/**
 * Property Existence 🔥🔥
 * & for loop
 */

const obj = {
    name: "Prakash",
    city: "Mumbai"
}

// const key = "age";

// const isPropertyFound = key in obj;
// console.log(isPropertyFound);

// for (let key in obj){
//     console.log(key, obj[key]);
// }

const Obj = {
    ashish: "700",
    prakash: "750",
    riya: "1000",
    adarsh: "500"
}

let totalAmount = 0;
for (let key in Obj){
    totalAmount = totalAmount + Number(Obj[key])
}

console.log(totalAmount);