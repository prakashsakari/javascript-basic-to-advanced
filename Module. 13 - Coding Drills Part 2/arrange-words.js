/**
 * Q1: Arrange the words in the sentence in ascending order of their length
 * Input - gfg is a comp science learning platform
 * Output - a is gfg comp science learning platform
 */

const str = "gfg is a comp science learning platform";

function sortTextByWordLength(str) {
  let arrOfWords = str.split(" ");
  arrOfWords.sort((a, b) => a.length - b.length);
  return arrOfWords.join(" ");
}

const resutl = sortTextByWordLength(str);
console.log(resutl);
