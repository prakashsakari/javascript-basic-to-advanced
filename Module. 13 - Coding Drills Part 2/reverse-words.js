/**
 * Q2: Reverse words of a string without changing their order
 *
 * Input: react is a library
 * Outut: tcaer si a yrarbil
 */

const str = "react is a library";

function reverseWordsOfStr(str) {
  let arrOfWords = str.split(" ");
  let reversedArrOfWord = arrOfWords.map((word) =>
    word.split("").reverse().join("")
  );
  return reversedArrOfWord.join(" ");
}

const result = reverseWordsOfStr(str);
console.log(result);
