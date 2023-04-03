let a = 5;
let b = 6;

function addThem() {
  console.log(a + b);
}

addThem();

// logs 11 to the console; the function's local scope can access variables in the outer scope.

// Example 1.1

let dessert = "cake";

if (dessert.length < 6) console.log(dessert);

// The if keyword creates a local execution scope for its block; this scope can access the global
// scope

// Example 2

let dessert = "ice cream";

if (dessert) {
  if (dessert.length < 5) {
    console.log("quick snack");
  } else {
    console.log("lengthy treat");
  }
}

// The blocks nested within the outer if block can still access the global scope.

// Example 3

let dessert = "tart";

if (dessert) {
  let dessert = "cannoli";
  if (dessert.length < 5) {
    console.log("quick snack");
  } else {
    console.log("lengthy treat");
  }
} else {
  console.log("no dessert...");
}

// The inner blocks have access to the global scoped variable dessert, but a new local variable
// named dessert is declared in the local scope of the first if block. This variable shadows (blocks)
// the inner if blocks from accessing the global scoped variable.

// Example 4

let tea = "sweet";

if (true) {
  let tea = "iced";
  tea = "sour";
}

console.log(tea);

// A new local variable is declared inside the block, so the reassignment that takes place is acting
// on the local variable within the block, not the outer scoped global block.

// Example 5

let tea = "sweet";

if (true) {
  tea = "sour";
  let tea = "iced";
}

console.log(tea);

// The variable declaration inside the block is hoisted above the reassignment, but when let
// assignments are hoisted, the value is not initialized, so an error is thrown.

// Example 6

let tea = "sweet";

if (true) {
  tea = "sour";
  var tea = "iced";
}

console.log(tea);

// the var variable declaration is hoisted out of the block scope, as it does not have block scoping.
// This means that both declarations for tea exist in the global scope, and the var, coming after
// the let, will raise an exception as a redundant initialization.

// Example 7

let numberOfBagels = 5;

function eatBagel() {
  numberOfBagels -= 1;
  if (numberOfBagels === 0) {
    console.log("Oh nO, Out Of bagles!");
  } else {
    console.log(`Yummy. There are ${numberOfBagels} left!`);
  }
}

eatBagel();
eatBagel();
console.log(numberOfBagels);

// The function eatBagel creates an execution context that creates a local scope; it looks inside
// this scope first to resolve the variable numberOfBagels, but doesn't find one therein, so it
// searches the next scope out, which in this case is the global scope containing the variable
// numberOfBagels. This method acts on this variable directly and reassigns a new primitive value
// with each function call.

// Example 8

let numberOfBagels = 5;

function eatBagel(bagels) {
  bagels -= 1;
  if (bagels === 0) {
    console.log("Oh nO, Out Of bagles!");
  } else {
    console.log(`Yummy. There are ${bagels} left!`);
  }
}

eatBagel(numberOfBagels);
eatBagel(numberOfBagels);
console.log(numberOfBagels);

// In this case, the parameter bagels creates a new local variable named bagels that is assigned the
// value of the argument passed in to the call, which in this case is 5 from numberOfBagels. This
// local variable is created anew with each call and the variable passed in as an argument to the
// function is not modified.

// Example 9

let numberOfBagels = 5;

function eatBagel(numberOfBagels) {
  numberOfBagels -= 1;
  if (numberOfBagels === 0) {
    console.log("Oh nO, Out Of bagles!");
  } else {
    console.log(`Yummy. There are ${numberOfBagels} left!`);
  }
}

eatBagel(numberOfBagels);
eatBagel(numberOfBagels);
console.log(numberOfBagels);

// The parameter in this function still creates a new local variable when the function eatBagel is
// called. It has the same name as the outer scoped variable, but this new local scoped variable
// shadows the outer variable, so the only changes made are to the local variable.

// Example 10

var a = 5;
const b = 6;

function addThem() {
  console.log(a + b);
}

addThem();

// The keyword used to declare the variables in the global scope has no impact at this point.
// The function addThem can still access the outer scope variables.

// Example 11

var a = "ham";
const b = " spam";

function addThem() {
  console.log(a + b);
}

addThem();

// The scoping rules for functions accessing outer scope variables is still the same. addThem can
// access both a and b in its inner scope, so the values are concatenated and the result logged.

// Example 12

if (true) {
  let pecan = "sandie";
}

console.log(pecan);

// The variable pecan is declared in the block scope of if; the global scope has no way to access
// this variable so it throws an error.

// Example 13

if (true) {
  var pecan = "sandie";
}

console.log(pecan);

// The variable pecan is declared in the block scope of if, but the keyword var is used to do so
// the variable pecan is scoped globally. This is the case when var is used to declare variables
// outside of any function.

// Example 14

function chopIt() {
  let pieces = 10;
}

chopIt();
console.log(pieces);

// The global scope cannot access variable declared within the inner scope of a function.

// Example 15

let food = "sushi";

function eatEmUp() {
  let sauce = " soy";

  function mixEmUp() {
    console.log(food + sauce);
  }

  mixEmUp();
}

eatEmUp();

// Functions can access their outer scope; this includes each scope outside of the function out to
// and including global scope.
//

// Example 16

let food = "sushi";

function eatEmUp() {
  function sauceEmUp() {
    let sauce = " garlic soy";
  }

  sauceEmUp();
  console.log(food + sauce);
}

eatEmUp();

// This will return an error because the variable that is declared in sauceEmUp's call, is
// declared inside the scope of that function and thus, the scope of eatEmUp cannot "reach"
// in to this scope to access the variable sauce.

// Example 17

let bread = "sourdough";

function makeSandwich() {
  let meat = " spam";

  if (meat === " spam") {
    meat += " and eggs";
  }

  function getCheese() {
    let cheese = " swiss";

    function condiment() {
      let condiment = " sriracha";
      return condiment;
    }

    return cheese + condiment();
  }

  return bread + meat + getCheese();
}

console.log(makeSandwich());

// This will log 'sourdough spam and eggs swiss sriracha' to the console. Follow the rules for
// variable and function scoping and it should all fit together into a recipe for a delicious,
// delicious sandwich.

// Example 18

let bread = "sourdough";

function makeSandwich() {
  let meat = " spam";
  let condiment = "mayo";

  function getCheese() {
    let cheese = " swiss";

    function condiment() {
      let condiment = " sriracha";
    }

    condiment();
    return cheese + condiment;
  }

  return bread + meat + getCheese();
}

console.log(makeSandwich());

// The log here is unexpected; on line 15 when JS tries to resolve the variable name condiment, it
// checks the local scope of the function getCheese first. It finds the variable condiment that
// is assigned to a function; not the variable condiment inside the function condiment(), or the
// variable by the same name in the local scope of makeSandwich on line 5. As a result it logs
// the value associated, which is a function definition.

// Example 19

let bread = "sourdough";

function makeSandwich() {
  let meat = " spam";
  let condiment = " mayo";

  function getCheese() {
    let cheese = " swiss";

    if (cheese) {
      let condiment = " sriracha";
    }

    return cheese + condiment;
  }

  return bread + meat + getCheese();
}

console.log(makeSandwich());

// The condiment variable declared within the if block is scoped only within that block, so when
// getCheese returns the variable cheese concatenated with the variable condiment, the only
// condiment variable that it can find is the one defined in its outer scope (the inner scope of
// makeSandwich).

// Example 20

let bread = "sourdough";

function makeSandwich() {
  let meat = " spam";
  let condiment = " mayo";

  function getCheese() {
    let cheese = " swiss";

    if (cheese) {
      var condiment = " sriracha";
    }

    return cheese + condiment;
  }

  return bread + meat + getCheese();
}

console.log(makeSandwich());

// Just as before the function getCheese checks its execution context for a resolution to the
// variable condiment; this time however, the declaration on line 11 uses var, so it is scoped
// to the function, not the if block, and this is the value that is used.

// **Hoisting and variable assignment**

// Example 21

function stringCheese() {
  console.log(cheddar);
  let cheddar = "sharp";
}
stringCheese();

// This will not log anything, but it will raise an error. Variables that are declared with let
// are hoisted but they are not given a defined valued. Because of this, JS throws an Uncaught
// Reference error.

// Example 22

function stringCheese() {
  console.log(SWISS);
  const SWISS = "full o' holes";
}
stringCheese();

// This will not log anything, but it will raise an error. Variables that are declared with const
// are hoisted but they are not given a defined valued. Because of this, JS throws an Uncaught
// Reference error.

// Example 22

function stringCheese() {
  console.log(nacho);
  var nacho = "not yours";
}
stringCheese();

// var declared variables are hoisted, but are also assigned a value of undefined, so in this case
// undefined is logged to the console.

// Example 23

function stringCheese() {
  return cheddar;
  let cheddar = "sharp";
}
stringCheese();

// Again, the variable declared with let is hoisted with a value that is not defined, the method call
// makes no difference. There is no value for `return` to reference and an Uncaught Reference Error is
// raised.

// Example 24

function stringCheese(cheese) {
  console.log(cheese);
  let cheddar = "sharp";
  cheese = cheddar;
}
stringCheese("blue");

// The argument 'blue' is passed in to the function call so the local variable cheese is assigned
// to this value. The let cheddar declaration is hoisted to occur before the log, but the assignments
// are not hoisted, so there are no issues, and no visible reassignment of the local variable cheese.

// Example 25

function stringCheese(cheese) {
  cheese = cheddar;
  console.log(cheese);
  let cheddar = "sharp";
}
stringCheese("camembert");

// This will raise an Uncaught Reference error. The local variable is first assigned to the value
// of the argument that is passed in ('camembert'), then a reassignment is attempted.
// This reassignment however, references the variable cheddar; the declaration of cheddar is
// hoisted above this reassignment, but because it is a let declaration, there is no value assigned,
// thus giving us the error.

// Example 26

function stringCheese(cheese) {
  cheese = cheddar;
  var cheddar = "sharp";
  console.log(cheese);
}
stringCheese("mozzarela");

// This will log undefined. Here the local variable cheese is assigned to the value 'mozzarela'
// with a reassignment to cheddar following immediately after. The var declaration is hoisted above
// the reassignment though, and the variable cheddar is initialized with a value of undefined. So,
// cheese is reassigned to undefined. Then, the local variable cheddar is reassigned to 'sharp', but
// this has no impact on the local variable cheese's assignment, so when cheese is logged, the value
// is still undefined.

// Example 27

function stringCheese(cheese) {
  let cheddar = "sharp";
  cheese = cheddar;
  console.log(cheese);
}
stringCheese("oaxaca");

// This will log 'sharp'. The local variable cheese is assigned to the value 'oaxaca'. The engine
// then runs the hoisted declaration of cheddar, and the subsequent reassignment (from an unset
// value to 'sharp'). Then the local variable cheese is reassigned to the value of cheddar (which is
// 'sharp') and the value of cheese is logged.

// Example 28

function stringCheese(cheese) {
  let cheese = "sharp";
  cheese = "gornoaltajski";
  console.log(cheese);
}
stringCheese("babybel");

// This will raise a syntax error; the identifier cheese is initialized from the parameter of the
// function. We can't declare a variable that already exists, so an error is thrown. None of the
// reassignment or logs that follow are run.

// Example 29
teaTime();
let snack = "scones";

function teaTime() {
  console.log(snack);
}

// This will raise an exception; 'cannot access 'snack' before initialization'. The let declaration
// is hoisted above the teaTime() invocation. But, the function definition is hoisted above all else
// so it tries to log the value of snack and finds that there is no assigned value. Remember that
// let declarations do not assign a value when they are hoisted; they end up in the TDZ!
/* This is what the hoisted code effectively looks like:
 * function teaTime() {
 *   console.log(snack);
 * }
 *
 * let snack;  // no defined value assigned
 *
 * teaTime();
 * snack = 'scones'
 */

// Example 30

teaTime();
var snack = "scones";

function teaTime() {
  console.log(snack);
}

// In this case the function declaration is hoisted above the function call; it tries to log snack
// and looks to the global scope for resolution (after the local scope didn't turn up anything). The
// var declaration occurs in the global scope and is hoisted above the function call, so it is
// accessible. It is however, set to undefined (as is the case with var declarations) so this is
// what is logged.
/* This is what the hoisted code effectively looks like:
 * function teaTime() {
 *   console.log(snack);
 * }
 *
 * var snack // assigned value of undefined
 *
 * teaTime();
 * snack = 'scones'
 */

// Example 31

var snack = "scones";
teaTime();

function teaTime() {
  console.log(snack);
}

// This will log 'scones' to the console. In this setup, the function and variable are both hoisted
// but the reassignment of snack falls above the call to teaTime(), so the assigned value is logged.

// Example 32

teaTime();

var teaTime = "shortcake";

function teaTime() {
  console.log("custard tart");
}

// This will log 'custard tart' to the console. The function definition of teaTime is hoisted above
// the function call. Since the variable teaTime is already defined the redundant var declaration
// is dropped. This leaves the reassignment of teaTime to fall after the function invocation, so the
// function is invoked.
/* The hoisted code effectively looks like so:
 *
 * function teatTime() {
 *   console.log('custard tart');
 * }
 *
 * var teaTime // redundant/dropped
 *
 * teaTime();
 * teatime = 'shortcake'
 */

// Example 33

teaTime();
var teaTime = "shortcake";

teaTime();
function teaTime() {
  console.log("custard tart");
}

// This will log 'custard tart' and then raise an error: 'teaTime is not a function'. This execution
// unfolds exactly like the previous example, except this time there is a second function call to
// teaTime(). The second function call however, is executed after the variable teaTime has been
// reassigned from a function to a string value.
/* The hoisted code effectively looks like so:
 * function teaTime() {
 *   console.log('custard tart');
 * }
 *
 * teaTime(); // logs 'custard tart'
 *
 * teaTime = 'shortcake';
 * teaTime(); // cannot call a function on a variable that isn't assigned to one
 */

// Example 34

var teaTime = "shortcake";
teaTime();

function teaTime() {
  console.log("custard tart");
}

// Just as the previous example the variable teaTime is first assigned to a function, then reassigned
// to a string value. We attempt to call a function on a variable that only has a string value.
/* The hoisted code effectively looks like so:
 * function teaTime() {
 *   console.log('custard tart');
 * }
 *
 * teaTime = 'shortcake';
 *
 * teaTime(); // cannot call a function on a variable that isn't assigned to one
 */

// **Closures**

// Example 35

let beans = ["adzuki", "soy", "lima"];

function showBeans() {
  console.log(beans);
}

showBeans();

beans = ["pinto ", "kidney"];
showBeans();

// This will log [ 'adzuki', 'soy', 'lima' ] and [ 'pinto ', 'kidney' ]. This is a basic example
// that demonstrates how closures work; they contain pointers to the variables that are in scope
// when a function is defined. So, when changes are made to the values of the variables that are
// being pointed to, they are tracked in the function as well.
/* The hoisted code effectively looks like so:
 * function showBeans() {
 * console.log(beans);
 * }
 *
 * let beans;
 * beans = ['adzuki', 'soy', 'lima'];
 *
 * showBeans();
 *
 * beans = ['pinto ', 'kidney'];
 * showBeans();
 */

// Example 36

let beans = "lentil";

function showBeans() {
  console.log(beans);
}

showBeans();

beans = "meowmeow";
showBeans();

// The values 'lentil' and 'meowmeow' will be logged. This example follows the same logic as the
// previous example: when a closure is created, the closure contains pointers to the variables that
// are in scope, not the values themselves. Changes and reassignments to/of the variables that are in
// scope are reflected in the function, even if the values in the variables are primitives.

/* The hoisted code effectively looks like so:
 * function showBeans() {
 * console.log(beans);
 * }
 *
 * let beans;
 * beans = 'lentil';
 *
 * showBeans();
 *
 * beans = 'meowmeow';
 * showBeans();
 */

// Example 37

function shoutBeans() {
  let beans = "green";

  return function () {
    console.log(beans.toUpperCase());
  };
}

let loudBeans = shoutBeans();

loudBeans();

// This will log 'GREEN' to the console. In this example we have an anonymous function whose point
// of definition falls within another function. The closure that is created for this anonymous
// function has a pointer to the variable beans. The function shoutBeans() returns the anonymous
// function, which logs the value of beans to the console. We declare a new variable loudBeans and
// assign it to the return value of shoutBeans(), which is effectively the return of the anonymous
// function. In this roundabout way, when we call loudBeans(), we can call the anonymous function
// from an area that is out of its lexical scope. However, the closure remains intact and the
// variable beans remains accessible.
/* The hoisted code effectively looks like so:
 * function shoutBeans() {
 *   let beans
 *   beans = 'green'
 *
 *   return function() {
 *     console.log(beans.toUpperCase());
 *   }
 * }
 *
 * let loudBeans
 * loudBeans = shoutBeans();
 *
 * loudBeans();
 */

// Example 38

function shoutBeans() {
  let beans = "green";

  return function () {
    console.log(beans.toUpperCase());
  };
}

let loudBeans = shoutBeans();

beans = "chickpea";
loudBeans();

// In this example, 'GREEN' will be logged to the console. The trick here is that when beans is
// 'reassigned' on line 11, it is not actually reassignment. The variable doesn't exist in the global// lexical scope at that point, so a new variable named beans is actually declared at that point and
// assigned to the value 'chickpea'. The closure for the anonymous function (that is returned by the
// call to loudBeans() ), has a set lexical scope based on the definition of the function, so it
// only 'sees' the variable beans that is declared inside shoutBeans on line 2.
/* The hoisted code effectively looks like so:
 * function shoutBeans() {
 *   let beans;
 *   beans = 'green';  // This is the only beans variable that is in scope for the below function!
 *
 *   return function() {
 *     console.log(beans.toUpperCase());
 *   }
 * }
 *
 * let loudBeans;
 * loudBeans = shoutBeans();
 *
 * beans = 'chickpea';  // this is really a declaration of a new global scope variable!
 * loudBeans();
 */

// Example 39

let beans = "peanut";

function shoutBeans() {
  let beans = "green";

  return function () {
    console.log(beans.toUpperCase());
  };
}

let loudBeans = shoutBeans();

loudBeans();

// This will log 'GREEN' to the console. The same closure scopes apply in this example as the
// previous. This time however, there is a globally scoped variable declared before the function,
// which should put it in scope of the anonymous function, right? Remember that there is a different
// scope within the function and while the inner scope of the function can reach out to access a
// variable, it can also create an inner scoped variable of the same name that it will look to first.
/* The hoisted code effectively looks like so:
 * function shoutBeans() {
 *   let beans
 *   beans = 'green'  // This is the only beans variable that is in scope for the below function!
 *
 *   return function() {
 *     console.log(beans.toUpperCase());
 *   }
 * }
 * let beans;
 * beans = 'peanut';
 *
 * let loudBeans;
 * loudBeans = shoutBeans();
 *
 * beans = 'chickpea';  // this is really a declaration of a new global scope variable!
 * loudBeans();
 */

// Example 40

let beans = "peanut";

function shoutBeans() {
  let beans = "green";

  return function () {
    let beans = "red";
    console.log(beans.toUpperCase());
  };
}

let loudBeans = shoutBeans();

loudBeans();

// This will log 'RED' to the console. You might think that there would be a syntax error for
// identifier beans being taken, but remember the scoping rules for functions. Each function creates
// its own inner scope wherein we can create a new locally scoped variable, even if that variable has
// been declared in an outer scope.

/* The hoisted code effectively looks like so:
 * function shoutBeans() {
 *   let beans;   // This can be declared within the scope of shoutBeans
 *   beans = 'green';
 *
 *   return function() {
 *   let beans;  // This can be declared within the scope of the anonymous function
 *   beans = 'red';
 *     console.log(beans.toUpperCase());
 *   }
 * }
 * let beans;  // This can be declared in the global scope outside of both functions
 * beans = 'peanut';
 *
 * let loudBeans;
 * loudBeans = shoutBeans();
 *
 * loudBeans();
 */

// Example 41

let beans = "peanut";

function shoutBeans() {
  return function () {
    beans = "jack";
    console.log(beans.toUpperCase());
  };
}

let loudBeans = shoutBeans();
loudBeans();
console.log(beans);

// This will log 'JACK' and 'jack' to the console; the closure of the nested anonymous function
// includes the variables that are within scope of the shoutBeans() function, which includes the
// global scope. This means that the inner function can access the globally scoped variable and
// reassign it, which we can see from the second console log.
/* The hoisted code effectively looks like so:
 * function shoutBeans() {
 *   return function() {
 *   beans = 'jack'; // The closure of this nested function has access to the global scope through
 *                   // the function in which it is nested.
 *     console.log(beans.toUpperCase());
 *   }
 * }
 * let beans;
 * beans = 'peanut';
 *
 * let loudBeans;
 * loudBeans = shoutBeans();
 *
 * loudBeans();
 * console.log(beans);
 */

// Example 42

function shoutBeans() {
  return function () {
    beans = "moth";
    console.log(beans.toUpperCase());
  };
}

let loudBeans = shoutBeans();
loudBeans();
console.log(beans);

// This will log 'MOTH' and 'moth' to the console; in this instance, there is no outer scoped
// variable defined so the reassignment expression on line 4 is actually a declaration to the
// global scope. This is why we can run the final console log with the variable beans without
// raising an error.

/* The hoisted code effectively looks like so:
 * function shoutBeans() {
 *   return function() {
 *   beans = 'jack'; // The closure of this nested function has access to the global scope through
 *                   // the function in which it is nested.
 *     console.log(beans.toUpperCase());
 *   }
 * }
 * let beans;
 * beans = 'peanut';
 *
 * let loudBeans;
 * loudBeans = shoutBeans();
 *
 * loudBeans();
 * console.log(beans);
 */

// Example 43

function buildTaco(firstFilling, secondFilling) {
  return `Taco with ${firstFilling} and ${secondFilling}`;
}

function makeMeatTaco(meatFilling) {
  return function (otherFilling) {
    return buildTaco(meatFilling, otherFilling);
  };
}

let chickenTaco = makeMeatTaco("chicken");

console.log(chickenTaco("grilled onions"));
console.log(chickenTaco("salsa verde"));

// This will log :
// 'Taco with chicken and grilled onions'
// 'Taco with chicken and salsa verde'
// to the console. This is an example of a partial function application; a method that allows us to
// define a function that can call another function with less than the expected arguments. In this
// case, buildTaco has two parameters, but it is called within makeMeatTaco, which only has one
// parameter.
// This works in our case through the function chickenTaco, whose definition calls makeMeatTaco with
// one argument passed in, 'chicken'. Then when we call chickenTaco we pass in the other argument
// that is required for buildTaco.
