/**
 * Palindrome String
 */

const str = "malayala";
function getReversedStr(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const result = getReversedStr(str);
if (result === str) {
  console.log("String is a Palindrome");
} else {
  console.log("String is not a Palindrome");
}

// const reversedStr = str.split("").reverse().join("")

// if (str === reversedStr){
//     console.log("String is a Palindrome");
// }else{
//     console.log("String is not a Palindrome");
// }
