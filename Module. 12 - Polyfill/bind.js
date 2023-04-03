/**
 * A polyfill is a piece of Javascript code used to provide modern functionality on older browsers that do not support it.
 */

// Polyfill for bind

const obj = {
  name: "prakash",
  city: "mumbai",
};

function displayUserInfo(state) {
  console.log(`Hi I am ${this.name} form ${this.city}, ${state}`);
}

Function.prototype.myBind = function (context, ...args) {
  context.wrapperFunc = this;
  return function (...rest) {
    context.wrapperFunc(...args, ...rest);
    delete context.wrapperFunc;
  };
};

const bindFunc = displayUserInfo.myBind(obj, "maharashtra");
bindFunc();
