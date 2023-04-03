/**
 * Generate Secret Code from a given string
 * Input --> prakash
 * Encode By Chars --> 2
 * Output --> rtcmcuj
 * ASCII Table
 */

const inputStr = "prakash";
const shiftByPos = 4;

const getEncodedStr = (str, shiftByPos) => {
    let encodedStr = "";
    let currentPos = 0, newPos = 0;
    for (let i=0; i<str.length; i++){
        currentPos = str.charCodeAt(i);
        newPos = currentPos + shiftByPos;
        encodedStr += String.fromCharCode(newPos);
    }
    return encodedStr;
}

console.log(getEncodedStr(inputStr, shiftByPos));