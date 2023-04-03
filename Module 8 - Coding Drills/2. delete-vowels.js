/**
 * WAP to delete all the vowels from a string.
 */

const string = "The quick browm fox jumps over the lazy dog";

function getStrWithNoVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let char of str) {
    if (!vowels.includes(char.toLowerCase())) {
      result += char;
    }
  }
  return result;
}

const updatedStr = getStrWithNoVowels(string);
console.log(updatedStr);
