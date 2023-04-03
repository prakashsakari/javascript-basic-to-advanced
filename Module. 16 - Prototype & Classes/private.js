/**
 * Private properties
 */

class User {
  #id = 123;

  changeId(id) {
    this.#id = id;
  }
}

const user = new User();
user.changeId("xyz");
console.log(user);
