/**
 * Exercise 🚀🤡
 * Sum of all numbers from 1-20 --> 0+1+2+3+4+......+20
 * total = 0 + 1 ==> 1 --> total = 1
 * total + 2 --> 1 + 2 --> 3 --> total
 * total + 3 --> 3 + 3 --> 6 --> total
 */

function calculateSum(min, max){
    let total = 0;
    for (let i=min; i<=max; i++){
        total =  total + i;
    }
    return total
}

const result = calculateSum(1, 20);
console.log(result);

const output = calculateSum(20, 100);
console.log(output);
