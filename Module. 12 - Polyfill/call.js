/**
 * A polyfill is a piece of Javascript code used to provide modern functionality on older browsers that do not support it.
 */

// Polyfill for call & apply

const obj = {
  name: "prakash",
  city: "mumbai",
};

function displayUserInfo(state) {
  console.log(`Hi I am ${this.name} from ${this.city}, ${state}`);
}

Function.prototype.myCall = function (context, ...args) {
  context.showMessage = this;
  context.showMessage(...args);
  delete context.showMessage;
};

Function.prototype.myApply = function (context, args) {
  context.showMessage = this;
  context.showMessage(...args);
  delete context.showMessage;
};

// displayUserInfo.myCall(obj, "maharashtra");
displayUserInfo.myApply(obj, ["maharashtra"]);
