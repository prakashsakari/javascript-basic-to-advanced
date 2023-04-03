/**
 * Global and Local Variables
 * Global, Local and Block Scope
 */

// exmaple - 01

var x = 3;

function showNumber() {
  console.log(x);
}

showNumber();

// example - 02

var x = 3;

function showNumber() {
  var y = 5;
  console.log(x);
}

console.log(y);
showNumber();

// example - 03 - Local Scope

var x = 3;

function showNumber() {
  var y = 5;
  console.log({ y });
  console.log({ x });
}

function f1() {
  console.log({ y });
  console.log({ x });
}

showNumber();
f1();

// example - 04 - block scope with let

{
  let a = 3;
  let b = 5;
  console.log({ a });
  console.log({ b });
}

// example - 05 - block scope with var

{
  var p = 3;
  var q = 5;
}

console.log({ p });
console.log({ q });

// example - 06

if (true) {
  var u = 3;
  var v = 5;
}

console.log({ u });
console.log({ v });

// example - 07

if (true) {
  let d = 3;
  const e = 5;
}

console.log({ d });
console.log({ e });

// example - 08
let f = 7;
if (true) {
  let d = 3;
  const e = 5;
}
console.log({ f });
console.log({ d });
console.log({ e });

// example - 09

let c = 6;
function x() {
  var a = 3;
  let b = 5;
}
x();
console.log(a);
console.log(b);
console.log(c);
