/**
 * CLASS
 */

class User {
  constructor(name, role, isAdmin, isLoggedIn) {
    (this.name = name),
      (this.role = role),
      (this.isAdmin = isAdmin),
      (this.isLoggedIn = isLoggedIn);
  }

  displayInfo() {
    console.log(`${this.name} is a ${this.role}`);
  }
}

const user1 = new User("Prakash", "Mentor", false, true);
const user2 = new User("Ashish", "Mentor", false, true);
const user3 = new User("Sakshi", "Mentor", false, true);
console.log(user1.displayInfo());
console.log(user2);
console.log(user3);
