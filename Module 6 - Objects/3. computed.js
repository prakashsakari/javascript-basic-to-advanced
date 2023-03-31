/**
 * Adding Property to Object
 * Computed Property
 */ 

const readlineSync = require("readline-sync");
const key = readlineSync.question("What do you want to know about the mentor (name/age/city/state) - ");
const course = readlineSync.question("Which course do you want to learn (html/css/js/react/redux) - ");

const obj = {
    name: "Prakash",
    age: 100,
    [course]: "course not available"
}

obj.city = "Mumbai";
obj.state = "MH";

console.log(obj["name"]);
console.log(obj[course]);