/**
 * Count frequency of all number in an array, return the
 * numbers with the max frequency, if 2 or more numbers have
 * the same max freq then return the highest number
 */

const arr = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5, 5];

function getNumberWithMaxFreq(arr) {
  let maxCount = 0;
  let maxKey = 0;
  let arrOfMaxFreqKeys = [];

  // Get the frequency of all number
  const numberFreqObj = arr.reduce(
    (acc, cur) =>
      cur in acc ? { ...acc, [cur]: acc[cur] + 1 } : { ...acc, [cur]: 1 },
    {}
  );

  //get the max freq
  const arrOfKeyValue = Object.entries(numberFreqObj);
  for (let [, value] of arrOfKeyValue) {
    if (maxCount < value) {
      maxCount = value;
    }
  }

  // get the numbers with max freq
  for (let [key, value] of arrOfKeyValue) {
    if (value === maxCount) {
      arrOfMaxFreqKeys = [...arrOfMaxFreqKeys, key];
    }
  }

  // get the key with the max freq and max number
  for (let key of arrOfMaxFreqKeys) {
    if (maxKey < key) {
      maxKey = key;
    }
  }

  return maxKey;
}

const result = getNumberWithMaxFreq(arr);
console.log(result);
