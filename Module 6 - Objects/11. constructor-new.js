/**
 * new keyword and contructor functions
 * 
 * Constructor functions technically are regular functions. They have 2 conventions though
They are named with capital letter first.
They should be executed only with "new" operator.
 */

function User(name, age) {
  (this.name = name), (this.age = age);
}

const user1 = new User("prakash", 101);
const user2 = new User("ashish", 111);
const user3 = new User("riya", 99);
const user4 = new User("sadaf", 100);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
