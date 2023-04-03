/**
 * REST parameter --> ...rest/...args
 */

function calculateTotal(...rest) {
  let total = 0;
  for (let value of rest) {
    total += value;
  }
  console.log(total);
}

calculateTotal(4, 5, 6, 7, 8, 9, 1, 2, 3, 3);
