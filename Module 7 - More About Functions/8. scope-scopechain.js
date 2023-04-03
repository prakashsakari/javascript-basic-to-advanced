/**
 * Scope and Scope Chain
 */

let a = 3;

function x() {
  console.log({ a });
  let b = 5;
  function y() {
    // inner function - inside function x
    let c = 7;
    console.log({ b });
    function z() {
      console.log({ c });
    }
    z();
  }
  y();
}

x();
