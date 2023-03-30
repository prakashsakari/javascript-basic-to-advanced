/**
 * Star Pattern
 *  *
 *  * *
 *  * * *
 *  * * * *
 *  * * * * *
 */

// const symbol = "* ";

// for (let i=1; i<=5; i++){
//     console.log(symbol.repeat(i))
// }

// // i-- --> i = i - 1

// for (let i=5; i>=1; i--){
//     console.log(symbol.repeat(i))
// }


// let userName = "Prakash Narsingrao Sakari Padma";
// let count = 0;
// for (let i=0; i<userName.length; i++){
//     count++; // count = count + 1
// }
// console.log(`Number of character in the string is ${count}`);



/**
 * Given a range of numbers from 1 to 101, find all the even numbers
 * 2, 4, 6, 8,........
 */

let remainder;

for (let i=1; i<=101; i++){
    remainder = i % 2;
    if (remainder === 0){
        console.log(`${i} is an even number`);
    }else{
        console.log(`${i} is an odd number`);
    }
}


const inputString = "hello, i love GFG...";

const vowels = "aeiou";

for (let i=0; i<inputString.length; i++){
    if (vowels.includes(inputString[i])){
        console.log(`${inputString[i]} is a vowel`);
    }else{
        console.log(`${inputString[i]} is not a vowel`);
    }
}

