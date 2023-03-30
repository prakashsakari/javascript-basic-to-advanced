/**
 * Logical Operator with truthy and falsy values
 * 1. OR || ⚡ 
 * 2. AND && 🔥
 */

/**
 * Truthy
 * Falsy Values - "", 0, null, undefined
 */


// const firstName = null;
// const nickName = "";

// const userName = firstName || nickName || "HiddenGeek"; // Short Circuiting
// console.log(`Name - ${userName}`)

// let a = 12;
// let b;

// console.log(a + (b || 0));




// const firstName = "Prakash";
// const nickName = "Anna";

// const userName = firstName && nickName && "HiddenGeek";
// console.log(`Name - ${userName}`);


















/**
 * 1. What will be the result of the ORed operation
    * a. console.log(3 || 2 || 1)
    * b. console.log("" || 0 || 2)
    * c. console.log("" || 0 || undefined)
    * d. console.log("" || "null" || 2)
 *
 * 2. What will be the output of the ANDed operation
 * a. console.log(3 && 2 && 1)
 * b. console.log("" && 0 && 2)
 * c. console.log("undefined" && "null" && "")
 */

// console.log(3 || 2 || 1) // true || true || true
console.log("undefined" && "key" && "null"); // true && true && true