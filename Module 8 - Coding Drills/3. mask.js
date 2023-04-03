/**
 * mask the last 4 characters with #
 */

const str = "123456789987654321"; // 12345678998765####;

const maskChar = "#".repeat(4);
const result = str.slice(0, str.length - 4) + maskChar;
console.log(result);
