/**
 * indexOf Method🔥
 */

// function findCharacter (text, char) {
//     const index = text.indexOf(char)
//     if (index === -1){
//         return "Character not found";
//     }else{
//         return "Character found in the string";
//     }
// }

const findCharacter = (text, char) => text.indexOf(char) === -1 ? "char not found" : "char found";

const result = findCharacter("prakash@xyz.com", "#");
console.log(result)