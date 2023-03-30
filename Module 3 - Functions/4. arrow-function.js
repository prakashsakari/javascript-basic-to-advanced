/**
 * Arrow Function => () 🤗
 */

const calculateSum = function(x, y){
    return x + y;
}


// const calculateAddition = (x, y) => {
//     return x + y
// }

const calculateAddition = (x, y) => x + y;

const calculateSumXGreaterY = (x, y) => {
    if (x > y){
        return x + y
    }else{
        return x - y
    }
}

function TotalXandY (x, y){
    if (x > y){
        return x + y
    }else{
        return x - y
    }
}

// const output = cond ? true action : false action)

const Sum = (x, y) => x > y ? x + y : x - y;

const output = Sum(150, 17);
console.log(output);

// console.log(calculateSum(12, 4));


// console.log(calculateAddition(22, 20));

// console.log(calculateSumXGreaterY(11, 12));