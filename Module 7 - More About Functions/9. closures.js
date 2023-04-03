/**
 * A closure is the combination of a function bundled together with references to its lexical environment.
 *
 * In other words, A closure is a function that remembers its outer variables and can access them
 */

function x() {
  var a = 5;
  function y() {
    console.log(a);
    var a = 7;
  }
  y();
}

x();
