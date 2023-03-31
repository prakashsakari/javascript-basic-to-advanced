/**
 * split and join 🔥⚡
 * madam --> madam -->palindrome string
 */


const inputStr = "madam";
const arrOfChar = inputStr.split("");
arrOfChar.reverse();
const reversedStr = arrOfChar.join("");
console.log(reversedStr);
