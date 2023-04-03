/**
 * Prototype::
 * What is a Prototype
 * Protoype Chaining
 * Same methods
 * Value of this
 * for in v/s Object.keys
 */

const loggedInStatus = {
  isLoggedIn: false,
};

const admin = {
  isAdmin: true,
  __proto__: loggedInStatus,
  showMessage() {
    console.log(this.isAdmin);
  },
};

const user = {
  name: "prakash",
  role: "mentor",
  __proto__: admin,
};
console.log(user);
console.log(Object.keys(user));

for (let key in user) {
  console.log(key);
}
