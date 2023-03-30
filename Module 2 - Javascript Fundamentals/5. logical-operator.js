/**
 * Logical Operator with Conditional Statement
 * 1. OR || ⚡ --> if atleast one condition us true then || will return true otherwise || will return false
 * 2. AND && 🔥 --> all the conditions must be true then && will return true otherwise && will return false
 * 3. NOT ! ⛄
 * 4. NULLISH COALESCING ?? 🌈
 */

const physics = 90;
const maths = 84;
const chemistry = 83;
const biology = 96;

if (physics > 85 && maths > 85 && chemistry > 87){
    console.log("You are eligible for IIT......")
}else{
    console.log("You are not eligible for IIT...")
}

if (physics > 90 || maths > 85 || chemistry > 89){
    console.log("You are eligible for Engg....")
}else{
    console.log("You are not eligible for Enggg...")
}

const isStudentEligible = false;

if (!isStudentEligible){
    console.log(!isStudentEligible);
    console.log("You are eligible");
}else{
    console.log("You are not eligible");
}


