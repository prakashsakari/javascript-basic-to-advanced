/** Star pattern */

const numOfRows = 5;
for (let i = 0; i <= numOfRows; i++) {
  console.log("* ".repeat(i));
}

/** Program that reads string and count number of characters present in the string */
const inputString = "I am a GFGian";
let count = 0;
for (let i = 0; i < inputString.length; i++) {
  count++;
}
console.log(count);

/**  A program that reads 3 string and print the smallest string */
const firstString = "apple";
const secondString = "banana";
const thirdString = "watermelon";

if (
  firstString.length > secondString.length &&
  firstString.length > thirdString.length
) {
  console.log(firstString + " is the largest string");
} else if (
  secondString.length > firstString.length &&
  secondString.length > thirdString.length
) {
  console.log(secondString + " is the largest string");
} else if (
  thirdString.length > firstString.length &&
  thirdString.length > secondString.length
) {
  console.log(thirdString + " is the largest string");
} else {
  console.log("Found 2 or more of the same length");
}

/** A program that reads the string and counts numbers of vowels in a string */

const inputString1 = "I am a GFGian";
let count1 = 0;
for (let i = 0; i < inputString1.length; i++) {
  if ("aeiou".includes(inputString1[i].toLowerCase())) {
    count1++;
  }
}
console.log("Number of vowels =", count1);

const char = ["a", "b", "c", "d", "e"];

const inputString2 = "I am a GFGian";
// const inputString2 = "The quick brown fox jumps over the lazy dog"
const anagramString = (text) => {
  for (let i = 0; i < inputString2.length; i++) {
    if (
      !"qwertyuioplkjhgfdsazxcvbnm ".includes(inputString2[i].toLowerCase())
    ) {
      return false;
    }
  }
  return true;
};

const flag = anagramString(inputString);
if (flag) {
  console.log("string is anagram");
} else {
  console.log("string is not anagram");
}
