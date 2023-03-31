/**
 * Arrays ⚡⚡ --> Non-Primitive Data Type
 */

let s1 = "Prakash";
let s2 = "Ashish";
let s3 = "Riya";
let s4 = "Adarsh";

let studentsName = ["Prakash", "Adarsh", "Riya", "Ashish", "Jay", "Piyush", "Amit", "Kirti", "Sadaf", "Chinmoy"];

let arrLength = studentsName.length;

for (let i=0; i<arrLength; i++){
    console.log(studentsName[i]) // studentsName[10]
}

/** for let of */

// for (let name of studentsName){
//     console.log(name);
// }

/** for let in */

// for (let index in studentsName){
//     console.log(studentsName[index])
// }