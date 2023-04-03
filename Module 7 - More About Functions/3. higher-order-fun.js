/**
 * Higher Order Function:
 * 
 * A function that accepts another function as an argument or returns a function or does both is called an H.O.F
 */

// First Class Function
// function wrapper(){
//     return "welcome to gfg"
// }


// // Higher Order Function
// function greetMessage(wrapper){
//     console.log("Prakash", wrapper())
// }

// greetMessage(wrapper);


// // HOF
// function displayMessage(){
//     return function (){
//         console.log("hello from the inner function")
//     }
// }

// const output = displayMessage();
// output();



// const arr = [1, 2, 3, 4, 5];

// function sqaureOfNumber(arr){
//     let sqauredNumbers = [];
//     for (let number of arr){
//         sqauredNumbers.push(number ** 2)
//     }
//     return sqauredNumbers;
// }

// function cubeOfNumber(arr){
//     let cubedNumbers = [];
//     for (let number of arr){
//         cubedNumbers.push(number ** 3)
//     }
//     return cubedNumbers;
// }

// const output = sqaureOfNumber(arr);
// console.log(output);

// const result = cubeOfNumber(arr);
// console.log(result);

const arr = [1, 2, 3, 4, 5];

function sqaure(number){
    return number ** 2;
}

function cube(number){
    return number ** 3;
}

function fourthPower(number){
    return number ** 4;
}

function calculatePower(wrapper, arr){
    let tempArr = [];
    for (let number of arr){
        tempArr.push(wrapper(number))
    }
    return tempArr;
}

const sqaureOfNumbers = calculatePower(sqaure, arr);
console.log(sqaureOfNumbers);

const cubeOfNumber = calculatePower(cube, arr);
console.log(cubeOfNumber);

const fourthPowerOfNum = calculatePower(fourthPower, arr);
console.log(fourthPowerOfNum);