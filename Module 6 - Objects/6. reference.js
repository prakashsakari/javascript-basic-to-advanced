/**
 * Object Reference & Shallow Copy ⛵⛵
 */

const person1 = {
    name: "Prakash",
    age: 101,
    address: {
        city: "Mumbai",
        state: "MH"
    }
}

const person2 = Object.assign({}, person1);

person2.name = "Ashish";
person2.address.city = "Sirsa";
person2.address.state = "Haryana";
person1.age = 111;

console.log(person1);
console.log(person2);









// const person2 = person1;

// person2.name = "Ashish";
// person1.age = 111;

// console.log(person1);
// console.log(person2);